// ══ Region 3 — 河城渡口 (River City Ferry) ══

// ═══════════════════════════════════════════════════
//  Region 3 — 河城渡口 Core Nodes
// ═══════════════════════════════════════════════════

registerNode('r3_start', () => {
  state.region = 3;
  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '上升通道的盡頭，一股潮濕的風撲面而來。', textEn: 'At the end of the ascent shaft, a damp wind hits your face.', delay: 1500 },
    { art: `<pre class="ascii-art cyan">
  ╔═══════════════════════════════════════════════════════╗
  ║                                                       ║
  ║              河    城    渡    口                      ║
  ║                                                       ║
  ╠═══════════════════════════════════════════════════════╣
  ║            ~  ~  ~  ~  ~  ~  ~  ~  ~                  ║
  ║          ~~ ╔═══════════╗ ~~  ~~                      ║
  ║        ~~   ║ ┌───┐     ║   ~~                        ║
  ║      ~~     ║ │ ⚓ │     ║     ~~                      ║
  ║    ~~  ╔════╩═╧═══╧═════╩════╗  ~~                    ║
  ║  ~~    ║ ▓ ▓ ▓ 碼 頭 ▓ ▓ ▓  ║    ~~                  ║
  ║ ~~     ╚═══════╤═══╤════════╝     ~~                  ║
  ║  ~~        ┌───┤   ├───┐        ~~                    ║
  ║    ~~      │市 │   │ 會│      ~~                      ║
  ║      ~~    │ 場│   │議 │    ~~                        ║
  ║        ~~  └───┘   └───┘  ~~                          ║
  ║          ~~  ~  ~  ~  ~ ~~                            ║
  ║            ~  ~  ~  ~  ~                              ║
  ╚═══════════════════════════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art cyan">
  ╔═══════════════════════════════════════════════════════╗
  ║                                                       ║
  ║         R I V E R   C I T Y   F E R R Y              ║
  ║                                                       ║
  ╠═══════════════════════════════════════════════════════╣
  ║            ~  ~  ~  ~  ~  ~  ~  ~  ~                  ║
  ║          ~~ ╔═══════════╗ ~~  ~~                      ║
  ║        ~~   ║ ┌───┐     ║   ~~                        ║
  ║      ~~     ║ │ ⚓ │     ║     ~~                      ║
  ║    ~~  ╔════╩═╧═══╧═════╩════╗  ~~                    ║
  ║  ~~    ║ ▓ ▓ ▓  Dock  ▓ ▓ ▓ ║    ~~                  ║
  ║ ~~     ╚═══════╤═══╤════════╝     ~~                  ║
  ║  ~~        ┌───┤   ├───┐        ~~                    ║
  ║    ~~      │Mar│   │Cou│      ~~                      ║
  ║      ~~    │ket│   │ncl│    ~~                        ║
  ║        ~~  └───┘   └───┘  ~~                          ║
  ║          ~~  ~  ~  ~  ~ ~~                            ║
  ║            ~  ~  ~  ~  ~                              ║
  ╚═══════════════════════════════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', html: '你踏入了<b>河城渡口</b>。', htmlEn: 'You step into the <b>River City Ferry</b>.', delay: 1800 },
    { tag: '感知', tagColor: 'tag-sense', text: '這裡和你見過的任何地方都不同——不再是漆黑的洞穴或採石場，而是一座真正的地底城市。', textEn: 'Unlike anywhere you\'ve been — not a dark cave or quarry, but a true underground city.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '一條寬闊的地底河流從城市中央穿過。河面上映著兩岸建築的燈火。', textEn: 'A broad underground river runs through the city\'s center. Building lights from both banks shimmer on the water.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '空氣中混合著河水的腥味、炭火的煙氣、以及……人群的喧囂。', textEn: 'The air carries the scent of river water, charcoal smoke, and... the clamor of crowds.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '碼頭上停泊著幾艘平底渡船。有人在搬運貨物，有人在吵架，有人在交易。', textEn: 'Flat-bottomed ferries are moored at the dock. People haul cargo, argue, and trade.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '這是你在地底見過的第一個有秩序的人類聚落——雖然這個「秩序」看起來搖搖欲墜。', textEn: 'The first ordered human settlement you\'ve seen underground — though that "order" looks precarious.', delay: 2800 },
    { tag: '警告', tagColor: 'tag-warn', text: '碼頭入口的哨兵瞥了你一眼。他的目光在你身上的石化痕跡上停留了一秒——然後轉向別處。', textEn: 'A dock sentry glances at you. His gaze lingers on your petrification marks for a second — then looks away.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '你注意到碼頭上方掛著一面破舊的布告：「渡口議會令——外來者入城，須向登記所報到。」', textEn: 'You notice a tattered bulletin above the dock: "Ferry Council decree — all outsiders must report to the Registry."', delay: 3000 },
  ], [
    { text: '觀察渡口', textEn: 'Survey the ferry', action: () => loadNode('r3_look') },
  ], { label: L('進入河城渡口', 'Entering River City Ferry') });
});

// ── Hub node ──
registerNode('r3_look', () => {
  state.flags.r3Looked = true;
  var steps = [];

  if (!state.flags.r3YingArrived && state.flags.r1YingCompanion) {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你回頭看了一眼上升通道的出口——螢應該很快就會跟上來了。', textEn: 'You glance back at the ascent shaft exit — Ying should catch up soon.', delay: 2000 });
  }

  steps.push({ tag: '探索', tagColor: 'tag-explore', text: '渡口分為三個區域：碼頭、市場和議會廳。', textEn: 'The ferry district has three areas: the dock, the market, and the Council Hall.', delay: 2000 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '碼頭是城市的交通樞紐，渡船在這裡連接河流兩岸。', textEn: 'The dock is the city\'s transport hub, where ferries connect both riverbanks.', delay: 2000 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '市場聚集了地底各層的商人和流民。喧鬧聲不絕於耳。', textEn: 'The market gathers merchants and refugees from every underground level. The noise never stops.', delay: 2200 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '議會廳是渡口議會的所在地——這裡的法律由他們制定和執行。', textEn: 'The Council Hall is the Ferry Council\'s seat — laws here are made and enforced by them.', delay: 2200 });

  if (state.flags.r3DockVisited && state.flags.r3MarketVisited && !state.flags.r3CouncilUnlocked) {
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '你在碼頭和市場都聽到了<b>銅鐘</b>的名字。也許是時候去議會廳看看了。', htmlEn: 'You\'ve heard <b>Bronze Bell\'s</b> name at both the dock and market. Perhaps it\'s time to visit the Council Hall.', delay: 2500 });
    state.flags.r3CouncilUnlocked = true;
  }

  autoExplore(steps, (function() {
    var c = [];
    c.push({ text: '碼頭', textEn: 'Dock', action: () => loadNode('r3_dock') });
    c.push({ text: '市場', textEn: 'Market', action: () => loadNode('r3_market') });
    if (state.flags.r3CouncilUnlocked || state.flags.r3CouncilVisited) {
      c.push({ text: '議會廳', textEn: 'Council Hall', action: () => loadNode('r3_council') });
    }
    if (state.flags.r3InnUnlocked) {
      c.push({ text: '河畔客棧', textEn: 'Riverside Inn', action: () => loadNode('r3_inn') });
    }
    if (state.flags.r1YingCompanion) {
      c.push({ text: '找螢', textEn: 'Find Ying', action: () => loadNode('r3_ying_talk') });
    }
    c.push({ text: '巡邏（練級）', textEn: 'Patrol (grind)', action: () => loadNode('r3_patrol') });
    c.push({ text: '返回上升通道', textEn: 'Return to ascent shaft', action: () => loadNode('r2_gate') });
    return c;
  })(), { label: L('河城渡口', 'River City Ferry') });
});
