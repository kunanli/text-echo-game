// ══ Node System + Death/Revive ══

// ─── Death / Revive ───
function die(msg) {
  // Stop patrol if active
  if (patrolActive) { patrolActive = false; clearPatrolTimers(); }
  stopAuto();
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
  // Return to current region start
  loadNode(state.node.includes('combat') ? regionStartNode() : state.node);
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
