// ══ UI Rendering ══

// ═══════════════════════════════════════════════════
//  Render UI
// ═══════════════════════════════════════════════════
function renderStatus() {
  $hp.textContent = state.hp + ' / ' + state.maxHp;
  $barHp.style.width = (state.hp / state.maxHp * 100) + '%';
  var pen = petriPenalty();
  var stageLabel = pen.stage > 0 ? (' Lv.' + pen.stage) : '';
  $petri.textContent = state.petri + '%' + stageLabel;
  $barPetri.style.width = state.petri + '%';
  // Show effective stats with penalty indicator
  $str.textContent = pen.str < 0 ? state.str + '(' + pen.str + ')' : state.str;
  $agi.textContent = pen.agi < 0 ? state.agi + '(' + pen.agi + ')' : state.agi;
  $wil.textContent = pen.wil < 0 ? state.wil + '(' + pen.wil + ')' : state.wil;
  $levelVal.textContent = state.level;
  $xpVal.textContent = state.xp + ' / ' + state.xpToNext;
  $xpBar.style.width = (state.xp / state.xpToNext * 100) + '%';
  $loc.textContent = getRegion(state.region) || '';
  if (state.lang === 'en') {
    $region.textContent = 'Floor ' + (state.region + 1) + ' — ' + getRegion(state.region);
  } else {
    $region.textContent = '第' + '一二三四'[state.region] + '層 — ' + getRegion(state.region);
  }
  // NG+ cycle indicator
  var $cycleRow = document.getElementById('cycle-row');
  if ($cycleRow) {
    if (state.flags.ngPlus) {
      var run = state.flags.ngPlusRun || 1;
      var scale = Math.pow(2, run);
      var cycleNames = ['', '二周目', '三周目', '四周目'];
      document.getElementById('stat-cycle').textContent = state.lang === 'en'
        ? 'Cycle ' + (run + 1) + ' (' + scale + 'x)'
        : (cycleNames[run] || (run + 1) + '周目') + '（' + scale + '倍）';
      $cycleRow.style.display = '';
    } else {
      $cycleRow.style.display = 'none';
    }
  }

  // Gold display
  var $goldRow = document.getElementById('gold-row');
  var $goldVal = document.getElementById('stat-gold');
  var $goldLabel = document.getElementById('label-gold');
  var gold = state.flags.gold || 0;
  if (gold > 0) {
    $goldRow.style.display = '';
    $goldLabel.textContent = state.lang === 'en' ? 'Gold' : '金幣';
    $goldVal.textContent = gold;
  } else {
    $goldRow.style.display = 'none';
  }

  // Inventory count badge
  var $invCount = document.getElementById('inv-count');
  if ($invCount) {
    $invCount.textContent = state.inventory.length > 0 ? '(' + state.inventory.length + ')' : '';
  }

  if (state.inventory.length === 0) {
    $inv.innerHTML = '<li class="inventory-empty">' + L('空', 'Empty') + '</li>';
  } else {
    $inv.innerHTML = state.inventory.map(function(it) {
      var rarity = (typeof getItemRarity === 'function') ? getItemRarity(it) : 'common';
      return '<li class="rarity-' + rarity + '">' + it + '</li>';
    }).join('');
  }

  // NPC Affinity display
  if (typeof getAllNpcAffinity === 'function') {
    var npcList = getAllNpcAffinity();
    var $npcSection = document.getElementById('npc-section');
    var $npcList = document.getElementById('npc-affinity-list');
    if (npcList.length > 0) {
      $npcSection.style.display = '';
      document.getElementById('label-npc').textContent = L('好感度', 'AFFINITY');
      var html = '';
      for (var ni = 0; ni < npcList.length; ni++) {
        var npc = npcList[ni];
        var hearts = '';
        for (var hi = 0; hi < npc.max; hi++) {
          hearts += hi < npc.affinity
            ? '<span class="npc-heart-full">♥</span>'
            : '<span class="npc-heart-empty">♡</span>';
        }
        var giftHtml = '';
        if (typeof isGiftAvailable === 'function' && isGiftAvailable(npc.id)) {
          giftHtml = '<button class="npc-gift-btn" data-npc="' + npc.id + '">'
            + L('領取', 'Claim') + '</button>';
        } else if (typeof isGiftClaimed === 'function' && isGiftClaimed(npc.id)) {
          giftHtml = '<span class="npc-gift-claimed">✓</span>';
        }
        html += '<div class="npc-row">'
          + '<span class="npc-name">' + (state.lang === 'en' ? npc.nameEn : npc.name) + '</span>'
          + '<span class="npc-hearts">' + hearts + '</span>'
          + giftHtml
          + '</div>';
      }
      $npcList.innerHTML = html;
      // Bind gift buttons
      var giftBtns = $npcList.querySelectorAll('.npc-gift-btn');
      for (var gi = 0; gi < giftBtns.length; gi++) {
        giftBtns[gi].addEventListener('click', (function(npcId) {
          return function() { claimNpcGift(npcId); };
        })(giftBtns[gi].getAttribute('data-npc')));
      }
    } else {
      $npcSection.style.display = 'none';
    }
  }

  // Mobile mini status bar
  $mstName.textContent = state.name;
  $mstLv.textContent = 'Lv.' + state.level;
  $mstHp.textContent = 'HP ' + state.hp;
  $mstPetri.textContent = L('石化 ', 'Petri ') + state.petri + '%' + stageLabel;
  // Show top NPC on mobile
  var $mstNpc = document.getElementById('mst-npc');
  if ($mstNpc && typeof getTopNpc === 'function') {
    var topNpc = getTopNpc();
    if (topNpc) {
      $mstNpc.style.display = '';
      var nLabel = state.lang === 'en' ? topNpc.nameEn : topNpc.name;
      $mstNpc.textContent = '♥' + nLabel + ' ' + topNpc.affinity + '/' + topNpc.max;
    } else {
      $mstNpc.style.display = 'none';
    }
  }

  // Achievement count
  if (typeof renderAchievementCount === 'function') renderAchievementCount();

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
    // Voice narration for scene text
    voiceNarrator.speak(text, state.lang);
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
  // Re-scroll story after choices animate in and focus first button for keyboard nav
  setTimeout(function() {
    $story.scrollTop = $story.scrollHeight;
    var firstBtn = $choices.querySelector('.choice-btn');
    if (firstBtn) firstBtn.focus();
  }, 80 * choices.length + 120);
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
  sfx.click();
  const action = currentChoices[idx].action;
  currentChoices = [];
  action();
}
