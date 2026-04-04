// ══ Utility functions ══

// ═══════════════════════════════════════════════════
//  Utility
// ═══════════════════════════════════════════════════
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function rng(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function notify(msg) {
  $notif.textContent = msg;
  $notif.classList.add('show');
  setTimeout(() => $notif.classList.remove('show'), 2000);
}

function hasItem(name) { return state.inventory.includes(name); }

function addItem(name) {
  if (!hasItem(name)) {
    state.inventory.push(name);
    sfx.item();
    notify(L('獲得物品：', 'Acquired: ') + name);
  }
}

function removeItem(name) {
  const i = state.inventory.indexOf(name);
  if (i >= 0) state.inventory.splice(i, 1);
}

// ── XP & Level System ──
function xpForLevel(lv) { return Math.floor(20 * Math.pow(1.4, lv - 1)); }

var pendingLevelUps = 0;

function gainXp(amount) {
  state.xp += amount;
  // Flash the XP bar
  $xpBar.classList.add('xp-flash');
  setTimeout(function() { $xpBar.classList.remove('xp-flash'); }, 600);
  // Check level up
  while (state.xp >= state.xpToNext) {
    state.xp -= state.xpToNext;
    state.level++;
    state.xpToNext = xpForLevel(state.level);
    state.maxHp += 5;
    state.hp = Math.min(state.hp + 5, state.maxHp);
    pendingLevelUps++;
    sfx.levelUp();
    notify(L('等級提升！ Lv.' + state.level + '  HP上限 +5',
             'Level Up! Lv.' + state.level + '  Max HP +5'));
  }
  renderStatus();
  if (pendingLevelUps > 0) showLevelUpChoice();
}

function showLevelUpChoice() {
  var $ov = document.getElementById('levelup-overlay');
  var en = state.lang === 'en';
  document.getElementById('levelup-title').textContent = en ? 'LEVEL UP!' : '等 級 提 升 ！';
  document.getElementById('levelup-hint').textContent = en
    ? 'Choose a stat to increase (+1):'
    : '選擇一項屬性提升（+1）：';
  document.getElementById('levelup-str-name').textContent = en ? 'STR' : '力量';
  document.getElementById('levelup-agi-name').textContent = en ? 'AGI' : '敏捷';
  document.getElementById('levelup-wil-name').textContent = en ? 'WIL' : '意志';
  document.getElementById('levelup-str-val').textContent = state.str + ' → ' + (state.str + 1);
  document.getElementById('levelup-agi-val').textContent = state.agi + ' → ' + (state.agi + 1);
  document.getElementById('levelup-wil-val').textContent = state.wil + ' → ' + (state.wil + 1);
  document.getElementById('levelup-str-desc').textContent = en ? 'Attack · Climb' : '攻擊·攀爬';
  document.getElementById('levelup-agi-desc').textContent = en ? 'Dodge · Stealth' : '閃避·潛行';
  document.getElementById('levelup-wil-desc').textContent = en ? 'Anti-Petri · Mind' : '抗石化·精神';
  $ov.classList.add('active');
}

(function() {
  document.querySelectorAll('.levelup-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var stat = btn.dataset.stat;
      changeStat(stat, 1);
      pendingLevelUps--;
      var statNames = { str: ['力量', 'STR'], agi: ['敏捷', 'AGI'], wil: ['意志', 'WIL'] };
      notify((state.lang === 'en' ? statNames[stat][1] : statNames[stat][0]) + ' +1');
      renderStatus();
      if (pendingLevelUps > 0) {
        showLevelUpChoice();
      } else {
        document.getElementById('levelup-overlay').classList.remove('active');
      }
    });
  });
})();

function changeHp(delta) {
  state.hp = clamp(state.hp + delta, 0, state.maxHp);
  if (delta < 0) sfx.hurt();
  if (state.hp <= 0) {
    die(L('你的生命力耗盡，倒在了冰冷的石地上……', 'Your life force fades... You collapse on the cold stone floor...'));
    return true; // dead
  }
  return false;
}

function changePetri(delta) {
  state.petri = clamp(state.petri + delta, 0, 100);
  if (delta > 0) sfx.petri();
  if (state.petri >= 100) {
    die(L('你的身體已完全化為冰冷的石頭……', 'Your body has completely turned to cold stone...'));
    return true; // dead
  }
  return false;
}

function changeStat(stat, delta) {
  state[stat] = Math.max(1, state[stat] + delta);
}

// ── Stat Check System ──
// Returns 'crit' | 'pass' | 'fail'
function statCheck(stat, dc) {
  var roll = rng(1, 6);
  var total = state[stat] + roll;
  var result = total >= dc + 3 ? 'crit' : total >= dc ? 'pass' : 'fail';
  var statNames = { str: ['力量', 'STR'], agi: ['敏捷', 'AGI'], wil: ['意志', 'WIL'] };
  var name = state.lang === 'en' ? statNames[stat][1] : statNames[stat][0];
  var sym = result !== 'fail' ? ' >= ' : ' < ';
  var tag = result === 'crit' ? (state.lang === 'en' ? 'CRITICAL!' : '大成功！') : result === 'pass' ? (state.lang === 'en' ? 'Passed!' : '成功！') : (state.lang === 'en' ? 'Failed...' : '失敗……');
  if (result !== 'fail') sfx.pass(); else sfx.fail();
  notify(name + ' ' + state[stat] + ' + ' + roll + ' = ' + total + sym + dc + '  ' + tag);
  return result;
}

// Calculate success rate for UI display (percentage)
function checkRate(stat, dc) {
  var s = 0;
  for (var r = 1; r <= 6; r++) { if (state[stat] + r >= dc) s++; }
  return Math.round(s / 6 * 100);
}

// Format choice text with stat check hint
function checkLabel(text, textEn, stat, dc) {
  var rate = checkRate(stat, dc);
  var statNames = { str: ['力量', 'STR'], agi: ['敏捷', 'AGI'], wil: ['意志', 'WIL'] };
  var name = state.lang === 'en' ? statNames[stat][1] : statNames[stat][0];
  var label = state.lang === 'en' ? textEn : text;
  return label + ' [' + name + ' DC' + dc + ' — ' + rate + '%]';
}
