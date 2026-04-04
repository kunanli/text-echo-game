// ══ Node System + Death/Revive ══

// ─── Death / Revive ───
function die(msg) {
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
  $revive.textContent = hasStone
    ? L('使用復活石', 'Use Revival Stone')
    : L('沒有復活石……', 'No Revival Stone...');
  $revive.style.opacity = hasStone ? '1' : '0.4';
  $revive.disabled = !hasStone;

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
  var REVIVE_SAFE = { 'r0_tunnel': 'r0_climb_check', 'r1_guard_fight': 'r1_look', 'r1_guard_check': 'r1_look', 'r2_boss': 'r2_camp', 'r2_boss_prep': 'r2_camp', 'r3_patrol': 'r3_look', 'r3_boss': 'r3_council', 'r3_boss_prep': 'r3_council' };
  var safeNode = state.node;
  if (REVIVE_SAFE[safeNode]) {
    safeNode = REVIVE_SAFE[safeNode];
  } else if (!safeNode || !nodes[safeNode] || safeNode.includes('combat') || safeNode.includes('guard_fight') || safeNode.includes('patrol') || safeNode.includes('tunnel')) {
    safeNode = regionStartNode();
  }
  loadNode(safeNode);
}

$revive.addEventListener('click', revive);

// Restart from beginning
var $restartBtn = document.getElementById('restart-btn');
if ($restartBtn) {
  $restartBtn.addEventListener('click', function() {
    $deathOv.classList.remove('active');
    if (typeof localStorage !== 'undefined') localStorage.removeItem('petriabyss_save');
    location.reload();
  });
}

function regionStartNode() {
  return ['r0_start','r1_start','r2_start','r3_start'][state.region] || 'r0_start';
}

// ─── Node System ───
const nodes = {};

function registerNode(id, fn) { nodes[id] = fn; }

function loadNode(id) {
  state.node = id;
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
  choices.push({ text: en ? 'Cancel' : '取消', textEn: 'Cancel', action: function() { loadNode(regionStartNode()); } });

  autoExplore(steps, choices, { label: L('章節選擇', 'Chapter Select') });
});
