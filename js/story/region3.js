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

  // First-visit passive patrol: danger descriptions before mandatory patrol
  if (!state.flags.r3PatrolCleared) {
    steps.push({ tag: '警告', tagColor: 'tag-warn', text: '城市外圍的河岸隧道裡傳來令人不安的聲響——變異生物在那裡築巢。', textEn: 'Unsettling sounds drift from the river tunnels beyond the city\'s edge — mutants have nested there.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '碼頭的守衛告訴你：「外圍隧道很危險，最好先清理一下再進城活動。」', textEn: 'A dock guard warns you: "The outer tunnels are dangerous. Best clear them out before moving around the city."', delay: 3000 });
    steps.push({ tag: '判斷', tagColor: 'tag-move', text: '你決定先確保城市外圍的安全——這也是熟悉這片區域的好方法。', textEn: 'You decide to secure the city perimeter first — a good way to familiarize yourself with the area.', delay: 2500 });
  }

  autoExplore(steps, (function() {
    // First visit: mandatory patrol (passive event)
    if (!state.flags.r3PatrolCleared) {
      return [{ text: L('進入河岸隧道巡邏……', 'Enter the river tunnels on patrol...'), textEn: 'Enter the river tunnels on patrol...', action: () => {
        startPatrol({ firstVisit: true, onDiscovery: function() { stopPatrol(); },
          firstVisitEvents: [
            // Cycle 2: A dock guard is overwhelmed by mutants
            { cycle: 2, buildQueue: function(queue) {
              queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
                text: L('隧道深處傳來金屬碰撞聲和喊叫聲——有人在戰鬥。', 'Clanging metal and shouts echo from deep in the tunnel — someone is fighting.'),
                delay: 2500, pending: true });
              queue.push({ tag: L('遭遇','Encounter'), color: 'tag-combat',
                text: L('一個碼頭守衛被三隻變異水蛭包圍，長矛已經折斷了一半。', 'A dock guard is surrounded by three mutant leeches, his spear half-broken.'),
                delay: 2800, pending: true });
              queue.push({
                text: L('你要怎麼做？', 'What do you do?'),
                choices: [
                  { text: L('加入戰鬥！', 'Join the fight!'), textEn: 'Join the fight!', action: function() {
                    sfx.hit();
                    patrolAppend(L('戰鬥','Battle'), 'tag-combat',
                      L('你從側翼殺入——兩面夾擊之下，水蛭們四散逃竄！', 'You strike from the flank — caught in a pincer, the leeches scatter!'), false);
                    changeHp(-4); renderStatus();
                    setTimeout(function() {
                      patrolAppend(L('對話','Dialogue'), 'tag-info',
                        L('守衛喘著氣：「多謝……你是外面來的？議會的銅鐘大人應該會想見你。碼頭和市場先逛逛，打聽打聽情況。」',
                          '"Thanks... You\'re from outside? Councilor Bronze Bell would want to meet you. Check out the dock and market first, get the lay of the land."'), false);
                      state.flags.r3GuardSaved = true;
                      gainXp(5);
                      renderStatus();
                      patrolTimers.push(setTimeout(runPatrolCycle, 3000));
                    }, 2800);
                  }},
                  { text: L('繞路避開', 'Take a detour'), textEn: 'Take a detour', action: function() {
                    patrolAppend(L('感知','Sense'), 'tag-sense',
                      L('你悄悄繞開了戰場。身後傳來守衛的慘叫聲——但你不能冒險。',
                        'You quietly skirt the battlefield. The guard\'s screams echo behind you — but you can\'t take the risk.'), false);
                    patrolTimers.push(setTimeout(runPatrolCycle, 2000));
                  }}
                ]
              });
            }},
            // Cycle 4: Find contraband near the tunnels
            { cycle: 4, buildQueue: function(queue) {
              queue.push({ tag: L('發現','Find'), color: 'tag-explore',
                text: L('隧道壁的暗洞裡藏著一個油布包裹——裡面是走私物資。', 'A hidden alcove in the tunnel wall holds an oilcloth bundle — smuggled goods.'),
                delay: 2800, pending: true });
              queue.push({ tag: L('物品','Item'), color: 'tag-item',
                text: L('你找到了一瓶淨化液。也許是灰鶴的存貨？', 'You find a purification vial. Grey Crane\'s stash, perhaps?'),
                delay: 2000, sfx: 'item',
                effect: function() { addItem(L('淨化液', 'Purification Vial')); renderStatus(); } });
            }}
          ]
        });
      }}];
    }
    var c = [];
    c.push({ text: '碼頭', textEn: 'Dock', action: () => loadNode('r3_dock') });
    c.push({ text: '市場', textEn: 'Market', action: () => loadNode('r3_market') });
    if (state.flags.r3CouncilUnlocked || state.flags.r3CouncilVisited) {
      c.push({ text: '議會廳', textEn: 'Council Hall', action: () => loadNode('r3_council') });
    }
    if (state.flags.r3InnUnlocked) {
      c.push({ text: '河畔客棧', textEn: 'Riverside Inn', action: () => loadNode('r3_inn') });
    }
    // Ying — event prompt takes priority over regular "find Ying"
    if (state.flags.r3YingRiver && !state.flags.r3YingConfessionFull && typeof getNpcAffinityNum === 'function' && getNpcAffinityNum('ying') >= 85) {
      c.push({ text: '♥ 螢說想在河邊跟你說一件事……', textEn: '♥ Ying said she wants to tell you something by the river...', action: () => loadNode('r3_ying_confession_full') });
    } else if (state.flags.r1YingCompanion) {
      c.push({ text: '找螢', textEn: 'Find Ying', action: () => loadNode('r3_ying_talk') });
    }
    if (state.flags.r3MarketVisited && !state.flags.r3ZhouMet) {
      c.push({ text: '市場角落的老人', textEn: 'Old man in the market corner', action: () => loadNode('r3_zhou') });
    }
    if (state.flags.r3BellQuest && !state.flags.r3Ending) {
      c.push({ text: '回報銅鐘（任務進度）', textEn: 'Report to Bronze Bell (quest progress)', action: () => loadNode('r3_quest_check') });
    }
    // Sub-hub: optional exploration nodes
    var hasR3Explore = !state.flags.r3UndergroundDone || !state.flags.r3TempleDone
      || !state.flags.r3LibraryDone || !state.flags.r3SlumDone
      || !state.flags.r3GardenDone || !state.flags.r3PrisonDone;
    if (hasR3Explore) {
      c.push({ text: '探索河城其他角落', textEn: 'Explore other corners of River City', action: () => loadNode('r3_explore') });
    }
    // Special NPC event prompts — bundle into one entry when multiple are active
    var npcEvents = [];
    if (state.flags.r3ZhouMet && !state.flags.r3ZhouDrink) {
      npcEvents.push({ text: '♦ 老周說今晚請你喝酒', textEn: '♦ Old Zhou invited you for a drink tonight', action: () => loadNode('r3_zhou_drink') });
    }
    if (state.flags.r1YingCompanion && state.flags.r3BellAlliance && !state.flags.r3NpcArgument) {
      npcEvents.push({ text: '♦ 議會廳外傳來爭吵聲……', textEn: '♦ Arguing voices outside the council hall...', action: () => loadNode('r3_npc_argument') });
    }
    if (npcEvents.length === 1) {
      c.push(npcEvents[0]);
    } else if (npcEvents.length > 1) {
      c.push({ text: '♦ 朋友們有事找你（' + npcEvents.length + '）', textEn: '♦ Friends need you (' + npcEvents.length + ')', action: function() {
        renderScene(L('誰先找你？', 'Who first?'),
          npcEvents.concat([{ text: '返回', textEn: 'Return', action: () => loadNode('r3_look') }]));
      }});
    }
    c.push({ text: '巡邏（練級）', textEn: 'Patrol (grind)', action: () => loadNode('r3_patrol') });
    c.push({ text: '返回上升通道', textEn: 'Return to ascent shaft', action: () => loadNode('r2_gate') });
    return c;
  })(), { label: L('河城渡口', 'River City Ferry') });
});

// ── R3 Sub-hub: optional exploration ──
registerNode('r3_explore', () => {
  renderScene(L('河城的角落還有許多值得探訪的地方。', 'River City has many corners still worth exploring.'), (function() {
    var c = [];
    if (!state.flags.r3UndergroundDone) {
      c.push({ text: '地下通道', textEn: 'Underground Tunnels', action: () => loadNode('r3_underground') });
    }
    if (!state.flags.r3TempleDone) {
      c.push({ text: '石化神殿', textEn: 'Petrification Temple', action: () => loadNode('r3_temple') });
    }
    if (!state.flags.r3LibraryDone) {
      c.push({ text: '圖書館', textEn: 'Library', action: () => loadNode('r3_library') });
    }
    if (!state.flags.r3SlumDone) {
      c.push({ text: '下城區', textEn: 'Lower District', action: () => loadNode('r3_slum') });
    }
    if (!state.flags.r3GardenDone) {
      c.push({ text: '議會花園', textEn: 'Council Garden', action: () => loadNode('r3_garden_r3') });
    }
    if (!state.flags.r3PrisonDone) {
      c.push({ text: '河城監獄', textEn: 'City Prison', action: () => loadNode('r3_prison') });
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r3_look') });
    return c;
  })());
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
    if (state.flags.r3ZhouMet && state.flags.r3CraneMet3 && !state.flags.r3CraneZhou) {
      c.push({ text: '碼頭盡頭有兩個人在下棋', textEn: 'Two people are playing chess at the dock\'s end', action: () => loadNode('r3_crane_zhou') });
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
    addNpcAffinity('bell', 3);
    // NG+ memory: recognizing Bronze Bell
    if (state.flags.ngPlus) {
      steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '你還沒走進房間，就已經知道裡面坐的是誰——銅鐘。那個石化了右手卻依然握筆不停的女人。', textEn: 'Before entering, you already know who sits inside — Bronze Bell. The woman whose right hand turned to stone yet never stopped writing.', delay: 2800 });
      steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '上一世，她是你最重要的盟友。或者最大的障礙。這取決於你怎麼做。', textEn: 'In your past life, she was your greatest ally. Or greatest obstacle. It depended on your choices.', delay: 2500 });
    }
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進議會廳右側走廊盡頭的房間。門半開著。', textEn: 'You enter the room at the end of the right corridor. The door is ajar.', delay: 2000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', html: '靠窗的桌旁坐著一個高挑豐腴的女人。淡金色的髮髻，輪廓銳利，官服被撐得很滿——氣場強得像一堵牆。她的右手已經完全石化，卻依然穩穩地握著筆在寫字。', htmlEn: 'A tall, full-figured woman sits by the window. Pale gold hair in a sharp bun, sculpted features, official robes stretched taut — her presence hits like a wall. Her right hand is fully petrified, yet still grips the pen steadily, writing without pause.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「門是關著的。」她沒有抬頭，聲音低沉而具有穿透力。語氣不是問句——是陳述。意思很清楚：<b>你沒有被邀請</b>。', htmlEn: '"The door was closed." She doesn\'t look up, her voice low and penetrating. It\'s not a question — it\'s a statement. The meaning is clear: <b>you were not invited</b>.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她終於放下筆，轉過身來。琥珀色的眼睛帶著冷銳的審視，像在估量一件可疑的貨物。', textEn: 'She finally sets down her pen and turns. Amber eyes carry a cold, cutting appraisal — like sizing up suspect merchandise.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「我是<b>銅鐘</b>。聽說有人從下面爬上來了——」她的目光掃過你身上的石化痕跡，眉頭微微一皺。「看這石化程度，你確實是從深處來的。問題是——你來這裡做什麼？」', htmlEn: '"I\'m <b>Bronze Bell</b>. I heard someone crawled up from below —" Her gaze sweeps your petri-marks, brow furrowing slightly. "Given that level of petrification, you did come from deep down. The question is — what do you want here?"', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她不自覺地用左手按了按石化的右手腕——但那個動作很快就被掩飾了。她的態度很明確：在你證明自己之前，你只是又一個帶著石化病從下面爬上來的麻煩。', textEn: 'She unconsciously presses her petrified right wrist with her left hand — but the gesture is quickly masked. Her stance is clear: until you prove yourself, you\'re just another petrified nuisance who crawled up from below.', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「議會裡有人主張封鎖下層通道。我需要的是事實，不是難民的哭訴。」她重新拿起筆，彷彿隨時準備結束這場對話。「如果你有什麼值得聽的——說吧。簡短一點。」', textEn: '"Some on the Council want to seal the lower passages. What I need are facts, not a refugee\'s sob story." She picks up her pen again, as if ready to end this conversation at any moment. "If you have something worth hearing — speak. Keep it brief."', delay: 3500 });
  } else if (!state.flags.r3BellAlliance) {
    // Before alliance: cold, professional — she hasn't accepted you yet
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '銅鐘還是坐在那張堆滿文件的桌子旁。看到你進來，她只是瞥了一眼。', textEn: 'Bronze Bell sits at her document-laden desk. She only glances at you when you enter.', delay: 2200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「任務完成了嗎？」她的語氣平淡，像在問一個下屬的進度報告。', textEn: '"Are the tasks done?" Her tone is flat, like asking a subordinate for a progress report.', delay: 2500 });
  } else {
    // Track return visits for escalating intimacy (only after alliance)
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
    // NG+ exclusive: show past-life knowledge of Bell's quests
    if (state.flags.ngPlus && !state.flags.r3BellReport) {
      c.push({ text: '「清除隧道、灰鶴作證、瘟疫證據——對吧？」', textEn: '"Clear the tunnels, Crane\'s testimony, plague evidence — right?"', action: () => {
        autoExplore([
          { tag: '記憶', tagColor: 'tag-petri', text: '你不等她開口就說出了三個任務的內容。每一個字都精準得像是從她的嘴裡聽過一樣——因為你確實聽過。', textEn: 'You speak before she can. Every word precise, as if you\'d heard them from her lips — because you have.', delay: 3200 },
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘的表情變了。第一次——你看到她露出了真正的驚訝。不是演的。', textEn: 'Bronze Bell\'s expression shifts. For the first time — genuine surprise. Not performed.', delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc', text: '「……你怎麼知道的？」她的聲音壓低了半度。琥珀色的眼睛死死盯著你，像是在分辨你是間諜還是別的什麼。', textEn: '"...How do you know that?" Her voice drops half a register. Amber eyes lock on you, trying to determine if you\'re a spy or something else.', delay: 3200 },
          { tag: '對話', tagColor: 'tag-npc', text: '你沒有解釋。有些事情，解釋了反而更可疑。', textEn: 'You don\'t explain. Some things sound even more suspicious when explained.', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '沉默了很久。然後銅鐘做了一件你意料之外的事——她笑了。很淡，但是真的。', textEn: 'A long silence. Then Bronze Bell does something unexpected — she smiles. Faint, but real.', delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc', text: '「有意思。你要麼是最精明的間諜——要麼是最奇怪的盟友。」她拿起筆。「好。既然你知道了——去做吧。用行動證明你不只是會說對的話。」', textEn: '"Interesting. You\'re either the shrewdest spy — or the strangest ally." She picks up her pen. "Fine. Since you know — go do it. Prove you\'re more than just someone who says the right words."', delay: 3500 },
          { tag: '效果', tagColor: 'tag-system', text: L('銅鐘印象深刻 | 任務已接受', 'Bronze Bell is intrigued | Quests accepted'), delay: 1500, effect: () => {
            state.flags.r3BellReport = true;
            state.flags.r3BellQuest = true;
            state.flags.r3NgPlusBellShock = true;
          }},
        ], [
          { text: '（轉身離開。你知道該做什麼。）', textEn: '(Turn and leave. You know what to do.)', action: () => loadNode('r3_look') },
        ], { label: L('前世的記憶', 'Memory of a past life') });
      }});
    }
    if (!state.flags.r3BellReport) {
      c.push({ text: '告訴她下面的情況', textEn: 'Report on conditions below', action: () => {
        state.flags.r3BellReport = true;
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你把在祭獻坑、石脈迴廊和大採石場的經歷告訴了銅鐘。', textEn: 'You recount your experiences in the Sacrificial Pit, Vein Corridor, and Great Quarry.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '鐵霜帶領的營地、迴廊裡的倖存者、老周、守衛——', textEn: 'Iron Frost\'s camp, corridor survivors, Old Zhou, the guards —', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘一邊聽一邊用石化的右手在紙上做記錄。你說話的時候她一直沒抬頭——你無法判斷她信了多少。', textEn: 'Bronze Bell takes notes with her petrified right hand. She never looks up while you speak — you can\'t tell how much she believes.', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '說到傷亡最慘重的部分時，她的筆尖頓了一下——只有一下。然後她繼續寫字，像什麼都沒發生。', textEn: 'At the worst of the casualties, her pen tip pauses — just for a beat. Then she resumes writing, as if nothing happened.', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '你說完了。沉默。銅鐘放下筆，雙手交叉撐在桌面上，終於抬眼看你。', textEn: 'You finish. Silence. Bronze Bell sets down her pen, arms crossed on the desk, and finally looks up.', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '「有意思。」她的語氣不冷不熱。「但議會每個月都能聽到這種故事。從下面爬上來的人，每個都說自己是無辜的難民。」', textEn: '"Interesting." Her tone is neither warm nor cold. "But the Council hears stories like this every month. Everyone who crawls up from below claims to be an innocent refugee."', delay: 3500 },
          { tag: '感知', tagColor: 'tag-sense', text: '她站起身——站起來的瞬間，你才真正感受到她的氣場。比坐著的時候壓迫感強了一倍。', textEn: 'She stands — the moment she rises, you truly feel her presence. Twice as commanding as when seated.', delay: 2800 },
          { art: npcPortrait.art('bell', { subtitle: '議員' }), artEn: npcPortrait.art('bell', { subtitle: 'Councilor' }), delay: 800 },
          { tag: '情報', tagColor: 'tag-info', html: '「我不會因為你的一面之詞就相信你。」她走到牆邊，伸手從高處取下一張捲起的地圖。「但我也不會因為別人的偏見就把你趕走。」', htmlEn: '"I won\'t believe you based on your word alone." She strides to the wall, reaching up for a rolled map. "But I won\'t chase you off based on others\' prejudice either."', delay: 3500 },
          { tag: '情報', tagColor: 'tag-info', html: '她把地圖攤在桌面上，石化的右手釘住一角。抬眼看你的時候，琥珀色的瞳孔裡不是信任——是<b>考驗</b>。', htmlEn: 'She spreads the map across the desk, petrified right hand pinning one corner. When she looks up, what\'s in those amber eyes isn\'t trust — it\'s a <b>test</b>.', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', html: '「議會投票還有幾天。如果你說的是真的——<b>用行動證明</b>。」', htmlEn: '"The Council vote is in a few days. If what you say is true — <b>prove it with actions</b>."', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', html: '「第一：去<b>河岸隧道</b>清除那裡的變異生物。鏽刃說怪物從下面上來——如果你能證明那不是事實，他的藉口就不成立了。」', htmlEn: '"First: clear the <b>river tunnels</b> of mutants. Rust Blade claims monsters come from below — if you prove otherwise, his excuse collapses."', delay: 3500 },
          { tag: '情報', tagColor: 'tag-info', html: '「第二：在市場找到<b>灰鶴</b>。她在上下層之間跑商路，她的證詞我信得過——不像你的。」', htmlEn: '"Second: find <b>Grey Crane</b> in the market. She runs trade routes between levels — her testimony I trust. Unlike yours."', delay: 3200 },
          { tag: '情報', tagColor: 'tag-info', html: '「第三：找到<b>石化瘟疫起源</b>的證據。如果瘟疫不是因為下層通道——那封鎖就毫無意義。」', htmlEn: '"Third: find evidence of the <b>plague\'s true origin</b>. If the plague didn\'t come from the lower passages — sealing them is pointless."', delay: 3200 },
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘直起身子，居高臨下地看著你。那個姿態不是盟友——是上位者在審視一個還沒通過考驗的人。', textEn: 'Bronze Bell straightens, looking down at you. That posture isn\'t an ally\'s — it\'s a superior assessing someone who hasn\'t yet passed muster.', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「做到了，再來找我。做不到——」她重新坐下，拿起筆。「那你的故事就只是故事。」', textEn: '"Accomplish this, then come find me. If you can\'t —" She sits back down, picking up her pen. "Then your story is just a story."', delay: 3000 },
        ], [
          { text: '我會證明給你看', textEn: 'I\'ll prove it to you', action: () => {
            state.flags.r3BellQuest = true;
            loadNode('r3_look');
          }},
          { text: '離開', textEn: 'Leave', action: () => loadNode('r3_council') },
        ], { label: L('銅鐘的考驗', 'Bronze Bell\'s test') });
      }});
    }
    if (state.flags.r3BellQuest) {
      c.push({ text: '回報任務進度', textEn: 'Report quest progress', action: () => loadNode('r3_quest_check') });
    }
    // Sidequest: Bell's night (requires alliance formed)
    if (state.flags.r3BellAlliance && !state.flags.r3BellNight) {
      c.push({ text: '深夜拜訪銅鐘', textEn: 'Visit Bell at night', action: () => loadNode('r3_bell_night') });
    }
    // Sidequest: Bell's secret (requires night visit + has letter or testimony)
    if (state.flags.r3BellNight && !state.flags.r3BellSecret && (state.flags.r2FrostLetterCarried || state.flags.r3ZhouTestimony)) {
      c.push({ text: '銅鐘，你知道封鎖的真正原因嗎？', textEn: 'Bell, do you know the real reason for the lockdown?', action: () => loadNode('r3_bell_secret') });
    }
    // Sidequest: Bell's deep alliance (requires secret revealed)
    if (state.flags.r3BellSecret && !state.flags.r3BellAllianceDeep) {
      c.push({ text: '銅鐘，我們需要一起面對這件事', textEn: 'Bell, we need to face this together', action: () => loadNode('r3_bell_alliance_deep') });
    }
    // Romance: Tea after quest report (requires alliance, one-time)
    if (state.flags.r3BellAlliance && !state.flags.r3BellTea) {
      c.push({ text: '留下來喝杯茶', textEn: 'Stay for tea', action: () => loadNode('r3_bell_tea') });
    }
    // Romance: Massage her petrified hand (requires tea + affinity >= 50)
    if (state.flags.r3BellTea && !state.flags.r3BellHand && typeof getNpcAffinityNum === 'function' && getNpcAffinityNum('bell') >= 50) {
      c.push({ text: '你的手……還疼嗎？', textEn: 'Does your hand... still hurt?', action: () => loadNode('r3_bell_hand') });
    }
    // Romance: Pre-vote night, leaning on shoulder (requires hand + affinity >= 70)
    if (state.flags.r3BellHand && !state.flags.r3BellWall && typeof getNpcAffinityNum === 'function' && getNpcAffinityNum('bell') >= 70) {
      c.push({ text: '表決前夜，去找銅鐘', textEn: 'Visit Bell the night before the vote', action: () => loadNode('r3_bell_wall') });
    }
    // NG+ Romance: Mentioning her hand pain from a past life (requires NG+ + wall scene done)
    if (state.flags.ngPlus && state.flags.r3BellWall && !state.flags.r3BellNgMemory && typeof getNpcAffinityNum === 'function' && getNpcAffinityNum('bell') >= 75) {
      c.push({ text: '「你的右手——半夜最痛，對嗎？」', textEn: '"Your right hand — it hurts most at midnight, doesn\'t it?"', action: () => loadNode('r3_bell_ng_memory') });
    }
    // NG+ Romance: Garden walk (requires ng_memory + high affinity)
    if (state.flags.ngPlus && state.flags.r3BellNgMemory && !state.flags.r3BellNgGarden && typeof getNpcAffinityNum === 'function' && getNpcAffinityNum('bell') >= 85) {
      c.push({ text: '銅鐘邀你去議會花園走走', textEn: 'Bell invites you to walk in the Council garden', action: () => loadNode('r3_bell_ng_garden') });
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode(state.flags.r3BellQuest ? 'r3_look' : 'r3_council') });
    return c;
  })(), { label: L('銅鐘', 'Bronze Bell') });
});

// ═══════════════════════════════════════════════════
//  NPC Sidequest — 銅鐘 (Bronze Bell) Deep Arc
// ═══════════════════════════════════════════════════

// --- r3_bell_night: Late-night visit, discovering Bell's vulnerability ---
registerNode('r3_bell_night', () => {
  state.flags.r3BellNight = true;
  addNpcAffinity('bell', 15);
  autoExplore([
    { tag: '移動', tagColor: 'tag-move',
      text: L('深夜。議會廳的走廊空無一人。銅鐘辦公室的門縫裡還透著燭光。',
             'Late at night. The Council hall corridors are empty. Candlelight seeps through the crack beneath Bronze Bell\'s office door.'),
      delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('你推門的時候聽到了一聲壓抑的——是呻吟嗎？不是。是痛苦的低語。',
             'As you push the door, you hear a stifled — a moan? No. A murmur of pain.'),
      delay: 2500 },
    { art: npcPortrait.art('bell', { subtitle: '……' }) || `<pre class="ascii-art">
       ·  ˚  銅鐘 — 深夜辦公室  ˚  ·
              ╱═══╲
             │ ─  ─ │  ← 閉眼
             │  ───  │
              ╲═══╱
        ╱───┤  ░▓█  ├───╲
       ╱    │  ▓██  │    ╲
      ╱  ╱──┤  ░▓█  ├──╲  ╲
           石化右手
           正在疼痛……
</pre>`, artEn: npcPortrait.art('bell', { subtitle: '...' }) || `<pre class="ascii-art">
    ·  ˚  Bronze Bell — Late night  ˚  ·
              ╱═══╲
             │ ─  ─ │  ← eyes shut
             │  ───  │
              ╲═══╱
        ╱───┤  ░▓█  ├───╲
       ╱    │  ▓██  │    ╲
      ╱  ╱──┤  ░▓█  ├──╲  ╲
        Petrified hand
        in agony...
</pre>`, delay: 800 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('銅鐘跪在桌旁，左手用力按住石化的右手腕。她的額頭上全是冷汗。石化的右手指節發出細微的碎裂聲——像是石頭在膨脹。',
             'Bronze Bell kneels beside her desk, left hand pressing hard on her petrified right wrist. Cold sweat covers her forehead. Her stone fingers emit faint cracking sounds — as if the rock is expanding.'),
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('她聽到你的腳步聲，猛地抬頭——琥珀色的眼睛裡沒有平時的從容。只有赤裸裸的痛苦。和一瞬間的……羞恥。',
             'She hears your footsteps and snaps her head up — no composure in those amber eyes. Just raw pain. And a flash of... shame.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「出去。」她的聲音嘶啞。「我沒讓你進來。」',
             '"Get out." Her voice is hoarse. "I didn\'t invite you in."'),
      delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('但她的左手沒有鬆開石化的右手腕——你看到她的手在發抖。疼痛讓她無法維持那副鐵面孔。',
             'But her left hand doesn\'t release her petrified wrist — you see her hand trembling. The pain strips away her iron mask.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……每天晚上都會這樣。」沉默了很久，她才小聲開口。「石化在擴散的時候，就像——有人在用熱鐵從裡面燒你的骨頭。」',
             '"...It happens every night." After a long silence, she whispers. "When the petrification spreads, it feels like — someone burning your bones from the inside with a hot iron."'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「白天我撐得住。議會的人不能看到我疼。」她苦笑了一聲。「夜裡……就沒辦法了。」',
             '"During the day I hold it together. The Council can\'t see me in pain." She laughs bitterly. "At night... I can\'t."'),
      delay: 3200 },
  ], [
    { text: '幫她按住手腕', textEn: 'Help hold her wrist',
      action: () => {
        autoExplore([
          { tag: '行動', tagColor: 'tag-move',
            text: L('你蹲到她身邊，伸手覆上她的左手——幫她一起按住石化的手腕。你的體溫透過她的手指傳了過去。',
                   'You kneel beside her, your hand covering hers — helping press down on the petrified wrist. Your warmth passes through her fingers.'),
            delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('銅鐘的身體僵了一瞬。然後——你感覺她的手指慢慢放鬆了。不是不疼了，而是不再逞強了。',
                   'Bronze Bell\'s body stiffens for a heartbeat. Then — you feel her fingers slowly relax. Not because the pain stopped, but because she stopped pretending.'),
            delay: 3200 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……你手很暖。」她低聲說。語氣裡沒有了白天那個鐵面議員的影子。只是一個疼痛中的女人在感謝一雙溫暖的手。',
                   '"...Your hand is warm." She whispers. The iron councilor from daylight is gone. Just a woman in pain, grateful for a warm hand.'),
            delay: 3200 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('你們就這樣坐在黑暗的辦公室裡，很久。燭光在石化的手指上閃爍。',
                   'The two of you sit like that in the dark office for a long time. Candlelight flickers on petrified fingers.'),
            delay: 3000 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('銅鐘好感 ↑↑↑ | 經驗 +10 | HP +15', 'Bronze Bell bond ↑↑↑ | XP +10 | HP +15'),
            delay: 2000, effect: () => { gainXp(10); changeHp(15); } },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_council') },
        ], { label: L('銅鐘的夜晚', 'Bronze Bell\'s night') });
      }},
    { text: '默默陪著她', textEn: 'Stay silently beside her',
      action: () => {
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense',
            text: L('你沒有說話。只是坐到她旁邊，靠著牆壁。痛苦的時候，有時候沉默比安慰更有用。',
                   'You say nothing. Just sit beside her, leaning against the wall. In pain, sometimes silence is more useful than comfort.'),
            delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('過了很久，銅鐘輕聲說了一句：「……謝謝你沒走。」',
                   'After a long while, Bronze Bell murmurs: "...Thank you for not leaving."'),
            delay: 2800 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('銅鐘好感 ↑↑ | 經驗 +8', 'Bronze Bell bond ↑↑ | XP +8'),
            delay: 1500, effect: () => gainXp(8) },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_council') },
        ], { label: L('銅鐘的夜晚', 'Bronze Bell\'s night') });
      }},
  ], { label: L('銅鐘的夜晚', 'Bronze Bell\'s night') });
});

// --- r3_bell_secret: Bell knows the real reason for lockdown ---
registerNode('r3_bell_secret', () => {
  state.flags.r3BellSecret = true;
  addNpcAffinity('bell', 10);
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('你提到了監工 K 的真名、議會的軍事命令、以及鐵霜的信。銅鐘聽著，表情一點點變了。',
             'You mention Overseer K\'s real name, the Council\'s military orders, and Iron Frost\'s letter. Bronze Bell listens, her expression shifting slowly.'),
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('她沒有震驚。她的表情是——確認。像是某個一直懷疑的事情，終於得到了證實。',
             'She doesn\'t look shocked. Her expression is — confirmation. As if something long suspected has finally been verified.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……我知道。」銅鐘閉上了眼睛。「不是全部，但我知道一些。」',
             '"...I know." Bronze Bell closes her eyes. "Not everything, but some of it."'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      html: L('「議會裡有一個派系——以<b>鏽刃</b>為首。他們一直在推動封鎖通道。我以為只是為了安全。」',
             '"There\'s a faction in the Council — led by <b>Rust Blade</b>. They\'ve been pushing to seal the passages. I assumed it was for safety."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「但半年前我在鏽刃的私人文件裡看到了一份採購清單。」她的聲音壓得很低。',
             '"But six months ago I saw a procurement list in Rust Blade\'s private files." Her voice drops low.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      html: L('「<b>石化結晶</b>——大量的、精煉過的石化結晶。不是用來研究治療的，是用來<b>製造武器</b>的。」',
             '"<b>Petrification crystals</b> — refined, in massive quantities. Not for researching a cure. For <b>manufacturing weapons</b>."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「封鎖通道的真正目的不是防止瘟疫擴散——是壟斷下層的石化結晶資源。封了通道，就沒人能跟他們搶。」',
             '"The real purpose of sealing the passages isn\'t to stop plague spread — it\'s to monopolize the lower levels\' petrification crystal resources. Seal the routes, and no one competes."'),
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('銅鐘的眼睛睜開了。琥珀色的瞳孔裡燃燒著某種你從未見過的東西——不是恐懼，是憤怒。',
             'Bronze Bell\'s eyes open. Something you\'ve never seen before burns in those amber irises — not fear, but fury.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我一個人的話——查不動。鏽刃在議會裡的勢力太大了。」她看著你。「但現在……有你的證據，有老周的證詞，有鐵霜的信——也許夠了。」',
             '"Alone — I can\'t investigate. Rust Blade\'s influence in the Council is too strong." She looks at you. "But now... with your evidence, Zhou\'s testimony, Frost\'s letter — maybe it\'s enough."'),
      delay: 3500 },
    { tag: '效果', tagColor: 'tag-system',
      text: L('經驗 +12', 'XP +12'),
      delay: 1500, effect: () => gainXp(12) },
  ], [
    { text: '我們一起揭露真相', textEn: 'Let\'s expose the truth together', action: () => loadNode('r3_bell') },
    { text: '返回', textEn: 'Back', action: () => loadNode('r3_council') },
  ], { label: L('銅鐘的秘密', 'Bronze Bell\'s secret') });
});

// --- r3_bell_alliance_deep: Bell shows all her cards ---
registerNode('r3_bell_alliance_deep', () => {
  state.flags.r3BellAllianceDeep = true;
  addNpcAffinity('bell', 12);
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('銅鐘把辦公室的門鎖上了。她走到桌旁，從一個暗格裡取出一疊文件。',
             'Bronze Bell locks the office door. She walks to her desk and retrieves a stack of documents from a hidden compartment.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「這些是我這半年偷偷收集的。」她把文件攤在桌上。「鏽刃的私人信件、結晶交易記錄、議會內部的表決分析——」',
             '"These are what I\'ve secretly gathered over six months." She spreads the files across the desk. "Rust Blade\'s private letters, crystal trade records, Council vote analyses —"'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「全部。我的底牌。現在給你看。」銅鐘直視你的眼睛。她的目光裡沒有了考驗，沒有了保留。只有信任。',
             '"Everything. My hand of cards. Showing it to you now." Bronze Bell meets your eyes directly. No more testing, no more holding back. Only trust.'),
      delay: 3200 },
    { art: `<pre class="ascii-art">
  ╔═════════════════════════════════╗
  ║   銅鐘的秘密檔案                ║
  ╠═════════════════════════════════╣
  ║                                 ║
  ║  ┌───────┐ ┌───────┐           ║
  ║  │鏽刃信件│ │結晶帳目│          ║
  ║  └───┬───┘ └───┬───┘           ║
  ║  ┌───┴───┐ ┌───┴───┐           ║
  ║  │表決紀錄│ │軍事訂單│          ║
  ║  └───┬───┘ └───┬───┘           ║
  ║  ┌───┴─────────┴───┐           ║
  ║  │ 議會腐敗的完整證據 │         ║
  ║  └─────────────────┘           ║
  ║                                 ║
  ║    ·˚· 她的全部底牌 ·˚·        ║
  ╚═════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═════════════════════════════════╗
  ║   BELL'S SECRET DOSSIER        ║
  ╠═════════════════════════════════╣
  ║                                 ║
  ║  ┌────────┐ ┌────────┐         ║
  ║  │Rust Blade│ │Crystal  │       ║
  ║  │ Letters  │ │Ledgers  │       ║
  ║  └────┬───┘ └────┬───┘         ║
  ║  ┌────┴───┐ ┌────┴───┐         ║
  ║  │  Vote   │ │Military │        ║
  ║  │Records  │ │ Orders  │        ║
  ║  └────┬───┘ └────┬───┘         ║
  ║  ┌────┴──────────┴────┐        ║
  ║  │ Complete corruption │        ║
  ║  │      evidence       │        ║
  ║  └────────────────────┘        ║
  ║                                 ║
  ║    ·˚· All her cards ·˚·       ║
  ╚═════════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我一個人能做的到此為止了。」她的聲音很輕，但很穩。「鏽刃在議會有三票。我只有一票。加上你帶來的證據——也許能翻盤。」',
             '"This is as far as I can go alone." Her voice is quiet but steady. "Rust Blade has three votes. I have one. With the evidence you\'ve brought — maybe we can turn it around."'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      html: L('「但如果失敗了——」銅鐘頓了頓。「我會被議會開除，或者更糟。鏽刃不會放過知道真相的人。」',
             '"But if we fail —" Bronze Bell pauses. "I\'ll be expelled from the Council, or worse. Rust Blade doesn\'t forgive those who know the truth."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('她伸出左手——完好的那隻，不是石化的那隻。掌心向上。',
             'She extends her left hand — the unpetrified one. Palm up.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「一起？」她問。只有一個字。但你從她的眼睛裡看到了你見過的最真誠的表情。',
             '"Together?" she asks. A single word. But in her eyes you see the most sincere expression you\'ve ever witnessed from her.'),
      delay: 3000 },
  ], [
    { text: '握住她的手', textEn: 'Take her hand',
      action: () => {
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense',
            text: L('你握住了銅鐘的手。她的手指收緊了——用力，但不疼。像是在握住一個承諾。',
                   'You take Bronze Bell\'s hand. Her fingers tighten — firmly, but not painfully. As if holding onto a promise.'),
            delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……好。」她的嘴角勾起了一個弧度——不是白天那種精心計算的微笑。是真的。「那就一起把這個爛攤子收拾乾淨。」',
                   '"...Good." Her lips curve — not the calculated daytime smile. A real one. "Then let\'s clean up this mess together."'),
            delay: 3200 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('銅鐘好感 MAX | 獲得「銅鐘的秘密檔案」| 經驗 +15 | 意志 +2', 'Bronze Bell bond MAX | Acquired "Bell\'s Secret Dossier" | XP +15 | WIL +2'),
            delay: 2000, effect: () => {
              addItem(L('銅鐘的秘密檔案', 'Bell\'s Secret Dossier'));
              gainXp(15);
              changeStat('wil', 2);
            }},
          { tag: '系統', tagColor: 'tag-system',
            text: L('（銅鐘的檔案將在議會投票中起決定性作用）', '(Bell\'s dossier will play a decisive role in the Council vote)'),
            delay: 2000 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_council') },
        ], { label: L('深度同盟', 'Deep alliance') });
      }},
  ], { label: L('銅鐘的底牌', 'Bronze Bell\'s cards') });
});

// ═══════════════════════════════════════════════════
//  Romance — 銅鐘 (Bronze Bell) C3 Route
// ═══════════════════════════════════════════════════

// --- r3_bell_tea: After alliance, Bell invites you for tea (rare gesture) ---
registerNode('r3_bell_tea', () => {
  state.flags.r3BellTea = true;
  addNpcAffinity('bell', 5);
  autoExplore([
    { tag: '感知', tagColor: 'tag-sense',
      text: L('你準備離開的時候，銅鐘忽然說了一句：「等等。」',
             'As you turn to leave, Bronze Bell suddenly says: "Wait."'),
      delay: 2200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('她打開桌角一個小木盒，裡面是茶葉——在地底，這比金幣還稀罕。',
             'She opens a small wooden box at the corner of her desk. Inside is tea — underground, rarer than gold coins.'),
      delay: 2800 },
    { art: npcPortrait.art('bell', { subtitle: L('……坐', '...Sit') }) || '<pre class="ascii-art">\n    ·˚· 銅鐘 — 茶 ·˚·\n        ╱═══╲\n       │ ─  ─ │\n       │  ─   │\n        ╲═══╱\n      ┌─┤    ├─┐\n      │ │ ☕ │ │\n      └─┤    ├─┘\n</pre>', artEn: npcPortrait.art('bell', { subtitle: '...Sit' }) || '<pre class="ascii-art">\n    ·˚· Bell — Tea ·˚·\n        ╱═══╲\n       │ ─  ─ │\n       │  ─   │\n        ╲═══╱\n      ┌─┤    ├─┐\n      │ │ ☕ │ │\n      └─┤    ├─┘\n</pre>', delay: 800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「只是因為你有用。」她倒茶的時候說，沒有看你。但她倒了兩杯——大小一模一樣。',
             '"Just because you\'re useful." She says while pouring, not looking at you. But she pours two cups — exactly the same size.'),
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('茶的溫度透過陶杯傳到掌心。你想起來了——在深淵裡，「有用」就是銅鐘最高的肯定。',
             'The warmth seeps through the clay cup into your palm. You realize — underground, "useful" is Bronze Bell\'s highest praise.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「你是第一個在這間辦公室喝茶的外人。」她啜了一口。「……也許是最後一個。表決之後，這張桌子也許就不是我的了。」',
             '"You\'re the first outsider to drink tea in this office." She takes a sip. "...Perhaps the last. After the vote, this desk may no longer be mine."'),
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('你們沉默地喝完了一杯茶。辦公室裡只有茶水和燭火的聲音。這也許是你在深淵裡最安靜的時刻。',
             'You finish the tea in silence. Only the sounds of liquid and candlelight in the office. Perhaps the quietest moment you\'ve had in the abyss.'),
      delay: 3000 },
    { tag: '效果', tagColor: 'tag-system',
      text: L('銅鐘好感 ↑ | HP +8', 'Bronze Bell bond ↑ | HP +8'),
      delay: 1500, effect: () => { changeHp(8); } },
  ], [
    { text: '返回', textEn: 'Back', action: () => loadNode('r3_council') },
  ], { label: L('一杯茶', 'A cup of tea') });
});

// --- r3_bell_hand: Massaging Bell's petrified hand (affinity >= 50) ---
registerNode('r3_bell_hand', () => {
  state.flags.r3BellHand = true;
  addNpcAffinity('bell', 10);
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('銅鐘的動作頓了一下。她下意識把右手藏到桌子底下。',
             'Bronze Bell\'s movements falter. She instinctively hides her right hand under the desk.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「不關你的事。」她說。但她的聲音沒有平時那麼硬。',
             '"None of your concern." she says. But her voice lacks its usual edge.'),
      delay: 2500 },
  ], [
    { text: '讓我看看', textEn: 'Let me see',
      action: () => {
        addNpcAffinity('bell', 5);
        autoExplore([
          { tag: '行動', tagColor: 'tag-move',
            text: L('你伸出手，等著。沒有去拉她。只是等。',
                   'You hold out your hand. Not pulling. Just waiting.'),
            delay: 2500 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('十秒。二十秒。銅鐘咬了一下嘴唇。然後，慢慢地，把石化的右手放到了你的掌心上。',
                   'Ten seconds. Twenty. Bronze Bell bites her lip. Then, slowly, places her petrified right hand in your palm.'),
            delay: 3200 },
          { art: npcPortrait.art('bell', { subtitle: L('……痛', '...hurts') }) || '<pre class="ascii-art">\n     你的手     銅鐘的手\n     ╱───╲      ╱▓▓▓╲\n    │·····│────│░▓▓▓░│\n    │·····│    │▓████▓│\n     ╲───╱      ╲▓▓▓╱\n      溫暖        冰冷\n      柔軟        堅硬\n</pre>', artEn: npcPortrait.art('bell', { subtitle: '...hurts' }) || '<pre class="ascii-art">\n     Your hand   Bell\'s hand\n     ╱───╲       ╱▓▓▓╲\n    │·····│─────│░▓▓▓░│\n    │·····│     │▓████▓│\n     ╲───╱       ╲▓▓▓╱\n      Warm        Cold\n      Soft        Hard\n</pre>', delay: 800 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('她的手指冰涼而堅硬——石化的部分像大理石一樣光滑。但在石紋的裂縫裡，你能感覺到微弱的脈搏。她的手還沒有完全死去。',
                   'Her fingers are cold and rigid — the petrified parts smooth as marble. But in the cracks between stone veins, you feel a faint pulse. Her hand isn\'t completely dead.'),
            delay: 3500 },
          { tag: '行動', tagColor: 'tag-move',
            text: L('你用拇指沿著石紋的邊緣輕輕按壓。銅鐘倒吸了一口氣——不是疼痛，是太久沒有人碰過那隻手。',
                   'You press your thumb gently along the edges of the stone veins. Bronze Bell draws a sharp breath — not pain. It\'s been too long since anyone touched that hand.'),
            delay: 3200 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……你不覺得噁心嗎？」她問。聲音很輕，像是怕你聽到。「石化的手。半人半石。議會裡有人叫我石手鬼。」',
                   '"...You\'re not disgusted?" she asks. Voice so quiet, as if afraid you\'d hear. "A petrified hand. Half-human, half-stone. Some on the Council call me the Stone-Hand Ghost."'),
            delay: 3500 },
          { tag: '行動', tagColor: 'tag-move',
            text: L('你沒有回答。只是把她的石化手指一根根掰開，輕輕揉捏指節之間殘存的肌腱。',
                   'You don\'t answer. You just gently pry open her stone fingers one by one, kneading the tendons that remain between the joints.'),
            delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('銅鐘的呼吸慢慢變深了。她的肩膀放鬆下來。你注意到她的眼角有一點光——是燭火的反射。也許不只是燭火。',
                   'Bronze Bell\'s breathing slowly deepens. Her shoulders relax. You notice a glimmer at the corner of her eye — candlelight reflected. Perhaps not only candlelight.'),
            delay: 3200 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「夠了。」她抽回手。但速度很慢。「……明天如果我的手好一點，那不是因為你。」',
                   '"Enough." She pulls her hand back. But slowly. "...If my hand feels better tomorrow, it\'s not because of you."'),
            delay: 3000 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('銅鐘好感 ↑↑ | HP +10 | 石化 -3', 'Bronze Bell bond ↑↑ | HP +10 | Petri -3'),
            delay: 1500, effect: () => { changeHp(10); changePetri(-3); } },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_council') },
        ], { label: L('石化的手', 'The petrified hand') });
      }},
    { text: '好吧，不問了', textEn: 'Alright, I won\'t ask',
      action: () => {
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense',
            text: L('銅鐘看了你一眼。她的表情裡有鬆了一口氣，也有一絲……失望？你不確定。',
                   'Bronze Bell glances at you. Relief in her expression, but also a trace of... disappointment? You\'re not sure.'),
            delay: 2500 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_council') },
        ], { label: L('銅鐘', 'Bronze Bell') });
      }},
  ], { label: L('石化的手', 'The petrified hand') });
});

// --- r3_bell_wall: Night before the vote, Bell breaks down (affinity >= 70) ---
registerNode('r3_bell_wall', () => {
  state.flags.r3BellWall = true;
  addNpcAffinity('bell', 8);
  autoExplore([
    { tag: '移動', tagColor: 'tag-move',
      text: L('表決前夜。議會廳的走廊冷得像一條石棺。你找到銅鐘的時候，她站在走廊盡頭的窗口，看著河城的夜景。',
             'The night before the vote. The Council hall corridor is cold as a stone coffin. You find Bronze Bell at the end of the corridor, standing by the window, watching the river city\'s night.'),
      delay: 3200 },
    { art: npcPortrait.art('bell', { subtitle: L('……', '...') }) || '<pre class="ascii-art">\n     ·˚· 走廊盡頭 ·˚·\n\n  ╔══════╗     ╱═══╲\n  ║ 河城 ║    │ ─  ─ │\n  ║ 夜景 ║    │  ─   │\n  ║ ···· ║     ╲═══╱\n  ║ ☆  ˚ ║   ╱│     │╲\n  ║  · ☆ ║  ╱ │     │ ╲\n  ╚══════╝    │     │\n     窗        銅鐘\n</pre>', artEn: npcPortrait.art('bell', { subtitle: '...' }) || '<pre class="ascii-art">\n     ·˚· End of corridor ·˚·\n\n  ╔══════╗     ╱═══╲\n  ║ River║    │ ─  ─ │\n  ║ City ║    │  ─   │\n  ║ Night║     ╲═══╱\n  ║ ☆  ˚ ║   ╱│     │╲\n  ║  · ☆ ║  ╱ │     │ ╲\n  ╚══════╝    │     │\n   Window     Bell\n</pre>', delay: 800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「睡不著？」她沒回頭。語氣像在說公事。但她的石化右手垂在身側，微微發抖。',
             '"Can\'t sleep?" She doesn\'t turn. Her tone is businesslike. But her petrified right hand hangs at her side, trembling slightly.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「明天要是輸了——」她停了一下。「不。我不會輸。我贏過更難的仗。」',
             '"If we lose tomorrow —" She pauses. "No. I won\'t lose. I\'ve won harder battles."'),
      delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('但她的聲音在最後一個字的時候碎了一下。很輕，輕到如果不是站在她身邊，你根本聽不到。',
             'But her voice cracks on the last word. So faintly that if you weren\'t standing beside her, you\'d never hear it.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……我好累。」',
             '"...I\'m so tired."'),
      delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('三個字。銅鐘在議會裡對抗鏽刃半年，在石化的疼痛裡咬牙半輩子，在黑暗中獨自撐起一個腐朽的制度——所有的重量，壓縮成三個字。',
             'Three words. Half a year fighting Rust Blade in the Council, a lifetime gritting her teeth through petrification pain, holding up a rotting system alone in the dark — all that weight, compressed into three words.'),
      delay: 3500 },
  ], [
    { text: '伸出手臂', textEn: 'Extend your arm',
      action: () => {
        addNpcAffinity('bell', 10);
        autoExplore([
          { tag: '行動', tagColor: 'tag-move',
            text: L('你沒有說「辛苦了」或者「會沒事的」——這些話對銅鐘沒有用。你只是把手臂張開。',
                   'You don\'t say "you\'ve worked hard" or "it\'ll be okay" — those words don\'t work on Bronze Bell. You simply open your arms.'),
            delay: 2800 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('銅鐘看了你三秒。然後——她的頭靠上了你的肩膀。沒有擁抱。只是靠著。像一面牆終於承認自己需要另一面牆來支撐。',
                   'Bronze Bell looks at you for three seconds. Then — her head leans onto your shoulder. No embrace. Just leaning. Like a wall finally admitting it needs another wall for support.'),
            delay: 3500 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('她的頭髮蹭到你的脖子。有石化粉塵的冰涼，也有活人的體溫。你感覺她的呼吸在放慢——不是睡著，是終於不再逞強了。',
                   'Her hair brushes your neck. The chill of petri-dust, and also the warmth of a living person. You feel her breathing slow — not sleeping, just finally letting go.'),
            delay: 3200 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……只有今晚。」她小聲說。「明天我就要重新當銅鐘。」',
                   '"...Only tonight." She whispers. "Tomorrow I have to be Bronze Bell again."'),
            delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('你們就這樣站在走廊盡頭。窗外河城的燈火一盞盞熄滅。她沒有動。你也沒有動。有些東西不需要說出口——它已經在那裡了。',
                   'You stand like that at the corridor\'s end. River city\'s lights go out one by one beyond the window. She doesn\'t move. Neither do you. Some things don\'t need to be spoken — they\'re already there.'),
            delay: 3500 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('銅鐘好感 ↑↑↑ | HP +15 | 石化 -5 | 意志 +1', 'Bronze Bell bond ↑↑↑ | HP +15 | Petri -5 | WIL +1'),
            delay: 2000, effect: () => { changeHp(15); changePetri(-5); changeStat('wil', 1); } },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_look') },
        ], { label: L('走廊盡頭', 'End of corridor') });
      }},
    { text: '站在旁邊，不說話', textEn: 'Stand beside her, say nothing',
      action: () => {
        addNpcAffinity('bell', 5);
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense',
            text: L('你們並肩站在窗口。沒有對話，沒有接觸。只有兩個人共享同一段沉默。',
                   'You stand side by side at the window. No words, no touch. Just two people sharing the same silence.'),
            delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('過了很久，銅鐘深吸一口氣，像是把所有脆弱重新吞回去。「走吧。明天見。」',
                   'After a long while, Bronze Bell draws a deep breath, swallowing all vulnerability back down. "Let\'s go. See you tomorrow."'),
            delay: 2800 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('銅鐘好感 ↑ | HP +8', 'Bronze Bell bond ↑ | HP +8'),
            delay: 1500, effect: () => { changeHp(8); } },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_look') },
        ], { label: L('走廊盡頭', 'End of corridor') });
      }},
  ], { label: L('走廊盡頭', 'End of corridor') });
});

// ═══════════════════════════════════════
//  NG+ Romance: 銅鐘前世記憶 (Bell Past-Life Memory)
// ═══════════════════════════════════════
registerNode('r3_bell_ng_memory', () => {
  state.flags.r3BellNgMemory = true;
  addNpcAffinity('bell', 12);
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: npcPortrait.art('bell', { subtitle: L('議會代表', 'Council Rep') }) || '',
      text: '銅鐘正在批閱文件。你走進辦公室——然後說了一句不該知道的話。',
      textEn: 'Bronze Bell is reviewing documents. You walk into her office — then say something you shouldn\'t know.',
      delay: 2500 },
    { tag: '行動', tagColor: 'tag-move',
      text: '「你的右手——半夜最痛。尤其是右手無名指到小指之間的那條石化紋路。對吧？」',
      textEn: '"Your right hand — it hurts most at midnight. Especially the petrification line between your ring finger and pinky. Right?"',
      delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '銅鐘的筆停了。墨水在紙上洇開一個黑點。',
      textEn: 'Bell\'s pen stops. Ink bleeds into a black dot on the paper.',
      delay: 2200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '她抬頭。眼神像審訊犯人——但瞳孔在微微顫動。',
      textEn: 'She looks up. Eyes like an interrogator\'s — but her pupils are trembling.',
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「這件事。」她的聲音壓得很低。「我從沒告訴過任何人。甚至——」她頓了一下。「甚至清露都不知道具體位置。」',
      textEn: '"This." Her voice drops low. "I\'ve never told anyone. Not even—" She pauses. "Not even Dew knows the exact location."',
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '她站起來。繞過桌子。走到你面前——近到你能看到她鬢角邊隱藏的幾根灰白頭髮。',
      textEn: 'She stands. Circles the desk. Walks up to you — close enough to see the hidden grey at her temples.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你到底是什麼人？」每個字都像在用手術刀剖開你。「不要跟我說直覺。不要跟我說巧合。」',
      textEn: '"What exactly are you?" Every word is a scalpel. "Don\'t say intuition. Don\'t say coincidence."',
      delay: 3200 },
  ], [
    { text: '「上一世的走廊盡頭。你靠在我肩上，說了三個字——我好累。」', textEn: '"At the end of a corridor, in the last life. You leaned on my shoulder and said three words — I\'m so tired."',
      action: () => {
        addNpcAffinity('bell', 5);
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘的表情裂了。', textEn: 'Bell\'s composure cracks.', delay: 1500 },
          { tag: '感知', tagColor: 'tag-sense', text: '不是憤怒。不是懷疑。是一種你從未在這張臉上看到的東西——被理解的恐懼。', textEn: 'Not anger. Not suspicion. Something you\'ve never seen on this face — the fear of being understood.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「……我好累。」她重複了一遍。像是在確認這三個字是不是真的從自己嘴裡說出去過。', textEn: '"...I\'m so tired." She repeats it. As if confirming whether those words really left her lips.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '她退了半步。但沒有轉身。', textEn: 'She steps half a step back. But doesn\'t turn away.', delay: 2000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「我不知道什麼前世。我不信那些。」她的聲音在強撐。「但——你的眼神。你看我的方式——不像第一次見面的人。」', textEn: '"I don\'t know about past lives. I don\'t believe in those." Her voice struggles. "But — your eyes. The way you look at me — not like someone meeting me for the first time."', delay: 3500 },
          { tag: '感知', tagColor: 'tag-sense', text: '她低頭看了看自己石化的右手。然後——非常非常慢地——她把那隻手伸向你。', textEn: 'She looks down at her petrified right hand. Then — very, very slowly — she extends it toward you.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「你說——你按過這隻手？」聲音碎得幾乎聽不見。「那你知道——它有多疼嗎？」', textEn: '"You said — you\'ve massaged this hand before?" Voice shattered to near silence. "Then do you know — how much it hurts?"', delay: 3200, effect: function() { sfx.levelUp(); } },
        ], [{ text: '（接住她的手。像上一世那樣。）', textEn: '(Take her hand. Like you did in the last life.)', action: () => {
          changeHp(15);
          changePetri(-5);
          changeStat('wil', 1);
          notify(L('HP +15，石化度 -5%，意志 +1（跨世的信任）', 'HP +15, Petri -5%, WIL +1 (Trust across lifetimes)'));
          loadNode('r3_bell');
        }}]);
      }},
    { text: '「我知道的比你想像的更多。但我不會傷害你。」', textEn: '"I know more than you think. But I won\'t hurt you."',
      action: () => {
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘盯著你。十幾秒。像在用整個議會生涯積累的閱人經驗來審視你這句話的每一個字。', textEn: 'Bell stares at you. Ten, fifteen seconds. As if using every ounce of her political career\'s experience to dissect every word.', delay: 3500 },
          { tag: '對話', tagColor: 'tag-npc', text: '「……我暫時相信你。」她回到桌後坐下。但她的語氣不再像審訊犯人了。', textEn: '"...I\'ll believe you. For now." She sits back behind the desk. But her tone is no longer an interrogator\'s.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「但如果你騙我——」她看了一眼石化的右手。「我會讓你知道這隻手的疼痛是什麼感覺。」', textEn: '"But if you\'re lying—" She glances at her petrified hand. "I\'ll let you know what this pain feels like."', delay: 3000 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => {
          changeHp(10);
          notify(L('HP +10（銅鐘暫時信任了你）', 'HP +10 (Bell temporarily trusts you)'));
          loadNode('r3_bell');
        }}]);
      }},
  ], { label: L('前世的痛', 'Pain from a Past Life') });
});

// ═══════════════════════════════════════
//  NG+ Romance: 議會花園月下散步 (Bell's Garden Walk)
// ═══════════════════════════════════════
registerNode('r3_bell_ng_garden', () => {
  state.flags.r3BellNgGarden = true;
  addNpcAffinity('bell', 15);
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: `<pre class="ascii-art">
    ·˚·  議會花園  ·˚·

  🌿   ·  🌿  ·   🌿
    ╱╲      ╱╲      ╱╲
   ╱  ╲  · ╱  ╲ ·  ╱  ╲
  ────────────────────────
     ○ ○          ╱═══╲
     ╰╯          │ ─  ─│
    ╱╲            ╲═══╱
   ╱  ╲          ╱│  │╲
</pre>`, artEn: `<pre class="ascii-art">
    ·˚·  Council Garden  ·˚·

  🌿   ·  🌿  ·   🌿
    ╱╲      ╱╲      ╱╲
   ╱  ╲  · ╱  ╲ ·  ╱  ╲
  ────────────────────────
     ○ ○          ╱═══╲
     ╰╯          │ ─  ─│
    ╱╲            ╲═══╱
   ╱  ╲          ╱│  │╲
</pre>`,
      text: '銅鐘把你帶到議會花園。不是公事。不是任務。她只是說：「走走。」',
      textEn: 'Bronze Bell takes you to the Council garden. Not business. Not a mission. She just says: "Walk."',
      delay: 2500 },
    { tag: '環境', tagColor: 'tag-system',
      text: '花園在地底——但不知道用了什麼技術，穹頂上嵌著會發光的石英，模仿月光。光線落在石化的花叢上，像一層銀霜。',
      textEn: 'The garden is underground — but somehow the domed ceiling is set with luminescent quartz, mimicking moonlight. It falls on petrified flowers like silver frost.',
      delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '銅鐘走在你旁邊。沒有穿議會的正裝——只是一件簡單的灰色長衫。你第一次注意到，她其實比你矮半個頭。',
      textEn: 'Bell walks beside you. Not in Council formal wear — just a simple grey robe. For the first time you notice she\'s actually half a head shorter than you.',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你知道嗎——」她的聲音沒有平時的鋒利。「我在議會十一年。從來沒有人帶我來這裡散步。」',
      textEn: '"You know—" Her voice lacks its usual edge. "Eleven years on the Council. No one has ever walked with me here."',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「也從來沒有人——」她停下腳步，看著一朵石化的白花。「叫過我的名字。不是銅鐘。不是代表。不是女士。」',
      textEn: '"And no one has ever—" She stops, looking at a petrified white flower. "Called me by my name. Not Bronze Bell. Not Representative. Not Madam."',
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '她轉向你。石英月光把她的臉照得很柔——那些疲倦和皺紋都被銀色模糊了。她看起來年輕了十歲。',
      textEn: 'She turns to you. Quartz moonlight softens her face — fatigue and lines blurred by silver. She looks ten years younger.',
      delay: 3000 },
  ], [
    { text: '那我叫你什麼？', textEn: 'Then what should I call you?',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc', text: '銅鐘猶豫了。這可能是她人生中最長的一次猶豫。', textEn: 'Bell hesitates. Perhaps the longest hesitation of her life.', delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc', text: '「……銅韻。」她說了一個你從未聽過的名字。「我的本名。議會裡沒人知道。」', textEn: '"...Tong Yun." She says a name you\'ve never heard. "My real name. No one on the Council knows."', delay: 3200 },
          { tag: '感知', tagColor: 'tag-sense', text: '她把石化的右手放在那朵白花上。花瓣和她的手一樣灰白——但在石英月光下，都泛著微微的銀。', textEn: 'She places her petrified right hand on the white flower. Petals as grey-white as her hand — but under quartz moonlight, both glow faintly silver.', delay: 3200 },
          { tag: '對話', tagColor: 'tag-npc', text: '「銅韻——銅的聲音。我父親說，銅不如金銀貴重，但敲起來最響。」', textEn: '"Tong Yun — the sound of copper. My father said copper isn\'t as precious as gold or silver, but it rings the loudest."', delay: 3200 },
          { tag: '對話', tagColor: 'tag-npc', text: '她看著你。眼裡有一種你只在走廊盡頭見過一次的脆弱。但這次不是疲倦——是信任。', textEn: 'She looks at you. A vulnerability you\'ve only seen once, at the corridor\'s end. But this time it\'s not exhaustion — it\'s trust.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「上一世——我也告訴過你嗎？」她的聲音很輕。', textEn: '"In the last life — did I tell you too?" Her voice is light.', delay: 2500 },
          { tag: '行動', tagColor: 'tag-move', text: '你搖頭。「沒有。這是第一次。」', textEn: 'You shake your head. "No. This is the first time."', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘——不，銅韻——笑了。這是你見過的她最真的笑容。連石化的右手都好像不那麼痛了。', textEn: 'Bronze Bell — no, Tong Yun — smiles. The most genuine smile you\'ve ever seen from her. Even the petrified hand seems to hurt less.', delay: 3200, effect: function() { sfx.levelUp(); } },
        ], [{ text: '「銅韻。」（第一次叫她的名字。）', textEn: '"Tong Yun." (Calling her name for the first time.)', action: () => {
          changeHp(20);
          changePetri(-8);
          changeStat('wil', 1);
          notify(L('HP +20，石化度 -8%，意志 +1（銅的聲音）', 'HP +20, Petri -8%, WIL +1 (The sound of copper)'));
          loadNode('r3_bell');
        }}]);
      }},
    { text: '（和她一起看石化的花。不需要名字也可以。）', textEn: '(Watch the petrified flowers with her. No names needed.)',
      action: () => {
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '你們在石化的花叢間走了很久。她的石化右手偶爾碰到你的手背——可能是不小心，也可能不是。', textEn: 'You walk among the petrified flowers for a long time. Her petrified right hand occasionally brushes your hand — maybe by accident, maybe not.', delay: 3200 },
          { tag: '對話', tagColor: 'tag-npc', text: '「謝謝你陪我來。」她在花園門口停下。聲音又恢復了議會代表的穩重——但眼角多了一點以前沒有的柔軟。', textEn: '"Thank you for coming." She stops at the garden gate. Her voice regains its political steadiness — but there\'s a new softness at the corners of her eyes.', delay: 3200 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => {
          changeHp(15);
          changePetri(-5);
          notify(L('HP +15，石化度 -5%（花園月光）', 'HP +15, Petri -5% (Garden moonlight)'));
          loadNode('r3_bell');
        }}]);
      }},
  ], { label: L('花園月光', 'Garden Moonlight') });
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
    if (state.flags.r3YingInn && state.flags.r2YingPast && !state.flags.r3YingConflict) {
      c.push({ text: '螢……你的報告寫好了嗎？', textEn: 'Ying... is your report finished?', action: () => loadNode('r3_ying_conflict') });
    }
    if (state.flags.r3YingInn && !state.flags.r3YingRiver && (!state.flags.r2YingPast || state.flags.r3YingConflict)) {
      c.push({ text: '螢，要不要去河邊走走？', textEn: 'Ying, want to walk by the river?', action: () => loadNode('r3_ying_river') });
    }
    if (state.flags.r3YingRiver && state.flags.r2YingPast && !state.flags.r3YingConfession) {
      c.push({ text: '螢，有些話我想跟你說', textEn: 'Ying, there\'s something I want to say', action: () => loadNode('r3_ying_confession') });
    }
    if (state.flags.ngPlus && state.flags.r3YingRiver && state.flags.r2YingNgNotebook && !state.flags.r3YingNgKiss && getNpcAffinityNum('ying') >= 95) {
      c.push({ text: '螢……我想帶你回河邊。有些事，這一世我不想再錯過', textEn: 'Ying... I want to take you back to the river. There are things I don\'t want to miss this time', action: () => loadNode('r3_ying_ng_kiss') });
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
  addNpcAffinity('ying', 8);
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
  addNpcAffinity('ying', 15);

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

// ── Ying: NG+ Kiss — upgraded moonlight scene (2nd cycle, affinity >= 95) ──
registerNode('r3_ying_ng_kiss', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  state.flags.r3YingNgKiss = true;
  addNpcAffinity('ying', 10);

  autoExplore([
    { art: `<pre class="ascii-art cyan">
      · ˚ ·  ✦  · ˚ ·  ✦  · ˚ ·
    ˚     ·  ˚     ·  ˚     ·  ˚
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ╱╲          ○ ○         · ✦ ·
     ╱  ╲         ╰▽╯         ˚   ˚
    ╱ ╱╲ ╲        ╱╲
   ╱ ╱  ╲ ╲      ╱  ╲    前 世 的 河
  ╱ ╱    ╲ ╲    ╱    ╲
</pre>`, artEn: `<pre class="ascii-art cyan">
      · ˚ ·  ✦  · ˚ ·  ✦  · ˚ ·
    ˚     ·  ˚     ·  ˚     ·  ˚
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ╱╲          ○ ○         · ✦ ·
     ╱  ╲         ╰▽╯         ˚   ˚
    ╱ ╱╲ ╲        ╱╲
   ╱ ╱  ╲ ╲      ╱  ╲    River of Past Lives
  ╱ ╱    ╲ ╲    ╱    ╲
</pre>`, delay: 800 },
    { tag: '環境', tagColor: 'tag-system', text: '你帶著螢回到那個碼頭邊。同一片河水。同一座石岸。同一輪倒映在水面的微光——但一切都不一樣了。', textEn: 'You lead Ying back to the same dock. Same river. Same stone shore. Same faint light reflected on the water — but everything is different now.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '因為你記得上一世。你記得' + yP + '靠在你肩上的重量。你記得十指相扣的溫度。你記得那句沒來得及說出口的話。', textEn: 'Because you remember the last life. You remember the weight of ' + yPo + ' head on your shoulder. The warmth of intertwined fingers. The words you never got to say.', delay: 3500 },
    { tag: '情報', tagColor: 'tag-info', text: '螢在你身邊坐下，打開手冊——然後愣住了。', textEn: 'Ying sits beside you, opens the notebook — and freezes.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「最後一頁。」' + yP + '喃喃。「那兩個字——『全文完』。我到現在還是不知道是誰寫的。」', textEn: '"The last page." ' + yPC + ' murmurs. "Those two words — \'The End.\' I still don\'t know who wrote them."', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你看著' + yP + '側臉上被河光照亮的輪廓。和上一世一模一樣——又完全不同。因為這一次，你知道自己不能再錯過了。', textEn: 'You watch the river light trace ' + yPo + ' profile. Exactly the same as the last life — and completely different. Because this time, you know you can\'t miss it again.', delay: 3500 },
    { tag: '行動', tagColor: 'tag-move', text: '「螢。」你叫' + yP + '的名字。不是記錄員，不是調查員。只是螢。', textEn: '"Ying." You call ' + yPo + ' name. Not the chronicler, not the investigator. Just Ying.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: yP + '轉過頭。琥珀色的眼睛映著碎光——和上一世的河邊一模一樣。但這次你看清了那雙眼睛裡的東西。', textEn: yPC + ' turns. Amber eyes reflecting shattered light — identical to the riverside in the past life. But this time you see clearly what\'s in those eyes.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '不是好奇。不是信任。不是依賴。', textEn: 'Not curiosity. Not trust. Not dependence.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '是愛。', textEn: 'It\'s love.', delay: 2000 },
  ], [
    { text: '「是我寫的。上一世的我。」', textEn: '"I wrote it. The me from the past life."', action: () => {
      autoExplore([
        { tag: '情報', tagColor: 'tag-info', text: '螢的呼吸停了一拍。' + yP + '沒有問「什麼意思」。' + yP + '只是看著你——像是一直在等這句話。', textEn: 'Ying\'s breath stops for a beat. ' + yPC + ' doesn\'t ask "what do you mean." ' + yPC + ' just looks at you — as if waiting for those words all along.', delay: 3200 },
        { tag: '情報', tagColor: 'tag-info', text: '「……我知道。」' + yP + '的聲音幾乎聽不見。「從你叫出我名字的那一刻——我就知道了。」', textEn: '"...I know." ' + yPo + ' voice is barely audible. "From the moment you called my name — I knew."', delay: 3200 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢的手冊從膝蓋上滑落。' + yP + '沒有去撿。', textEn: 'Ying\'s notebook slides off ' + yPo + ' knees. ' + yPC + ' doesn\'t pick it up.', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '伸出手——指尖觸上你的臉頰。帶著墨漬的指腹輕輕描過石化的灰色紋路。', textEn: yPC + ' reaches out — fingertips touch your cheek. Ink-stained fingers trace the grey lines of petrification.', delay: 3000 },
        { tag: '情報', tagColor: 'tag-info', text: '「上一世你握著我的手，什麼都沒說。」螢低聲說。「這一世——你能不能別再忍了？」', textEn: '"In the last life, you held my hand and said nothing." Ying whispers. "This time — can you stop holding back?"', delay: 3500 },
        { tag: '感知', tagColor: 'tag-sense', text: '你把' + yP + '的手從你臉上拉下來——十指交握。和上一世一樣。一隻帶著墨漬，一隻帶著石紋。', textEn: 'You pull ' + yPo + ' hand from your cheek — fingers interlocking. Just like the past life. One stained with ink, one marked with stone.', delay: 3200 },
        { tag: '行動', tagColor: 'tag-move', text: '然後你做了上一世沒做的事。', textEn: 'Then you do what you didn\'t do in the last life.', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: '你吻了' + yP + '。', textEn: 'You kiss ' + (isMale ? 'her' : 'him') + '.', delay: 2500 },
        { tag: '環境', tagColor: 'tag-system', text: '河水依然在流。碎光依然搖曳。世界沒有改變——但你們之間的一切都變了。', textEn: 'The river still flows. Light still sways. The world hasn\'t changed — but everything between you has.', delay: 3200 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢的嘴唇嚐起來像墨水和草藥——帶著一點河水的鹹。' + yP + '的手收緊了。比上一世用力得多。', textEn: 'Ying\'s lips taste of ink and herbs — with a hint of river salt. ' + yPC + ' squeezes your hand. Much harder than in the last life.', delay: 3500 },
        { tag: '感知', tagColor: 'tag-sense', text: '像是怕你再一次消失。', textEn: 'As if afraid you\'ll disappear again.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '分開的時候，螢的眼眶是紅的。但' + yP + '在笑。', textEn: 'When you part, Ying\'s eyes are red. But ' + yPC + '\'s smiling.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「我要改最後一頁。」' + yP + '把手冊從地上撿起來。', textEn: '"I need to change the last page." ' + yPC + ' picks the notebook up from the ground.', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', text: '「『全文完』太早了。」螢一邊擦眼淚一邊寫。筆跡歪歪扭扭，但每一個字都很用力。', textEn: '"\'The End\' was too soon." Ying writes while wiping away tears. The handwriting is shaky, but every word is deliberate.', delay: 3200 },
        { tag: '感知', tagColor: 'tag-sense', text: '你瞥見新的最後一行——', textEn: 'You catch the new last line —', delay: 2000 },
        { tag: '感知', tagColor: 'tag-sense', html: '<b>「待續。」</b>', htmlEn: '<b>"To be continued."</b>', delay: 2500, effect: function() { sfx.levelUp(); } },
      ], [
        { text: '（這一次，故事不會結束。）', textEn: '(This time, the story won\'t end.)', action: () => {
          if (typeof setRomance === 'function') setRomance('ying');
          changeHp(35);
          changePetri(-15);
          changeStat('wil', 2);
          notify(L('HP +35，石化度 -15%，意志 +2（待續）', 'HP +35, Petri -15%, WIL +2 (To be continued)'));
          loadNode('r3_look');
        }},
      ], { label: L('待續', 'To Be Continued') });
    }},
    { text: '（不說話。只是把額頭靠上' + yP + '的額頭。）', textEn: '(Say nothing. Just rest your forehead against ' + (isMale ? 'hers' : 'his') + '.)', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '你們的額頭貼在一起。呼吸交錯。近到能看見彼此眼睛裡自己的倒影。', textEn: 'Your foreheads touch. Breaths mingling. Close enough to see your own reflection in each other\'s eyes.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢閉上眼睛。一滴淚從' + yP + '的睫毛上滑落——掉在你石化的手背上。你感覺到了。這次你真的感覺到了。', textEn: 'Ying closes ' + yPo + ' eyes. A tear slips from ' + yPo + ' lashes — falls on your petrified hand. You feel it. This time you truly feel it.', delay: 3500 },
        { tag: '感知', tagColor: 'tag-sense', text: '「不用說。」螢的聲音像河面上的霧。「我都知道。」', textEn: '"You don\'t have to say it." Ying\'s voice is like mist on the river. "I know."', delay: 2800 },
        { tag: '行動', tagColor: 'tag-move', text: '你微微仰頭——吻落在' + yP + '的額頭上。輕得像石化紋路蔓延的速度。', textEn: 'You tilt your head slightly — a kiss lands on ' + yPo + ' forehead. Light as the slow spread of petrification.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢的手攥住了你的衣領。然後——', textEn: 'Ying\'s hand grips your collar. Then —', delay: 2200 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '踮起腳尖，吻住了你。', textEn: yPC + ' rises on tiptoes and kisses you.', delay: 2500 },
        { tag: '環境', tagColor: 'tag-system', text: '手冊掉在地上。河水聲變得很遠。世界只剩下嘴唇相觸的溫度和心跳交疊的節奏。', textEn: 'The notebook falls. The river fades. The world shrinks to the warmth of lips touching and the rhythm of overlapping heartbeats.', delay: 3500 },
        { tag: '感知', tagColor: 'tag-sense', text: '這一吻很長。跨越了兩世。', textEn: 'The kiss is long. It spans two lifetimes.', delay: 2500, effect: function() { sfx.levelUp(); } },
      ], [
        { text: '（兩世的等待，值得。）', textEn: '(Two lifetimes of waiting. Worth it.)', action: () => {
          if (typeof setRomance === 'function') setRomance('ying');
          changeHp(35);
          changePetri(-15);
          changeStat('wil', 2);
          notify(L('HP +35，石化度 -15%，意志 +2（跨越兩世的吻）', 'HP +35, Petri -15%, WIL +2 (A kiss across two lifetimes)'));
          loadNode('r3_look');
        }},
      ], { label: L('跨越兩世', 'Across Two Lifetimes') });
    }},
  ], { label: L('前世的河', 'River of Past Lives') });
});

// ── Ying: Conflict — her standing vs her report ──
registerNode('r3_ying_conflict', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';

  state.flags.r3YingConflict = true;
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '調查員' }) || npcPortrait.art('ying', { subtitle: '記錄員' }), artEn: npcPortrait.art('ying', { subtitle: 'Investigator' }) || npcPortrait.art('ying', { subtitle: 'Chronicler' }), delay: 800 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢沒有馬上回答。' + yP + '把手冊翻到最後幾頁——你看見上面寫滿了密密麻麻的字，又劃掉，又重寫。', textEn: 'Ying doesn\'t answer right away. ' + yPC + ' flips to the last few pages — you see dense writing, crossed out, rewritten.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「寫了……又撕了……又重寫了。」' + yP + '的聲音很疲憊。「三版了。每一版都不對。」', textEn: '"Written... torn up... rewritten." ' + yPC + '\'s voice is exhausted. "Third draft. None of them are right."', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你看見' + yP + '的眼底有深深的黑眼圈。螢沒有告訴你——' + yP + '已經好幾天沒睡了。', textEn: 'You notice deep circles under ' + yPo + ' eyes. Ying didn\'t tell you — ' + yP + ' hasn\'t slept in days.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「如果我寫真話——議會裡有人會把我的調查員資格撤掉。我再也不能做記錄員了。」', textEn: '"If I write the truth — someone on the Council will revoke my investigator status. I\'ll never be a chronicler again."', delay: 3500 },
    { tag: '情報', tagColor: 'tag-info', text: '「但如果我寫假報告——幾千個人會被封死在下面。老周、鐵霜、清露——所有人。」', textEn: '"But if I write a false report — thousands will be sealed underground. Old Zhou, Iron Frost, Dew — everyone."', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '抬頭看你。琥珀色的眼睛裡滿是掙扎——你看到了那個在迴廊裡對你臉紅的人，也看到了那個被任務壓垮的調查員。', textEn: yPC + ' looks up. Amber eyes full of turmoil — you see the person who blushed at you in the corridor, and the investigator crushed under duty.', delay: 3500 },
    { tag: '情報', tagColor: 'tag-info', text: '「你覺得……我應該怎麼做？」', textEn: '"What do you think... I should do?"', delay: 2200 },
  ], [
    { text: '寫真話。不管付出什麼代價', textEn: 'Write the truth. No matter the cost', action: () => {
      state.flags.r3YingTruth = true;
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '螢看著你，沉默了很長時間。然後——' + yP + '笑了。那種笑你只在石脈迴廊裡見過一次——如釋重負的、破碎的笑。', textEn: 'Ying stares at you for a long silence. Then — ' + yP + ' smiles. The kind of smile you saw only once, in the Vein Corridor — broken, relieved.', delay: 3200 },
        { tag: '情報', tagColor: 'tag-info', text: '「……我就知道你會這麼說。」' + yP + '低下頭，在手冊上重新寫下了第一行字。', textEn: '"...I knew you\'d say that." ' + yPC + ' bows ' + yPo + ' head and writes the first line of a new page.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '你看到' + yP + '寫的第一句話：「致議會——以下是下層的真實狀況。」筆跡不再顫抖。', textEn: 'You see the first sentence: "To the Council — the following is the true condition of the lower levels." The handwriting no longer shakes.', delay: 3500 },
      ], [
        { text: '繼續', textEn: 'Continue', action: () => {
          changeStat('wil', 1);
          notify(L('意志 +1（引導螢走向真相）', 'WIL +1 (Guiding Ying toward truth)'));
          loadNode('r3_look');
        }},
      ], { label: L('真話的代價', 'The cost of truth') });
    }},
    { text: '你自己決定。不管你選什麼，我都在', textEn: 'It\'s your choice. Whatever you decide, I\'m here', action: () => {
      state.flags.r3YingTruth = true;
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: yP + '的嘴唇動了一下。你看見' + yP + '的眼眶在泛紅——但這次' + yP + '沒有別過頭去。', textEn: yPC + '\'s lips tremble. You see ' + yPo + ' eyes reddening — but this time ' + yP + ' doesn\'t look away.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '「……你這個人。」螢用手背擦了擦眼角，聲音帶著鼻音。「說這種話的時候，可不可以不要用那種眼神看我。」', textEn: '"...You." Ying rubs ' + yPo + ' eyes with the back of ' + yPo + ' hand, voice nasally. "When you say things like that, could you not look at me with those eyes."', delay: 3500 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '深吸一口氣，翻開手冊。「好吧。那我就做一件讓自己驕傲的事。」', textEn: yPC + ' takes a deep breath and opens the notebook. "Fine. Then I\'ll do something I can be proud of."', delay: 3000 },
      ], [
        { text: '繼續', textEn: 'Continue', action: () => {
          changeHp(10);
          changePetri(-5);
          notify(L('HP +10，石化度 -5%（溫柔的堅定）', 'HP +10, Petri -5% (Gentle resolve)'));
          loadNode('r3_look');
        }},
      ], { label: L('溫柔的堅定', 'Gentle resolve') });
    }},
  ], { label: L('螢的立場', 'Ying\'s standing') });
});

// ── Ying: Confession — the full truth at last ──
registerNode('r3_ying_confession', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';

  state.flags.r3YingConfession = true;
  addNpcAffinity('ying', 10);
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }), artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }), delay: 800 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢停下了腳步。' + yP + '把手冊抱在胸前，背對著你。河風吹動' + yP + '的頭髮。', textEn: 'Ying stops walking. ' + yPC + ' holds the notebook to ' + yPo + ' chest, back to you. River wind lifts ' + yPo + ' hair.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '「有一件事……我一直沒告訴你。」' + yP + '的聲音很小。你聽得出來——' + yP + '在害怕。', textEn: '"There\'s something... I never told you." ' + yPC + '\'s voice is small. You can tell — ' + yP + ' is afraid.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「在石脈迴廊——我遇見你的那天。那不是偶然。」', textEn: '"In the Vein Corridor — the day I met you. It wasn\'t coincidence."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「我的任務書上寫著：觀察從祭獻坑上來的倖存者，評估其威脅等級。如果必要——」' + yP + '的聲音顫了一下。「阻止他們到達河城。」', textEn: '"My orders read: observe survivors ascending from the Sacrificial Pit. Assess threat level. If necessary —" ' + yPC + '\'s voice wavers. "Prevent them from reaching River Port."', delay: 4000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你的血冷了半截。「阻止」——那是什麼意思？', textEn: 'Your blood runs half-cold. "Prevent" — what does that mean?', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '螢轉過身來。' + yP + '的眼眶是紅的，但眼神很直接。', textEn: 'Ying turns around. ' + yPC + '\'s eyes are red, but ' + yPo + ' gaze is direct.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「我原本——應該封鎖你們的通道。把你們困在下面。一個人都不放上來。」', textEn: '"I was supposed to — seal your passage. Trap you below. Not let a single person up."', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '沉默。河水在你們之間流過。你聽見自己的心跳。', textEn: 'Silence. River water flows between you. You hear your own heartbeat.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「但我沒有。因為——」' + yP + '的聲音碎了。「因為我在石脈迴廊裡遇見了你。你分了食物給我。你讓我睡在你旁邊。你把我當人看。」', textEn: '"But I didn\'t. Because —" ' + yPC + '\'s voice breaks. "Because I met you in the Corridor. You shared food with me. You let me sleep beside you. You treated me like a person."', delay: 4000 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '往前走了一步。月光映在' + yP + '濕潤的臉上。', textEn: yPC + ' takes a step forward. Moonlight catches ' + yPo + ' wet face.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「我是來殺你們的人。而你救了我的命。」' + yP + '的聲音微弱得像是在對自己說。「你有權利恨我。」', textEn: '"I came to kill your people. And you saved my life." ' + yPC + '\'s voice is barely audible, as if speaking to ' + yPo + 'self. "You have every right to hate me."', delay: 3500 },
  ], [
    { text: '我不恨你', textEn: 'I don\'t hate you', action: () => loadNode('r3_ying_resolve') },
    { text: '（沉默。然後伸出手。）', textEn: '(Silence. Then extend your hand.)', action: () => loadNode('r3_ying_resolve') },
  ], { label: L('螢的告白', 'Ying\'s confession') });
});

// ── Ying: Resolve — her final choice affects ending score ──
registerNode('r3_ying_resolve', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';

  state.flags.r3YingResolve = true;
  autoExplore([
    { tag: '感知', tagColor: 'tag-sense', text: '螢看著你。月光下，' + yP + '的表情從恐懼慢慢變成了一種你沒見過的柔軟。', textEn: 'Ying looks at you. Under the moonlight, ' + yPo + ' expression shifts from fear to a softness you\'ve never seen.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '然後' + yP + '笑了——不是害羞的笑、不是掩飾的笑。是哭過之後，終於放下了什麼的笑。', textEn: 'Then ' + yP + ' smiles — not shy, not deflecting. The smile of someone who, after crying, has finally let something go.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '走上前，把額頭靠在你的肩膀上。你能感受到' + yP + '的呼吸，溫熱的、微微顫抖的。', textEn: yPC + ' steps forward and rests ' + yPo + ' forehead against your shoulder. You feel ' + yPo + ' breath — warm, faintly trembling.', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: '「……謝謝你。」' + yP + '的聲音悶在你的衣服裡。「不是因為你原諒我。是因為——你讓我有勇氣做正確的事。」', textEn: '"...Thank you." ' + yPC + '\'s voice is muffled against your clothes. "Not because you forgave me. Because — you gave me the courage to do the right thing."', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你伸手環住' + yP + '的肩膀。' + yP + '的身體僵了一瞬——然後，慢慢地，放鬆了。', textEn: 'You put your arm around ' + yPo + ' shoulders. ' + yPC + '\'s body tenses for a heartbeat — then, slowly, relaxes.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你們就這樣站著。河風吹過，月亮很亮。不知道過了多久。', textEn: 'You stand like that. Wind off the river, the moon bright. You lose track of time.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '螢最終退後一步，用袖子擦了擦臉。' + yP + '的眼睛紅紅的，但裡面有了光。', textEn: 'Ying finally steps back, rubbing ' + yPo + ' face with a sleeve. ' + yPC + '\'s eyes are red, but there\'s light in them.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', html: L('「明天——我會把<b>真實的報告</b>交給銅鐘。不是議會要我寫的那份。是我親眼看到的一切。」', '"Tomorrow — I\'ll deliver the <b>real report</b> to Bronze Bell. Not the one the Council wanted. Everything I\'ve seen with my own eyes."'), delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: yP + '舉起手冊，在月光下讓你看封面。你看到' + yP + '在封面上新添了一行字——', textEn: yPC + ' holds up the notebook in the moonlight for you to see the cover. You notice a new line added —', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', html: L('<b>「為了那些在黑暗中堅持活著的人。」</b>', '<b>"For those who persevere in the dark."</b>'), delay: 2500 },
  ], [
    { text: '（你什麼也沒說。但你覺得——一切都值得了。）', textEn: '(You say nothing. But you feel — it was all worth it.)', action: () => {
      sfx.levelUp();
      changeStat('wil', 2);
      changeHp(20);
      changePetri(-10);
      // This is a major ending score boost — Ying's real report is powerful evidence
      state.flags.r3YingRealReport = true;
      addNpcAffinity('ying', 10);
      notify(L('意志 +2，HP +20，石化度 -10%（螢的決心）', 'WIL +2, HP +20, Petri -10% (Ying\'s resolve)'));
      loadNode('r3_look');
    }},
  ], { label: L('螢的決心', 'Ying\'s resolve') });
});

// ═══════════════════════════════════════════════════
//  NPC — 老周 (Old Zhou) Reunion
// ═══════════════════════════════════════════════════

registerNode('r3_zhou', () => {
  state.flags.r3ZhouMet = true;
  addNpcAffinity('zhou', 8);
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
    // Sidequest: Zhou tells the full truth (requires R2 evidence)
    if (state.flags.r2ZhouEvidence && !state.flags.r3ZhouTruth) {
      c.push({ text: '老周，我找到了你刻的那些字……', textEn: 'Zhou, I found those carvings you made...', action: () => loadNode('r3_zhou_truth') });
    }
    // Sidequest: Zhou's justice (requires truth told)
    if (state.flags.r3ZhouTruth && !state.flags.r3ZhouJustice) {
      c.push({ text: '老周，你想好了嗎？', textEn: 'Zhou, have you decided?', action: () => loadNode('r3_zhou_justice') });
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r3_market') });
    return c;
  })(), { label: L('老周', 'Old Zhou') });
});

// ── NPC Sidequest: Old Zhou's Truth (R3) ──
registerNode('r3_zhou_truth', () => {
  state.flags.r3ZhouTruth = true;
  addNpcAffinity('zhou', 10);
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('你把在採石場岩壁上發現的深層刻痕告訴老周——監工 K 的真名、議會的命令、軍事用途。',
             'You tell Old Zhou about the deeper carvings you found on the quarry wall — Overseer K\'s real name, the Council\'s orders, the military purpose.'),
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('老周聽完，整個人像被抽走了力氣。他慢慢靠回牆上，用石化的手捂住了臉。',
             'Old Zhou listens, then seems to deflate. He slowly leans against the wall, covering his face with his petrified hand.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……你都看到了。」他的聲音像是從石頭裡擠出來的。',
             '"...You saw it all." His voice sounds like it\'s being squeezed from stone.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我刻那些字的時候，以為自己快死了。想著就算死了，也不能讓真相爛在地底。」',
             '"When I carved those words, I thought I was dying. Figured even if I died, the truth shouldn\'t rot underground."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「結果我沒死。我到了河城。然後我才發現——」他抬起頭，完好的左眼裡燃燒著某種東西。',
             '"Turns out I didn\'t die. I made it to River City. And then I found out —" He looks up, something burning in his good eye.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      html: L('「監工 K——<b>孔德業</b>——現在是河城議會的顧問。坐在議會廳裡，穿著乾淨的衣服，說著漂亮的話。」',
             '"Overseer K — <b>Kong De-ye</b> — is now an advisor on the River City Council. Sitting in the Council chamber, wearing clean clothes, speaking pretty words."'),
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('老周的拳頭捏得咯咯作響。石化的右手上裂開了幾道細紋。',
             'Old Zhou\'s fists creak. Hairline cracks spiderweb across his petrified right hand.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「十六條人命。我的腿。整個地底幾千人的石化。全是因為他。」',
             '"Sixteen lives. My legs. Thousands petrified underground. All because of him."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「而他在上面活得好好的。」老周閉上眼，深深吸了一口氣。',
             '"And he\'s doing just fine up here." Old Zhou closes his eyes, draws a deep breath.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我想公開這件事。在議會上。讓所有人知道瘟疫的真相。」',
             '"I want to go public. At the Council. Let everyone know the truth about the plague."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('他看著你，那隻深棕色的眼睛異常清醒。「但我需要你幫我。一個瘸腿老礦工的話，沒人會信。」',
             'He looks at you, that deep brown eye unusually lucid. "But I need your help. No one will believe a crippled old miner alone."'),
      delay: 3200 },
  ], [
    { text: '我幫你', textEn: 'I\'ll help you',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('老周看了你很久。然後他伸出那隻完好的手——不是握手，是用力攥住了你的前臂。',
                   'Old Zhou stares at you a long while. Then he extends his good hand — not a handshake, but a firm grip on your forearm.'),
            delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……我老周這輩子不欠人情。但這個情，我欠了。」',
                   '"...Old Zhou doesn\'t owe favors in this life. But this one — I owe."'),
            delay: 2800 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('老周好感 ↑↑↑ | 經驗 +10', 'Old Zhou bond ↑↑↑ | XP +10'),
            delay: 1500, effect: () => gainXp(10) },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_zhou') },
        ], { label: L('老周的請求', 'Zhou\'s request') });
      }},
    { text: '你確定嗎？議會的人可能不好惹', textEn: 'Are you sure? The Council won\'t take it well',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「不好惹？」老周冷笑了一聲。「我半個身子都石化了，還有什麼好怕的？」',
                   '"Won\'t take it well?" Old Zhou laughs coldly. "Half my body is stone. What\'s left to be afraid of?"'),
            delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「那十六個人沒有怕的機會。我至少還能站著說話。」',
                   '"Those sixteen men didn\'t get a chance to be afraid. At least I can still stand and speak."'),
            delay: 2800 },
        ], [
          { text: '好，我幫你', textEn: 'Alright, I\'ll help', action: () => {
            gainXp(10);
            loadNode('r3_zhou');
          }},
        ], { label: L('老周的決心', 'Zhou\'s resolve') });
      }},
  ], { label: L('老周的真相', 'Zhou\'s truth') });
});

// ── NPC Sidequest: Old Zhou's Justice (R3) ──
registerNode('r3_zhou_justice', () => {
  state.flags.r3ZhouJustice = true;
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('老周坐在工具台旁，手裡攥著一張寫滿字的紙。看到你來，他站了起來——靠著拐杖，但脊背挺得很直。',
             'Old Zhou sits by the workbench, clutching a paper covered in writing. When he sees you, he stands — leaning on his crutch, but spine ramrod straight.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我寫好了。」他把紙遞給你。「第三班十六個人的名字。礦難的經過。監工 K 的真名和議會的命令。全部。」',
             '"I\'ve written it all." He hands you the paper. "The names of all sixteen men from Crew 3. What happened. Overseer K\'s real name and the Council\'s orders. Everything."'),
      delay: 3500 },
    { art: `<pre class="ascii-art">
  ╔═════════════════════════════════╗
  ║     老周的證詞書                ║
  ╠═════════════════════════════════╣
  ║                                 ║
  ║  第三班 十六人名單：            ║
  ║  張大山、李鐵柱、王石根、      ║
  ║  趙礦生、錢得福、孫大力、      ║
  ║  劉黑臉、陳老實、楊二蛋、      ║
  ║  馬驢子、朱小胖、黃石頭、      ║
  ║  林木根、吳長命、鄭方圓、      ║
  ║  何來福                         ║
  ║                                 ║
  ║  ——以上十六人死於東翼B-7       ║
  ║  ——監工孔德業下令炸開封印     ║
  ║  ——受河城議會軍事部門指派     ║
  ║                                 ║
  ║  證人：第三班·周  [手印]        ║
  ╚═════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═════════════════════════════════╗
  ║     ZHOU'S WRITTEN TESTIMONY   ║
  ╠═════════════════════════════════╣
  ║                                 ║
  ║  Crew 3, 16 names:             ║
  ║  Zhang Dashan, Li Tiezhu,      ║
  ║  Wang Shigen, Zhao Kuangsheng, ║
  ║  Qian Defu, Sun Dali,          ║
  ║  Liu Heilian, Chen Laoshi,     ║
  ║  Yang Erdan, Ma Lvzi,          ║
  ║  Zhu Xiaopang, Huang Shitou,   ║
  ║  Lin Mugen, Wu Changming,      ║
  ║  Zheng Fangyuan, He Laifu      ║
  ║                                 ║
  ║  —Died at East Wing B-7        ║
  ║  —Overseer Kong De-ye ordered  ║
  ║   the seal destroyed           ║
  ║  —Under River City Council     ║
  ║   military division orders     ║
  ║                                 ║
  ║  Witness: Crew 3 · Zhou [mark] ║
  ╚═════════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('你看到紙的最下方按了一個手印——半邊是墨跡，半邊是石化的灰色。老周用石化的手指蘸了墨水，留下了他的印記。',
             'At the bottom of the page — a handprint, half ink, half grey stone. Old Zhou dipped his petrified fingers in ink to leave his mark.'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我不知道議會會不會聽。但至少——十六個名字不再是沒人知道的秘密。」',
             '"I don\'t know if the Council will listen. But at least — sixteen names will no longer be a secret no one knows."'),
      delay: 3000 },
  ], [
    { text: '我會帶到議會去', textEn: 'I\'ll bring this to the Council',
      action: () => {
        state.flags.r3ZhouTestimony = true;
        addNpcAffinity('zhou', 15);
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('老周點了點頭。然後他做了一件讓你意外的事——他用力站了起來，甩開了拐杖。',
                   'Old Zhou nods. Then he does something unexpected — he forces himself up, casting aside his crutch.'),
            delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「不。我自己去。」石化的雙腿在發抖，但他站住了。「十六個人的名字，不該由別人代念。」',
                   '"No. I\'ll go myself." His petrified legs shake, but he stands. "Sixteen names shouldn\'t be read by a stranger."'),
            delay: 3500 },
          { tag: '感知', tagColor: 'tag-sense',
            text: L('他朝你伸出完好的那隻手。掌心粗糙溫熱。「一起去。」',
                   'He extends his good hand toward you. The palm is rough and warm. "Together."'),
            delay: 2800 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('老周好感 MAX | 經驗 +15 | 力量 +1', 'Old Zhou bond MAX | XP +15 | STR +1'),
            delay: 2000, effect: () => {
              gainXp(15);
              changeStat('str', 1);
            }},
          { tag: '系統', tagColor: 'tag-system',
            text: L('（老周的證詞將影響議會投票結果）', '(Zhou\'s testimony will affect the Council vote)'),
            delay: 2000 },
        ], [
          { text: '一起去', textEn: 'Together', action: () => loadNode('r3_market') },
        ], { label: L('老周的正義', 'Zhou\'s justice') });
      }},
    { text: '太危險了，讓我替你說', textEn: 'Too dangerous — let me speak for you',
      action: () => {
        state.flags.r3ZhouTestimony = true;
        addNpcAffinity('zhou', 12);
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('老周沉默了。他低頭看了看自己石化的腿，然後苦笑了。',
                   'Old Zhou goes silent. He looks down at his petrified legs, then laughs bitterly.'),
            delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……也是。我連走到議會廳都勉強。」他把紙折好塞進你手裡。「替我念那十六個名字。每一個。」',
                   '"...True. I can barely make it to the Council chamber." He folds the paper and presses it into your hand. "Read those sixteen names for me. Every one."'),
            delay: 3500 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('老周好感 ↑↑ | 經驗 +12', 'Old Zhou bond ↑↑ | XP +12'),
            delay: 1500, effect: () => gainXp(12) },
          { tag: '系統', tagColor: 'tag-system',
            text: L('（老周的證詞將影響議會投票結果）', '(Zhou\'s testimony will affect the Council vote)'),
            delay: 2000 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_market') },
        ], { label: L('老周的正義', 'Zhou\'s justice') });
      }},
  ], { label: L('老周的正義', 'Zhou\'s justice') });
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
    addNpcAffinity('crane', 5);
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

    // Sidequest: Crane's secret warehouse (requires debt saved in R2)
    if (state.flags.r2CraneDebtSaved && !state.flags.r3CraneMerchant) {
      c.push({ text: '灰鶴，你在河城有秘密倉庫？', textEn: 'Crane, do you have a stash in River City?', action: () => loadNode('r3_crane_merchant') });
    }
    // Sidequest: Crane's real name (requires warehouse visited)
    if (state.flags.r3CraneMerchant && !state.flags.r3CranePast) {
      c.push({ text: '那個等你回去的人……', textEn: 'The person waiting for you...', action: () => loadNode('r3_crane_past') });
    }
    // Sidequest: Crane's deal (requires past revealed + Bell alliance)
    if (state.flags.r3CranePast && state.flags.r3BellAlliance && !state.flags.r3CraneDeal) {
      c.push({ text: '灰鶴，你考慮好了嗎？', textEn: 'Crane, have you decided?', action: () => loadNode('r3_crane_deal') });
    }
    // Romance: Rooftop scene (requires past + high affinity)
    if (state.flags.r3CranePast && !state.flags.r3CraneRooftop && typeof getNpcAffinityNum === 'function' && getNpcAffinityNum('crane') >= 70) {
      c.push({ text: '灰鶴說想帶你去一個地方……', textEn: 'Crane says she wants to show you a place...', action: () => loadNode('r3_crane_rooftop') });
    }
    // Romance: Confession (requires rooftop + very high affinity)
    if (state.flags.r3CraneRooftop && !state.flags.r3CraneConfession && typeof getNpcAffinityNum === 'function' && getNpcAffinityNum('crane') >= 85) {
      c.push({ text: '灰鶴在碼頭等你', textEn: 'Crane is waiting at the dock', action: () => loadNode('r3_crane_confession') });
    }
    // NG+ Romance: Call her real name (requires past + NG+ + déjà vu)
    if (state.flags.ngPlus && state.flags.r3CranePast && state.flags.r1CraneNgDeja && !state.flags.r3CraneNgName && typeof getNpcAffinityNum === 'function' && getNpcAffinityNum('crane') >= 80) {
      c.push({ text: '「秋蘅。」——你叫出了她從未告訴過你的名字', textEn: '"Qiu Heng." — You call the name she never told you', action: () => loadNode('r3_crane_ng_name') });
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r3_market') });
    return c;
  })(), { label: L('灰鶴', 'Grey Crane') });
});

// ═══════════════════════════════════════════════════
//  NPC Sidequest — 灰鶴 (Grey Crane) R3 arc
// ═══════════════════════════════════════════════════

// --- r3_crane_merchant: Secret warehouse in River City ---
registerNode('r3_crane_merchant', () => {
  state.flags.r3CraneMerchant = true;
  addNpcAffinity('crane', 8);
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('灰鶴聽到你的問題，先是一愣，然後發出一聲低笑。',
             'Grey Crane freezes at your question, then lets out a low laugh.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「你怎麼知道的？——算了，你都幫我趕走追債人了，告訴你也無所謂。」',
             '"How did you know? — Never mind, you chased off the collectors for me. Might as well tell you."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('灰鶴帶你穿過市場後巷，在一堵牆上推開了一塊活動石板。',
             'Grey Crane leads you through back alleys, pushing open a loose stone panel in a wall.'),
      delay: 2500 },
    { art: `<pre class="ascii-art gold">
    ╔═══════════════════════════════╗
    ║   灰鶴的秘密倉庫             ║
    ╠═══════════════════════════════╣
    ║                               ║
    ║  ┌─────┐ ┌─────┐ ┌─────┐    ║
    ║  │ 藥水 │ │ 糧食 │ │ 武器 │   ║
    ║  └──┬──┘ └──┬──┘ └──┬──┘    ║
    ║  ┌──┴──┐ ┌──┴──┐ ┌──┴──┐    ║
    ║  │ 結晶 │ │ 工具 │ │ 布匹 │   ║
    ║  └─────┘ └─────┘ └─────┘    ║
    ║                               ║
    ║   ·˚· 走私半年的全部家當 ·˚· ║
    ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art gold">
    ╔═══════════════════════════════╗
    ║   GREY CRANE'S SECRET CACHE  ║
    ╠═══════════════════════════════╣
    ║                               ║
    ║  ┌─────┐ ┌─────┐ ┌─────┐    ║
    ║  │Potion│ │ Food │ │Weapon│   ║
    ║  └──┬──┘ └──┬──┘ └──┬──┘    ║
    ║  ┌──┴──┐ ┌──┴──┐ ┌──┴──┐    ║
    ║  │Cryst.│ │Tools │ │Cloth │   ║
    ║  └─────┘ └─────┘ └─────┘    ║
    ║                               ║
    ║  ·˚· Half a year's smuggling ║
    ╚═══════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info',
      text: L('石板後面是一個不大的洞穴，裡面堆滿了木箱和布袋。這是灰鶴走私半年的全部家當。',
             'Behind the panel lies a small cave packed with crates and sacks. Grey Crane\'s entire half-year smuggling haul.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「藥水、結晶、鍛造材料、甚至還有幾把像樣的武器。」灰鶴拍了拍箱子。「夠養活半個市場的人。」',
             '"Potions, crystals, forging materials, even a few decent weapons." Grey Crane pats a crate. "Enough to sustain half the market."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我一直在等價格漲到最高再出手。」她靠在箱子上，語氣突然變得安靜。',
             '"I\'ve been waiting for prices to peak before selling." She leans against a crate, her voice suddenly quiet.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「但看到那兩個追債人之後，我在想……也許不應該再囤了。也許應該做點別的。」',
             '"But after those collectors showed up, I\'m thinking... maybe I shouldn\'t keep hoarding. Maybe it\'s time for something else."'),
      delay: 3200 },
    { tag: '物品', tagColor: 'tag-item',
      html: L('灰鶴遞給你一小瓶液體。「<b>高濃度淨化劑</b>——我最好的貨。算我謝你的。」',
             'Grey Crane hands you a small vial. "<b>Concentrated Purifier</b> — my best stock. Consider it thanks."'),
      delay: 2800, effect: () => {
        addItem(L('高濃度淨化劑', 'Concentrated Purifier'));
        changePetri(-8);
      }},
    { tag: '效果', tagColor: 'tag-system',
      text: L('石化度 -8%', 'Petrification -8%'),
      delay: 1000 },
  ], [
    { text: '這些東西能幫到很多人', textEn: 'These supplies could help a lot of people',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('灰鶴看著那些箱子，沉默了好一會兒。',
                   'Grey Crane stares at the crates for a long time.'),
            delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……我知道。」她輕聲說。「讓我再想想。」',
                   '"...I know." She says softly. "Let me think about it."'),
            delay: 2500 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_crane') },
        ], { label: L('灰鶴的倉庫', 'Grey Crane\'s cache') });
      }},
    { text: '返回', textEn: 'Back', action: () => loadNode('r3_crane') },
  ], { label: L('灰鶴的倉庫', 'Grey Crane\'s cache') });
});

// --- r3_crane_past: Crane's real identity + someone on the surface ---
registerNode('r3_crane_past', () => {
  state.flags.r3CranePast = true;
  addNpcAffinity('crane', 12);
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('你在灰鶴收攤之後找到她。傍晚的碼頭很安靜，河水拍打著石壁。',
             'You find Grey Crane after she closes her stall. The evening dock is quiet, river lapping against stone.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「你之前說，你以前不叫灰鶴。」你直接切入正題。',
             '"You said before — you used to have a different name." You get straight to the point.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('灰鶴的笑容僵住了一瞬。她轉過頭看著暗河。',
             'Grey Crane\'s smile freezes for a beat. She turns to look at the dark river.'),
      delay: 2500 },
    { art: npcPortrait.art('crane', { subtitle: '……' }) || `<pre class="ascii-art gold">
       ·  ˚  灰鶴 — 碼頭  ˚  ·
              ╱═══╲
             ╱ ·˚· ╲
            │ ─  ─  │
            │  ───  │  ← 沒有笑
             ╲──┬──╱
          ╱░░░╲ │ ╱░░░╲
         ╱░░░░░╲│╱░░░░░╲
        │░░░░░░░░░░░░░░░│
        │░░░░░░░░░░░░░░░│
</pre>`, artEn: npcPortrait.art('crane', { subtitle: '...' }) || `<pre class="ascii-art gold">
    ·  ˚  Grey Crane — Dock  ˚  ·
              ╱═══╲
             ╱ ·˚· ╲
            │ ─  ─  │
            │  ───  │  ← no smile
             ╲──┬──╱
          ╱░░░╲ │ ╱░░░╲
         ╱░░░░░╲│╱░░░░░╲
        │░░░░░░░░░░░░░░░│
        │░░░░░░░░░░░░░░░│
</pre>`, delay: 800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……我叫秋蘅。」她的聲音很輕，像是在說一個不屬於自己的名字。「地表的名字。」',
             '"...My name is Qiu Heng." Her voice is barely audible, as if speaking a name that belongs to someone else. "My surface name."'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我在地表有一個妹妹。秋蕓。借錢做生意，就是為了給她治病。」灰鶴——秋蘅——看著河面的漣漪。',
             '"I have a younger sister on the surface. Qiu Yun. I borrowed to start that business — to pay for her treatment." Grey Crane — Qiu Heng — watches the river ripples.'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「結果生意賠了，追債人來了，我跑了。」她咬了咬嘴唇。「丟下她一個人。」',
             '"Business failed, collectors came, I ran." She bites her lip. "Left her all alone."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我在地底做商人賺的錢，大部分都託人帶上去給她了。但我不敢回去——回去就會被抓。」',
             '"Most of what I earn trading underground, I send up to her through middlemen. But I can\'t go back — they\'d catch me."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('灰鶴沉默了。河風吹過她的斗篷，在暮光裡看起來比平時小了一圈。',
             'Grey Crane goes silent. River wind catches her cloak; in the fading light she looks smaller than usual.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「你知道嗎——有時候我在想，如果議會真的封了通道，我反而解脫了。不用再假裝自己是什麼灑脫的商人。」',
             '"You know — sometimes I think, if the Council seals the passages, I\'d actually be free. No more pretending to be some carefree merchant."'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「但那樣的話——蕓兒就真的沒人管了。」她轉過頭看你，眼眶泛紅。',
             '"But then — Yun would truly have no one." She turns to you, eyes reddening.'),
      delay: 3000 },
  ], [
    { text: '通道不會封的。我會想辦法。', textEn: 'The passages won\'t be sealed. I\'ll find a way.',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('灰鶴盯著你看了好一會兒。然後她笑了——這次是真的笑，不是商人的假笑。',
                   'Grey Crane stares at you for a long time. Then she smiles — a real one, not the merchant\'s mask.'),
            delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「你這個人真奇怪。」她說。「明明自己都快石化了，還在替別人操心。」',
                   '"You\'re a strange one," she says. "Already half-petrified yourself, and still worrying about others."'),
            delay: 3000 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('灰鶴好感 ↑↑↑', 'Grey Crane bond ↑↑↑'),
            delay: 1500 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_crane') },
        ], { label: L('灰鶴的真名', 'Grey Crane\'s real name') });
      }},
    { text: '你還可以回去的', textEn: 'You can still go back',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「回去？」灰鶴苦笑。「帶著一身刀疤和一堆爛帳？」',
                   '"Go back?" Grey Crane laughs bitterly. "With these scars and a mountain of debt?"'),
            delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……但如果有人能替我跟追債人談……如果通道還開著的話……也許吧。」',
                   '"...But if someone could negotiate with the collectors... if the passages stay open... maybe."'),
            delay: 3000 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_crane') },
        ], { label: L('灰鶴的真名', 'Grey Crane\'s real name') });
      }},
  ], { label: L('灰鶴的真名', 'Grey Crane\'s real name') });
});

// --- r3_crane_deal: Crane donates all supplies for amnesty ---
registerNode('r3_crane_deal', () => {
  state.flags.r3CraneDeal = true;
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('你再次找到灰鶴時，她正站在自己的秘密倉庫門口，一臉嚴肅。',
             'When you find Grey Crane again, she\'s standing outside her secret cache, expression dead serious.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我想好了。」灰鶴看著你，語氣比你聽過的任何一次都堅定。',
             '"I\'ve decided." Grey Crane looks at you, her voice firmer than you\'ve ever heard.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「這些東西——全部——我要捐給議會。條件只有一個：讓通道保持開放。」',
             '"All of it — everything — I\'m donating to the Council. One condition: keep the passages open."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('她苦笑了一下。「半年的心血。我走私的每一瓶藥、每一塊結晶、每一把刀。全部。」',
             'She smiles wryly. "Half a year\'s work. Every potion, every crystal, every blade I smuggled. All of it."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「但如果這能讓議會看到，下層通道有商業價值——就不只是一堆等著被封死的坑洞……」',
             '"But if this shows the Council that the lower passages have trade value — that they\'re not just holes waiting to be sealed..."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('灰鶴深吸了一口氣。「那我妹妹的藥錢，以後再想辦法。」',
             'Grey Crane takes a deep breath. "My sister\'s medicine money — I\'ll figure that out later."'),
      delay: 2800 },
  ], [
    { text: '我替你跟銅鐘說', textEn: 'I\'ll talk to Bronze Bell for you',
      action: () => {
        state.flags.r3CraneDealDone = true;
        addNpcAffinity('crane', 10);
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('灰鶴把倉庫的鑰匙遞給你。她的手微微發抖。',
                   'Grey Crane hands you the warehouse key. Her hand trembles slightly.'),
            delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「拜託你了。」她說。沒有商人的笑容，沒有玩笑。只是一個叫秋蘅的女人在拜託你。',
                   '"Please." She says. No merchant\'s grin, no joke. Just a woman named Qiu Heng asking you for help.'),
            delay: 3200 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('獲得「灰鶴的倉庫鑰匙」| 經驗 +15 | 意志 +1', 'Acquired "Grey Crane\'s Cache Key" | XP +15 | WIL +1'),
            delay: 2000, effect: () => {
              addItem(L('灰鶴的倉庫鑰匙', 'Grey Crane\'s Cache Key'));
              gainXp(15);
              changeStat('wil', 1);
            }},
          { tag: '系統', tagColor: 'tag-system',
            text: L('（此物資捐贈將影響議會投票結果）', '(This donation will affect the Council vote)'),
            delay: 2000 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r3_crane') },
        ], { label: L('灰鶴的決定', 'Grey Crane\'s decision') });
      }},
    { text: '你確定嗎？這是你的全部身家', textEn: 'Are you sure? This is everything you have',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('灰鶴看著你，然後笑了。這次的笑容裡有一種你從未在她臉上見過的東西——釋然。',
                   'Grey Crane looks at you, then smiles. This smile holds something you\'ve never seen on her face before — relief.'),
            delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「全部身家？」她搖搖頭。「我逃進深淵的時候身無分文。這些東西是地底給我的。還回去，剛剛好。」',
                   '"Everything I have?" She shakes her head. "I had nothing when I fled into the abyss. The underground gave me all this. Returning it feels right."'),
            delay: 3500 },
        ], [
          { text: '好——我替你跟銅鐘說', textEn: 'Alright — I\'ll talk to Bell for you',
            action: () => {
              state.flags.r3CraneDealDone = true;
              addNpcAffinity('crane', 10);
              autoExplore([
                { tag: '對話', tagColor: 'tag-npc',
                  text: L('灰鶴把鑰匙塞進你手裡。「替我謝謝銅鐘。順便告訴她——灰鶴的本名叫秋蘅，以後不躲了。」',
                         'Grey Crane presses the key into your hand. "Thank Bell for me. And tell her — Grey Crane\'s real name is Qiu Heng. No more hiding."'),
                  delay: 3500 },
                { tag: '效果', tagColor: 'tag-system',
                  text: L('獲得「灰鶴的倉庫鑰匙」| 經驗 +15 | 意志 +1', 'Acquired "Grey Crane\'s Cache Key" | XP +15 | WIL +1'),
                  delay: 2000, effect: () => {
                    addItem(L('灰鶴的倉庫鑰匙', 'Grey Crane\'s Cache Key'));
                    gainXp(15);
                    changeStat('wil', 1);
                  }},
                { tag: '系統', tagColor: 'tag-system',
                  text: L('（此物資捐贈將影響議會投票結果）', '(This donation will affect the Council vote)'),
                  delay: 2000 },
              ], [
                { text: '返回', textEn: 'Back', action: () => loadNode('r3_crane') },
              ], { label: L('灰鶴的決定', 'Grey Crane\'s decision') });
            }},
        ], { label: L('灰鶴的決定', 'Grey Crane\'s decision') });
      }},
  ], { label: L('灰鶴的決定', 'Grey Crane\'s decision') });
});


// ── Underground Tunnels ──
registerNode('r3_underground', () => {
  state.flags.r3UndergroundDone = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║  地 下 通 道                      ║
  ╠═══════════════════════════════════╣
  ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║
  ║  ░  ┌──┐  ┌──┐  ┌──┐  ┌──┐  ░  ║
  ║  ░  │攤│──│攤│──│攤│──│攤│  ░  ║
  ║  ░  └──┘  └──┘  └──┘  └──┘  ░  ║
  ║  ░░░░░│░░░░░│░░░░░│░░░░░│░░░░  ║
  ║  ═════╧═════╧═════╧═════╧═════  ║
  ║   ·  火把  ·  暗影  ·  低語  ·   ║
  ╚═══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║  U N D E R G R O U N D            ║
  ╠═══════════════════════════════════╣
  ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║
  ║  ░  ┌──┐  ┌──┐  ┌──┐  ┌──┐  ░  ║
  ║  ░  │ST│──│ST│──│ST│──│ST│  ░  ║
  ║  ░  └──┘  └──┘  └──┘  └──┘  ░  ║
  ║  ░░░░░│░░░░░│░░░░░│░░░░░│░░░░  ║
  ║  ═════╧═════╧═════╧═════╧═════  ║
  ║  · Torches · Shadows · Whispers · ║
  ╚═══════════════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你從市場後巷的一道暗門溜進了地下通道。空氣又濕又悶，火把映著低矮的石壁。', textEn: 'You slip through a hidden door behind the market into the underground tunnels. The air is damp and stuffy, torchlight flickering on low stone walls.', delay: 2500 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '兩側擺滿了簡陋的攤位——有人賣來路不明的藥劑，有人低聲兜售情報。這是河城的黑市。', textEn: 'Crude stalls line both sides — someone sells dubious potions, others whisper offers of information. This is River City\'s black market.', delay: 2500 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '一個蒙面商人向你招手：「想知道議會投票的內幕？有價碼的。」', textEn: 'A masked merchant beckons: "Want the inside scoop on the Council vote? Everything has a price."', delay: 2200 });

  var gold = state.flags.gold || 0;
  autoExplore(steps, [
    { text: '付 10 金幣買情報', textEn: 'Pay 10 gold for intel', action: function() {
      var g = state.flags.gold || 0;
      if (g < 10) {
        notify(L('金幣不足（需要 10，目前 ' + g + '）', 'Not enough gold (need 10, have ' + g + ')'));
        loadNode('r3_underground');
        return;
      }
      state.flags.gold = g - 10;
      state.flags.r3BlackMarketVisited = true;
      gainXp(8);
      sfx.item();
      notify(L('金幣 -10，獲得議會情報，經驗 +8', 'Gold -10, acquired Council intel, XP +8'));
      autoExplore([
        { tag: '情報', tagColor: 'tag-info', text: '商人壓低聲音：「議會五人裡有兩個已經被鏽刃收買了。銅鐘是唯一還在抵抗的——但她需要證據。」', textEn: 'The merchant lowers his voice: "Two of the five council members are already bought by Rust Blade. Bronze Bell is the only one still resisting — but she needs evidence."', delay: 3000 },
        { tag: '情報', tagColor: 'tag-info', text: '「投票結果取決於你能帶多少證據和盟友。數字就是一切。」', textEn: '"The vote outcome depends on how much evidence and how many allies you bring. Numbers are everything."', delay: 2500 },
      ], [
        { text: '記住了。返回渡口', textEn: 'Noted. Return to the docks', action: function() { loadNode('r3_look'); } },
      ], { label: L('黑市情報', 'Black Market Intel') });
    }},
    { text: '自己打聽（免費）', textEn: 'Gather info yourself (free)', action: function() {
      state.flags.r3BlackMarketVisited = true;
      gainXp(8);
      sfx.pass();
      notify(L('經驗 +8', 'XP +8'));
      autoExplore([
        { tag: '探索', tagColor: 'tag-explore', text: '你在攤位間遊走，豎起耳朵聽各種對話。拼湊出一些零碎的線索——議會內部似乎有分歧。', textEn: 'You wander among the stalls, ears pricked. You piece together fragments — the Council seems divided internally.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '雖然不如付費情報完整，但至少你知道了議會不是鐵板一塊。', textEn: 'Not as complete as the paid intel, but at least you know the Council isn\'t monolithic.', delay: 2200 },
      ], [
        { text: '返回渡口', textEn: 'Return to the docks', action: function() { loadNode('r3_look'); } },
      ], { label: L('地下通道', 'Underground Tunnels') });
    }},
    { text: '離開', textEn: 'Leave', action: function() { loadNode('r3_look'); } },
  ], { label: L('地下通道', 'Underground Tunnels') });
});

// ── Petrification Temple ──
registerNode('r3_temple', () => {
  state.flags.r3TempleDone = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║       石  化  神  殿              ║
  ╠═══════════════════════════════════╣
  ║            ╱    ╲                 ║
  ║           ╱  ◆◆  ╲                ║
  ║          ╱  ◆石◆  ╲               ║
  ║         ╱  ◆ 母 ◆  ╲              ║
  ║        ╱  ◆◆◆◆◆◆  ╲             ║
  ║       ╱──────────────╲            ║
  ║      │  ✦  祭壇  ✦  │           ║
  ║  ─┬──┴────────────────┴──┬─      ║
  ║   │ 蠟燭 ·  香爐 · 蠟燭 │       ║
  ╚═══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║     PETRIFICATION  TEMPLE         ║
  ╠═══════════════════════════════════╣
  ║            ╱    ╲                 ║
  ║           ╱  ◆◆  ╲                ║
  ║          ╱ ◆Stone◆ ╲              ║
  ║         ╱ ◆Mother◆  ╲             ║
  ║        ╱  ◆◆◆◆◆◆  ╲             ║
  ║       ╱──────────────╲            ║
  ║      │  ✦  Altar  ✦  │          ║
  ║  ─┬──┴────────────────┴──┬─      ║
  ║   │Candle · Censer · Candle│     ║
  ╚═══════════════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進一座鑿入岩壁的神殿。空氣中瀰漫著苦澀的焚香。', textEn: 'You enter a temple carved into the rock face. Bitter incense saturates the air.', delay: 2200 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '祭壇上方矗立著一尊半石化的女性雕像——「石之母」。河城居民信仰她能緩解石化之苦。', textEn: 'Above the altar stands a half-petrified female statue — the "Stone Mother." River City residents believe she can ease the suffering of petrification.', delay: 2800 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '一名老祭司向你示意：「跪下禱告吧。石之母會聆聽的——但她的恩典需要堅定的意志。」', textEn: 'An old priest beckons: "Kneel and pray. The Stone Mother listens — but her grace demands a steadfast will."', delay: 2500 });
  var rate = checkRate('wil', 8);
  steps.push({ tag: '情報', tagColor: 'tag-info', text: L('（意志檢定 DC8，成功率 ' + rate + '%）', '(WIL check DC8, success rate ' + rate + '%)'), delay: 1500 });

  autoExplore(steps, [
    { text: '跪下禱告（WIL DC8）', textEn: 'Kneel and pray (WIL DC8)', action: function() {
      var result = statCheck('wil', 8);
      if (result !== 'fail') {
        sfx.pass();
        changePetri(-10);
        notify(L('石化度 -10%（石之母的祝福）', 'Petrification -10% (Stone Mother\'s blessing)'));
        autoExplore([
          { tag: '效果', tagColor: 'tag-petri', text: '你感受到一股溫暖從祭壇流入身體。石化的皮膚微微鬆動，像冰雪融化。', textEn: 'Warmth flows from the altar into your body. Petrified skin loosens slightly, like melting ice.', delay: 2500 },
          { tag: '系統', tagColor: 'tag-system', text: L('石化度 -10%', 'Petrification -10%'), delay: 1500 },
        ], [
          { text: '感謝石之母，離開', textEn: 'Thank the Stone Mother and leave', action: function() { loadNode('r3_look'); } },
        ], { label: L('石化神殿', 'Petrification Temple') });
      } else {
        sfx.fail();
        changePetri(5);
        notify(L('禱告失敗，石化度 +5%', 'Prayer failed, petrification +5%'));
        autoExplore([
          { tag: '警告', tagColor: 'tag-warn', text: '你閉眼禱告，但腦海中充斥著恐懼和雜念。祭壇上的結晶突然碎裂，石化粉塵撲面而來。', textEn: 'You close your eyes to pray, but fear and distraction flood your mind. The altar crystals shatter, petrification dust blasting your face.', delay: 2800 },
          { tag: '系統', tagColor: 'tag-system', text: L('石化度 +5%（儀式反噬）', 'Petrification +5% (ritual backlash)'), delay: 1500 },
        ], [
          { text: '匆匆離開', textEn: 'Leave hurriedly', action: function() { loadNode('r3_look'); } },
        ], { label: L('石化神殿', 'Petrification Temple') });
      }
    }},
    { text: '不冒險，離開', textEn: 'Don\'t risk it, leave', action: function() { loadNode('r3_look'); } },
  ], { label: L('石化神殿', 'Petrification Temple') });
});

// ── City Library ──
registerNode('r3_library', () => {
  state.flags.r3LibraryDone = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║        河 城 圖 書 館             ║
  ╠═══════════════════════════════════╣
  ║  ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐      ║
  ║  │█│ │█│ │█│ │█│ │█│ │█│      ║
  ║  │█│ │█│ │█│ │█│ │█│ │█│      ║
  ║  │█│ │█│ │█│ │█│ │█│ │█│      ║
  ║  └─┘ └─┘ └─┘ └─┘ └─┘ └─┘      ║
  ║  ···  灰塵  ···  蛛網  ···       ║
  ║     ┌──────────────┐             ║
  ║     │ ✦ 閱覽桌 ✦  │             ║
  ║     └──────────────┘             ║
  ╚═══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║        CITY  LIBRARY              ║
  ╠═══════════════════════════════════╣
  ║  ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐      ║
  ║  │█│ │█│ │█│ │█│ │█│ │█│      ║
  ║  │█│ │█│ │█│ │█│ │█│ │█│      ║
  ║  │█│ │█│ │█│ │█│ │█│ │█│      ║
  ║  └─┘ └─┘ └─┘ └─┘ └─┘ └─┘      ║
  ║  ···  Dust  ···  Cobwebs  ···    ║
  ║     ┌──────────────┐             ║
  ║     │ ✦ Read Desk ✦│             ║
  ║     └──────────────┘             ║
  ╚═══════════════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你推開圖書館厚重的石門。裡面堆滿了落灰的書架，空氣中飄著紙張腐朽的氣味。', textEn: 'You push open the library\'s heavy stone door. Dusty bookshelves fill the space, the air thick with the scent of decaying paper.', delay: 2500 });
  steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你翻閱了幾本歷史記錄——石化瘟疫的爆發始於三百年前，最初只在深層礦區蔓延。', textEn: 'You browse several historical records — the petrification plague began three hundred years ago, initially spreading only in deep mining areas.', delay: 2800 });
  steps.push({ tag: '情報', tagColor: 'tag-info', text: '一本泛黃的年鑑記載：「議會初代成員曾試圖封鎖所有通往深層的通道，但遭到礦工工會的激烈反對。」', textEn: 'A yellowed almanac records: "The first Council attempted to seal all passages to the deep levels, but faced fierce opposition from the miners\' union."', delay: 3000 },
  { tag: '系統', tagColor: 'tag-system', text: L('經驗 +10（歷史知識）', 'XP +10 (historical knowledge)'), delay: 1500, effect: function() { gainXp(10); } });
  var rate = checkRate('agi', 7);
  steps.push({ tag: '情報', tagColor: 'tag-info', text: L('書架深處似乎有一個上鎖的抽屜……（敏捷 DC7 撬鎖，成功率 ' + rate + '%）', 'Deep in the shelves, a locked drawer... (AGI DC7 to pick the lock, success rate ' + rate + '%)'), delay: 2200 });

  autoExplore(steps, [
    { text: '嘗試撬開抽屜（AGI DC7）', textEn: 'Try to pick the lock (AGI DC7)', action: function() {
      var result = statCheck('agi', 7);
      if (result !== 'fail') {
        sfx.pass();
        state.flags.r3LibrarySecret = true;
        notify(L('發現議會醜聞文件！', 'Discovered Council scandal documents!'));
        autoExplore([
          { tag: '發現', tagColor: 'tag-info', html: L('抽屜裡是一份密封的文件——<b>議會早在十年前就知道石化結晶的軍事用途</b>，卻對外隱瞞。', 'Inside is a sealed document — <b>the Council knew about the military applications of petrification crystals ten years ago</b>, but concealed it.'), delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '這份文件如果交給銅鐘，可能會改變一切。', textEn: 'If given to Bronze Bell, this document could change everything.', delay: 2200 },
        ], [
          { text: '帶走文件，返回渡口', textEn: 'Take the document and return', action: function() { loadNode('r3_look'); } },
        ], { label: L('圖書館', 'Library') });
      } else {
        sfx.fail();
        autoExplore([
          { tag: '失敗', tagColor: 'tag-warn', text: '鎖太複雜了，你的手指不夠靈巧。抽屜紋絲不動。', textEn: 'The lock is too complex for your fingers. The drawer doesn\'t budge.', delay: 2200 },
        ], [
          { text: '放棄，返回渡口', textEn: 'Give up and return', action: function() { loadNode('r3_look'); } },
        ], { label: L('圖書館', 'Library') });
      }
    }},
    { text: '不動抽屜，離開', textEn: 'Leave the drawer alone', action: function() { loadNode('r3_look'); } },
  ], { label: L('圖書館', 'Library') });
});

// ── Lower District Slum ──
registerNode('r3_slum', () => {
  state.flags.r3SlumDone = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║        下  城  區                 ║
  ╠═══════════════════════════════════╣
  ║   ╱╲  ╱╲  ╱╲     ╱╲  ╱╲        ║
  ║  ╱░░╲╱░░╲╱░░╲   ╱░░╲╱░░╲       ║
  ║  │棚││棚││棚│   │棚││棚│       ║
  ║  └──┘└──┘└──┘   └──┘└──┘       ║
  ║    ·  水窪  · 碎石路 · 煙霧  ·   ║
  ║  ╱╲          ╱╲                  ║
  ║  │棚│  ···   │棚│   ···          ║
  ║  └──┘        └──┘                ║
  ╚═══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║      LOWER  DISTRICT              ║
  ╠═══════════════════════════════════╣
  ║   ╱╲  ╱╲  ╱╲     ╱╲  ╱╲        ║
  ║  ╱░░╲╱░░╲╱░░╲   ╱░░╲╱░░╲       ║
  ║  │Sh││Sh││Sh│   │Sh││Sh│       ║
  ║  └──┘└──┘└──┘   └──┘└──┘       ║
  ║   · Puddles · Gravel · Smoke ·   ║
  ║  ╱╲          ╱╲                  ║
  ║  │Sh│  ···   │Sh│   ···          ║
  ║  └──┘        └──┘                ║
  ╚═══════════════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進下城區。這裡的空氣更加渾濁，石化度較高的居民聚居在用廢料搭建的棚屋裡。', textEn: 'You enter the lower district. The air is fouler here — residents with high petrification levels huddle in shanties built from scrap.', delay: 2500 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '一個老婦人蹲在路邊，半張臉已經石化。她的孫子用破布幫她擦拭石化裂紋中滲出的灰色液體。', textEn: 'An old woman crouches by the road, half her face petrified. Her grandson wipes grey fluid seeping from the cracks with a torn rag.', delay: 3000 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你看到更多這樣的人——被石化侵蝕但還活著的人。他們的眼神裡沒有絕望，只有麻木。', textEn: 'You see more like her — eroded by petrification yet still alive. Their eyes hold no despair, only numbness.', delay: 2800 });

  var hasItems = state.inventory.length > 0;
  autoExplore(steps, (function() {
    var c = [];
    if (hasItems) {
      c.push({ text: '捐出一份物資（失去 1 件物品，WIL+1）', textEn: 'Donate supplies (lose 1 item, WIL+1)', action: function() {
        var item = state.inventory[0];
        removeItem(item);
        changeStat('wil', 1);
        sfx.pass();
        notify(L('捐出「' + item + '」，意志 +1', 'Donated "' + item + '", WIL +1'));
        autoExplore([
          { tag: '行動', tagColor: 'tag-info', text: '你把物資遞給了老婦人的孫子。男孩接過去，眼睛亮了一下：「謝謝……謝謝你。」', textEn: 'You hand supplies to the old woman\'s grandson. The boy takes them, eyes lighting up: "Thank you... thank you."', delay: 2800 },
          { tag: '效果', tagColor: 'tag-system', text: L('意志 +1（慈悲之心）', 'WIL +1 (compassionate heart)'), delay: 1500 },
        ], [
          { text: '返回渡口', textEn: 'Return to the docks', action: function() { loadNode('r3_look'); } },
        ], { label: L('下城區', 'Lower District') });
      }});
    }
    c.push({ text: '默默觀察後離開（XP+5）', textEn: 'Observe silently and leave (XP+5)', action: function() {
      gainXp(5);
      sfx.pass();
      notify(L('經驗 +5', 'XP +5'));
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '你沒有說話，只是把這一切記在心裡。如果議會看到這些……也許投票結果會不同。', textEn: 'You say nothing, committing everything to memory. If the Council could see this... perhaps the vote would be different.', delay: 2500 },
      ], [
        { text: '返回渡口', textEn: 'Return to the docks', action: function() { loadNode('r3_look'); } },
      ], { label: L('下城區', 'Lower District') });
    }});
    return c;
  })(), { label: L('下城區', 'Lower District') });
});

// ── Council Garden ──
registerNode('r3_garden_r3', () => {
  state.flags.r3GardenDone = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║       議 會 花 園                 ║
  ╠═══════════════════════════════════╣
  ║                                   ║
  ║    ⌒⌒   ✿  ⌒⌒   ✿  ⌒⌒        ║
  ║   ╱  ╲ ╱╲ ╱  ╲ ╱╲ ╱  ╲       ║
  ║   │樹│ │花│ │樹│ │花│ │樹│       ║
  ║   └──┘ └──┘ └──┘ └──┘ └──┘       ║
  ║  ─────── 石板路 ───────          ║
  ║     ◇ 燈籠 ◇    ◇ 燈籠 ◇        ║
  ║  ≈≈≈≈≈ 小溪 ≈≈≈≈≈≈≈≈≈≈          ║
  ╚═══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║      COUNCIL  GARDEN              ║
  ╠═══════════════════════════════════╣
  ║                                   ║
  ║    ⌒⌒   ✿  ⌒⌒   ✿  ⌒⌒        ║
  ║   ╱  ╲ ╱╲ ╱  ╲ ╱╲ ╱  ╲       ║
  ║   │Tr│ │Fl│ │Tr│ │Fl│ │Tr│       ║
  ║   └──┘ └──┘ └──┘ └──┘ └──┘       ║
  ║  ─────── Stone Path ───────      ║
  ║    ◇ Lantern ◇  ◇ Lantern ◇     ║
  ║  ≈≈≈≈≈ Stream ≈≈≈≈≈≈≈≈≈≈        ║
  ╚═══════════════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進議會廳後方的花園。石板路蜿蜒在低矮的灌木和發光苔蘚之間，紙燈籠掛在枝頭，映著一條淺淺的溪流。', textEn: 'You enter the garden behind the Council Hall. A flagstone path winds through low shrubs and luminescent moss, paper lanterns hanging from branches over a shallow stream.', delay: 2800 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '這是河城最安靜的角落。水聲和蟲鳴交織，讓你幾乎忘了自己身在地底。', textEn: 'This is the quietest corner of River City. Water and insects weave together, making you almost forget you\'re underground.', delay: 2200 });

  if (state.flags.r1YingCompanion) {
    steps.push({ tag: '螢', tagColor: 'tag-npc', art: npcPortrait.art('ying', { subtitle: '記錄員' }) || '', artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || '', delay: 500 });
    steps.push({ tag: '螢', tagColor: 'tag-npc', text: '螢不知什麼時候也來了。她坐在溪邊的石頭上，把腳泡在水裡。「這裡真好。」她輕聲說。', textEn: 'Ying appears at some point. She sits on a rock by the stream, feet in the water. "It\'s nice here," she says softly.', delay: 2800 });
    steps.push({ tag: '螢', tagColor: 'tag-npc', text: '你在她旁邊坐下。兩個人就這樣靜靜地聽了一會兒水聲。', textEn: 'You sit beside her. The two of you listen to the water in silence for a while.', delay: 2500 });
    steps.push({ tag: '效果', tagColor: 'tag-system', text: L('HP +10，石化度 -5%（片刻安寧）', 'HP +10, Petrification -5% (a moment of peace)'), delay: 1500, effect: function() { changeHp(10); changePetri(-5); } });
  } else if (state.flags.r3BellAlliance) {
    steps.push({ tag: '銅鐘', tagColor: 'tag-npc', art: npcPortrait.art('bell', { subtitle: '議會代表' }) || '', artEn: npcPortrait.art('bell', { subtitle: 'Council Rep' }) || '', delay: 500 });
    steps.push({ tag: '銅鐘', tagColor: 'tag-npc', text: '銅鐘也在花園裡散步。她看到你，停下腳步。石化的右手不自覺地握緊又鬆開。', textEn: 'Bronze Bell is also walking in the garden. She stops when she sees you. Her petrified right hand clenches and unclenches unconsciously.', delay: 2800 });
    steps.push({ tag: '銅鐘', tagColor: 'tag-npc', text: '「偶爾需要透口氣。」她淡淡地說。「議會的牆壁太厚了，厚到讓人喘不過氣。」', textEn: '"Sometimes I need air," she says flatly. "The Council walls are too thick — thick enough to suffocate."', delay: 2800 });
    steps.push({ tag: '效果', tagColor: 'tag-system', text: L('經驗 +5（與銅鐘的交流）', 'XP +5 (interaction with Bronze Bell)'), delay: 1500, effect: function() { gainXp(5); } });
  } else {
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你一個人在花園裡走了走。雖然什麼也沒發生，但身體和精神都放鬆了不少。', textEn: 'You walk the garden alone. Nothing happens, but your body and mind relax noticeably.', delay: 2200 });
    steps.push({ tag: '效果', tagColor: 'tag-system', text: L('經驗 +5', 'XP +5'), delay: 1500, effect: function() { gainXp(5); } });
  }

  autoExplore(steps, [
    { text: '返回渡口', textEn: 'Return to the docks', action: function() { loadNode('r3_look'); } },
  ], { label: L('議會花園', 'Council Garden') });
});

// ── City Prison ──
registerNode('r3_prison', () => {
  state.flags.r3PrisonDone = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║       河 城 監 獄                 ║
  ╠═══════════════════════════════════╣
  ║  ┌───┐ ┌───┐ ┌───┐ ┌───┐       ║
  ║  │ ╳ │ │ ╳ │ │ ╳ │ │ ╳ │       ║
  ║  │牢房│ │牢房│ │牢房│ │牢房│       ║
  ║  │   │ │   │ │   │ │   │       ║
  ║  ├───┤ ├───┤ ├───┤ ├───┤       ║
  ║  │鎖 │ │鎖 │ │鎖 │ │鎖 │       ║
  ║  └───┘ └───┘ └───┘ └───┘       ║
  ║     ⚔ 守衛 ⚔     · 鐵鏈 ·       ║
  ╚═══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═══════════════════════════════════╗
  ║        CITY  PRISON               ║
  ╠═══════════════════════════════════╣
  ║  ┌───┐ ┌───┐ ┌───┐ ┌───┐       ║
  ║  │ ╳ │ │ ╳ │ │ ╳ │ │ ╳ │       ║
  ║  │Cell│ │Cell│ │Cell│ │Cell│       ║
  ║  │   │ │   │ │   │ │   │       ║
  ║  ├───┤ ├───┤ ├───┤ ├───┤       ║
  ║  │Lck│ │Lck│ │Lck│ │Lck│       ║
  ║  └───┘ └───┘ └───┘ └───┘       ║
  ║    ⚔ Guard ⚔    · Chains ·      ║
  ╚═══════════════════════════════════╝
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你找到了河城監獄的入口。潮濕的石壁上掛著生鏽的鐵鏈，空氣中瀰漫著腐臭。', textEn: 'You find the entrance to City Prison. Rusty chains hang on damp stone walls, the air thick with decay.', delay: 2500 });
  steps.push({ tag: '感知', tagColor: 'tag-sense', text: '一名守衛攔住你：「外人不得進入。裡面關的都是反對議會決議的危險分子。」', textEn: 'A guard blocks your path: "No outsiders. The inmates are dangerous dissidents who opposed Council decisions."', delay: 2500 });
  var rate = checkRate('wil', 8);
  steps.push({ tag: '情報', tagColor: 'tag-info', text: L('（意志檢定 DC8 說服守衛，成功率 ' + rate + '%）', '(WIL check DC8 to persuade the guard, success rate ' + rate + '%)'), delay: 1500 });

  autoExplore(steps, [
    { text: '說服守衛讓你進去（WIL DC8）', textEn: 'Persuade the guard to let you in (WIL DC8)', action: function() {
      var result = statCheck('wil', 8);
      if (result !== 'fail') {
        sfx.pass();
        state.flags.r3PrisonInfo = true;
        notify(L('獲得議會腐敗證據', 'Acquired Council corruption evidence'));
        autoExplore([
          { tag: '行動', tagColor: 'tag-info', text: '守衛猶豫了一下，終於側身讓開。「五分鐘。別讓我的長官看到。」', textEn: 'The guard hesitates, then steps aside. "Five minutes. Don\'t let my superior see."', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '你走進牢房區。一個滿臉傷痕的中年男人從鐵欄後面看著你。', textEn: 'You enter the cell block. A scarred middle-aged man watches you through the iron bars.', delay: 2200 },
          { tag: '囚犯', tagColor: 'tag-npc', text: '「你是外面來的？」他壓低聲音。「聽好——議會投票是做樣子的。鏽刃早就和兩個議員簽了密約。」', textEn: '"You\'re from outside?" He lowers his voice. "Listen — the Council vote is theater. Rust Blade already has a secret deal with two members."', delay: 3000 },
          { tag: '囚犯', tagColor: 'tag-npc', text: '「密約的副本就在議會廳的地下室。我親眼看到的——所以他們把我關在這裡。」', textEn: '"A copy of the deal is in the Council Hall basement. I saw it with my own eyes — that\'s why they locked me up."', delay: 2800 },
          { tag: '效果', tagColor: 'tag-system', html: L('<b>獲得議會腐敗線索</b>（可在作證時使用，投票 +2）', '<b>Acquired Council corruption lead</b> (can be used in testimony, vote +2)'), delay: 2000 },
        ], [
          { text: '記住了。返回渡口', textEn: 'Noted. Return to the docks', action: function() { loadNode('r3_look'); } },
        ], { label: L('河城監獄', 'City Prison') });
      } else {
        sfx.fail();
        autoExplore([
          { tag: '失敗', tagColor: 'tag-warn', text: '守衛面無表情地搖頭。「走吧。別讓我叫人。」你只能離開。', textEn: 'The guard shakes his head expressionlessly. "Leave. Don\'t make me call for backup." You have no choice but to go.', delay: 2200 },
        ], [
          { text: '離開', textEn: 'Leave', action: function() { loadNode('r3_look'); } },
        ], { label: L('河城監獄', 'City Prison') });
      }
    }},
    { text: '算了，不惹麻煩', textEn: 'Never mind, don\'t cause trouble', action: function() { loadNode('r3_look'); } },
  ], { label: L('河城監獄', 'City Prison') });
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
  steps.push({ art: npcPortrait.art('bell', { subtitle: '議員' }), artEn: npcPortrait.art('bell', { subtitle: 'Councilor' }), delay: 800 });
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

  // Summary & alliance formation
  if (questsDone >= 2 && !state.flags.r3BellAlliance) {
    // Alliance earned — emotional payoff after proving yourself
    state.flags.r3BellAlliance = true;
    gainXp(15);
    notify(L('經驗 +15（贏得銅鐘的信任）', 'XP +15 (Earned Bronze Bell\'s trust)'));
    steps.push({ tag: '感知', tagColor: 'tag-sense', html: L(
      '銅鐘看著你：「完成了 <b>' + questsDone + '/3</b> 個任務。」',
      'Bronze Bell looks at you: "Completed <b>' + questsDone + '/3</b> tasks."'
    ), delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她放下筆。這一次，沉默的質地不一樣了。', textEn: 'She sets down the pen. This time, the quality of the silence is different.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '銅鐘站起身來，走到你面前。你第一次注意到她的琥珀色眼睛裡——冷銳消退了，取而代之的是某種你之前沒見過的光芒。', textEn: 'Bronze Bell rises and walks to you. For the first time, you notice the cold edge in her amber eyes has receded — replaced by a gleam you haven\'t seen before.', delay: 3200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「……我錯了。」她的聲音低了下來。從這個驕傲的女人嘴裡說出這三個字，比任何讚美都重。', textEn: '"...I was wrong." Her voice drops. Coming from this proud woman, those three words carry more weight than any praise.', delay: 3200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她不自覺地按了按石化的右手腕——這次，她沒有掩飾。「你不只是又一個從下面爬上來的難民。你是——」', textEn: 'She unconsciously presses her petrified right wrist — this time, she doesn\'t mask it. "You\'re not just another refugee from below. You\'re —"', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「——你是我的盟友。」她伸出左手。不是握手的姿態——是抓住你的手腕，用力。像立誓。', textEn: '"— you\'re my ally." She extends her left hand. Not a handshake — she grips your wrist, hard. Like an oath.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你能聞到她身上淡淡的墨水和茶葉的氣味。近距離下，她的琥珀色虹膜裡有細小的金色碎片。', textEn: 'You catch the faint scent of ink and tea on her. Up close, you notice tiny golden flecks within her amber irises.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「下一次議會投票——我需要你在議會上作證。你的行動已經證明了一切。」', textEn: '"At the next Council vote — I need you to testify. Your actions have already proven everything."', delay: 3000 });
    changeStat('wil', 1);
    notify(L('意志 +1（贏得信任）', 'WIL +1 (Trust earned)'));
  } else {
    steps.push({ tag: '情報', tagColor: 'tag-info', html: L(
      '銅鐘看著你：「完成了 <b>' + questsDone + '/3</b> 個任務。',
      'Bronze Bell looks at you: "Completed <b>' + questsDone + '/3</b> tasks.'
    ) + (questsDone >= 2
      ? L('——夠了。我們可以行動了。」', ' — Enough. We can proceed."')
      : L('——還不夠。再努力一下。」', ' — Not enough. Keep at it."')
    ), delay: 2500 });
  }

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
  steps.push({ art: npcPortrait.art('bell', { subtitle: '議員' }), artEn: npcPortrait.art('bell', { subtitle: 'Councilor' }), delay: 800 });
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

  var bossChoices = [];
  if (state.flags.r1YingCompanion && !state.flags.r3YingFarewell) {
    bossChoices.push({ text: '螢站在走廊盡頭看著你……', textEn: 'Ying stands at the corridor\'s end, watching you...', action: () => loadNode('r3_ying_farewell') });
  }
  bossChoices.push({ text: '走向議會大廳', textEn: 'Head to the Council chamber', action: () => loadNode('r3_boss') });
  bossChoices.push({ text: '先去準備一下', textEn: 'Prepare first', action: () => loadNode('r3_look') });

  autoExplore(steps, bossChoices, { label: L('決戰前夕', 'Eve of the showdown') });
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
    // NG+ exclusive: use past-life knowledge + plague evidence to bypass boss
    if (state.flags.ngPlus && state.flags.r3PlagueProof) {
      c.push({ text: '「隊長，封鎖通道救不了任何人。我有證據。」', textEn: '"Captain, sealing the passages saves no one. I have proof."', action: () => {
        autoExplore([
          { tag: '記憶', tagColor: 'tag-petri', text: '你從懷中取出瘟疫起源的證據，遞到鏽刃面前。你的動作很平靜——因為你知道接下來會發生什麼。', textEn: 'You draw the plague origin evidence and hold it before Rust Blade. Your movements are calm — because you know what comes next.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「瘟疫不是從下面來的。是你們的人——議會特派員孔德業炸開封印導致的。」', textEn: '"The plague didn\'t come from below. It was your people — Council envoy Kong Deye who blew the seal."', delay: 3200 },
          { tag: '感知', tagColor: 'tag-sense', text: '鏽刃的手在發抖。不是因為憤怒——是因為他知道你說的是真的。', textEn: 'Rust Blade\'s hand shakes. Not from anger — because he knows you\'re telling the truth.', delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc', text: '「……你怎麼知道的？」他低聲問。劍尖已經落到了地面。', textEn: '"...How do you know all this?" he whispers. His sword tip has dropped to the floor.', delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc', text: '你沒有回答。有些答案太荒謬了——「我上輩子經歷過」不是一個能讓人信服的理由。', textEn: 'You don\'t answer. Some answers are too absurd — "I lived through this before" isn\'t convincing.', delay: 2800 },
          { tag: '感知', tagColor: 'tag-sense', text: '鏽刃看著證據，沉默了很久。然後他收起劍，讓開了路。', textEn: 'Rust Blade studies the evidence, silent for a long time. Then he sheathes his sword and steps aside.', delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc', text: '「進去吧。」他的聲音很疲憊。「告訴他們……告訴他們我也知道了。」', textEn: '"Go." His voice is weary. "Tell them... tell them I know now too."', delay: 2800 },
          { tag: '效果', tagColor: 'tag-system', text: L('跳過 Boss 戰！經驗 +25 | 鏽刃讓路', 'Boss fight skipped! XP +25 | Rust Blade steps aside'), delay: 2000, effect: () => {
            gainXp(25);
            state.flags.r3BossDefeated = true;
            state.flags.r3BossMethod = 'ngplus_evidence';
          }},
        ], [
          { text: '踏入議會大廳', textEn: 'Enter the Council chamber', action: () => loadNode('r3_vote') },
        ], { label: L('前世的記憶', 'Memory of a past life') });
      }});
    }
    c.push({ text: '戰鬥！', textEn: 'Fight!', action: () => {
      startCombat(BOSS, function() {
        state.flags.r3BossDefeated = true;
        state.flags.r3BossMethod = 'fight';
        loadNode('r3_vote');
      }, function() {
        // ── D4 YING SACRIFICE: If Ying is present, she shields your retreat ──
        if (state.flags.r1YingCompanion && !state.flags.r3YingSacrifice) {
          state.flags.r3YingSacrifice = true;
          autoExplore([
            { tag: '逃跑', tagColor: 'tag-warn',
              text: L('你轉身逃跑——但鏽刃的劍已經劈了下來。你閉上眼睛，等著痛楚。',
                     'You turn to flee — but Rust Blade\'s sword is already falling. You close your eyes, bracing for pain.'),
              delay: 2500 },
            { tag: '異變', tagColor: 'tag-petri',
              text: L('痛楚沒有來。取而代之的是一個熟悉的聲音：「——不准碰他！」',
                     'The pain doesn\'t come. Instead, a familiar voice: "— Don\'t touch ' + (state.sex === 'male' ? L('他', 'him') : L('她', 'her')) + '!"'),
              delay: 2800 },
            { art: npcPortrait.art('ying', { subtitle: L('護盾', 'Shield') }) || '<pre class="ascii-art cyan">\n    ·˚· 螢 ·˚·\n      ╱═══╲\n     │ ◦  ◦ │ ← 決絕\n     │  ──  │\n      ╲═══╱\n   ╱──┤█████├──╲\n       石化盾\n</pre>', artEn: npcPortrait.art('ying', { subtitle: 'Shield' }) || '<pre class="ascii-art cyan">\n    ·˚· Ying ·˚·\n      ╱═══╲\n     │ ◦  ◦ │ ← resolve\n     │  ──  │\n      ╲═══╱\n   ╱──┤█████├──╲\n     Petri-Shield\n</pre>', delay: 800 },
            { tag: '感知', tagColor: 'tag-sense',
              text: L('螢擋在了你面前。鏽刃的劍砍在了她舉起的手臂上——石化紋路從傷口像閃電一樣蔓延。',
                     'Ying throws herself in front of you. Rust Blade\'s sword strikes her raised arm — petrification spreads from the wound like lightning.'),
              delay: 3200 },
            { tag: '石化', tagColor: 'tag-petri',
              text: L('「走——快走！」螢的右臂已經完全石化了。她用左手把你推向走廊。她的臉上沒有恐懼——只有絕不讓你死在這裡的決心。',
                     '"Go — now!" Ying\'s right arm is completely petrified. She pushes you toward the corridor with her left. No fear on her face — only the resolve that you will not die here.'),
              delay: 3500 },
            { tag: '感知', tagColor: 'tag-sense',
              text: L('鏽刃收回了劍。他看著螢石化的手臂，嘴裡嘟囔了一句「不值得」，轉身走回了大門。',
                     'Rust Blade withdraws his sword. He glances at Ying\'s petrified arm, mutters "not worth it," and turns back to the doors.'),
              delay: 3000 },
            { tag: '感知', tagColor: 'tag-sense',
              text: L('你扶著螢退進走廊。她的右臂像一截灰色的木頭一樣垂著。石化紋路已經蔓延到了肩膀。',
                     'You support Ying into the corridor. Her right arm hangs like a grey log. Petrification has spread to her shoulder.'),
              delay: 3000 },
            { tag: '對話', tagColor: 'tag-npc',
              text: L('「……答應過我的。」她咬著牙笑了。「校對。你還欠我的。」',
                     '"...You promised." She smiles through gritted teeth. "Proofreading. You still owe me."'),
              delay: 3000,
              effect: function() {
                sfx.hurt();
                state.mood = 'hurt';
                renderStatus();
              }},
            { tag: '效果', tagColor: 'tag-system',
              text: L('螢受了重傷。她的右臂永久石化了。但她活著。', 'Ying is gravely wounded. Her right arm is permanently petrified. But she\'s alive.'),
              delay: 2500 },
          ], [
            { text: '回到安全的地方', textEn: 'Get to safety', action: () => loadNode('r3_council') },
          ], { label: L('螢的犧牲', 'Ying\'s sacrifice') });
        } else {
          loadNode('r3_council');
        }
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
  if (state.flags.r3ZhouTestimony) score += 2; // Zhou's testimony exposes Council's role in plague
  if (state.flags.r2FrostLetterCarried) score += 1; // Iron Frost's letter reveals camp survivors + Seventh Division truth
  if (state.flags.r3BellAllianceDeep) score += 3; // Bell's dossier exposes Council corruption — decisive evidence
  if (state.flags.r2ChengCureData) score += 2; // Cheng's cure data proves passages must stay open
  if (state.flags.r3YingRealReport) score += 3; // Ying's true report — powerful evidence
  if (state.flags.r3CraneDealDone) score += 2; // Grey Crane's supply donation proves trade value
  if (state.flags.ngPlus) score += 2; // NG+ past-life testimony bonus

  // ── D4 Betrayal: Bell sells you out under pressure ──
  // Triggers when: Bell allied but NOT deeply allied, AND score is weak (< 8)
  // She fears losing her seat more than she values the alliance
  var bellBetrayed = false;
  if (state.flags.r3BellAlliance && !state.flags.r3BellAllianceDeep && score < 8) {
    bellBetrayed = true;
    state.flags.r3BellBetrayed = true;
    // Bell hands your evidence to Rust Blade before the vote
    score -= 3; // Lose the alliance bonus she brought
    if (score < 0) score = 0;
  }

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
  ].concat(bellBetrayed ? [
    // ── D4 BETRAYAL SCENE ──
    { tag: '異變', tagColor: 'tag-warn',
      text: L('但在你開口之前——銅鐘站了起來。她沒有看你。',
             'But before you can speak — Bronze Bell stands. She doesn\'t look at you.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「各位同僚——在這位外來者作證之前，我有一件事要先交代。」銅鐘的聲音很穩。太穩了。',
             '"Colleagues — before this outsider testifies, I have something to disclose." Bronze Bell\'s voice is steady. Too steady.'),
      delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('她從懷中取出一疊文件——你認出了那些。那是你交給她的瘟疫證據。',
             'She produces a stack of documents — you recognize them. They\'re the plague evidence you gave her.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「這份所謂的『瘟疫起源證據』——」銅鐘把文件遞給鏽刃。「來源不可靠。我建議議會不予採信。」',
             '"This so-called \'plague origin evidence\' —" Bronze Bell hands the documents to Rust Blade. "The source is unreliable. I recommend the Council disregard it."'),
      delay: 3500 },
    { tag: '震驚', tagColor: 'tag-petri',
      text: L('你的血液凝固了。銅鐘——你最信任的盟友——正在把你賣給鏽刃。',
             'Your blood freezes. Bronze Bell — your most trusted ally — is selling you out to Rust Blade.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('銅鐘終於看了你一眼。她的琥珀色眼睛裡——有歉疚，有計算，有一種你從未見過的冰冷決斷。',
             'Bronze Bell finally glances at you. In those amber eyes — guilt, calculation, and a cold resolve you\'ve never seen.'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('她只對你說了一句，聲音輕到只有你聽得到：「對不起。但我不能讓議會倒台。」',
             'She whispers one sentence, so quiet only you can hear: "I\'m sorry. But I can\'t let the Council fall."'),
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('鏽刃接過文件，嘴角微微上揚。黑鰭哼了一聲。你手中的牌——少了最重要的一張。',
             'Rust Blade takes the documents, lips curving slightly. Black Fin snorts. Your hand just lost its most important card.'),
      delay: 3000 },
  ] : []), [
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

// ═══════════════════════════════════════
//  Brotherhood: 老周請酒 (Zhou's Drink)
// ═══════════════════════════════════════
registerNode('r3_zhou_drink', () => {
  state.flags.r3ZhouDrink = true;
  addNpcAffinity('zhou', 12);
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: npcPortrait.art('zhou', { subtitle: '倖存者' }) || `<pre class="ascii-art gold">
      ╭─────╮
     ╱ ▓  ─ ╲
     │ ╰──╯ │
     │ 🍶🍶 │
     ╱╱    ╲╲
   老周 · 倖存者
</pre>`, artEn: npcPortrait.art('zhou', { subtitle: 'Survivor' }) || `<pre class="ascii-art gold">
      ╭─────╮
     ╱ ▓  ─ ╲
     │ ╰──╯ │
     │ 🍶🍶 │
     ╱╱    ╲╲
  Zhou · Survivor
</pre>`,
      text: '老周在碼頭邊的一張歪歪扭扭的木桌旁等你。桌上擺了兩個粗陶碗和一壺混濁的液體。',
      textEn: 'Old Zhou waits at a crooked wooden table by the dock. Two crude clay bowls and a jug of murky liquid sit on top.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「坐。」他倒了兩碗。「河城的酒很爛——但至少是酒。」',
      textEn: '"Sit." He pours two bowls. "River City\'s booze is terrible — but at least it\'s booze."',
      delay: 2500 },
    { tag: '行動', tagColor: 'tag-explore',
      text: '你喝了一口。像是液態的鐵鏽混合了某種說不上來的辛辣。你咳了幾聲。老周哈哈笑了。',
      textEn: 'You take a sip. It tastes like liquid rust mixed with something indescribably spicy. You cough. Old Zhou laughs.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「第一口都是這樣。第二口就好了。」他又倒了一碗。',
      textEn: '"First sip\'s always like that. Second one\'s better." He refills your bowl.',
      delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '酒過三碗，老周的話開始多了。但不是快樂的那種多——是壓了太久終於找到出口的那種。',
      textEn: 'Three bowls in, Old Zhou starts talking more. Not the happy kind — the kind that\'s been dammed too long and finally found a crack.',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你想聽他們的名字嗎？」他忽然問。你知道他在說那十六個人。',
      textEn: '"Want to hear their names?" he asks suddenly. You know he means the sixteen.',
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '老周開始數。一個一個，慢慢地，像是在點名。「趙大柱。馬二。孫老拐。黃毛。陳半斤……」',
      textEn: 'Old Zhou begins counting. One by one, slowly, like calling roll. "Zhao Dazhu. Ma Er. Sun Laoguai. Huang Mao. Chen Banjin..."',
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '他數到第九個的時候停了。閉上眼睛想了一會。「……第十個叫什麼來著。」',
      textEn: 'He pauses at the ninth. Closes his eyes and thinks. "...What was the tenth one\'s name?"',
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '老周的眼睛紅了。不是因為酒。',
      textEn: 'Old Zhou\'s eyes redden. Not from the drink.',
      delay: 2200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「我開始忘了。」他低聲說。「十六個名字——以前背得滾瓜爛熟。現在……石化不只吃身體，也吃記憶。」',
      textEn: '"I\'m starting to forget." His voice drops. "Sixteen names — I used to know them by heart. Now... the stone doesn\'t just eat your body. It eats your memory."',
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '他把碗舉起來。「替他們喝一碗。替那些被忘記的人。」',
      textEn: 'He raises his bowl. "Drink one for them. For the ones who\'ll be forgotten."',
      delay: 2800 },
    { tag: '行動', tagColor: 'tag-explore',
      text: '你舉碗碰了他的碗。在碼頭邊，在地底城市的微光中，你們一起為十六個名字沉默。',
      textEn: 'You clink your bowl against his. On the dockside, in the underground city\'s dim glow, you share a silence for sixteen names.',
      delay: 3500, effect: function() { changeStat('wil', 1); } },
    { tag: '效果', tagColor: 'tag-system',
      text: L('WIL+1。有些重量需要兩個人才能扛。', 'WIL+1. Some weights need two people to carry.'),
      delay: 1500 },
  ], [
    { text: '返回', textEn: 'Return', action: () => loadNode('r3_look') },
  ], { label: L('碼頭一杯酒', 'A Drink at the Dock') });
});

// ═══════════════════════════════════════
//  Brotherhood: 螢 vs 銅鐘爭吵 (Ying vs Bell)
// ═══════════════════════════════════════
registerNode('r3_npc_argument', () => {
  state.flags.r3NpcArgument = true;
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: npcPortrait.art('ying', { subtitle: L('記錄員', 'Chronicler') }),
      artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }),
      text: '議會廳外的走廊傳來激烈的爭吵聲。你靠近一看——是螢和銅鐘。',
      textEn: 'Heated voices echo from the corridor outside the council hall. You approach — it\'s Ying and Bronze Bell.',
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你不能隱瞞這些！」螢的聲音在發抖，但很堅定。她手裡攥著筆記本。「下面的人有權知道真相。」',
      textEn: '"You can\'t hide this!" Ying\'s voice trembles but holds firm. She grips her notebook. "The people below deserve the truth."',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      art: npcPortrait.art('bell', { subtitle: L('議會代表', 'Council Rep') }),
      artEn: npcPortrait.art('bell', { subtitle: 'Council Rep' }),
      text: '「真相？」銅鐘冷冷地說。「你知道真相公開之後會怎樣嗎？恐慌。暴動。上面的人會直接封死所有通道。」',
      textEn: '"Truth?" Bronze Bell says coldly. "Do you know what happens after the truth goes public? Panic. Riots. The people above will seal every passage."',
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「那你的方法呢？」螢逼近一步。「繼續假裝一切都好？等石化吞噬所有人之後再寫一份漂亮的報告？」',
      textEn: '"And your method?" Ying steps closer. "Keep pretending everything\'s fine? Write a nice report after the stone swallows everyone?"',
      delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '銅鐘的石化右手微微顫抖。她攥住了它，像是不想讓別人看到。',
      textEn: 'Bronze Bell\'s petrified right hand trembles slightly. She grips it, as if not wanting anyone to see.',
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你以為我不想說嗎？」銅鐘的聲音忽然低了下去。「每天晚上我都在想——但這不是我一個人的秘密。牽涉到整個議會。」',
      textEn: '"You think I don\'t want to speak?" Bell\'s voice drops suddenly. "Every night I think about it — but this isn\'t just my secret. The entire council is involved."',
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '兩個人都沉默了。走廊裡只剩下她們急促的呼吸聲。',
      textEn: 'Both fall silent. Only their heavy breathing echoes in the corridor.',
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '螢最先開口。「……我們需要第三個人的意見。」她看向你。銅鐘也轉過頭來。',
      textEn: 'Ying speaks first. "...We need a third opinion." She looks at you. Bronze Bell turns as well.',
      delay: 2800 },
  ], [
    { text: '支持螢——公開真相', textEn: 'Side with Ying — reveal the truth',
      action: () => {
        addNpcAffinity('ying', 8);
        addNpcAffinity('bell', -3);
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc', text: '銅鐘閉上了眼睛。「……好吧。但要按我的方式公開——在議會框架內。不能引發恐慌。」', textEn: 'Bronze Bell closes her eyes. "...Fine. But we do it my way — within the council framework. No panic."', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '螢點了點頭。這是她們第一次達成共識——雖然各自讓了一步。', textEn: 'Ying nods. It\'s their first consensus — though both gave ground.', delay: 2500, effect: function() { state.flags.r3ArgumentSidedYing = true; } },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r3_look') }]);
      }},
    { text: '支持銅鐘——保守秘密', textEn: 'Side with Bell — keep it secret',
      action: () => {
        addNpcAffinity('bell', 8);
        addNpcAffinity('ying', -3);
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc', text: '螢咬住嘴唇。很久之後，她點了點頭。「……但不是永遠。等到時機成熟，我會把一切都寫出來。」', textEn: 'Ying bites her lip. After a long pause, she nods. "...But not forever. When the time comes, I\'ll write everything."', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '銅鐘伸出完好的左手，搭在螢的肩上。「我答應你。」這是她第一次在別人面前展示信任。', textEn: 'Bronze Bell reaches out with her good left hand and places it on Ying\'s shoulder. "I promise." It\'s her first public display of trust.', delay: 3000, effect: function() { state.flags.r3ArgumentSidedBell = true; } },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r3_look') }]);
      }},
    { text: '讓她們自己解決', textEn: 'Let them work it out',
      action: () => {
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '你退了一步。有些事需要她們自己面對。你聽到走廊裡的爭吵聲漸漸變小——不是因為有人贏了，是因為她們累了。', textEn: 'You step back. Some things they must face alone. The arguing fades — not because someone won, but because they\'re exhausted.', delay: 3000 },
        ], [{ text: '離開', textEn: 'Leave', action: () => loadNode('r3_look') }]);
      }},
  ], { label: L('議會外的爭吵', 'Argument Outside the Council') });
});

// ═══════════════════════════════════════
//  Brotherhood: 灰鶴 & 老周下棋 (Crane-Zhou Chess)
// ═══════════════════════════════════════
registerNode('r3_crane_zhou', () => {
  state.flags.r3CraneZhou = true;
  addNpcAffinity('crane', 5);
  addNpcAffinity('zhou', 5);
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: `<pre class="ascii-art gold">
   ╭─────────────────────╮
   │   ┌──┐    ┌──┐     │
   │   │棋│    │棋│     │
   │   └──┘    └──┘     │
   │  灰鶴  ══  老周    │
   │          🎲         │
   ╰─────────────────────╯
      碼頭 · 盡頭
</pre>`, artEn: `<pre class="ascii-art gold">
   ╭─────────────────────╮
   │   ┌──┐    ┌──┐     │
   │   │♟ │    │♟ │     │
   │   └──┘    └──┘     │
   │ Crane  ══  Zhou    │
   │          🎲         │
   ╰─────────────────────╯
      Dock · Far End
</pre>`,
      text: '碼頭盡頭，灰鶴和老周面對面坐著，中間擺了一盤用石子充當棋子的棋局。',
      textEn: 'At the far end of the dock, Grey Crane and Old Zhou sit facing each other over a board game made of pebbles.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      art: npcPortrait.art('crane', { subtitle: L('行商人', 'Merchant') }),
      artEn: npcPortrait.art('crane', { subtitle: 'Merchant' }),
      text: '灰鶴落了一子。老周瞇著眼看了一會，然後默默把她的棋子拿掉了。「你偷偷多放了一顆。」',
      textEn: 'Grey Crane places a stone. Old Zhou squints, then silently removes it. "You slipped in an extra piece."',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      art: npcPortrait.art('zhou', { subtitle: L('倖存礦工', 'Survivor') }),
      artEn: npcPortrait.art('zhou', { subtitle: 'Survivor' }),
      text: '「證據呢？」灰鶴笑嘻嘻地反問。老周把那顆石子舉到她面前：「你的棋子是黑的。這顆是深灰色。我又不瞎。」',
      textEn: '"Prove it." Crane grins. Old Zhou holds the stone up to her face: "Your pieces are black. This one\'s dark grey. I\'m not blind."',
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '灰鶴嘖了一聲，但眼睛在笑。「這招我在地表的時候就在用了，從來沒被抓到過。」',
      textEn: 'Crane clicks her tongue, eyes laughing. "I\'ve been using that trick since my surface days. Never been caught before."',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「那是因為地表的人不夠老。」老周重新擺好棋盤。「活到我這歲數，什麼花招都見過了。」',
      textEn: '"That\'s because surface folk aren\'t old enough." Old Zhou resets the board. "Live to my age, you\'ve seen every trick."',
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '你靠在碼頭的柱子上看他們下棋。灰鶴的嘴上不停——講地表的故事、碼頭的八卦、走私路線上的趣事。老周一句話也不說，只是偶爾點頭。',
      textEn: 'You lean against a dock post and watch. Crane chatters nonstop — surface tales, dock gossip, smuggling route anecdotes. Old Zhou says nothing, just nods occasionally.',
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '灰鶴忽然停下來。「周叔——你為什麼從來不問我是怎麼到地底的？」',
      textEn: 'Crane stops suddenly. "Old Zhou — how come you never ask how I ended up underground?"',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '老周落了一子。「因為到了這裡的人，沒有一個是自願的。問那幹嘛。」',
      textEn: 'Old Zhou places a piece. "Because nobody here came by choice. Why ask?"',
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '灰鶴愣了一下。然後她低下頭，用你從沒見過的認真語氣說：「……謝了，周叔。」',
      textEn: 'Crane goes still. Then she lowers her head and says in a tone you\'ve never heard from her: "...Thanks, Old Zhou."',
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '老周又落了一子。「你輸了。」灰鶴低頭一看，果然。她趁聊天的時候忘了防守。',
      textEn: 'Old Zhou places another piece. "You lose." Crane looks down — he\'s right. She forgot to defend while chatting.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「再來一局！」灰鶴立刻重置棋盤。老周嘆了口氣：「跟年輕人下棋真累。」但他沒有起身離開。',
      textEn: '"One more round!" Crane resets the board immediately. Old Zhou sighs: "Playing against young people is exhausting." But he doesn\'t get up to leave.',
      delay: 3000, effect: function() { gainXp(5); } },
    { tag: '效果', tagColor: 'tag-system',
      text: L('XP+5。有些人在地底找到了不一樣的家人。', 'XP+5. Some people find a different kind of family underground.'),
      delay: 1500 },
  ], [
    { text: '返回碼頭', textEn: 'Return to the dock', action: () => loadNode('r3_dock') },
  ], { label: L('碼頭棋局', 'Dock Chess Game') });
});

// ═══════════════════════════════════════
//  Romance: 螢的告白 (Ying's Full Confession)
// ═══════════════════════════════════════
registerNode('r3_ying_confession_full', () => {
  state.flags.r3YingConfessionFull = true;
  addNpcAffinity('ying', 10);
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: npcPortrait.art('ying', { subtitle: L('記錄員', 'Chronicler') }) || '',
      text: '螢站在河邊，手裡拿著那本你已經看過無數次的筆記本。但今天' + yingPronoun + '沒有在寫字。',
      textEn: 'Ying stands by the river, holding the notebook you\'ve seen countless times. But today ' + (isMale ? 'she' : 'he') + ' isn\'t writing.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「上次在河邊——我沒把話說完。」螢看著水面。月光在波紋上碎成無數銀色的碎片。',
      textEn: '"Last time by the river — I didn\'t finish." Ying watches the water. Moonlight shatters into silver fragments on the ripples.',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「我一直在記錄你的故事。從祭獻坑到河城——每一步、每一個選擇、每一次你差點死掉。」' + yingPronoun + '把筆記本翻到最後一頁。',
      textEn: '"I\'ve been recording your story. From the Sacrificial Pit to River City — every step, every choice, every time you nearly died." ' + (isMale ? 'She' : 'He') + ' turns to the last page.',
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「但我沒有記錄一件事。」螢的聲音開始發抖。「因為它不屬於紀錄——它只屬於我。」',
      textEn: '"But there\'s one thing I didn\'t record." Ying\'s voice starts trembling. "Because it doesn\'t belong in the records — it belongs only to me."',
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: yingPronoun + '抬起頭看著你。月光落在' + yingPronoun + '的眼睛裡，像是兩顆溺在水裡的星星。',
      textEn: (isMale ? 'She' : 'He') + ' looks up at you. Moonlight pools in ' + (isMale ? 'her' : 'his') + ' eyes like two stars drowning in water.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「從什麼時候開始的，我也不知道。也許是你分給我那塊黑麵包的時候。也許是你幫我敷草藥的時候。也許更早——你第一次在黑暗中叫我名字的時候。」',
      textEn: '"When it started, I don\'t know. Maybe when you shared that black bread. Maybe when you dressed my petrification with herbs. Maybe earlier — the first time you called my name in the dark."',
      delay: 4000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「我喜歡你。」' + yingPronoun + '說得很輕。像是怕聲音太大就會碎掉。「不是記錄員對記錄對象的好感。是……我，喜歡你。」',
      textEn: '"I like you." ' + (isMale ? 'She' : 'He') + ' says it quietly. As if afraid the words might shatter if spoken too loud. "Not a chronicler\'s fondness for the subject. It\'s... me. I like you."',
      delay: 3500 },
  ], [
    { text: '我也是。從很久以前就是了。', textEn: 'Me too. For a long time now.',
      action: () => {
        addNpcAffinity('ying', 10);
        if (typeof setRomance === 'function') setRomance('ying');
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '螢的眼淚流了下來——但' + yingPronoun + '在笑。' + yingPronoun + '用袖子擦了一下臉，然後向前走了一步。', textEn: 'Tears fall from Ying\'s eyes — but ' + (isMale ? 'she\'s' : 'he\'s') + ' smiling. ' + (isMale ? 'She' : 'He') + ' wipes ' + (isMale ? 'her' : 'his') + ' face with a sleeve, then takes a step forward.', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '把頭靠在你的肩上。你感覺到' + yingPronoun + '的體溫透過衣服傳來——比石化的身體溫暖太多了。', textEn: (isMale ? 'She' : 'He') + ' rests ' + (isMale ? 'her' : 'his') + ' head on your shoulder. You feel the warmth through your clothes — so much warmer than your petrifying body.', delay: 3500 },
          { tag: '對話', tagColor: 'tag-npc', text: '「……這一頁。我會寫上去的。」' + yingPronoun + '的聲音悶悶的。「用最漂亮的字。」', textEn: '"...This page. I\'ll write it down." ' + (isMale ? 'Her' : 'His') + ' voice is muffled. "In the most beautiful handwriting."', delay: 3000, effect: function() { changeHp(20); changePetri(-8); sfx.levelUp(); } },
          { tag: '效果', tagColor: 'tag-system', text: L('HP+20，石化-8%。你不再是一個人了。', 'HP+20, Petri-8%. You\'re no longer alone.'), delay: 1500 },
        ], [{ text: '（握住' + yingPronoun + '的手）', textEn: '(Hold ' + (isMale ? 'her' : 'his') + ' hand)', action: () => loadNode('r3_look') }]);
      }},
    { text: '對不起。我不能回應你。', textEn: 'I\'m sorry. I can\'t return your feelings.',
      action: () => {
        if (typeof breakRomance === 'function') breakRomance('ying');
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '螢沉默了很久。然後' + yingPronoun + '點了點頭。「嗯。我知道了。」' + yingPronoun + '把筆記本合上，抱在胸前。', textEn: 'Ying is silent for a long time. Then nods. "Mm. I understand." ' + (isMale ? 'She' : 'He') + ' closes the notebook and hugs it to ' + (isMale ? 'her' : 'his') + ' chest.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「但我還是會記錄你的故事。」' + yingPronoun + '轉過身去。「因為那是好的故事。不管結局怎樣。」', textEn: '"But I\'ll still record your story." ' + (isMale ? 'She' : 'He') + ' turns away. "Because it\'s a good story. No matter the ending."', delay: 3000 },
        ], [{ text: '（目送' + yingPronoun + '離開）', textEn: '(Watch ' + (isMale ? 'her' : 'him') + ' leave)', action: () => loadNode('r3_look') }]);
      }},
  ], { label: L('月光告白', 'Moonlight Confession') });
});

// ═══════════════════════════════════════
//  Romance: 螢的離別 (Ying's Farewell)
// ═══════════════════════════════════════
registerNode('r3_ying_farewell', () => {
  state.flags.r3YingFarewell = true;
  addNpcAffinity('ying', 5);
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: npcPortrait.art('ying', { subtitle: L('記錄員', 'Chronicler') }) || '',
      text: '螢站在通往議會大廳的走廊盡頭。' + yingPronoun + '手裡攥著筆記本——攥得太緊了，指節都發白了。',
      textEn: 'Ying stands at the end of the corridor leading to the council hall. ' + (isMale ? 'She' : 'He') + ' grips the notebook so tight ' + (isMale ? 'her' : 'his') + ' knuckles are white.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你答應過我的。」' + yingPronoun + '沒有看你，眼睛盯著走廊盡頭的門。',
      textEn: '"You promised me." ' + (isMale ? 'She' : 'He') + ' doesn\'t look at you, eyes fixed on the door at the corridor\'s end.',
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你說過——等一切結束了，你會幫我校對這本書。」' + yingPronoun + '的聲音在發抖。「所以你必須回來。」',
      textEn: '"You said — when this is all over, you\'d help proofread this book." ' + (isMale ? 'Her' : 'His') + ' voice shakes. "So you have to come back."',
      delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense',
      text: yingPronoun + '終於轉過頭來。' + yingPronoun + '的眼眶是紅的，但沒有哭。',
      textEn: (isMale ? 'She' : 'He') + ' finally turns to face you. ' + (isMale ? 'Her' : 'His') + ' eyes are red, but no tears fall.',
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「去吧。」' + yingPronoun + '退了一步，讓出了路。「我在這裡等你。」',
      textEn: '"Go." ' + (isMale ? 'She' : 'He') + ' steps aside, clearing the way. "I\'ll wait here."',
      delay: 2500, effect: function() { changeHp(10); changePetri(-3); } },
    { tag: '效果', tagColor: 'tag-system',
      text: L('HP+10，石化-3%。有人在等你回來。', 'HP+10, Petri-3%. Someone is waiting for you to return.'),
      delay: 1500 },
  ], [
    { text: '我會回來的', textEn: 'I\'ll come back', action: () => loadNode('r3_boss') },
  ], { label: L('離別', 'Farewell') });
});

// ═══════════════════════════════════════
//  Romance: 灰鶴的屋頂 (Crane's Rooftop)
// ═══════════════════════════════════════
registerNode('r3_crane_rooftop', () => {
  state.flags.r3CraneRooftop = true;
  addNpcAffinity('crane', 12);
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      text: '灰鶴帶你爬上河城一棟老舊倉庫的屋頂。頭頂是巨大的岩洞穹頂，鑲嵌著密密麻麻的石化結晶——在遠處看起來竟然有點像星空。',
      textEn: 'Crane leads you up to the roof of an old warehouse. Overhead stretches the vast cavern dome, studded with petrification crystals — from this distance, they almost look like stars.',
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「這是我在河城最喜歡的地方。」她坐在屋頂邊緣，雙腿懸空。「假裝自己在地表看星星。」',
      textEn: '"This is my favorite place in River City." She sits at the roof\'s edge, legs dangling. "Pretending I\'m on the surface watching stars."',
      delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '你坐在她旁邊。從這個高度看下去，河城的燈火像是一條發光的蛇，沿著地下河蜿蜒。',
      textEn: 'You sit beside her. From this height, River City\'s lights look like a glowing serpent winding along the underground river.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「我在地表的名字叫秋蘅。」她忽然說。你已經知道了——但她不知道你知道。「灰鶴是我到地底以後給自己取的。因為灰鶴不需要家。」',
      textEn: '"My surface name is Qiu Heng." She says it abruptly. You already know — but she doesn\'t know you know. "Grey Crane is the name I gave myself underground. Because cranes don\'t need homes."',
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '她把膝蓋抱起來。你第一次看到灰鶴不笑的臉——不是冷，是疲憊。像是背了太久太重的行囊終於放下來的那一刻。',
      textEn: 'She hugs her knees. For the first time you see Crane\'s face without a smile — not cold, just tired. Like finally setting down a pack carried too long.',
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「等這些事結束了——如果我們都還活著的話。」她看著頭頂的假星空。「你要不要一起……回地表？」',
      textEn: '"When this is over — if we\'re both still alive." She looks at the fake stars above. "Do you want to... go back to the surface? Together?"',
      delay: 3500 },
  ], [
    { text: '我想。跟你一起。', textEn: 'I\'d like that. With you.',
      action: () => {
        addNpcAffinity('crane', 5);
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '灰鶴愣了一下。然後她笑了——但這次的笑完全不同。不是行商人的假笑，不是骰桌上的得意，而是一個叫秋蘅的女人的、很輕很真的微笑。', textEn: 'Crane freezes. Then she smiles — but this time it\'s completely different. Not the merchant\'s grin, not the dice table smirk, but a gentle, genuine smile from a woman named Qiu Heng.', delay: 3500 },
          { tag: '對話', tagColor: 'tag-npc', text: '「那說好了。」她伸出小指。「地底的人用這個——勾一下就算立誓了。別反悔。」', textEn: '"Then it\'s a deal." She extends her pinky. "Underground people use this — one hook and it\'s an oath. No take-backs."', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '你勾住了她的小指。她的手指佈滿了繭和疤痕——但很溫暖。', textEn: 'You hook her pinky. Her fingers are calloused and scarred — but warm.', delay: 2800, effect: function() { changeHp(15); changePetri(-5); } },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r3_look') }]);
      }},
    { text: '我還不確定', textEn: 'I\'m not sure yet',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc', text: '灰鶴點了點頭。「嗯。也不急。」她站起來拍掉身上的灰。但你注意到她的手指收進了袖子裡。', textEn: 'Crane nods. "Mm. No rush." She stands and dusts herself off. But you notice her fingers disappear into her sleeves.', delay: 2800 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r3_look') }]);
      }},
  ], { label: L('屋頂的星空', 'Rooftop Stars') });
});

// ═══════════════════════════════════════
//  Romance: 灰鶴的告白 (Crane's Confession)
// ═══════════════════════════════════════
registerNode('r3_crane_confession', () => {
  state.flags.r3CraneConfession = true;
  addNpcAffinity('crane', 10);
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: npcPortrait.art('crane', { subtitle: L('秋蘅', 'Qiu Heng') }) || '',
      text: '灰鶴站在碼頭最遠的角落，背對著河城的燈火。她聽到你的腳步聲，沒有回頭。',
      textEn: 'Grey Crane stands at the farthest corner of the dock, back to River City\'s lights. She hears your footsteps but doesn\'t turn around.',
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「我一直在逃。」她的聲音很平靜。「從地表逃到地底，從東區逃到西區，從一個身分逃到另一個身分。」',
      textEn: '"I\'ve been running." Her voice is calm. "From the surface to underground, from east to west, from one identity to the next."',
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '她轉過身。你看到她把長袖捲了上去——那些刀疤全部暴露在碼頭的燈光下。她沒有遮掩。',
      textEn: 'She turns around. You see she\'s rolled up her sleeves — every scar exposed under the dock light. No hiding.',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「但是你讓我想停下來。」她走近一步。「我不知道這叫什麼——感恩、依賴、還是別的什麼。」',
      textEn: '"But you make me want to stop." She steps closer. "I don\'t know what this is called — gratitude, dependence, or something else."',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '又走近一步。你能看清她嘴唇微微顫抖。',
      textEn: 'Another step. You can see her lips tremble slightly.',
      delay: 2000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「……但我覺得那叫喜歡。」灰鶴——不，秋蘅——第一次用這麼脆弱的語氣說話。「我一直在逃。但是你讓我想停下來。」',
      textEn: '"...But I think it\'s called \'like\'." Grey Crane — no, Qiu Heng — speaks in a vulnerability you\'ve never heard. "I\'ve been running all my life. But you make me want to stop."',
      delay: 3500 },
  ], [
    { text: '那就停下來。我接住你。', textEn: 'Then stop. I\'ll catch you.',
      action: () => {
        addNpcAffinity('crane', 10);
        if (typeof setRomance === 'function') setRomance('crane');
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '秋蘅抓住了你的手——用力到你能感覺到她每一道疤痕的紋路壓在你的掌心裡。', textEn: 'Qiu Heng grabs your hand — so hard you feel every scar ridge pressed into your palm.', delay: 2800 },
          { tag: '感知', tagColor: 'tag-sense', text: '她沒有哭。灰鶴不會哭。但她的手在發抖——像一隻終於肯停下來的鳥，不知道怎麼收翅膀。', textEn: 'She doesn\'t cry. Grey Crane doesn\'t cry. But her hand shakes — like a bird that finally wants to land, but has forgotten how to fold its wings.', delay: 3500 },
          { tag: '對話', tagColor: 'tag-npc', text: '「……謝謝。」她靠在你的肩上。她的體重意外地輕——走了太多路的人都是這樣。', textEn: '"...Thank you." She leans against your shoulder. She\'s lighter than expected — people who\'ve traveled too far always are.', delay: 3000, effect: function() { changeHp(20); changePetri(-8); sfx.levelUp(); } },
          { tag: '效果', tagColor: 'tag-system', text: L('HP+20，石化-8%。她不再逃了。', 'HP+20, Petri-8%. She\'s done running.'), delay: 1500 },
        ], [{ text: '（握緊她的手）', textEn: '(Hold her hand tight)', action: () => loadNode('r3_look') }]);
      }},
    { text: '秋蘅……我不能回應你。', textEn: 'Qiu Heng... I can\'t return your feelings.',
      action: () => {
        if (typeof breakRomance === 'function') breakRomance('crane');
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '秋蘅愣了一秒。然後她的笑容又回來了——但你已經能分辨那個笑是真的還是假的了。這次是假的。', textEn: 'Qiu Heng freezes for a second. Then the grin returns — but you can tell real from fake now. This one is fake.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「嘿——灰鶴可不是會在一棵樹上吊死的鳥。」她聳聳肩。轉身時，你看到她把袖子拉了回去。', textEn: '"Hey — Grey Crane\'s not the type to hang from one tree." She shrugs. As she turns, you see her pull her sleeves back down.', delay: 3000 },
        ], [{ text: '（目送她離開）', textEn: '(Watch her leave)', action: () => loadNode('r3_look') }]);
      }},
  ], { label: L('灰鶴的告白', 'Crane\'s Confession') });
});

// ═══════════════════════════════════════
//  NG+ Romance: 叫出灰鶴的真名 (Calling Crane's Real Name)
// ═══════════════════════════════════════
registerNode('r3_crane_ng_name', () => {
  state.flags.r3CraneNgName = true;
  addNpcAffinity('crane', 12);
  autoExplore([
    { tag: '場景', tagColor: 'tag-sense',
      art: npcPortrait.art('crane', { subtitle: L('秋蘅', 'Qiu Heng') }) || '',
      text: '灰鶴正在整理貨物。你走到她身邊——然後你叫了一個她還沒有告訴過你的名字。',
      textEn: 'Grey Crane is sorting goods. You walk up beside her — then call a name she hasn\'t told you yet.',
      delay: 2800 },
    { tag: '行動', tagColor: 'tag-move',
      text: '「秋蘅。」',
      textEn: '"Qiu Heng."',
      delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '她的動作凍結了。',
      textEn: 'She freezes.',
      delay: 1500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '不是驚訝。不是戒備。是一種比那更深的恐懼——被看穿最後一層偽裝的恐懼。',
      textEn: 'Not surprise. Not wariness. A deeper fear — the fear of being stripped of the very last disguise.',
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你——」她的聲音啞了。一隻手下意識地攥住前臂——那些刀疤的位置。「你怎麼——我從來沒——」',
      textEn: '"You—" Her voice cracks. One hand instinctively grips her forearm — where the scars are. "How did you — I never—"',
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '她退了一步。像一隻被逼到角落的鳥。',
      textEn: 'She backs up a step. Like a bird cornered.',
      delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '你沒有追上去。你站在原地，看著她。眼神裡沒有任何威脅——只有某種跨越了很長時間的溫柔。',
      textEn: 'You don\'t follow. You stand still, watching her. No threat in your eyes — only a tenderness that has crossed a very long time.',
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「……迴廊裡的那次。你看穿我的藏牌手法。我以為那已經夠離譜了。」灰鶴的聲音在發抖。「現在你連我的名字都知道。」',
      textEn: '"...Back in the corridor. You saw through my card trick. I thought that was insane enough." Crane\'s voice trembles. "Now you even know my name."',
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '她直直地看著你。眼眶微紅——但灰鶴不哭。灰鶴從來不哭。',
      textEn: 'She stares straight at you. Eyes reddening — but Crane doesn\'t cry. Crane never cries.',
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: '「你到底是什麼人？」這次的問法和迴廊裡不一樣。不是質問。是懇求。',
      textEn: '"What are you?" This time it\'s different from the corridor. Not a demand. A plea.',
      delay: 2800 },
  ], [
    { text: '「上一世，是你自己告訴我的。在這同一片碼頭上。」', textEn: '"In the last life, you told me yourself. On this very dock."',
      action: () => {
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '灰鶴沉默了很久。碼頭的燈火在她臉上投下搖曳的光——你看到她的表情一點一點從防備變成了別的什麼。', textEn: 'Crane is silent for a long time. Dock lights cast flickering shadows on her face — you watch her expression shift, slowly, from guard to something else.', delay: 3500 },
          { tag: '對話', tagColor: 'tag-npc', text: '「上一世。」她重複了一遍。像是在品嚐這兩個字的重量。', textEn: '"The last life." She repeats it. As if tasting the weight of those words.', delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc', text: '「所以——在那個『上一世』裡——你知道我全部的事。刀疤。債務。秋蕓。我逃了多遠、躲了多久。」', textEn: '"So — in that \'last life\' — you knew everything about me. The scars. The debts. Qiu Yun. How far I ran, how long I hid."', delay: 3500 },
          { tag: '感知', tagColor: 'tag-sense', text: '她走近了一步。這次不是後退——是主動靠近。', textEn: 'She steps closer. Not retreating this time — approaching.', delay: 2200 },
          { tag: '對話', tagColor: 'tag-npc', text: '「然後你還是站在這裡。」她的聲音碎了一個角。「看完了全部的我——還是站在這裡。」', textEn: '"And you\'re still standing here." Her voice cracks at the edge. "Saw all of me — and still standing here."', delay: 3200 },
          { tag: '感知', tagColor: 'tag-sense', text: '她伸出手——這次不是攥住你的手腕，是輕輕地，掌心朝上。', textEn: 'She extends her hand — this time not grabbing your wrist, but gently, palm up.', delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc', text: '「那這一世——你還願意接住我嗎？」灰鶴的眼淚終於掉了下來。一滴。只有一滴。「灰鶴不哭的。但秋蘅可以。」', textEn: '"Then this life — will you catch me again?" Crane\'s tear finally falls. One drop. Just one. "Grey Crane doesn\'t cry. But Qiu Heng can."', delay: 3500, effect: function() { sfx.levelUp(); } },
        ], [{ text: '（握住她的手。握得比上一世更緊。）', textEn: '(Take her hand. Hold it tighter than last time.)', action: () => {
          changeHp(25);
          changePetri(-10);
          changeStat('wil', 1);
          notify(L('HP +25，石化度 -10%，意志 +1（秋蘅可以哭）', 'HP +25, Petri -10%, WIL +1 (Qiu Heng can cry)'));
          loadNode('r3_crane');
        }}]);
      }},
    { text: '「你不需要知道原因。你只需要知道——我不會離開。」', textEn: '"You don\'t need to know why. You just need to know — I\'m not leaving."',
      action: () => {
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '灰鶴盯著你。像是在找一絲說謊的痕跡——但她找不到。', textEn: 'Crane stares at you. Searching for a trace of deception — and finding none.', delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc', text: '「……你真的很奇怪。」她的嘴角抽動了一下——不是假笑，是一種忍住眼淚的笑。', textEn: '"...You\'re really strange." Her lips twitch — not a false grin, but the kind of smile that holds back tears.', delay: 3000 },
          { tag: '對話', tagColor: 'tag-npc', text: '「但我不討厭。」她用力擦了一下眼角。「秋蘅不討厭奇怪的人。」', textEn: '"But I don\'t hate it." She rubs her eyes hard. "Qiu Heng doesn\'t hate strange people."', delay: 2800 },
        ], [{ text: '（陪她站在碼頭，直到燈火熄滅。）', textEn: '(Stand with her at the dock until the lights go out.)', action: () => {
          changeHp(20);
          changePetri(-8);
          notify(L('HP +20，石化度 -8%（秋蘅不討厭奇怪的人）', 'HP +20, Petri -8% (Qiu Heng doesn\'t hate strange people)'));
          loadNode('r3_crane');
        }}]);
      }},
  ], { label: L('叫出真名', 'Calling Her Name') });
});
