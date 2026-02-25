// ══ UI Rendering ══

// ═══════════════════════════════════════════════════
//  Render UI
// ═══════════════════════════════════════════════════
function renderStatus() {
  $hp.textContent = state.hp + ' / ' + state.maxHp;
  $barHp.style.width = (state.hp / state.maxHp * 100) + '%';
  $petri.textContent = state.petri + '%';
  $barPetri.style.width = state.petri + '%';
  $str.textContent = state.str;
  $agi.textContent = state.agi;
  $wil.textContent = state.wil;
  $levelVal.textContent = state.level;
  $xpVal.textContent = state.xp + ' / ' + state.xpToNext;
  $xpBar.style.width = (state.xp / state.xpToNext * 100) + '%';
  $loc.textContent = getRegion(state.region) || '';
  if (state.lang === 'en') {
    $region.textContent = 'Floor ' + (state.region + 1) + ' — ' + getRegion(state.region);
  } else {
    $region.textContent = '第' + '一二三四'[state.region] + '層 — ' + getRegion(state.region);
  }

  if (state.inventory.length === 0) {
    $inv.innerHTML = '<li class="inventory-empty">' + L('空', 'Empty') + '</li>';
  } else {
    $inv.innerHTML = state.inventory.map(it => '<li>' + it + '</li>').join('');
  }

  // Mobile mini status bar
  $mstName.textContent = state.name;
  $mstLv.textContent = 'Lv.' + state.level;
  $mstHp.textContent = 'HP ' + state.hp;
  $mstPetri.textContent = L('石化 ', 'Petri ') + state.petri + '%';

  renderAvatar();
}

// Legacy renderScene: for simple scenes (combat results etc)
function renderScene(text, choices) {
  stopAuto();
  hideExploreBar();
  removePending();
  appendDivider();
  $choices.innerHTML = '';
  currentChoices = [];

  showPending();
  setTimeout(function() {
    removePending();
    var block = document.createElement('div');
    block.innerHTML = text;
    $story.appendChild(block);
    $story.scrollTop = $story.scrollHeight;
    renderStatus();
    showChoices(choices);
  }, 500);
}

function showChoices(choices) {
  $choices.innerHTML = '';
  var keys = ['A','B','C','D','E','F','G','H','I','J'];
  choices.forEach(function(c, i) {
    var btn = document.createElement('button');
    btn.className = 'choice-btn';
    var choiceLabel = c.label ? c.label : ((state.lang === 'en' && c.textEn) ? c.textEn : c.text);
    btn.innerHTML = '<span class="key-hint">' + keys[i] + '</span><span>' + choiceLabel + '</span>';
    btn.addEventListener('click', function() { selectChoice(i); });
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(8px)';
    $choices.appendChild(btn);
    setTimeout(function() {
      btn.style.transition = 'opacity .3s, transform .3s';
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    }, 80 * i);
  });
  currentChoices = choices;
  // Re-scroll story after choices animate in and take space
  setTimeout(function() { $story.scrollTop = $story.scrollHeight; }, 100 * choices.length + 80);
}

// ═══════════════════════════════════════════════════
//  Keyboard Shortcuts
// ═══════════════════════════════════════════════════

// ── Keyboard: hold Space/Enter ≥500ms = skip all text ──
var _keyLP = null;
var _keyLPKey = null;

document.addEventListener('keydown', (e) => {
  // Ignore keyboard shortcuts while title screen is active
  var ts = document.getElementById('title-screen');
  if (ts && !ts.classList.contains('hidden')) return;
  if ($deathOv.classList.contains('active')) {
    if (e.key === 'Enter' || e.key === ' ') revive();
    return;
  }
  // Fast-forward auto-explore with Space or Enter
  if (autoRunning && (e.key === ' ' || e.key === 'Enter')) {
    e.preventDefault();
    if (!e.repeat) {
      // First press — single skip + start long-press timer
      autoFast = true;
      _keyLPKey = e.key;
      if (_keyLP) clearTimeout(_keyLP);
      _keyLP = setTimeout(function() {
        _keyLP = null;
        longPressSkipAll();
      }, 500);
    }
    return;
  }
  const map = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, '0': 9 };
  const idx = map[e.key.toLowerCase()];
  if (idx !== undefined && idx < currentChoices.length) {
    selectChoice(idx);
  }
});

document.addEventListener('keyup', (e) => {
  if (_keyLP && (e.key === _keyLPKey)) {
    clearTimeout(_keyLP);
    _keyLP = null;
    _keyLPKey = null;
  }
});

function selectChoice(idx) {
  if (idx >= currentChoices.length) return;
  const action = currentChoices[idx].action;
  currentChoices = [];
  action();
}
