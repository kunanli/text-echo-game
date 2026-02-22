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
