// ══ Title Screen — 3-Phase Flow ══

// ── Phase management ──
function showPhase(id) {
  document.querySelectorAll('.title-phase').forEach(function(el) {
    el.classList.remove('active');
  });
  var phase = document.getElementById(id);
  setTimeout(function() { phase.classList.add('active'); }, 80);
}

// ── Phase 1: Splash ──
// Show continue button if save exists
(function() {
  var continueBtn = document.getElementById('continue-btn');
  var chapterBtn = document.getElementById('chapter-btn');
  if (continueBtn && hasSave()) {
    continueBtn.style.display = '';
    // Peek at saved language to show correct text for returning players
    try {
      var json = localStorage.getItem(SAVE_KEY);
      if (json) {
        var d = JSON.parse(json);
        if (d.lang === 'en') {
          continueBtn.textContent = 'CONTINUE';
          if (chapterBtn) chapterBtn.textContent = 'CHAPTER SELECT';
        }
      }
    } catch (e) { DEBUG && console.warn('Failed to peek saved language:', e); }
  }
})();

// iOS requires audio unlock from a touchstart (not just click), so listen
// for the earliest touch/click on the splash to warm up AudioContext.
var _splashWarmedUp = false;
function splashWarmup() {
  if (!_splashWarmedUp) {
    _splashWarmedUp = true;
    ambientAudio.warmup();
  }
}
document.getElementById('phase-splash').addEventListener('touchstart', splashWarmup, { passive: true });

document.getElementById('phase-splash').addEventListener('click', function(e) {
  // Warm up AudioContext on first touch — mobile browsers require this
  // to happen inside a user gesture, so the splash tap is the earliest moment.
  splashWarmup();
  // All interactions on splash are button-driven (lang-btn, continue, chapter, ng+, leaderboard).
  // No generic click-to-proceed — language must be chosen first.
});

// Continue button handler
(function() {
  var continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('touchstart', splashWarmup, { passive: true });
    continueBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      splashWarmup();   // ensure AudioContext is alive for this gesture
      if (loadSave()) {
        applyLang();
        if (typeof statsStartRun === 'function') statsStartRun();
        if (typeof prefetchFallenTravelers === 'function') prefetchFallenTravelers();
        var titleScreen = document.getElementById('title-screen');
        titleScreen.classList.add('hidden');
        setTimeout(function() { titleScreen.style.display = 'none'; }, 800);
        ambientAudio.start();
        setTimeout(updateAudioBtn, 200);
        renderStatus();
        loadNode(state.node);
      }
    });
  }
})();

// ── New Game+ button ──
var _ngPlusMode = false;
// Auto-trigger NG+ if redirected from epilogue
(function() {
  try {
    if (localStorage.getItem('petriabyss_ngplus_pending') === '1') {
      localStorage.removeItem('petriabyss_ngplus_pending');
      _ngPlusMode = true;
      // NG+ auto-redirect: player still needs to pick language on splash,
      // then lang-btn handler will route to character creation.
    }
  } catch (e) {}
})();
(function() {
  var ngBtn = document.getElementById('ngplus-btn');
  if (!ngBtn) return;
  // Show NG+ button only if player has completed the game at least once
  if (typeof globalStats !== 'undefined' && globalStats.totalRuns > 0) {
    ngBtn.style.display = '';
    var runs = globalStats.totalRuns;
    var scale = Math.pow(2, runs);
    var cycleNames = { 1: '二周目', 2: '三周目', 3: '四周目' };
    var cycleName = cycleNames[runs] || (runs + 1) + '周目';
    // Set button text with cycle info
    var isZh = true;
    try {
      var json = localStorage.getItem(SAVE_KEY);
      if (json) {
        var d = JSON.parse(json);
        if (d.lang === 'en') isZh = false;
      }
    } catch (e) {}
    ngBtn.textContent = isZh
      ? cycleName + '（怪物' + scale + '倍）'
      : 'Cycle ' + (runs + 1) + ' (Enemies ' + scale + 'x)';
  }
  ngBtn.addEventListener('touchstart', splashWarmup, { passive: true });
  ngBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    splashWarmup();
    _ngPlusMode = true;
    // Highlight the NG+ button to indicate it's selected, then player picks language
    ngBtn.classList.add('selected');
    notify(L('已選擇 NG+，請選擇語言開始', 'NG+ selected — choose a language to start'));
  });
})();

// ── Language selection (buttons live on splash screen) ──
// Shared helper: apply NG+ stat label and show character creation
function _applyLangAndShowCreate() {
  applyLang();
  if (_ngPlusMode) {
    ngPlusAllocBonus = (typeof globalStats !== 'undefined' && globalStats.bankedPoints > 0)
      ? globalStats.bankedPoints : 3;
    var ngRun = (typeof globalStats !== 'undefined') ? globalStats.totalRuns : 1;
    var cycleNames = { 1: '二周目', 2: '三周目', 3: '四周目' };
    var cycleNamesEn = { 1: 'Cycle 2', 2: 'Cycle 3', 3: 'Cycle 4' };
    var cycleName = cycleNames[ngRun] || (ngRun + 1) + '周目';
    var cycleNameEn = cycleNamesEn[ngRun] || 'Cycle ' + (ngRun + 1);
    var scale = Math.pow(2, ngRun);
    var label = document.getElementById('label-stat-alloc');
    if (label) label.textContent = state.lang === 'en'
      ? 'STATS  [' + cycleNameEn + ' +' + ngPlusAllocBonus + 'pts | Enemies ' + scale + 'x]'
      : '能 力 分 配  [' + cycleName + ' +' + ngPlusAllocBonus + '點｜怪物' + scale + '倍]';
  } else {
    ngPlusAllocBonus = 0;
  }
  allocStats.str = ALLOC_BASE;
  allocStats.agi = ALLOC_BASE;
  allocStats.wil = ALLOC_BASE;
  updateAllocUI();
  showPhase('phase-create');
}

document.querySelectorAll('.lang-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    splashWarmup();
    state.lang = btn.dataset.lang;
    _applyLangAndShowCreate();
  });
});

// ── Phase 3: Character Creation ──
const allocStats = { str: 3, agi: 3, wil: 3 };
const ALLOC_BASE = 3;
const ALLOC_MAX = 9;
const ALLOC_POINTS = 6;
var ngPlusAllocBonus = 0;

function getAllocUsed() {
  return (allocStats.str - ALLOC_BASE) + (allocStats.agi - ALLOC_BASE) + (allocStats.wil - ALLOC_BASE);
}

function getTotalAllocPoints() { return ALLOC_POINTS + ngPlusAllocBonus; }

function updateAllocUI() {
  var totalPts = getTotalAllocPoints();
  document.getElementById('alloc-str').textContent = allocStats.str;
  document.getElementById('alloc-agi').textContent = allocStats.agi;
  document.getElementById('alloc-wil').textContent = allocStats.wil;
  document.getElementById('alloc-remain').textContent = totalPts - getAllocUsed();

  document.querySelectorAll('.stat-alloc-btn').forEach(function(btn) {
    var stat = btn.dataset.stat;
    var dir = parseInt(btn.dataset.dir);
    if (dir === 1) {
      var max = _ngPlusMode ? (ALLOC_BASE + totalPts) : ALLOC_MAX;
      btn.disabled = getAllocUsed() >= totalPts || allocStats[stat] >= max;
    } else {
      btn.disabled = allocStats[stat] <= ALLOC_BASE;
    }
  });
}

document.querySelectorAll('.stat-alloc-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var stat = btn.dataset.stat;
    var dir = parseInt(btn.dataset.dir);
    var newVal = allocStats[stat] + dir;
    if (newVal < ALLOC_BASE || newVal > ALLOC_MAX) return;
    if (dir === 1 && getAllocUsed() >= getTotalAllocPoints()) return;
    allocStats[stat] = newVal;
    updateAllocUI();
  });
});

updateAllocUI();

// ── Sex selection ──
var selectedSex = 'male';
document.querySelectorAll('.sex-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    selectedSex = btn.dataset.sex;
    document.querySelectorAll('.sex-btn').forEach(function(b) { b.classList.remove('selected'); });
    btn.classList.add('selected');
  });
});

function _showAllocConfirm(remaining, onConfirm) {
  var overlay = document.createElement('div');
  overlay.className = 'save-overlay active';
  overlay.style.zIndex = '600';
  var dialog = document.createElement('div');
  dialog.className = 'save-dialog';
  dialog.innerHTML =
    '<h3>' + L('未完成配點', 'Unallocated Points') + '</h3>' +
    '<p style="color:#c8c8d0;font-size:.95rem;margin:12px 0 18px;line-height:1.6;">' +
    L('你還有 <b style="color:#d4a843;">' + remaining + '</b> 點能力點數未分配。<br>確定要直接開始嗎？',
      'You have <b style="color:#d4a843;">' + remaining + '</b> unallocated stat point(s).<br>Start anyway?') +
    '</p>' +
    '<div style="display:flex;gap:12px;justify-content:center;">' +
    '<button class="save-action-btn" id="alloc-confirm-back" style="flex:1;">' + L('返回配點', 'Go Back') + '</button>' +
    '<button class="save-action-btn save-close-btn" id="alloc-confirm-start" style="flex:1;">' + L('直接開始', 'Start') + '</button>' +
    '</div>';
  overlay.appendChild(dialog);
  document.body.appendChild(overlay);
  document.getElementById('alloc-confirm-back').addEventListener('click', function() {
    document.body.removeChild(overlay);
  });
  document.getElementById('alloc-confirm-start').addEventListener('click', function() {
    document.body.removeChild(overlay);
    onConfirm();
  });
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) document.body.removeChild(overlay);
  });
}

function startGame() {
  // Warn if stat points not fully allocated
  var remaining = getTotalAllocPoints() - getAllocUsed();
  if (remaining > 0) {
    _showAllocConfirm(remaining, _doStartGame);
    return;
  }
  _doStartGame();
}

function _doStartGame() {
  var nameInput = document.getElementById('name-input');
  var name = nameInput.value.trim() || L('無名旅者', 'Nameless Wanderer');

  // Reset all state to defaults before applying character creation values.
  // This prevents stale data from a previous save (e.g. if the player opened
  // chapter select which calls loadSave(), then went back to start a new game).
  state.hp = 50;
  state.maxHp = 50;
  state.petri = 0;
  state.xp = 0;
  state.level = 1;
  state.xpToNext = 20;
  state.inventory = [];
  state.region = 0;
  state.node = 'start';
  state.flags = {};
  state.visitedNodes = {};
  state.deathCount = 0;
  state.mood = 'normal';

  state.name = name;
  state.sex = selectedSex;
  state.str = allocStats.str;
  state.agi = allocStats.agi;
  state.wil = allocStats.wil;

  // ── New Game+ bonuses ──
  if (_ngPlusMode) {
    state.flags.ngPlus = true;
    state.flags.ngPlusRun = (typeof globalStats !== 'undefined' ? globalStats.totalRuns : 1);
    // Record which endings were achieved previously
    if (typeof globalStats !== 'undefined') {
      if (globalStats.endings.dawn > 0) state.flags.ngEndingDawn = true;
      if (globalStats.endings.compromise > 0) state.flags.ngEndingCompromise = true;
      if (globalStats.endings.lockdown > 0) state.flags.ngEndingLockdown = true;
      if (globalStats.endings.sacrifice > 0) state.flags.ngEndingSacrifice = true;
      // Inherit banked gold from previous runs (NG+ only)
      if (globalStats.bankedGold > 0) {
        state.flags.gold = globalStats.bankedGold;
      }
    }
    _ngPlusMode = false;
  }

  // Apply WIL/level/NG+ bonuses to max HP (must be after stats are assigned)
  state.maxHp = getBaseMaxHp();
  state.hp = state.maxHp;

  var titleScreen = document.getElementById('title-screen');
  titleScreen.classList.add('hidden');
  setTimeout(function() { titleScreen.style.display = 'none'; }, 800);

  ambientAudio.start();
  setTimeout(updateAudioBtn, 200);

  if (typeof statsStartRun === 'function') statsStartRun();
  if (typeof prefetchFallenTravelers === 'function') prefetchFallenTravelers();
  renderStatus();
  loadNode('r0_start');
}

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('name-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') startGame();
});

// ── Chapter Select ──
var CHAPTERS = [
  { id: 0, zh: '祭獻坑',   en: 'Sacrificial Pit',  node: 'r0_look',
    descZh: '熱泉 · 石像 · 裂縫', descEn: 'Hot spring · Statues · Crack', icon: '†',
    loreZh: '你從滾燙的熱泉中醒來，四周盡是扭曲的石像。記憶模糊，唯一清晰的是——你是被獻祭的。向下攀爬，逃離這座活人祭壇。',
    loreEn: 'You awaken in a scalding hot spring surrounded by twisted statues. Your memory is hazy, but one thing is clear — you were sacrificed. Climb down and escape this altar of the living.' },
  { id: 1, zh: '石脈迴廊', en: 'Vein Corridor',    node: 'r1_look',
    descZh: '鍛場 · 守衛 · 螢', descEn: 'Forge · Guardian · Ying', icon: '◇',
    loreZh: '石壁間流動著發光的礦脈，空氣中瀰漫鍛鐵的氣味。這裡曾是繁忙的工坊區，如今守衛封鎖了通道。一個叫螢的女孩在暗處等待著同伴。',
    loreEn: 'Glowing veins pulse through the stone walls, the air thick with the scent of forged iron. Once a busy workshop district, now sealed by guards. A girl named Ying waits in the shadows for a companion.' },
  { id: 2, zh: '大採石場', en: 'Great Quarry',     node: 'r2_look',
    descZh: '機甲 · 營地 · 巨像', descEn: 'Mech · Camp · Colossus', icon: '⛏',
    loreZh: '巨大的採石場向深淵敞開，殘破的機甲散落四處。倖存者在營地中苦撐，而一座沉睡的巨像正等待被喚醒。螢與你並肩前行，揭開更深的秘密。',
    loreEn: 'A massive quarry yawns open toward the abyss, broken mechs scattered everywhere. Survivors huddle in camp while a dormant colossus awaits awakening. Ying walks beside you as deeper secrets unfold.' },
  { id: 3, zh: '河城渡口', en: 'River City Ferry', node: 'r3_look',
    descZh: '碼頭 · 議會 · 銅鐘', descEn: 'Dock · Council · Bronze Bell', icon: '⚓',
    loreZh: '地底河流匯聚之處，一座被遺忘的城市橫跨兩岸。渡口的鐘聲已沉默多年……',
    loreEn: 'Where underground rivers converge, a forgotten city spans both banks. The ferry bell has been silent for years...' },
];

function buildChapterMap(container, mapPre, onSelect) {
  var en = state.lang === 'en';
  var devUnlocked = state.flags._devUnlockAll;

  // ── Build enlarged ASCII map ──
  var lines = [];
  lines.push(en ? '          ☼  ☼  ☼   S U R F A C E   ☼  ☼  ☼' : '          ☼  ☼  ☼    地       表    ☼  ☼  ☼');
  lines.push('         ╔════════════════════════════════╗');
  lines.push(en ? '         ║    ~~~  ocean  ~~~            ║' : '         ║    ～～～ 海  面 ～～～         ║');
  lines.push('         ╠════════════════════════════════╣');

  for (var i = CHAPTERS.length - 1; i >= 0; i--) {
    var ch = CHAPTERS[i];
    var unlocked = devUnlocked || (state.maxRegion || state.region) >= ch.id;
    var isCurrent = state.region === ch.id;
    var depth = en ? ('  F' + (i + 1) + ' ') : (' ' + '一二三四'[i] + '層 ');
    var marker = isCurrent ? ' ◄◄' : '   ';

    if (unlocked) {
      var name = en ? ch.en : ch.zh;
      var icon = ch.icon;
      // Each chapter gets 3 lines: icon row, name row, desc row
      var desc = en ? ch.descEn : ch.descZh;
      lines.push('         ║                                ║');
      lines.push(depth + '    ║    ' + icon + '  ' + name + marker);
      lines.push('         ║    ' + desc);
      lines.push('         ║                                ║');
    } else {
      lines.push('         ║                                ║');
      lines.push(depth + '    ║    ░░░░░  ？？？  ░░░░░');
      lines.push('         ║    ░░░░░░░░░░░░░░░░░░░░');
      lines.push('         ║                                ║');
    }
    if (i > 0) lines.push('         ╠────────────────────────────────╣');
  }
  lines.push('         ╚════════════════════════════════╝');
  lines.push(en ? '          ▼  ▼  ▼   A  B  Y  S  S   ▼  ▼  ▼' : '          ▼  ▼  ▼    深       淵    ▼  ▼  ▼');
  mapPre.textContent = lines.join('\n');

  // ── Build chapter buttons ──
  container.innerHTML = '';

  // Confirm panel (hidden by default)
  var confirmPanel = document.createElement('div');
  confirmPanel.className = 'chapter-confirm';
  confirmPanel.style.display = 'none';
  confirmPanel.innerHTML =
    '<div class="chapter-confirm-name"></div>' +
    '<div class="chapter-confirm-lore"></div>' +
    '<div class="chapter-confirm-actions">' +
      '<button class="chapter-confirm-go">' + (en ? 'Confirm' : '確認前往') + '</button>' +
      '<button class="chapter-confirm-cancel">' + (en ? 'Cancel' : '取消') + '</button>' +
    '</div>';
  container.appendChild(confirmPanel);

  var selectedChapter = null;

  function showConfirm(ch) {
    selectedChapter = ch;
    confirmPanel.querySelector('.chapter-confirm-name').textContent = ch.icon + '  ' + (en ? ch.en : ch.zh);
    confirmPanel.querySelector('.chapter-confirm-lore').textContent = en ? ch.loreEn : ch.loreZh;
    confirmPanel.style.display = '';
    // Highlight selected button
    container.querySelectorAll('.chapter-item').forEach(function(b) { b.classList.remove('selected'); });
    var idx = CHAPTERS.length - 1 - ch.id; // reverse order
    var items = container.querySelectorAll('.chapter-item');
    if (items[idx]) items[idx].classList.add('selected');
  }

  confirmPanel.querySelector('.chapter-confirm-go').addEventListener('click', function() {
    if (selectedChapter) onSelect(selectedChapter);
  });
  confirmPanel.querySelector('.chapter-confirm-cancel').addEventListener('click', function() {
    confirmPanel.style.display = 'none';
    selectedChapter = null;
    container.querySelectorAll('.chapter-item').forEach(function(b) { b.classList.remove('selected'); });
  });

  for (var i = CHAPTERS.length - 1; i >= 0; i--) {
    var ch = CHAPTERS[i];
    var unlocked = devUnlocked || (state.maxRegion || state.region) >= ch.id;
    var isCurrent = state.region === ch.id;
    var btn = document.createElement('button');
    btn.className = 'chapter-item' + (unlocked ? '' : ' locked') + (isCurrent ? ' current' : '');
    var tagClass = isCurrent ? 'tag-current' : (unlocked ? 'tag-unlocked' : 'tag-locked');
    var tagText = isCurrent ? (en ? 'NOW' : '當前') : (unlocked ? (en ? 'OK' : '已解鎖') : (en ? '???' : '???'));
    if (unlocked) {
      btn.innerHTML = '<span class="chapter-icon">' + ch.icon + '</span>' +
        '<span class="chapter-name">' + (en ? ch.en : ch.zh) + '</span>' +
        '<span class="chapter-desc">' + (en ? ch.descEn : ch.descZh) + '</span>' +
        '<span class="chapter-tag ' + tagClass + '">' + tagText + '</span>';
    } else {
      btn.innerHTML = '<span class="chapter-icon">?</span>' +
        '<span class="chapter-name chapter-fog">░░░ ' + (en ? '???' : '？？？') + ' ░░░</span>' +
        '<span class="chapter-tag ' + tagClass + '">' + tagText + '</span>';
    }
    if (unlocked) {
      (function(chapter) {
        btn.addEventListener('click', function() { showConfirm(chapter); });
      })(ch);
    }
    container.appendChild(btn);
  }
}

// ── Title screen: chapter select button ──
(function() {
  var chapterBtn = document.getElementById('chapter-btn');
  if (chapterBtn && hasSave()) {
    chapterBtn.style.display = '';
  }
  if (!chapterBtn) return;

  chapterBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    ambientAudio.warmup();
    if (!loadSave()) return;
    applyLang();
    var en = state.lang === 'en';
    document.getElementById('chapter-title').textContent = en ? 'CHAPTER SELECT' : '章 節 選 擇';
    document.getElementById('chapter-back-btn').textContent = en ? 'Back' : '返回';
    buildChapterMap(
      document.getElementById('chapter-list'),
      document.getElementById('chapter-map'),
      function(ch) {
        state.region = ch.id;
        if (typeof prefetchFallenTravelers === 'function') prefetchFallenTravelers();
        var titleScreen = document.getElementById('title-screen');
        titleScreen.classList.add('hidden');
        setTimeout(function() { titleScreen.style.display = 'none'; }, 800);
        ambientAudio.start();
        setTimeout(updateAudioBtn, 200);
        renderStatus();
        loadNode(ch.node);
      }
    );
    showPhase('phase-chapter');
  });


  // Back button
  document.getElementById('chapter-back-btn').addEventListener('click', function() {
    showPhase('phase-splash');
  });
})();

// ── In-game chapter select ──
(function() {
  var ingameBtn = document.getElementById('chapter-ingame-btn');
  if (!ingameBtn) return;
  ingameBtn.addEventListener('click', function() {
    loadNode('chapter_select');
  });
})();

// ── Save Code UI ──
(function() {
  var $overlay = document.getElementById('save-overlay');
  var $textarea = document.getElementById('save-textarea');
  var $msg = document.getElementById('save-msg');
  var $title = document.getElementById('save-dialog-title');
  var $hint = document.getElementById('save-hint');
  var $copyBtn = document.getElementById('save-copy-btn');
  var $pasteBtn = document.getElementById('save-paste-btn');
  var $importBtn = document.getElementById('save-import-btn');
  var $closeBtn = document.getElementById('save-close-btn');
  var $openBtn = document.getElementById('save-code-btn');
  var $codeToggle = document.getElementById('save-code-toggle');

  // ── Slot UI helpers ──
  var REGION_NAMES_ZH = ['祭獻坑','石脈迴廊','大採石場','河城渡口'];
  var REGION_NAMES_EN = ['Sacrificial Pit','Vein Corridor','Great Quarry','River City Ferry'];

  function formatSlotInfo(info, en) {
    if (!info) return en ? 'Empty' : '空';
    var region = en ? (REGION_NAMES_EN[info.region] || '?') : (REGION_NAMES_ZH[info.region] || '?');
    var time = '';
    if (info.savedAt) {
      var d = new Date(info.savedAt);
      time = ' · ' + d.getMonth() + '/' + d.getDate() + ' ' +
        (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' +
        (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    }
    return info.name + '  Lv.' + info.level + '  ' + region + time;
  }

  function refreshSlots() {
    var en = state.lang === 'en';
    for (var i = 1; i <= 3; i++) {
      var info = getSlotInfo(i);
      var $info = document.getElementById('slot-info-' + i);
      $info.textContent = (en ? 'Slot ' + i + ': ' : '槽 ' + i + '：') + formatSlotInfo(info, en);
      if (info) {
        $info.classList.add('has-data');
      } else {
        $info.classList.remove('has-data');
      }
      var $slotEl = $info.parentElement;
      var loadBtn = $slotEl.querySelector('.slot-load-btn');
      var delBtn = $slotEl.querySelector('.slot-del-btn');
      var saveBtn = $slotEl.querySelector('.slot-save-btn');
      loadBtn.disabled = !info;
      delBtn.disabled = !info;
      loadBtn.textContent = en ? 'Load' : '讀取';
      saveBtn.textContent = en ? 'Save' : '存檔';
      delBtn.textContent = en ? 'Del' : '刪除';
    }
  }

  // Slot button events
  document.querySelectorAll('.slot-save-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var n = parseInt(btn.dataset.slot);
      var en = state.lang === 'en';
      if (saveToSlot(n)) {
        $msg.style.color = '#5a5';
        $msg.textContent = en ? 'Saved to slot ' + n + '!' : '已存檔至槽 ' + n + '！';
        refreshSlots();
      }
    });
  });

  document.querySelectorAll('.slot-load-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var n = parseInt(btn.dataset.slot);
      var en = state.lang === 'en';
      if (loadFromSlot(n)) {
        applyLang();
        renderStatus();
        $msg.style.color = '#5a5';
        $msg.textContent = en ? 'Loaded from slot ' + n + '!' : '已從槽 ' + n + ' 讀取！';
        setTimeout(function() {
          $overlay.classList.remove('active');
          loadNode(state.node);
        }, 800);
      } else {
        $msg.style.color = '#a55';
        $msg.textContent = en ? 'Slot is empty.' : '槽位為空。';
      }
    });
  });

  document.querySelectorAll('.slot-del-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var n = parseInt(btn.dataset.slot);
      var en = state.lang === 'en';
      deleteSlot(n);
      $msg.style.color = '#6a6a7a';
      $msg.textContent = en ? 'Slot ' + n + ' deleted.' : '槽 ' + n + ' 已刪除。';
      refreshSlots();
    });
  });

  function openSaveDialog() {
    var en = state.lang === 'en';
    $title.textContent = en ? 'SAVE / LOAD' : '存 檔 管 理';
    $hint.textContent = en ? 'Copy this code to save progress, or paste a code to load:' : '複製此代碼以保存進度，或貼上代碼來讀取：';
    $copyBtn.textContent = en ? 'Copy' : '複製';
    $pasteBtn.textContent = en ? 'Paste' : '貼上';
    $importBtn.textContent = en ? 'Load' : '讀取';
    $closeBtn.textContent = en ? 'Close' : '關閉';
    $codeToggle.textContent = en ? 'Save Code' : '存檔碼';
    $textarea.value = exportSaveCode();
    $msg.textContent = '';
    refreshSlots();
    $overlay.classList.add('active');
  }

  $openBtn.addEventListener('click', openSaveDialog);

  $closeBtn.addEventListener('click', function() {
    $overlay.classList.remove('active');
  });

  $overlay.addEventListener('click', function(e) {
    if (e.target === $overlay) $overlay.classList.remove('active');
  });

  $copyBtn.addEventListener('click', function() {
    $textarea.select();
    try {
      navigator.clipboard.writeText($textarea.value).then(function() {
        $msg.style.color = '#5a5';
        $msg.textContent = state.lang === 'en' ? 'Copied!' : '已複製！';
      });
    } catch (e) {
      document.execCommand('copy');
      $msg.style.color = '#5a5';
      $msg.textContent = state.lang === 'en' ? 'Copied!' : '已複製！';
    }
  });

  $pasteBtn.addEventListener('click', function() {
    try {
      navigator.clipboard.readText().then(function(text) {
        $textarea.value = text;
        $textarea.select();
        $msg.style.color = '#5a5';
        $msg.textContent = state.lang === 'en' ? 'Pasted! Press Load to apply.' : '已貼上！按讀取來載入。';
      }).catch(function() {
        $msg.style.color = '#a55';
        $msg.textContent = state.lang === 'en' ? 'Paste failed. Please paste manually (Ctrl+V).' : '貼上失敗，請手動貼上（Ctrl+V）。';
      });
    } catch (e) {
      $msg.style.color = '#a55';
      $msg.textContent = state.lang === 'en' ? 'Paste not supported. Please paste manually (Ctrl+V).' : '不支援自動貼上，請手動貼上（Ctrl+V）。';
    }
  });

  $importBtn.addEventListener('click', function() {
    var code = $textarea.value.trim();
    if (!code) {
      $msg.style.color = '#a55';
      $msg.textContent = state.lang === 'en' ? 'Please paste a save code.' : '請貼上存檔碼。';
      return;
    }
    if (importSaveCode(code)) {
      applyLang();
      renderStatus();
      $msg.style.color = '#5a5';
      $msg.textContent = state.lang === 'en' ? 'Loaded! Resuming...' : '讀取成功！恢復中……';
      setTimeout(function() {
        $overlay.classList.remove('active');
        loadNode(state.node);
      }, 800);
    } else {
      $msg.style.color = '#a55';
      $msg.textContent = state.lang === 'en' ? 'Invalid save code.' : '無效的存檔碼。';
    }
  });
})();

// ── Audio Toggle ──
var $audioBtn = document.getElementById('audio-toggle');

function updateAudioBtn() {
  if (ambientAudio.isRunning()) {
    $audioBtn.textContent = '\u266A ON';
    $audioBtn.classList.add('on');
  } else {
    $audioBtn.textContent = '\u266A OFF';
    $audioBtn.classList.remove('on');
  }
}

$audioBtn.addEventListener('click', function() {
  if (ambientAudio.isRunning()) {
    ambientAudio.stop();
    updateAudioBtn();
  } else {
    ambientAudio.start();
    // start() may be async (waiting for AudioContext.resume on mobile),
    // so update the button after a short delay to reflect the actual state.
    setTimeout(updateAudioBtn, 200);
  }
});

// ── Voice Narration Toggle (disabled — no DOM button) ──

// ── Title Leaderboard Button ──
(function() {
  var $lbBtn = document.getElementById('title-leaderboard-btn');
  if (!$lbBtn) return;
  $lbBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    // Try to peek saved language; default to zh
    try {
      var json = localStorage.getItem(SAVE_KEY);
      if (json) {
        var d = JSON.parse(json);
        if (d.lang) state.lang = d.lang;
      }
    } catch (ex) {}
    if (typeof showLeaderboard === 'function') showLeaderboard();
  });
})();

// ── Achievement UI ──
(function() {
  var $viewBtn = document.getElementById('ach-view-btn');
  var $closeBtn = document.getElementById('ach-close-btn');
  if ($viewBtn) $viewBtn.addEventListener('click', function() { openAchievements(); });
  if ($closeBtn) $closeBtn.addEventListener('click', function() { closeAchievements(); });
  // Initial count render
  if (typeof renderAchievementCount === 'function') renderAchievementCount();
})();
