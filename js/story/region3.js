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
  state.region = 3;
  var firstVisit = !state.flags.r3Looked;
  state.flags.r3Looked = true;
  var steps = [];

  var mapArt = { art: `<pre class="ascii-art">
        北：河岸隧道
          │
  ┌───────┼───────────────┐
  │ ≈≈≈≈≈≈│≈≈≈≈≈≈≈≈≈≈≈≈≈ │
  │ ≈  河  ≈  ╔═══╗  ≈≈≈ │
  │ ≈≈≈≈≈≈≈≈  ║議會║  ≈≈ │
  │ ╔════╗ ≈  ╚═══╝  ≈≈≈ │
  │ ║客棧║─────橋─────≈≈ │
  │ ╚════╝ ≈  ┌───┐  ≈≈≈ │
  │ ≈≈≈≈≈≈≈≈  │市場│  ≈≈ │
  │ ≈  河  ≈  └───┘  ≈≈≈ │
  │ ≈≈≈≈≈≈≈≈  ⚓碼頭  ≈≈ │
  │ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ │
  └───────┼───────────────┘
          │
       南：上升通道（返回）
</pre>`, artEn: `<pre class="ascii-art">
         N: River Tunnels
          │
  ┌───────┼───────────────┐
  │ ≈≈≈≈≈≈│≈≈≈≈≈≈≈≈≈≈≈≈≈ │
  │ ≈ River ≈ ╔═════╗ ≈≈ │
  │ ≈≈≈≈≈≈≈≈  ║Council║ ≈ │
  │ ╔════╗ ≈  ╚═════╝ ≈≈ │
  │ ║ Inn║──── Bridge ──≈ │
  │ ╚════╝ ≈  ┌──────┐ ≈ │
  │ ≈≈≈≈≈≈≈≈  │Market│ ≈ │
  │ ≈ River ≈ └──────┘ ≈ │
  │ ≈≈≈≈≈≈≈≈  ⚓ Dock  ≈ │
  │ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ │
  └───────┼───────────────┘
          │
       S: Ascent Shaft (Return)
</pre>`, delay: 800 };
  steps.push(mapArt);

  if (firstVisit) {
    if (!state.flags.r3YingArrived && state.flags.r1YingCompanion) {
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你回頭看了一眼上升通道的出口——螢應該很快就會跟上來了。', textEn: 'You glance back at the ascent shaft exit — Ying should catch up soon.', delay: 2000 });
    }
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '渡口分為三個區域：碼頭、市場和議會廳。', textEn: 'The ferry district has three areas: the dock, the market, and the Council Hall.', delay: 2000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '碼頭是城市的交通樞紐，渡船在這裡連接河流兩岸。', textEn: 'The dock is the city\'s transport hub, where ferries connect both riverbanks.', delay: 2000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '市場聚集了地底各層的商人和流民。喧鬧聲不絕於耳。', textEn: 'The market gathers merchants and refugees from every underground level. The noise never stops.', delay: 2200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '議會廳是渡口議會的所在地——這裡的法律由他們制定和執行。', textEn: 'The Council Hall is the Ferry Council\'s seat — laws here are made and enforced by them.', delay: 2200 });
  } else {
    steps.push({ tag: '行動', tagColor: 'tag-move', text: '你回到了渡口中央。河風依舊帶著水霧，兩岸的燈火在水面上搖曳。', textEn: 'You return to the docks\' center. River wind still carries mist, lights from both banks dancing on the water.', delay: 1800 });
    if (state.flags.r3BellQuest && !state.flags.r3Ending) {
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '銅鐘交代的任務還在進行中。你需要抓緊時間。', textEn: 'Bronze Bell\'s tasks are still ongoing. You need to hurry.', delay: 1800 });
    }
  }

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
    if (state.flags.r3MarketVisited && !state.flags.r3ZhouMet) {
      c.push({ text: '市場角落的老人', textEn: 'Old man in the market corner', action: () => loadNode('r3_zhou') });
    }
    if (state.flags.r3BellQuest && !state.flags.r3Ending) {
      c.push({ text: '回報銅鐘（任務進度）', textEn: 'Report to Bronze Bell (quest progress)', action: () => loadNode('r3_quest_check') });
    }
    c.push({ text: '巡邏（練級）', textEn: 'Patrol (grind)', action: () => loadNode('r3_patrol') });
    c.push({ text: '返回上升通道', textEn: 'Return to ascent shaft', action: () => loadNode('r2_gate') });
    return c;
  })(), { label: L('河城渡口', 'River City Ferry') });
});

// ═══════════════════════════════════════════════════
//  Region 3 — Exploration Nodes
// ═══════════════════════════════════════════════════

// ── Dock ──
registerNode('r3_dock', () => {
  var firstVisit = !state.flags.r3DockVisited;
  state.flags.r3DockVisited = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
  ≈                                  ≈
  ≈    ┌─────┐  ┌─────┐  ┌─────┐    ≈
  ≈    │ ╱─╲ │  │ ╱─╲ │  │ ╱─╲ │    ≈
  ≈    │/   \\│  │/ 鐵 \\│  │/   \\│    ≈
  ≈    │ 渡船│  │ 鯨號│  │ 渡船│    ≈
  ≈    └──┬──┘  └──┬──┘  └──┬──┘    ≈
  ≈≈≈≈≈≈≈│≈≈≈≈≈≈≈≈│≈≈≈≈≈≈≈│≈≈≈≈≈≈≈≈
  ════════╧════════╧═══════╧════════
  ░░  ⚓  石砌碼頭  ·  繩索  ·  木箱  ░░
  ══════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art">
  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
  ≈                                  ≈
  ≈    ┌─────┐  ┌─────┐  ┌─────┐    ≈
  ≈    │ ╱─╲ │  │ ╱─╲ │  │ ╱─╲ │    ≈
  ≈    │/   \\│  │/Iron\\│  │/   \\│    ≈
  ≈    │Ferry│  │Whale│  │Ferry│    ≈
  ≈    └──┬──┘  └──┬──┘  └──┬──┘    ≈
  ≈≈≈≈≈≈≈│≈≈≈≈≈≈≈≈│≈≈≈≈≈≈≈│≈≈≈≈≈≈≈≈
  ════════╧════════╧═══════╧════════
  ░░  ⚓  Stone Dock · Rope · Crates ░░
  ══════════════════════════════════
</pre>`, delay: 800 });
  if (firstVisit) {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走向碼頭。河風裹著水霧撲在臉上，帶著鏽鐵和魚腥的氣味。', textEn: 'You head for the dock. River wind carries mist, rust, and fish against your face.', delay: 2000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '三艘平底渡船靠在石砌的碼頭邊。最大的那艘船頭刻著「鐵鯨號」三個字。', textEn: 'Three flat-bottomed ferries sit at the stone dock. The largest bears the name "Iron Whale" on its prow.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '碼頭工人們在搬運木箱和麻袋。一個老船長坐在繩堆上抽旱菸，看著你。', textEn: 'Dock workers haul crates and sacks. An old captain sits on coiled rope, smoking a pipe, watching you.', delay: 2500 });
  } else {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你又來到了碼頭。鐵鯨號還停在老位置，工人們照常忙碌著。', textEn: 'You\'re back at the dock. The Iron Whale still sits in its berth, workers busy as usual.', delay: 1800 });
    if (state.flags.r3CaptainTalked) {
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '老船長看到你，舉了舉菸斗算是打招呼。', textEn: 'The old captain sees you and raises his pipe in greeting.', delay: 1500 });
    }
  }

  if (!state.flags.r3CaptainTalked) {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '老船長朝你招了招手：「喂——新來的？看你身上那些石化紋，是從下面爬上來的吧。」', textEn: 'The old captain waves you over: "Hey — new here? Judging by those petri-marks, you climbed up from below."', delay: 3000 });
  }

  autoExplore(steps, (function() {
    var c = [];
    if (!state.flags.r3CaptainTalked) {
      c.push({ text: '和老船長聊聊', textEn: 'Talk to the captain', action: () => {
        state.flags.r3CaptainTalked = true;
        autoExplore([
          { art: npcPortrait.art('captain', { subtitle: '老船長' }), artEn: npcPortrait.art('captain', { subtitle: 'Captain' }), delay: 800 },
          { tag: '情報', tagColor: 'tag-info', text: '老船長吐了口煙：「我在這條河上跑了二十年。以前渡口可熱鬧了——上面來的商隊，下面來的礦工，日日夜夜。」', textEn: 'The captain exhales smoke: "Sailed this river twenty years. The docks used to bustle — caravans from above, miners from below, day and night."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「自從石化瘟疫擴散後，上游的路早就斷了。現在渡船只能在城內兩岸來回。」', textEn: '"Since the plague spread, the upstream route collapsed long ago. Now ferries only run between the two banks."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', html: '「你要在這裡混，記住兩件事：第一，別惹<b>渡口議會</b>。第二，找<b>銅鐘</b>。」', htmlEn: '"To survive here, remember two things: don\'t cross the <b>Ferry Council</b>, and find <b>Bronze Bell</b>."', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '「銅鐘是議會裡唯一還會把外來者當人看的。其他幾個……」他搖了搖頭，不再說了。', textEn: '"Bronze Bell\'s the only council member who treats outsiders as people. The others..." He shakes his head, says no more.', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「對了——河對岸有家客棧，叫『河畔居』。便宜，安全。你要住的話去那裡。」', textEn: '"Oh — there\'s an inn across the river, called \'Riverside Lodge.\' Cheap, safe. Stay there if you need a bed."', delay: 2800 },
        ], [
          { text: '謝謝', textEn: 'Thanks', action: () => {
            state.flags.r3InnUnlocked = true;
            gainXp(5);
            loadNode('r3_dock');
          }},
        ], { label: L('老船長', 'The Captain') });
      }});
    }
    if (!state.flags.r3DockSearch) {
      c.push({ text: '搜索碼頭', textEn: 'Search the dock', action: () => {
        state.flags.r3DockSearch = true;
        autoExplore([
          { tag: '探索', tagColor: 'tag-explore', text: '你在碼頭的角落翻找了一番。大部分是腐爛的繩索和破木板。', textEn: 'You rummage through a dock corner. Mostly rotten rope and broken planks.', delay: 2000 },
          { tag: '探索', tagColor: 'tag-explore', text: '但在一個被遺忘的木箱裡，你找到了一些有用的東西。', textEn: 'But in a forgotten crate, you find something useful.', delay: 2200 },
          { tag: '物品', tagColor: 'tag-item', html: '獲得了<b>河城地圖</b>——雖然殘缺不全，但標示了主要地標。', htmlEn: 'Found a <b>River City Map</b> — incomplete, but marking key landmarks.', delay: 2000, effect: () => { addItem(L('河城地圖', 'River City Map')); } },
        ], [
          { text: '繼續', textEn: 'Continue', action: () => loadNode('r3_dock') },
        ], { label: L('搜索碼頭', 'Searching dock') });
      }});
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r3_look') });
    return c;
  })(), { label: L('碼頭', 'Dock') });
});

// ── Market ──
registerNode('r3_market', () => {
  var firstVisit = !state.flags.r3MarketVisited;
  state.flags.r3MarketVisited = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔══════╗  ╔══════╗  ╔══════╗
  ║ 草藥 ║  ║ 工具 ║  ║ 書籍 ║
  ╚══╤═══╝  ╚══╤═══╝  ╚══╤═══╝
  ───┴─────────┴─────────┴───
    ☼        ☼        ☼
   ╱ ╲      ╱ ╲      ╱ ╲
  ╱燈籠╲   ╱燈籠╲   ╱燈籠╲
  ─────────────────────────────
  ░ 人群 ·· 叫賣聲 ·· 討價 ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ┌─────────────────────────┐
  │  ▓▓ 佈告牆：尋人·招工 ▓▓ │
  └─────────────────────────┘
</pre>`, artEn: `<pre class="ascii-art">
  ╔══════╗  ╔══════╗  ╔══════╗
  ║ Herbs║  ║ Tools║  ║ Books║
  ╚══╤═══╝  ╚══╤═══╝  ╚══╤═══╝
  ───┴─────────┴─────────┴───
    ☼        ☼        ☼
   ╱ ╲      ╱ ╲      ╱ ╲
  ╱Lamp ╲  ╱Lamp ╲  ╱Lamp ╲
  ─────────────────────────────
  ░ Crowd · Hawking · Bargains ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ┌────────────────────────────┐
  │ ▓▓ Bulletin: Missing·Jobs ▓▓│
  └────────────────────────────┘
</pre>`, delay: 800 });
  if (firstVisit) {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進市場。狹窄的通道兩旁擠滿了攤位和帳篷。', textEn: 'You enter the market. Narrow passages flanked by stalls and tents.', delay: 2000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '叫賣聲、討價還價聲、孩子的笑聲——在石化瘟疫的陰影下，這裡竟然還有生機。', textEn: 'Hawking, bargaining, children\'s laughter — even under the plague\'s shadow, life persists here.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '你看到有人在賣石化抑制藥、修補過的工具、甚至還有地表帶下來的書籍。', textEn: 'You see petri-suppressants, repaired tools, even books brought down from the surface.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '一面牆上貼滿了手寫的紙條：「尋人」、「招工」、「懸賞」……', textEn: 'A wall is covered in handwritten notices: "Missing person", "Help wanted", "Bounty"...', delay: 2200 });
  } else {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你再次穿過市場的人群。幾個攤販已經認得你的臉了。', textEn: 'You push through the market crowd again. A few vendors already recognize your face.', delay: 1800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '佈告牆上的紙條比上次又多了幾張。這座城市每天都在變化。', textEn: 'More notices on the bulletin wall than last time. This city changes daily.', delay: 1800 });
  }

  if (!state.flags.r3MarketRumor) {
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '你在人群中聽到了片段的對話——', textEn: 'You catch fragments of conversation in the crowd —', delay: 2000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「……聽說議會要封鎖下層通道了。銅鐘反對，但其他人都贊成。」', textEn: '"...Heard the Council\'s sealing the lower passages. Bronze Bell\'s against it, but the rest agree."', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「封了通道，下面的人怎麼辦？」「管他們呢——上來的都帶著石化病。」', textEn: '"If they seal it, what about the people below?" "Who cares — everyone coming up carries the plague."', delay: 3000 });
  }

  autoExplore(steps, (function() {
    var c = [];
    if (!state.flags.r3MarketRumor) {
      c.push({ text: '打聽消息', textEn: 'Gather intel', action: () => {
        state.flags.r3MarketRumor = true;
        autoExplore([
          { art: npcPortrait.art('vendor', { subtitle: '水果攤' }), artEn: npcPortrait.art('vendor', { subtitle: 'Vendor' }), delay: 800 },
          { tag: '情報', tagColor: 'tag-info', text: '你向一個賣水果的老婦人打聽情況。', textEn: 'You ask a fruit vendor for information.', delay: 2000 },
          { tag: '情報', tagColor: 'tag-info', text: '「議會有五個人。」老婦人壓低了聲音。「鐵匠行的鉛錘、漁幫的黑鰭、商會的玉秤、守衛隊長鏽刃——還有銅鐘。」', textEn: '"Five on the Council." The old woman lowers her voice. "Lead Hammer of the Smiths, Black Fin of the Fishers, Jade Scale of the Merchants, Guard Captain Rust Blade — and Bronze Bell."', delay: 3500 },
          { tag: '情報', tagColor: 'tag-info', html: '「其他四個都想封鎖通道、趕走外來者。只有<b>銅鐘</b>一直在替下面的人說話。」', htmlEn: '"The other four want to seal the passages and expel outsiders. Only <b>Bronze Bell</b> speaks for the people below."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「但銅鐘一個人擋不住四票。除非……有人能拿出證據——證明封鎖通道是行不通的。」', textEn: '"But one vote can\'t block four. Unless... someone can prove that sealing the passages won\'t work."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '老婦人看了你一眼：「你是從下面上來的，對吧？也許你能幫上忙。去找銅鐘吧。」', textEn: 'The old woman eyes you: "You came from below, right? Maybe you can help. Go find Bronze Bell."', delay: 2800 },
        ], [
          { text: '謝謝指點', textEn: 'Thank her', action: () => {
            gainXp(8);
            loadNode('r3_market');
          }},
        ], { label: L('市場的消息', 'Market rumors') });
      }});
    }
    if (!state.flags.r3MarketBuy) {
      c.push({ text: '買點補給', textEn: 'Buy supplies', action: () => {
        state.flags.r3MarketBuy = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '你用身上的石化結晶換了一些物資。在這裡，石化結晶就是通用貨幣。', textEn: 'You trade petri-crystals for supplies. Here, petri-crystals are universal currency.', delay: 2500 },
          { tag: '物品', tagColor: 'tag-item', html: '獲得了<b>河城草藥包</b>——本地配方，比你用過的任何草藥都有效。', htmlEn: 'Obtained a <b>River City Herb Pack</b> — local formula, more potent than anything you\'ve used.', delay: 2200, effect: () => { addItem(L('河城草藥包', 'River City Herb Pack')); } },
          { tag: '效果', tagColor: 'tag-system', text: 'HP +20', delay: 800, effect: () => changeHp(20) },
        ], [
          { text: '繼續', textEn: 'Continue', action: () => loadNode('r3_market') },
        ], { label: L('市場購物', 'Market shopping') });
      }});
    }
    if (state.flags.r3CraneMet3 || state.flags.r2CraneMet) {
      c.push({ text: '灰鶴的攤位', textEn: 'Grey Crane\'s stall', action: () => loadNode('r3_crane') });
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r3_look') });
    return c;
  })(), { label: L('市場', 'Market') });
});

// ── Council Hall ──
registerNode('r3_council', () => {
  state.flags.r3CouncilVisited = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
       ╔═══════════════════╗
       ║   渡 口 議 會 廳   ║
       ╚═══════╤═══╤═══════╝
       ┌───────┴───┴───────┐
       │  ╔═╗         ╔═╗  │
       │  ║柱║  ┌───┐  ║柱║  │
       │  ║ ║  │ 門 │  ║ ║  │
       │  ╚═╝  └─┬─┘  ╚═╝  │
       │    ⚔  守衛  ⚔    │
       └───────────────────┘
       ░░░ 石階 ·· 火把 ░░░
</pre>`, artEn: `<pre class="ascii-art">
       ╔═══════════════════╗
       ║  COUNCIL  HALL    ║
       ╚═══════╤═══╤═══════╝
       ┌───────┴───┴───────┐
       │  ╔═╗         ╔═╗  │
       │  ║ ║  ┌───┐  ║ ║  │
       │  ║ ║  │Door│  ║ ║  │
       │  ╚═╝  └─┬─┘  ╚═╝  │
       │   ⚔  Guards  ⚔   │
       └───────────────────┘
       ░░ Stone Steps · Torches ░░
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '議會廳建在河流東岸的一座石砌建築裡。門口站著兩個全副武裝的守衛。', textEn: 'The Council Hall is a stone building on the east bank. Two fully armed guards stand at the entrance.', delay: 2500 });

  if (!state.flags.r3CouncilEntry) {
    steps.push({ art: npcPortrait.art('guard', { subtitle: '守衛' }), artEn: npcPortrait.art('guard', { subtitle: 'Guard' }), delay: 800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '守衛攔住了你：「議會廳不對外開放。你有什麼事？」', textEn: 'A guard blocks you: "Council Hall is closed to the public. State your business."', delay: 2500 });
    if (state.flags.r3MarketRumor || state.flags.r3CaptainTalked) {
      steps.push({ tag: '行動', tagColor: 'tag-move', text: '你提到了銅鐘的名字。守衛的態度微微放鬆了一些。', textEn: 'You mention Bronze Bell\'s name. The guard\'s posture relaxes slightly.', delay: 2200 });
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '「銅鐘議員？……行吧。進去後走右邊的走廊，最裡面的房間。」', textEn: '"Councilor Bronze Bell?... Fine. Go down the right corridor, last room."', delay: 2500 });
    }
  } else {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '守衛認出了你，側身讓路：「銅鐘議員在裡面。」', textEn: 'The guard recognizes you and steps aside: "Councilor Bronze Bell is inside."', delay: 2200 });
  }

  autoExplore(steps, (function() {
    var c = [];
    if (!state.flags.r3CouncilEntry && (state.flags.r3MarketRumor || state.flags.r3CaptainTalked)) {
      c.push({ text: '進入議會廳', textEn: 'Enter the Council Hall', action: () => {
        state.flags.r3CouncilEntry = true;
        loadNode('r3_bell');
      }});
    } else if (!state.flags.r3CouncilEntry) {
      c.push({ text: '說出銅鐘的名字', textEn: 'Mention Bronze Bell', action: () => {
        if (state.flags.r2CraneLore) {
          state.flags.r3CouncilEntry = true;
          autoExplore([
            { tag: '行動', tagColor: 'tag-move', text: '你提到了灰鶴告訴你的名字——銅鐘。', textEn: 'You mention the name Grey Crane told you — Bronze Bell.', delay: 2000 },
            { tag: '情報', tagColor: 'tag-info', text: '守衛對視了一眼，然後讓開了路。', textEn: 'The guards exchange a glance, then step aside.', delay: 2000 },
          ], [
            { text: '進入', textEn: 'Enter', action: () => loadNode('r3_bell') },
          ], { label: L('進入議會廳', 'Entering Council Hall') });
        } else {
          autoExplore([
            { tag: '感知', tagColor: 'tag-sense', text: '守衛冷冷地看著你：「不知道你在說什麼。回去吧。」', textEn: 'The guard stares coldly: "Don\'t know what you\'re talking about. Move along."', delay: 2200 },
            { tag: '情報', tagColor: 'tag-info', text: '看來你需要先打聽更多情報——去碼頭或市場問問。', textEn: 'You need to gather more info first — try the dock or market.', delay: 2000 },
          ], [
            { text: '返回', textEn: 'Return', action: () => loadNode('r3_look') },
          ], { label: L('被拒之門外', 'Turned away') });
        }
      }});
    }
    if (state.flags.r3CouncilEntry) {
      if (state.flags.r3BellQuest) {
        c.push({ text: '回報銅鐘（任務進度）', textEn: 'Report to Bronze Bell (quest progress)', action: () => loadNode('r3_quest_check') });
      } else {
        c.push({ text: '去找銅鐘', textEn: 'Find Bronze Bell', action: () => loadNode('r3_bell') });
      }
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r3_look') });
    return c;
  })(), { label: L('議會廳', 'Council Hall') });
});

// ── Riverside Inn (rest + save point) ──
registerNode('r3_inn', () => {
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
       ┌─────────────┐
       │ ☼  ☼  ☼  ☼ │  三樓
       ├─────────────┤
       │ ☼  ☼  ☼  ☼ │  二樓
       ├──────┬──────┤
       │      │河畔居│  一樓
       │      │ OPEN │
       └──────┴──────┘
    ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
    ≈  河  水  拍  岸  ≈
    ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
</pre>`, artEn: `<pre class="ascii-art">
       ┌─────────────┐
       │ ☼  ☼  ☼  ☼ │  3F
       ├─────────────┤
       │ ☼  ☼  ☼  ☼ │  2F
       ├──────┬──────┤
       │      │ Inn  │  1F
       │      │ OPEN │
       └──────┴──────┘
    ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
    ≈  River  lapping  ≈
    ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '河畔居是一棟三層的石砌建築，窗戶透出暖黃色的燈光。', textEn: 'Riverside Lodge is a three-story stone building, windows glowing warm yellow.', delay: 2000 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '推開門，一股酒香和烤肉的味道迎面而來。大廳裡坐著十幾個人在喝酒。', textEn: 'You push open the door to the scent of ale and roasted meat. A dozen people drink in the hall.', delay: 2500 });

  if (!state.flags.r3InnFirstVisit) {
    steps.push({ art: npcPortrait.art('landlady', { subtitle: '老闆娘' }), artEn: npcPortrait.art('landlady', { subtitle: 'Landlady' }), delay: 800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '老闆娘是個壯碩的女人，圍著油膩的圍裙。她看了你一眼：「住宿還是喝酒？」', textEn: 'The landlady is a sturdy woman in a greasy apron. She eyes you: "Room or drink?"', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「看你的樣子，兩個都需要。」她沒等你回答就遞過來一碗熱湯。', textEn: '"By the looks of you, both." She hands you a bowl of hot soup without waiting for an answer.', delay: 2500 });
  } else {
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「又回來了？你的房間還留著。」老闆娘朝二樓的樓梯抬了抬下巴。', textEn: '"Back again? Your room\'s still there." The landlady jerks her chin toward the stairs.', delay: 2200 });
  }

  autoExplore(steps, (function() {
    var c = [];
    c.push({ text: '休息', textEn: 'Rest', action: () => {
      state.flags.r3InnFirstVisit = true;
      autoExplore([
        { tag: '休息', tagColor: 'tag-system', text: '你在二樓的小房間裡躺下。床墊粗糙但乾燥，比你睡過的任何石頭地面都好。', textEn: 'You lie down in a small room upstairs. The mattress is rough but dry — better than any stone floor.', delay: 2500 },
        { tag: '休息', tagColor: 'tag-system', text: '河水拍打岸邊的聲音透過窗戶傳來，像是一首古老的搖籃曲。', textEn: 'The sound of river water lapping the bank drifts through the window, like an ancient lullaby.', delay: 2500 },
        { tag: '效果', tagColor: 'tag-system', html: '<b>完全恢復。</b> HP 回滿，石化度 -15%。', htmlEn: '<b>Fully restored.</b> HP maxed, Petri -15%.', delay: 1500, effect: () => {
          state.hp = state.maxHp;
          changePetri(-15);
        }},
      ], [
        { text: '醒來', textEn: 'Wake up', action: () => {
          renderStatus();
          loadNode('r3_look');
        }},
      ], { label: L('河畔居', 'Riverside Lodge') });
    }});
    if (state.flags.r1YingCompanion && state.flags.r3YingArrived && !state.flags.r3YingInn) {
      c.push({ text: '找螢一起吃晚飯', textEn: 'Have dinner with Ying', action: () => loadNode('r3_ying_inn') });
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r3_look') });
    return c;
  })(), { label: L('河畔居', 'Riverside Lodge') });
});

// ═══════════════════════════════════════════════════
//  NPC — 銅鐘 (Bronze Bell)
// ═══════════════════════════════════════════════════

registerNode('r3_bell', () => {
  var steps = [];
  steps.push({ art: npcPortrait.art('bell', { subtitle: '議員' }) || `<pre class="ascii-art">
      ·  ˚  銅鐘 — 議員  ˚  ·
            ╱═══╲
           ╱ ◆◆◆ ╲
          │ ·    · │
          │  ╰┬╯   │
          │  ───   │
           ╲─────╱
        ╱───┤     ├───╲
       ╱    │     │    ╲
      ╱  ╱──┤     ├──╲  ╲
     │  ╱   │     │   ╲  │
     │ ╱    │     │  ░▓█ │
     │╱  ╭──┴──╮  │  ▓██ │
      ╲  │文件簿│  │ ░▓█╱ ← 石化右手
       ╲ ╰─────╯  │ ░▓╱
        ·─·─·──────·─·
</pre>`, artEn: npcPortrait.art('bell', { subtitle: 'Councilor' }) || `<pre class="ascii-art">
    ·  ˚  Bronze Bell — Councilor  ˚  ·
            ╱═══╲
           ╱ ◆◆◆ ╲
          │ ·    · │
          │  ╰┬╯   │
          │  ───   │
           ╲─────╱
        ╱───┤     ├───╲
       ╱    │     │    ╲
      ╱  ╱──┤     ├──╲  ╲
     │  ╱   │     │   ╲  │
     │ ╱    │     │  ░▓█ │
     │╱  ╭──┴──╮  │  ▓██ │
      ╲  │ Docs │  │ ░▓█╱ ← petri hand
       ╲ ╰─────╯  │ ░▓╱
        ·─·─·──────·─·
</pre>`, delay: 800 });
  if (!state.flags.r3BellMet) {
    state.flags.r3BellMet = true;
    // NG+ memory: recognizing Bronze Bell
    if (state.flags.ngPlus) {
      steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '你還沒走進房間，就已經知道裡面坐的是誰——銅鐘。那個石化了右手卻依然握筆不停的女人。', textEn: 'Before entering, you already know who sits inside — Bronze Bell. The woman whose right hand turned to stone yet never stopped writing.', delay: 2800 });
      steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '上一世，她是你最重要的盟友。或者最大的障礙。這取決於你怎麼做。', textEn: 'In your past life, she was your greatest ally. Or greatest obstacle. It depended on your choices.', delay: 2500 });
    }
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進議會廳右側走廊盡頭的房間。門半開著。', textEn: 'You enter the room at the end of the right corridor. The door is ajar.', delay: 2000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '房間不大，堆滿了文件和地圖。靠窗的桌子旁坐著一個人。', textEn: 'A small room packed with documents and maps. Someone sits at a desk by the window.', delay: 2200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', html: '那是一個四十多歲的女人——但她的存在感遠比年齡所暗示的更加強烈。', htmlEn: 'A woman in her forties — but her presence is far more commanding than her age suggests.', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '淡金色的頭髮梳成利落的髮髻，幾縷花白的碎髮垂在臉頰旁。高挺的鼻梁、輪廓分明的下顎線條——即使歲月在她臉上留下了痕跡，也掩蓋不住骨子裡的銳利與美。', textEn: 'Pale gold hair swept into a sharp bun, a few grey-streaked strands framing her face. High nose, sculpted jawline — even with time\'s marks upon her, the underlying sharpness and beauty are unmistakable.', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她的身材高挑而豐腴，官服被撐得很滿，但每一個動作都透著毫不費力的威嚴——像是習慣了被人仰望。', textEn: 'She\'s tall and full-figured, filling out her official robes, yet every motion carries effortless authority — as if accustomed to being looked up to.', delay: 3200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', html: '她的右手從手腕到指尖已經完全石化——冰冷的灰色石頭取代了血肉。但那隻石化的手依然穩穩地握著筆在寫字，力道絲毫不減。', htmlEn: 'Her right hand is fully petrified from wrist to fingertips — cold grey stone replacing flesh. Yet that stone hand still grips the pen firmly, writing without the slightest tremor.', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「進來吧。」她沒有抬頭，聲音低沉而具有穿透力。「我是<b>銅鐘</b>。聽說有人從下面爬上來了——想必就是你。」', htmlEn: '"Come in." She doesn\'t look up, her voice low and penetrating. "I\'m <b>Bronze Bell</b>. I heard someone climbed up from below — that must be you."', delay: 3000 });
    // Visit 1: subtle, ambiguous — just a hint of something more
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她終於放下筆，轉過身看著你。那雙琥珀色的眼睛帶著審視的壓迫感——像在用目光丈量你的分量。', textEn: 'She finally puts down the pen and turns to face you. Those amber eyes carry an appraising intensity — as if measuring your worth with her gaze alone.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她的目光在你身上停留的時間——比正常的打量長了那麼一點點。長到你注意到了，卻又短到你無法確定那代表什麼。', textEn: 'Her gaze lingers on you just a beat too long. Long enough for you to notice, yet brief enough that you can\'t be sure what it means.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她嘴角微微動了一下——是微笑嗎？還是只是光影的錯覺？你還沒看清，她的表情就恢復了公事公辦的冷靜。', textEn: 'The corner of her mouth shifts — a smile? Or just a trick of the light? Before you can tell, her expression resets to businesslike composure.', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「嗯——」她發出一個低沉的鼻音，像是在心裡做了某種評價。「從那麼深的地方爬上來，還沒有完全石化。有意思。」', textEn: '"Hmm —" A low hum, as if passing some private judgment. "Climbed all the way from below, and not fully petrified. Interesting."', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她的目光停在你身上的石化痕跡上。沒有嫌惡，沒有憐憫——只有某種沉重的、感同身受的理解。她不自覺地用左手按了按自己石化的右手腕。', textEn: 'Her gaze rests on your petri-marks. No disgust, no pity — just a heavy, empathetic understanding. She unconsciously presses her left hand against her own petrified right wrist.', delay: 3500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「下面的情況怎麼樣？還有多少人活著？」她的語氣不是在詢問——更像是在下達命令要求你回報。', textEn: '"How are things below? How many are still alive?" Her tone isn\'t a question — it\'s closer to an order demanding a report.', delay: 2800 });
  } else {
    // Track return visits for escalating intimacy
    state.flags._bellVisits = (state.flags._bellVisits || 1) + 1;
    var bv = state.flags._bellVisits;

    if (bv === 2) {
      // Visit 2: the gaze becomes deliberate — you can no longer pretend you imagined it
      steps.push({ art: npcPortrait.art('bell', { subtitle: '議員' }), artEn: npcPortrait.art('bell', { subtitle: 'Councilor' }), delay: 800 });
      steps.push({ tag: '移動', tagColor: 'tag-move', text: '銅鐘還是坐在那張堆滿文件的桌子旁。看到你來，她放下筆，身子微微後靠。', textEn: 'Bronze Bell sits at her document-laden desk. Seeing you, she puts down her pen and leans back.', delay: 2200 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '這次她看你的方式不一樣了。', textEn: 'This time she looks at you differently.', delay: 1800 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她的視線從你的臉開始，慢慢滑到你的肩膀——停了一下——然後繼續往下，胸口，腰線。那種打量的方式不像是在評估一個人的戰鬥力。', textEn: 'Her gaze starts at your face, slides slowly to your shoulders — pauses — then continues down. Chest. Waistline. That\'s not how you assess someone\'s combat ability.', delay: 3200 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她的目光回到你的眼睛上時，嘴角勾起了一個不加掩飾的弧度。上次那個模糊的微笑，這次你看得清清楚楚。', textEn: 'When her gaze returns to your eyes, her lips curve in an unhidden arc. That ambiguous smile from before — this time, you see it clearly.', delay: 3000 });
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '「有什麼進展？」她的聲音低沉而從容，帶著某種你上次沒注意到的——滿意。', textEn: '"Any progress?" Her voice is low, unhurried, carrying something you didn\'t catch before — satisfaction.', delay: 2500 });
    } else if (bv === 3) {
      // Visit 3: physical proximity — she closes the distance
      steps.push({ art: npcPortrait.art('bell', { subtitle: '議員' }), artEn: npcPortrait.art('bell', { subtitle: 'Councilor' }), delay: 800 });
      steps.push({ tag: '移動', tagColor: 'tag-move', text: '你推開門。銅鐘不在桌旁——她站在窗邊，逆光裡只看得見她挺拔的輪廓。', textEn: 'You push the door open. Bronze Bell isn\'t at her desk — she stands by the window, backlit into a silhouette of her upright frame.', delay: 2500 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「來了。」她轉過身。不知道是不是光線的關係，她的琥珀色眼睛看起來比往常更亮。', textEn: '"You\'re here." She turns. Maybe it\'s the light, but her amber eyes seem brighter than usual.', delay: 2500 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她走過來——步伐從容，但目的性很強。她在你面前停下，比你高半個頭。你聞到了墨水和茶葉的氣味——還有某種更溫暖的、屬於她的體溫。', textEn: 'She walks over — unhurried but purposeful. She stops in front of you, half a head taller. You catch the scent of ink and tea — and something warmer, something that\'s simply her.', delay: 3200 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「讓我看看。」她沒解釋看什麼。左手伸出來，指尖抬起你的下巴，像在檢查一件器物的成色。她的手指冰涼而有力，拇指擦過你的下顎線。', textEn: '"Let me see." She doesn\'t explain what. Her left hand reaches out, fingertips tilting your chin — inspecting you like a craftsman examining fine material. Cool, firm fingers. Her thumb brushes your jawline.', delay: 3500 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '近距離下你才發現她的睫毛很長，琥珀色的虹膜裡有細小的金色碎片。她的目光裡——毫無疑問了——是興趣。一種很危險的興趣。', textEn: 'Up close, you notice long lashes, tiny golden flecks within her amber irises. In her gaze — no doubt about it now — is interest. A dangerous kind of interest.', delay: 3200 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「……石化沒有繼續蔓延。不錯。」她鬆開手，退了半步——但那半步的距離依然近得不合常理。她看著你的眼神帶著一絲不容錯認的笑意：「看來你比我預期的……耐久。」', textEn: '"...The petrification hasn\'t spread. Good." She lets go and half-steps back — but that half-step still leaves her unreasonably close. Her eyes carry an unmistakable gleam of amusement: "You\'re more... durable than I expected."', delay: 3500 });
    } else {
      // Visit 4+: established dynamic — she's openly possessive
      steps.push({ art: npcPortrait.art('bell', { subtitle: '議員' }), artEn: npcPortrait.art('bell', { subtitle: 'Councilor' }), delay: 800 });
      steps.push({ tag: '移動', tagColor: 'tag-move', text: '銅鐘看到你走進來，放下筆，往椅背上一靠。她的嘴角已經不再遮掩那個弧度了。', textEn: 'Bronze Bell sees you enter, puts down her pen, and leans back. She no longer hides that curve of her lips.', delay: 2500 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「我的人回來了。」她的聲音帶著一種理所當然的佔有感。琥珀色的眼睛從你的頭頂慢慢掃到腳底，然後回來——像在清點自己的財產一樣仔細。', textEn: '"My person returns." Her voice carries a matter-of-fact possessiveness. Amber eyes sweep from your head slowly down to your feet, then back — as thorough as tallying her own property.', delay: 3200 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '那種打量的方式讓你覺得自己的衣服少穿了一層。但你已經開始習慣了。或者說——開始期待了。', textEn: 'The way she looks at you makes you feel a layer of clothing lighter. But you\'re getting used to it. Or perhaps — starting to look forward to it.', delay: 2800 });
    }
  }

  autoExplore(steps, (function() {
    var c = [];
    if (!state.flags.r3BellReport) {
      c.push({ text: '告訴她下面的情況', textEn: 'Report on conditions below', action: () => {
        state.flags.r3BellReport = true;
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你把在祭獻坑、石脈迴廊和大採石場的經歷告訴了銅鐘。', textEn: 'You recount your experiences in the Sacrificial Pit, Vein Corridor, and Great Quarry.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '鐵霜帶領的營地、迴廊裡的倖存者、老周、守衛——', textEn: 'Iron Frost\'s camp, corridor survivors, Old Zhou, the guards —', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘一邊聽一邊用石化的右手在紙上做記錄。那隻手雖然已經變成石頭，卻仍能寫字——像某種不屈的意志。', textEn: 'Bronze Bell takes notes with her petrified right hand as she listens. Though turned to stone, it still writes — like some indomitable will.', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '說到傷亡最慘重的部分時，她停下了筆。你看見她咬緊了下唇，胸口微微起伏——然後她深吸一口氣，重新拿起筆繼續記錄。', textEn: 'At the worst of the casualties, she stops writing. You see her bite her lower lip, chest rising slightly — then she draws a deep breath and picks up the pen again.', delay: 3200 },
          { tag: '情報', tagColor: 'tag-info', text: '「……我就知道。」她把筆放下，雙手撐在桌面上站起身來——她站起來的瞬間，你才真正感受到她的氣場。比坐著的時候壓迫感強了一倍。', textEn: '"...I knew it." She sets down the pen and stands, palms flat on the desk — the moment she rises, you truly feel her presence. Twice as commanding as when seated.', delay: 3500 },
          { tag: '情報', tagColor: 'tag-info', text: '「封鎖通道只會害死更多人。下面還有倖存者在苦撐。」她走到窗邊，背對著你。窗外微弱的光線勾勒出她挺拔的輪廓。', textEn: '"Sealing the passages will only kill more people. Survivors below are still holding on." She walks to the window, back to you. Faint light traces her upright silhouette.', delay: 3200 },
          { tag: '情報', tagColor: 'tag-info', html: '「你的證詞很重要。下一次議會投票時，我需要你<b>在議會上作證</b>——證明下面的人不是威脅，而是需要幫助的同胞。」', htmlEn: '"Your testimony matters. At the next Council vote, I need you to <b>testify before the Council</b> — prove the people below aren\'t a threat, but fellow humans who need help."', delay: 3500 },
          { tag: '情報', tagColor: 'tag-info', text: '「你願意嗎？」', textEn: '"Will you?"', delay: 1800 },
        ], [
          { text: '我願意', textEn: 'I will', action: () => {
            state.flags.r3BellAlliance = true;
            gainXp(15);
            notify(L('經驗 +15（與銅鐘建立同盟）', 'XP +15 (Allied with Bronze Bell)'));
            autoExplore([
              { tag: '感知', tagColor: 'tag-sense', text: '銅鐘轉過身來看著你。燈光映在她的琥珀色眼眸裡，你看到了某種久違的光芒——不是感激，而是找到同路人的釋然。', textEn: 'Bronze Bell turns to face you. Lamplight reflects in her amber eyes, and you see a long-absent gleam — not gratitude, but the relief of finding a kindred soul.', delay: 3200 },
              { tag: '感知', tagColor: 'tag-sense', text: '她走上前一步——比你想像的近。你能聞到她身上淡淡的墨水和茶葉的氣味。', textEn: 'She steps forward — closer than expected. You catch the faint scent of ink and tea on her.', delay: 2800 },
              { tag: '情報', tagColor: 'tag-info', text: '「……謝謝你。」她的聲音突然輕了下來。這個在議會上叱咤風雲的女人，此刻的語氣柔軟得讓你有些不適應。', textEn: '"...Thank you." Her voice suddenly softens. This woman who commands the council — her tone now tender enough to catch you off guard.', delay: 3000 },
            ], [
              { text: '下一步怎麼做？', textEn: 'What\'s next?', action: () => {
                state.flags.r3BellQuest = true;
                autoExplore([
                  { tag: '行動', tagColor: 'tag-move', text: '銅鐘站起身來——她站起來的動作從容有力，像一堵牆緩緩升起。', textEn: 'Bronze Bell rises — the movement is slow, powerful, like a wall coming up.', delay: 2500 },
                  { tag: '情報', tagColor: 'tag-info', text: '她走到牆邊，伸手從高處取下一張捲起的地圖。你注意到她即使用石化的右手也能輕鬆固定地圖的一角——力道驚人。', textEn: 'She strides to the wall, reaching up for a rolled map. You notice her petrified right hand pins the map\'s corner effortlessly — formidable strength.', delay: 3000 },
                  { tag: '情報', tagColor: 'tag-info', text: '銅鐘把地圖攤在桌面上，俯身用左手指著幾個位置。她俯身時，花白的碎髮從耳後滑落，你能清楚看見她堅毅的側臉輪廓。', textEn: 'She spreads the map across the desk, leaning over to point out locations. As she bends, grey-streaked strands slip from behind her ear — you get a clear view of her resolute profile.', delay: 3200 },
                  { tag: '情報', tagColor: 'tag-info', html: '「議會投票還有三天。在那之前，你需要做三件事——」她抬眼看你，琥珀色的瞳孔裡帶著不容置疑的堅定。', htmlEn: '"The Council vote is in three days. Before then, you need three things —" She looks up, amber eyes carrying an unquestionable resolve.', delay: 2800 },
                  { tag: '情報', tagColor: 'tag-info', html: '「第一：去<b>河岸隧道</b>清除那裡的變異生物。鏽刃說封鎖通道是因為怪物從下面上來——如果你能證明怪物不是來自下層，他就沒藉口了。」', htmlEn: '"First: clear the <b>river tunnels</b> of mutants. Rust Blade claims sealing is needed because monsters come from below — if you prove the creatures aren\'t from the lower levels, his excuse crumbles."', delay: 3800 },
                  { tag: '情報', tagColor: 'tag-info', html: '「第二：在市場找到<b>灰鶴</b>。她是唯一在上下層之間跑商路的人，她的證詞能動搖商會的玉秤。」', htmlEn: '"Second: find <b>Grey Crane</b> in the market. She\'s the only trader running routes between levels — her testimony can sway Jade Scale of the Merchants."', delay: 3200 },
                  { tag: '情報', tagColor: 'tag-info', html: '「第三：找到能證明<b>石化瘟疫起源</b>的證據。如果能證明瘟疫不是因為下層通道——而是因為古代封印——那封鎖通道就毫無意義。」', htmlEn: '"Third: find evidence of the <b>plague\'s true origin</b>. If you can prove it came from the ancient seal, not the lower passages — sealing is pointless."', delay: 3800 },
                  { tag: '感知', tagColor: 'tag-sense', text: '銅鐘直起身子，站在窗邊回頭看你。逆光勾勒出她寬闊的肩膀和挺拔的腰線——像一尊還未完全石化的雕像，威嚴而不可動搖。', textEn: 'Bronze Bell straightens and turns from the window. Backlit, her broad shoulders and upright waist are silhouetted — like a statue not yet fully petrified, majestic and immovable.', delay: 3000 },
                  { tag: '情報', tagColor: 'tag-info', text: '「……拜託你了。」她的石化右手不自覺地握成了拳。你聽見石指關節碾磨的細微聲響。「這不只是我一個人的戰鬥。」', textEn: '"...I\'m counting on you." Her petrified right hand clenches into a fist. You hear the faint grinding of stone knuckles. "This isn\'t just my fight."', delay: 3000 },
                ], [
                  { text: '我會完成的', textEn: 'I\'ll get it done', action: () => {
                    changeStat('wil', 1);
                    notify(L('意志 +1（肩負重任）', 'WIL +1 (Shouldering responsibility)'));
                    loadNode('r3_look');
                  }},
                ], { label: L('銅鐘的任務', 'Bronze Bell\'s mission') });
              }},
              { text: '先離開', textEn: 'Leave for now', action: () => loadNode('r3_council') },
            ], { label: L('銅鐘的信任', 'Bronze Bell\'s trust') });
          }},
          { text: '讓我想想', textEn: 'Let me think', action: () => loadNode('r3_council') },
        ], { label: L('銅鐘的請求', 'Bronze Bell\'s request') });
      }});
    }
    if (state.flags.r3BellAlliance && !state.flags.r3BellQuest) {
      c.push({ text: '下一步怎麼做？', textEn: 'What\'s next?', action: () => {
        state.flags.r3BellQuest = true;
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '銅鐘站起身，從牆上取下地圖攤在桌面上。', textEn: 'Bronze Bell stands, taking a map from the wall and spreading it across the desk.', delay: 2200 },
          { tag: '情報', tagColor: 'tag-info', html: '「議會投票還有三天。在那之前，你需要做三件事——」她抬起琥珀色的眼睛看著你。', htmlEn: '"The Council vote is in three days. Before then, you need three things —" She raises her amber eyes to you.', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', html: '「第一：去<b>河岸隧道</b>清除那裡的變異生物。鏽刃說封鎖通道是因為怪物從下面上來——如果你能證明怪物不是來自下層，他就沒藉口了。」', htmlEn: '"First: clear the <b>river tunnels</b> of mutants. Rust Blade claims sealing is needed because monsters come from below — if you prove the creatures aren\'t from the lower levels, his excuse crumbles."', delay: 3800 },
          { tag: '情報', tagColor: 'tag-info', html: '「第二：在市場找到<b>灰鶴</b>。她是唯一在上下層之間跑商路的人，她的證詞能動搖商會的玉秤。」', htmlEn: '"Second: find <b>Grey Crane</b> in the market. She\'s the only trader running routes between levels — her testimony can sway Jade Scale of the Merchants."', delay: 3200 },
          { tag: '情報', tagColor: 'tag-info', html: '「第三：找到能證明<b>石化瘟疫起源</b>的證據。如果能證明瘟疫不是因為下層通道——而是因為古代封印——那封鎖通道就毫無意義。」', htmlEn: '"Third: find evidence of the <b>plague\'s true origin</b>. If you can prove it came from the ancient seal, not the lower passages — sealing is pointless."', delay: 3800 },
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘直起腰，石化的右手握成拳按在桌面上，指節發出石碴碾磨的聲響。', textEn: 'Bronze Bell straightens, her petrified right fist pressed against the desk, stone knuckles grinding faintly.', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '「……拜託你了。這不只是我一個人的戰鬥。」', textEn: '"...I\'m counting on you. This isn\'t just my fight."', delay: 2500 },
        ], [
          { text: '我會完成的', textEn: 'I\'ll get it done', action: () => {
            changeStat('wil', 1);
            notify(L('意志 +1（肩負重任）', 'WIL +1 (Shouldering responsibility)'));
            loadNode('r3_look');
          }},
        ], { label: L('銅鐘的任務', 'Bronze Bell\'s mission') });
      }});
    }
    if (state.flags.r3BellQuest) {
      c.push({ text: '回報任務進度', textEn: 'Report quest progress', action: () => loadNode('r3_quest_check') });
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode(state.flags.r3BellQuest ? 'r3_look' : 'r3_council') });
    return c;
  })(), { label: L('銅鐘', 'Bronze Bell') });
});

// ═══════════════════════════════════════════════════
//  NPC — 螢 (Ying) in Region 3
// ═══════════════════════════════════════════════════

registerNode('r3_ying_talk', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';

  var steps = [];
  steps.push({ art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
           ╲ · ˚
        ·   ╲╱~~╮
      ˚    ╭╯○ ○│  ·
           │ ╰▽╯│
           ╰─╮ ╭╯╲~~─╮
          ✦· │╱│   ╲  │
        ╱──╮ │ │ ✦  ╲─╯
       │   ╰╮│╱   ·˚ │
       │  ·✦╰│  螢    │
        ╲  ˚·│╲  ╭──╮│
         ╲───│ ╲ │手冊│
             ╰──╰┴──╯
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
           ╲ · ˚
        ·   ╲╱~~╮
      ˚    ╭╯○ ○│  ·
           │ ╰▽╯│
           ╰─╮ ╭╯╲~~─╮
          ✦· │╱│   ╲  │
        ╱──╮ │ │ ✦  ╲─╯
       │   ╰╮│╱   ·˚ │
       │  ·✦╰│ Ying   │
        ╲  ˚·│╲  ╭──╮│
         ╲───│ ╲ │Note│
             ╰──╰┴──╯
</pre>`, delay: 800 });
  // First time — Ying arrives
  if (!state.flags.r3YingArrived) {
    state.flags.r3YingArrived = true;
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '你在碼頭入口聽到了一個熟悉的聲音——', textEn: 'You hear a familiar voice at the dock entrance —', delay: 2000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「等一下——我找了你半天！」', textEn: '"Wait — I\'ve been looking everywhere for you!"', delay: 2200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '螢從上升通道的出口跑出來，滿身灰塵，手冊抱在胸前，呼吸急促。', textEn: 'Ying rushes out from the ascent shaft, covered in dust, notebook clutched to ' + yPo + ' chest, breathing hard.', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: yP + '看到你的瞬間，表情從焦急變成了釋然——然後是裝出來的不高興。', textEn: yPC + ' expression shifts from anxiety to relief the moment ' + (isMale ? 'she' : 'he') + ' sees you — then feigned annoyance.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「你、你怎麼不等我？一個人就跑了？萬一出了事——」', textEn: '"You — why didn\'t you wait for me? Ran off alone? What if something happened —"', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: yP + '的眼眶微微泛紅，但很快別過頭去，假裝在看碼頭的風景。', textEn: yPC + ' eyes redden slightly, but ' + (isMale ? 'she' : 'he') + ' quickly turns away, pretending to admire the dock.', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「……算了。反正你沒事就好。」螢小聲說。', textEn: '"...Never mind. You\'re safe, that\'s what matters." Ying murmurs.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: yP + '環顧四周，眼睛瞬間亮了起來：「這就是河城渡口？！比手冊上的記載還要大！我要把這裡全部畫下來！」', textEn: yPC + ' looks around, eyes lighting up instantly: "This is River City Ferry?! It\'s even bigger than the records! I need to sketch everything!"', delay: 3200 });
  } else {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你在碼頭邊找到了螢。' + yP + '蹲在地上，正飛速地在手冊裡畫著河城的建築速寫。', textEn: 'You find Ying at the dock\'s edge, crouching, rapidly sketching River City\'s architecture in ' + yPo + ' notebook.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '看到你來，螢合上手冊，拍了拍身上的灰：「嗯？有什麼事？」', textEn: 'Seeing you, Ying closes the notebook and dusts off: "Hmm? What\'s up?"', delay: 2200 });
  }

  autoExplore(steps, (function() {
    var c = [];
    if (state.flags.r3YingArrived && !state.flags.r3YingCity) {
      c.push({ text: '和螢聊聊河城', textEn: 'Talk about River City with Ying', action: () => {
        state.flags.r3YingCity = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '螢翻開手冊中一頁古老的記錄，眼中閃著光。', textEn: 'Ying flips to an ancient entry in the notebook, eyes gleaming.', delay: 2200 },
          { tag: '情報', tagColor: 'tag-info', html: '「根據舊記錄，河城渡口是<b>石化瘟疫爆發前</b>最後建造的地底城市。建造者是第一批逃入地下的人類。」', htmlEn: '"According to old records, River City Ferry was the <b>last underground city built before the plague</b>. Its founders were the first humans to flee underground."', delay: 3500 },
          { tag: '情報', tagColor: 'tag-info', text: '「他們本來想從河道逃往更深處——但瘟疫追上了他們。於是他們在這裡停下，建了這座城。」', textEn: '"They planned to escape deeper through the river — but the plague caught up. So they stopped here and built this city."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「如果我的推測沒錯——封印石室的線索應該就在這裡。因為建造河城的人……就是當年封印石化瘟疫的人。」', textEn: '"If my theory is right — clues to the Seal Chamber should be here. Because the people who built River City... were the ones who sealed the plague."', delay: 3500 },
          { tag: '感知', tagColor: 'tag-sense', text: '螢合上手冊，看著河面。' + yP + '的眼中既有興奮，也有某種沉重。', textEn: 'Ying closes the notebook, gazing at the river. ' + yPC + ' eyes hold both excitement and something heavy.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '「三百年的歷史——也許很快就要揭開了。」', textEn: '"Three hundred years of history — perhaps soon to be unveiled."', delay: 2500 },
        ], [
          { text: '我們一起找', textEn: 'We\'ll find it together', action: () => {
            gainXp(8);
            loadNode('r3_look');
          }},
        ], { label: L('螢的研究', 'Ying\'s research') });
      }});
    }
    if (state.flags.r3BellQuest && !state.flags.r3YingEvidence) {
      c.push({ text: '告訴螢銅鐘的任務', textEn: 'Tell Ying about Bronze Bell\'s mission', action: () => {
        state.flags.r3YingEvidence = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '你把銅鐘的三個任務告訴了螢。', textEn: 'You relay Bronze Bell\'s three tasks to Ying.', delay: 2000 },
          { tag: '感知', tagColor: 'tag-sense', text: '螢聽完後沉思了一會兒，然後翻開手冊。', textEn: 'Ying thinks for a moment, then opens the notebook.', delay: 2200 },
          { tag: '情報', tagColor: 'tag-info', html: '「第三個任務——石化瘟疫的起源證據——<b>我可以幫忙。</b>」', htmlEn: '"The third task — evidence of the plague\'s origin — <b>I can help with that.</b>"', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '「我一直在追蹤封印石室的線索。如果能找到當年建城者留下的紀錄——那就是最好的證據。」', textEn: '"I\'ve been tracking Seal Chamber clues. If we find records left by the city founders — that\'s the strongest evidence."', delay: 3200 },
          { tag: '感知', tagColor: 'tag-sense', text: '螢的表情變得認真：「你去清怪物、找灰鶴。封印石室的線索——交給我。」', textEn: 'Ying\'s expression turns serious: "You handle the monsters and Grey Crane. Seal Chamber clues — leave those to me."', delay: 2800 },
          { tag: '感知', tagColor: 'tag-sense', text: yP + '頓了頓，補了一句：「……小心。不准受傷。」', textEn: yPC + ' pauses, then adds: "...Be careful. Don\'t get hurt."', delay: 2500 },
        ], [
          { text: '你也是', textEn: 'You too', action: () => {
            changeHp(10);
            changePetri(-3);
            notify(L('HP +10，石化度 -3%（牽掛的力量）', 'HP +10, Petri -3% (The strength of caring)'));
            loadNode('r3_look');
          }},
        ], { label: L('分工合作', 'Division of labor') });
      }});
    }
    if (state.flags.r3YingInn && !state.flags.r3YingRiver) {
      c.push({ text: '螢，要不要去河邊走走？', textEn: 'Ying, want to walk by the river?', action: () => loadNode('r3_ying_river') });
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r3_look') });
    return c;
  })(), { label: L('和螢說話', 'Talking to Ying') });
});

// ── Ying: Inn dinner scene ──
registerNode('r3_ying_inn', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  state.flags.r3YingInn = true;
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
           ╲ · ˚
        ·   ╲╱~~╮
      ˚    ╭╯○ ○│  ·
           │ ╰▽╯│
           ╰─╮ ╭╯╲~~─╮
          ✦· │╱│   ╲  │
        ╱──╮ │ │ ✦  ╲─╯
       │   ╰╮│╱   ·˚ │
       │  ·✦╰│  螢    │
        ╲  ˚·│╲  ╭──╮│
         ╲───│ ╲ │手冊│
             ╰──╰┴──╯
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
           ╲ · ˚
        ·   ╲╱~~╮
      ˚    ╭╯○ ○│  ·
           │ ╰▽╯│
           ╰─╮ ╭╯╲~~─╮
          ✦· │╱│   ╲  │
        ╱──╮ │ │ ✦  ╲─╯
       │   ╰╮│╱   ·˚ │
       │  ·✦╰│ Ying   │
        ╲  ˚·│╲  ╭──╮│
         ╲───│ ╲ │Note│
             ╰──╰┴──╯
</pre>`, delay: 800 },
    { tag: '移動', tagColor: 'tag-move', text: '你帶螢到河畔居吃晚飯。老闆娘端上了兩碗熱騰騰的河魚湯和一盤黑麵包。', textEn: 'You bring Ying to Riverside Lodge for dinner. The landlady serves two bowls of steaming river-fish soup and a plate of black bread.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢拿起湯碗，喝了一口。' + yP + '的眼睛瞬間睜大了。', textEn: 'Ying picks up the bowl, takes a sip. ' + yPC + ' eyes widen instantly.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '「好、好喝……！這是真正的食物！不是乾糧和蘑菇！」', textEn: '"Good — so good...! This is real food! Not rations and mushrooms!"', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢幾乎是狼吞虎嚥地喝完了湯。然後' + yP + '抬起頭，嘴角沾著湯汁，臉有些紅。', textEn: 'Ying practically gulps down the soup. Then ' + (isMale ? 'she' : 'he') + ' looks up, broth on ' + yPo + ' lips, face slightly flushed.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「……你沒在看吧。」螢用手背擦了擦嘴，卻只是把湯汁抹得更開了。', textEn: '"...You weren\'t watching, right?" Ying wipes ' + yPo + ' mouth with the back of ' + yPo + ' hand, only smearing the broth further.', delay: 2200 },
    { tag: '行動', tagColor: 'tag-move', text: '你拿起桌上的布巾，不假思索地探過身去，幫' + yP + '擦了擦嘴角。', textEn: 'You pick up the napkin and lean across the table without thinking, wiping the corner of ' + yPo + ' mouth.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢愣住了。' + yP + '的呼吸停了半拍。你的指節隔著布巾碰到了' + yP + '的下唇——那裡比你想像的要柔軟。', textEn: 'Ying freezes. ' + yPC + ' breathing hitches. Your knuckle brushes ' + yPo + ' lower lip through the cloth — softer than you\'d imagined.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你收回手的時候，你們都沒有說話。但你注意到——螢的耳尖紅得像是要滴血。' + yP + '把臉埋進手冊裡，假裝在翻頁。', textEn: 'When you pull back, neither of you speaks. But you notice — Ying\'s ear tips are crimson. ' + yPC + ' buries ' + yPo + ' face in the notebook, pretending to turn pages.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你笑了。在這個石化瘟疫籠罩的世界裡，這是你第一次覺得自己離正常的生活那麼近。', textEn: 'You smile. In this plague-shrouded world, it\'s the first time you feel this close to a normal life.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '河水在窗外流淌。燈光昏黃。桌底下，螢的膝蓋不經意地碰到了你的——然後沒有移開。你也沒有。', textEn: 'River water flows past the window. Dim lamplight. Under the table, Ying\'s knee brushes yours — and doesn\'t move away. Neither do you.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你忽然想——如果能一直這樣就好了。就這樣坐著，膝蓋碰著膝蓋，在昏黃的燈下，假裝外面的世界不存在。', textEn: 'You suddenly think — if only this could last forever. Just sitting here, knee touching knee, in the dim lamplight, pretending the outside world doesn\'t exist.', delay: 3200 },
  ], [
    { text: '這裡的魚湯不錯', textEn: 'The soup is good here', action: () => {
      changeHp(30);
      changePetri(-10);
      changeStat('wil', 1);
      notify(L('HP +30，石化度 -10%，意志 +1（日常的溫暖）', 'HP +30, Petri -10%, WIL +1 (Warmth of the ordinary)'));
      loadNode('r3_inn');
    }},
  ], { label: L('河畔居的晚餐', 'Dinner at Riverside Lodge') });
});

// ── Ying: riverside moonlight scene (near-confession) ──
registerNode('r3_ying_river', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  state.flags.r3YingRiver = true;

  autoExplore([
    { art: `<pre class="ascii-art cyan">
      · ˚ ·  ✦  · ˚ ·  ✦  · ˚ ·
    ˚     ·  ˚     ·  ˚     ·  ˚
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ╱╲                      · ✦ ·
     ╱  ╲    ○ ○              ˚   ˚
    ╱ ╱╲ ╲   ╰▽╯
   ╱ ╱  ╲ ╲  ╱╲     河    畔
  ╱ ╱    ╲ ╲╱  ╲
</pre>`, artEn: `<pre class="ascii-art cyan">
      · ˚ ·  ✦  · ˚ ·  ✦  · ˚ ·
    ˚     ·  ˚     ·  ˚     ·  ˚
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ╱╲                      · ✦ ·
     ╱  ╲    ○ ○              ˚   ˚
    ╱ ╱╲ ╲   ╰▽╯
   ╱ ╱  ╲ ╲  ╱╲   Riverside
  ╱ ╱    ╲ ╲╱  ╲
</pre>`, delay: 800 },
    { tag: '環境', tagColor: 'tag-system', text: '河城的夜晚比礦道明亮得多。地底河面反射著遠處燈塔的光芒，水面上碎成一片搖曳的星海。', textEn: 'River City\'s night is far brighter than the mines. The underground river reflects a distant lighthouse, shattering into a sea of wavering stars on the water.', delay: 3000 },
    { tag: '移動', tagColor: 'tag-move', text: '你找到螢的時候，' + yP + '一個人坐在碼頭邊緣。雙腳懸空，手冊攤開在膝上——但沒有在寫。', textEn: 'You find Ying sitting alone at the edge of the dock. Feet dangling, notebook open on ' + yPo + ' lap — but not writing.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '在看河。河水拍打石岸的聲音，在寂靜中像一首聽不懂歌詞的催眠曲。', textEn: yPC + '\'s watching the river. The sound of water lapping against stone, like a lullaby in an unknown language.', delay: 2800 },
    { tag: '行動', tagColor: 'tag-move', text: '你在' + yP + '身邊坐下。螢沒有轉頭，但身體微微往你的方向傾了傾。', textEn: 'You sit down beside ' + (isMale ? 'her' : 'him') + '. Ying doesn\'t turn, but leans slightly in your direction.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '你們就這樣看了一會兒河。', textEn: 'You watch the river together for a while.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「你有沒有想過——」螢忽然開口，聲音比平常輕。', textEn: '"Have you ever thought —" Ying suddenly speaks, voice softer than usual.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「如果沒有石化瘟疫。沒有封印石室。沒有這些亂七八糟的事。」', textEn: '"If there were no Stone Plague. No Seal Chamber. None of this mess."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「我們……還會認識嗎？」', textEn: '"Would we... still have met?"', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '低頭看著手冊上攤開的空白頁。水面的反光映在紙上，像流動的銀絲。', textEn: yPC + ' looks down at the blank page in ' + yPo + ' notebook. River light reflects onto the paper like flowing silver threads.', delay: 3000 },
  ], [
    { text: '不會。但我很慶幸我們認識了。', textEn: 'No. But I\'m glad we did.', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '螢沒有說話。但你看到' + yP + '的手指收緊了——攥著手冊邊緣的那隻手。', textEn: 'Ying says nothing. But you see ' + yPo + ' fingers tighten — the hand gripping the notebook\'s edge.', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', text: '「……嗯。」', textEn: '"...Mm."', delay: 1500 },
        { tag: '感知', tagColor: 'tag-sense', text: '只有一個字。但那個字裡裝了太多東西——你聽得出來。', textEn: 'Just one syllable. But it carries too much — you can hear it all.', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢慢慢把頭靠在了你的肩上。和以前不一樣——這次不是因為冷，不是因為害怕，不是因為疲倦。', textEn: 'Ying slowly rests ' + yPo + ' head on your shoulder. Different from before — not from cold, not from fear, not from exhaustion.', delay: 3200 },
        { tag: '感知', tagColor: 'tag-sense', text: '就只是想靠著你。', textEn: 'Just wanting to lean on you.', delay: 2000 },
        { tag: '環境', tagColor: 'tag-system', text: '河水流過。光影搖曳。你感覺到' + yP + '的手悄悄伸過來——指尖碰了碰你的手背。', textEn: 'The river flows. Light sways. You feel ' + yPo + ' hand reach over quietly — fingertips brushing the back of your hand.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '你翻過手掌。' + yP + '的手指滑進了你的指縫裡。', textEn: 'You turn your palm over. ' + yPC + ' fingers slip between yours.', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: '十指相扣。一隻手帶著墨漬和繭，另一隻手帶著石化的灰色紋路。不般配。但契合。', textEn: 'Fingers intertwined. One hand stained with ink and calluses, the other marked with grey petrification. Mismatched. But fitting.', delay: 3500 },
        { tag: '情報', tagColor: 'tag-info', text: '「我從來沒有在手冊裡記過……自己的事。」螢的聲音很低，像是在河水聲裡故意藏起來。', textEn: '"I\'ve never recorded... anything about myself in the notebook." Ying\'s voice is low, deliberately hidden beneath the sound of the river.', delay: 3200 },
        { tag: '情報', tagColor: 'tag-info', text: '「但最近我一直在想——如果有一天要寫自己的故事——」', textEn: '"But lately I keep thinking — if I were to write my own story someday —"', delay: 2800 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '捏了捏你的手。力道很輕，像是怕弄疼你石化的指節。', textEn: yPC + ' squeezes your hand. Gently, as if afraid of hurting your petrified knuckles.', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', text: '「——你會在每一頁上。」', textEn: '"— you\'d be on every page."', delay: 2500 },
        { tag: '環境', tagColor: 'tag-system', text: '你的心臟漏了一拍。不是石化的麻痺——是另一種完全不同的，讓胸口發燙的東西。', textEn: 'Your heart skips a beat. Not the numbness of petrification — something entirely different, something that burns warm in your chest.', delay: 3200 },
        { tag: '感知', tagColor: 'tag-sense', text: '你想說什麼。但喉嚨像是被堵住了。在這座地底城市的河邊——你第一次覺得語言不夠用。', textEn: 'You want to say something. But your throat closes up. On the banks of this underground city — for the first time, words feel inadequate.', delay: 3200 },
        { tag: '行動', tagColor: 'tag-move', text: '你沒有說話。你只是把' + yP + '的手握得更緊了一點。', textEn: 'You don\'t speak. You just hold ' + yPo + ' hand a little tighter.', delay: 2500 },
        { tag: '環境', tagColor: 'tag-system', text: '螢笑了。很輕。像河面上掠過的風。', textEn: 'Ying smiles. Faintly. Like a breeze skimming the river\'s surface.', delay: 2500 },
        { tag: '環境', tagColor: 'tag-system', text: '你們在河邊坐了很久。直到手掌被彼此的體溫捂熱。直到連石化的紋路都似乎退了幾分。', textEn: 'You sit by the river for a long time. Until your palms are warmed by each other\'s heat. Until even the petrification patterns seem to fade a little.', delay: 3500 },
      ], [
        { text: '（你不知道這算不算告白。但你知道，你再也放不開這隻手了。）', textEn: '(You don\'t know if this counts as a confession. But you know you can never let go of this hand.)', action: () => {
          changeHp(30);
          changePetri(-12);
          changeStat('wil', 2);
          notify(L('HP +30，石化度 -12%，意志 +2（你會在每一頁上）', 'HP +30, Petri -12%, WIL +2 (You\'d be on every page)'));
          loadNode('r3_look');
        }},
      ], { label: L('每一頁', 'Every Page') });
    }},
    { text: '也許會。在某個書店裡、某條街上。', textEn: 'Maybe. In some bookshop, on some street.', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '螢轉過頭看你——眼睛裡映著河面的碎光，像是裝了一整條銀河。', textEn: 'Ying turns to look at you — eyes reflecting the shattered light on the river, as if holding an entire galaxy.', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', text: '「你在幻想什麼啊。」' + yP + '笑了，但聲音裡有一種你從未聽過的柔軟。', textEn: '"What are you imagining." ' + yPC + ' laughs, but there\'s a softness you\'ve never heard before.', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', text: '「不過……也不是不可能吧。」', textEn: '"Though... it\'s not impossible, is it."', delay: 2200 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢把手冊翻到空白的一頁，開始寫字。但不是用記錄員的筆跡——是一種更小、更私密的字體。', textEn: 'Ying flips to a blank page and begins to write. But not in a chronicler\'s hand — in a smaller, more private script.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '你瞥見了幾個字——你的名字。和一個你看不清楚的詞。', textEn: 'You catch a few characters — your name. And a word you can\'t quite read.', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', text: '「不准偷看！」螢用手蓋住頁面，耳根到脖子全紅了。', textEn: '"Don\'t peek!" Ying covers the page with ' + yPo + ' hand, flushed from ears to neck.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「這一頁……是私人的。」', textEn: '"This page... is personal."', delay: 2200 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '把手冊合上，抱在胸前。然後往你的方向靠了靠——不多，就一點點。', textEn: yPC + ' closes the notebook and clutches it to ' + yPo + ' chest. Then leans toward you — just a little.', delay: 2800 },
        { tag: '感知', tagColor: 'tag-sense', text: '你感覺到' + yP + '的肩膀碰到了你的手臂。' + yP + '沒有移開。', textEn: 'You feel ' + yPo + ' shoulder touch your arm. ' + yPC + ' doesn\'t move away.', delay: 2500 },
        { tag: '環境', tagColor: 'tag-system', text: '水聲、光影、和一頁你永遠讀不到的私密文字。', textEn: 'Water, light, and a page of private words you\'ll never read.', delay: 2500 },
        { tag: '環境', tagColor: 'tag-system', text: '但你知道——你不需要讀。因為答案就在' + yP + '靠過來的那個動作裡。', textEn: 'But you know — you don\'t need to read it. Because the answer is in the way ' + (isMale ? 'she' : 'he') + ' leaned toward you.', delay: 3200 },
      ], [
        { text: '（那一頁上寫了什麼，你始終沒有問。但你會記得這個夜晚。一輩子。）', textEn: '(You never ask what was on that page. But you\'ll remember this night. For the rest of your life.)', action: () => {
          changeHp(30);
          changePetri(-12);
          changeStat('wil', 2);
          notify(L('HP +30，石化度 -12%，意志 +2（私密的一頁）', 'HP +30, Petri -12%, WIL +2 (A private page)'));
          loadNode('r3_look');
        }},
      ], { label: L('私密的一頁', 'A Private Page') });
    }},
  ], { label: L('河邊的月光', 'Moonlight by the River') });
});

// ═══════════════════════════════════════════════════
//  NPC — 老周 (Old Zhou) Reunion
// ═══════════════════════════════════════════════════

registerNode('r3_zhou', () => {
  state.flags.r3ZhouMet = true;
  autoExplore([
    { art: npcPortrait.art('zhou', { subtitle: '倖存者' }) || `<pre class="ascii-art">
          ╭───────╮
         ╱ ─ ╌ ─  ╲
        │  ⌐=  =╕  │
        │   ╰──╯   │
        │  ╰~~~~╯  │
         ╲╱──┬──╲╱
      ╱╲╱╱   │   ╲╲╱╲
     │░░░│  老周  │   │
     │░▓░│ ╱    ╲ │   │
     │░▓░╰╱  ╭───╮╲──│
     │░░░ │  │⚒ 🔧│ ╲│
      ░▓░ ╰──┴───┴──╯
       ░     工具台
</pre>`, artEn: npcPortrait.art('zhou', { subtitle: 'Survivor' }) || `<pre class="ascii-art">
          ╭───────╮
         ╱ ─ ╌ ─  ╲
        │  ⌐=  =╕  │
        │   ╰──╯   │
        │  ╰~~~~╯  │
         ╲╱──┬──╲╱
      ╱╲╱╱   │   ╲╲╱╲
     │░░░│Old Zhou│   │
     │░▓░│ ╱    ╲ │   │
     │░▓░╰╱  ╭───╮╲──│
     │░░░ │  │⚒ 🔧│ ╲│
      ░▓░ ╰──┴───┴──╯
       ░    Workbench
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-explore', text: '你在市場的一角看到了一個坐在木箱上的男人。他的左腿被粗布包裹著，旁邊靠著一根拐杖。比在迴廊見面時瘦了一些，但精神反而更好了。', textEn: 'You spot a man sitting on a crate in a market corner. His left leg is wrapped in rough cloth, a crutch leaning beside him. Thinner than when you met in the corridor, but his spirits seem better.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', html: '他轉過頭——那張右半邊石化的臉，左半邊卻依然輪廓分明、線條深刻。是<b>老周</b>。', htmlEn: 'He turns — that face, petrified on the right but still sharp-featured and deep-lined on the left. It\'s <b>Old Zhou</b>.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '老周看到你的瞬間，那隻完好的深棕色眼睛亮了起來——像是黑暗中突然劃亮了一根火柴。他努力站起來，拐杖差點滑倒。', textEn: 'Old Zhou\'s good eye — deep brown — lights up the moment he sees you, like a match struck in darkness. He struggles to stand, crutch nearly slipping.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「你這小子——！我就知道你能活著上來！」他的笑容很大。白了一些的鬢角和頑強的笑容，讓他看上去像是某部冒險小說裡走出來的男人。', textEn: '"Kid — ! I knew you\'d make it up here alive!" His smile is wide. The silver-touched temples and stubborn grin make him look like a man stepped out of an adventure novel.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '他用力拍了拍你的肩膀——那隻完好的手掌心溫熱，虎口的老繭粗糙地蹭過你的衣料。石化的另一隻手環在身側，硬邦邦的，但他毫不在意。', textEn: 'He slaps your shoulder hard — his good hand\'s palm warm, the callused pad between thumb and forefinger rough against your clothes. His petrified other hand hangs at his side, hard as rock, but he doesn\'t seem to care.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「腿不太行了。」老周坐回箱子上，拍了拍左腿。寬大的礦工外套從肩頭滑落了一些，露出結實的臂膀和沿著二頭肌蔓延的石化紋路。「石化從腳開始往上爬。走不了多遠了。」', textEn: '"Leg\'s giving out." Old Zhou sits back down, patting his left leg. His oversized miner\'s jacket slips off one shoulder, revealing a solid arm with petrification veins creeping along the bicep. "Petri\'s creeping up from the foot. Can\'t walk far."', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: '「不過——老周不是等死的人。」他從箱子後面拉出一個工具包，隨手把袖子捲到手肘。前臂上粗礦的疤痕和石化紋路交錯在一起。「我在這裡修工具。總還能做點事。」', textEn: '"But — Old Zhou doesn\'t wait to die." He pulls out a tool kit from behind the crate, rolling his sleeves to the elbows. Rough scars and petrification lines crisscross his forearms. "I fix tools here. Still useful."', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '老周的臉上帶著你見過的最頑強的笑容。即使半邊身體都在石化，他的眼神裡依然有一種不屈的溫暖。他還活著。這就夠了。', textEn: 'Old Zhou wears the most stubborn smile you\'ve ever seen. Even with half his body petrifying, his eyes still hold an unyielding warmth. He\'s alive. That\'s enough.', delay: 2800 },
  ], (function() {
    var c = [];
    if (!state.flags.r3ZhouUpgrade) {
      c.push({ text: '讓老周看看你的裝備', textEn: 'Show Old Zhou your gear', action: () => {
        state.flags.r3ZhouUpgrade = true;
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '老周接過你的武器，翻來覆去看了看，嘖了一聲。', textEn: 'Old Zhou takes your weapon, turns it over, and clicks his tongue.', delay: 2200 },
          { tag: '情報', tagColor: 'tag-info', text: '「用的什麼破爛……等著。」', textEn: '"What junk... hold on."', delay: 2000 },
          { tag: '情報', tagColor: 'tag-info', text: '他從工具包裡拿出錘子和銼刀，開始敲敲打打。石化的手竟然動作精準得驚人。', textEn: 'He pulls out a hammer and file, and starts working. His petrified hand moves with astonishing precision.', delay: 2800 },
          { tag: '物品', tagColor: 'tag-item', html: '老周把武器還給你。刃口重新磨過，握把纏了新皮——獲得<b>老周的改裝</b>效果。', htmlEn: 'Old Zhou returns the weapon. The edge is re-ground, the grip re-wrapped — gained <b>Zhou\'s Modification</b> effect.', delay: 2500, effect: () => {
            changeStat('str', 2);
          }},
          { tag: '情報', tagColor: 'tag-info', text: '「別嫌老周手粗——三十年的礦工手藝，不是蓋的。」他得意地笑了。', textEn: '"Don\'t mind my rough hands — thirty years of miner\'s craft is no joke." He grins proudly.', delay: 2500 },
        ], [
          { text: '謝了，老周', textEn: 'Thanks, Old Zhou', action: () => {
            notify(L('力量 +2（老周的改裝）', 'STR +2 (Zhou\'s Modification)'));
            loadNode('r3_market');
          }},
        ], { label: L('老周的手藝', 'Zhou\'s craftsmanship') });
      }});
    }
    if (state.flags.r2ZhouTrace) {
      c.push({ text: '告訴他你看到了他的留言', textEn: 'Tell him you saw his carved message', action: () => {
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '你告訴老周你在採石場看到了他刻在牆上的字。', textEn: 'You tell Old Zhou you saw his message carved in the quarry wall.', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '老周愣了一下。然後他低下頭，用石化的手擦了擦眼睛。', textEn: 'Old Zhou freezes for a moment. Then he lowers his head, rubbing his eyes with his petrified hand.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '「……刻那些字的時候，我以為自己走不動了。」他的聲音有些沙啞。', textEn: '"...When I carved those words, I thought I couldn\'t go on." His voice is hoarse.', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '「但我想——只要有人看到，就不算白活。」', textEn: '"But I thought — as long as someone sees it, my life wasn\'t wasted."', delay: 2500 },
          { tag: '感知', tagColor: 'tag-sense', text: '老周抬起頭，用力拍了拍你的手：「你還幫我回了字……謝了，小子。」', textEn: 'Old Zhou looks up, squeezes your hand: "And you even wrote back... thanks, kid."', delay: 2500 },
        ], [
          { text: '老周不死', textEn: 'Old Zhou never dies', action: () => {
            changeStat('wil', 1);
            notify(L('意志 +1（老友重逢）', 'WIL +1 (Reunion with an old friend)'));
            loadNode('r3_market');
          }},
        ], { label: L('老周的留言', 'Zhou\'s message') });
      }});
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r3_market') });
    return c;
  })(), { label: L('老周', 'Old Zhou') });
});

// ═══════════════════════════════════════════════════
//  NPC — 灰鶴 (Grey Crane) in Region 3
// ═══════════════════════════════════════════════════

registerNode('r3_crane', () => {
  var steps = [];
  steps.push({ art: npcPortrait.art('crane', { subtitle: '行商人' }) || `<pre class="ascii-art gold">
       ·  ˚  灰鶴 — 市場  ˚  ·
              ╱═══╲
             ╱ ·˚· ╲
            │ ◉  ◉  │
            │  ╲─╱  │
             ╲──┬──╱
          ╱░░░╲ │ ╱░░░╲
         ╱░░░░░╲│╱░░░░░╲
        │░░  ╱──┤├──╲  ░░│
        │░ ╱  · ││ ·  ╲ ░│
        │╱  ╱──═╧╧═──╲  ╲│
         ╲╱ │ ╳╳╳╳╳╳ │ ╲╱
       ◆─┴──┤ ✦瓶✦刃✦ ├──┴─◆
             ╰═══════╯
</pre>`, artEn: npcPortrait.art('crane', { subtitle: 'Merchant' }) || `<pre class="ascii-art gold">
    ·  ˚  Grey Crane — Market  ˚  ·
              ╱═══╲
             ╱ ·˚· ╲
            │ ◉  ◉  │
            │  ╲─╱  │
             ╲──┬──╱
          ╱░░░╲ │ ╱░░░╲
         ╱░░░░░╲│╱░░░░░╲
        │░░  ╱──┤├──╲  ░░│
        │░ ╱  · ││ ·  ╲ ░│
        │╱  ╱──═╧╧═──╲  ╲│
         ╲╱ │ ╳╳╳╳╳╳ │ ╲╱
       ◆─┴──┤✦Gem✦Blade├──┴─◆
             ╰═══════╯
</pre>`, delay: 800 });
  if (!state.flags.r3CraneMet3) {
    state.flags.r3CraneMet3 = true;
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '市場的角落裡，一面灰色斗篷在貨箱堆間若隱若現。', textEn: 'In a market corner, a grey cloak flickers between stacked crates.', delay: 2000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「喲——你也到這兒了？」灰鶴從貨堆後探出頭，一臉不意外的笑容。', textEn: '"Well — you made it here too?" Grey Crane peeks from behind the crates, unsurprised and smiling.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我走暗渠比你快。在這裡已經做了好幾筆生意了。」', textEn: '"My culvert route is faster. Already closed several deals here."', delay: 2500 });
  } else {
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '灰鶴的攤位前擺著各種從下層帶上來的物資。生意似乎不錯。', textEn: 'Grey Crane\'s stall displays supplies brought from below. Business looks good.', delay: 2200 });
  }

  autoExplore(steps, (function() {
    var c = [];
    if (state.flags.r3BellQuest && !state.flags.r3CraneTestimony) {
      c.push({ text: '請灰鶴在議會作證', textEn: 'Ask Grey Crane to testify', action: () => {
        state.flags.r3CraneTestimony = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '你把銅鐘的計劃告訴了灰鶴——需要她在議會上證明下層通道的商業價值。', textEn: 'You tell Grey Crane about Bronze Bell\'s plan — they need her to prove the lower passages\' trade value at the Council.', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '灰鶴沉默了一會兒。她收起了商人笑容，表情變得認真。', textEn: 'Grey Crane falls silent. The merchant\'s grin fades, replaced by a serious expression.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '「做生意的不喜歡趟政治的渾水……但封了通道，我的商路也沒了。」', textEn: '"Traders don\'t like wading into politics... but if the passages are sealed, my trade routes die too."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「行。我去作證。但你欠我一個人情——以後到了地表，請我喝酒。」灰鶴伸出手。', textEn: '"Fine. I\'ll testify. But you owe me — buy me a drink when we reach the surface." Grey Crane extends her hand.', delay: 3000 },
        ], [
          { text: '一言為定', textEn: 'Deal', action: () => {
            gainXp(10);
            notify(L('經驗 +10（灰鶴的盟約）', 'XP +10 (Grey Crane\'s pact)'));
            loadNode('r3_market');
          }},
        ], { label: L('灰鶴的決定', 'Grey Crane\'s decision') });
      }});
    }
    if (!state.flags.r3CraneTrade3) {
      c.push({ text: '看看新貨', textEn: 'Browse new goods', action: () => {
        state.flags.r3CraneTrade3 = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '灰鶴攤開包裹。河城的物資比下面豐富得多。', textEn: 'Grey Crane opens her pack. River City\'s supplies are far more abundant than below.', delay: 2200 },
          { tag: '物品', tagColor: 'tag-item', html: '灰鶴遞給你一瓶清澈的液體：「<b>河城淨化液</b>——最新配方。比之前那瓶好十倍。」', htmlEn: 'Grey Crane hands you a clear liquid: "<b>River City Purifier</b> — latest formula. Ten times better than the last."', delay: 2800, effect: () => { addItem(L('河城淨化液', 'River City Purifier')); } },
          { tag: '效果', tagColor: 'tag-system', text: '石化度 -15%', delay: 800, effect: () => changePetri(-15) },
        ], [
          { text: '謝了', textEn: 'Thanks', action: () => loadNode('r3_market') },
        ], { label: L('灰鶴的新貨', 'Grey Crane\'s new goods') });
      }});
    }
    // Gambling — always available
    c.push({ text: L('來一把吹牛骰？', 'Fancy a game of Liar\'s Dice?'), action: () => {
      var gold = state.flags.gold || 0;
      // R3 bets are higher
      var bet = Math.max(10, Math.min(40, Math.floor(gold / 3) + 10));
      if (gold < bet) {
        if (gold < 10) {
          state.flags.gold = 15;
          gold = 15;
          notify(L('灰鶴借了你 15 金幣：「河城的賭注可比營地大。」', 'Grey Crane lends you 15 gold: "Stakes are higher in River City."'));
          renderStatus();
        }
        bet = 10;
      }
      var introSteps = [];
      if (!state.flags.r3DicePlayed) {
        state.flags.r3DicePlayed = true;
        introSteps.push({ tag: L('骰子', 'DICE'), tagColor: 'tag-npc',
          text: L('灰鶴嘿嘿一笑：「河城這地方，什麼都貴——包括賭注。」',
                 'Grey Crane grins: "Everything costs more in River City — including bets."'),
          delay: 2500 });
      }
      introSteps.push({ tag: L('骰子', 'DICE'), tagColor: 'tag-info',
        text: L('「' + bet + ' 金幣一局。敢不敢？」', '"' + bet + ' gold a round. You in?"'),
        delay: 1500 });
      autoExplore(introSteps, [
        { text: L('開賭 (' + bet + '金幣)', 'Play (' + bet + ' gold)'), action: function() {
          diceGame.start(bet, function(won, walkAway) {
            if (walkAway) { loadNode('r3_crane'); return; }
            var wins = state.flags.diceWins || 0;
            if (wins >= 3 && !state.flags.craneSwordOffered) {
              state.flags.craneSwordOffered = true;
              offerCraneSword(function() { loadNode('r3_crane'); });
            } else {
              loadNode('r3_crane');
            }
          });
        }},
        { text: L('算了', 'No thanks'), action: () => loadNode('r3_crane') },
      ], { label: L('吹牛骰', 'Liar\'s Dice') });
    }});

    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r3_market') });
    return c;
  })(), { label: L('灰鶴', 'Grey Crane') });
});

// ── Region 3 Patrol ──
registerNode('r3_patrol', () => {
  autoExplore([
    { art: `<pre class="ascii-art">
  ╔═══════════════════════════════╗
  ║  河 岸 隧 道                  ║
  ╠═══════════════════════════════╣
  ║                               ║
  ║  ≈≈≈≈≈≈╗         ╔≈≈≈≈≈≈≈≈  ║
  ║  ≈ 暗河 ║ ░░░░░░ ║ 暗河 ≈≈  ║
  ║  ≈≈≈≈≈≈╝ ░隧道░░ ╚≈≈≈≈≈≈≈≈  ║
  ║          ░░░░░░░░             ║
  ║    ·˚  ← 變異生物 →  ˚·     ║
  ║                               ║
  ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════╗
  ║  RIVER  TUNNELS               ║
  ╠═══════════════════════════════╣
  ║                               ║
  ║  ≈≈≈≈≈≈╗         ╔≈≈≈≈≈≈≈≈  ║
  ║  ≈ Dark ║ ░░░░░░ ║ Dark  ≈≈  ║
  ║  ≈River╝ ░Tunnel░ ╚River ≈≈  ║
  ║          ░░░░░░░░             ║
  ║   ·˚  ← Mutants  →  ˚·     ║
  ║                               ║
  ╚═══════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '判斷', tagColor: 'tag-move', text: '渡口外圍的河岸隧道裡棲息著各種變異生物。城市的守衛不會巡邏到那裡。', textEn: 'Mutated creatures nest in the river tunnels beyond the docks. City guards don\'t patrol there.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你握緊武器，踏入了河岸隧道的陰暗深處。', textEn: 'You grip your weapon and step into the dark river tunnels.', delay: 2000 },
  ], [
    { text: '開始巡邏', textEn: 'Begin patrol', action: () => startPatrol() },
    { text: '返回', textEn: 'Return', action: () => loadNode('r3_look') },
  ], { label: L('準備巡邏', 'Preparing patrol') });
});

// ═══════════════════════════════════════════════════
//  Region 3 — Quest Check + Council Vote
// ═══════════════════════════════════════════════════

registerNode('r3_quest_check', () => {
  // Count completed quests
  var questsDone = 0;
  if (state.level >= 5) questsDone++; // Quest 1: monsters cleared (high enough level = proven)
  if (state.flags.r3CraneTestimony) questsDone++; // Quest 2: Grey Crane
  if (state.flags.r3YingEvidence) questsDone++; // Quest 3: plague origin (Ying working on it)

  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════╗
  ║     任 務 進 度            ║
  ╠═══════════════════════════╣
  ║  ① 河岸隧道  ░░░░░  ?   ║
  ║  ② 灰鶴證詞  ░░░░░  ?   ║
  ║  ③ 瘟疫起源  ░░░░░  ?   ║
  ╠═══════════════════════════╣
  ║  銅鐘：「進展如何？」      ║
  ╚═══════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════╗
  ║     QUEST  PROGRESS       ║
  ╠═══════════════════════════╣
  ║  ① River Tunnels  ░░  ?  ║
  ║  ② Crane Testimony ░  ?  ║
  ║  ③ Plague Origin  ░░  ?  ║
  ╠═══════════════════════════╣
  ║  Bell: "Any progress?"    ║
  ╚═══════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '系統', tagColor: 'tag-system', text: '你回到議會廳向銅鐘匯報進展。', textEn: 'You return to the Council Hall to report to Bronze Bell.', delay: 2000 });

  // Quest 1 status
  if (state.level >= 5) {
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '✓ 「河岸隧道的變異生物——你已經證明了它們不是來自下層。做得好。」', htmlEn: '✓ "River tunnel mutants — you\'ve proven they don\'t come from below. Well done."', delay: 2500 });
  } else {
    steps.push({ tag: '警告', tagColor: 'tag-warn', html: '✗ 「河岸隧道的怪物——你的實力還不夠有說服力。再多歷練一下吧。」<i>（需要等級 5+）</i>', htmlEn: '✗ "Tunnel creatures — your combat record isn\'t convincing yet. Train more." <i>(Need level 5+)</i>', delay: 2800 });
  }

  // Quest 2 status
  if (state.flags.r3CraneTestimony) {
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '✓ 「灰鶴答應作證了。商會的玉秤應該會動搖。」', htmlEn: '✓ "Grey Crane agreed to testify. Jade Scale of the Merchants should waver."', delay: 2500 });
  } else {
    steps.push({ tag: '警告', tagColor: 'tag-warn', html: '✗ 「灰鶴的證詞還沒到手。去市場找她吧。」', htmlEn: '✗ "Grey Crane\'s testimony isn\'t secured yet. Find her at the market."', delay: 2500 });
  }

  // Quest 3 status
  if (state.flags.r3YingEvidence) {
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '✓ 「螢在調查瘟疫起源的證據。她說快找到了。」', htmlEn: '✓ "Ying is investigating plague origin evidence. She says she\'s close."', delay: 2500 });
  } else {
    steps.push({ tag: '警告', tagColor: 'tag-warn', html: '✗ 「瘟疫起源的證據——需要螢的幫助。去找她談談銅鐘的任務。」', htmlEn: '✗ "Plague origin evidence — you need Ying\'s help. Talk to her about Bell\'s mission."', delay: 2800 });
  }

  // Summary
  steps.push({ tag: '情報', tagColor: 'tag-info', html: L(
    '銅鐘看著你：「完成了 <b>' + questsDone + '/3</b> 個任務。',
    'Bronze Bell looks at you: "Completed <b>' + questsDone + '/3</b> tasks.'
  ) + (questsDone >= 2
    ? L('——勉強夠了。我們可以行動了。」', ' — That\'s enough. We can proceed."')
    : L('——還不夠。再努力一下。」', ' — Not enough. Keep at it."')
  ), delay: 2500 });

  autoExplore(steps, (function() {
    var c = [];
    if (questsDone >= 2) {
      c.push({ text: '準備參加議會投票', textEn: 'Prepare for the Council vote', action: () => loadNode('r3_boss_prep') });
    }
    if (questsDone < 3) {
      c.push({ text: '繼續完成任務', textEn: 'Continue completing tasks', action: () => loadNode('r3_look') });
    }
    if (questsDone >= 3) {
      c.push({ text: '直接進入議會大廳', textEn: 'Go straight to the Council chamber', action: () => loadNode('r3_vote') });
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r3_look') });
    return c;
  })(), { label: L('任務進度', 'Quest progress') });
});

// ── Boss Prep ──
registerNode('r3_boss_prep', () => {
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════════╗
  ║       決 戰 前 夕              ║
  ╠═══════════════════════════════╣
  ║                               ║
  ║    ·˚✦˚·  ───────  ⚔⚔⚔    ║
  ║    銅鐘     走廊     鏽刃    ║
  ║    ·˚✦˚·  ───────  ⚔⚔⚔    ║
  ║                               ║
  ║     「他不會讓你進去。」       ║
  ║                               ║
  ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════╗
  ║     EVE OF THE SHOWDOWN       ║
  ╠═══════════════════════════════╣
  ║                               ║
  ║   ·˚✦˚·  ────────  ⚔⚔⚔   ║
  ║   Bell    Corridor   Rust    ║
  ║   ·˚✦˚·  ────────  ⚔⚔⚔   ║
  ║                               ║
  ║   "He won't let you in."     ║
  ║                               ║
  ╚═══════════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '銅鐘站起身，整理了一下衣領。她的表情前所未有地凝重。', textEn: 'Bronze Bell stands, straightening her collar. Her expression is graver than ever.', delay: 2200 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '「議會大廳在走廊盡頭。其他四個人應該已經到了。」', textEn: '"The Council chamber is at the end of the hall. The other four should already be there."', delay: 2500 });
  steps.push({ tag: '警告', tagColor: 'tag-warn', html: '「但我必須警告你——守衛隊長<b>鏽刃</b>不會讓你這麼容易走進去。他反對外來者的態度最為激烈。」', htmlEn: '"But I must warn you — Guard Captain <b>Rust Blade</b> won\'t let you in easily. He\'s the most hostile toward outsiders."', delay: 3200 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '「如果他攔路，你可能需要用你的方式……解決他。」', textEn: '"If he blocks you, you may need to... handle it your way."', delay: 2500 });

  if (state.flags.r3YingArrived) {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '門外傳來腳步聲——螢出現在門口，手冊緊緊抱在懷裡。', textEn: 'Footsteps outside — Ying appears in the doorway, notebook clutched tight.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我找到了。」螢的聲音平穩但帶著壓抑的激動。「建城者的封印記錄——就在圖書室的暗格裡。」', textEn: '"I found it." Ying\'s voice is steady but barely containing excitement. "The founders\' seal records — in a hidden compartment of the library."', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '螢翻開手冊：「上面清楚寫著——<b>石化瘟疫的源頭是古代封印的崩壞，不是下層通道</b>。這就是鐵證。」', htmlEn: 'Ying opens the notebook: "It clearly states — <b>the plague originated from the ancient seal\'s collapse, not the lower passages</b>. This is ironclad proof."', delay: 3500 });
    state.flags.r3PlagueProof = true;
  }

  autoExplore(steps, [
    { text: '走向議會大廳', textEn: 'Head to the Council chamber', action: () => loadNode('r3_boss') },
    { text: '先去準備一下', textEn: 'Prepare first', action: () => loadNode('r3_look') },
  ], { label: L('決戰前夕', 'Eve of the showdown') });
});

// ═══════════════════════════════════════════════════
//  BOSS — 鏽刃 (Rust Blade)
// ═══════════════════════════════════════════════════

registerNode('r3_boss', () => {
  var BOSS = {
    name: '鏽刃', nameEn: 'Rust Blade',
    hp: 55, atkMin: 20, atkMax: 36, petriDmg: 8, xp: 45,
    empathyGoal: 3,
    art: [
      '        ╭──╮',
      '       ╱ ▪▪ ╲',
      '      │ ═════ │',
      '    ╭─╧───────╧─╮',
      '    │ ▓ 鏽 刃 ▓ │',
      '    │ ▓▓▓▓▓▓▓▓▓ │',
      '    ╰─╤──╥──╥──╤─╯',
      '    ╱╱ ╲ ║  ║╱╱ ╲',
      '   ╱╱   ╲║  ║   ╲╲',
    ],
    commune: [
      { zh: '你沒有舉起武器——而是看著鏽刃的眼睛。你在那裡看到了……恐懼。', en: 'You don\'t raise your weapon — you look into Rust Blade\'s eyes. You see... fear.' },
      { zh: '「你不懂！」鏽刃的聲音發顫。「你沒見過石化瘟疫爬上親人的臉——」', en: '"You don\'t understand!" Rust Blade\'s voice trembles. "You haven\'t seen the plague crawl up a loved one\'s face —"' },
      { zh: '他的攻勢漸漸變慢。你說：「我也在石化。但我不會因此放棄希望。」', en: 'His attacks slow. You say: "I\'m petrifying too. But I won\'t give up hope."' },
    ],
    spareText: { zh: '鏽刃的劍落在地上。他單膝跪下，用手捂住了臉。「……我只是怕了。我怕我們都會死。」', en: 'Rust Blade\'s sword clatters to the ground. He kneels, face in his hands. "...I was just afraid. Afraid we\'d all die."' },
  };

  var steps = [];
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走向議會大廳的大門。', textEn: 'You approach the Council chamber\'s grand doors.', delay: 2000 });
  steps.push({ art: `<pre class="ascii-art red">
        ╭──╮
       ╱ ▪▪ ╲
      │ ═════ │
    ╭─╧───────╧─╮
    │ ▓ 鏽 刃 ▓ │
    │ ▓▓▓▓▓▓▓▓▓ │
    ╰─╤──╥──╥──╤─╯
    ╱╱ ╲ ║  ║╱╱ ╲
   ╱╱   ╲║  ║   ╲╲
</pre>`, artEn: `<pre class="ascii-art red">
        ╭──╮
       ╱ ▪▪ ╲
      │ ═════ │
    ╭─╧───────╧─╮
    │ RUST BLADE │
    │ ▓▓▓▓▓▓▓▓▓ │
    ╰─╤──╥──╥──╤─╯
    ╱╱ ╲ ║  ║╱╱ ╲
   ╱╱   ╲║  ║   ╲╲
</pre>`, delay: 800 });
  steps.push({ tag: '遭遇', tagColor: 'tag-combat', html: '一個高大的男人擋在門前。全身鏽蝕的鎧甲，手中握著一把缺了口的長劍——<b>守衛隊長鏽刃</b>。', htmlEn: 'A tall man blocks the door. Rust-eaten armor, a chipped longsword in hand — <b>Guard Captain Rust Blade</b>.', delay: 2800 });
  steps.push({ tag: '遭遇', tagColor: 'tag-combat', text: '「外來者——你不屬於這裡。我不會讓你踏進這扇門。」', textEn: '"Outsider — you don\'t belong here. I won\'t let you through that door."', delay: 2500 });
  // NG+ memory: remembering Rust Blade
  if (state.flags.ngPlus) {
    steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '你凝視著鏽刃的眼睛。上一世的記憶在腦海中重疊——你記得他的每一招，記得他鎧甲下的疲憊，記得他其實不想傷害任何人。', textEn: 'You stare into Rust Blade\'s eyes. Memories of a past life overlap — you remember every move, the weariness beneath his armor, how he never truly wanted to hurt anyone.', delay: 3200 });
    steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '「我們不是第一次見面了，隊長。」你平靜地說。鏽刃的瞳孔微微縮了一下。', textEn: '"This isn\'t our first meeting, Captain." you say calmly. Rust Blade\'s pupils contract slightly.', delay: 2800 });
  }

  // High AGI allows sneaking past
  if (state.agi >= 10) {
    steps.push({ tag: '感知', tagColor: 'tag-sense', html: '<i>你注意到側面有一條僕人通道……你的敏捷足以從那裡繞過去。</i>', htmlEn: '<i>You notice a servant\'s passage to the side... your agility is enough to slip through.</i>', delay: 2200 });
  }

  autoExplore(steps, (function() {
    var c = [];
    c.push({ text: '戰鬥！', textEn: 'Fight!', action: () => {
      startCombat(BOSS, function() {
        state.flags.r3BossDefeated = true;
        state.flags.r3BossMethod = 'fight';
        loadNode('r3_vote');
      }, function() {
        loadNode('r3_council');
      });
    }});
    if (state.agi >= 10) {
      c.push({ text: '從僕人通道潛入（敏捷 10+）', textEn: 'Sneak through servant\'s passage (AGI 10+)', action: () => {
        state.flags.r3BossDefeated = true;
        state.flags.r3BossMethod = 'sneak';
        autoExplore([
          { tag: '潛行', tagColor: 'tag-explore', text: '你趁鏽刃不注意，無聲地滑入了側面的窄門。', textEn: 'While Rust Blade\'s attention wavers, you silently slip through the narrow side door.', delay: 2000 },
          { tag: '潛行', tagColor: 'tag-explore', text: '黑暗的通道蜿蜒向上——你在議會大廳的帷幕後面找到了出口。', textEn: 'The dark passage winds upward — you find an exit behind the Council chamber\'s curtains.', delay: 2500 },
          { tag: '成功', tagColor: 'tag-system', text: '你成功避開了鏽刃，出現在議會大廳中。', textEn: 'You\'ve bypassed Rust Blade and emerged in the Council chamber.', delay: 2000 },
        ], [
          { text: '繼續', textEn: 'Continue', action: () => loadNode('r3_vote') },
        ], { label: L('潛入議會廳', 'Sneaking into the chamber') });
      }});
    }
    if (state.wil >= 12) {
      c.push({ text: '用言語說服他（意志 12+）', textEn: 'Persuade him with words (WIL 12+)', action: () => {
        state.flags.r3BossDefeated = true;
        state.flags.r3BossMethod = 'persuade';
        autoExplore([
          { tag: '意志', tagColor: 'tag-system', text: '你沒有拔武器。你直視著鏽刃的眼睛。', textEn: 'You don\'t draw your weapon. You meet Rust Blade\'s eyes.', delay: 2000 },
          { tag: '行動', tagColor: 'tag-move', text: '「鏽刃隊長。你守護這座城多久了？」', textEn: '"Captain Rust Blade. How long have you guarded this city?"', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '他愣了一下：「……二十三年。」', textEn: 'He pauses: "...Twenty-three years."', delay: 2000 },
          { tag: '行動', tagColor: 'tag-move', text: '「二十三年。你見過多少人被石化瘟疫帶走？」', textEn: '"Twenty-three years. How many have you lost to the plague?"', delay: 2500 },
          { tag: '感知', tagColor: 'tag-sense', text: '鏽刃的嘴唇微微顫抖。他的手握緊了劍柄——但沒有揮下。', textEn: 'Rust Blade\'s lips tremble. His hand grips the hilt — but doesn\'t swing.', delay: 2500 },
          { tag: '行動', tagColor: 'tag-move', text: '「封鎖通道不會讓瘟疫消失。它只會讓更多人在黑暗裡孤獨地死去。」', textEn: '"Sealing the passages won\'t stop the plague. It only means more people die alone in the dark."', delay: 3000 },
          { tag: '行動', tagColor: 'tag-move', text: '「如果你真的想保護這座城——就讓我進去，告訴議會真相。」', textEn: '"If you truly want to protect this city — let me in, and let me tell the Council the truth."', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '鏽刃的劍慢慢放下了。他讓開了門。', textEn: 'Rust Blade slowly lowers his sword. He steps aside.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '「……進去吧。但如果你說謊——我不會放過你。」', textEn: '"...Go. But if you lie — I won\'t forgive you."', delay: 2500 },
        ], [
          { text: '踏入議會大廳', textEn: 'Enter the Council chamber', action: () => {
            gainXp(20);
            changeStat('wil', 1);
            notify(L('經驗 +20，意志 +1（以言語代替刀劍）', 'XP +20, WIL +1 (Words over swords)'));
            loadNode('r3_vote');
          }},
        ], { label: L('說服鏽刃', 'Persuading Rust Blade') });
      }});
    }
    c.push({ text: '撤退準備', textEn: 'Retreat to prepare', action: () => loadNode('r3_council') });
    return c;
  })(), { label: L('鏽刃擋路', 'Rust Blade blocks the way') });
});

// ═══════════════════════════════════════════════════
//  Council Vote — Branching Endings
// ═══════════════════════════════════════════════════

registerNode('r3_vote', () => {
  // Calculate ending score
  var score = 0;
  if (state.level >= 5) score += 2;
  if (state.flags.r3CraneTestimony) score += 2;
  if (state.flags.r3PlagueProof) score += 3;
  if (state.flags.r3YingEvidence) score += 1;
  if (state.wil >= 10) score += 2;
  if (state.flags.r3BossMethod === 'persuade') score += 2;
  if (state.flags.r3BossMethod === 'sneak') score += 1;
  if (hasItem(L('螢的護身符', 'Ying\'s Charm'))) score += 1;
  if (state.flags.r3ZhouMet) score += 1;
  if (state.flags.ngPlus) score += 2; // NG+ past-life testimony bonus
  // Store score for ending determination
  state.flags.r3VoteScore = score;

  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '議會大廳是一個圓形的石砌空間。中央放著一張長桌，五把椅子圍在四周。', textEn: 'The Council chamber is a circular stone space. A long table at the center, five chairs around it.', delay: 2500 },
    { art: `<pre class="ascii-art">
     ╔══════════════════════════╗
     ║                          ║
     ║    鉛   黑   玉   鏽    ║
     ║    錘   鰭   秤   刃    ║
     ║     ○    ○    ○    ○    ║
     ║          ╔══╗            ║
     ║          ║桌║            ║
     ║          ╚══╝            ║
     ║     ○                    ║
     ║    銅                    ║
     ║    鐘         ▲ 你      ║
     ║                          ║
     ╚══════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
     ╔══════════════════════════╗
     ║                          ║
     ║   Lead  Black Jade  Rust ║
     ║   Hamr  Fin  Scale  Blde ║
     ║     ○    ○    ○    ○    ║
     ║          ╔══╗            ║
     ║          ║  ║            ║
     ║          ╚══╝            ║
     ║     ○                    ║
     ║   Bronze                 ║
     ║    Bell       ▲ You     ║
     ║                          ║
     ╚══════════════════════════╝
</pre>`, delay: 800 },
    { tag: '感知', tagColor: 'tag-sense', text: '四個人的目光同時落在你身上——帶著不同程度的敵意和好奇。', textEn: 'Four pairs of eyes fall on you simultaneously — varying degrees of hostility and curiosity.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '銅鐘站起身：「各位——這就是我說的從下層上來的倖存者。今天，請你們聽聽他的證詞。」', textEn: 'Bronze Bell stands: "Colleagues — this is the survivor from below I mentioned. Today, hear their testimony."', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '鉛錘敲了敲桌子：「快點說完。我還有一百把刀要打。」', textEn: 'Lead Hammer taps the table: "Make it quick. I have a hundred blades to forge."', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '黑鰭瞇著眼看你：「一個石化了一半的外來者……有什麼資格在這裡說話？」', textEn: 'Black Fin narrows his eyes: "A half-petrified outsider... what right have you to speak here?"', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '玉秤微微一笑，什麼也沒說。她在等你表現。', textEn: 'Jade Scale smiles faintly, saying nothing. She\'s waiting to see your performance.', delay: 2200 },
  ], [
    { text: '開始作證', textEn: 'Begin testimony', action: () => loadNode('r3_testimony') },
  ], { label: L('議會大廳', 'Council chamber') });
});

// ── Testimony ──
registerNode('r3_testimony', () => {
  var score = state.flags.r3VoteScore || 0;
  var steps = [];

  // Core testimony
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║          議  會  大  廳            ║
  ╠═══════════════════════════════════╣
  ║  鉛錘  黑鰭  ╔═══╗  玉秤  鏽刃  ║
  ║   □     □    ║銅鐘║   □     □    ║
  ║              ╚═══╝              ║
  ║  ─────────────┬─────────────── ║
  ║               │                 ║
  ║             ◆ 你 ◆              ║
  ║                                 ║
  ╚═══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║       COUNCIL   CHAMBER           ║
  ╠═══════════════════════════════════╣
  ║  Lead  Black  ╔════╗ Jade  Rust  ║
  ║  Ham.  Fin    ║Bell║ Scale Blade ║
  ║               ╚════╝             ║
  ║  ─────────────┬──────────────── ║
  ║               │                  ║
  ║             ◆ You ◆             ║
  ║                                  ║
  ╚═══════════════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '行動', tagColor: 'tag-move', text: '你站在議會桌前，深吸一口氣。', textEn: 'You stand before the Council table and take a deep breath.', delay: 2000 });
  steps.push({ tag: '行動', tagColor: 'tag-move', text: '「我從最底層的祭獻坑爬上來。經過石脈迴廊、大採石場，一路到這裡。」', textEn: '"I climbed from the Sacrificial Pit at the very bottom. Through the Vein Corridor, the Great Quarry, all the way here."', delay: 3000 });
  steps.push({ tag: '行動', tagColor: 'tag-move', text: '「下面還有人在活著——還有人在希望著有一天能上來。」', textEn: '"People below are still alive — still hoping to someday make it up."', delay: 2800 });

  // NG+ memory: citing past-life knowledge in testimony
  if (state.flags.ngPlus) {
    steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '你深吸一口氣，讓上一世的記憶流進話語中——你說出了只有親歷者才知道的細節：封印石室的位置、各層之間的生態鏈、甚至瘟疫擴散的季節規律。', textEn: 'You take a deep breath, letting memories of your past life flow into your words — details only a witness could know: the seal chamber\'s location, the ecosystem between levels, even the seasonal pattern of plague spread.', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '議員們面面相覷。你一個從底層爬上來的人，怎麼可能知道這些？', textEn: 'The council members exchange glances. How could someone who climbed from the bottom know all this?', delay: 2500 });
  }

  // Conditional evidence
  if (state.flags.r3PlagueProof) {
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '你拿出螢整理的封印記錄：「<b>石化瘟疫的真正源頭是古代封印的崩壞——不是下層通道。</b>」', htmlEn: 'You present Ying\'s compiled seal records: "<b>The plague\'s true source is the ancient seal\'s collapse — not the lower passages.</b>"', delay: 3200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '玉秤拿過記錄翻了翻。她的表情變了。', textEn: 'Jade Scale takes the records and flips through them. Her expression changes.', delay: 2500 });
  }

  if (state.flags.r3CraneTestimony) {
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '灰鶴從人群中站出來：「我在上下層之間跑商路十幾年。封了通道，河城的物資供應線就斷了三分之一。」', textEn: 'Grey Crane steps forward: "I\'ve run trade routes between levels for over a decade. Seal the passages, and a third of River City\'s supply lines die."', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '玉秤的眉頭皺了起來。她是商人——她聽得懂數字的語言。', textEn: 'Jade Scale\'s brow furrows. She\'s a merchant — she understands the language of numbers.', delay: 2500 });
  }

  if (state.level >= 5) {
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「至於河岸隧道的變異生物——我已經親手清除了多次。它們是河裡的原生種，不是從下面來的。」', textEn: '"As for the river tunnel mutants — I\'ve cleared them myself, repeatedly. They\'re native river species, not from below."', delay: 3200 });
  }

  // WIL-based speech power
  if (state.wil >= 12) {
    steps.push({ tag: '意志', tagColor: 'tag-system', text: '你的聲音不大，但每個字都像石頭一樣沉重。議會廳裡安靜得能聽到河水的聲音。', textEn: 'Your voice is quiet, but each word lands like stone. The chamber is so silent you can hear the river.', delay: 2800 });
    steps.push({ tag: '行動', tagColor: 'tag-move', text: '「封鎖通道不是在保護你們。是在拋棄和你們一樣的人。」', textEn: '"Sealing the passages doesn\'t protect you. It abandons people just like you."', delay: 2800 });
  } else if (state.wil >= 8) {
    steps.push({ tag: '行動', tagColor: 'tag-move', text: '「封鎖通道……不是解決辦法。我們應該一起面對瘟疫——而不是互相拋棄。」', textEn: '"Sealing the passages... isn\'t the answer. We should face the plague together — not abandon each other."', delay: 2800 });
  } else {
    steps.push({ tag: '行動', tagColor: 'tag-move', text: '「我……我只是想說，下面的人……他們不是敵人。」你的聲音有些結巴，但你盡力了。', textEn: '"I... I just want to say, the people below... they\'re not enemies." Your voice falters, but you try your best.', delay: 2800 });
  }

  // Sacrifice check — high petri during testimony
  var sacrificeTriggered = state.petri >= 50;
  if (sacrificeTriggered) {
    steps.push({ tag: '石化', tagColor: 'tag-petri', text: '——說話的時候，你感到一陣劇痛。左臂的石化紋路正在蔓延。', textEn: '— While speaking, a sharp pain hits. Petrification on your left arm is spreading.', delay: 2500 });
    steps.push({ tag: '石化', tagColor: 'tag-petri', text: '你的皮膚在議會成員面前一塊一塊地變成石頭。但你沒有停下。', textEn: 'Your skin turns to stone piece by piece before the Council\'s eyes. But you don\'t stop.', delay: 2800 });
    steps.push({ tag: '石化', tagColor: 'tag-petri', text: '「看清楚了嗎——這就是石化瘟疫。它不會因為你封了一扇門就消失。」', textEn: '"Look closely — this is the Stone Plague. It won\'t vanish just because you close a door."', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '議會廳裡一片死寂。連黑鰭都不說話了。', textEn: 'Dead silence in the chamber. Even Black Fin is speechless.', delay: 2500 });
    score += 3; // Sacrifice dramatically increases persuasion
    state.flags.r3VoteScore = score;
  }

  autoExplore(steps, [
    { text: '等待投票結果', textEn: 'Await the vote', action: () => {
      // Determine ending
      if (score >= 12 && state.flags.r3PlagueProof) {
        loadNode('r3_ending_dawn');
      } else if (score >= 8) {
        loadNode('r3_ending_compromise');
      } else if (sacrificeTriggered) {
        loadNode('r3_ending_sacrifice');
      } else {
        loadNode('r3_ending_lockdown');
      }
    }},
  ], { label: L('作證', 'Testimony') });
});

// ═══════════════════════════════════════════════════
//  ENDING A — 黎明 (Dawn) — Best Ending
// ═══════════════════════════════════════════════════

registerNode('r3_ending_dawn', () => {
  state.flags.r3Ending = 'dawn';
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';

  autoExplore([
    { tag: '系統', tagColor: 'tag-system', html: '<b>投票結果——</b>', htmlEn: '<b>Vote result —</b>', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '銅鐘：反對封鎖。', textEn: 'Bronze Bell: Against sealing.', delay: 1500 },
    { tag: '情報', tagColor: 'tag-info', text: '玉秤：……反對封鎖。', textEn: 'Jade Scale: ...Against sealing.', delay: 1800 },
    { tag: '情報', tagColor: 'tag-info', text: '鉛錘：棄權。「跟我打鐵沒關係。」', textEn: 'Lead Hammer: Abstains. "None of my business as a smith."', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '黑鰭：贊成封鎖。但他的聲音已經沒有之前那麼底氣了。', textEn: 'Black Fin: For sealing. But his voice lacks its earlier conviction.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '鏽刃：……', textEn: 'Rust Blade: ...', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '所有人都看向鏽刃。他沉默了很久。', textEn: 'All eyes turn to Rust Blade. He is silent for a long time.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「……反對封鎖。」鏽刃低聲說。然後他站起身，不看任何人，走出了大廳。', textEn: '"...Against sealing." Rust Blade says quietly. Then he stands and walks out without looking at anyone.', delay: 3000 },
    { tag: '系統', tagColor: 'tag-system', html: '<b>3 票反對，1 票贊成，1 票棄權。——通道保持開放。</b>', htmlEn: '<b>3 against, 1 for, 1 abstain. — The passages remain open.</b>', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '銅鐘閉上眼睛，長長地出了一口氣。她石化的右手在桌下微微顫抖。', textEn: 'Bronze Bell closes her eyes and exhales deeply. Her petrified right hand trembles under the table.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '她睜開眼，看著你。眼中有淚光，但嘴角在笑。', textEn: 'She opens her eyes and looks at you. Tears glisten, but she smiles.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「……謝謝你。」', textEn: '"...Thank you."', delay: 2000 },
    { art: `<pre class="ascii-art cyan">
    ·    .    ·    .    ·    .    ·    .    ·
         .         ╭─────────╮         .
    .        .     │ 結 局 A │    .        .
         .         │  黎  明  │         .
    ·        ·     ╰─────────╯    ·        ·
         .              .              .
    ═══════════════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art cyan">
    ·    .    ·    .    ·    .    ·    .    ·
         .         ╭──────────╮        .
    .        .     │ ENDING A │   .        .
         .         │   DAWN   │        .
    ·        ·     ╰──────────╯   ·        ·
         .              .              .
    ═══════════════════════════════════════════
</pre>`, delay: 1500 },
  ], [
    { text: '繼續', textEn: 'Continue', action: () => loadNode('r3_epilogue') },
  ], { label: L('結局 A — 黎明', 'Ending A — Dawn') });
});

// ═══════════════════════════════════════════════════
//  ENDING B — 妥協 (Compromise) — Partial Success
// ═══════════════════════════════════════════════════

registerNode('r3_ending_compromise', () => {
  state.flags.r3Ending = 'compromise';
  autoExplore([
    { tag: '系統', tagColor: 'tag-system', html: '<b>投票結果——</b>', htmlEn: '<b>Vote result —</b>', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '銅鐘：反對封鎖。', textEn: 'Bronze Bell: Against sealing.', delay: 1500 },
    { tag: '情報', tagColor: 'tag-info', text: '玉秤：……反對「完全」封鎖。「但外來者必須通過檢疫。」', textEn: 'Jade Scale: ...Against "total" sealing. "But outsiders must pass quarantine."', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '鉛錘：贊成封鎖。', textEn: 'Lead Hammer: For sealing.', delay: 1800 },
    { tag: '情報', tagColor: 'tag-info', text: '黑鰭：贊成封鎖。', textEn: 'Black Fin: For sealing.', delay: 1800 },
    { tag: '情報', tagColor: 'tag-info', text: '鏽刃：贊成封鎖。', textEn: 'Rust Blade: For sealing.', delay: 1800 },
    { tag: '系統', tagColor: 'tag-system', html: '<b>3 票贊成，2 票反對。——通道將被限制性開放。</b>', htmlEn: '<b>3 for, 2 against. — Passages will be restrictively opened.</b>', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '結果不是最好的——但也不是最壞的。通道不會完全封死。', textEn: 'Not the best result — but not the worst. Passages won\'t be completely sealed.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '下面的人需要通過檢疫才能上來。這意味著更多的等待——但至少還有機會。', textEn: 'People below must pass quarantine to come up. More waiting — but at least there\'s a chance.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '銅鐘拍了拍你的肩膀：「不算完美。但你已經改變了很多。」', textEn: 'Bronze Bell pats your shoulder: "Not perfect. But you\'ve changed a lot."', delay: 2500 },
    { art: `<pre class="ascii-art yellow">
    ·    .    ·    .    ·    .    ·    .    ·
         .         ╭─────────╮         .
    .        .     │ 結 局 B │    .        .
         .         │  妥  協  │         .
    ·        ·     ╰─────────╯    ·        ·
         .              .              .
    ═══════════════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art yellow">
    ·    .    ·    .    ·    .    ·    .    ·
         .         ╭────────────╮       .
    .        .     │  ENDING B  │  .        .
         .         │ COMPROMISE │       .
    ·        ·     ╰────────────╯  ·        ·
         .              .              .
    ═══════════════════════════════════════════
</pre>`, delay: 1500 },
  ], [
    { text: '繼續', textEn: 'Continue', action: () => loadNode('r3_epilogue') },
  ], { label: L('結局 B — 妥協', 'Ending B — Compromise') });
});

// ═══════════════════════════════════════════════════
//  ENDING C — 封鎖 (Lockdown) — Bad Ending
// ═══════════════════════════════════════════════════

registerNode('r3_ending_lockdown', () => {
  state.flags.r3Ending = 'lockdown';
  autoExplore([
    { tag: '系統', tagColor: 'tag-system', html: '<b>投票結果——</b>', htmlEn: '<b>Vote result —</b>', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '銅鐘：反對封鎖。', textEn: 'Bronze Bell: Against sealing.', delay: 1500 },
    { tag: '情報', tagColor: 'tag-info', text: '玉秤：贊成封鎖。', textEn: 'Jade Scale: For sealing.', delay: 1800 },
    { tag: '情報', tagColor: 'tag-info', text: '鉛錘：贊成封鎖。', textEn: 'Lead Hammer: For sealing.', delay: 1800 },
    { tag: '情報', tagColor: 'tag-info', text: '黑鰭：贊成封鎖。「早就該這麼做了。」', textEn: 'Black Fin: For sealing. "Should\'ve done this long ago."', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '鏽刃：贊成封鎖。', textEn: 'Rust Blade: For sealing.', delay: 1800 },
    { tag: '系統', tagColor: 'tag-system', html: '<b>4 票贊成，1 票反對。——通道將被完全封鎖。</b>', htmlEn: '<b>4 for, 1 against. — Passages will be completely sealed.</b>', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '銅鐘的拳頭砸在桌上——但沒有人理她。', textEn: 'Bronze Bell slams her fist on the table — but no one listens.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你站在那裡，感到一種深入骨髓的寒冷。不是石化的寒——是絕望。', textEn: 'You stand there, feeling a chill that sinks into your bones. Not petrification\'s cold — despair.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '下面的人……鐵霜、迴廊的倖存者——他們再也上不來了。', textEn: 'The people below... Iron Frost, the corridor survivors — they\'ll never make it up.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '銅鐘走到你身邊，聲音很輕：「……我們失敗了。但這不是結束。」', textEn: 'Bronze Bell approaches, her voice soft: "...We failed. But this isn\'t the end."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「通道被封鎖了。但人心——不是石頭做的。」', textEn: '"The passages are sealed. But hearts — aren\'t made of stone."', delay: 2500 },
    { art: `<pre class="ascii-art red">
    ·    .    ·    .    ·    .    ·    .    ·
         .         ╭─────────╮         .
    .        .     │ 結 局 C │    .        .
         .         │  封  鎖  │         .
    ·        ·     ╰─────────╯    ·        ·
         .              .              .
    ═══════════════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art red">
    ·    .    ·    .    ·    .    ·    .    ·
         .         ╭──────────╮        .
    .        .     │ ENDING C │   .        .
         .         │ LOCKDOWN │        .
    ·        ·     ╰──────────╯   ·        ·
         .              .              .
    ═══════════════════════════════════════════
</pre>`, delay: 1500 },
  ], [
    { text: '繼續', textEn: 'Continue', action: () => loadNode('r3_epilogue') },
  ], { label: L('結局 C — 封鎖', 'Ending C — Lockdown') });
});

// ═══════════════════════════════════════════════════
//  ENDING D — 犧牲 (Sacrifice) — Petrification Ending
// ═══════════════════════════════════════════════════

registerNode('r3_ending_sacrifice', () => {
  state.flags.r3Ending = 'sacrifice';
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');

  autoExplore([
    { tag: '石化', tagColor: 'tag-petri', text: '你的證詞結束了。但你的身體——沒能撐到最後。', textEn: 'Your testimony is over. But your body — didn\'t make it.', delay: 2500 },
    { tag: '石化', tagColor: 'tag-petri', text: '石化從你的指尖蔓延到手臂、胸口、脖頸——在所有人面前。', textEn: 'Petrification spreads from fingertips to arms, chest, neck — before everyone.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '議會廳裡爆發出驚呼。有人尖叫，有人後退——只有銅鐘衝了上來。', textEn: 'Gasps erupt in the chamber. Someone screams, others retreat — only Bronze Bell rushes forward.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「不——！」銅鐘用石化的右手抓住了你的肩膀。', textEn: '"No — !" Bronze Bell grips your shoulder with her petrified hand.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你能感覺到四肢在變硬。視野在縮小。但你轉頭看了看四周——', textEn: 'You feel your limbs hardening. Vision narrowing. But you look around —', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '鏽刃跪在了地上。黑鰭低下了頭。就連鉛錘都放下了錘子。', textEn: 'Rust Blade kneels. Black Fin lowers his head. Even Lead Hammer puts down his hammer.', delay: 2800 },
    { tag: '系統', tagColor: 'tag-system', html: '<b>沒有投票。沒有人再提封鎖的事。</b>', htmlEn: '<b>No vote. No one speaks of sealing again.</b>', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你的意識在最後的瞬間聽到了一個聲音——', textEn: 'In the last moment, you hear a voice —', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢的聲音，從很遠的地方傳來：「不——你答應過我要回來的——！」', textEn: 'Ying\'s voice, from far away: "No — you promised you\'d come back — !"', delay: 3000 },
    { tag: '石化', tagColor: 'tag-petri', text: '然後一切都變成了石頭。', textEn: 'Then everything turns to stone.', delay: 3000 },
    { tag: '系統', tagColor: 'tag-system', text: '……', textEn: '...', delay: 3000 },
    { tag: '系統', tagColor: 'tag-system', text: '……但你還能聽到。在石殼的深處，你的意識沒有完全消失。', textEn: '...But you can still hear. Deep within the stone shell, your consciousness lingers.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '你聽到銅鐘的聲音：「——馬上派人下去通知鐵霜。通道不會封鎖。永遠不會。」', textEn: 'You hear Bronze Bell: "— Send word to Iron Frost immediately. The passages won\'t be sealed. Ever."', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你聽到螢在哭。' + yP + '的手冊落在地上。但' + yP + '很快又撿了起來。', textEn: 'You hear Ying crying. The notebook falls. But it\'s quickly picked up again.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「……我會記住一切。你的名字。你的故事。每一個字。」螢的聲音在顫抖，但很堅定。', textEn: '"...I\'ll remember everything. Your name. Your story. Every word." Ying\'s voice trembles, but holds firm.', delay: 3200 },
    { art: `<pre class="ascii-art">
    ·    .    ·    .    ·    .    ·    .    ·
         .         ╭─────────╮         .
    .        .     │ 結 局 D │    .        .
         .         │  犧  牲  │         .
    ·        ·     ╰─────────╯    ·        ·
         .              .              .
    ═══════════════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art">
    ·    .    ·    .    ·    .    ·    .    ·
         .         ╭───────────╮       .
    .        .     │ ENDING D  │  .        .
         .         │ SACRIFICE │       .
    ·        ·     ╰───────────╯  ·        ·
         .              .              .
    ═══════════════════════════════════════════
</pre>`, delay: 1500 },
  ], [
    { text: '……', textEn: '...', action: () => loadNode('r3_epilogue') },
  ], { label: L('結局 D — 犧牲', 'Ending D — Sacrifice') });
});

// ═══════════════════════════════════════════════════
//  Epilogue — varies by ending + relationships
// ═══════════════════════════════════════════════════

registerNode('r3_epilogue', () => {
  var ending = state.flags.r3Ending || 'lockdown';
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  var hasYing = state.flags.r1YingCompanion && state.flags.r3YingArrived;
  var hasZhou = state.flags.r3ZhouMet;

  var steps = [];

  // Time skip
  steps.push({ art: `<pre class="ascii-art">
  ·    ✦    ·    ✦    ·    ✦    ·
     .    .    .    .    .    .
  ═══════════════════════════════
        ·˚✦˚·  三個月後  ·˚✦˚·
  ═══════════════════════════════
  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
  ≈  河城渡口  ·  平靜的日常  ≈
  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
     .    .    .    .    .    .
  ·    ✦    ·    ✦    ·    ✦    ·
</pre>`, artEn: `<pre class="ascii-art">
  ·    ✦    ·    ✦    ·    ✦    ·
     .    .    .    .    .    .
  ═══════════════════════════════
      ·˚✦˚· Three Months ·˚✦˚·
  ═══════════════════════════════
  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
  ≈  River City  ·  Peaceful  ≈
  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
     .    .    .    .    .    .
  ·    ✦    ·    ✦    ·    ✦    ·
</pre>`, delay: 800 });
  steps.push({ tag: '系統', tagColor: 'tag-system', text: '——三個月後。', textEn: '— Three months later.', delay: 3000 });

  if (ending === 'dawn') {
    steps.push({ tag: '環境', tagColor: 'tag-system', text: '通道開放了。下面的人陸續來到河城渡口。', textEn: 'The passages are open. People from below are steadily arriving at River City Ferry.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '鐵霜帶著營地的倖存者上來了。她的第一件事是找到你，狠狠拍了你一巴掌——然後擁抱了你。', textEn: 'Iron Frost leads the camp survivors up. Her first act is finding you, slapping you hard — then hugging you.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '銅鐘成立了「上下層聯合委員會」。她擔任主席——石化的右手終於可以寫些好消息了。', textEn: 'Bronze Bell establishes the "Upper-Lower Joint Committee." She chairs it — her petrified hand finally writes good news.', delay: 3200 });
    if (hasZhou) {
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '老周的修理攤成了渡口最受歡迎的店鋪。他說：「老周的手藝，不分上下層。」', textEn: 'Old Zhou\'s repair stall becomes the docks\' most popular shop. He says: "Old Zhou\'s craft serves all levels."', delay: 2800 });
    }
  } else if (ending === 'compromise') {
    steps.push({ tag: '環境', tagColor: 'tag-system', text: '檢疫站建在了通道入口。過程漫長而繁瑣——但至少有人能上來了。', textEn: 'A quarantine station is built at the passage entrance. The process is slow and tedious — but at least some make it through.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '銅鐘在檢疫站日夜奔走，確保每個通過的人都得到公正對待。', textEn: 'Bronze Bell works day and night at the quarantine station, ensuring everyone is treated fairly.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '你成了她最信賴的助手——連接上下層的橋樑。', textEn: 'You become her most trusted aide — a bridge between the levels.', delay: 2500 });
  } else if (ending === 'lockdown') {
    steps.push({ tag: '環境', tagColor: 'tag-system', text: '通道被封鎖了。巨大的石門永遠關上了。', textEn: 'The passages are sealed. The great stone doors close forever.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你站在封鎖的石門前。門的另一邊——是你曾經走過的路。', textEn: 'You stand before the sealed door. On the other side — the path you once walked.', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '但你選擇留在河城。因為銅鐘說得對——這不是結束。', textEn: 'But you choose to stay in River City. Because Bronze Bell was right — this isn\'t the end.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '你和銅鐘私下開始了秘密計劃——尋找另一條繞過封鎖的路線。', textEn: 'You and Bronze Bell secretly begin a new plan — finding another route around the seal.', delay: 2800 });
  } else if (ending === 'sacrifice') {
    steps.push({ tag: '環境', tagColor: 'tag-system', text: '議會廳的中央，多了一座石像。那是你——永遠站在那裡，手舉向議會桌。', textEn: 'In the center of the Council chamber stands a new statue. It\'s you — forever reaching toward the table.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '人們叫它「石語者」——一個用石化換來自由的人。', textEn: 'They call it "The Stone Speaker" — one who traded petrification for freedom.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '通道沒有被封鎖。因為沒有人有臉在你的石像面前投那一票。', textEn: 'The passages remain open. Because no one can cast that vote before your statue.', delay: 3000 });
  }

  // Ying epilogue — varies by ending
  if (hasYing) {
    steps.push({ tag: '系統', tagColor: 'tag-system', text: '——', textEn: '—', delay: 2000 });
    if (ending === 'sacrifice') {
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '螢每天都會來看你的石像。' + yP + '會在石像前坐很久，翻著手冊，寫著什麼。', textEn: 'Ying visits your statue every day. ' + yPC + ' sits there for hours, flipping through the notebook, writing.', delay: 3000 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '有一天，' + yP + '把一本寫完的手冊放在石像的手中。', textEn: 'One day, ' + (isMale ? 'she' : 'he') + ' places a finished notebook in the statue\'s hand.', delay: 2800 });
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '封面上寫著：「石化深淵——三百年的瘟疫與人性。獻給 ' + state.name + '。」', textEn: 'The cover reads: "Petrification Abyss — Three Centuries of Plague and Humanity. Dedicated to ' + state.name + '."', delay: 3200 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「……說好了要幫我校對的，笨蛋。」螢的聲音很輕。', textEn: '"...You promised to proofread, idiot." Ying\'s voice is barely a whisper.', delay: 3000 });
    } else {
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你在河畔居的陽台上找到了螢。' + yP + '正在寫手冊的最後幾頁。', textEn: 'You find Ying on Riverside Lodge\'s balcony, writing the final pages of the notebook.', delay: 2500 });
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '「快寫完了。」螢說。' + yP + '沒有抬頭，但你聽到了' + yP + '聲音裡的笑意。', textEn: '"Almost done." Ying says without looking up, but you hear a smile in ' + yPo + ' voice.', delay: 2500 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你坐在' + yP + '身邊。河水在遠處流淌。地底的天頂上，結晶散發出暖色的光。', textEn: 'You sit beside ' + (isMale ? 'her' : 'him') + '. River water flows in the distance. Crystals on the underground ceiling glow warmly.', delay: 2800 });
      if (state.flags.r2YingNight || state.flags.r3YingInn) {
        steps.push({ tag: '感知', tagColor: 'tag-sense', text: '螢合上手冊，輕輕靠在了你的肩膀上。就像在營火旁的那一夜。', textEn: 'Ying closes the notebook and gently leans against your shoulder. Just like that night by the campfire.', delay: 2800 });
        steps.push({ tag: '情報', tagColor: 'tag-info', text: '「……你說過要幫我校對。現在可以開始了。」', textEn: '"...You said you\'d help proofread. We can start now."', delay: 2500 });
        steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你知道' + yP + '的意思不只是校對。你接過手冊，翻開了第一頁。', textEn: 'You know ' + (isMale ? 'she' : 'he') + ' means more than proofreading. You take the notebook and open the first page.', delay: 2800 });
        steps.push({ tag: '情報', tagColor: 'tag-info', html: '第一行寫著：「<b>記錄者螢與' + state.name + '的石化深淵紀行</b>」。', htmlEn: 'The first line reads: "<b>A Chronicle of the Petrification Abyss, by Ying and ' + state.name + '</b>."', delay: 3000 });
      } else {
        steps.push({ tag: '情報', tagColor: 'tag-info', text: '螢把手冊遞給你：「第一個讀者——你來。」', textEn: 'Ying hands you the notebook: "First reader — you."', delay: 2200 });
      }
    }
  }

  // Final text
  steps.push({ tag: '系統', tagColor: 'tag-system', text: '——', textEn: '—', delay: 2000 });
  steps.push({ tag: '系統', tagColor: 'tag-system', text: '石化瘟疫還沒有消失。也許永遠不會消失。', textEn: 'The Stone Plague hasn\'t ended. Perhaps it never will.', delay: 2500 });
  steps.push({ tag: '系統', tagColor: 'tag-system', text: '但在這座地底世界的角落裡，有人還在活著。還在記錄。還在希望。', textEn: 'But in corners of this underground world, people still live. Still record. Still hope.', delay: 3000 });
  steps.push({ tag: '系統', tagColor: 'tag-system', html: '<b>你的故事——被記住了。</b>', htmlEn: '<b>Your story — is remembered.</b>', delay: 3000 });

  // Record ending in global stats
  if (typeof statsRecordEnding === 'function') statsRecordEnding(ending);

  // Stats summary
  var statsHtml = L(
    '<br>═══ 冒險紀錄 ═══<br>' +
    '名字：' + state.name + '<br>' +
    '等級：' + state.level + '<br>' +
    '力量：' + state.str + '　敏捷：' + state.agi + '　意志：' + state.wil + '<br>' +
    '石化度：' + state.petri + '%<br>' +
    '結局：' + ({dawn:'A — 黎明',compromise:'B — 妥協',lockdown:'C — 封鎖',sacrifice:'D — 犧牲'}[ending] || '？') + '<br>' +
    '死亡次數：' + state.deathCount + '<br>',
    '<br>═══ ADVENTURE LOG ═══<br>' +
    'Name: ' + state.name + '<br>' +
    'Level: ' + state.level + '<br>' +
    'STR: ' + state.str + '  AGI: ' + state.agi + '  WIL: ' + state.wil + '<br>' +
    'Petrification: ' + state.petri + '%<br>' +
    'Ending: ' + ({dawn:'A — Dawn',compromise:'B — Compromise',lockdown:'C — Lockdown',sacrifice:'D — Sacrifice'}[ending] || '?') + '<br>' +
    'Deaths: ' + state.deathCount + '<br>'
  );
  // Check and display achievements
  if (typeof triggerAchievementCheck === 'function') triggerAchievementCheck();
  if (typeof renderAchievementSummary === 'function') statsHtml += renderAchievementSummary();
  steps.push({ tag: '系統', tagColor: 'tag-system', html: statsHtml, delay: 1000 });

  // Global statistics
  if (typeof renderStatsSummary === 'function') {
    steps.push({ tag: '系統', tagColor: 'tag-system', html: renderStatsSummary(), delay: 800 });
  }

  // Calculate banked points for NG+ conversion preview
  var banked = typeof calculateBankedPoints === 'function' ? calculateBankedPoints() : 0;
  var statBonus = (state.str + state.agi + state.wil) - 9;
  var levelBonus = Math.max(0, state.level - 5);
  var nextRun = (typeof globalStats !== 'undefined' ? globalStats.totalRuns : 1);
  var nextScale = Math.pow(2, nextRun);
  var cycleNames = { 1: '二周目', 2: '三周目', 3: '四周目' };
  var cycleNamesEn = { 1: 'Cycle 2', 2: 'Cycle 3', 3: 'Cycle 4' };
  var nextCycle = cycleNames[nextRun] || (nextRun + 1) + '周目';
  var nextCycleEn = cycleNamesEn[nextRun] || 'Cycle ' + (nextRun + 1);

  var ngHintHtml = L(
    '<br>══ NEW GAME+ 能力轉換 ══<br>' +
    '能力加點：' + statBonus + '（力量' + state.str + ' + 敏捷' + state.agi + ' + 意志' + state.wil + ' − 基礎9）<br>' +
    '等級獎勵：' + levelBonus + '（Lv.' + state.level + (state.level > 5 ? '，超過5級每級+1' : '，5級以上才有獎勵') + '）<br>' +
    '<b>下次開局加成點數：+' + banked + '</b><br>' +
    '<span style="color:#e85050"><b>' + nextCycle + '怪物強度：' + nextScale + '倍</b></span><br>' +
    '<span style="opacity:.6">你也可以留在這個世界，前往冥河挑戰更深處。</span>',
    '<br>══ NG+ STAT CONVERSION ══<br>' +
    'Stat bonus: ' + statBonus + ' (STR' + state.str + ' + AGI' + state.agi + ' + WIL' + state.wil + ' − base 9)<br>' +
    'Level bonus: ' + levelBonus + ' (Lv.' + state.level + (state.level > 5 ? ', +1 per level above 5' : ', requires Lv.6+') + ')<br>' +
    '<b>Next run bonus points: +' + banked + '</b><br>' +
    '<span style="color:#e85050"><b>' + nextCycleEn + ' enemy strength: ' + nextScale + 'x</b></span><br>' +
    '<span style="opacity:.6">Or stay in this world and challenge the Styx for deeper depths.</span>'
  );
  steps.push({ tag: '系統', tagColor: 'tag-system', html: ngHintHtml, delay: 1500 });

  var convertLabel = L(
    nextCycle + ' NEW GAME+（+' + banked + '點｜怪物' + nextScale + '倍）',
    nextCycleEn + ' NEW GAME+ (+' + banked + 'pts | Enemies ' + nextScale + 'x)'
  );
  var convertDetail = L(
    '加成 +' + banked + ' 點已儲存！' + nextCycle + '怪物 ' + nextScale + ' 倍！',
    '+' + banked + ' pts banked! ' + nextCycleEn + ' enemies ' + nextScale + 'x!'
  );

  autoExplore(steps, [
    { text: '分享結局卡', textEn: 'Share Ending Card', action: function() {
      if (typeof showEndCard === 'function') showEndCard();
    }},
    { text: convertLabel, action: function() {
      // Bank points: keep the best conversion across runs
      if (typeof globalStats !== 'undefined') {
        globalStats.bankedPoints = Math.max(globalStats.bankedPoints || 0, banked);
        saveGlobalStats();
      }
      notify(convertDetail);
      deleteSave();
      try { localStorage.setItem('petriabyss_ngplus_pending', '1'); } catch(e) {}
      location.reload();
    }},
    { text: L('繼續探索（挑戰冥河）', 'Continue exploring (Challenge the Styx)'), action: function() {
      loadNode('r3_look');
    }},
    { text: '回到標題畫面', textEn: 'Return to title screen', action: () => {
      deleteSave();
      location.reload();
    }},
  ], { label: L('尾聲', 'Epilogue') });
});
