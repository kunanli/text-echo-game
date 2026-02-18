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
    notify(L('獲得物品：', 'Acquired: ') + name);
  }
}

function removeItem(name) {
  const i = state.inventory.indexOf(name);
  if (i >= 0) state.inventory.splice(i, 1);
}

// ── XP & Level System ──
function xpForLevel(lv) { return Math.floor(20 * Math.pow(1.4, lv - 1)); }

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
    // Stat bonus every level
    var pick = rng(0, 2);
    if (pick === 0) { changeStat('str', 1); }
    else if (pick === 1) { changeStat('agi', 1); }
    else { changeStat('wil', 1); }
    notify(L('等級提升！ Lv.' + state.level + '  HP上限 +5',
             'Level Up! Lv.' + state.level + '  Max HP +5'));
  }
  renderStatus();
}

function changeHp(delta) {
  state.hp = clamp(state.hp + delta, 0, state.maxHp);
  if (state.hp <= 0) die(L('你的生命力耗盡，倒在了冰冷的石地上……', 'Your life force fades... You collapse on the cold stone floor...'));
}

function changePetri(delta) {
  state.petri = clamp(state.petri + delta, 0, 100);
  if (state.petri >= 100) die(L('你的身體已完全化為冰冷的石頭……', 'Your body has completely turned to cold stone...'));
}

function changeStat(stat, delta) {
  state[stat] = Math.max(1, state[stat] + delta);
}
