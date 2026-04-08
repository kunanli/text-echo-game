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
    if (typeof tryAutoEquip === 'function') tryAutoEquip(name);
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

// Append a sensory description line to the story log when crossing petri thresholds
function _petriSensory(msg) {
  if (!$story) return;
  var line = document.createElement('div');
  line.className = 'log-line petri-sensory';
  var tagEl = document.createElement('span');
  tagEl.className = 'log-tag tag-petri';
  tagEl.textContent = '[' + L('身體', 'Body') + ']';
  line.appendChild(tagEl);
  var txt = document.createElement('span');
  txt.textContent = ' ' + msg;
  line.appendChild(txt);
  $story.appendChild(line);
  $story.scrollTop = $story.scrollHeight;
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
      _petriSensory(L(
        '你的指尖開始發灰，關節在每次彎曲時隱隱作痛。指甲的邊緣浮現細小的石紋，像大理石的脈絡。',
        'Your fingertips turn grey, joints aching with every bend. Tiny stone veins creep along your nail beds like marble grain.'));
      state.mood = 'petri';
    }
    if (prevPetri < 40 && state.petri >= 40) {
      notify(L('▪▪ 石化 Lv.2 — 紋路蔓延，力量·敏捷 -2，意志 -1，HP上限 -10%', '▪▪ Petri Lv.2 — Stone spreads, STR·AGI -2, WIL -1, Max HP -10%'));
      _petriSensory(L(
        '小臂上出現了蔓延的石紋。彎曲手肘時會聽到輕微的喀啦聲——像踩碎乾枯的樹枝。你試著握拳，發現速度明顯變慢了。',
        'Stone veins crawl up your forearms. Your elbows crackle when you bend them — like snapping dry twigs. You try to make a fist and notice it\'s slower than before.'));
      state.mood = 'petri';
    }
    if (prevPetri < 60 && state.petri >= 60) {
      notify(L('▪▪▪ 石化 Lv.3 — 半身石化，全屬性大幅下降，HP上限 -20%', '▪▪▪ Petri Lv.3 — Half petrified, severe stat loss, Max HP -20%'));
      _petriSensory(L(
        '你的皮膚摸起來像磨砂紙，表面粗糙而冰冷。肋骨下方傳來沉重的壓迫感——石化正在侵蝕你的軀幹。每次深呼吸都伴隨著微弱的石裂聲。',
        'Your skin feels like sandpaper — rough and cold to the touch. A heavy pressure builds beneath your ribs — the stone is invading your torso. Every deep breath comes with a faint cracking sound.'));
      if (state.flags.r1YingCompanion) {
        _petriSensory(L(
          '螢碰到你的手臂時不自覺地縮了一下——她的眼裡閃過一絲恐懼，隨即掩飾過去。「……沒事，只是有點涼。」',
          'Ying flinches when she touches your arm — a flash of fear in her eyes, quickly masked. "...It\'s nothing, just a bit cold."'));
      }
      state.mood = 'danger';
    }
    if (prevPetri < 80 && state.petri >= 80) {
      notify(L('▪▪▪▪ 石化 Lv.4 — 瀕臨石化！全屬性崩潰，HP上限 -30%', '▪▪▪▪ Petri Lv.4 — Near death! Stats collapse, Max HP -30%'));
      _petriSensory(L(
        '呼吸變得困難——肋骨內側也開始石化了。你的視野邊緣偶爾會閃過灰色的靜態雜訊。你開始害怕睡著後就醒不過來。每走一步，膝蓋都發出碎裂的聲響。',
        'Breathing is labored — the inside of your ribs is turning to stone. Grey static flickers at the edges of your vision. You fear falling asleep and never waking. Every step draws a grinding crack from your knees.'));
      if (state.flags.r1YingCompanion) {
        _petriSensory(L(
          '螢握住你的手，用力到指節發白。她的嘴唇在發抖。「你不會變成石頭的……你答應過我的。」',
          'Ying grips your hand so hard her knuckles go white. Her lips tremble. "You won\'t turn to stone... You promised me."'));
      }
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

// Get effective stat value (base + petri penalty + equipment bonus, min 1)
function effectiveStat(stat) {
  var pen = petriPenalty();
  var eqBonus = (typeof getEquipStats === 'function') ? (getEquipStats()[stat] || 0) : 0;
  return Math.max(1, state[stat] + (pen[stat] || 0) + eqBonus);
}

// Base max HP before petri reduction (accounts for NG+ run and level)
function getBaseMaxHp() {
  var ngRun = state.flags.ngPlusRun || 0;
  var base = 50 + (ngRun > 0 ? 10 * ngRun : 0);
  base += (state.level - 1) * 5;
  return base;
}

// Get NG+ scaling factor based on run number (2x, 4x, 8x...)
function getNgPlusScale() {
  if (!state.flags.ngPlus) return 1;
  var run = state.flags.ngPlusRun || 1;
  return Math.pow(2, run); // run1=2x, run2=4x, run3=8x
}

// Scale enemy stats for NG+ (returns shallow copy with scaled combat stats)
function scaleEnemyNgPlus(enemy) {
  var scale = getNgPlusScale();
  if (scale <= 1) return enemy;
  var scaled = {};
  for (var k in enemy) { if (enemy.hasOwnProperty(k)) scaled[k] = enemy[k]; }
  scaled.hp = Math.floor(enemy.hp * scale);
  scaled.atkMin = Math.floor(enemy.atkMin * scale);
  scaled.atkMax = Math.floor(enemy.atkMax * scale);
  scaled.petriDmg = Math.floor(enemy.petriDmg * scale);
  scaled.xp = Math.floor(enemy.xp * (1 + (state.flags.ngPlusRun || 1) * 0.25));
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

// Mercy system: reduce incoming damage after consecutive deaths
// 3+ deaths → 20% reduction, 5+ → 35%, 7+ → 50% (cap)
function getMercyReduction() {
  var deaths = state.flags._consecutiveDeaths || 0;
  if (deaths >= 7) return 0.5;
  if (deaths >= 5) return 0.35;
  if (deaths >= 3) return 0.2;
  return 0;
}

// Calculate NG+ banked points from current run stats
// Stat bonus: earned points above base (3+3+3=9)
// Level bonus: each level above 5 gives +1
function calculateBankedPoints() {
  var statBonus = (state.str + state.agi + state.wil) - 9;
  var levelBonus = Math.max(0, state.level - 5);
  return Math.max(0, statBonus + levelBonus);
}
