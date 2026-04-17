// ══ UI Rendering ══

// Delegated click on inventory list — any clickable item opens the detail popup
$inv.addEventListener('click', function(e) {
  var t = e.target;
  while (t && t !== $inv && !(t.classList && t.classList.contains('inv-clickable'))) {
    t = t.parentElement;
  }
  if (t && t !== $inv && t.classList && t.classList.contains('inv-clickable')) {
    var name = t.getAttribute('data-item');
    if (name && typeof showItemDetail === 'function') showItemDetail(name);
  }
});

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
    // Group duplicates so they render with a ×N count
    var counts = {};
    var order = [];
    for (var ii = 0; ii < state.inventory.length; ii++) {
      var n = state.inventory[ii];
      if (counts[n] == null) { counts[n] = 0; order.push(n); }
      counts[n]++;
    }
    $inv.innerHTML = order.map(function(it) {
      var rarity = (typeof getItemRarity === 'function') ? getItemRarity(it) : 'common';
      var usable = (typeof isConsumable === 'function') && isConsumable(it);
      var qty = counts[it];
      var qtyLabel = qty > 1 ? ' <span class="inv-qty">×' + qty + '</span>' : '';
      // All items are clickable (open detail popup); usable items get extra marker
      var cls = 'rarity-' + rarity + ' inv-clickable' + (usable ? ' inv-usable' : '');
      var title = usable
        ? L('點擊查看 · 可使用', 'Click for details · usable')
        : L('點擊查看', 'Click for details');
      var attrs = ' data-item="' + it.replace(/"/g, '&quot;') + '" title="' + title + '"';
      return '<li class="' + cls + '"' + attrs + '>' + it + qtyLabel + '</li>';
    }).join('');
  }

  // Equipment display
  var $equipList = document.getElementById('equip-list');
  if ($equipList && typeof getEquipped === 'function') {
    var slots = [
      { key: 'weapon', zh: '武器', en: 'Weapon' },
      { key: 'armor',  zh: '護甲', en: 'Armor' },
      { key: 'acc',    zh: '飾品', en: 'Accessory' }
    ];
    var ehtml = '';
    var hasAny = false;
    for (var si = 0; si < slots.length; si++) {
      var s = slots[si];
      var equipped = getEquipped(s.key);
      if (equipped) {
        hasAny = true;
        var rarity = (typeof getItemRarity === 'function') ? getItemRarity(equipped) : 'common';
        var data = (typeof getEquipData === 'function') ? getEquipData(equipped) : null;
        var bonus = '';
        if (data) {
          if (data.dmg) bonus = ' +' + data.dmg + L('傷害', ' DMG');
          if (data.def) bonus = ' -' + data.def + '%' + L('傷害', ' DMG');
          if (data.label) bonus = ' ' + (state.lang === 'en' ? data.labelEn : data.label);
        }
        ehtml += '<div class="equip-row"><span class="equip-slot">' + (state.lang === 'en' ? s.en : s.zh) + '</span> <span class="rarity-' + rarity + '">' + equipped + '</span><span class="equip-bonus">' + bonus + '</span></div>';
      }
    }
    var $equipSection = document.getElementById('equip-section');
    if ($equipSection) {
      $equipSection.style.display = hasAny ? '' : 'none';
      $equipList.innerHTML = ehtml;
    }
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
        var numLabel = npc.num != null ? '<span class="npc-num">' + npc.num + '%</span>' : '';
        var romanceTag = '';
        if (state.romance === npc.id) {
          romanceTag = '<span class="npc-romance-tag">' + L('♥戀人', '♥Lover') + '</span>';
        } else if (typeof getAffinityLevel === 'function') {
          var lvl = getAffinityLevel(npc.id);
          if (lvl >= 3) {
            romanceTag = '<span class="npc-level-tag">' + getAffinityLevelName(lvl) + '</span>';
          }
        }
        html += '<div class="npc-row">'
          + '<span class="npc-name">' + (state.lang === 'en' ? npc.nameEn : npc.name) + '</span>'
          + '<span class="npc-hearts">' + hearts + '</span>'
          + numLabel
          + romanceTag
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
  // Bail if player just died synchronously — don't render narrative over death overlay
  var dOv = document.getElementById('death-overlay');
  if (state.hp <= 0 || (dOv && dOv.classList.contains('active'))) {
    return;
  }
  hideExploreBar();
  removePending();
  if (typeof forceScrollStoryToBottom === 'function') forceScrollStoryToBottom();
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
    scrollStoryToBottom();
    renderStatus();
    showChoices(choices);
  }, 500);
}

// Extract loadNode('xxx') target from a choice action for visited-state highlighting.
function _extractLoadNodeTarget(fn) {
  if (typeof fn !== 'function') return null;
  try {
    var src = fn.toString();
    var m = src.match(/loadNode\(\s*['"]([^'"]+)['"]\s*\)/);
    return m ? m[1] : null;
  } catch (e) { return null; }
}

// ── Item detail popup ──
// Backdrop click + Escape dismiss the item detail overlay (bound once)
(function() {
  var $ov = document.getElementById('item-detail-overlay');
  if (!$ov) return;
  $ov.addEventListener('click', function(e) {
    if (e.target === $ov) $ov.classList.remove('active');
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && $ov.classList.contains('active')) {
      $ov.classList.remove('active');
    }
  });
})();

function showItemDetail(itemName) {
  var $ov = document.getElementById('item-detail-overlay');
  if (!$ov) return;
  var $name = document.getElementById('item-detail-name');
  var $type = document.getElementById('item-detail-type');
  var $effect = document.getElementById('item-detail-effect');
  var $qty = document.getElementById('item-detail-qty');
  var $useBtn = document.getElementById('item-detail-use-btn');
  var $closeBtn = document.getElementById('item-detail-close-btn');
  var en = state.lang === 'en';

  // Classify the item
  var consData = (typeof getConsumableData === 'function') ? getConsumableData(itemName) : null;
  var equipData = (typeof getEquipData === 'function') ? getEquipData(itemName) : null;

  // Count duplicates
  var qty = 0;
  for (var i = 0; i < state.inventory.length; i++) {
    if (state.inventory[i] === itemName) qty++;
  }

  // Apply rarity color to name
  var rarity = (typeof getItemRarity === 'function') ? getItemRarity(itemName) : 'common';
  $name.className = 'item-detail-name rarity-' + rarity;
  $name.textContent = itemName;

  // Type label + effect description
  var typeLabel = '';
  var effectText = '';
  if (consData) {
    typeLabel = en ? 'Consumable' : '消耗品';
    effectText = (en && consData.labelEn) ? consData.labelEn : (consData.label || '');
  } else if (equipData) {
    var slotNames = {
      weapon: { zh: '武器', en: 'Weapon' },
      armor:  { zh: '護甲', en: 'Armor' },
      acc:    { zh: '飾品', en: 'Accessory' }
    };
    var sn = slotNames[equipData.slot] || { zh: '裝備', en: 'Equipment' };
    typeLabel = en ? sn.en : sn.zh;
    var parts = [];
    if (equipData.dmg)         parts.push((en ? 'Attack +' : '攻擊 +') + equipData.dmg);
    if (equipData.def)         parts.push((en ? 'Defense +' : '防禦 +') + equipData.def + '%');
    if (equipData.petriResist) parts.push((en ? 'Petri Resist ' : '抗石化 ') + '-' + equipData.petriResist);
    if (equipData.str)         parts.push('STR +' + equipData.str);
    if (equipData.agi)         parts.push('AGI +' + equipData.agi);
    if (equipData.wil)         parts.push('WIL +' + equipData.wil);
    effectText = parts.join('，');
    // Check if equipped
    var equippedName = state.flags['equip_' + equipData.slot];
    if (equippedName === itemName) {
      effectText += (en ? '\n(Currently equipped)' : '\n（目前已裝備）');
    }
  } else {
    typeLabel = en ? 'Key Item' : '關鍵物品';
    effectText = en
      ? 'A curious item. No active effect — but it may unlock something, somewhere.'
      : '某種意義不明的物件。沒有主動效果——但也許能在某處派上用場。';
  }
  $type.textContent = typeLabel;
  $effect.textContent = effectText;
  $qty.textContent = qty > 1 ? (en ? 'Quantity: ×' + qty : '持有：×' + qty) : '';

  // Button wiring
  if (consData) {
    $useBtn.style.display = '';
    $useBtn.textContent = en ? 'Use' : '使用';
    $useBtn.onclick = function() {
      $ov.classList.remove('active');
      if (typeof useInventoryItem === 'function') useInventoryItem(itemName);
    };
  } else {
    $useBtn.style.display = 'none';
    $useBtn.onclick = null;
  }
  $closeBtn.textContent = consData ? (en ? 'Cancel' : '取消') : (en ? 'Close' : '關閉');
  $closeBtn.onclick = function() { $ov.classList.remove('active'); };

  $ov.classList.add('active');
}

function showChoices(choices) {
  $choices.innerHTML = '';
  var keys = ['A','B','C','D','E','F','G','H','I','J'];
  choices.forEach(function(c, i) {
    var btn = document.createElement('button');
    btn.className = 'choice-btn';
    // Greyscale visited choices: if action navigates to a node we've already loaded, dim it
    var target = _extractLoadNodeTarget(c.action);
    if (target && state.visitedNodes && state.visitedNodes[target]) {
      btn.classList.add('visited');
    }
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
    scrollStoryToBottom();
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
  const choice = currentChoices[idx];
  // Modal actions (opening endcard/leaderboard without navigating away) need
  // to keep the choice list intact so buttons remain clickable after the
  // modal is dismissed. Regular actions clear choices to prevent double-fire.
  if (!choice.modal) currentChoices = [];
  choice.action();
}
