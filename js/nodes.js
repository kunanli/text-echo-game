// ══ Node System + Death/Revive ══

// ─── Death / Revive ───
function die(msg) {
  // Stop patrol if active
  patrolActive = false;
  clearPatrolTimers();
  stopAuto();
  state.mood = 'normal';
  $choices.innerHTML = '';
  currentChoices = [];
  $deathMsg.textContent = msg || L('你死了……', 'You died...');
  $deathOv.classList.add('active');
}

function revive() {
  state.deathCount++;
  state.hp = Math.floor(state.maxHp * 0.6);
  state.petri = Math.max(0, state.petri - 30);
  $deathOv.classList.remove('active');
  notify(L('你從石殼中掙脫，重新站起。（復活次數：' + state.deathCount + '）', 'You break free from the stone shell. (Deaths: ' + state.deathCount + ')'));
  renderStatus();
  // Return to a safe node — avoid reloading combat/patrol/tunnel nodes
  // (tunnel nodes replay long auto-explore sequences with combat encounters)
  var REVIVE_SAFE = { 'r0_tunnel': 'r0_climb_check', 'r1_guard_fight': 'r1_look', 'r1_guard_check': 'r1_look', 'r2_boss': 'r2_camp', 'r2_boss_prep': 'r2_camp' };
  var safeNode = state.node;
  if (REVIVE_SAFE[safeNode]) {
    safeNode = REVIVE_SAFE[safeNode];
  } else if (!safeNode || !nodes[safeNode] || safeNode.includes('combat') || safeNode.includes('guard_fight') || safeNode.includes('patrol') || safeNode.includes('tunnel')) {
    safeNode = regionStartNode();
  }
  loadNode(safeNode);
}

$revive.addEventListener('click', revive);

function regionStartNode() {
  return ['r0_start','r1_start','r2_start','r3_start'][state.region] || 'r0_start';
}

// ─── Node System ───
const nodes = {};

function registerNode(id, fn) { nodes[id] = fn; }

function loadNode(id) {
  state.node = id;
  if (typeof saveGame === 'function') saveGame();
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

  // Use the shared CHAPTERS array from title.js
  var chData = typeof CHAPTERS !== 'undefined' ? CHAPTERS : [
    { id: 0, zh: '祭獻坑',   en: 'Sacrificial Pit',  node: 'r0_look', icon: '†',
      loreZh: '你從滾燙的熱泉中醒來……', loreEn: 'You awaken in a scalding hot spring...' },
    { id: 1, zh: '石脈迴廊', en: 'Vein Corridor',    node: 'r1_look', icon: '◇',
      loreZh: '石壁間流動著發光的礦脈……', loreEn: 'Glowing veins pulse through the stone walls...' },
    { id: 2, zh: '大採石場', en: 'Great Quarry',     node: 'r2_look', icon: '⛏',
      loreZh: '巨大的採石場向深淵敞開……', loreEn: 'A massive quarry yawns open toward the abyss...' },
    { id: 3, zh: '河城渡口', en: 'River City Ferry', node: 'r3_look', icon: '⚓',
      loreZh: '地底河流匯聚之處……', loreEn: 'Where underground rivers converge...' },
  ];

  // ── Enlarged ASCII map ──
  var lines = [];
  lines.push(en ? '       ☼  ☼  ☼   S U R F A C E   ☼  ☼  ☼' : '       ☼  ☼  ☼    地       表    ☼  ☼  ☼');
  lines.push('      ╔════════════════════════════════╗');
  lines.push(en ? '      ║    ~~~  ocean  ~~~            ║' : '      ║    ～～～ 海  面 ～～～         ║');
  lines.push('      ╠════════════════════════════════╣');

  for (var i = chData.length - 1; i >= 0; i--) {
    var ch = chData[i];
    var unlocked = devUnlocked || state.region >= ch.id;
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
  if (!devUnlocked) {
    choices.push({ text: en ? 'DEV: Unlock All' : 'DEV：全部解鎖', textEn: 'DEV: Unlock All', action: function() {
      state.flags._devUnlockAll = true;
      state.region = Math.max(state.region, chData.length - 1);
      notify(en ? 'All chapters unlocked!' : '全部章節已解鎖！');
      loadNode('chapter_select');
    }});
  }
  choices.push({ text: en ? 'Cancel' : '取消', textEn: 'Cancel', action: function() { loadNode(regionStartNode()); } });

  autoExplore(steps, choices, { label: L('章節選擇', 'Chapter Select') });
});
