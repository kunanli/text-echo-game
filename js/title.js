// ══ Title Screen — 3-Phase Flow ══

// ── Phase management ──
function showPhase(id) {
  document.querySelectorAll('.title-phase').forEach(function(el) {
    el.classList.remove('active');
  });
  var phase = document.getElementById(id);
  setTimeout(function() { phase.classList.add('active'); }, 80);
}

// ── Phase 1: Splash → click to proceed ──
// Show continue button if save exists
(function() {
  var continueBtn = document.getElementById('continue-btn');
  if (continueBtn && hasSave()) {
    continueBtn.style.display = '';
  }
})();

document.getElementById('phase-splash').addEventListener('click', function(e) {
  // If clicked the continue button, load save directly
  if (e.target.id === 'continue-btn' || e.target.closest('#continue-btn')) {
    return; // handled by its own listener
  }
  showPhase('phase-lang');
});

// Continue button handler
(function() {
  var continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (loadSave()) {
        applyLang();
        var titleScreen = document.getElementById('title-screen');
        titleScreen.classList.add('hidden');
        setTimeout(function() { titleScreen.style.display = 'none'; }, 800);
        ambientAudio.start();
        updateAudioBtn();
        renderStatus();
        loadNode(state.node);
      }
    });
  }
})();

// ── Phase 2: Language selection ──
document.querySelectorAll('.lang-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    state.lang = btn.dataset.lang;
    applyLang();
    showPhase('phase-create');
  });
});

// ── Phase 3: Character Creation ──
const allocStats = { str: 3, agi: 3, wil: 3 };
const ALLOC_BASE = 3;
const ALLOC_MAX = 9;
const ALLOC_POINTS = 6;

function getAllocUsed() {
  return (allocStats.str - ALLOC_BASE) + (allocStats.agi - ALLOC_BASE) + (allocStats.wil - ALLOC_BASE);
}

function updateAllocUI() {
  document.getElementById('alloc-str').textContent = allocStats.str;
  document.getElementById('alloc-agi').textContent = allocStats.agi;
  document.getElementById('alloc-wil').textContent = allocStats.wil;
  document.getElementById('alloc-remain').textContent = ALLOC_POINTS - getAllocUsed();

  document.querySelectorAll('.stat-alloc-btn').forEach(function(btn) {
    var stat = btn.dataset.stat;
    var dir = parseInt(btn.dataset.dir);
    if (dir === 1) {
      btn.disabled = getAllocUsed() >= ALLOC_POINTS || allocStats[stat] >= ALLOC_MAX;
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
    if (dir === 1 && getAllocUsed() >= ALLOC_POINTS) return;
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

function startGame() {
  var nameInput = document.getElementById('name-input');
  var name = nameInput.value.trim() || L('無名旅者', 'Nameless Wanderer');
  state.name = name;
  state.sex = selectedSex;
  state.str = allocStats.str;
  state.agi = allocStats.agi;
  state.wil = allocStats.wil;

  var titleScreen = document.getElementById('title-screen');
  titleScreen.classList.add('hidden');
  setTimeout(function() { titleScreen.style.display = 'none'; }, 800);

  ambientAudio.start();
  updateAudioBtn();

  renderStatus();
  loadNode('r0_start');
}

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('name-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') startGame();
});

// ── Save Code UI ──
(function() {
  var $overlay = document.getElementById('save-overlay');
  var $textarea = document.getElementById('save-textarea');
  var $msg = document.getElementById('save-msg');
  var $title = document.getElementById('save-dialog-title');
  var $hint = document.getElementById('save-hint');
  var $copyBtn = document.getElementById('save-copy-btn');
  var $importBtn = document.getElementById('save-import-btn');
  var $closeBtn = document.getElementById('save-close-btn');
  var $openBtn = document.getElementById('save-code-btn');

  function openSaveDialog() {
    var en = state.lang === 'en';
    $title.textContent = en ? 'SAVE CODE' : '存 檔 碼';
    $hint.textContent = en ? 'Copy this code to save progress, or paste a code to load:' : '複製此代碼以保存進度，或貼上代碼來讀取：';
    $copyBtn.textContent = en ? 'Copy' : '複製';
    $importBtn.textContent = en ? 'Load' : '讀取';
    $closeBtn.textContent = en ? 'Close' : '關閉';
    $textarea.value = exportSaveCode();
    $msg.textContent = '';
    $overlay.classList.add('active');
    setTimeout(function() { $textarea.select(); }, 100);
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
  } else {
    ambientAudio.start();
  }
  updateAudioBtn();
});
