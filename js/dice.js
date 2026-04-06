// ══ Liar's Dice Mini-Game (吹牛骰) ══
// Gambling game with Grey Crane. Each player has 5 dice.
// Players bid on total count of a face value across ALL dice.
// Call "liar" to challenge — loser pays the bet.
// Cheat options use AGI/WIL stat checks.

var diceGame = (function() {

  // ── Dice rendering ──
  var DICE_ART = [
    '', // 0 unused
    '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'
  ];

  function renderDice(arr) {
    return arr.map(function(d) { return DICE_ART[d]; }).join(' ');
  }

  function renderHidden(count) {
    var s = '';
    for (var i = 0; i < count; i++) s += '⬡ ';
    return s.trim();
  }

  function rollDice(n) {
    var arr = [];
    for (var i = 0; i < n; i++) arr.push(rng(1, 6));
    return arr.sort(function(a, b) { return a - b; });
  }

  function countFace(arr, face) {
    var c = 0;
    for (var i = 0; i < arr.length; i++) { if (arr[i] === face) c++; }
    return c;
  }

  // ── Grey Crane AI ──
  // Returns {count, face} bid that's higher than current, or null to call liar
  function craneBid(cranesDice, currentBid, totalDice) {
    // Count what crane actually has
    var counts = [0, 0, 0, 0, 0, 0, 0]; // index 1-6
    for (var i = 0; i < cranesDice.length; i++) counts[cranesDice[i]]++;

    if (!currentBid) {
      // Opening bid — bid conservatively based on own dice
      var bestFace = 1, bestCount = 0;
      for (var f = 1; f <= 6; f++) {
        if (counts[f] > bestCount) { bestCount = counts[f]; bestFace = f; }
      }
      // Estimate total: own count + assume ~(totalDice-5)/6 from opponent
      var estimate = bestCount + Math.floor((totalDice - 5) / 6);
      return { count: Math.max(1, estimate), face: bestFace };
    }

    var bc = currentBid.count;
    var bf = currentBid.face;

    // How many of current face does crane actually have?
    var ownCount = counts[bf];
    // Expected total across all dice
    var expected = ownCount + (totalDice - 5) / 6;

    // If bid seems too high, call liar (with some randomness)
    if (bc > expected + 1.5 + Math.random()) {
      return null; // call liar
    }

    // Raise bid — try to bid on a face crane has a lot of
    var options = [];
    // Same face, higher count
    if (ownCount >= 1) {
      options.push({ count: bc + 1, face: bf, score: ownCount });
    }
    // Higher face, same count
    for (var f = bf + 1; f <= 6; f++) {
      if (counts[f] >= 1) {
        options.push({ count: bc, face: f, score: counts[f] });
      }
    }
    // Any face, higher count
    for (var f = 1; f <= 6; f++) {
      if (counts[f] >= 2) {
        var newCount = bc + 1;
        options.push({ count: newCount, face: f, score: counts[f] });
      }
    }

    if (options.length === 0) {
      // Can't find good bid — either bluff or call liar
      if (Math.random() < 0.4) {
        return { count: bc + 1, face: bf }; // bluff
      }
      return null; // call liar
    }

    // Pick option crane is most confident about
    options.sort(function(a, b) { return b.score - a.score; });
    return options[0];
  }

  // ── Crane dialogue ──
  var CRANE_BID_LINES = [
    { zh: '灰鶴摸了摸下巴：', en: 'Grey Crane strokes her chin:' },
    { zh: '灰鶴瞇起眼睛：', en: 'Grey Crane narrows her eyes:' },
    { zh: '灰鶴晃了晃酒瓶：', en: 'Grey Crane swirls her bottle:' },
    { zh: '灰鶴嘿嘿一笑：', en: 'Grey Crane chuckles:' },
    { zh: '灰鶴不緊不慢地說：', en: 'Grey Crane says unhurriedly:' },
    { zh: '灰鶴撥了撥垂在臉頰旁的碎髮：', en: 'Grey Crane brushes a strand of hair from her cheek:' },
    { zh: '灰鶴慵懶地靠在椅背上：', en: 'Grey Crane leans back lazily:' },
  ];

  var CRANE_CALL_LINES = [
    { zh: '灰鶴一拍桌子，斗篷滑落一邊露出纖細的鎖骨：「開！我不信！」', en: 'Grey Crane slams the table, her cloak slipping to reveal a slender collarbone: "Open! I don\'t buy it!"' },
    { zh: '灰鶴眯起眼，嘴角勾起一抹狡黠的笑：「吹牛吧你——開！」', en: 'Grey Crane squints, lips curling into a sly grin: "You\'re bluffing — open!"' },
    { zh: '「少來了，開骰子！」灰鶴笑著探過身來，酒氣和草藥的味道撲面而來。', en: '"Nice try — show me!" Grey Crane leans in with a grin, the scent of liquor and herbs washing over you.' },
  ];

  var CRANE_WIN_LINES = [
    { zh: '灰鶴得意地收起金幣，修長的手指在桌面上輕敲：「跟我賭？嫩了點。」', en: 'Grey Crane pockets the coins smugly, her slender fingers tapping the table: "Gambling with me? Too green."' },
    { zh: '「承讓承讓。」灰鶴笑得像隻狐狸，身子慵懶地往後一靠。', en: '"Better luck next time." Grey Crane grins like a fox, lounging back languidly.' },
    { zh: '灰鶴把金幣一枚一枚慢慢拾起，修長的手指在燭光下顯得格外好看：「想贏回去？那就再來啊。」', en: 'Grey Crane picks up the coins one by one, her slender fingers beautiful in the candlelight: "Want them back? Then play again."' },
  ];

  // Progressive lose lines — escalate body language with each player win
  var CRANE_LOSE_LINES_TIER1 = [
    { zh: '灰鶴把金幣推過來，表情有些僵硬：「……算你走運。」', en: 'Grey Crane pushes the coins over, expression stiff: "...Lucky you."' },
    { zh: '「嘖——」灰鶴不情願地掏出金幣。', en: '"Tch —" Grey Crane reluctantly hands over the coins.' },
    { zh: '灰鶴挑了挑眉，把金幣推過來：「新手運罷了。」', en: 'Grey Crane raises an eyebrow, pushing the coins over: "Beginner\'s luck."' },
  ];
  var CRANE_LOSE_LINES_TIER2 = [
    { zh: '灰鶴嘆了口氣，把金幣推過來時手指不自覺地碰到了你的手背——然後沒有收回去，指尖在你的指關節上慢慢滑了一下：「……你還真有兩下子。」', en: 'Grey Crane sighs, her fingers brushing your hand as she pushes the coins over — then not pulling back, fingertips sliding slowly across your knuckles: "...You\'re actually good."' },
    { zh: '灰鶴搖了搖頭，身子微微前傾，斗篷的領口隨著動作鬆開了些，你能看見鎖骨下方細膩的皮膚和一條若隱若現的刀疤：「行吧，這把算你的。」她的目光從你的手移到你的臉上，慢慢地，像在品嚐什麼。', en: 'Grey Crane shakes her head, leaning forward — her cloak\'s collar loosens, revealing fine skin below her collarbone and a faint scar: "Fine, this one\'s yours." Her gaze slides from your hands to your face, slowly, as if savoring something.' },
    { zh: '「又輸了……」灰鶴煩躁地把頭髮撥到耳後，露出頸側一道淡淡的舊傷疤。她的膝蓋在桌子底下碰了碰你的腿，沒有移開：「再來。」', en: '"Lost again..." Grey Crane irritably tucks her hair behind her ear, revealing a faint scar along her neck. Her knee bumps yours under the table and stays there: "Again."' },
    { zh: '灰鶴灌了一口酒，酒液從嘴角淌下，她用食指慢慢抹去，然後把那根沾著酒的手指放在唇邊舔了一下，眼睛始終盯著你：「你的運氣不會一直這麼好。」', en: 'Grey Crane takes a swig, liquor trickling from the corner of her mouth. She wipes it slowly with one finger, then licks the liquor off it — eyes locked on you the whole time: "Your luck won\'t hold forever."' },
    { zh: '灰鶴輸得有點不耐煩了。她把金幣扔過來，身子往你的方向靠了靠，斗篷底下的肩線在燭光裡顯得格外纖細：「你是不是故意在贏我？想看我著急的樣子？」她壓低嗓音，帶著點沙啞的笑意。', en: 'Grey Crane\'s getting impatient. She tosses the coins over and leans toward you, the line of her shoulders under the cloak looking impossibly delicate in candlelight: "Are you winning on purpose? Want to see me flustered?" Her voice drops low, tinged with husky amusement.' },
  ];
  var CRANE_LOSE_LINES_TIER3 = [
    { zh: '灰鶴仰頭灌了一口酒，喉結微動，幾滴酒液沿著下巴滑落：「……你是來搶劫我的吧？」', en: 'Grey Crane tilts her head back for a swig, throat moving — a few drops trail down her chin: "...Are you here to rob me?"' },
    { zh: '灰鶴用手背擦了擦嘴，身體慵懶地靠向你這邊，斗篷從肩頭滑落了一半：「有本事就把我贏到一無所有啊。」', en: 'Grey Crane wipes her mouth with the back of her hand, leaning lazily toward you — her cloak slips halfway off one shoulder: "If you dare, win everything I have."' },
    { zh: '「你啊——」灰鶴苦笑著搖頭，身體隨著笑聲微微搖晃，燭光映照出她精緻卻帶著幾分滄桑的輪廓：「真是我的剋星。」', en: '"You —" Grey Crane smiles bitterly, her body swaying with quiet laughter, candlelight tracing her refined yet weathered features: "You\'re my nemesis."' },
    { zh: '灰鶴把腿翹到桌邊，靴子蹭過你的小腿：「再贏我一次，我就真的要生氣了哦。」她的語氣聽不出是威脅還是調情。', en: 'Grey Crane props her boot on the table edge, grazing your shin: "Win one more and I\'ll really get angry." Her tone is impossible to read — threat or flirtation.' },
    { zh: '灰鶴解開斗篷的領扣散熱，鎖骨下細密的汗珠在燭光下泛著微光。她注意到你的目光，挑了挑眉：「看什麼看——贏了就多看兩眼？」', en: 'Grey Crane unfastens her cloak\'s collar clasp to cool off. Fine beads of sweat glisten below her collarbone in the candlelight. She catches your gaze, brow arched: "Enjoying the view? Think winning earns you a look?"' },
  ];
  var CRANE_LOSE_LINES_TIER4 = [
    { zh: '灰鶴把金幣扔過來，整個人往你肩膀的方向靠了靠——酒意讓她比平時放鬆得多，斗篷大敞，裡面的襯衣被汗水貼在身上：「贏了就請我喝酒，公平吧？」', en: 'Grey Crane tosses the coins over and leans toward your shoulder — the alcohol has loosened her up. Her cloak hangs wide open, the inner shirt clinging with sweat: "Buy me a drink since you won. Fair, right?"' },
    { zh: '灰鶴輸得有些上頭了，她解開斗篷的扣子隨手搭在椅背上，露出裡面貼身的皮甲背心，手臂上縱橫交錯的放血刀疤在燭火下若隱若現：「熱死了……再來一把，我要贏回來。」', en: 'Grey Crane is getting heated. She unclasps her cloak and drapes it over the chair, revealing a fitted leather vest — criss-crossed bloodletting scars on her arms flickering in the candlelight: "Too hot... one more, I\'m winning it back."' },
    { zh: '「你知道嗎——」灰鶴撐著下巴看你，眼神因為酒精變得迷濛而危險，嘴唇微微彎起：「在深淵裡能讓我連輸這麼多次的，你是第一個。我記住你了。」', en: '"You know —" Grey Crane props her chin on her hand, her gaze hazy and dangerous from the alcohol, lips curving: "You\'re the first person in the abyss to beat me this many times. I\'ll remember you."' },
    { zh: '灰鶴把酒瓶重重放在桌上，身體越過骰杯湊近了你。她的呼吸帶著烈酒的熱度拂過你的臉，嘴唇離你只有幾寸：「你到底是什麼人——」她的手指順著你的衣領往上滑了一下，然後像被燙到一樣收回去。「……算了。再來一把。」', en: 'Grey Crane sets the bottle down hard and leans across the dice cups toward you. Her breath, hot with liquor, brushes your face — lips just inches away: "What are you, exactly —" Her fingers trace up your collar, then jerk back as if burned. "...Never mind. One more round."' },
    { zh: '灰鶴輸紅了眼，皮甲背心的繫帶不知何時鬆了一半。她整個人掛在你的肩上，嘴唇貼著你的耳朵低聲說：「如果我把所有金幣都輸給你……你要怎麼補償我？」她的指尖在你的後頸畫了個圈，帶著薄繭的粗糙觸感。', en: 'Grey Crane\'s lost enough to be reckless. The lacing of her leather vest has come half-undone. She drapes herself on your shoulder, lips at your ear: "If I lose all my gold to you... how will you compensate me?" Her fingertip traces a circle on the back of your neck, rough with calluses.' },
    { zh: '「最後一把——」灰鶴的聲音已經帶了醉意的沙啞。她靠在你身上，手臂環過你的脖子去夠桌上的骰杯，整個人的重量和酒香都壓了過來。皮甲下的襯衣被汗浸透了，你能感覺到她的體溫。「如果我贏了——你今晚哪兒也不准去。」', en: '"Last round —" Grey Crane\'s voice is husky with drink. She leans against you, arm reaching around your neck for the dice cup, her weight and the scent of liquor pressing close. The shirt beneath her leather vest is soaked through — you can feel her warmth. "If I win — you\'re not going anywhere tonight."' },
  ];

  function pickCraneLoseLine() {
    var wins = (state.flags.diceWins || 0);
    if (wins >= 7) return pickLine(CRANE_LOSE_LINES_TIER4);
    if (wins >= 4) return pickLine(CRANE_LOSE_LINES_TIER3);
    if (wins >= 2) return pickLine(CRANE_LOSE_LINES_TIER2);
    return pickLine(CRANE_LOSE_LINES_TIER1);
  }

  var CRANE_CHEAT_CAUGHT = [
    { zh: '灰鶴一把抓住你的手腕，她的手指意外地有力：「嗯？你在幹什麼？」她沒有鬆手，拇指按在你的脈搏上：「心跳這麼快——心虛了吧。」', en: 'Grey Crane grabs your wrist — her grip is surprisingly strong: "Hm? What are you doing?" She doesn\'t let go, thumb pressing on your pulse: "Heart\'s racing — guilty conscience?"' },
    { zh: '「動作太慢了啊朋友。」灰鶴搖了搖頭，鬆開你的手時指尖慢慢劃過你的手心，像是故意的：「下次想作弊——至少別讓我注意到你的手在抖。」', en: '"Too slow, friend." Grey Crane shakes her head, fingertips slowly trailing across your palm — deliberately: "Next time you cheat — at least don\'t let me notice your hand trembling."' },
    { zh: '灰鶴探過身來握住你的手，把你偷藏的骰子捏了出來。她的臉湊得很近，你能看見她眼裡的笑意：「手法不錯——可惜碰到我了。」她的拇指在你的掌心輕輕按了一下才放開。', en: 'Grey Crane leans in and clasps your hand, plucking out the hidden die. Her face is very close — you can see the amusement in her eyes: "Nice technique — shame you tried it on me." Her thumb presses your palm once before letting go.' },
  ];

  function pickLine(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ══════════════════════════════════════════
  //  Main game flow
  // ══════════════════════════════════════════

  // Proximity transition lines when Crane moves to sit beside player (3rd game)
  var CRANE_SIT_BESIDE = [
    { zh: '第三把開始前，灰鶴忽然站起來，端著酒瓶繞過了桌子。', en: 'Before the third round, Grey Crane suddenly stands, carrying her bottle around the table.' },
    { zh: '她在你旁邊坐了下來——不是對面，是緊挨著你。你的肩膀碰在一起。', en: 'She sits down beside you — not across, but right next to you. Your shoulders touch.' },
    { zh: '「對面看不清你的骰子。」她隨口找了個理由，但她的大腿貼著你的大腿，完全沒有要挪開的意思。', en: '"Can\'t see your dice from over there." She tosses out an excuse, but her thigh presses against yours with no intention of moving.' },
    { zh: '她的斗篷蹭著你的手臂，帶著酒和草藥的氣味。你能感覺到她的體溫——比你想像的暖。', en: 'Her cloak brushes your arm, carrying the scent of liquor and herbs. You can feel her body heat — warmer than expected.' },
    { zh: '「怎麼了？」她側頭看你，臉只有幾寸遠，嘴角帶著似笑非笑的弧度：「怕了？」', en: '"What?" She turns her head — face just inches away, lips curved in a teasing half-smile: "Scared?"' },
  ];

  // Ambient proximity lines for games after Crane sits beside player
  var CRANE_BESIDE_AMBIENT = [
    { zh: '灰鶴搖骰子的時候，整個人隨著動作搖晃，肩膀一下一下地撞著你。', en: 'Grey Crane sways with each shake of the dice cup, her shoulder bumping yours rhythmically.' },
    { zh: '她湊過來看你的骰子，下巴幾乎擱在你的肩膀上。她的頭髮掃過你的脖子。', en: 'She leans over to peek at your dice, chin nearly resting on your shoulder. Her hair brushes your neck.' },
    { zh: '灰鶴喝了一口酒，順手把酒瓶遞到你嘴邊：「喝一口。」瓶口還帶著她的體溫。', en: 'Grey Crane takes a swig, then holds the bottle to your lips: "Have some." The rim is still warm from her mouth.' },
    { zh: '她思考下一步的時候，手指無意識地在你的膝蓋上輕輕敲著節拍。', en: 'While pondering her next move, her fingers unconsciously tap a rhythm on your knee.' },
    { zh: '灰鶴伸手去拿骰杯的時候，整個人壓在你的手臂上。她沒有道歉，也沒有退開。', en: 'Reaching for the dice cup, Grey Crane leans her weight against your arm. No apology. No pulling away.' },
    { zh: '她輸了一把之後嘆了口氣，腦袋往你肩膀上一靠：「讓我緩緩。」過了幾秒才直起身子。', en: 'After losing a round, she sighs and drops her head onto your shoulder: "Let me regroup." A few seconds pass before she straightens.' },
  ];

  function startGame(bet, onDone) {
    // Track total games played for proximity escalation
    state.flags.diceRounds = (state.flags.diceRounds || 0) + 1;
    var roundNum = state.flags.diceRounds;

    var playerDice = rollDice(5);
    var craneDice = rollDice(5);
    var totalDice = 10;
    var currentBid = null;
    var playerTurn = Math.random() < 0.5; // random who goes first
    var peeked = false; // has player peeked at crane's dice this round
    var en = state.lang === 'en';
    var isBeside = roundNum >= 3; // Crane sits beside player from round 3 onward

    // Track crane's revealed dice for display
    var craneRevealed = false;

    function bidText(bid) {
      return (en ? bid.count + ' × ' : bid.count + ' 個 ') + DICE_ART[bid.face];
    }

    function statusText() {
      var s = '';
      s += '<div class="dice-status">';
      s += '<div class="dice-row"><span class="dice-label">' + L('你的骰子：', 'Your dice: ') + '</span><span class="dice-vals">' + renderDice(playerDice) + '</span></div>';
      s += '<div class="dice-row"><span class="dice-label">' + L('灰鶴：', 'Grey Crane: ') + '</span><span class="dice-vals">' + (peeked ? renderDice(craneDice) : renderHidden(5)) + '</span></div>';
      if (currentBid) {
        s += '<div class="dice-row"><span class="dice-label">' + L('當前喊價：', 'Current bid: ') + '</span><span class="dice-bid">' + bidText(currentBid) + '</span></div>';
      }
      s += '<div class="dice-row"><span class="dice-label">' + L('賭注：', 'Bet: ') + '</span><span class="dice-bet">' + bet + L(' 金幣', ' gold') + '</span></div>';
      s += '</div>';
      return s;
    }

    function resolve(callerIsPlayer) {
      // Count actual total
      var allDice = playerDice.concat(craneDice);
      var actual = countFace(allDice, currentBid.face);
      var bidMet = actual >= currentBid.count;
      // Caller loses if bid was actually met; bid-maker loses if it wasn't
      // "Liar" caller wins if bid was NOT met
      var callerWins = !bidMet;

      var steps = [];
      // Reveal
      steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-npc', html: statusText().replace(renderHidden(5), renderDice(craneDice)), delay: 800 });
      steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-info',
        text: L('場上共有 ' + actual + ' 個 ' + DICE_ART[currentBid.face] + '，喊價是 ' + currentBid.count + ' 個。',
               'Total: ' + actual + ' × ' + DICE_ART[currentBid.face] + ', bid was ' + currentBid.count + '.'),
        delay: 2000 });

      var playerWins = callerIsPlayer ? callerWins : !callerWins;
      var gold = state.flags.gold || 0;

      if (playerWins) {
        state.flags.gold = gold + bet;
        state.flags.diceWins = (state.flags.diceWins || 0) + 1;
        state.flags.diceEarnings = (state.flags.diceEarnings || 0) + bet;
        var line = pickCraneLoseLine();
        steps.push({ tag: en ? 'WIN' : '勝利', tagColor: 'tag-explore',
          text: L(line.zh + ' (+' + bet + '金幣)', line.en + ' (+' + bet + ' gold)'), delay: 2500 });
        sfx.pass();
      } else {
        state.flags.gold = Math.max(0, gold - bet);
        var line = pickLine(CRANE_WIN_LINES);
        steps.push({ tag: en ? 'LOSE' : '落敗', tagColor: 'tag-warn',
          text: L(line.zh + ' (-' + bet + '金幣)', line.en + ' (-' + bet + ' gold)'), delay: 2500 });
        sfx.fail();
      }

      renderStatus();
      autoExplore(steps, [
        { text: L('再來一局', 'Play again'), action: function() { onDone(playerWins); } },
        { text: L('算了', 'Walk away'), action: function() { onDone(playerWins, true); } },
      ], { label: L('開骰', 'Reveal') });
    }

    // ── Player's turn ──
    function playerRound() {
      var steps = [];
      // Add ambient proximity flavor when sitting beside (random chance to avoid repetition)
      if (isBeside && currentBid && Math.random() < 0.4) {
        var amb = pickLine(CRANE_BESIDE_AMBIENT);
        steps.push({ tag: en ? 'SENSE' : '感知', tagColor: 'tag-sense',
          text: L(amb.zh, amb.en), delay: 2000 });
      }
      if (!currentBid) {
        steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-npc', html: statusText(), delay: 600 });
        steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-info',
          text: L('你先喊。場上共 10 顆骰子，猜所有骰子中至少有幾個某點數。', 'You bid first. 10 dice total — bid how many of a face exist across all dice.'),
          delay: 1500 });
      } else {
        steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-npc', html: statusText(), delay: 600 });
        steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-info',
          text: L('輪到你。喊更高，或叫「開」質疑灰鶴。', 'Your turn. Raise the bid, or call "liar".'),
          delay: 1000 });
      }

      var choices = [];

      // Generate valid bid options
      var minCount = currentBid ? currentBid.count : 1;
      var minFace = currentBid ? currentBid.face : 1;

      // Offer 2-3 sensible bids based on player's dice
      var ownCounts = [0, 0, 0, 0, 0, 0, 0];
      for (var i = 0; i < playerDice.length; i++) ownCounts[playerDice[i]]++;

      var bids = [];
      // Same count, higher face
      if (currentBid) {
        for (var f = minFace + 1; f <= 6; f++) {
          bids.push({ count: minCount, face: f, own: ownCounts[f] });
        }
      }
      // Higher count, any face
      for (var f = 1; f <= 6; f++) {
        var nc = currentBid ? minCount + 1 : Math.max(1, ownCounts[f]);
        if (!currentBid || nc > minCount || (nc === minCount && f > minFace)) {
          bids.push({ count: nc, face: f, own: ownCounts[f] });
        }
      }

      // Sort by confidence (own count descending, then count ascending)
      bids.sort(function(a, b) {
        if (b.own !== a.own) return b.own - a.own;
        if (a.count !== b.count) return a.count - b.count;
        return a.face - b.face;
      });

      // Show top 4 bid options
      var shown = {};
      var bidChoices = [];
      for (var i = 0; i < bids.length && bidChoices.length < 4; i++) {
        var key = bids[i].count + '_' + bids[i].face;
        if (shown[key]) continue;
        shown[key] = true;
        bidChoices.push(bids[i]);
      }

      for (var i = 0; i < bidChoices.length; i++) {
        (function(bid) {
          var label = L('喊：' + bid.count + ' 個 ' + DICE_ART[bid.face],
                       'Bid: ' + bid.count + ' × ' + DICE_ART[bid.face]);
          choices.push({ text: label, action: function() {
            currentBid = { count: bid.count, face: bid.face };
            sfx.click();
            craneRound();
          }});
        })(bidChoices[i]);
      }

      // Call liar (if there's a bid to challenge)
      if (currentBid) {
        choices.push({ text: L('「開！你吹牛！」', '"Liar! Open up!"'), action: function() {
          sfx.click();
          resolve(true);
        }});
      }

      // Cheat: peek at crane's dice (AGI check)
      if (!peeked) {
        var peekRate = checkRate('agi', 9);
        choices.push({
          text: L('【作弊】偷看灰鶴的骰子 [敏捷 DC9 — ' + peekRate + '%]',
                  '[CHEAT] Peek at Crane\'s dice [AGI DC9 — ' + peekRate + '%]'),
          action: function() {
            var result = statCheck('agi', 9);
            if (result !== 'fail') {
              peeked = true;
              var peekSteps = [
                { tag: en ? 'CHEAT' : '作弊', tagColor: 'tag-explore',
                  text: L('你趁灰鶴喝酒的空檔，迅速瞥了一眼她的骰子——',
                         'While Grey Crane takes a swig, you catch a glimpse of her dice —'),
                  delay: 1500 },
                { tag: en ? 'DICE' : '骰子', tagColor: 'tag-info',
                  text: L('灰鶴的骰子：' + renderDice(craneDice), 'Grey Crane\'s dice: ' + renderDice(craneDice)),
                  delay: 2000 },
              ];
              autoExplore(peekSteps, [
                { text: L('繼續', 'Continue'), action: function() { playerRound(); } },
              ], { label: L('偷看成功', 'Peek success') });
            } else {
              var line = pickLine(CRANE_CHEAT_CAUGHT);
              var catchSteps = [
                { tag: en ? 'CAUGHT' : '被抓', tagColor: 'tag-warn',
                  text: L(line.zh, line.en), delay: 2000 },
                { tag: en ? 'DICE' : '骰子', tagColor: 'tag-info',
                  text: L('灰鶴重新搖了骰子。你的小動作白費了。',
                         'Grey Crane re-rolls her dice. Your trick was wasted.'),
                  delay: 2000 },
              ];
              craneDice = rollDice(5);
              autoExplore(catchSteps, [
                { text: L('繼續', 'Continue'), action: function() { playerRound(); } },
              ], { label: L('被發現了', 'Caught') });
            }
          }
        });
      }

      // Cheat: bluff with WIL (intimidate crane into folding — instant win)
      if (currentBid && !state.flags._diceBluffedThisRound) {
        var bluffRate = checkRate('wil', 11);
        choices.push({
          text: L('【作弊】虛張聲勢逼灰鶴棄局 [意志 DC11 — ' + bluffRate + '%]',
                  '[CHEAT] Bluff Crane into folding [WIL DC11 — ' + bluffRate + '%]'),
          action: function() {
            state.flags._diceBluffedThisRound = true;
            var result = statCheck('wil', 11);
            if (result !== 'fail') {
              state.flags.gold = (state.flags.gold || 0) + bet;
              state.flags.diceWins = (state.flags.diceWins || 0) + 1;
              state.flags.diceEarnings = (state.flags.diceEarnings || 0) + bet;
              renderStatus();
              var bluffSteps = [
                { tag: en ? 'CHEAT' : '作弊', tagColor: 'tag-explore',
                  text: L('你盯著灰鶴的眼睛，嘴角微微上揚。那個眼神讓灰鶴猶豫了。',
                         'You lock eyes with Grey Crane, lips curling. That look makes her hesitate.'),
                  delay: 2000 },
                { tag: en ? 'WIN' : '勝利', tagColor: 'tag-explore',
                  text: L('「……算了算了，這把你贏了。」灰鶴把金幣推過來。(+' + bet + '金幣)',
                         '"...Fine, you win this one." Grey Crane pushes the coins over. (+' + bet + ' gold)'),
                  delay: 2500 },
              ];
              sfx.pass();
              autoExplore(bluffSteps, [
                { text: L('再來一局', 'Play again'), action: function() { onDone(true); } },
                { text: L('算了', 'Walk away'), action: function() { onDone(true, true); } },
              ], { label: L('虛張聲勢', 'Bluff') });
            } else {
              var failSteps = [
                { tag: en ? 'CAUGHT' : '失敗', tagColor: 'tag-warn',
                  text: L('灰鶴嗤笑一聲：「你那點小心思，寫在臉上了。繼續吧。」',
                         'Grey Crane snorts: "Your poker face needs work. Let\'s continue."'),
                  delay: 2000 },
              ];
              autoExplore(failSteps, [
                { text: L('繼續', 'Continue'), action: function() { playerRound(); } },
              ], { label: L('虛張聲勢失敗', 'Bluff failed') });
            }
          }
        });
      }

      autoExplore(steps, choices, { label: L('你的回合', 'Your turn') });
    }

    // ── Crane's turn ──
    function craneRound() {
      var bid = craneBid(craneDice, currentBid, totalDice);
      var steps = [];
      var line = pickLine(CRANE_BID_LINES);

      if (!bid) {
        // Crane calls liar
        var callLine = pickLine(CRANE_CALL_LINES);
        steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-npc',
          text: L(callLine.zh, callLine.en), delay: 2000 });
        autoExplore(steps, [
          { text: L('亮骰子', 'Reveal dice'), action: function() { resolve(false); } },
        ], { label: L('灰鶴質疑', 'Crane calls') });
      } else {
        currentBid = bid;
        steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-npc',
          text: L(line.zh + '「' + bid.count + ' 個 ' + DICE_ART[bid.face] + '。」',
                 line.en + ' "' + bid.count + ' × ' + DICE_ART[bid.face] + '."'),
          delay: 2000 });
        autoExplore(steps, [
          { text: L('繼續', 'Continue'), action: function() { playerRound(); } },
        ], { label: L('灰鶴喊價', 'Crane bids') });
      }
    }

    // Start
    state.flags._diceBluffedThisRound = false;

    function beginActualGame() {
      if (playerTurn) {
        playerRound();
      } else {
        // Crane opens
        var bid = craneBid(craneDice, null, totalDice);
        currentBid = bid;
        var line = pickLine(CRANE_BID_LINES);
        var steps = [];
        // Add ambient proximity flavor from round 4+
        if (isBeside && roundNum > 3) {
          var amb = pickLine(CRANE_BESIDE_AMBIENT);
          steps.push({ tag: en ? 'SENSE' : '感知', tagColor: 'tag-sense',
            text: L(amb.zh, amb.en), delay: 2200 });
        }
        steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-npc', html: statusText(), delay: 600 });
        steps.push({ tag: en ? 'DICE' : '骰子', tagColor: 'tag-npc',
          text: L(line.zh + '「' + bid.count + ' 個 ' + DICE_ART[bid.face] + '。」——灰鶴先喊。',
                 line.en + ' "' + bid.count + ' × ' + DICE_ART[bid.face] + '." — Grey Crane opens.'),
          delay: 2000 });
        autoExplore(steps, [
          { text: L('繼續', 'Continue'), action: function() { playerRound(); } },
        ], { label: L('灰鶴先喊', 'Crane opens') });
      }
    }

    // Proximity transition: on the 3rd game, Crane moves to sit beside player
    if (roundNum === 3) {
      var sitSteps = [];
      for (var i = 0; i < CRANE_SIT_BESIDE.length; i++) {
        sitSteps.push({ tag: en ? 'SENSE' : '感知', tagColor: 'tag-sense',
          text: L(CRANE_SIT_BESIDE[i].zh, CRANE_SIT_BESIDE[i].en),
          delay: i < 2 ? 2500 : 2200 });
      }
      autoExplore(sitSteps, [
        { text: L('開始第三局', 'Start round 3'), action: function() { beginActualGame(); } },
      ], { label: L('灰鶴坐到你旁邊', 'Crane sits beside you') });
    } else {
      beginActualGame();
    }
  }

  return {
    start: startGame
  };
})();
