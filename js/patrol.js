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
var PATROL_TEXTS = [
  { text: '你沿著洞穴邊緣緩慢移動，警惕地觀察四周。', textEn: 'You move slowly along the cave wall, watching your surroundings.' },
  { text: '你穿過一片石化結晶密集的區域。', textEn: 'You pass through an area dense with petrification crystals.' },
  { text: '你小心翼翼地避開地面上的石化水坑。', textEn: 'You carefully step around puddles of petrification water.' },
  { text: '你停下腳步，仔細聆聽……', textEn: 'You pause and listen carefully...' },
  { text: '你踢開一堆碎骨，繼續前進。', textEn: 'You kick aside a pile of bone fragments and press on.' },
  { text: '你蹲下身子，檢查地上的抓痕——是新的。', textEn: 'You crouch to inspect scratches on the ground — fresh ones.' },
  { text: '你繞過一具完全石化的蟲殼，不敢觸碰。', textEn: 'You skirt a fully petrified insect husk, not daring to touch it.' },
  { text: '你靠著岩壁調整呼吸，準備繼續前進。', textEn: 'You lean on the wall to steady your breath, then press on.' },
];

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
  loadNode('r0_look');
}

function runPatrolCycle() {
  if (!patrolActive) return;

  var monster = R0_MONSTERS[rng(0, R0_MONSTERS.length - 1)];
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
    if (mHp <= 0) {
      combatLog.push(L('第' + rounds + '回合：造成 ' + pAtk + ' 傷害——擊敗了' + monster.name + '！',
                        'Rd ' + rounds + ': deal ' + pAtk + ' — ' + monster.nameEn + ' defeated!'));
    } else {
      combatLog.push(L('第' + rounds + '回合：造成 ' + pAtk + ' 傷害，受到 ' + mAtk + ' 傷害',
                        'Rd ' + rounds + ': deal ' + pAtk + ', take ' + mAtk + ' dmg'));
    }
  }

  // Build timed queue
  var queue = [];

  // 2-3 patrol exploration lines
  var n = rng(2, 3), used = [];
  for (var i = 0; i < n; i++) {
    var idx; do { idx = rng(0, PATROL_TEXTS.length - 1); } while (used.indexOf(idx) !== -1);
    used.push(idx);
    var p = PATROL_TEXTS[idx];
    queue.push({ tag: L('巡邏','Patrol'), color: 'tag-move', text: L(p.text, p.textEn), delay: rng(1500, 2300) });
  }

  // Encounter
  queue.push({ tag: L('遭遇','Encounter'), color: 'tag-combat',
    html: L('發現了<b>' + monster.name + '</b>！', 'Encountered <b>' + monster.nameEn + '</b>!'),
    delay: 1200 });

  // Combat rounds
  for (var i = 0; i < combatLog.length; i++) {
    queue.push({ tag: L('戰鬥','Battle'), color: 'tag-combat', text: combatLog[i], delay: rng(700, 1000) });
  }

  // Result + apply effects
  var mXp = monster.xp + rng(0, 2);
  queue.push({ tag: L('結果','Result'), color: 'tag-item',
    text: L('勝利！ HP -' + totalDmg + '  石化 +' + totalPetri + '%  經驗 +' + mXp,
            'Victory! HP -' + totalDmg + '  Petri +' + totalPetri + '%  XP +' + mXp),
    delay: 1800,
    effect: function() {
      changeHp(-totalDmg);
      changePetri(totalPetri);
      gainXp(mXp);
      renderStatus();
    }
  });

  // Continue text
  queue.push({ tag: L('巡邏','Patrol'), color: 'tag-move',
    text: L('繼續巡邏……', 'Continuing patrol...'), delay: 2000 });

  // Process queue sequentially
  var qi = 0;
  function processNext() {
    if (!patrolActive) return;
    if (qi >= queue.length) {
      patrolTimers.push(setTimeout(runPatrolCycle, 500));
      return;
    }
    var step = queue[qi++];
    if (step.effect) step.effect();
    if (!patrolActive) return; // effect may have triggered death
    if (step.html) patrolAppend(step.tag, step.color, step.html, true);
    else patrolAppend(step.tag, step.color, step.text, false);
    patrolTimers.push(setTimeout(processNext, step.delay));
  }
  processNext();
}
