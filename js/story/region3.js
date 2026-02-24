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

// ═══════════════════════════════════════════════════
//  Region 3 — Exploration Nodes
// ═══════════════════════════════════════════════════

// ── Dock ──
registerNode('r3_dock', () => {
  state.flags.r3DockVisited = true;
  var steps = [];
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走向碼頭。河風裹著水霧撲在臉上，帶著鏽鐵和魚腥的氣味。', textEn: 'You head for the dock. River wind carries mist, rust, and fish against your face.', delay: 2000 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '三艘平底渡船靠在石砌的碼頭邊。最大的那艘船頭刻著「鐵鯨號」三個字。', textEn: 'Three flat-bottomed ferries sit at the stone dock. The largest bears the name "Iron Whale" on its prow.', delay: 2500 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '碼頭工人們在搬運木箱和麻袋。一個老船長坐在繩堆上抽旱菸，看著你。', textEn: 'Dock workers haul crates and sacks. An old captain sits on coiled rope, smoking a pipe, watching you.', delay: 2500 });

  if (!state.flags.r3CaptainTalked) {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '老船長朝你招了招手：「喂——新來的？看你身上那些石化紋，是從下面爬上來的吧。」', textEn: 'The old captain waves you over: "Hey — new here? Judging by those petri-marks, you climbed up from below."', delay: 3000 });
  }

  autoExplore(steps, (function() {
    var c = [];
    if (!state.flags.r3CaptainTalked) {
      c.push({ text: '和老船長聊聊', textEn: 'Talk to the captain', action: () => {
        state.flags.r3CaptainTalked = true;
        autoExplore([
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
  state.flags.r3MarketVisited = true;
  var steps = [];
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進市場。狹窄的通道兩旁擠滿了攤位和帳篷。', textEn: 'You enter the market. Narrow passages flanked by stalls and tents.', delay: 2000 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '叫賣聲、討價還價聲、孩子的笑聲——在石化瘟疫的陰影下，這裡竟然還有生機。', textEn: 'Hawking, bargaining, children\'s laughter — even under the plague\'s shadow, life persists here.', delay: 2500 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '你看到有人在賣石化抑制藥、修補過的工具、甚至還有地表帶下來的書籍。', textEn: 'You see petri-suppressants, repaired tools, even books brought down from the surface.', delay: 2500 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '一面牆上貼滿了手寫的紙條：「尋人」、「招工」、「懸賞」……', textEn: 'A wall is covered in handwritten notices: "Missing person", "Help wanted", "Bounty"...', delay: 2200 });

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
    if (state.flags.r3CraneMet3) {
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
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '議會廳建在河流東岸的一座石砌建築裡。門口站著兩個全副武裝的守衛。', textEn: 'The Council Hall is a stone building on the east bank. Two fully armed guards stand at the entrance.', delay: 2500 });

  if (!state.flags.r3CouncilEntry) {
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
      c.push({ text: '去找銅鐘', textEn: 'Find Bronze Bell', action: () => loadNode('r3_bell') });
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r3_look') });
    return c;
  })(), { label: L('議會廳', 'Council Hall') });
});

// ── Riverside Inn (rest + save point) ──
registerNode('r3_inn', () => {
  var steps = [];
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '河畔居是一棟三層的石砌建築，窗戶透出暖黃色的燈光。', textEn: 'Riverside Lodge is a three-story stone building, windows glowing warm yellow.', delay: 2000 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '推開門，一股酒香和烤肉的味道迎面而來。大廳裡坐著十幾個人在喝酒。', textEn: 'You push open the door to the scent of ale and roasted meat. A dozen people drink in the hall.', delay: 2500 });

  if (!state.flags.r3InnFirstVisit) {
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

// ── Region 3 Patrol ──
registerNode('r3_patrol', () => {
  autoExplore([
    { tag: '判斷', tagColor: 'tag-move', text: '渡口外圍的河岸隧道裡棲息著各種變異生物。城市的守衛不會巡邏到那裡。', textEn: 'Mutated creatures nest in the river tunnels beyond the docks. City guards don\'t patrol there.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你握緊武器，踏入了河岸隧道的陰暗深處。', textEn: 'You grip your weapon and step into the dark river tunnels.', delay: 2000 },
  ], [
    { text: '開始巡邏', textEn: 'Begin patrol', action: () => startPatrol() },
    { text: '返回', textEn: 'Return', action: () => loadNode('r3_look') },
  ], { label: L('準備巡邏', 'Preparing patrol') });
});
