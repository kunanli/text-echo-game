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

// ═══════════════════════════════════════════════════
//  NPC — 銅鐘 (Bronze Bell)
// ═══════════════════════════════════════════════════

registerNode('r3_bell', () => {
  var steps = [];
  if (!state.flags.r3BellMet) {
    state.flags.r3BellMet = true;
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進議會廳右側走廊盡頭的房間。門半開著。', textEn: 'You enter the room at the end of the right corridor. The door is ajar.', delay: 2000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '房間不大，堆滿了文件和地圖。靠窗的桌子旁坐著一個人。', textEn: 'A small room packed with documents and maps. Someone sits at a desk by the window.', delay: 2200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', html: '那是一個四十多歲的女人，頭髮花白，但目光銳利。她的右手從手腕到指尖已經完全石化——卻依然握著筆在寫字。', htmlEn: 'A woman in her forties, hair streaked with grey, gaze sharp. Her right hand is fully petrified from wrist to fingertips — yet she still grips a pen, writing.', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「進來吧。」她沒有抬頭。「我是<b>銅鐘</b>。聽說有人從下面爬上來了——想必就是你。」', htmlEn: '"Come in." She doesn\'t look up. "I\'m <b>Bronze Bell</b>. I heard someone climbed up from below — that must be you."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '她終於放下筆，轉過身看著你。她的目光停在你身上的石化痕跡上，沒有嫌惡，只有某種沉重的理解。', textEn: 'She finally puts down the pen and turns to face you. Her gaze rests on your petri-marks — not with disgust, but a heavy understanding.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「下面的情況怎麼樣？還有多少人活著？」', textEn: '"How are things below? How many are still alive?"', delay: 2200 });
  } else {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '銅鐘還是坐在那張堆滿文件的桌子旁。看到你來，她放下筆。', textEn: 'Bronze Bell sits at her document-laden desk. She puts down her pen when she sees you.', delay: 2000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「有什麼進展？」', textEn: '"Any progress?"', delay: 1500 });
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
          { tag: '情報', tagColor: 'tag-info', text: '「……我就知道。」她嘆了口氣。「封鎖通道只會害死更多人。下面還有倖存者在苦撐。」', textEn: '"...I knew it." She sighs. "Sealing the passages will only kill more people. Survivors below are still holding on."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', html: '「你的證詞很重要。下一次議會投票時，我需要你<b>在議會上作證</b>——證明下面的人不是威脅，而是需要幫助的同胞。」', htmlEn: '"Your testimony matters. At the next Council vote, I need you to <b>testify before the Council</b> — prove the people below aren\'t a threat, but fellow humans who need help."', delay: 3500 },
          { tag: '情報', tagColor: 'tag-info', text: '「你願意嗎？」', textEn: '"Will you?"', delay: 1800 },
        ], [
          { text: '我願意', textEn: 'I will', action: () => {
            state.flags.r3BellAlliance = true;
            gainXp(15);
            notify(L('經驗 +15（與銅鐘建立同盟）', 'XP +15 (Allied with Bronze Bell)'));
            loadNode('r3_bell');
          }},
          { text: '讓我想想', textEn: 'Let me think', action: () => loadNode('r3_council') },
        ], { label: L('銅鐘的請求', 'Bronze Bell\'s request') });
      }});
    }
    if (state.flags.r3BellAlliance && !state.flags.r3BellQuest) {
      c.push({ text: '下一步怎麼做？', textEn: 'What\'s next?', action: () => {
        state.flags.r3BellQuest = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '銅鐘攤開一張渡口的地圖，指著幾個位置。', textEn: 'Bronze Bell spreads a map of the docks, pointing to several locations.', delay: 2200 },
          { tag: '情報', tagColor: 'tag-info', html: '「議會投票還有三天。在那之前，你需要做三件事——」', htmlEn: '"The Council vote is in three days. Before then, you need three things —"', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', html: '「第一：去<b>河岸隧道</b>清除那裡的變異生物。鏽刃說封鎖通道是因為怪物從下面上來——如果你能證明怪物不是來自下層，他就沒藉口了。」', htmlEn: '"First: clear the <b>river tunnels</b> of mutants. Rust Blade claims sealing is needed because monsters come from below — if you prove the creatures aren\'t from the lower levels, his excuse crumbles."', delay: 3800 },
          { tag: '情報', tagColor: 'tag-info', html: '「第二：在市場找到<b>灰鶴</b>。他是唯一在上下層之間跑商路的人，他的證詞能動搖商會的玉秤。」', htmlEn: '"Second: find <b>Grey Crane</b> in the market. He\'s the only trader running routes between levels — his testimony can sway Jade Scale of the Merchants."', delay: 3200 },
          { tag: '情報', tagColor: 'tag-info', html: '「第三：找到能證明<b>石化瘟疫起源</b>的證據。如果能證明瘟疫不是因為下層通道——而是因為古代封印——那封鎖通道就毫無意義。」', htmlEn: '"Third: find evidence of the <b>plague\'s true origin</b>. If you can prove it came from the ancient seal, not the lower passages — sealing is pointless."', delay: 3800 },
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘看著你。她石化的右手不自覺地握緊了筆。', textEn: 'Bronze Bell looks at you. Her petrified hand unconsciously grips the pen tighter.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '「……拜託你了。這不只是我一個人的戰鬥。」', textEn: '"...I\'m counting on you. This isn\'t just my fight."', delay: 2500 },
        ], [
          { text: '我會完成的', textEn: 'I\'ll get it done', action: () => {
            changeStat('wil', 1);
            notify(L('意志 +1（肩負重任）', 'WIL +1 (Shouldering responsibility)'));
            loadNode('r3_council');
          }},
        ], { label: L('銅鐘的任務', 'Bronze Bell\'s mission') });
      }});
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r3_council') });
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
    { tag: '移動', tagColor: 'tag-move', text: '你帶螢到河畔居吃晚飯。老闆娘端上了兩碗熱騰騰的河魚湯和一盤黑麵包。', textEn: 'You bring Ying to Riverside Lodge for dinner. The landlady serves two bowls of steaming river-fish soup and a plate of black bread.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢拿起湯碗，喝了一口。' + yP + '的眼睛瞬間睜大了。', textEn: 'Ying picks up the bowl, takes a sip. ' + yPC + ' eyes widen instantly.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '「好、好喝……！這是真正的食物！不是乾糧和蘑菇！」', textEn: '"Good — so good...! This is real food! Not rations and mushrooms!"', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢幾乎是狼吞虎嚥地喝完了湯。然後' + yP + '抬起頭，嘴角沾著湯汁，臉有些紅。', textEn: 'Ying practically gulps down the soup. Then ' + (isMale ? 'she' : 'he') + ' looks up, broth on ' + yPo + ' lips, face slightly flushed.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「……你沒在看吧。」', textEn: '"...You weren\'t watching, right?"', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你笑了。在這個石化瘟疫籠罩的世界裡，這是你第一次覺得自己離正常的生活那麼近。', textEn: 'You smile. In this plague-shrouded world, it\'s the first time you feel this close to a normal life.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '河水在窗外流淌。燈光昏黃。螢在對面翻著手冊。一切都很安靜。', textEn: 'River water flows past the window. Dim lamplight. Ying flips through the notebook across from you. Everything is quiet.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '你忽然想——如果能一直這樣就好了。', textEn: 'You suddenly think — if only this could last forever.', delay: 2500 },
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

// ═══════════════════════════════════════════════════
//  NPC — 老周 (Old Zhou) Reunion
// ═══════════════════════════════════════════════════

registerNode('r3_zhou', () => {
  state.flags.r3ZhouMet = true;
  autoExplore([
    { tag: '遭遇', tagColor: 'tag-explore', text: '你在市場的一角看到了一個坐在木箱上的老人。他的左腿被粗布包裹著，旁邊靠著一根拐杖。', textEn: 'You spot an old man sitting on a crate in a market corner. His left leg is wrapped in rough cloth, a crutch leaning beside him.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', html: '那張飽經風霜的臉——是<b>老周</b>。', htmlEn: 'That weathered face — it\'s <b>Old Zhou</b>.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '老周看到你的瞬間，渾濁的眼睛亮了一下。他努力站起來，拐杖差點滑倒。', textEn: 'Old Zhou\'s cloudy eyes brighten the moment he sees you. He struggles to stand, crutch nearly slipping.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「你這小子——！我就知道你能活著上來！」', textEn: '"Kid — ! I knew you\'d make it up here alive!"', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '他用力拍了拍你的肩膀。他的手已經石化到了手肘，硬邦邦的，但拍得很用力。', textEn: 'He slaps your shoulder hard. His hand is petrified to the elbow — hard as rock, but the slap is full of force.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「腿不太行了。」老周坐回箱子上，拍了拍左腿。「石化從腳開始往上爬。走不了多遠了。」', textEn: '"Leg\'s giving out." Old Zhou sits back down, patting his left leg. "Petri\'s creeping up from the foot. Can\'t walk far."', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「不過——老周不是等死的人。」他從箱子後面拉出一個工具包。「我在這裡修工具。總還能做點事。」', textEn: '"But — Old Zhou doesn\'t wait to die." He pulls out a tool kit from behind the crate. "I fix tools here. Still useful."', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '老周的臉上帶著你見過的最頑強的笑容。他還活著。這就夠了。', textEn: 'Old Zhou wears the most stubborn smile you\'ve ever seen. He\'s alive. That\'s enough.', delay: 2500 },
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
          { tag: '情報', tagColor: 'tag-info', text: '你把銅鐘的計劃告訴了灰鶴——需要他在議會上證明下層通道的商業價值。', textEn: 'You tell Grey Crane about Bronze Bell\'s plan — they need him to prove the lower passages\' trade value at the Council.', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '灰鶴沉默了一會兒。他收起了商人笑容，表情變得認真。', textEn: 'Grey Crane falls silent. The merchant\'s grin fades, replaced by a serious expression.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '「做生意的不喜歡趟政治的渾水……但封了通道，我的商路也沒了。」', textEn: '"Traders don\'t like wading into politics... but if the passages are sealed, my trade routes die too."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「行。我去作證。但你欠我一個人情——以後到了地表，請我喝酒。」灰鶴伸出手。', textEn: '"Fine. I\'ll testify. But you owe me — buy me a drink when we reach the surface." Grey Crane extends his hand.', delay: 3000 },
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
          { tag: '情報', tagColor: 'tag-info', text: '灰鶴攤開包裹。河城的物資比下面豐富得多。', textEn: 'Grey Crane opens his pack. River City\'s supplies are far more abundant than below.', delay: 2200 },
          { tag: '物品', tagColor: 'tag-item', html: '灰鶴遞給你一瓶清澈的液體：「<b>河城淨化液</b>——最新配方。比之前那瓶好十倍。」', htmlEn: 'Grey Crane hands you a clear liquid: "<b>River City Purifier</b> — latest formula. Ten times better than the last."', delay: 2800, effect: () => { addItem(L('河城淨化液', 'River City Purifier')); } },
          { tag: '效果', tagColor: 'tag-system', text: '石化度 -15%', delay: 800, effect: () => changePetri(-15) },
        ], [
          { text: '謝了', textEn: 'Thanks', action: () => loadNode('r3_market') },
        ], { label: L('灰鶴的新貨', 'Grey Crane\'s new goods') });
      }});
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r3_market') });
    return c;
  })(), { label: L('灰鶴', 'Grey Crane') });
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
