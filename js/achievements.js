// ══ Achievement System ══
// Tracks meta-progress across playthroughs.
// Unlocked achievements persist in localStorage (separate from game saves).

var ACH_STORAGE_KEY = 'petriabyss_achievements';

// ── Achievement Definitions ──
// Each: { id, icon, name, nameEn, desc, descEn, check(state) }
var ACHIEVEMENT_DEFS = [
  // ── Endings ──
  {
    id: 'ending_dawn', icon: '\u2600',
    name: '黎明之子', nameEn: "Dawn's Child",
    desc: '達成結局 A — 黎明', descEn: 'Reach Ending A — Dawn',
    check: function() { return state.flags.r3Ending === 'dawn'; }
  },
  {
    id: 'ending_compromise', icon: '\u2696',
    name: '妥協之道', nameEn: 'Path of Compromise',
    desc: '達成結局 B — 妥協', descEn: 'Reach Ending B — Compromise',
    check: function() { return state.flags.r3Ending === 'compromise'; }
  },
  {
    id: 'ending_lockdown', icon: '\u26D3',
    name: '封鎖之痛', nameEn: 'Sealed Fate',
    desc: '達成結局 C — 封鎖', descEn: 'Reach Ending C — Lockdown',
    check: function() { return state.flags.r3Ending === 'lockdown'; }
  },
  {
    id: 'ending_sacrifice', icon: '\u{1F5FF}',
    name: '石語者', nameEn: 'Stone Speaker',
    desc: '達成結局 D — 犧牲', descEn: 'Reach Ending D — Sacrifice',
    check: function() { return state.flags.r3Ending === 'sacrifice'; }
  },

  // ── Survival ──
  {
    id: 'undying', icon: '\u2B50',
    name: '不死之軀', nameEn: 'Undying',
    desc: '零死亡通關', descEn: 'Complete the game with zero deaths',
    check: function() { return !!state.flags.r3Ending && state.deathCount === 0; }
  },
  {
    id: 'phoenix', icon: '\u{1F525}',
    name: '浴火重生', nameEn: 'Phoenix',
    desc: '復活 5 次以上', descEn: 'Revive 5 or more times',
    check: function() { return state.deathCount >= 5; }
  },
  {
    id: 'stone_immune', icon: '\u{1F48E}',
    name: '石化抗體', nameEn: 'Stone Immune',
    desc: '以石化度 10% 以下通關', descEn: 'Finish with petrification at 10% or below',
    check: function() { return !!state.flags.r3Ending && state.petri <= 10; }
  },

  // ── Relationships ──
  {
    id: 'all_gifts', icon: '\u{1F381}',
    name: '深淵知己', nameEn: 'Trusted by All',
    desc: '領取全部 7 位 NPC 的贈禮', descEn: 'Claim gifts from all 7 NPCs',
    check: function() {
      return state.flags.giftZhou && state.flags.giftCrane && state.flags.giftYing
        && state.flags.giftFrost && state.flags.giftCast && state.flags.giftDew
        && state.flags.giftBell;
    }
  },
  {
    id: 'ying_bond', icon: '\u2764',
    name: '並肩而行', nameEn: 'Side by Side',
    desc: '與螢在營火夜談後一起抵達結局', descEn: 'Share the campfire night with Ying and reach an ending together',
    check: function() {
      return !!state.flags.r3Ending && state.flags.r2YingNight && state.flags.r3YingArrived;
    }
  },

  // ── Exploration ──
  {
    id: 'hidden_found', icon: '\u{1F5FA}',
    name: '隱秘探索者', nameEn: 'Secret Seeker',
    desc: '發現祭獻坑的隱藏區域', descEn: 'Discover the hidden area in the Sacrificial Pit',
    check: function() { return !!state.flags.hiddenFound; }
  },
  {
    id: 'engineer', icon: '\u{1F4D6}',
    name: '歷史見證者', nameEn: 'History Witness',
    desc: '發現石化工程師桂的筆記', descEn: "Discover petrified engineer Kwei's notebook",
    check: function() { return !!state.flags.r2YingEngineer; }
  },
  {
    id: 'bridge_builder', icon: '\u{1F309}',
    name: '造橋者', nameEn: 'Bridge Builder',
    desc: '修復大採石場的斷橋', descEn: 'Repair the broken bridge in the Great Quarry',
    check: function() { return !!state.flags.r2BridgeFixed; }
  },

  // ── Challenge ──
  {
    id: 'veteran', icon: '\u{1F396}',
    name: '深淵老手', nameEn: 'Abyss Veteran',
    desc: '達到等級 8 以上', descEn: 'Reach level 8 or above',
    check: function() { return state.level >= 8; }
  },
  {
    id: 'plague_proof', icon: '\u{1F4DC}',
    name: '真相追尋者', nameEn: 'Truth Seeker',
    desc: '取得瘟疫封印的證據', descEn: 'Obtain proof of the plague seal',
    check: function() { return !!state.flags.r3PlagueProof; }
  },

  // ── Boss Methods ──
  {
    id: 'diplomat', icon: '\u{1F54A}',
    name: '和平使者', nameEn: 'Peacemaker',
    desc: '以說服方式通過最終 Boss', descEn: 'Persuade the final boss',
    check: function() { return state.flags.r3BossMethod === 'persuade'; }
  },
  {
    id: 'shadow', icon: '\u{1F311}',
    name: '暗影行者', nameEn: 'Shadow Walker',
    desc: '以潛行方式通過最終 Boss', descEn: 'Sneak past the final boss',
    check: function() { return state.flags.r3BossMethod === 'sneak'; }
  },
  {
    id: 'boss_spared', icon: '\u{1F932}',
    name: '慈悲之心', nameEn: 'Merciful Heart',
    desc: '饒恕石化巨像', descEn: 'Spare the Petrified Colossus',
    check: function() { return !!state.flags.r2BossSpared; }
  },

  // ── Advanced Survival ──
  {
    id: 'pacifist', icon: '\u262E',
    name: '不戰之勇', nameEn: 'Pacifist',
    desc: '零戰鬥通關', descEn: 'Complete the game with zero combats',
    check: function() { return !!state.flags.r3Ending && !state.flags._runCombats; }
  },
  {
    id: 'stone_bloom', icon: '\u{1F338}',
    name: '石中花', nameEn: 'Stone Bloom',
    desc: '以石化度 60% 以上通關（在石化邊緣倖存）', descEn: 'Finish with 60%+ petrification (surviving on the edge)',
    check: function() { return !!state.flags.r3Ending && state.petri >= 60; }
  },
  {
    id: 'speed_run', icon: '\u26A1',
    name: '疾風穿越', nameEn: 'Speed Runner',
    desc: '在 20 分鐘內通關', descEn: 'Complete the game in under 20 minutes',
    check: function() {
      return !!state.flags.r3Ending && typeof globalStats !== 'undefined'
        && globalStats.fastestRunMs > 0 && globalStats.fastestRunMs < 20 * 60 * 1000;
    }
  },

  // ── Relationships & Exploration ──
  {
    id: 'ying_river', icon: '\u{1F319}',
    name: '月下相守', nameEn: 'Moonlit Promise',
    desc: '完成螢的河邊月光場景', descEn: "Complete Ying's riverside moonlight scene",
    check: function() { return !!state.flags.r3YingRiver; }
  },
  {
    id: 'ferryman', icon: '\u{1F6F6}',
    name: '冥河渡者', nameEn: 'River Styx Crosser',
    desc: '通過冥河渡江人的試煉', descEn: "Pass the Ferryman's trial",
    check: function() { return !!state.flags.ferrymanPassed; }
  },
  {
    id: 'gambler', icon: '\u{1F3B2}',
    name: '骰運亨通', nameEn: 'Lucky Roller',
    desc: '在吹牛骰中贏得 3 場以上', descEn: 'Win 3+ rounds of Liar\'s Dice',
    check: function() { return (state.flags.diceWins || 0) >= 3; }
  },
  {
    id: 'all_endings', icon: '\u{1F451}',
    name: '命運收藏家', nameEn: 'Fate Collector',
    desc: '解鎖全部 4 種結局（跨遊玩累計）', descEn: 'Unlock all 4 endings (across playthroughs)',
    check: function() {
      if (typeof globalStats === 'undefined') return false;
      var e = globalStats.endings;
      return e.dawn > 0 && e.compromise > 0 && e.lockdown > 0 && e.sacrifice > 0;
    }
  },
];

// ── Persistence (localStorage, separate from game saves) ──

function loadAchievements() {
  try {
    var json = localStorage.getItem(ACH_STORAGE_KEY);
    return json ? JSON.parse(json) : {};
  } catch (e) { return {}; }
}

function saveAchievements(unlocked) {
  try {
    localStorage.setItem(ACH_STORAGE_KEY, JSON.stringify(unlocked));
  } catch (e) { /* storage full */ }
}

// ── Core Logic ──

// Check all achievements against current state. Returns array of newly unlocked ids.
function checkAchievements() {
  var unlocked = loadAchievements();
  var newlyUnlocked = [];
  for (var i = 0; i < ACHIEVEMENT_DEFS.length; i++) {
    var ach = ACHIEVEMENT_DEFS[i];
    if (unlocked[ach.id]) continue;
    try {
      if (ach.check()) {
        unlocked[ach.id] = Date.now();
        newlyUnlocked.push(ach);
      }
    } catch (e) { /* condition not met */ }
  }
  if (newlyUnlocked.length > 0) {
    saveAchievements(unlocked);
  }
  return newlyUnlocked;
}

// Show notification for each newly unlocked achievement (staggered)
function notifyAchievements(newList) {
  for (var i = 0; i < newList.length; i++) {
    (function(ach, delay) {
      setTimeout(function() {
        var label = state.lang === 'en' ? ach.nameEn : ach.name;
        sfx.levelUp();
        achNotify(ach.icon + ' ' + L('成就解鎖：', 'Achievement: ') + label);
      }, delay);
    })(newList[i], i * 2500);
  }
}

// Achievement-specific notification (longer display, different style)
function achNotify(msg) {
  var $n = document.getElementById('ach-notification');
  if (!$n) return;
  $n.textContent = msg;
  $n.classList.add('show');
  setTimeout(function() { $n.classList.remove('show'); }, 3500);
}

// Convenience: check + notify in one call
function triggerAchievementCheck() {
  var newList = checkAchievements();
  if (newList.length > 0) notifyAchievements(newList);
  renderAchievementCount();
  return newList;
}

// ── UI Helpers ──

function getUnlockedCount() {
  var unlocked = loadAchievements();
  var count = 0;
  for (var k in unlocked) { if (unlocked.hasOwnProperty(k)) count++; }
  return count;
}

function renderAchievementCount() {
  var $achCount = document.getElementById('ach-count');
  if ($achCount) {
    $achCount.textContent = getUnlockedCount() + ' / ' + ACHIEVEMENT_DEFS.length;
  }
}

// Build full achievement list HTML for the overlay
function renderAchievementList() {
  var unlocked = loadAchievements();
  var html = '';
  for (var i = 0; i < ACHIEVEMENT_DEFS.length; i++) {
    var ach = ACHIEVEMENT_DEFS[i];
    var isUnlocked = !!unlocked[ach.id];
    var cls = isUnlocked ? 'ach-item ach-unlocked' : 'ach-item ach-locked';
    var name = state.lang === 'en' ? ach.nameEn : ach.name;
    var desc = state.lang === 'en' ? ach.descEn : ach.desc;
    html += '<div class="' + cls + '">'
      + '<span class="ach-icon">' + (isUnlocked ? ach.icon : '?') + '</span>'
      + '<div class="ach-text">'
      + '<div class="ach-name">' + (isUnlocked ? name : '???') + '</div>'
      + '<div class="ach-desc">' + (isUnlocked ? desc : L('尚未解鎖', 'Not yet unlocked')) + '</div>'
      + '</div>'
      + '</div>';
  }
  return html;
}

// Build achievement summary HTML for epilogue
function renderAchievementSummary() {
  var unlocked = loadAchievements();
  var html = '<div class="ach-summary">';
  var count = 0;
  for (var i = 0; i < ACHIEVEMENT_DEFS.length; i++) {
    var ach = ACHIEVEMENT_DEFS[i];
    if (unlocked[ach.id]) {
      count++;
      var name = state.lang === 'en' ? ach.nameEn : ach.name;
      html += '<span class="ach-badge">' + ach.icon + ' ' + name + '</span> ';
    }
  }
  html += '</div>';
  var total = ACHIEVEMENT_DEFS.length;
  var header = L(
    '═══ 成就 ' + count + '/' + total + ' ═══',
    '═══ ACHIEVEMENTS ' + count + '/' + total + ' ═══'
  );
  return '<br>' + header + '<br>' + html;
}

// Open/close the achievement overlay
function openAchievements() {
  var $ov = document.getElementById('ach-overlay');
  if (!$ov) return;
  document.getElementById('ach-list').innerHTML = renderAchievementList();
  document.getElementById('ach-title').textContent = L('成　就', 'ACHIEVEMENTS');
  document.getElementById('ach-close-btn').textContent = L('關閉', 'Close');
  var ct = getUnlockedCount();
  document.getElementById('ach-progress').textContent = ct + ' / ' + ACHIEVEMENT_DEFS.length;
  $ov.classList.add('active');
}

function closeAchievements() {
  var $ov = document.getElementById('ach-overlay');
  if ($ov) $ov.classList.remove('active');
}
