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

  renderStatus();
  loadNode('r0_start');
}

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('name-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') startGame();
});
