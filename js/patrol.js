// ══ Patrol / Idle Grind System ══
var R0_MONSTERS = [
  { name: '石化蝙蝠', nameEn: 'Petrified Bat', hp: 12, atkMin: 2, atkMax: 5, petriDmg: 1, xp: 5,
    art: [
      '        ╱╲    ╱╲',
      '       ╱  ╲╭╮╱  ╲',
      '      ╱  ╱ ◉◉ ╲  ╲',
      '     ╱  ╱  ╰╯  ╲  ╲',
      '    ╱__╱  ╱╲╱╲  ╲__╲',
      '          ╰──╯',
    ],
    commune: [
      { zh: '你發出輕柔的聲音……蝙蝠的翅膀微微停頓。', en: 'You make a soft sound... the bat\'s wings pause briefly.' },
      { zh: '它歪著頭看你，石化的眼中似乎有一絲困惑。', en: 'It tilts its head at you, a hint of confusion in its stone eyes.' },
      { zh: '蝙蝠收起翅膀，不再攻擊，靜靜地懸掛在空中。', en: 'The bat folds its wings, hanging still in the air.' },
    ],
    spareText: { zh: '石化蝙蝠發出一聲細小的嗚咽，拍著翅膀飛向洞穴深處。', en: 'The bat lets out a tiny whimper and flutters away into the cave.' },
  },
  { name: '灰蘑菇怪', nameEn: 'Grey Mushroom', hp: 8, atkMin: 1, atkMax: 4, petriDmg: 0, xp: 3,
    empathyGoal: 2,
    art: [
      '        ╭━━━━━╮',
      '      ╭╯ ◎  ◎ ╰╮',
      '    ╭╯  ╭────╮  ╰╮',
      '    ╰━━━┥    ┝━━━╯',
      '        │ ╱╲ │',
      '       ╱╱  ╲╲',
    ],
    commune: [
      { zh: '你蹲下身……蘑菇怪的孢子散發出溫和的光芒。', en: 'You crouch down... the mushroom\'s spores glow warmly.' },
      { zh: '它搖了搖傘蓋，似乎在跟你打招呼。', en: 'It wobbles its cap, as if greeting you.' },
    ],
    spareText: { zh: '灰蘑菇怪滿意地縮回地面，留下一小撮發光的孢子。', en: 'The mushroom happily sinks back into the ground, leaving glowing spores.' },
  },
  { name: '石蜥蜴幼體', nameEn: 'Baby Stone Lizard', hp: 18, atkMin: 3, atkMax: 7, petriDmg: 2, xp: 8,
    art: [
      '             ╱╲',
      '    ╱╲╱╲╱╲╱╱  ╲',
      '   ╱        ◆  ╲╶╮',
      '  ╱╱╲  ╱╲  ╰──╯  │',
      '    ╲╱╱  ╲╱  ╭╮╭╮╯',
      '             ╯╰╯╰',
    ],
    commune: [
      { zh: '你伸出手……幼蜥蜴警惕地後退，但沒有逃走。', en: 'You extend your hand... the baby lizard backs away but doesn\'t flee.' },
      { zh: '它的尾巴輕輕拍打地面，像是幼獸在試探你。', en: 'Its tail taps the ground lightly, like a young creature testing you.' },
      { zh: '石蜥蜴幼體蹭了蹭你的手指，粗糙的鱗片帶著微溫。', en: 'The baby lizard nuzzles your fingers, its rough scales faintly warm.' },
    ],
    spareText: { zh: '石蜥蜴幼體發出輕快的叫聲，蹦跳著跑向石縫。也許它的母親還在某處等著。', en: 'The baby lizard chirps and bounces away toward a crevice. Perhaps its mother waits somewhere.' },
  },
  { name: '石化鼠群', nameEn: 'Petrified Rat Swarm', hp: 15, atkMin: 2, atkMax: 6, petriDmg: 1, xp: 6,
    empathyGoal: 4,
    art: [
      '    ╭╮   ╭╮   ╭╮',
      '   (°>  (°>  (°>',
      '   ╱╱╲  ╱╱╲  ╱╱╲',
      '  ╱╱  ╲╱╱  ╲╱╱  ╲',
      '  ~╯   ~╯   ~╯',
    ],
    commune: [
      { zh: '你靜靜地蹲下……幾隻老鼠停止了啃咬。', en: 'You crouch quietly... a few rats stop gnawing.' },
      { zh: '牠們圍繞著你轉圈，似乎在嗅探你的氣息。', en: 'They circle around you, seeming to sniff your scent.' },
      { zh: '一隻老鼠站起身，石化的眼睛裡映出你的倒影。', en: 'One rat stands up, your reflection glinting in its stone eyes.' },
      { zh: '鼠群漸漸安靜下來，牠們不再把你當作威脅。', en: 'The swarm calms down, no longer seeing you as a threat.' },
    ],
    spareText: { zh: '鼠群一哄而散，消失在石縫中。臨走前，一隻老鼠叼來了什麼東西放在你腳邊。', en: 'The rats scatter into crevices. Before leaving, one drops something at your feet.' },
  },
];

var R1_MONSTERS = [
  { name: '礦脈蠕蟲', nameEn: 'Ore Vein Worm', hp: 22, atkMin: 4, atkMax: 8, petriDmg: 2, xp: 10,
    art: [
      '    ╭━━━╮',
      '   ╱ ◎◎ ╲━━╮',
      '  │ ╰──╯ ░░╲',
      '   ╲░░░░░░░░│',
      '    ╰━╮░░╭━╯',
      '      ╰━━╯',
    ],
    commune: [
      { zh: '你觸碰洞壁……蠕蟲停止鑽動，身體的振動傳入你掌中。', en: 'You touch the wall... the worm stops burrowing, its vibrations running through your palm.' },
      { zh: '它的身軀緩緩環繞在你周圍，卻沒有收緊。', en: 'Its body slowly coils around you, but doesn\'t tighten.' },
      { zh: '蠕蟲貼著石壁安靜下來，彷彿回到了某種古老的本能。', en: 'The worm settles against the wall, as if returning to some ancient instinct.' },
    ],
    spareText: { zh: '礦脈蠕蟲鑽入石壁，留下一條閃著礦光的隧道。', en: 'The worm burrows into the wall, leaving a tunnel that glints with ore.' },
  },
  { name: '鐵甲石蟲', nameEn: 'Ironclad Stonebug', hp: 28, atkMin: 5, atkMax: 9, petriDmg: 2, xp: 12,
    empathyGoal: 4,
    art: [
      '     ╭══════╮',
      '    ╱ ◆ ══ ◆ ╲',
      '   │══════════│',
      '   │ ▓▓▓▓▓▓▓▓ │',
      '   │══════════│',
      '    ╲╱╲╱╲╱╲╱╲╱',
    ],
    commune: [
      { zh: '你敲了敲它的甲殼……一陣沉悶的迴響。', en: 'You tap its shell... a hollow echo resonates.' },
      { zh: '石蟲縮起身體，但甲殼縫隙間傳來微弱的呼吸聲。', en: 'The bug curls up, but faint breathing sounds come from between its plates.' },
      { zh: '你感覺到甲殼下有一顆溫熱的心。它只是害怕。', en: 'You sense a warm heart beneath the shell. It\'s just afraid.' },
      { zh: '鐵甲石蟲的甲殼微微張開，露出柔軟的腹部——它信任你了。', en: 'The stonebug\'s shell opens slightly, showing its soft belly — it trusts you.' },
    ],
    spareText: { zh: '鐵甲石蟲翻了個身，像一顆圓石般滾向暗處，發出咔嗒咔嗒的聲音。', en: 'The stonebug rolls away like a boulder, its plates clicking softly.' },
  },
  { name: '石化礦工亡魂', nameEn: 'Petrified Miner Ghost', hp: 20, atkMin: 3, atkMax: 10, petriDmg: 3, xp: 14,
    empathyGoal: 2,
    art: [
      '      ╱▔▔▔╲',
      '     │ ● ● │',
      '     │  ▽  │',
      '    ╱░░░░░░░╲',
      '   │ ░░╋░░░ │',
      '    ·  · ·  ·',
    ],
    commune: [
      { zh: '「……家人……還在等我嗎？」你聽見了微弱的呢喃。', en: '"...family... are they still waiting?" You hear a faint murmur.' },
      { zh: '亡魂的輪廓逐漸清晰——那是一位年邁的礦工，眼中含著淚光。', en: 'The ghost\'s form clarifies — an elderly miner, tears in its eyes.' },
    ],
    spareText: { zh: '礦工亡魂向你深深鞠了一躬：「謝謝你……記得我就好。」它的身影化為光點消散。', en: 'The miner\'s ghost bows deeply: "Thank you... just remember me." Its form dissolves into light.' },
  },
  { name: '結晶蝎', nameEn: 'Crystal Scorpion', hp: 25, atkMin: 6, atkMax: 11, petriDmg: 3, xp: 15,
    empathyGoal: 4,
    art: [
      '        ╭╮',
      '       ╱◆ ╲╮',
      '    ╱━╱    ╲━╲',
      '   ╱ ╱ ◉  ◉ ╲ ╲',
      '  ╱━╱╲╱╲╱╲╱╲╱━╲',
      '  ╲╱  ╱╲  ╱╲  ╲╱',
    ],
    commune: [
      { zh: '你小心地靠近……結晶蝎舉起尾刺，但遲遲沒有攻擊。', en: 'You approach carefully... the scorpion raises its stinger but doesn\'t strike.' },
      { zh: '你注意到它的巢穴裡有小小的結晶卵——它在保護後代。', en: 'You notice tiny crystal eggs in its nest — it\'s protecting its young.' },
      { zh: '你緩緩後退，表示不會碰觸那些卵。蝎子放下了尾刺。', en: 'You slowly back away from the eggs. The scorpion lowers its stinger.' },
      { zh: '結晶蝎用螯小心翼翼地碰了碰你的手——一個和平的碰觸。', en: 'The scorpion gently touches your hand with its claw — a peaceful gesture.' },
    ],
    spareText: { zh: '結晶蝎回到巢穴，用身體護住那些結晶卵。在牠轉身的瞬間，你看見甲殼上刻著古老的符文。', en: 'The scorpion returns to its nest, shielding the crystal eggs. As it turns, you see ancient runes etched on its shell.' },
  },
];

var R0_PATROL_TEXTS = [
  { text: '你沿著洞穴邊緣緩慢移動，警惕地觀察四周。', textEn: 'You move slowly along the cave wall, watching your surroundings.' },
  { text: '你穿過一片石化結晶密集的區域。', textEn: 'You pass through an area dense with petrification crystals.' },
  { text: '你小心翼翼地避開地面上的石化水坑。', textEn: 'You carefully step around puddles of petrification water.' },
  { text: '你停下腳步，仔細聆聽……', textEn: 'You pause and listen carefully...' },
  { text: '你踢開一堆碎骨，繼續前進。', textEn: 'You kick aside a pile of bone fragments and press on.' },
  { text: '你蹲下身子，檢查地上的抓痕——是新的。', textEn: 'You crouch to inspect scratches on the ground — fresh ones.' },
  { text: '你繞過一具完全石化的蟲殼，不敢觸碰。', textEn: 'You skirt a fully petrified insect husk, not daring to touch it.' },
  { text: '你靠著岩壁調整呼吸，準備繼續前進。', textEn: 'You lean on the wall to steady your breath, then press on.' },
];

var R1_PATROL_TEXTS = [
  { text: '你沿著鐵軌前進，鏽蝕的金屬在腳下吱嘎作響。', textEn: 'You follow the rails, rusted metal creaking underfoot.' },
  { text: '礦脈的幽藍冷光映照出你警惕的身影。', textEn: 'The cold blue glow of ore veins casts your wary silhouette.' },
  { text: '你經過一處坍塌的支撐柱，小心地繞了過去。', textEn: 'You pass a collapsed support pillar, carefully skirting it.' },
  { text: '牆壁上的結晶發出微弱的脈動聲，像是心跳。', textEn: 'Crystals on the wall pulse faintly, like a heartbeat.' },
  { text: '你聽到遠處傳來鐵器碰撞的聲音——也許是風。', textEn: 'Clanging iron echoes from afar — perhaps just the wind.' },
  { text: '地面上散落著生鏽的採礦工具。', textEn: 'Rusted mining tools litter the ground.' },
  { text: '你踩過一片碎裂的石化礦石，發出清脆的聲響。', textEn: 'You step on shattered petri-ore, a crisp crunch echoing.' },
  { text: '一陣冰冷的氣流從走廊深處吹來，夾帶著石化粒子。', textEn: 'A freezing draft from deep in the corridor carries petri-particles.' },
];

// Region-aware helpers
var PATROL_TEXTS = R0_PATROL_TEXTS; // kept for backwards compat
function getPatrolMonsters() { return state.region >= 1 ? R1_MONSTERS : R0_MONSTERS; }
function getPatrolTexts() { return state.region >= 1 ? R1_PATROL_TEXTS : R0_PATROL_TEXTS; }
function getPatrolReturnNode() { return state.region >= 1 ? 'r1_look' : 'r0_look'; }

var patrolActive = false;
var patrolTimers = [];

function clearPatrolTimers() {
  patrolTimers.forEach(clearTimeout);
  patrolTimers = [];
}

function patrolAppend(tag, tagColor, content, isHtml) {
  var line = document.createElement('div');
  line.className = 'log-line';
  var tsEl = document.createElement('span');
  tsEl.className = 'log-ts';
  tsEl.textContent = fmtTime(autoElapsed);
  line.appendChild(tsEl);
  if (tag) {
    var tagEl = document.createElement('span');
    tagEl.className = 'log-tag ' + (tagColor || 'tag-explore');
    tagEl.textContent = '[' + tag + ']';
    line.appendChild(tagEl);
  }
  var cs = document.createElement('span');
  if (isHtml) cs.innerHTML = content; else cs.textContent = content;
  line.appendChild(cs);
  $story.appendChild(line);
  $story.scrollTop = $story.scrollHeight;
}

function patrolAppendArt(artLines, className) {
  var pre = document.createElement('pre');
  pre.className = 'ascii-art ' + (className || '');
  pre.textContent = artLines.join('\n');
  $story.appendChild(pre);
  $story.scrollTop = $story.scrollHeight;
}

function startPatrol() {
  stopAuto();
  clearPatrolTimers();
  patrolActive = true;
  state.mood = 'combat';
  renderStatus();
  appendDivider();
  showExploreBar(L('警戒巡邏中', 'Patrolling'));
  autoClockTimer = setInterval(function() {
    autoElapsed += 200;
    updateExploreTimer();
  }, 200);
  // Persistent stop button
  $choices.innerHTML = '';
  currentChoices = [];
  var btn = document.createElement('button');
  btn.className = 'choice-btn';
  btn.textContent = L('停下腳步', 'Stop and rest');
  btn.addEventListener('click', stopPatrol);
  $choices.appendChild(btn);
  setTimeout(function() {
    $choices.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 200);
  runPatrolCycle();
}

function stopPatrol() {
  patrolActive = false;
  clearPatrolTimers();
  state.mood = 'normal';
  if (autoClockTimer) { clearInterval(autoClockTimer); autoClockTimer = null; }
  finishExploreBar();
  renderStatus();
  loadNode(getPatrolReturnNode());
}

// ── Suspense texts before encounter ──
var SUSPENSE_TEXTS = [
  { zh: '你停下了腳步——有什麼在靠近……', en: 'You freeze — something draws near...' },
  { zh: '前方傳來異樣的聲響……你握緊了武器。', en: 'Strange sounds ahead... You tighten your grip.' },
  { zh: '空氣突然變得凝重，你屏住了呼吸。', en: 'The air grows heavy. You hold your breath.' },
  { zh: '腳下的碎石突然震動——有東西來了。', en: 'Gravel trembles underfoot — something approaches.' },
  { zh: '一股殺意從暗處襲來，你本能地戒備。', en: 'Killing intent washes over you. You brace instinctively.' },
];

// ── Attack / counter verb pools for vivid combat text ──
var ATK_VERBS = [
  { zh: '你揮出一擊——', en: 'You swing — ' },
  { zh: '你猛力出手——', en: 'You strike hard — ' },
  { zh: '你找到破綻突刺——', en: 'You find an opening — ' },
  { zh: '你衝上前攻擊——', en: 'You rush in — ' },
  { zh: '你側身劈砍——', en: 'You slash from the side — ' },
];
var COUNTER_VERBS = [
  { zh: '反擊了！', en: 'strikes back!' },
  { zh: '猛撲而來！', en: 'lunges at you!' },
  { zh: '揮爪回擊！', en: 'claws back!' },
  { zh: '狠狠撞來！', en: 'charges at you!' },
];
var DEFEAT_VERBS = [
  { zh: '——致命一擊！擊敗了', en: ' — a killing blow! ' },
  { zh: '——貫穿要害！擊倒了', en: ' — a critical strike! ' },
  { zh: '——最後一擊命中！擊敗了', en: ' — the final blow lands! ' },
];

function runPatrolCycle() {
  if (!patrolActive) return;

  var monsters = getPatrolMonsters();
  var monster = monsters[rng(0, monsters.length - 1)];
  var mName = L(monster.name, monster.nameEn);

  // Pre-simulate combat
  var mHp = monster.hp;
  var totalDmg = 0, totalPetri = 0, rounds = 0;
  var combatLog = [];
  while (mHp > 0 && rounds < 12) {
    rounds++;
    var pAtk = rng(Math.max(1, state.str), state.str + 4);
    var mAtk = rng(monster.atkMin, monster.atkMax);
    mHp -= pAtk;
    totalDmg += mAtk;
    totalPetri += monster.petriDmg;

    var av = ATK_VERBS[rng(0, ATK_VERBS.length - 1)];
    var cv = COUNTER_VERBS[rng(0, COUNTER_VERBS.length - 1)];

    if (mHp <= 0) {
      var dv = DEFEAT_VERBS[rng(0, DEFEAT_VERBS.length - 1)];
      combatLog.push({ who: 'player', text: L(
        av.zh + '造成 ' + pAtk + ' 傷害' + dv.zh + monster.name + '！',
        av.en + pAtk + ' dmg' + dv.en + monster.nameEn + ' defeated!'
      )});
    } else {
      combatLog.push({ who: 'player', text: L(
        av.zh + '造成 ' + pAtk + ' 傷害。',
        av.en + pAtk + ' dmg.'
      )});
      combatLog.push({ who: 'enemy', text: L(
        monster.name + cv.zh + ' 受到 ' + mAtk + ' 傷害。',
        monster.nameEn + ' ' + cv.en + ' Take ' + mAtk + ' dmg.'
      )});
    }
  }

  // Build timed queue
  var queue = [];

  // 2-3 patrol exploration lines
  var patrolPool = getPatrolTexts();
  var n = rng(2, 3), used = [];
  for (var i = 0; i < n; i++) {
    var idx; do { idx = rng(0, patrolPool.length - 1); } while (used.indexOf(idx) !== -1);
    used.push(idx);
    var p = patrolPool[idx];
    queue.push({ tag: L('巡邏','Patrol'), color: 'tag-move', text: L(p.text, p.textEn), delay: rng(1500, 2300) });
  }

  // Suspense line — tension build-up before encounter
  var suspense = SUSPENSE_TEXTS[rng(0, SUSPENSE_TEXTS.length - 1)];
  queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
    text: L(suspense.zh, suspense.en), delay: 2200, pending: true });

  // Monster ASCII art
  queue.push({ art: monster.art, artClass: 'monster-art', delay: 1800, pending: true });

  // Encounter announcement
  queue.push({ tag: L('遭遇','Encounter'), color: 'tag-combat',
    html: L('一隻<b>' + monster.name + '</b>出現了！進入戰鬥！',
            'A <b>' + monster.nameEn + '</b> appears! Entering combat!'),
    delay: 1800 });

  // Combat rounds (with dramatic pacing — player and enemy on separate lines)
  for (var i = 0; i < combatLog.length; i++) {
    var entry = combatLog[i];
    var isLast = (i === combatLog.length - 1);
    var tag = entry.who === 'enemy' ? L('反擊','Counter') : L('戰鬥','Battle');
    var color = entry.who === 'enemy' ? 'tag-warn' : 'tag-combat';
    var d = entry.who === 'enemy' ? rng(1200, 1800) : (isLast ? rng(2000, 2800) : rng(1500, 2200));
    queue.push({ tag: tag, color: color, text: entry.text,
      delay: d, pending: entry.who === 'player' });
  }

  // Result + apply effects
  var mXp = monster.xp + rng(0, 2);
  queue.push({ tag: L('結果','Result'), color: 'tag-item',
    text: L('勝利！ HP -' + totalDmg + '  石化 +' + totalPetri + '%  經驗 +' + mXp,
            'Victory! HP -' + totalDmg + '  Petri +' + totalPetri + '%  XP +' + mXp),
    delay: 2000,
    pending: true,
    effect: function() {
      changeHp(-totalDmg);
      changePetri(totalPetri);
      gainXp(mXp);
      renderStatus();
    }
  });

  // Continue text
  queue.push({ tag: L('巡邏','Patrol'), color: 'tag-move',
    text: L('繼續巡邏……', 'Continuing patrol...'), delay: 2200 });

  // Process queue sequentially with pending indicators for tension
  var qi = 0;
  function processNext() {
    if (!patrolActive) return;
    if (qi >= queue.length) {
      patrolTimers.push(setTimeout(runPatrolCycle, 500));
      return;
    }
    var step = queue[qi++];

    function renderAndContinue() {
      if (!patrolActive) return;
      if (step.effect) {
        try { step.effect(); } catch(e) {}
      }
      // Check if player died (die() sets patrolActive = false via stopPatrol or directly)
      if (!patrolActive || state.hp <= 0 || state.petri >= 100) return;
      if (step.art) {
        patrolAppendArt(step.art, step.artClass || '');
      } else if (step.html) {
        patrolAppend(step.tag, step.color, step.html, true);
      } else {
        patrolAppend(step.tag, step.color, step.text, false);
      }
      patrolTimers.push(setTimeout(processNext, step.delay));
    }

    // Show pending indicator before dramatic moments
    if (step.pending) {
      showPending();
      patrolTimers.push(setTimeout(function() {
        removePending();
        renderAndContinue();
      }, 650));
    } else {
      renderAndContinue();
    }
  }
  processNext();
}
