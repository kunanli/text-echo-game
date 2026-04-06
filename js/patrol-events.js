// ══ Patrol Narrative Events — 12 random events across 4 regions ══
// Loaded AFTER patrol.js. Each event registers itself via registerPatrolEvents().
// Events trigger during patrol with 25% chance, replacing combat. Each fires once per playthrough.

// ═══════════════════════════════════════════════════
//  R0 — 祭獻坑 Events (3)
// ═══════════════════════════════════════════════════

var R0_EVENTS = [

  // ── r0_statue: 石化雕像求救 (Moral) ──
  {
    id: 'r0_statue', flag: '_evt_r0_statue', region: 0,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('你聽到一陣微弱的、斷斷續續的聲音——像是有人在呻吟。',
                'You hear a faint, intermittent sound — like someone moaning.'),
        delay: 2200, pending: true });
      queue.push({ art: [
        '         ╭──────╮',
        '        ╱ ░░░░░░ ╲',
        '       │  ◉    ·  │',
        '       │   ╰──╯   │',
        '       │ ░░░░░░░░ │',
        '      ╱│ ░  ╲╱  ░ │╲',
        '     ╱ │ ░░░░░░░░ │ ╲',
        '    ╱  ╰──────────╯  ╲',
        '   ╱  ░░░░░░░░░░░░░░  ╲',
        '  ╱░░░░░░░░░░░░░░░░░░░░╲',
        '  ████████████████████████',
      ], artClass: '', delay: 2000 });
      queue.push({ tag: L('事件','Event'), color: 'tag-event',
        text: L('一座半石化的雕像微微顫動。它的眼睛——還有意識！石化的嘴唇艱難地擠出聲音：「……救……我……」',
                'A half-petrified statue trembles. Its eyes — still conscious! Petrified lips strain to whisper: "...help...me..."'),
        delay: 3000 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('你要怎麼做？', 'What do you do?'),
        choices: [
          { text: L('嘗試撬開石殼 [力量]', 'Try to pry open the shell [STR]'),
            textEn: 'Try to pry open the shell [STR]',
            action: function() {
              var result = statCheck('str', 6);
              if (result !== 'fail') {
                addItem(L('石心碎片', 'Stone Heart Shard'));
                changePetri(3);
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你用力撬開了一片石殼！裡面掉出一塊溫熱的碎片——石心碎片。但石化粉塵沾上了你的手。',
                    'You pry open a piece of the shell! A warm shard falls out — a Stone Heart Shard. But petri-dust coats your hands.'), false);
                sfx.item();
              } else {
                changePetri(5);
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你使盡全力，但石殼紋絲不動。掙扎中揚起的石化粉塵沾滿了你的臉。',
                    'You strain with all your might, but the shell won\'t budge. Petri-dust billows into your face.'), false);
                sfx.fail();
              }
              patrolAppend(L('事件','Event'), 'tag-event',
                L('雕像的眼睛緩緩閉上，不再動了。', 'The statue\'s eyes slowly close. It moves no more.'), false);
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('走開', 'Walk away'),
            textEn: 'Walk away',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你移開視線，繼續前進。身後的呻吟聲漸漸消失。',
                  'You look away and move on. The moaning fades behind you.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },

  // ── r0_crack_light: 裂縫微光 (Exploration) ──
  {
    id: 'r0_crack_light', flag: '_evt_r0_crack_light', region: 0,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('牆壁的裂縫中透出一絲微弱的光芒——不是石化的冷光，是溫暖的橙色。',
                'A faint glow seeps through a crack in the wall — not the cold light of petrification, but a warm orange.'),
        delay: 2500, pending: true });
      queue.push({ art: [
        '    ██████████████████████████',
        '    ████████╱    ╲████████████',
        '    ██████╱  ·✦·  ╲██████████',
        '    █████│  ✦    ✦ │█████████',
        '    █████╲  ·✦·  ╱██████████',
        '    ████████╲    ╱████████████',
        '    ██████████████████████████',
      ], artClass: '', delay: 1800 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('裂縫很窄，但你或許能鑽進去。', 'The crack is narrow, but you might squeeze through.'),
        choices: [
          { text: L('鑽入裂縫 [敏捷]', 'Squeeze in [AGI]'),
            textEn: 'Squeeze in [AGI]',
            action: function() {
              var result = statCheck('agi', 7);
              if (result !== 'fail') {
                changeHp(8);
                addItem(L('黑麵包', 'Black Bread'));
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你側身擠過裂縫，發現一個小小的藏身處。角落裡有人留下的補給——一塊黑麵包和一灘乾淨的水。你喝了幾口，感覺好多了。',
                    'You squeeze through and find a tiny shelter. Someone left supplies — a loaf of black bread and a pool of clean water. You drink, feeling refreshed.'), false);
                sfx.item();
              } else {
                changeHp(-5);
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你卡在了裂縫中間，尖銳的石壁劃傷了你的手臂。好不容易掙脫出來，光源已經消失了。',
                    'You get stuck halfway through. Sharp rock scrapes your arm. By the time you wriggle free, the light has vanished.'), false);
                sfx.hurt();
              }
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('不冒險', 'Don\'t risk it'),
            textEn: 'Don\'t risk it',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你決定不冒險，繼續前進。那道光漸漸暗了下去。',
                  'You decide not to risk it and move on. The light slowly dims.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },

  // ── r0_singer: 遠方歌聲 (Atmosphere) ──
  {
    id: 'r0_singer', flag: '_evt_r0_singer', region: 0,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('你聽見了歌聲。微弱的、悲傷的旋律，從深處傳來。不像是怪物——是人聲。',
                'You hear singing. A faint, mournful melody drifting from the depths. Not a monster — a human voice.'),
        delay: 2500, pending: true });
      queue.push({ art: [
        '                  ♪',
        '        ♫    ♪        ♪',
        '     ♪          ♫',
        '          ♪           ♫',
        '    ╭────────────────────╮',
        '    │   ░░  ╭──╮  ░░░░  │',
        '    │  ░░░  │◉◉│  ░░░░░ │',
        '    │ ░░░░  ╰──╯  ░░░░░ │',
        '    │░░░░░░░░░░░░░░░░░░░│',
        '    ╰────────────────────╯',
      ], artClass: '', delay: 2000 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('歌聲來自一條側通道。你要跟隨嗎？', 'The singing comes from a side passage. Do you follow?'),
        choices: [
          { text: L('跟隨歌聲', 'Follow the singing'),
            textEn: 'Follow the singing',
            action: function() {
              changePetri(2);
              changeStat('wil', 1);
              patrolAppend(L('事件','Event'), 'tag-event',
                L('你循著歌聲走進側道，發現一個完全石化的身影——坐在牆邊，嘴巴微張，彷彿在歌唱的最後一刻被凝固。她的手中緊握著一枚刻有符文的石牌。你輕輕取下。',
                  'You follow the voice into a side passage and find a fully petrified figure — seated against the wall, mouth slightly open, frozen mid-song. She clutches a rune-carved stone tablet. You gently take it.'), false);
              patrolAppend(L('系統','SYS'), 'tag-system',
                L('意志 +1（石化歌者的遺志觸動了你）  石化 +2%',
                  'WIL +1 (The petrified singer\'s resolve touches you)  Petri +2%'), false);
              sfx.item();
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('不去', 'Ignore it'),
            textEn: 'Ignore it',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你搖搖頭，繼續前進。歌聲在你身後漸漸消散，像是一場夢。',
                  'You shake your head and move on. The singing fades behind you, like a dream.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },
];

registerPatrolEvents(0, R0_EVENTS);

// ═══════════════════════════════════════════════════
//  R1 — 石脈迴廊 Events (3)
// ═══════════════════════════════════════════════════

var R1_EVENTS = [

  // ── r1_cat: 未石化的貓 (Relationship) ──
  {
    id: 'r1_cat', flag: '_evt_r1_cat', region: 1,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('你聽見一陣輕柔的「喵——」。在這地底深處，竟然有活的動物？',
                'You hear a soft "meow—" In the depths underground, a living animal?'),
        delay: 2200, pending: true });
      queue.push({ art: [
        '            ╱╲  ╱╲',
        '           ╱  ╲╱  ╲',
        '          │  ◉  ◉  │',
        '          │   ╰╯   │',
        '          │  ╰──╯  │',
        '         ╱╱╲╱╲╱╲╱╲╲',
        '        ╱╱          ╲╲',
        '       ╱╱  ╱╲    ╱╲  ╲╲',
        '           ╰╯    ╰╯',
        '          ~~~tail~~~',
      ], artClass: '', delay: 2000 });
      queue.push({ tag: L('事件','Event'), color: 'tag-event',
        text: L('一隻灰色的小貓從礦車底下鑽出來。它的毛有些髒，但完全沒有石化——在這個地底世界，這幾乎是奇蹟。它歪著頭看你，發出咕嚕聲。',
                'A small grey cat crawls out from under a minecart. Its fur is dirty, but completely free of petrification — almost miraculous down here. It tilts its head at you, purring.'),
        delay: 3000 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('你要餵牠嗎？', 'Do you want to feed it?'),
        choices: [
          { text: hasItem(L('黑麵包', 'Black Bread'))
              ? L('餵牠黑麵包', 'Feed it black bread')
              : L('把手伸過去', 'Reach out your hand'),
            textEn: hasItem(L('黑麵包', 'Black Bread'))
              ? 'Feed it black bread'
              : 'Reach out your hand',
            action: function() {
              if (hasItem(L('黑麵包', 'Black Bread'))) {
                removeItem(L('黑麵包', 'Black Bread'));
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你掰了一小塊黑麵包放在地上。小貓湊過來小口小口地吃了起來。它吃飽後蹭了蹭你的腿，喵了一聲，然後跳上礦車軌道，朝你前進的方向跑去。',
                    'You break off a piece of black bread. The cat nibbles it daintily. After eating, it rubs against your leg, meows once, then hops onto the mine rail, running ahead in your direction.'), false);
              } else {
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你蹲下身，伸出手。小貓猶豫了一下，然後慢慢靠過來，用頭蹭了蹭你的指尖。它的身體溫暖得不可思議。它喵了一聲，跳上礦車軌道，朝你前進的方向跑去。',
                    'You crouch and extend your hand. The cat hesitates, then slowly approaches and nuzzles your fingertips. Its body is impossibly warm. It meows once, hops onto the rail, and runs ahead.'), false);
              }
              state.flags.r1CatFed = true;
              patrolAppend(L('系統','SYS'), 'tag-system',
                L('牠似乎決定跟著你了。（巡邏戰鬥中，貓會分散敵人注意，受傷 -10%）',
                  'It seems to have decided to follow you. (During patrol, the cat distracts enemies: damage taken -10%)'), false);
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('不理牠', 'Ignore it'),
            textEn: 'Ignore it',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你沒有停留。小貓目送你走遠，然後鑽回礦車底下。',
                  'You don\'t stop. The cat watches you go, then crawls back under the minecart.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },

  // ── r1_minecart: 失控礦車 (Tension) ──
  {
    id: 'r1_minecart', flag: '_evt_r1_minecart', region: 1,
    buildQueue: function(queue) {
      queue.push({ tag: L('警告','WARN'), color: 'tag-warn',
        text: L('頭頂傳來金屬摩擦的尖嘯——軌道上有東西在滑動！',
                'A metallic shriek from above — something is sliding along the rails!'),
        delay: 2000, pending: true });
      queue.push({ art: [
        '    ══════════════════════════',
        '            ╔═══╗  →→→',
        '           ╱║▓▓▓║╲   →→',
        '          ╱ ║▓▓▓║ ╲    →',
        '         ╱  ╚═══╝  ╲',
        '        ╱  ○      ○  ╲',
        '    ══════════════════════════',
      ], artClass: '', delay: 1500 });
      queue.push({ tag: L('事件','Event'), color: 'tag-combat',
        text: L('一輛滿載碎石的礦車從斜坡上衝下來，直朝你的方向！',
                'A minecart loaded with rubble hurtles down the slope straight at you!'),
        delay: 2000, sfx: 'click' });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-warn',
        text: L('怎麼辦？！', 'What do you do?!'),
        choices: [
          { text: L('閃開！ [敏捷]', 'Dodge! [AGI]'),
            textEn: 'Dodge! [AGI]',
            action: function() {
              var result = statCheck('agi', 7);
              if (result !== 'fail') {
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你側身一滾，礦車擦著你的肩膀呼嘯而過！碎石飛濺，但你毫髮無傷。',
                    'You roll aside as the cart screams past your shoulder! Rubble flies everywhere, but you\'re unscathed.'), false);
                sfx.pass();
              } else {
                changeHp(-8);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你閃避不及，礦車的邊緣狠狠撞上你的腰側！疼痛讓你差點跪倒。',
                    'Too slow! The cart\'s edge slams into your side! Pain nearly drops you to your knees.'), false);
                sfx.hurt();
              }
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('攔住它！ [力量]', 'Stop it! [STR]'),
            textEn: 'Stop it! [STR]',
            action: function() {
              var result = statCheck('str', 7);
              if (result !== 'fail') {
                addItem(L('淨化藥劑', 'Purification Elixir'));
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你紮穩腳步，雙手死死卡住車輪！金屬嘎吱作響，礦車終於停了下來。車裡除了碎石，還有一瓶完好的淨化藥劑。',
                    'You plant your feet and jam the wheels! Metal screams as the cart grinds to a halt. Among the rubble — an intact Purification Elixir.'), false);
                sfx.pass();
              } else {
                changeHp(-10);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你伸手去擋——但慣性太大了！礦車把你撞飛出去，重重摔在地上。',
                    'You reach out to block — but the momentum is too much! The cart sends you flying.'), false);
                sfx.hurt();
              }
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },

  // ── r1_mirror: 完整鏡子 (Narrative) ──
  {
    id: 'r1_mirror', flag: '_evt_r1_mirror', region: 1,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('牆壁上嵌著一面鏡子——完整的、未碎的鏡子。在這個一切都在崩壞的地底，這太不尋常了。',
                'A mirror is set into the wall — unbroken, intact. In this crumbling underground, that\'s deeply unusual.'),
        delay: 2500, pending: true });
      queue.push({ art: [
        '     ╭══════════════════╮',
        '     ║  ╭────────────╮  ║',
        '     ║  │  ·  ░░  ·  │  ║',
        '     ║  │ ░░░░░░░░░░ │  ║',
        '     ║  │ ░  ◉  ◉  ░ │  ║',
        '     ║  │ ░   ──   ░ │  ║',
        '     ║  │ ░░░░░░░░░░ │  ║',
        '     ║  │  ░░░░░░░░  │  ║',
        '     ║  ╰────────────╯  ║',
        '     ╰══════════════════╯',
      ], artClass: '', delay: 2000 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('你要注視鏡中的自己嗎？', 'Do you want to gaze at your reflection?'),
        choices: [
          { text: L('注視鏡子 [意志]', 'Gaze into it [WIL]'),
            textEn: 'Gaze into it [WIL]',
            action: function() {
              patrolAppend(L('事件','Event'), 'tag-event',
                L('你走上前，看向鏡中——', 'You step forward and look—'), false);
              patrolAppend(L('事件','Event'), 'tag-petri',
                L('鏡中的你，石化紋路遠比現實中更深。半張臉已經變成灰色的石頭，眼中閃爍著冰冷的光。那不是你的未來——那是你「可能」的未來。',
                  'Your reflection\'s petrification is far worse than reality. Half the face is grey stone, eyes gleaming with cold light. Not your future — but a *possible* future.'), false);
              var result = statCheck('wil', 6);
              if (result !== 'fail') {
                changeStat('wil', 1);
                patrolAppend(L('系統','SYS'), 'tag-system',
                  L('你咬緊牙關：「我不會變成那樣。」意志 +1',
                    'You clench your jaw: "I won\'t become that." WIL +1'), false);
              } else {
                changePetri(3);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('恐懼像冰水一樣灌入你的胸口。你匆忙離開，但那個畫面揮之不去。石化 +3%',
                    'Fear floods your chest like ice water. You hurry away, but the image lingers. Petri +3%'), false);
                sfx.petri();
              }
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('不看', 'Look away'),
            textEn: 'Look away',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你偏過頭，快步走過。有些東西，不看更好。',
                  'You turn your head and walk quickly past. Some things are better left unseen.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },
];

registerPatrolEvents(1, R1_EVENTS);

// ═══════════════════════════════════════════════════
//  R2 — 大採石場 Events (3)
// ═══════════════════════════════════════════════════

var R2_EVENTS = [

  // ── r2_vending: 古代自動販賣機 (Humor) ──
  {
    id: 'r2_vending', flag: '_evt_r2_vending', region: 2,
    buildQueue: function(queue) {
      queue.push({ tag: L('發現','Found'), color: 'tag-item',
        text: L('你注意到牆角有一台……機器？金屬外殼佈滿鏽跡，但指示燈居然還在閃爍。',
                'You notice a... machine in the corner? Its metal casing is covered in rust, but indicator lights still blink.'),
        delay: 2200, pending: true });
      queue.push({ art: [
        '      ╔══════════════╗',
        '      ║  ╭────────╮  ║',
        '      ║  │ ◆  ◇  ◆│  ║',
        '      ║  │ ◇  ◆  ◇│  ║',
        '      ║  │ ◆  ◇  ◆│  ║',
        '      ║  ╰────────╯  ║',
        '      ║   [̲ ̲ ̲ ̲ ̲ ̲]    ║',
        '      ║  ╭──╮ ░░░░░  ║',
        '      ║  │○○│  PUSH  ║',
        '      ║  ╰──╯        ║',
        '      ╚══════════════╝',
      ], artClass: '', delay: 2000 });
      queue.push({ tag: L('事件','Event'), color: 'tag-event',
        text: L('這是某種古代自動販賣機。投幣口上方刻著模糊的符文——看起來需要投入金幣。',
                'Some kind of ancient vending machine. Worn runes above the coin slot suggest it requires gold coins.'),
        delay: 2500 });
      var gold = state.flags.gold || 0;
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('投入金幣嗎？（持有：' + gold + '）', 'Insert coins? (You have: ' + gold + ')'),
        choices: [
          { text: L('投入 5 金幣', 'Insert 5 gold'),
            textEn: 'Insert 5 gold',
            action: function() {
              var currentGold = state.flags.gold || 0;
              if (currentGold < 5) {
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你翻遍口袋——金幣不夠。機器發出不滿的嗡嗡聲。',
                    'You search your pockets — not enough gold. The machine buzzes disapprovingly.'), false);
                patrolTimers.push(setTimeout(runPatrolCycle, 2000));
                return;
              }
              state.flags.gold = currentGold - 5;
              if (Math.random() < 0.5) {
                // Win — random item
                var items = [
                  { zh: '淨化藥劑', en: 'Purification Elixir' },
                  { zh: '黑麵包', en: 'Black Bread' },
                  { zh: '微光石', en: 'Glowstone' },
                ];
                var item = items[rng(0, items.length - 1)];
                addItem(L(item.zh, item.en));
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('叮！機器震動了幾下，出貨口掉出一個東西——是' + item.zh + '！古代人的技術真不可思議。',
                    'Ding! The machine shudders and something drops into the slot — a ' + item.en + '! Ancient technology is remarkable.'), false);
                sfx.item();
              } else {
                // Lose — machine eats money + petri dust
                changePetri(2);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('機器發出刺耳的嘎嘎聲——然後「噗」地噴出一團石化粉塵！你連忙後退，但粉塵已經沾上了你的臉。5 金幣就這樣沒了。',
                    'The machine makes a horrible grinding noise — then "poof!" blasts a cloud of petri-dust! You stumble back, but it\'s already on your face. 5 gold, wasted.'), false);
                sfx.petri();
              }
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('不投', 'Leave it'),
            textEn: 'Leave it',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你明智地決定不相信一台鏽跡斑斑的古代機器。',
                  'You wisely decide not to trust a rust-covered ancient machine.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },

  // ── r2_storyteller: 營火說書人 (Intel) ──
  {
    id: 'r2_storyteller', flag: '_evt_r2_storyteller', region: 2,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('前方有火光。不是石化的冷光——是營火。有人在營火旁說話。',
                'Firelight ahead. Not the cold glow of petrification — a campfire. Someone is speaking beside it.'),
        delay: 2200, pending: true });
      queue.push({ art: [
        '                 ╱╲',
        '          ╱╲   ╱╱  ╲╲',
        '         ╱  ╲ ╱╱    ╲╲',
        '        ╱    ╳╱  ✦✦  ╲',
        '            ╱╱  ✦✦✦✦ ╲╲',
        '           ╱  ✦✦✦✦✦✦  ╲',
        '     ○    ╱  ✦✦✦火✦✦✦  ╲    ○',
        '    ╱╲   ════════════════   ╱╲',
        '   ╱  ╲                    ╱  ╲',
        '   sitting                 sitting',
      ], artClass: '', delay: 2000 });
      queue.push({ tag: L('事件','Event'), color: 'tag-event',
        text: L('一個裹著破斗篷的老者坐在營火旁，面前圍著幾個倖存者。他正在講述一個古老的故事。',
                'An old man wrapped in a tattered cloak sits by the fire. Several survivors circle around him. He\'s telling an ancient story.'),
        delay: 2800 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('你要坐下來聽嗎？', 'Do you want to sit and listen?'),
        choices: [
          { text: L('坐下來聽', 'Sit and listen'),
            textEn: 'Sit and listen',
            action: function() {
              state.flags.r2LoreHeard = true;
              changeHp(5);
              patrolAppend(L('事件','Event'), 'tag-event',
                L('「……在石化瘟疫之前，這裡曾是一座偉大的城市。他們開採石化結晶作為能源，卻不知道那東西的真正代價……」',
                  '"...Before the petrification plague, a great city stood here. They mined petri-crystals for energy, never knowing the true cost..."'), false);
              patrolAppend(L('事件','Event'), 'tag-event',
                L('「……議會裡有人知道真相，卻選擇隱瞞。他們把礦工送去送死，只為了利潤。這就是為什麼我們今天還在受苦。」',
                  '"...Some in the council knew the truth, yet chose silence. They sent miners to their deaths for profit. That\'s why we still suffer today."'), false);
              patrolAppend(L('情報','Intel'), 'tag-info',
                L('你獲得了重要的歷史線索。這些訊息在河城議會上或許能派上用場。  HP +5',
                  'You gained crucial historical intel. This may prove useful at the River City council.  HP +5'), false);
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 3000));
            },
            pauseQueue: true
          },
          { text: L('沒時間', 'No time'),
            textEn: 'No time',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你沒有停留。故事再好聽，也無法阻止腳下的石化。',
                  'You don\'t stop. No story, however good, can halt the petrification creeping underfoot.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },

  // ── r2_quake: 突發地震 (Crisis) ──
  {
    id: 'r2_quake', flag: '_evt_r2_quake', region: 2,
    buildQueue: function(queue) {
      queue.push({ tag: L('警告','WARN'), color: 'tag-warn',
        text: L('腳下突然劇烈震動——地震！碎石從頭頂落下！',
                'The ground heaves violently — earthquake! Rubble rains from above!'),
        delay: 2000, pending: true, sfx: 'click' });
      queue.push({ art: [
        '    ╱╲   ████  ░░░  ████   ╱╲',
        '   ╱╱╲╲  ████░░░░░████   ╱╱╲╲',
        '    ╲╱    ██░░░░░░░██     ╲╱',
        '   ╱╱╲   ░░░░░░░░░░░░   ╲╲╲',
        '    ╲╱  ░░░  ╱╲╱╲  ░░░   ╲╱',
        '       ░░  ╱╱    ╲╲  ░░',
        '      ░░ ╱╱   ▼▼   ╲╲ ░░',
        '    ~~~╱╱~~~~▼▼▼▼~~~~╲╲~~~',
      ], artClass: '', delay: 1800 });
      queue.push({ tag: L('事件','Event'), color: 'tag-combat',
        text: L('巨石裂開，粉塵瀰漫！你必須立刻做出反應！',
                'Boulders crack apart, dust fills the air! You must react now!'),
        delay: 2000 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-warn',
        text: L('怎麼辦？！', 'What do you do?!'),
        choices: [
          { text: L('往前跑！ [敏捷]', 'Run! [AGI]'),
            textEn: 'Run! [AGI]',
            action: function() {
              var result = statCheck('agi', 7);
              if (result !== 'fail') {
                state.flags.gold = (state.flags.gold || 0) + 3;
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你飛快地衝過崩塌區域！地震停止後，你發現腳邊被震出了幾枚金幣。  金幣 +3',
                    'You sprint through the collapsing zone! After the quake stops, you spot coins shaken loose from the rubble.  Gold +3'), false);
                sfx.pass();
              } else {
                changeHp(-8);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你跑得不夠快——一塊落石砸中了你的肩膀！',
                    'Not fast enough — a falling rock slams into your shoulder!'), false);
                sfx.hurt();
              }
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('找掩護！ [力量]', 'Take cover! [STR]'),
            textEn: 'Take cover! [STR]',
            action: function() {
              var result = statCheck('str', 7);
              if (result !== 'fail') {
                gainXp(10);
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你扛起一塊石板擋在頭頂！碎石如雨點般落下，但你撐住了。地震後，你在地縫中發現了閃亮的結晶。  經驗 +10',
                    'You hoist a slab overhead! Debris hammers down, but you hold. After the quake, you find gleaming crystals in a fissure.  XP +10'), false);
                sfx.pass();
              } else {
                changeHp(-12);
                changePetri(3);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你試圖找掩護，但一堆碎石直接埋住了你的腿。掙扎中石化粉塵灌入肺部。',
                    'You try to find cover, but rubble buries your legs. Petri-dust fills your lungs as you struggle.'), false);
                sfx.hurt();
              }
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },
];

registerPatrolEvents(2, R2_EVENTS);

// ═══════════════════════════════════════════════════
//  R3 — 河城渡口 Events (3)
// ═══════════════════════════════════════════════════

var R3_EVENTS = [

  // ── r3_gamble: 碼頭賭局 (Gold) ──
  {
    id: 'r3_gamble', flag: '_evt_r3_gamble', region: 3,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('碼頭角落傳來喧鬧聲。幾個碼頭工人圍成一圈，地上擺著骰子和金幣。',
                'Commotion from a corner of the docks. Several workers huddle in a circle, dice and coins on the ground.'),
        delay: 2200, pending: true });
      queue.push({ art: [
        '      ╭──────────────────╮',
        '      │  ○    ⚄    ○    │',
        '      │ ╱╲  ╭──╮  ╱╲   │',
        '      │╱  ╲ │⚂⚅│ ╱  ╲  │',
        '      │    ╲╰──╯╱      │',
        '      │ ◉◉◉  ▽  ◉◉◉◉  │',
        '      │  金幣    金幣   │',
        '      ╰──────────────────╯',
      ], artClass: '', delay: 2000 });
      queue.push({ tag: L('事件','Event'), color: 'tag-event',
        text: L('「喂，過來！」一個粗壯的工人朝你招手。「來一局？骰大小，簡單得很。三金幣入場。」',
                '"Hey, you!" A burly worker waves you over. "Fancy a round? High-low dice, simple. Three gold to play."'),
        delay: 2800 });
      var gold = state.flags.gold || 0;
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('參加嗎？（持有：' + gold + ' 金幣）', 'Join? (You have: ' + gold + ' gold)'),
        choices: [
          { text: L('來一局（3 金幣）', 'Play (3 gold)'),
            textEn: 'Play (3 gold)',
            action: function() {
              var currentGold = state.flags.gold || 0;
              if (currentGold < 3) {
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你摸了摸口袋——不夠。工人們哄笑：「窮鬼就別來湊熱鬧了！」',
                    'You check your pockets — not enough. The workers laugh: "Broke folk should stay away!"'), false);
                patrolTimers.push(setTimeout(runPatrolCycle, 2000));
                return;
              }
              state.flags.gold = currentGold - 3;
              var roll = rng(1, 6);
              patrolAppend(L('事件','Event'), 'tag-event',
                L('你扔出骰子——' + '⚀⚁⚂⚃⚄⚅'[roll-1] + '（' + roll + '）',
                  'You throw the dice — ' + '⚀⚁⚂⚃⚄⚅'[roll-1] + ' (' + roll + ')'), false);
              if (roll === 6) {
                state.flags.gold = (state.flags.gold || 0) + 8;
                patrolAppend(L('事件','Event'), 'tag-item',
                  L('滿堂彩！工人們瞪大了眼：「這運氣也太好了吧！」  金幣 +8',
                    'Perfect roll! The workers stare: "That\'s insane luck!"  Gold +8'), false);
                sfx.pass();
              } else if (roll >= 4) {
                state.flags.gold = (state.flags.gold || 0) + 5;
                patrolAppend(L('事件','Event'), 'tag-item',
                  L('你贏了！工人不情不願地推過一堆金幣。  金幣 +5',
                    'You win! The worker grudgingly pushes a pile of coins over.  Gold +5'), false);
                sfx.pass();
              } else {
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('輸了。工人笑嘻嘻地收走你的金��：「下次再來啊！」  金幣 -3',
                    'You lose. The worker grins as he pockets your coins: "Come back anytime!"  Gold -3'), false);
                sfx.fail();
              }
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('不賭', 'Pass'),
            textEn: 'Pass',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你搖搖頭走開。工人在身後起鬨：「膽小鬼！」',
                  'You shake your head and walk away. The workers jeer: "Coward!"'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },

  // ── r3_thief_kid: 偷東西的小孩 (Moral) ──
  {
    id: 'r3_thief_kid', flag: '_evt_r3_thief_kid', region: 3,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('市場邊，你注意到一個矮小的身影——一個孩子正從攤位上偷拿東西。',
                'By the market, you spot a small figure — a child snatching something from a stall.'),
        delay: 2200, pending: true });
      queue.push({ art: [
        '    ╔════╗     ╭──╮',
        '    ║◆◇◆║     │··│',
        '    ║◇◆◇║     │><│',
        '    ║◆◇◆║    ╱╰──╯╲',
        '    ║ 攤 ║   │ ╱╲  │',
        '    ║ 位 ║   │╱  ╲ │',
        '    ╚════╝   ╱    ╲',
        '              小孩',
      ], artClass: '', delay: 2000 });
      queue.push({ tag: L('事件','Event'), color: 'tag-event',
        text: L('小孩把一塊麵包塞進破爛的衣服裡，正要溜走。攤主還沒發現。你恰好看到了這一幕。',
                'The child stuffs a loaf into ragged clothes and is about to slip away. The stall owner hasn\'t noticed. You happened to witness it all.'),
        delay: 3000 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('你要怎麼做？', 'What do you do?'),
        choices: [
          { text: L('向攤主舉報', 'Report to the stall owner'),
            textEn: 'Report to the stall owner',
            action: function() {
              state.flags.gold = (state.flags.gold || 0) + 3;
              patrolAppend(L('事件','Event'), 'tag-event',
                L('你指向小孩。攤主一把抓住了他，狠狠扇了一巴掌。小孩哭著被拖走了。攤主感激地塞給你幾枚金幣：「多謝提醒！」',
                  'You point at the child. The owner grabs him and slaps him hard. The child is dragged away crying. The owner gratefully presses coins into your hand: "Thanks for the tip!"'), false);
              patrolAppend(L('系統','SYS'), 'tag-system',
                L('金幣 +3。但你總覺得哪裡不對。',
                  'Gold +3. But something doesn\'t sit right.'), false);
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('幫小孩掩護', 'Cover for the kid'),
            textEn: 'Cover for the kid',
            action: function() {
              state.flags.r3KidHelped = true;
              patrolAppend(L('事件','Event'), 'tag-event',
                L('你假裝被攤位上的東西吸引，擋住攤主的視線。小孩趁機溜走了。幾分鐘後，他從巷子裡探出頭，對你比了一個「謝謝」的手勢，然後消失了。',
                  'You pretend to browse the stall, blocking the owner\'s line of sight. The child slips away. Minutes later, a small head peeks from an alley, mouths "thank you," and vanishes.'), false);
              patrolAppend(L('系統','SYS'), 'tag-system',
                L('這個孩子記住了你。也許在河城的某個角落，有人會替你說話。',
                  'This child remembers you. Perhaps somewhere in River City, someone will speak for you.'), false);
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 2500));
            },
            pauseQueue: true
          },
          { text: L('不管', 'Ignore it'),
            textEn: 'Ignore it',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('不關你的事。你轉身離開。',
                  'Not your problem. You turn and walk away.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },

  // ── r3_letter: 匿名信 (Suspense) ──
  {
    id: 'r3_letter', flag: '_evt_r3_letter', region: 3,
    buildQueue: function(queue) {
      queue.push({ tag: L('��現','Found'), color: 'tag-item',
        text: L('有人在你經過的時候，悄悄塞了一張摺疊的紙條到你手中。你回頭——什麼人都沒有。',
                'As you walk past, someone slips a folded note into your hand. You turn back — no one is there.'),
        delay: 2500, pending: true });
      queue.push({ art: [
        '      ╭────────────────────╮',
        '      │ ╭────────────────╮ │',
        '      │ │  ░░░░░░░░░░░░  │ │',
        '      │ │  ░  ╳╳╳╳╳  ░  │ │',
        '      │ │  ░  ╳╳╳╳╳  ░  │ │',
        '      │ │  ░  ╳╳╳    ░  │ │',
        '      │ │  ░░░░░░░░░░░░  │ │',
        '      │ │        — ?     │ │',
        '      │ ╰────────────────╯ │',
        '      ╰────────────────────╯',
      ], artClass: '', delay: 2000 });
      queue.push({ tag: L('事件','Event'), color: 'tag-event',
        text: L('紙條被摺得很小，上面的字跡潦草而急促。封口處用蠟封著，蠟印上的圖案是——議會的徽章？',
                'The note is folded tiny, the handwriting hurried and messy. A wax seal bears a design — the council\'s emblem?'),
        delay: 2800 });
      queue.push({
        tag: L('抉擇','Choice'), color: 'tag-info',
        text: L('打開嗎？', 'Open it?'),
        choices: [
          { text: L('打開紙條', 'Open the note'),
            textEn: 'Open the note',
            action: function() {
              state.flags.r3AnonLetter = true;
              changeStat('wil', 1);
              patrolAppend(L('事件','Event'), 'tag-event',
                L('你撕開蠟封。紙條上寫著：',
                  'You break the seal. The note reads:'), false);
              patrolAppend(L('事件','Event'), 'tag-petri',
                L('「石化結晶的開採從未停止。議會第三席私下控制著所有礦脈。問問銅鐘——她知道的比她說的多。小心隔牆有耳。」',
                  '"The mining of petri-crystals never stopped. The Third Seat of the council secretly controls all veins. Ask Bronze Bell — she knows more than she lets on. Walls have ears."'), false);
              patrolAppend(L('系統','SYS'), 'tag-system',
                L('你獲得了議會陰謀的線索。下次見到銅鐘時，可以問她。  意志 +1',
                  'You\'ve gained a clue about the council conspiracy. You can ask Bronze Bell next time.  WIL +1'), false);
              renderStatus();
              patrolTimers.push(setTimeout(runPatrolCycle, 3000));
            },
            pauseQueue: true
          },
          { text: L('丟掉', 'Discard it'),
            textEn: 'Discard it',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你把紙條揉成一團丟進河裡。在這座城市裡，知道太多不見得是好事。',
                  'You crumple the note and toss it into the river. In this city, knowing too much isn\'t always wise.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            },
            pauseQueue: true
          }
        ]
      });
    }
  },
];

registerPatrolEvents(3, R3_EVENTS);
