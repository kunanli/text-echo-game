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
    ]
  },
  { name: '灰蘑菇怪', nameEn: 'Grey Mushroom', hp: 8, atkMin: 1, atkMax: 4, petriDmg: 0, xp: 3,
    art: [
      '        ╭━━━━━╮',
      '      ╭╯ ◎  ◎ ╰╮',
      '    ╭╯  ╭────╮  ╰╮',
      '    ╰━━━┥    ┝━━━╯',
      '        │ ╱╲ │',
      '       ╱╱  ╲╲',
    ]
  },
  { name: '石蜥蜴幼體', nameEn: 'Baby Stone Lizard', hp: 18, atkMin: 3, atkMax: 7, petriDmg: 2, xp: 8,
    art: [
      '             ╱╲',
      '    ╱╲╱╲╱╲╱╱  ╲',
      '   ╱        ◆  ╲╶╮',
      '  ╱╱╲  ╱╲  ╰──╯  │',
      '    ╲╱╱  ╲╱  ╭╮╭╮╯',
      '             ╯╰╯╰',
    ]
  },
  { name: '石化鼠群', nameEn: 'Petrified Rat Swarm', hp: 15, atkMin: 2, atkMax: 6, petriDmg: 1, xp: 6,
    art: [
      '    ╭╮   ╭╮   ╭╮',
      '   (°>  (°>  (°>',
      '   ╱╱╲  ╱╱╲  ╱╱╲',
      '  ╱╱  ╲╱╱  ╲╱╱  ╲',
      '  ~╯   ~╯   ~╯',
    ]
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
    ]
  },
  { name: '鐵甲石蟲', nameEn: 'Ironclad Stonebug', hp: 28, atkMin: 5, atkMax: 9, petriDmg: 2, xp: 12,
    art: [
      '     ╭══════╮',
      '    ╱ ◆ ══ ◆ ╲',
      '   │══════════│',
      '   │ ▓▓▓▓▓▓▓▓ │',
      '   │══════════│',
      '    ╲╱╲╱╲╱╲╱╲╱',
    ]
  },
  { name: '石化礦工亡魂', nameEn: 'Petrified Miner Ghost', hp: 20, atkMin: 3, atkMax: 10, petriDmg: 3, xp: 14,
    art: [
      '      ╱▔▔▔╲',
      '     │ ● ● │',
      '     │  ▽  │',
      '    ╱░░░░░░░╲',
      '   │ ░░╋░░░ │',
      '    ·  · ·  ·',
    ]
  },
  { name: '結晶蝎', nameEn: 'Crystal Scorpion', hp: 25, atkMin: 6, atkMax: 11, petriDmg: 3, xp: 15,
    art: [
      '        ╭╮',
      '       ╱◆ ╲╮',
      '    ╱━╱    ╲━╲',
      '   ╱ ╱ ◉  ◉ ╲ ╲',
      '  ╱━╱╲╱╲╱╲╱╲╱━╲',
      '  ╲╱  ╱╲  ╱╲  ╲╱',
    ]
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
      combatLog.push(L(
        av.zh + '造成 ' + pAtk + ' 傷害' + dv.zh + monster.name + '！',
        av.en + pAtk + ' dmg' + dv.en + monster.nameEn + ' defeated!'
      ));
    } else {
      combatLog.push(L(
        av.zh + '造成 ' + pAtk + ' 傷害。' + monster.name + cv.zh + ' 受到 ' + mAtk + ' 傷害。',
        av.en + pAtk + ' dmg. ' + monster.nameEn + ' ' + cv.en + ' Take ' + mAtk + ' dmg.'
      ));
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

  // Combat rounds (with dramatic pacing)
  for (var i = 0; i < combatLog.length; i++) {
    var isLast = (i === combatLog.length - 1);
    queue.push({ tag: L('戰鬥','Battle'), color: 'tag-combat', text: combatLog[i],
      delay: isLast ? rng(2000, 2800) : rng(1500, 2200), pending: true });
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
      if (step.effect) step.effect();
      if (!patrolActive) return; // effect may have triggered death
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
