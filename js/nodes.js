// ══ Node System + Death/Revive ══

// ─── Death / Revive ───
function die(msg) {
  // Track consecutive deaths for mercy system
  state.flags._consecutiveDeaths = (state.flags._consecutiveDeaths || 0) + 1;

  // Stop patrol if active
  patrolActive = false;
  clearPatrolTimers();
  stopAuto();
  state.mood = 'normal';
  ambientAudio.setCombat(false);
  $choices.innerHTML = '';
  currentChoices = [];
  $deathMsg.textContent = msg || L('你死了……', 'You died...');
  sfx.death();

  // Update revive button based on revival stone availability
  var hasStone = hasItem('復活石') || hasItem('Revival Stone');
  var $goBtn = document.getElementById('gameover-btn');
  $revive.textContent = hasStone
    ? L('使用復活石', 'Use Revival Stone')
    : L('沒有復活石……', 'No Revival Stone...');
  $revive.style.opacity = hasStone ? '1' : '0.4';
  $revive.disabled = !hasStone;

  // Show "accept fate" button when no stone
  if ($goBtn) {
    $goBtn.style.display = hasStone ? 'none' : '';
    $goBtn.textContent = L('接受命運', 'Accept Fate');
    if (!hasStone) state.deathCount++;
  }

  $deathOv.classList.add('active');
}

function revive() {
  var stoneZh = '復活石';
  var stoneEn = 'Revival Stone';
  var hasStone = hasItem(stoneZh) || hasItem(stoneEn);

  if (!hasStone) {
    // No revival stone — cannot revive
    notify(L('你沒有復活石……無法復活。', 'No Revival Stone... cannot revive.'));
    return;
  }

  // Consume the revival stone
  if (hasItem(stoneZh)) removeItem(stoneZh);
  else removeItem(stoneEn);

  state.deathCount++;
  state.hp = Math.floor(state.maxHp * 0.6);
  state.petri = Math.max(0, state.petri - 30);
  $deathOv.classList.remove('active');
  sfx.item();
  notify(L('復活石碎裂——你從石殼中掙脫！（復活次數：' + state.deathCount + '）', 'Revival Stone shatters — you break free! (Deaths: ' + state.deathCount + ')'));
  renderStatus();
  // Return to a safe node — avoid reloading combat/patrol/tunnel nodes
  // Uses extensible safe-revive map from registry.js
  var safeNode = getSafeReviveNode(state.node);
  if (!safeNode || !nodes[safeNode]) safeNode = regionStartNode();
  loadNode(safeNode);
}

$revive.addEventListener('click', revive);

// Restart from beginning — show endcard first if no revival stone
var $restartBtn = document.getElementById('restart-btn');
if ($restartBtn) {
  $restartBtn.addEventListener('click', function() {
    $deathOv.classList.remove('active');
    // Show endcard before restarting
    if (typeof showEndCard === 'function') {
      showEndCard();
      var $ecOverlay = document.getElementById('endcard-overlay');
      var $ecClose = document.getElementById('endcard-close-btn');
      if ($ecClose) {
        var origClose = $ecClose.onclick;
        $ecClose.onclick = function() {
          if (origClose) origClose();
          $ecOverlay.classList.remove('active');
          if (typeof localStorage !== 'undefined') localStorage.removeItem('petriabyss_save');
          location.reload();
        };
      }
    } else {
      if (typeof localStorage !== 'undefined') localStorage.removeItem('petriabyss_save');
      location.reload();
    }
  });
}

// Game Over → Fortune Teller → Endcard → Leaderboard
var $goBtn = document.getElementById('gameover-btn');
if ($goBtn) {
  $goBtn.addEventListener('click', function() {
    $deathOv.classList.remove('active');
    startGameOverSequence();
  });
}

function startGameOverSequence() {
  var en = state.lang === 'en';
  var fortuneArt = [
    '          ╭─────╮',
    '         ╱ ◉   ◉ ╲',
    '        │    ▽    │',
    '        │  ╰───╯  │',
    '      ╭─┤─────────├─╮',
    '     ╱░░│ ◇ ◇ ◇ ◇│░░╲',
    '    │░░░╰─────────╯░░░│',
    '    │░░░░░╱     ╲░░░░░│',
    '    │░░░╱ ╭─────╮ ╲░░░│',
    '     ╲░╱  │ ✦✦✦ │  ╲░╱',
    '      ╱   │ ✦✦✦ │   ╲',
    '     ╱    ╰─────╯    ╲',
  ];

  var regionName = getRegionName(state.region);

  var lines = [
    { zh: '「……又一個旅者倒下了。」', en: '"...Another traveler has fallen."' },
    { zh: '「讓我看看你的命運之石。」', en: '"Let me read your stone of fate."' },
    { zh: '「' + state.name + '……' + regionName + '……」', en: '"' + state.name + '... ' + regionName + '..."' },
    { zh: '「你走了很遠，但深淵不會輕易放過任何人。」', en: '"You came far, but the abyss spares no one easily."' },
    { zh: '「這就是刻在你石碑上的名字。」', en: '"This is the name carved upon your stone."' },
  ];

  var divinerArtHtml = (typeof npcPortrait !== 'undefined') ? npcPortrait.art('diviner', { subtitle: '占卜師' }) : null;
  var divinerArtEnHtml = (typeof npcPortrait !== 'undefined') ? npcPortrait.art('diviner', { subtitle: 'Diviner' }) : null;
  var fallbackArt = '<pre class="ascii-art" style="color:#9a8ac8; font-size:.7rem;">' + fortuneArt.join('\n') + '</pre>';

  var steps = [
    { tag: '???', tagColor: 'tag-petri',
      art: divinerArtHtml || fallbackArt,
      artEn: divinerArtEnHtml || fallbackArt,
      delay: 2500 },
    { tag: '占卜師', tagColor: 'tag-petri',
      text: lines[0].zh, textEn: lines[0].en, delay: 2500 },
    { tag: '占卜師', tagColor: 'tag-petri',
      text: lines[1].zh, textEn: lines[1].en, delay: 2500 },
    { tag: '占卜師', tagColor: 'tag-petri',
      text: lines[2].zh, textEn: lines[2].en, delay: 3000 },
    { tag: '占卜師', tagColor: 'tag-petri',
      text: lines[3].zh, textEn: lines[3].en, delay: 3000 },
    { tag: '占卜師', tagColor: 'tag-petri',
      text: lines[4].zh, textEn: lines[4].en, delay: 2500 },
  ];

  autoExplore(steps, [
    { text: '查看石碑', textEn: 'View the stone tablet', action: function() {
      if (typeof showEndCard === 'function') showEndCard();
      // After endcard is closed, show leaderboard then restart options
      var $ecOverlay = document.getElementById('endcard-overlay');
      var $ecClose = document.getElementById('endcard-close-btn');
      if ($ecClose) {
        var origClose = $ecClose.onclick;
        $ecClose.onclick = function() {
          if (origClose) origClose();
          $ecOverlay.classList.remove('active');
          setTimeout(function() {
            showDeathRestartChoices();
          }, 300);
        };
      }
    }},
  ], { label: L('命運揭示', 'Fate Revealed') });
}

function showDeathRestartChoices() {
  var choices = [
    { text: '查看排行榜', textEn: 'View Leaderboard', action: function() {
      if (typeof showLeaderboard === 'function') {
        showLeaderboard();
        // Hook leaderboard close to re-show choices
        var $lbClose = document.getElementById('leaderboard-close-btn');
        if ($lbClose) {
          var origLbClose = $lbClose.onclick;
          $lbClose.onclick = function() {
            if (origLbClose) origLbClose();
            setTimeout(function() { showDeathRestartChoices(); }, 200);
          };
        }
      }
    }},
    { text: '再看一次石碑', textEn: 'View Stone Tablet Again', action: function() {
      if (typeof showEndCard === 'function') {
        showEndCard();
        var $ecClose = document.getElementById('endcard-close-btn');
        if ($ecClose) {
          var origClose = $ecClose.onclick;
          $ecClose.onclick = function() {
            if (origClose) origClose();
            document.getElementById('endcard-overlay').classList.remove('active');
            setTimeout(function() { showDeathRestartChoices(); }, 200);
          };
        }
      }
    }},
    { text: '從頭開始', textEn: 'Start Over', action: function() {
      if (typeof localStorage !== 'undefined') localStorage.removeItem(SAVE_KEY);
      location.reload();
    }},
  ];
  showChoices(choices);
}

function regionStartNode() {
  return getStartNode(state.region);
}

// ─── Node System ───
const nodes = {};

// registerNode(id, fn [, meta])
// meta is optional: { region, type, npc, npcs, tags }
// When provided, also registers node metadata in registry.js
function registerNode(id, fn, meta) {
  nodes[id] = fn;
  if (meta) registerNodeMeta(id, meta);
}

function loadNode(id) {
  state.node = id;
  if (!state.visitedNodes) state.visitedNodes = {};
  state.visitedNodes[id] = true;
  if (state.region > (state.maxRegion || 0)) {
    state.maxRegion = state.region;
    if (typeof showFallenTravelers === 'function') showFallenTravelers(state.region);
  }
  if (typeof saveGame === 'function') saveGame();
  // Check achievements on node transitions
  if (typeof triggerAchievementCheck === 'function') triggerAchievementCheck();
  // Update ambient audio to match current region
  ambientAudio.setRegion(state.region);
  if (typeof statsTrackRegion === 'function') statsTrackRegion(state.region);
  if (nodes[id]) {
    nodes[id]();
  } else {
    renderScene('<i>' + L('（未實裝的節點：' + id + '）', '(Unimplemented node: ' + id + ')') + '</i>', [
      { text: '返回', textEn: 'Return', action: () => loadNode(regionStartNode()) }
    ]);
  }
}

// ─── Chapter Select (in-game) ───
registerNode('chapter_select', function() {
  var en = state.lang === 'en';
  var devUnlocked = state.flags._devUnlockAll;

  // Use CHAPTERS from title.js if loaded, else build from REGION_CONFIG (registry.js)
  var chData = typeof CHAPTERS !== 'undefined' ? CHAPTERS : REGION_CONFIG.filter(Boolean).map(function(r) {
    return { id: r.id, zh: r.zh, en: r.en, node: r.hub, icon: r.icon,
      loreZh: '', loreEn: '' };
  });

  // ── Enlarged ASCII map ──
  var lines = [];
  lines.push(en ? '       ☼  ☼  ☼   S U R F A C E   ☼  ☼  ☼' : '       ☼  ☼  ☼    地       表    ☼  ☼  ☼');
  lines.push('      ╔════════════════════════════════╗');
  lines.push(en ? '      ║    ~~~  ocean  ~~~            ║' : '      ║    ～～～ 海  面 ～～～         ║');
  lines.push('      ╠════════════════════════════════╣');

  for (var i = chData.length - 1; i >= 0; i--) {
    var ch = chData[i];
    var unlocked = devUnlocked || (state.maxRegion || state.region) >= ch.id;
    var isCurrent = state.region === ch.id;
    var depth = en ? (' F' + (i + 1) + ' ') : (' ' + '一二三四'[i] + '層 ');
    var marker = isCurrent ? ' ◄◄' : '   ';

    if (unlocked) {
      var name = en ? ch.en : ch.zh;
      var desc = en ? (ch.descEn || '') : (ch.descZh || '');
      lines.push('      ║                                ║');
      lines.push(depth + ' ║    ' + ch.icon + '  ' + name + marker);
      lines.push('      ║    ' + desc);
      lines.push('      ║                                ║');
    } else {
      lines.push('      ║                                ║');
      lines.push(depth + ' ║    ░░░░░  ？？？  ░░░░░');
      lines.push('      ║    ░░░░░░░░░░░░░░░░░░░░');
      lines.push('      ║                                ║');
    }
    if (i > 0) lines.push('      ╠────────────────────────────────╣');
  }
  lines.push('      ╚════════════════════════════════╝');
  lines.push(en ? '       ▼  ▼  ▼   A  B  Y  S  S   ▼  ▼  ▼' : '       ▼  ▼  ▼    深       淵    ▼  ▼  ▼');

  var steps = [
    { art: '<pre class="ascii-art gold">' + lines.join('\n') + '</pre>', delay: 300 },
    { tag: en ? 'SYSTEM' : '系統', tagColor: 'tag-system', text: en ? 'Select a chapter to preview, then confirm.' : '選擇一個章節查看，再確認前往。', delay: 300 },
  ];

  var choices = [];
  for (var i = 0; i < chData.length; i++) {
    (function(chapter) {
      var unlocked = devUnlocked || state.region >= chapter.id;
      if (!unlocked) return;
      var isCurrent = state.region === chapter.id;
      var label = chapter.icon + ' ' + (en ? chapter.en : chapter.zh) + (isCurrent ? (en ? ' (current)' : ' （當前）') : '');
      choices.push({ text: label, textEn: label, action: function() {
        // Show confirmation with lore description
        var lore = en ? (chapter.loreEn || '') : (chapter.loreZh || '');
        var confirmSteps = [
          { tag: en ? chapter.en : chapter.zh, tagColor: 'tag-npc',
            text: lore, delay: 400 },
        ];
        var confirmChoices = [
          { text: en ? 'Confirm — go to ' + chapter.en : '確認前往 —— ' + chapter.zh,
            textEn: 'Confirm — go to ' + chapter.en,
            action: function() { state.region = chapter.id; loadNode(chapter.node); } },
          { text: en ? 'Back to chapter list' : '返回章節列表',
            textEn: 'Back to chapter list',
            action: function() { loadNode('chapter_select'); } },
        ];
        autoExplore(confirmSteps, confirmChoices, { label: L('確認章節', 'Confirm Chapter') });
      }});
    })(chData[i]);
  }
  choices.push({ text: en ? 'Cancel' : '取消', textEn: 'Cancel', action: function() { loadNode(regionStartNode()); } });

  autoExplore(steps, choices, { label: L('章節選擇', 'Chapter Select') });
});
