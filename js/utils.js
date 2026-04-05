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
    if (typeof statsTrackLevel === 'function') statsTrackLevel();
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
  var prevPetri = state.petri;
  state.petri = clamp(state.petri + delta, 0, 100);
  if (delta > 0) {
    sfx.petri();
    if (typeof statsTrackPetriEvent === 'function') statsTrackPetriEvent();
    // Stage threshold warnings (5-stage system: 20/40/60/80)
    if (prevPetri < 20 && state.petri >= 20) {
      notify(L('▪ 石化 Lv.1 — 四肢僵硬，力量·敏捷 -1', '▪ Petri Lv.1 — Limbs stiffen, STR·AGI -1'));
      state.mood = 'petri';
    }
    if (prevPetri < 40 && state.petri >= 40) {
      notify(L('▪▪ 石化 Lv.2 — 紋路蔓延，力量·敏捷 -2，意志 -1，HP上限 -10%', '▪▪ Petri Lv.2 — Stone spreads, STR·AGI -2, WIL -1, Max HP -10%'));
      state.mood = 'petri';
    }
    if (prevPetri < 60 && state.petri >= 60) {
      notify(L('▪▪▪ 石化 Lv.3 — 半身石化，全屬性大幅下降，HP上限 -20%', '▪▪▪ Petri Lv.3 — Half petrified, severe stat loss, Max HP -20%'));
      state.mood = 'danger';
    }
    if (prevPetri < 80 && state.petri >= 80) {
      notify(L('▪▪▪▪ 石化 Lv.4 — 瀕臨石化！全屬性崩潰，HP上限 -30%', '▪▪▪▪ Petri Lv.4 — Near death! Stats collapse, Max HP -30%'));
      state.mood = 'danger';
    }
  }
  // Apply max HP reduction from petri
  var pen = petriPenalty();
  var baseMax = getBaseMaxHp();
  if (pen.maxHpMult < 1.0) {
    var newMax = Math.floor(baseMax * pen.maxHpMult);
    if (state.maxHp > newMax) {
      state.maxHp = newMax;
      state.hp = Math.min(state.hp, state.maxHp);
    }
  }
  if (state.petri >= 100) {
    die(L('你的身體已完全化為冰冷的石頭……', 'Your body has completely turned to cold stone...'));
    return true; // dead
  }
  // Restore max HP when petri decreases below threshold
  if (delta < 0) {
    var allowedMax = Math.floor(baseMax * pen.maxHpMult);
    if (state.maxHp < allowedMax) state.maxHp = allowedMax;
  }
  return false;
}

function changeStat(stat, delta) {
  state[stat] = Math.max(1, state[stat] + delta);
}

// ── Petrification Penalty System (5 Stages) ──
// Stage 0: 0-19%  — no penalty
// Stage 1: 20-39% — mild stiffness
// Stage 2: 40-59% — spreading stone
// Stage 3: 60-79% — heavy petri
// Stage 4: 80-99% — near death
// Stage 5: 100%   — full petri (death)
// Returns { stage, str, agi, wil, maxHpMult, label, labelEn }
function petriPenalty() {
  var p = state.petri;
  if (p >= 80) return { stage: 4, str: -4, agi: -4, wil: -3, maxHpMult: 0.7, label: '瀕臨石化', labelEn: 'Critical Petri' };
  if (p >= 60) return { stage: 3, str: -3, agi: -3, wil: -2, maxHpMult: 0.8, label: '重度石化', labelEn: 'Severe Petri' };
  if (p >= 40) return { stage: 2, str: -2, agi: -2, wil: -1, maxHpMult: 0.9, label: '中度石化', labelEn: 'Moderate Petri' };
  if (p >= 20) return { stage: 1, str: -1, agi: -1, wil: 0,  maxHpMult: 1.0, label: '輕度石化', labelEn: 'Mild Petri' };
  return { stage: 0, str: 0, agi: 0, wil: 0, maxHpMult: 1.0, label: '', labelEn: '' };
}

// Get effective stat value (base + petri penalty, min 1)
function effectiveStat(stat) {
  var pen = petriPenalty();
  return Math.max(1, state[stat] + (pen[stat] || 0));
}

// Base max HP before petri reduction (accounts for NG+ and level)
function getBaseMaxHp() {
  var base = state.flags.ngPlus ? 60 : 50;
  base += (state.level - 1) * 5;
  return base;
}

// Scale enemy stats for NG+ (returns shallow copy with scaled combat stats)
function scaleEnemyNgPlus(enemy) {
  if (!state.flags.ngPlus) return enemy;
  var scaled = {};
  for (var k in enemy) { if (enemy.hasOwnProperty(k)) scaled[k] = enemy[k]; }
  scaled.hp = Math.floor(enemy.hp * 1.5);
  scaled.atkMin = Math.floor(enemy.atkMin * 1.5);
  scaled.atkMax = Math.floor(enemy.atkMax * 1.5);
  scaled.petriDmg = Math.floor(enemy.petriDmg * 1.5);
  scaled.xp = Math.floor(enemy.xp * 1.25);
  return scaled;
}

// ── Stat Check System ──
// Returns 'crit' | 'pass' | 'fail'
function statCheck(stat, dc) {
  var roll = rng(1, 6);
  var pen = petriPenalty();
  var eff = Math.max(1, state[stat] + (pen[stat] || 0));
  var total = eff + roll;
  var result = total >= dc + 3 ? 'crit' : total >= dc ? 'pass' : 'fail';
  var statNames = { str: ['力量', 'STR'], agi: ['敏捷', 'AGI'], wil: ['意志', 'WIL'] };
  var name = state.lang === 'en' ? statNames[stat][1] : statNames[stat][0];
  var penStr = (pen[stat] && pen[stat] < 0) ? (' ' + pen[stat]) : '';
  var sym = result !== 'fail' ? ' >= ' : ' < ';
  var tag = result === 'crit' ? (state.lang === 'en' ? 'CRITICAL!' : '大成功！') : result === 'pass' ? (state.lang === 'en' ? 'Passed!' : '成功！') : (state.lang === 'en' ? 'Failed...' : '失敗……');
  if (result !== 'fail') sfx.pass(); else sfx.fail();
  notify(name + ' ' + state[stat] + penStr + ' + ' + roll + ' = ' + total + sym + dc + '  ' + tag);
  return result;
}

// Calculate success rate for UI display (percentage)
function checkRate(stat, dc) {
  var eff = effectiveStat(stat);
  var s = 0;
  for (var r = 1; r <= 6; r++) { if (eff + r >= dc) s++; }
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
