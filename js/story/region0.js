// ══ Region 0 — 祭獻坑 ══

// ═══════════════════════════════════════════════════
//  Region 0 — 祭獻坑
// ═══════════════════════════════════════════════════

registerNode('r0_start', () => {
  state.region = 0;
  autoExplore([
    { tag: '系統', tagColor: 'tag-system', text: '意識逐漸恢復……', textEn: 'Consciousness slowly returning...', delay: 2500 },
    { tag: '系統', tagColor: 'tag-system', text: '正在載入感官……', textEn: 'Senses loading...', delay: 2000 },
    { art: `<pre class="ascii-art">
  .    ·        ✦        .              ·    .     ✦
       .    .        .        ·    .        .
  ·         .    ·        .         .    ·        .
       _______________===_______________
      /   \\                           /   \\
     /     \\    .    ·    .    ·     /     \\
    /       \\                       /       \\
   |    .    \\         |           /    .    |
   |          \\        |          /          |
   |     ·     \\       |         /     ·     |
    \\           \\      |        /           /
     \\     .     \\     |       /     .     /
      \\           \\    |      /           /
       \\     ·     \\   |     /     ·     /
        \\___________\\  |    /___________/
              .      \\ | | /      .
                      \\|_|/
                   ____V V____
                  /  ░░░░░░░  \\
                 / ░░░░░░░░░░░ \\
                / ░░░  祭  ░░░░ \\
               / ░░░░  獻  ░░░░░ \\
              / ░░░░░  坑  ░░░░░░ \\
             / ░░░░░░░░░░░░░░░░░░░ \\
            /___░░░==========░░░____\\
           /~~~~~~~~~~~~~~~~~~~~~~~~~\\
</pre>`, artEn: `<pre class="ascii-art">
  .    ·        ✦        .              ·    .     ✦
       .    .        .        ·    .        .
  ·         .    ·        .         .    ·        .
       _______________===_______________
      /   \\                           /   \\
     /     \\    .    ·    .    ·     /     \\
    /       \\                       /       \\
   |    .    \\         |           /    .    |
   |          \\        |          /          |
   |     ·     \\       |         /     ·     |
    \\           \\      |        /           /
     \\     .     \\     |       /     .     /
      \\           \\    |      /           /
       \\     ·     \\   |     /     ·     /
        \\___________\\  |    /___________/
              .      \\ | | /      .
                      \\|_|/
                   ____V V____
                  /  ░░░░░░░  \\
                 / ░░░░░░░░░░░ \\
                / ░░ Sacrifi- ░░ \\
               / ░░░  -cial   ░░░ \\
              / ░░░░   Pit    ░░░░ \\
             / ░░░░░░░░░░░░░░░░░░░ \\
            /___░░░==========░░░____\\
           /~~~~~~~~~~~~~~~~~~~~~~~~~\\
</pre>`, delay: 1000 },
    { tag: '意識', tagColor: 'tag-petri', text: '你在黑暗中睜開眼睛。', textEn: 'You open your eyes in the darkness.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '……什麼都看不見。只有無盡的黑暗。', textEn: '...Nothing visible. Only endless darkness.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '冰冷的石地貼著你的背脊。', textEn: 'Cold stone presses against your back.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '空氣中瀰漫著潮濕與石灰石的苦味。', textEn: 'The air reeks of moisture and bitter limestone.', delay: 2200 },
    { tag: '身體', tagColor: 'tag-petri', text: '你嘗試動一動手指……', textEn: 'You try to wiggle your fingers...', delay: 3000 },
    { tag: '警告', tagColor: 'tag-warn', html: '你的四肢僵硬——左手的指尖已經泛灰，隱隱有<b>石化</b>的紋路蔓延。', htmlEn: 'Your limbs are stiff — the fingertips of your left hand have turned grey, with <b>petrification</b> patterns spreading.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '頭頂上方，遙遠的裂縫透出一絲微光。', textEn: 'Far above, a faint gleam seeps through a distant crack.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', html: '你被扔進了<b>祭獻坑</b>——地下世界最深處的垃圾場。', htmlEn: 'You were thrown into the <b>Sacrificial Pit</b> — the deepest dumping ground of the underworld.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '被石化瘟疫感染、不再有利用價值的人，都會被丟到這裡。', textEn: 'Those consumed by the Stone Plague, no longer of use, are cast down here.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '自從礦工們挖穿了地底的封印，這場瘟疫就再也沒有停過。', textEn: 'Ever since the miners breached the seal deep underground, the plague has never stopped.', delay: 2800 },
    { tag: '環境', tagColor: 'tag-system', text: '遠處傳來石塊掉落的聲音。不——是挖掘聲。某些東西仍在無休止地鑿穿岩壁。', textEn: 'The sound of falling stones echoes in the distance. No — digging. Something still tunnels endlessly through rock.', delay: 2800 },
    { tag: '決意', tagColor: 'tag-info', text: '你知道——你必須向上攀升。大上升。', textEn: 'You know — you must climb upward. The Great Ascent.', delay: 2000 },
  ], [
    { text: '檢查自己的身體', textEn: 'Examine your body', action: () => loadNode('r0_body') },
    { text: '觀察周圍環境', textEn: 'Survey your surroundings', action: () => loadNode('r0_look') },
    { text: '直接尋找出路', textEn: 'Search for an exit', action: () => loadNode('r0_path') },
  ], { label: L('正在甦醒', 'Awakening') });
});

registerNode('r0_body', () => {
  autoExplore([
    { art: `<pre class="ascii-art purple">
              _____
             / · · \\
            |  ___  |
             \\_____/
               |.|
          ─────┤.├─────
         /     |.|     \\
        /      |.|      \\
       /       |.|       \\
    ░░/░░      |.|        \\
   ░░/░░░░     |.|         \\
  ░░░░░░░░░    |.|
  ░░░░░░░░░   / · \\
  ░░░░░░░    /     \\
   ░░░░░    /       \\
    ░░░    /         \\
           |         |
           |         |
     ══════╧═════════╧══════
       石化紋路蔓延中……
</pre>`, artEn: `<pre class="ascii-art purple">
              _____
             / · · \\
            |  ___  |
             \\_____/
               |.|
          ─────┤.├─────
         /     |.|     \\
        /      |.|      \\
       /       |.|       \\
    ░░/░░      |.|        \\
   ░░/░░░░     |.|         \\
  ░░░░░░░░░    |.|
  ░░░░░░░░░   / · \\
  ░░░░░░░    /     \\
   ░░░░░    /       \\
    ░░░    /         \\
           |         |
           |         |
     ══════╧═════════╧══════
     Petrification spreads...
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你低頭審視自己。', textEn: 'You look down at yourself.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '衣衫襤褸，腳上沒有鞋。', textEn: 'Ragged clothes, no shoes.', delay: 2200 },
    { tag: '身體', tagColor: 'tag-sense', text: '你活動了一下手臂……關節僵硬但還能動。', textEn: 'You move your arms... stiff joints, but functional.', delay: 2500 },
    { tag: '石化', tagColor: 'tag-petri', text: '左手的石化紋路從指尖延伸到手腕。', textEn: 'Petrification patterns spread from fingertips to wrist on your left hand.', delay: 2800 },
    { tag: '石化', tagColor: 'tag-petri', text: '那股冰涼的麻痺感正在緩慢擴散……', textEn: 'That cold, numbing sensation is slowly expanding...', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你的身體還算結實，也許是最近才被丟下來的。', textEn: 'Your body is still sturdy — you were probably thrown down recently.', delay: 2500 },
    { tag: '記憶', tagColor: 'tag-system', text: '記憶一片模糊……', textEn: 'Memories are hazy...', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '唯一記得的，是墜落前那些穿著灰袍的長老，和他們面無表情的臉。', textEn: 'The only memory — grey-robed elders before the fall, their expressionless faces.', delay: 2500 },
    { tag: '記憶', tagColor: 'tag-system', text: '「爐灶少女」……這個詞從腦海深處浮起，像刀一樣刺痛。', textEn: '"Hearth-Maiden"... the word surfaces from deep within, sharp as a blade.', delay: 2800 },
  ], [
    { text: '嘗試活動關節，恢復身體機能', textEn: 'Stretch your joints to restore mobility', action: () => {
      changeStat('agi', 1);
      notify(L('敏捷 +1', 'AGI +1'));
      loadNode('r0_look');
    }},
    { text: '集中精神，抵抗石化的侵蝕', textEn: 'Focus your mind to resist petrification', action: () => {
      changeStat('wil', 1);
      changePetri(-3);
      notify(L('意志 +1，石化度 -3%', 'WIL +1, Petri -3%'));
      loadNode('r0_look');
    }},
  ], { label: L('檢查身體', 'Examining body') });
});

registerNode('r0_look', () => {
  var firstVisit = !state.flags.lookedAround;
  state.flags.lookedAround = true;

  var mapArt = { art: `<pre class="ascii-art">
          ┌──── 北：攀爬痕跡 ────┐
          │  /│  ^  ^   ^  ^    │
          │ / │ /│ /│  /│ /│    │
          │/  │/ │/ │ / │/ │    │
          │   │  │  │/  │  │    │
  ════════╧═══╧══╧══╧═══╧══╧════════
  ·    .    .    . ·  .    .    ·
     .   .    @@@@    .   .
  ·    .    . @@@@  .    .    ·
     .  石化殘肢  .  屍體   .
  ·    .   .    . ·  .    .    ·
     .   .    .   .    .   .
  ~石~ ·   你 ←─── · ───→   ~石~
     ~化~    .   .    .   ~化~
  ·    ~顆~   .    .   ~顆~    ·
     .   ~粒~  .   . ~粒~  .
  ════════╤═══╤════════╤═══╤════════
          │   │~~~~~~~~│   │
          │   │~ 水聲 ~│   │
          │   │~~~~~~~~│   │
          └──── 南：裂縫 ────┘
</pre>`, artEn: `<pre class="ascii-art">
          ┌──── N: Climbing Marks ────┐
          │  /│  ^  ^   ^  ^    │
          │ / │ /│ /│  /│ /│    │
          │/  │/ │/ │ / │/ │    │
          │   │  │  │/  │  │    │
  ════════╧═══╧══╧══╧═══╧══╧════════
  ·    .    .    . ·  .    .    ·
     .   .    @@@@    .   .
  ·    .    . @@@@  .    .    ·
     . Petrified limbs . Corpse .
  ·    .   .    . ·  .    .    ·
     .   .    .   .    .   .
  ~ore~ ·  You ←── · ──→   ~ore~
     ~vein~  .   .    . ~vein~
  ·    ~glow~  .    . ~glow~   ·
     .   ~*~   .   .  ~*~  .
  ════════╤═══╤════════╤═══╤════════
          │   │~~~~~~~~│   │
          │   │~ Water ~│   │
          │   │~~~~~~~~│   │
          └──── S: Crack ────┘
</pre>`, delay: 800 };

  var steps = firstVisit ? [
    { tag: '行動', tagColor: 'tag-move', text: '你緩緩站起身來。', textEn: 'You slowly rise to your feet.', delay: 2000 },
    { tag: '探索', tagColor: 'tag-explore', text: '環顧四周……', textEn: 'Looking around...', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '等待眼睛適應黑暗……', textEn: 'Waiting for your eyes to adjust to the darkness...', delay: 3000 },
    mapArt,
    { tag: '探索', tagColor: 'tag-explore', text: '祭獻坑是一個不規則的天然洞穴，大約十來步寬。', textEn: 'The Sacrificial Pit is an irregular natural cave, roughly ten paces wide.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '地面散落著碎石和……那些是骨頭，還是石化殘肢，你分不清楚。', textEn: 'The ground is littered with rubble and... bones? Petrified limbs? Hard to tell.', delay: 2800 },
    { tag: '探索', tagColor: 'tag-explore', text: '掃描東側……岩壁看似光滑，但角落處有些不自然的石塊堆疊。', textEn: 'Scanning east... the wall looks smooth, but there\'s an unnatural pile of rocks in the corner.', delay: 2500 },
    { tag: '探索', tagColor: 'tag-explore', text: '掃描西側……幾個已經完全石化的人形，蜷縮在角落。', textEn: 'Scanning west... several fully petrified figures, curled up in the corner.', delay: 2800 },
    { tag: '發現', tagColor: 'tag-item', html: '角落裡有一具<b>半石化的屍體</b>，手中似乎還握著什麼。', htmlEn: 'In the corner, a <b>half-petrified corpse</b> seems to be clutching something.', delay: 2500 },
    { tag: '發現', tagColor: 'tag-item', html: '北面岩壁上有模糊的<b>攀爬痕跡</b>——有人嘗試過往上爬。', htmlEn: 'The north wall bears faint <b>climbing marks</b> — someone tried to climb up.', delay: 2500 },
    { tag: '發現', tagColor: 'tag-item', html: '南面有一條狹窄的<b>裂縫</b>，黑暗中傳來微弱的水聲。', htmlEn: 'To the south, a narrow <b>crack</b> — faint sounds of water echo from within.', delay: 2200 },
  ] : [
    { tag: '行動', tagColor: 'tag-move', text: '你回到了祭獻坑中央，環顧四周。', textEn: 'You return to the center of the Sacrificial Pit and look around.', delay: 1500 },
    mapArt,
  ];

  autoExplore(steps, (function() {
    var c = [];
    if (state.flags.corpseSearched) {
      c.push({ text: '在坑底四處警戒', textEn: 'Stay alert and patrol the pit', action: () => loadNode('r0_patrol') });
    } else {
      c.push({ text: '查看西側的屍體和石化人形', textEn: 'Examine the corpse and petrified figures', action: () => loadNode('r0_corpse') });
    }
    c.push({ text: '查看北面攀爬痕跡', textEn: 'Check the climbing marks to the north', action: () => loadNode('r0_climb_check') });
    c.push({ text: '探索南面裂縫', textEn: 'Explore the southern crack', action: () => loadNode('r0_crack') });
    // Ferryman route — only after all 4 endings achieved
    if (typeof globalStats !== 'undefined' &&
        globalStats.endings.dawn > 0 && globalStats.endings.compromise > 0 &&
        globalStats.endings.lockdown > 0 && globalStats.endings.sacrifice > 0) {
      c.push({ text: '⚰ 走向深處傳來的低語……', textEn: '⚰ Follow the whispers from below...', action: () => loadNode('r0_ferryman_gate') });
    }
    return c;
  })(), { label: L('觀察環境', 'Observing area') });
});

registerNode('r0_patrol', () => {
  autoExplore([
    { tag: '判斷', tagColor: 'tag-move', text: '離開這裡之前，也許應該先清除周圍的威脅。', textEn: 'Before leaving, perhaps you should clear the threats lurking nearby.', delay: 2000,
      art: `<pre class="ascii-art">
    ╔══════════════════════════════════╗
    ║  ·  .    ·    .  ·    .    ·  . ║
    ║      ▓▓▓▓▓▓              ·      ║
    ║     ▓░░░░░▓    ·    .           ║
    ║    ▓░░░░░░░▓                    ║
    ║   ▓░░░░░░░░░▓  .        /\\     ║
    ║    ▓░░░░░░░▓          __/  \\    ║
    ║     ▓░░░░░▓    ·     /  ·· |    ║
    ║  .   ▓▓▓▓▓          | ·  · |    ║
    ║          ·    .   ·  |  ··  |    ║
    ║   ·  .      ·        \\____/     ║
    ╚══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
    ╔══════════════════════════════════╗
    ║  ·  .    ·    .  ·    .    ·  . ║
    ║      ▓▓▓▓▓▓              ·      ║
    ║     ▓░░░░░▓    ·    .           ║
    ║    ▓░░░░░░░▓                    ║
    ║   ▓░░░░░░░░░▓  .        /\\     ║
    ║    ▓░░░░░░░▓          __/  \\    ║
    ║     ▓░░░░░▓    ·     /  ·· |    ║
    ║  .   ▓▓▓▓▓          | ·  · |    ║
    ║          ·    .   ·  |  ··  |    ║
    ║   ·  .      ·        \\____/     ║
    ╚══════════════════════════════════╝
</pre>` },
    { tag: '感知', tagColor: 'tag-sense', text: '你握緊武器，壓低身體，沿著洞穴邊緣摸索前進。', textEn: 'You grip your weapon, crouch low, and creep along the cave walls.', delay: 2000 },
  ], [
    { text: '深入警戒搜索', textEn: 'Begin patrol sweep', action: () => startPatrol() },
    { text: '返回', textEn: 'Return', action: () => loadNode('r0_look') },
  ], { label: L('準備巡邏', 'Preparing patrol') });
});

registerNode('r0_corpse', () => {
  if (state.flags.corpseSearched) {
    renderScene(L('你已經搜過這具屍體了。石化的手指保持著握緊的姿態，再也無法鬆開。',
      'You\'ve already searched this corpse. The petrified fingers remain clenched, never to open again.'),
      [
        { text: '搜索東側岩壁的角落', textEn: 'Search the eastern wall corner', action: () => loadNode('r0_hidden') },
        { text: '靠著岩壁休息一下', textEn: 'Lean against the wall and rest', action: () => loadNode('r0_rest') },
        { text: '返回', textEn: 'Return', action: () => loadNode('r0_look') },
      ]);
    return;
  }
  state.flags.corpseSearched = true;
  autoExplore([
    { art: `<pre class="ascii-art">
            ___________
           /  R . I .  \\
          / . P .  . .  \\
         /_______________\\
         |  ░░░░░░░░░░░  |
         | ░░ _____  ░░░ |
         | ░░/ x x \\░░░░ |
         | ░░\\_____/░░░░░ |
         | ░░░░│.│░░░░░░░ |         ┌─────────┐
         | ░░──┤.├──░░░░░ |         │         │
         |░░░ /│.│\\  ░░░░ |─────────│  碎 石  │
         |░░ / │.│ \\  ░░░ |         │  匕 首  │
         |░░/  │.│  \\ ░░░ |         │ ◁====▷  │
         |░░  / · \\  ░░░░ |         └─────────┘
         |░░ /     \\ ░░░░ |
         |░░/       \\ ░░░ |
         |_/____░____\\____|
        /  ░ 石 化 殘 軀 ░  \\
       / ░░░░░░░░░░░░░░░░░░ \\
      /══════════════════════\\
</pre>`, artEn: `<pre class="ascii-art">
            ___________
           /  R . I .  \\
          / . P .  . .  \\
         /_______________\\
         |  ░░░░░░░░░░░  |
         | ░░ _____  ░░░ |
         | ░░/ x x \\░░░░ |
         | ░░\\_____/░░░░░ |
         | ░░░░│.│░░░░░░░ |         ┌─────────┐
         | ░░──┤.├──░░░░░ |         │         │
         |░░░ /│.│\\  ░░░░ |─────────│  Stone  │
         |░░ / │.│ \\  ░░░ |         │ Dagger  │
         |░░/  │.│  \\ ░░░ |         │ ◁====▷  │
         |░░  / · \\  ░░░░ |         └─────────┘
         |░░ /     \\ ░░░░ |
         |░░/       \\ ░░░ |
         |_/____░____\\____|
        /   Petrified  Body  \\
       / ░░░░░░░░░░░░░░░░░░░ \\
      /═══════════════════════\\
</pre>`, delay: 600 },
    { tag: '行動', tagColor: 'tag-move', text: '你蹲在那具半石化的屍體旁。', textEn: 'You crouch beside the half-petrified corpse.', delay: 1500 },
    { tag: '探索', tagColor: 'tag-explore', text: '這個人已經死了很久。右半身完全石化，左半部已腐朽。', textEn: 'This person has been dead for a long time. Right side fully petrified, left side decayed.', delay: 2200 },
    { tag: '探索', tagColor: 'tag-explore', text: '他的石化手中緊握著一把碎石磨成的粗糙匕首。', textEn: 'In their petrified hand, a crude dagger ground from broken stone.', delay: 2000 },
    { tag: '物品', tagColor: 'tag-item', html: '你費了些力氣，把匕首撬了出來。<b>獲得：碎石匕首</b>', htmlEn: 'With some effort, you pry the dagger free. <b>Acquired: Stone Dagger</b>', delay: 2000, effect: () => addItem(L('碎石匕首', 'Stone Dagger')) },
    { tag: '警告', tagColor: 'tag-warn', html: '屍體胸口刻著歪歪斜斜的字：<b>「別走南邊」</b>', htmlEn: 'Carved crookedly on the corpse\'s chest: <b>"DON\'T GO SOUTH"</b>', delay: 2000 },
  ], [
    { text: '記住警告，去查看攀爬痕跡', textEn: 'Heed the warning, check climbing marks', action: () => { state.flags.corpseWarning = true; loadNode('r0_climb_check'); } },
    { text: '走向旁邊的石化人形', textEn: 'Approach the petrified figures nearby', action: () => loadNode('r0_statues') },
    { text: '返回', textEn: 'Return', action: () => loadNode('r0_look') },
  ], { label: L('調查屍體', 'Examining corpse') });
});

// ── Petrified figures (new exploration) ──
registerNode('r0_statues', () => {
  var steps = [
    { art: `<pre class="ascii-art purple">
      .    .         .         .    .
         .                .
     ╱▔▔╲   ╱▔▔╲              ╱▔▔╲
    │ ·· │  │ ·· │   ╱▔▔╲    │ ·· │
    │    │  │    │  │ ·· │   │    │
    │ ░░ │  │░░░░│  │░░░░│   │░░░░│
    │░░░░│  │░░░░│  │░░░░│   │░░░░│
    ╱░░░░╲  ╱░░░░╲  ╱░░░░╲   ╱░░░░╲
   ═══════ ═══════ ════════  ═══════
     沉默的    石化    見證者們
</pre>`, artEn: `<pre class="ascii-art purple">
      .    .         .         .    .
         .                .
     ╱▔▔╲   ╱▔▔╲              ╱▔▔╲
    │ ·· │  │ ·· │   ╱▔▔╲    │ ·· │
    │    │  │    │  │ ·· │   │    │
    │ ░░ │  │░░░░│  │░░░░│   │░░░░│
    │░░░░│  │░░░░│  │░░░░│   │░░░░│
    ╱░░░░╲  ╱░░░░╲  ╱░░░░╲   ╱░░░░╲
   ═══════ ═══════ ════════  ═══════
      The   Silent  Witnesses
</pre>`, delay: 800 },
    { tag: '移動', tagColor: 'tag-move', text: '你走向西側那些蜷縮在角落的石化人形。', textEn: 'You approach the petrified figures huddled in the western corner.', delay: 2000 },
    { tag: '探索', tagColor: 'tag-explore', text: '他們至少有四個人。全身已經完全化為灰白色的石頭。', textEn: 'At least four of them. Their entire bodies have turned to grey-white stone.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '他們的表情被永遠凝固了——恐懼、絕望、痛苦……石化瘟疫取代了他們的生命。', textEn: 'Their expressions are frozen forever — fear, despair, agony... The Stone Plague replaced their lives.', delay: 2800 },
    { tag: '探索', tagColor: 'tag-explore', text: '其中一個人形雙手緊緊抱住自己的頭，嘴巴大張彷彿在無聲地尖叫。', textEn: 'One figure clutches their head with both hands, mouth agape in a silent scream.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '另一個人伸出手，手指指向北面岩壁——彷彿死前還在指著某個方向。', textEn: 'Another reaches out, finger pointing toward the north wall — as if gesturing at something with their last breath.', delay: 2800 },
    { tag: '探索', tagColor: 'tag-explore', text: '你蹲下來仔細查看……在一個人形的腳邊，地上刻著歪歪斜斜的文字。', textEn: 'You crouch down for a closer look... at one figure\'s feet, crooked words are scratched into the ground.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', html: '「<b>水能……延緩……石瘟……</b>」——後面的字跡已經模糊不清。', htmlEn: '"<b>Water can... slow... the Plague...</b>" — the rest is illegible.', delay: 2500 },
  ];
  if (!state.flags.statuesSearched) {
    steps.push({ tag: '發現', tagColor: 'tag-item', text: '在人形堆的縫隙中，你發現了一小塊布片包裹的東西。', textEn: 'In the gap between the figures, you find something wrapped in a scrap of cloth.', delay: 2000 });
    steps.push({ tag: '物品', tagColor: 'tag-item', html: '打開一看——是一塊乾硬的<b>黑麵包</b>。雖然已經發霉，但勉強能吃。', htmlEn: 'Unwrapping it — a piece of hard <b>black bread</b>. Moldy, but barely edible.', delay: 2000, effect: () => { addItem(L('黑麵包', 'Black Bread')); state.flags.statuesSearched = true; } });
  }
  autoExplore(steps, [
    { text: '在石像群中搜索更多線索', textEn: 'Search the statues for more clues', action: () => loadNode('r0_whisper') },
    { text: '探索石像後方的空地', textEn: 'Explore the clearing behind the statues', action: () => loadNode('r0_ritual') },
    { text: '返回中央', textEn: 'Return to center', action: () => loadNode('r0_look') },
  ], { label: L('調查石像', 'Examining statues') });
});

// ── Mysterious whisper among statues ──
registerNode('r0_whisper', () => {
  autoExplore([
    { tag: '行動', tagColor: 'tag-move', text: '你繼續在石像之間翻找。', textEn: 'You continue searching among the statues.', delay: 2000,
      art: `<pre class="ascii-art">
    ·    .    ·    ✦    ·    .    ·
       _____       _____       _____
      / ·x· \\     / ·x· \\     / ·x· \\
     | (   ) |   | (   ) |   | (   ) |
      \\_____/     \\_____/     \\_____/
      ░│   │░     ░│   │░     ░│   │░
     ░░├───┤░░   ░░├───┤░░   ░░├───┤░░
     ░░│   │░░   ░░│   │░░   ░░│   │░░
     ░░/   \\░░   ░░/   \\░░   ░░/   \\░░
    ░░/     \\░░ ░░/     \\░░ ░░/     \\░░
    ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜
     ≋  ≋  ≋   ≋  ≋  ≋   ≋  ≋  ≋  ≋
</pre>`, artEn: `<pre class="ascii-art">
    ·    .    ·    ✦    ·    .    ·
       _____       _____       _____
      / ·x· \\     / ·x· \\     / ·x· \\
     | (   ) |   | (   ) |   | (   ) |
      \\_____/     \\_____/     \\_____/
      ░│   │░     ░│   │░     ░│   │░
     ░░├───┤░░   ░░├───┤░░   ░░├───┤░░
     ░░│   │░░   ░░│   │░░   ░░│   │░░
     ░░/   \\░░   ░░/   \\░░   ░░/   \\░░
    ░░/     \\░░ ░░/     \\░░ ░░/     \\░░
    ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜
     ≋  ≋  ≋   ≋  ≋  ≋   ≋  ≋  ≋  ≋
</pre>` },
    { tag: '感知', tagColor: 'tag-sense', text: '突然——', textEn: 'Suddenly —', delay: 1500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你聽到了什麼。', textEn: 'You hear something.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '不是石塊掉落的聲音。不是水滴。', textEn: 'Not the sound of falling rocks. Not dripping water.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', html: '是<b>呢喃聲</b>。', htmlEn: 'It\'s a <b>murmur</b>.', delay: 2000 },
    { tag: '環境', tagColor: 'tag-system', text: '「……回……來……」', textEn: '"...come... back..."', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '聲音像是從石像內部傳出來的——又像是從你自己的腦海中響起。', textEn: 'The voice seems to come from within the statues — or perhaps from inside your own mind.', delay: 3000 },
    { tag: '石化', tagColor: 'tag-petri', text: '你的左手突然一陣劇痛，石化紋路閃爍了一下。', textEn: 'A sudden sharp pain in your left hand — the petrification patterns flicker.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '「……別……掙扎……」', textEn: '"...don\'t... struggle..."', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '然後，一切歸於寂靜。', textEn: 'Then, silence returns.', delay: 2500 },
  ], [
    { label: checkLabel('集中精神對抗', 'Focus your mind to resist', 'wil', 7), action: () => {
      var r = statCheck('wil', 7);
      if (r === 'crit') {
        changePetri(-5);
        autoExplore([
          { tag: '大成功', tagColor: 'tag-info', text: '你閉上眼睛——精神力如同烈焰般爆發，呢喃聲瞬間被粉碎！', textEn: 'You close your eyes — your willpower erupts like fire, shattering the murmur instantly!', delay: 2000 },
          { tag: '意志', tagColor: 'tag-info', text: '不僅如此，石化的侵蝕竟然大幅消退了。', textEn: 'Moreover, the petrification recedes significantly.', delay: 2500 },
          { tag: '記憶', tagColor: 'tag-system', html: '一段清晰的記憶浮現——<b>你來自一座被石化瘟疫緩慢吞噬的小鎮</b>，而你是少數對瘟疫有抗性的人之一。', htmlEn: 'A vivid memory surfaces — <b>you came from a town slowly consumed by the Stone Plague</b>, and you were one of the few with resistance.', delay: 3200 },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
      } else if (r === 'pass') {
        changePetri(-2);
        autoExplore([
          { tag: '意志', tagColor: 'tag-info', text: '你閉上眼睛，集中精神——那個聲音被你強行推了回去。', textEn: 'You close your eyes, focusing — you force the voice back.', delay: 2000 },
          { tag: '意志', tagColor: 'tag-info', text: '你的意識變得更加清明。你不屬於這些石像。你還活著。', textEn: 'Your mind grows clearer. You are not one of these statues. You are alive.', delay: 2500 },
          { tag: '記憶', tagColor: 'tag-system', html: '在精神集中的瞬間，一段模糊的記憶閃過——<b>你的身體對石化瘟疫有抗性</b>，但並非完全免疫。', htmlEn: 'In that moment of focus, a hazy memory surfaces — <b>your body has resistance to the Stone Plague</b>, but not full immunity.', delay: 2800 },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
      } else {
        changePetri(5);
        changeHp(-3);
        autoExplore([
          { tag: '失敗', tagColor: 'tag-warn', text: '你試圖抵抗那個聲音，但它像潮水一樣湧入你的腦海——', textEn: 'You try to resist the voice, but it floods your mind like a tide —', delay: 2000 },
          { tag: '石化', tagColor: 'tag-petri', text: '左手的石化紋路突然擴展到了手肘。劇痛令你跪倒在地。', textEn: 'The petrification on your left hand suddenly spreads to your elbow. Pain brings you to your knees.', delay: 2500 },
          { tag: '警告', tagColor: 'tag-warn', text: '你掙扎著站起來，遠離了石像群。', textEn: 'You struggle to your feet and back away from the statues.', delay: 2000 },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
      }
    }},
    { text: '立刻後退遠離', textEn: 'Back away immediately', action: () => {
      changePetri(2);
      autoExplore([
        { tag: '行動', tagColor: 'tag-move', text: '你本能地後退了幾步，遠離那些石像。', textEn: 'You instinctively step back, away from the statues.', delay: 1500 },
        { tag: '石化', tagColor: 'tag-petri', text: '左手的痛楚慢慢消退了……但石化似乎又多了一點。', textEn: 'The pain in your left hand slowly fades... but the petrification seems to have advanced.', delay: 2200 },
      ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
    }},
  ], { label: L('聆聽呢喃', 'Listening to whispers') });
});

// ── Ritual site discovery ──
registerNode('r0_ritual', () => {
  autoExplore([
    { art: `<pre class="ascii-art red">
              .  ·  .  ·  .
           .                 .
         .    ╱╲       ╱╲    .
        .    ╱  ╲     ╱  ╲    .
       .    ╱    ╲   ╱    ╲    .
      .    ╱  ⛤  ╲ ╱  ⛤  ╲    .
     .    ╱________╳________╲    .
      .  ╱    ⛤   ╱ ╲   ⛤  ╲  .
       .╱________╱ ⛤ ╲________╲.
        .       ╱_____╲       .
         .    ·  祭壇  ·    .
           .               .
              .  ·  .  ·  .
</pre>`, artEn: `<pre class="ascii-art red">
              .  ·  .  ·  .
           .                 .
         .    ╱╲       ╱╲    .
        .    ╱  ╲     ╱  ╲    .
       .    ╱    ╲   ╱    ╲    .
      .    ╱  ⛤  ╲ ╱  ⛤  ╲    .
     .    ╱________╳________╲    .
      .  ╱    ⛤   ╱ ╲   ⛤  ╲  .
       .╱________╱ ⛤ ╲________╲.
        .       ╱_____╲       .
         .    ·  Altar  ·    .
           .               .
              .  ·  .  ·  .
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '在石像群的後方，你發現了一片被刻意清理過的空地。', textEn: 'Behind the statues, you find a patch of deliberately cleared ground.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '地面上刻著複雜的幾何圖案——五芒星形的溝槽中殘留著暗紅色的痕跡。', textEn: 'Complex geometric patterns are carved into the ground — pentagram grooves stained with dark red residue.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '這是一個祭壇。長老們用來進行「爐灶少女」獻祭的祭壇。', textEn: 'This is an altar. Used by the elders for the "Hearth-Maiden" sacrifice.', delay: 2500 },
    { tag: '探索', tagColor: 'tag-explore', text: '五芒星的五個頂點各放著一塊石化結晶，暗淡但尚有微光。', textEn: 'At each of the five points sits a petrification crystal, dim but still faintly glowing.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', html: '中央有一塊石板，上面刻著古老的文字：<b>「以石化為養，以血肉為種——獻爐灶之女，平息石瘟之怒。」</b>', htmlEn: 'A stone slab at the center bears ancient text: <b>"Nourished by petrification, seeded with flesh — offer the Hearth-Maiden to quell the Stone Plague\'s wrath."</b>', delay: 3200 },
    { tag: '記憶', tagColor: 'tag-system', text: '你的腦海中隱約浮現出灰袍長老們圍著你吟誦的場景……他們試圖以你為祭品平息瘟疫。', textEn: 'A faint vision surfaces — grey-robed elders chanting around you... They tried to sacrifice you to appease the plague.', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '空氣中瀰漫著不自然的寒意。離這裡越近，你的左手就越疼。', textEn: 'An unnatural chill pervades the air. The closer you get, the more your left hand aches.', delay: 2500 },
  ], [
    { text: '嘗試取走一塊石化結晶', textEn: 'Try to take a petrification crystal', action: () => {
      if (!state.flags.tookCrystal) {
        state.flags.tookCrystal = true;
        changePetri(4);
        addItem(L('石化結晶', 'Petri Crystal'));
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你小心翼翼地伸手觸碰其中一塊結晶——', textEn: 'You carefully reach for one of the crystals —', delay: 1500 },
          { tag: '石化', tagColor: 'tag-petri', text: '指尖觸碰的瞬間，一股冰冷的電流從手臂竄上肩膀！', textEn: 'The instant your fingers touch it, a freezing current shoots from your arm to your shoulder!', delay: 2000 },
          { tag: '警告', tagColor: 'tag-warn', text: '你咬牙把結晶拔了出來。五芒星圖案的光芒黯淡了一些。', textEn: 'Gritting your teeth, you wrench the crystal free. The pentagram dims slightly.', delay: 2200 },
          { tag: '情報', tagColor: 'tag-info', text: '也許這個東西以後能派上用場……或者它只會加速你的石化。', textEn: 'Perhaps this could be useful later... or it may only accelerate your petrification.', delay: 2200 },
        ], [{ text: '離開祭壇', textEn: 'Leave the altar', action: () => loadNode('r0_look') }]);
      } else {
        renderScene(L('你已經取走了一塊結晶。剩下的你不敢再碰了。', 'You already took one crystal. You dare not touch the rest.'),
          [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
      }
    }},
    { label: checkLabel('用力踢散祭壇', 'Kick the altar apart', 'str', 7), action: () => {
      var r = statCheck('str', 7);
      if (r === 'crit') {
        changeStat('wil', 2);
        autoExplore([
          { tag: '大成功', tagColor: 'tag-move', text: '你怒火中燒——一腳將石板踢得粉碎！', textEn: 'Fury erupts — you shatter the slab to dust with a single kick!', delay: 1500 },
          { tag: '環境', tagColor: 'tag-system', text: '五芒星圖案爆裂開來，灰色煙霧被你的氣勢壓散。', textEn: 'The pentagram explodes, grey smoke scattered by your sheer force.', delay: 2500 },
          { tag: '意志', tagColor: 'tag-info', text: '強烈的解脫感湧上心頭——你的意志大幅增強。', textEn: 'A powerful sense of liberation surges through you — your will strengthens greatly.', delay: 2500 },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
      } else if (r === 'pass') {
        changeStat('wil', 1);
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你怒火中燒——這就是毀掉你的東西。', textEn: 'Fury rises — this is what destroyed you.', delay: 1500 },
          { tag: '行動', tagColor: 'tag-move', text: '你用盡全力踢向石板——石板裂成了兩半！', textEn: 'You kick the slab with all your might — it cracks in two!', delay: 2000 },
          { tag: '環境', tagColor: 'tag-system', text: '五芒星圖案上的結晶同時碎裂，散發出一陣灰色煙霧。', textEn: 'The pentagram crystals shatter simultaneously, releasing grey smoke.', delay: 2500 },
          { tag: '意志', tagColor: 'tag-info', text: '你感到一股奇異的解脫感。仇恨化為了力量。', textEn: 'A strange sense of release washes over you. Hatred becomes strength.', delay: 2500 },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
      } else {
        changeHp(-5);
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你用力踢向石板——', textEn: 'You kick the slab hard —', delay: 1500 },
          { tag: '失敗', tagColor: 'tag-warn', text: '石板紋絲不動。你的腳趾傳來一陣劇痛。', textEn: 'The slab doesn\'t budge. Searing pain in your toes.', delay: 2000 },
          { tag: '傷害', tagColor: 'tag-warn', text: '你一瘸一拐地退了回來。也許不該這麼衝動。', textEn: 'You limp away. Perhaps that was reckless.', delay: 2000 },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
      }
    }},
    { text: '不碰這個東西，離開', textEn: 'Don\'t touch it, leave', action: () => loadNode('r0_look') },
  ], { label: L('調查祭壇', 'Examining altar') });
});

// ── Hidden cache behind rubble ──
registerNode('r0_hidden', () => {
  if (state.flags.hiddenFound) {
    renderScene(L('你再次查看那個洞穴。裡面已經空了，只剩下灰塵和碎石。', 'You check the alcove again. Empty now, just dust and rubble.'),
      [{ text: '返回', textEn: 'Return', action: () => loadNode('r0_look') }]);
    return;
  }
  state.flags.hiddenFound = true;
  var hasGlow = hasItem(L('微光石', 'Glowstone'));
  var steps = [
    { tag: '探索', tagColor: 'tag-explore', text: '在東側岩壁的角落，你注意到一處不自然的石塊堆疊。', textEn: 'In the eastern corner, you notice an unnatural pile of rocks.', delay: 2000,
      art: `<pre class="ascii-art">
    ╔═══════════════════════════════╗
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░▓▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░   ░▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ ┌──┐ ░ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░  │⚘ │ ░ ║
    ║  ·  ·  ·  ·  ░░░░░  │≈≈│ ░░ ║
    ║           ▄▄▄░░  ░░  └──┘ ░░ ║
    ║      ▄▄▄▄█░░█▄▄   ░░░░░░░░░ ║
    ║  ▄▄▄█░░░░░░░░░░█▄▄▄▄▄▄▄▄▄▄ ║
    ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
    ╔═══════════════════════════════╗
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░▓▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░   ░▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ ┌──┐ ░ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░  │⚘ │ ░ ║
    ║  ·  ·  ·  ·  ░░░░░  │≈≈│ ░░ ║
    ║           ▄▄▄░░  ░░  └──┘ ░░ ║
    ║      ▄▄▄▄█░░█▄▄   ░░░░░░░░░ ║
    ║  ▄▄▄█░░░░░░░░░░█▄▄▄▄▄▄▄▄▄▄ ║
    ╚═══════════════════════════════╝
</pre>` },
    { tag: '行動', tagColor: 'tag-move', text: '你搬開了幾塊石頭——後面是一個狹小的凹洞。', textEn: 'You move some rocks aside — revealing a small alcove behind.', delay: 2200 },
  ];
  if (hasGlow) {
    steps.push({ tag: '物品', tagColor: 'tag-item', text: '微光石的光照進了凹洞。你清楚看到了裡面的東西。', textEn: 'The Glowstone illuminates the alcove. You see clearly what\'s inside.', delay: 2000 });
  } else {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你伸手摸索——黑暗中碰到了幾樣東西。', textEn: 'You reach in and feel around in the dark — your fingers find several objects.', delay: 2000 });
  }
  steps.push(
    { tag: '發現', tagColor: 'tag-item', html: '一小包乾燥的<b>草藥</b>，包在皮革裡。', htmlEn: 'A small bundle of dried <b>herbs</b>, wrapped in leather.', delay: 1800, effect: () => addItem(L('乾燥草藥', 'Dried Herbs')) },
    { tag: '發現', tagColor: 'tag-item', text: '一段粗糙的繩索，大約兩個人高的長度。', textEn: 'A length of crude rope, about two body-lengths long.', delay: 1800, effect: () => addItem(L('粗繩', 'Rope')) },
    { tag: '發現', tagColor: 'tag-item', html: '角落裡還有一塊散發微光的石頭——<b>復活石</b>。握在手中有種溫暖的脈動。', htmlEn: 'In the corner, a faintly glowing stone — a <b>Revival Stone</b>. It pulses warmly in your hand.', delay: 2200, effect: () => { addItem(L('復活石', 'Revival Stone')); sfx.item(); } },
    { tag: '情報', tagColor: 'tag-info', text: '有人曾經在這裡藏了求生物資。看來你不是第一個試圖逃出去的人。', textEn: 'Someone stashed survival supplies here. You\'re not the first to try escaping.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '但那個人……最終成功了嗎？', textEn: 'But did that person... ever make it out?', delay: 2500 }
  );
  autoExplore(steps, [
    { text: '使用草藥治療傷口', textEn: 'Use herbs to treat wounds', action: () => {
      if (hasItem(L('乾燥草藥', 'Dried Herbs'))) {
        removeItem(L('乾燥草藥', 'Dried Herbs'));
        changeHp(12);
        changePetri(-2);
        notify(L('HP +12，石化度 -2%', 'HP +12, Petri -2%'));
      }
      loadNode('r0_look');
    }},
    { text: '先收好，也許之後更需要', textEn: 'Save them for later', action: () => loadNode('r0_look') },
  ], { label: L('搜索暗室', 'Searching alcove') });
});

// ── Rest and memory flashback ──
registerNode('r0_rest', () => {
  autoExplore([
    { tag: '行動', tagColor: 'tag-move', text: '你靠著岩壁坐了下來，讓自己喘口氣。', textEn: 'You lean against the wall and sit down, catching your breath.', delay: 2000,
      art: `<pre class="ascii-art">
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓                            ▓▓
    ▓▓          ·  ✦  ·          ▓▓
    ▓▓    .  ·          ·  .    ▓▓
    ▓▓                          ▓▓
    ▓▓            _n_           ▓▓
    ▓▓           / _ \\          ▓▓
    ▓▓          | (_) |         ▓▓
    ▓▓     _____|/   \\|_____    ▓▓
    ▓▓    /     ·     ·     \\   ▓▓
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, artEn: `<pre class="ascii-art">
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓                            ▓▓
    ▓▓          ·  ✦  ·          ▓▓
    ▓▓    .  ·          ·  .    ▓▓
    ▓▓                          ▓▓
    ▓▓            _n_           ▓▓
    ▓▓           / _ \\          ▓▓
    ▓▓          | (_) |         ▓▓
    ▓▓     _____|/   \\|_____    ▓▓
    ▓▓    /     ·     ·     \\   ▓▓
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>` },
    { tag: '感知', tagColor: 'tag-sense', text: '黑暗中，你的呼吸聲格外清晰。', textEn: 'In the darkness, your breathing sounds unnervingly loud.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '……', textEn: '...', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '你閉上眼睛——碎片般的記憶開始浮現。', textEn: 'You close your eyes — fragmented memories surface.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '……一座小鎮。地下的小鎮。自從地表崩潰後，人們就住在這裡。', textEn: '...A small town. Underground. People have lived here since the surface collapsed.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '……街道先開始淹水。井水變苦了。牆壁上長出了灰色的紋路。', textEn: '...The streets flooded first. Well water turned bitter. Grey patterns grew on the walls.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '……鄰居的臉龐不再會動。他們沒有消失——只是停止了移動。', textEn: '...Neighbors\' faces stopped moving. They didn\'t vanish — they just... stopped.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '……然後是灰袍。長老們。「爐灶少女」的祭祀。你被綁在熱泉的底部。', textEn: '...Then grey robes. The elders. The "Hearth-Maiden" ritual. You were bound at the bottom of a hot spring.', delay: 3500 },
    { tag: '記憶', tagColor: 'tag-system', text: '……他們的吟唱聲越來越大。滾燙的水淹沒了你。你的身體開始僵硬。', textEn: '...Their chanting grew louder. Scalding water engulfed you. Your body began to stiffen.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '……墜落。無盡的墜落。', textEn: '...Falling. Endless falling.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你猛地睜開眼睛。冷汗浸透了後背。', textEn: 'Your eyes snap open. Cold sweat soaks your back.', delay: 2500 },
    { tag: '恢復', tagColor: 'tag-explore', text: '雖然記憶令人不安，但短暫的休息讓你的身體恢復了一些。', textEn: 'The memories are unsettling, but the brief rest has restored some strength.', delay: 2200 },
  ], (function() {
    var c = [];
    if (hasItem(L('黑麵包', 'Black Bread'))) {
      c.push({ text: '吃黑麵包後再休息', textEn: 'Eat black bread before resting', action: () => {
        removeItem(L('黑麵包', 'Black Bread'));
        changeHp(18);
        changePetri(-5);
        autoExplore([
          { tag: '物品', tagColor: 'tag-item', text: '你掰開乾硬的黑麵包。發霉的味道讓人皺眉，但飢餓感蓋過了一切。', textEn: 'You break the stale black bread. The moldy smell makes you wince, but hunger wins.', delay: 2000 },
          { tag: '恢復', tagColor: 'tag-explore', text: '填飽了肚子，身體的恢復速度明顯加快。石化的刺痛感也消退了不少。', textEn: 'With your stomach full, recovery speeds up noticeably. The petrification sting fades.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '石像腳下的文字是對的——進食確實能抑制石化侵蝕。', textEn: 'The writing at the statue\'s feet was right — eating does suppress petrification.', delay: 2200 },
        ], [{ text: '繼續探索', textEn: 'Continue exploring', action: () => loadNode('r0_look') }]);
      }});
    }
    c.push({ text: '站起來繼續探索', textEn: 'Stand up and continue', action: () => {
      changeHp(8);
      notify(L('HP +8', 'HP +8'));
      loadNode('r0_look');
    }});
    return c;
  })(), { label: L('休息', 'Resting') });
});

registerNode('r0_crack', () => {
  var warnStep = state.flags.corpseWarning
    ? { tag: '記憶', tagColor: 'tag-warn', text: '你想起屍體上的警告，心中一緊——', textEn: 'You recall the warning on the corpse — your heart tightens.', delay: 1500 }
    : { tag: '感知', tagColor: 'tag-sense', text: '腳下的石地越來越濕滑。', textEn: 'The stone beneath your feet grows increasingly slippery.', delay: 1200 };
  autoExplore([
    { art: `<pre class="ascii-art blue">
     │▓▓│                        │▓▓│
     │▓▓│  .    .    ·    .    . │▓▓│
     │▓▓│     .    .    .    .   │▓▓│
     │▓▓│________________________│▓▓│
     │▓▓/                        \\▓▓│
     │▓/ ~~~~~~~~~~~~~~~~~~~~~~~~ \\▓│
     │/ ~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\│
     │ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ │
     │ ~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~ │
     │ ~~~~~ 石 化 之 水 ~~~~~~~~~~~ │
     │ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ │
     │ ~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~ │
     │ ~ ~~~~~~~~~~~~~~~~~~~~~~~~ ~~ │
     │█████░░~~~~~~~~~~~~~~~~~~~~~~~│
     │████████░░~~~~~~~~~~~~~~~~~~~~│
     │██████████░░~~~~~~~~~~~~~~~~~~│
     │████ 腳 ███░░~~~~~~~~~~~~~~~~~│
     │████████████░░~~~~~~~~~~~~~~~~│
     └─────────────────────────────┘
</pre>`, artEn: `<pre class="ascii-art blue">
     │▓▓│                        │▓▓│
     │▓▓│  .    .    ·    .    . │▓▓│
     │▓▓│     .    .    .    .   │▓▓│
     │▓▓│________________________│▓▓│
     │▓▓/                        \\▓▓│
     │▓/ ~~~~~~~~~~~~~~~~~~~~~~~~ \\▓│
     │/ ~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\│
     │ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ │
     │ ~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~ │
     │ ~~~ Petrification Water ~~~~~ │
     │ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ │
     │ ~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~ │
     │ ~ ~~~~~~~~~~~~~~~~~~~~~~~~ ~~ │
     │█████░░~~~~~~~~~~~~~~~~~~~~~~~│
     │████████░░~~~~~~~~~~~~~~~~~~~~│
     │██████████░░~~~~~~~~~~~~~~~~~~│
     │███ Foot ███░░~~~~~~~~~~~~~~~~│
     │████████████░░~~~~~~~~~~~~~~~~│
     └─────────────────────────────┘
</pre>`, delay: 600 },
    { tag: '移動', tagColor: 'tag-move', text: '你側身擠進南面的裂縫。', textEn: 'You squeeze sideways into the southern crack.', delay: 1500 },
    { tag: '感知', tagColor: 'tag-sense', text: '通道越來越窄，空氣越來越潮濕。', textEn: 'The passage narrows, the air grows damper.', delay: 1800 },
    { tag: '感知', tagColor: 'tag-sense', text: '水聲漸漸清晰——前方似乎有一池地下水。', textEn: 'The sound of water grows clearer — an underground pool ahead.', delay: 2000 },
    { tag: '警告', tagColor: 'tag-warn', text: '突然，你的腳下一滑！', textEn: 'Suddenly, your foot slips!', delay: 1200 },
    warnStep,
    { tag: '警告', tagColor: 'tag-warn', text: '你勉強抓住岩壁穩住身體，但小腿浸入了冰冷的水中。', textEn: 'You barely grab the wall to steady yourself, but your calves plunge into the icy water.', delay: 2200 },
    { tag: '石化', tagColor: 'tag-petri', html: '水面泛著灰色的微光——<b>石化之水。</b>', htmlEn: 'The water glows with a grey shimmer — <b>Petrification Water.</b>', delay: 1800 },
  ], [
    { label: checkLabel('立刻退回', 'Retreat immediately', 'agi', 7), action: () => {
      var r = statCheck('agi', 7);
      if (r === 'crit') {
        changePetri(0);
        autoExplore([
          { tag: '大成功', tagColor: 'tag-explore', text: '你以驚人的反射速度抽回雙腳——完美閃避！', textEn: 'With incredible reflexes you pull your feet out — perfect dodge!', delay: 1200 },
          { tag: '探索', tagColor: 'tag-explore', text: '不僅毫髮無傷，你還從水邊撈到了一塊發光的礦石。', textEn: 'Not only unscathed, you also snatch a glowing mineral from the water\'s edge.', delay: 1800 },
        ], [{ text: '返回坑底', textEn: 'Return to the pit', action: () => { addItem(L('微光石', 'Glowstone')); loadNode('r0_look'); } }]);
      } else if (r === 'pass') {
        changePetri(3);
        autoExplore([
          { tag: '行動', tagColor: 'tag-explore', text: '你反應迅速，一把抽回雙腳！', textEn: 'Quick reflexes! You yank your feet back!', delay: 1200 },
          { tag: '石化', tagColor: 'tag-petri', text: '小腿處的皮膚微微泛灰，但不算嚴重。', textEn: 'Your calves show a faint grey tinge, but nothing serious.', delay: 1800 },
          { tag: '物品', tagColor: 'tag-item', text: '水邊有一塊發光的礦石，你順手撿了起來。', textEn: 'A glowing mineral sits by the water\'s edge. You grab it.', delay: 1500 },
        ], [{ text: '返回坑底', textEn: 'Return to the pit', action: () => { addItem(L('微光石', 'Glowstone')); loadNode('r0_look'); } }]);
      } else {
        changePetri(10);
        changeHp(-8);
        autoExplore([
          { tag: '失敗', tagColor: 'tag-warn', text: '你慌忙後退，但滑了一跤！', textEn: 'You scramble back, but slip and fall!', delay: 1200 },
          { tag: '石化', tagColor: 'tag-petri', text: '整條小腿都泡進了石化之水——劇痛蔓延。', textEn: 'Your entire calves submerge in the petrification water — searing pain.', delay: 2000 },
          { tag: '警告', tagColor: 'tag-warn', text: '你拼命爬出裂縫，但皮膚上留下了大片灰色紋路。', textEn: 'You crawl desperately out of the crack, grey patterns covering your skin.', delay: 2000 },
        ], [{ text: '返回坑底', textEn: 'Return to the pit', action: () => loadNode('r0_look') }]);
      }
    }},
    { label: checkLabel('用意志抵抗石化，採集水邊礦石', 'Resist petrification, gather minerals', 'wil', 8), action: () => {
      var r = statCheck('wil', 8);
      if (r === 'crit') {
        changePetri(2);
        autoExplore([
          { tag: '大成功', tagColor: 'tag-petri', text: '你閉上眼睛——精神力完美壓制了石化之水的侵蝕！', textEn: 'You close your eyes — your willpower perfectly suppresses the petrification water!', delay: 1500 },
          { tag: '成功', tagColor: 'tag-explore', text: '你從容不迫地採集了水邊的所有有用資源。', textEn: 'You calmly gather all useful resources by the water.', delay: 2000 },
          { tag: '物品', tagColor: 'tag-item', html: '採集了<b>微光石</b>、<b>石化水瓶</b>和一小塊<b>石化結晶</b>。', htmlEn: 'Gathered <b>Glowstone</b>, <b>Petri-Water Flask</b>, and a small <b>Petri Crystal</b>.', delay: 1500, effect: () => { addItem(L('微光石', 'Glowstone')); addItem(L('石化水瓶', 'Petri-Water Flask')); addItem(L('石化結晶', 'Petri Crystal')); } },
        ], [{ text: '返回坑底', textEn: 'Return to the pit', action: () => loadNode('r0_look') }]);
      } else if (r === 'pass') {
        changePetri(5);
        autoExplore([
          { tag: '意志', tagColor: 'tag-petri', text: '你閉上眼睛，集中精神……', textEn: 'You close your eyes, focusing your mind...', delay: 1500 },
          { tag: '成功', tagColor: 'tag-explore', text: '意志力化為溫熱的力量，暫時壓制住石化侵蝕。', textEn: 'Your willpower becomes a warm force, suppressing the petrification.', delay: 2000 },
          { tag: '物品', tagColor: 'tag-item', html: '採集了<b>微光石</b>和<b>石化水瓶</b>。', htmlEn: 'Gathered <b>Glowstone</b> and <b>Petri-Water Flask</b>.', delay: 1500, effect: () => { addItem(L('微光石', 'Glowstone')); addItem(L('石化水瓶', 'Petri-Water Flask')); } },
        ], [{ text: '返回坑底', textEn: 'Return to the pit', action: () => loadNode('r0_look') }]);
      } else {
        changePetri(12);
        changeHp(-5);
        autoExplore([
          { tag: '意志', tagColor: 'tag-petri', text: '你嘗試以精神力抵抗……', textEn: 'You try to resist with willpower...', delay: 1500 },
          { tag: '失敗', tagColor: 'tag-warn', text: '石化的力量太過強大！冰冷感迅速爬上你的雙腿。', textEn: 'The petrifying force is too powerful! Cold numbness races up your legs.', delay: 2000 },
          { tag: '撤退', tagColor: 'tag-move', text: '你不得不放棄，連滾帶爬地退了出來。', textEn: 'You abandon the attempt, scrambling out on all fours.', delay: 1800 },
        ], [{ text: '返回坑底', textEn: 'Return to the pit', action: () => loadNode('r0_look') }]);
      }
    }},
  ], { label: L('探索裂縫', 'Exploring crack') });
});

registerNode('r0_climb_check', () => {
  autoExplore([
    { art: `<pre class="ascii-art">
  ╔══════════════════════════════════════════╗
  ║  ~ ~ ~ ~ ~ ~ ~ 隧  道 ~ ~ ~ ~ ~ ~ ~ ~ ║
  ║ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  ║
  ╠══════════════╦════════╦══════════════════╣
                 ║        ║
                 ║        ║
      ┌──────────╝        ╚──────────┐
      │          岩    棚            │
      │                              │
   ░░░│##  ^^  ·    ·  ^^  ##  ·    ·│░░░
  ░░░░│ # /||\\ ·  ·  /||\\ # ·  ·  ░│░░░░
 ░░░░░│  / || \\ ·   / || \\  ·  苔蘚│░░░░░
 ░░░░░│ /  ||  \\ · /  ||  \\ ·  ░░░░│░░░░░
░░░░░░│/   ||   \\·/   ||   \\ ░░░░░░│░░░░░░
░░░░░░│    ||    V    ||    ░░░░░░░░│░░░░░░
══════╧════╧╧═════════╧╧════════════╧══════
      │    ·    ·    ·    ·    ·    │
      │           _o_              │
      │          / | \\             │
      │           /\\               │
      │          你                 │
      └────────────────────────────┘
</pre>`, artEn: `<pre class="ascii-art">
  ╔══════════════════════════════════════════╗
  ║  ~ ~ ~ ~ ~ ~ ~ Tunnel ~ ~ ~ ~ ~ ~ ~ ~  ║
  ║ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  ║
  ╠══════════════╦════════╦══════════════════╣
                 ║        ║
                 ║        ║
      ┌──────────╝        ╚──────────┐
      │           Ledge              │
      │                              │
   ░░░│##  ^^  ·    ·  ^^  ##  ·    ·│░░░
  ░░░░│ # /||\\ ·  ·  /||\\ # ·  ·  ░│░░░░
 ░░░░░│  / || \\ ·   / || \\  ·  Moss │░░░░░
 ░░░░░│ /  ||  \\ · /  ||  \\ ·  ░░░░│░░░░░
░░░░░░│/   ||   \\·/   ||   \\ ░░░░░░│░░░░░░
░░░░░░│    ||    V    ||    ░░░░░░░░│░░░░░░
══════╧════╧╧═════════╧╧════════════╧══════
      │    ·    ·    ·    ·    ·    │
      │           _o_              │
      │          / | \\             │
      │           /\\               │
      │          You               │
      └────────────────────────────┘
</pre>`, delay: 600 },
    { tag: '移動', tagColor: 'tag-move', text: '你走到北面岩壁前。', textEn: 'You approach the north wall.', delay: 1500 },
    { tag: '探索', tagColor: 'tag-explore', text: '牆面上有模糊的抓痕和鑿出的凹陷——有人嘗試過向上攀爬。', textEn: 'The wall bears faint scratch marks and carved footholds — someone tried to climb.', delay: 2000 },
    { tag: '探索', tagColor: 'tag-explore', text: '大約三個人高處有一個突出的岩棚。', textEn: 'About three body-lengths up, a protruding ledge.', delay: 1800 },
    { tag: '警告', tagColor: 'tag-warn', text: '岩壁濕滑，牆上有奇怪的灰色苔蘚——接觸可能加速石化。', textEn: 'The wall is slick, covered in strange grey moss — contact may accelerate petrification.', delay: 2200 },
  ], [
    { label: checkLabel('直接攀爬', 'Climb directly', 'str', 9), action: () => loadNode('r0_climb_str') },
    { text: '尋找其他可以借力的東西', textEn: 'Look for alternative handholds', action: () => loadNode('r0_climb_alt') },
    { text: '返回觀察', textEn: 'Go back', action: () => loadNode('r0_look') },
  ], { label: L('查看岩壁', 'Checking wall') });
});

registerNode('r0_climb_str', () => {
  var r = statCheck('str', 9);
  if (r === 'crit') {
    changePetri(1);
    autoExplore([
      { tag: '大成功', tagColor: 'tag-move', text: '你深吸一口氣——手腳如同猿猴般靈活！', textEn: 'You take a deep breath — climbing with ape-like agility!', delay: 1500,
      art: `<pre class="ascii-art">
    ▓▓▓▓▓▓│  ·  ·  ·  │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│·░░˚·˚░░░░·│▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│·░˚░░░░˚░░·│▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│·░░░˚░░░░░·│▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│·░░░░░░˚░░·│▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│  ·  ·  ·  │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓╘════════════╛▓▓▓▓▓▓▓▓▓▓
</pre>`, artEn: `<pre class="ascii-art">
    ▓▓▓▓▓▓│  ·  ·  ·  │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│·░░˚·˚░░░░·│▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│·░˚░░░░˚░░·│▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│·░░░˚░░░░░·│▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│·░░░░░░˚░░·│▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│ ░░░░░░░░░ │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓│  ·  ·  ·  │▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓╘════════════╛▓▓▓▓▓▓▓▓▓▓
</pre>` },
      { tag: '行動', tagColor: 'tag-move', text: '完美避開所有灰色苔蘚，一口氣攀上了岩棚！', textEn: 'You avoid every patch of grey moss and reach the ledge in one go!', delay: 2000 },
      { tag: '探索', tagColor: 'tag-explore', text: '岩棚上方，一條蜿蜒的隧道延伸向黑暗深處。', textEn: 'Above the ledge, a winding tunnel stretches into the darkness.', delay: 1800 },
    ], [{ text: '進入隧道', textEn: 'Enter the tunnel', action: () => loadNode('r0_tunnel') }]);
  } else if (r === 'pass') {
    changePetri(3);
    autoExplore([
      { tag: '行動', tagColor: 'tag-move', text: '你深吸一口氣，找準落腳點，開始攀爬。', textEn: 'You take a deep breath, find your footholds, and begin climbing.', delay: 1500 },
      { tag: '行動', tagColor: 'tag-move', text: '岩壁比想像中更滑……手掌幾次差點鬆開。', textEn: 'The wall is slicker than expected... your grip nearly slips several times.', delay: 2000 },
      { tag: '石化', tagColor: 'tag-petri', text: '灰色苔蘚沾上手臂，帶來一陣麻痺感——你咬牙撐住。', textEn: 'Grey moss clings to your arms, bringing numbness — you grit your teeth.', delay: 2200 },
      { tag: '成功', tagColor: 'tag-explore', text: '手指扣住了岩棚邊緣——你用盡全力拉了上去！', textEn: 'Your fingers hook the ledge — you haul yourself up with all your might!', delay: 2000 },
      { tag: '探索', tagColor: 'tag-explore', text: '岩棚上方，一條蜿蜒的隧道延伸向黑暗深處。', textEn: 'Above the ledge, a winding tunnel stretches into the darkness.', delay: 1800 },
    ], [{ text: '進入隧道', textEn: 'Enter the tunnel', action: () => loadNode('r0_tunnel') }]);
  } else {
    changePetri(5);
    changeHp(-10);
    autoExplore([
      { tag: '行動', tagColor: 'tag-move', text: '你奮力向上攀爬……', textEn: 'You climb with all your strength...', delay: 1500 },
      { tag: '失敗', tagColor: 'tag-warn', text: '到了一半，腳下的岩石突然碎裂！', textEn: 'Halfway up, the rock beneath your foot crumbles!', delay: 1500 },
      { tag: '傷害', tagColor: 'tag-warn', text: '你重重摔回地面，背部傳來劇痛。', textEn: 'You crash to the ground, searing pain in your back.', delay: 2000 },
      { tag: '石化', tagColor: 'tag-petri', text: '摔落時手臂蹭過灰色苔蘚，石化感迅速蔓延。', textEn: 'Your arms scrape against the grey moss as you fall — petrification spreads rapidly.', delay: 2000 },
    ], [
      { text: '休息一下再嘗試', textEn: 'Rest before trying again', action: () => { changeHp(5); loadNode('r0_climb_check'); } },
      { text: '放棄攀爬，尋找其他路', textEn: 'Give up climbing, find another way', action: () => loadNode('r0_climb_alt') },
    ]);
  }
});

registerNode('r0_climb_alt', () => {
  const hasMikouStone = hasItem(L('微光石', 'Glowstone'));
  var steps = [
    { tag: '探索', tagColor: 'tag-explore', text: '你退後幾步，打量整個岩壁。', textEn: 'You step back and survey the entire wall.', delay: 1500,
      art: `<pre class="ascii-art">
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║            ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║  ˚  ˚  ˚  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║    ░░░░░   ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║  ░░░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║══╗░░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║  ║░░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║══╝░░˚░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║  ░░░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓╔╩═══╗░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓║▄▄▄▄║░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
</pre>`, artEn: `<pre class="ascii-art">
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║            ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║  ˚  ˚  ˚  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║    ░░░░░   ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║  ░░░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║══╗░░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║  ║░░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║══╝░░˚░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓║  ░░░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓╔╩═══╗░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓║▄▄▄▄║░░░░░░  ║▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
</pre>` },
    { tag: '發現', tagColor: 'tag-item', text: '角落裡有幾塊碎石可以堆起來墊腳。', textEn: 'Some rubble in the corner could be stacked as footholds.', delay: 1800 },
    { tag: '發現', tagColor: 'tag-item', text: '岩壁裂縫中卡著一根朽木——也許可以當支撐。', textEn: 'A rotting beam is wedged in a crack — might work as support.', delay: 1800 },
  ];
  if (hasMikouStone) {
    steps.push({ tag: '物品', tagColor: 'tag-item', text: '微光石散發的光芒讓你看到一條苔蘚稀疏的隱蔽路線。', textEn: 'The Glowstone\'s light reveals a hidden path with less moss.', delay: 2000 });
  }
  autoExplore(steps, [
    { text: hasMikouStone ? '沿著隱蔽路線攀爬' : '堆石頭後攀爬', textEn: hasMikouStone ? 'Climb along the hidden path' : 'Stack stones and climb', action: () => {
      changePetri(hasMikouStone ? 1 : 4);
      autoExplore(
        hasMikouStone
        ? [
          { tag: '行動', tagColor: 'tag-move', text: '借助微光石的光照，你找到了苔蘚稀疏的路線。', textEn: 'Guided by the Glowstone, you find a path with sparse moss.', delay: 1800 },
          { tag: '行動', tagColor: 'tag-move', text: '攀爬依然不容易，但你順利避開了大部分石化苔蘚。', textEn: 'Still a tough climb, but you avoid most of the petrifying moss.', delay: 2000 },
          { tag: '成功', tagColor: 'tag-explore', text: '你翻上了岩棚。微光石的光芒照亮了前方的隧道。', textEn: 'You crest the ledge. The Glowstone illuminates a tunnel ahead.', delay: 1800 },
        ]
        : [
          { tag: '行動', tagColor: 'tag-move', text: '你花了些時間堆好碎石，然後小心翼翼地攀爬。', textEn: 'You spend time stacking rubble, then carefully climb.', delay: 2000 },
          { tag: '石化', tagColor: 'tag-petri', text: '中途碰到了一些灰色苔蘚，但比硬爬好多了。', textEn: 'You brush some grey moss, but much better than a brute climb.', delay: 1800 },
          { tag: '成功', tagColor: 'tag-explore', text: '你成功爬上了岩棚。前方是一條黑暗的隧道。', textEn: 'You reach the ledge successfully. A dark tunnel lies ahead.', delay: 1800 },
        ],
        [{ text: '進入隧道', textEn: 'Enter the tunnel', action: () => loadNode('r0_tunnel') }]
      );
    }},
    { text: '返回', textEn: 'Go back', action: () => loadNode('r0_look') },
  ]);
});

registerNode('r0_tunnel', () => {
  var lizardName = L('石蜥蜴', 'Stone Lizard');
  var lizardDesc = L('石蜥蜴的眼睛閃爍著紫光，每次攻擊都帶有石化效果。', 'The Stone Lizard\'s eyes flash purple. Each attack carries petrification.');
  var lizardDescShort = L('石蜥蜴的眼睛閃爍著紫光。', 'The Stone Lizard\'s eyes flash purple.');
  var daggerName = L('碎石匕首', 'Stone Dagger');
  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '你進入了隧道。狹窄而曲折，只能弓著身子前進。', textEn: 'You enter the tunnel. Narrow and winding, forcing you to crouch.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '牆壁上偶爾閃爍著石化礦脈的灰色光芒。你不敢觸碰。', textEn: 'Petrification ore veins flicker on the walls. You dare not touch them.', delay: 2800 },
    { tag: '移動', tagColor: 'tag-move', text: '隧道開始向上傾斜，氣流隨之改變。', textEn: 'The tunnel begins to slope upward, the airflow shifting.', delay: 2800 },
    { tag: '環境', tagColor: 'tag-system', text: '某處傳來了低沉的嘶嘶聲……', textEn: 'A low hissing sound from somewhere...', delay: 2500 },
    { tag: '警告', tagColor: 'tag-warn', text: '你停下腳步，屏住呼吸，仔細聆聽。', textEn: 'You freeze, hold your breath, and listen.', delay: 3000 },
    { tag: '探索', tagColor: 'tag-explore', text: '隧道突然變寬——前方有一個較大的空間。', textEn: 'The tunnel suddenly widens — a larger chamber ahead.', delay: 2000 },
    { art: `<pre class="ascii-art purple">
              ___....────""""""""────....___
         .-'"                               "'-.
       .'    ___                         ___    '.
      /    .'   '.                     .'   '.    \\
     /    /  ◉    \\    石  蜥  蜴    /    ◉  \\    \\
    |    |    ◉    |  ～～～嘶～～～  |    ◉    |    |
    |     \\ '___' /    .─────────.    \\ '___' /     |
     \\     '-..-'    .'  /#######\\'.    '-..-'     /
      \\              /  /###########\\  \\              /
       '.           | |#############| |           .'
         '-.___     | |#### 石 ####| |     ___.-'
               |    | |#### 鱗 ####| |    |
               |    |  \\###########/  |    |
               |     \\  '._______.'  /     |
               │      \\             /      │
               │       \\    ___    /       │
               │        \\  /   \\  /        │
    ~~~~~~~~~~~~\\________\\/     \\/________/~~~~~~~~~~~~
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</pre>`, artEn: `<pre class="ascii-art purple">
              ___....────""""""""────....___
         .-'"                               "'-.
       .'    ___                         ___    '.
      /    .'   '.                     .'   '.    \\
     /    /  ◉    \\   Stone  Lizard   /    ◉  \\    \\
    |    |    ◉    |  ~~~Hissssss~~~  |    ◉    |    |
    |     \\ '___' /    .─────────.    \\ '___' /     |
     \\     '-..-'    .'  /#######\\'.    '-..-'     /
      \\              /  /###########\\  \\              /
       '.           | |#############| |           .'
         '-.___     | |## Scales ###| |     ___.-'
               |    | |#############| |    |
               |    |  \\###########/  |    |
               |     \\  '._______.'  /     |
               │      \\             /      │
               │       \\    ___    /       │
               │        \\  /   \\  /        │
    ~~~~~~~~~~~~\\________\\/     \\/________/~~~~~~~~~~~~
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-combat', html: '一隻<b>石蜥蜴</b>蹲伏在前方！', htmlEn: 'A <b>Stone Lizard</b> crouches ahead!', delay: 1500, noAmbient: true },
    { tag: '感知', tagColor: 'tag-sense', text: '全身覆蓋灰色石鱗，嘴裡發出低沉的嘶嘶聲。', textEn: 'Covered in grey stone scales, hissing lowly.', delay: 2000, noAmbient: true },
    { tag: '警告', tagColor: 'tag-warn', text: '那雙眼睛閃著不自然的紫色光芒——石化凝視的前兆。', textEn: 'Its eyes glow with an unnatural purple — a sign of petrifying gaze.', delay: 2000 },
  ], [
    { text: '戰鬥', textEn: 'Fight', action: () => {
      startCombat(
        { name: lizardName, hp: 30, atkMin: 8, atkMax: 18, petriDmg: 6, desc: lizardDesc },
        () => { changeStat('str', 1); notify(L('力量 +1', 'STR +1')); loadNode('r0_after_lizard'); },
        () => {
          changePetri(5);
          autoExplore([
            { tag: '撤退', tagColor: 'tag-move', text: '你轉身拔腿就跑！', textEn: 'You turn and run!', delay: 1200 },
            { tag: '石化', tagColor: 'tag-petri', text: '石蜥蜴用石化凝視掃了你一眼……後背一陣發麻。', textEn: 'The lizard\'s petrifying gaze sweeps you... your back goes numb.', delay: 1800 },
          ], [{ text: '退回岩棚', textEn: 'Retreat to the ledge', action: () => loadNode('r0_climb_check') }]);
        }
      );
    }},
    { label: checkLabel('嘗試悄悄繞過去', 'Sneak past it', 'agi', 8), action: () => {
      var r = statCheck('agi', 8);
      if (r === 'crit') {
        autoExplore([
          { tag: '大成功', tagColor: 'tag-move', text: '你如同幽靈般無聲移動——石蜥蜴毫無察覺！', textEn: 'You move like a ghost — the lizard notices nothing!', delay: 2000 },
          { tag: '探索', tagColor: 'tag-explore', text: '你甚至在它身旁摸到了一件有用的東西。', textEn: 'You even find something useful beside it.', delay: 2000 },
        ], [{ text: '繼續前進', textEn: 'Continue forward', action: () => { addItem(L('蜥蜴鱗片', 'Lizard Scale')); loadNode('r0_after_lizard'); } }]);
      } else if (r === 'pass') {
        autoExplore([
          { tag: '潛行', tagColor: 'tag-move', text: '你壓低身體，沿著洞穴邊緣慢慢移動……', textEn: 'You crouch low, inching along the cave wall...', delay: 2000 },
          { tag: '感知', tagColor: 'tag-sense', text: '石蜥蜴抬起頭嗅了嗅空氣……隨後又趴了下去。', textEn: 'The lizard lifts its head to sniff the air... then settles back down.', delay: 2500 },
          { tag: '成功', tagColor: 'tag-explore', text: '你屏住呼吸，從它身後悄悄溜了過去！', textEn: 'Holding your breath, you slip past it silently!', delay: 1800 },
        ], [{ text: '繼續前進', textEn: 'Continue forward', action: () => loadNode('r0_after_lizard') }]);
      } else {
        var dead = changePetri(4);
        if (!dead) dead = changeHp(-5);
        if (dead) return;
        autoExplore([
          { tag: '潛行', tagColor: 'tag-move', text: '你嘗試潛行……踩到了一塊碎石！', textEn: 'You try to sneak... and step on a loose rock!', delay: 1500 },
          { tag: '遭遇', tagColor: 'tag-combat', text: '石蜥蜴猛地轉頭，紫色凝視直射向你！', textEn: 'The lizard snaps its head around — purple gaze locks onto you!', delay: 1500 },
          { tag: '石化', tagColor: 'tag-petri', text: '你的皮膚瞬間僵硬了幾秒——石蜥蜴擺出攻擊姿態。', textEn: 'Your skin goes rigid for seconds — the lizard assumes attack stance.', delay: 2000 },
        ], [{ text: '被迫戰鬥', textEn: 'Forced to fight', action: () => {
          startCombat(
            { name: lizardName, hp: 30, atkMin: 8, atkMax: 18, petriDmg: 6, desc: lizardDescShort },
            () => { changeStat('str', 1); notify(L('力量 +1', 'STR +1')); loadNode('r0_after_lizard'); },
            null
          );
        }}]);
      }
    }},
    { text: hasItem(daggerName) ? L('投擲碎石匕首（先發制人）', 'Throw the Stone Dagger (preemptive)') : L('大聲威嚇', 'Shout to intimidate'), action: () => {
      if (hasItem(daggerName)) {
        removeItem(daggerName);
        autoExplore([
          { tag: '行動', tagColor: 'tag-combat', text: '你抽出碎石匕首，瞄準石蜥蜴的眼睛擲出！', textEn: 'You draw the Stone Dagger and hurl it at the lizard\'s eye!', delay: 1500 },
          { tag: '戰鬥', tagColor: 'tag-combat', text: '匕首準確擊中目標——石蜥蜴發出刺耳慘叫！', textEn: 'A perfect hit — the lizard lets out a piercing shriek!', delay: 2000 },
          { tag: '勝利', tagColor: 'tag-explore', text: '紫色的眼睛暗淡下來，它變回了一塊普通灰石。', textEn: 'The purple eyes dim, and it crumbles into ordinary grey stone.', delay: 2000 },
        ], [{ text: '繼續前進', textEn: 'Continue forward', action: () => { changeStat('str', 1); loadNode('r0_after_lizard'); } }]);
      } else {
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你大喊一聲，試圖嚇退石蜥蜴。', textEn: 'You shout, trying to scare the lizard off.', delay: 1500 },
          { tag: '失敗', tagColor: 'tag-warn', text: '石蜥蜴歪了歪頭……然後直接撲了過來！', textEn: 'The lizard tilts its head... then lunges at you!', delay: 1800 },
        ], [{ text: '戰鬥', textEn: 'Fight', action: () => {
          startCombat(
            { name: lizardName, hp: 30, atkMin: 8, atkMax: 18, petriDmg: 6, desc: lizardDescShort },
            () => { changeStat('str', 1); notify(L('力量 +1', 'STR +1')); loadNode('r0_after_lizard'); },
            () => { changePetri(5); loadNode('r0_climb_check'); }
          );
        }}]);
      }
    }},
  ], { label: L('穿越隧道', 'Traversing tunnel') });
});

registerNode('r0_after_lizard', () => {
  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '石蜥蜴的巢穴後方，隧道繼續向上延伸。', textEn: 'Beyond the lizard\'s lair, the tunnel continues upward.', delay: 2500 },
    { tag: '石化', tagColor: 'tag-petri', text: '牆壁上的礦脈越來越密集，空氣中石化氣息刺痛皮膚。', textEn: 'Ore veins grow denser on the walls, petrification in the air stinging your skin.', delay: 2800 },
    { tag: '移動', tagColor: 'tag-move', text: '隧道在這裡分出了一條支路……你選擇繼續向上。', textEn: 'The tunnel forks here... you choose to keep going up.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '腳下的地面從粗糙的岩石變成了平整的石板。前方的光線似乎更亮了。', textEn: 'The ground shifts from rough rock to smooth flagstone. The light ahead grows brighter.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '你聽到了迴盪的腳步聲和敲擊聲——不是天然的，是人為的。', textEn: 'You hear echoing footsteps and hammering — not natural, but man-made.', delay: 2800 },
    { art: `<pre class="ascii-art gold">
        ╔═══════════════════════════════╗
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│    石    脈         │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│    迴    廊         │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│    ─ ─ ─ ─ ─       │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│    禁    入         │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│         _____       │▓▓▓║
        ║▓▓▓│        │ │ │ │     │▓▓▓║
        ║▓▓▓│        │ │ │ │     │▓▓▓║
        ║▓▓▓│        │ │ │ │     │▓▓▓║
        ╠═══╧════════╧═╧═╧═╧═════╧═══╣
       /                                 \\
      /    · · ·    石    門    · · ·      \\
     /                                      \\
    /════════════════════════════════════════\\
</pre>`, artEn: `<pre class="ascii-art gold">
        ╔═══════════════════════════════╗
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│      V E I N       │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│    C O R R I D O R │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│    ─ ─ ─ ─ ─       │▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│    F O R B I D D E N│▓▓▓║
        ║▓▓▓│                     │▓▓▓║
        ║▓▓▓│         _____       │▓▓▓║
        ║▓▓▓│        │ │ │ │     │▓▓▓║
        ║▓▓▓│        │ │ │ │     │▓▓▓║
        ║▓▓▓│        │ │ │ │     │▓▓▓║
        ╠═══╧════════╧═╧═╧═╧═════╧═══╣
       /                                 \\
      /    · · ·    G A T E    · · ·      \\
     /                                      \\
    /════════════════════════════════════════\\
</pre>`, delay: 800 },
    { tag: '發現', tagColor: 'tag-item', text: '隧道盡頭，一扇粗糙的石門半掩著。', textEn: 'At the tunnel\'s end, a rough stone gate stands ajar.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', html: '門上刻著模糊的古文字：<b>「……石脈……迴廊……禁入……」</b>', htmlEn: 'Faded ancient text carved on the gate: <b>"...Vein...Corridor...Forbidden..."</b>', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', html: '石門的另一邊是下一層——<b>石脈迴廊</b>。', htmlEn: 'Beyond the gate lies the next floor — <b>Vein Corridor</b>.', delay: 1800 },
  ], [
    { text: '推開石門，進入石脈迴廊', textEn: 'Push open the gate, enter the Vein Corridor', action: () => {
      state.region = 1;
      loadNode('r1_start');
    }},
    { text: '在門口稍作休息', textEn: 'Rest by the gate', action: () => {
      changeHp(15);
      changePetri(-2);
      notify(L('HP +15，石化度 -2%', 'HP +15, Petri -2%'));
      autoExplore([
        { tag: '休息', tagColor: 'tag-explore', text: '你靠著石門坐下，閉上眼睛。', textEn: 'You sit against the gate and close your eyes.', delay: 1800 },
        { tag: '恢復', tagColor: 'tag-explore', text: '呼吸逐漸平穩，傷痛稍稍緩解。', textEn: 'Your breathing steadies, pain easing slightly.', delay: 2500 },
        { tag: '警告', tagColor: 'tag-warn', text: '但不能停留太久——空氣中帶有微量石化粒子。', textEn: 'But you can\'t linger — the air carries trace petrification particles.', delay: 2200 },
        { tag: '行動', tagColor: 'tag-move', text: '你站起身來，準備好面對下一段旅程。', textEn: 'You stand, ready for the next leg of the journey.', delay: 1800 },
      ], [{ text: '推開石門，進入石脈迴廊', textEn: 'Push open the gate, enter the Vein Corridor', action: () => { state.region = 1; loadNode('r1_start'); } }]);
    }},
  ], { label: L('向上攀升', 'Ascending') });
});

// ═══════════════════════════════════════════════════
//  Region 0 — 冥河渡江人（全結局後隱藏路線）
// ═══════════════════════════════════════════════════

registerNode('r0_ferryman_gate', () => {
  autoExplore([
    { tag: '感知', tagColor: 'tag-sense',
      text: '你注意到祭獻坑最深處的角落，有一股不尋常的氣流。',
      textEn: 'You notice an unusual draft in the deepest corner of the Sacrificial Pit.',
      delay: 2500 },
    { tag: '探索', tagColor: 'tag-explore',
      text: '撥開碎石和殘骸，一條向下延伸的窄縫赫然出現。',
      textEn: 'Pushing aside rubble and remains, a narrow crevice leading downward appears.',
      delay: 2500 },
    { tag: '行動', tagColor: 'tag-move',
      text: '你側身擠進裂縫，沿著濕滑的石階一路下行……',
      textEn: 'You squeeze through sideways, descending along slippery stone steps...',
      delay: 3000 },
    { art: `<pre class="ascii-art purple">
      ·    ✦    ·         ·    ✦    ·
  ════════════════════════════════════════
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░  ╱▔▔╲  ░░  ╱▔▔╲  ░░  ╱▔▔╲  ░░░░░
  ░░ │ xx │ ░░ │ xx │ ░░ │ xx │ ░░░░░
  ░░ │    │ ░░ │    │ ░░ │    │ ░░░░░
  ░░ │░░░░│ ░░ │░░░░│ ░░ │░░░░│ ░░░░░
  ░░ ╱░░░░╲ ░░ ╱░░░░╲ ░░ ╱░░░░╲ ░░░░░
  ░═══════░░═══════░░═══════░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~  冥    河  ~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</pre>`, artEn: `<pre class="ascii-art purple">
      ·    ✦    ·         ·    ✦    ·
  ════════════════════════════════════════
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░  ╱▔▔╲  ░░  ╱▔▔╲  ░░  ╱▔▔╲  ░░░░░
  ░░ │ xx │ ░░ │ xx │ ░░ │ xx │ ░░░░░
  ░░ │    │ ░░ │    │ ░░ │    │ ░░░░░
  ░░ │░░░░│ ░░ │░░░░│ ░░ │░░░░│ ░░░░░
  ░░ ╱░░░░╲ ░░ ╱░░░░╲ ░░ ╱░░░░╲ ░░░░░
  ░═══════░░═══════░░═══════░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~ S T Y X ~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</pre>`, delay: 1000 },
    { tag: '環境', tagColor: 'tag-sense',
      text: '空氣變得冰冷刺骨。你來到一個巨大的地下河岸。',
      textEn: 'The air turns biting cold. You arrive at a vast underground riverbank.',
      delay: 2500 },
    { tag: '環境', tagColor: 'tag-sense',
      text: '河岸邊散落著數十具屍體——全都是被獻祭的人。',
      textEn: 'Dozens of corpses litter the riverbank — all sacrificial victims.',
      delay: 2800 },
    { tag: '感知', tagColor: 'tag-petri',
      text: '有些屍體完全石化，姿勢扭曲；有些還保留著血肉，表情凝固在最後的恐懼中。',
      textEn: 'Some are fully petrified in twisted poses; others still have flesh, expressions frozen in final terror.',
      delay: 3000 },
    { tag: '環境', tagColor: 'tag-sense',
      text: '他們的手都朝著河水的方向伸出——彷彿在祈求什麼。',
      textEn: 'Their hands all reach toward the river — as if pleading for something.',
      delay: 2800 },
    { tag: '感知', tagColor: 'tag-warn',
      text: '黑色的河水無聲流淌，水面上漂浮著微弱的磷光。',
      textEn: 'Black water flows silently, faint phosphorescence drifting on its surface.',
      delay: 2500 },
    { tag: '發現', tagColor: 'tag-info',
      html: '河岸盡頭——一個<b>高大的身影</b>靜靜佇立在一艘破舊的木船旁。',
      htmlEn: 'At the far end of the bank — a <b>tall figure</b> stands motionless beside a decrepit wooden boat.',
      delay: 3000 },
  ], [
    { text: '走近那個身影', textEn: 'Approach the figure', action: function() { loadNode('r0_ferryman_meet'); } },
    { text: '這裡太詭異了，返回', textEn: 'Too eerie here, turn back', action: function() { loadNode('r0_look'); } },
  ], { label: L('冥河河岸', 'River of the Dead') });
});

registerNode('r0_ferryman_meet', () => {
  var totalStat = state.str + state.agi + state.wil;
  var isStrong = totalStat >= 25 && state.level >= 5;

  autoExplore([
    { art: `<pre class="ascii-art" style="color:#7a9aaa;">
            ·  ✦  ·
           ╱ ▔▔▔▔▔ ╲
          │  ◉    ◉  │
          │     ▽    │
          │  ╰─────╯ │
           ╲ ▁▁▁▁▁ ╱
        ╭───┤       ├───╮
       ╱░░░░│       │░░░░╲
      │░░░░░│       │░░░░░│
      │░░░░░╰───┬───╯░░░░░│
      │░░░░░░░░░│░░░░░░░░░│
       ╲░░░░░░░░│░░░░░░░░╱
        ╲░░░░░░░│░░░░░░░╱
         ╲░░░░╱   ╲░░░░╱
          ╲░░╱     ╲░░╱
    ~~~~~~╱╱╱~~~~~~~╲╲╲~~~~~~
    ~~~ 冥 河 渡 江 人 ~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
</pre>`, artEn: `<pre class="ascii-art" style="color:#7a9aaa;">
            ·  ✦  ·
           ╱ ▔▔▔▔▔ ╲
          │  ◉    ◉  │
          │     ▽    │
          │  ╰─────╯ │
           ╲ ▁▁▁▁▁ ╱
        ╭───┤       ├───╮
       ╱░░░░│       │░░░░╲
      │░░░░░│       │░░░░░│
      │░░░░░╰───┬───╯░░░░░│
      │░░░░░░░░░│░░░░░░░░░│
       ╲░░░░░░░░│░░░░░░░░╱
        ╲░░░░░░░│░░░░░░░╱
         ╲░░░░╱   ╲░░░░╱
          ╲░░╱     ╲░░╱
    ~~~~~~╱╱╱~~~~~~~╲╲╲~~~~~~
    ~~~ F E R R Y M A N ~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
</pre>`, delay: 1500 },
    { tag: '???', tagColor: 'tag-petri',
      text: '那個身影緩緩轉過身來。',
      textEn: 'The figure slowly turns to face you.',
      delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '他穿著被河水浸透的灰色長袍，兜帽遮住了大半張臉。',
      textEn: 'He wears a grey robe soaked by river water, a hood obscuring most of his face.',
      delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '露出的下半張臉——半邊已經石化成光滑的黑曜石，另一半卻毫無石化痕跡。',
      textEn: 'The lower half of his face — one side petrified to smooth obsidian, the other untouched.',
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-petri',
      text: '他的雙眼在兜帽下發出幽藍色的微光，像深海中的磷火。',
      textEn: 'His eyes glow faint blue beneath the hood, like deep-sea phosphorescence.',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「……又一個從上面掉下來的？」',
      textEn: '"...Another one cast down from above?"',
      delay: 2500 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「不……你不一樣。你身上帶著所有結局的重量。」',
      textEn: '"No... you are different. You carry the weight of every ending."',
      delay: 3000 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「黎明、妥協、封鎖、犧牲——你都經歷過了。」',
      textEn: '"Dawn, Compromise, Lockdown, Sacrifice — you have lived them all."',
      delay: 3000 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「這條河通往更深的地方。比祭獻坑更深，比任何人挖掘過的地方都更深。」',
      textEn: '"This river leads deeper. Deeper than the Pit. Deeper than anyone has ever dug."',
      delay: 3000 },
    { tag: '渡江人', tagColor: 'tag-npc',
      html: isStrong
        ? '「你的力量……」<b>他微微點頭。</b>「足夠了。也許你能活著回來。」'
        : '「但你……」<b>他搖了搖頭。</b>「還太弱了。深淵會把你碾成粉末。」',
      htmlEn: isStrong
        ? '"Your strength..." <b>He nods slightly.</b> "Sufficient. Perhaps you can return alive."'
        : '"But you..." <b>He shakes his head.</b> "Too weak. The abyss would grind you to dust."',
      delay: 3000 },
  ], (function() {
    var choices = [];
    if (isStrong) {
      choices.push({ text: '請求渡河', textEn: 'Request passage across', action: function() { loadNode('r0_ferryman_challenge'); } });
    } else {
      choices.push({ text: '（能力不足）我會變得更強再回來', textEn: '(Not strong enough) I will return stronger', action: function() {
        notify(L('需要總屬性 ≥ 25 且等級 ≥ 5', 'Requires total stats ≥ 25 and level ≥ 5'));
        loadNode('r0_look');
      }});
    }
    choices.push({ text: '詢問渡江人的身分', textEn: 'Ask about the ferryman\'s identity', action: function() { loadNode('r0_ferryman_lore'); } });
    choices.push({ text: '離開河岸', textEn: 'Leave the riverbank', action: function() { loadNode('r0_look'); } });
    return choices;
  })(), { label: L('冥河渡江人', 'The Ferryman') });
});

registerNode('r0_ferryman_lore', () => {
  autoExplore([
    { tag: '你', tagColor: 'tag-info',
      text: '「你是什麼人？為什麼在這裡？」',
      textEn: '"Who are you? Why are you here?"',
      delay: 2000 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「我？我是這條河最早的過客。也是最後的。」',
      textEn: '"Me? I was the first to cross this river. And the last."',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「在石化瘟疫出現之前，礦工們就已經挖到了這條河。」',
      textEn: '"Long before the Stone Plague, the miners dug down to this river."',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「他們把我留在這裡看守渡口。然後——就再也沒有人回來過。」',
      textEn: '"They left me here to guard the crossing. Then — no one ever came back."',
      delay: 3000 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「石化瘟疫從對岸蔓延上來。那些被獻祭的人——」',
      textEn: '"The Stone Plague spread from the other shore. Those who were sacrificed —"',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '他指向河岸上的屍體。',
      textEn: 'He gestures toward the corpses on the bank.',
      delay: 2000 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「都是試圖渡河、卻被深淵吞噬的人。」',
      textEn: '"All tried to cross. All were consumed by the abyss."',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「我不會阻止任何人。但我只渡有資格的人。」',
      textEn: '"I won\'t stop anyone. But I only ferry those who are worthy."',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      html: '「資格只有一個——<b>你必須承受得住深淵的凝視。</b>」',
      htmlEn: '"There is but one qualification — <b>you must endure the gaze of the abyss.</b>"',
      delay: 3000 },
  ], [
    { text: '我已經準備好了', textEn: 'I am ready', action: function() { loadNode('r0_ferryman_meet'); } },
    { text: '離開河岸', textEn: 'Leave the riverbank', action: function() { loadNode('r0_look'); } },
  ], { label: L('渡江人的故事', 'The Ferryman\'s Tale') });
});

registerNode('r0_ferryman_challenge', () => {
  autoExplore([
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「既然你要渡河——那就接受深淵的試煉吧。」',
      textEn: '"If you wish to cross — then face the trial of the abyss."',
      delay: 2500 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '他伸出石化的右手，按在你的額頭上。',
      textEn: 'He presses his petrified right hand against your forehead.',
      delay: 2500 },
    { tag: '系統', tagColor: 'tag-system',
      text: L('意志檢定（WIL）—— DC 10', 'Willpower Check (WIL) — DC 10'),
      delay: 2000 },
    { tag: '檢定', tagColor: 'tag-info',
      text: L('成功率：' + checkRate('wil', 10) + '%', 'Success rate: ' + checkRate('wil', 10) + '%'),
      delay: 1500 },
  ], [
    { text: '承受深淵的凝視', textEn: 'Endure the gaze of the abyss', action: function() {
      var result = statCheck('wil', 10);
      if (result === 'crit') {
        sfx.pass();
        notify(L('大成功！', 'Critical Success!'));
        loadNode('r0_ferryman_descent');
      } else if (result === 'pass') {
        sfx.pass();
        notify(L('檢定成功！', 'Check Passed!'));
        loadNode('r0_ferryman_descent');
      } else {
        sfx.fail();
        changePetri(8);
        changeHp(-15);
        notify(L('檢定失敗……石化度 +8%，HP -15', 'Check Failed... Petri +8%, HP -15'));
        loadNode('r0_ferryman_fail');
      }
    }},
    { text: '還沒準備好……', textEn: 'Not ready yet...', action: function() { loadNode('r0_ferryman_meet'); } },
  ], { label: L('深淵試煉', 'Trial of the Abyss') });
});

registerNode('r0_ferryman_fail', () => {
  autoExplore([
    { tag: '感知', tagColor: 'tag-petri',
      text: '一股巨大的壓力從額頭灌入——你的意識在剎那間被撕裂。',
      textEn: 'Immense pressure floods through your forehead — your consciousness tears apart in an instant.',
      delay: 2800 },
    { tag: '感知', tagColor: 'tag-warn',
      text: '你看見了深淵——無盡的黑暗中，無數石化的靈魂在哀嚎。',
      textEn: 'You see the abyss — in endless darkness, countless petrified souls wailing.',
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-petri',
      text: '你的左手急速石化，冰冷感蔓延到肩膀——',
      textEn: 'Your left hand petrifies rapidly, the cold spreading to your shoulder —',
      delay: 2500 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '渡江人收回了手。你跌坐在地上，大口喘氣。',
      textEn: 'The ferryman withdraws his hand. You collapse, gasping.',
      delay: 2500 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「……還差一點。你的意志還不夠堅定。」',
      textEn: '"...Almost. Your will is not yet firm enough."',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「去吧。變得更強，再回來找我。我哪裡也不會去。」',
      textEn: '"Go. Grow stronger, then return. I will be here."',
      delay: 2800 },
  ], [
    { text: '回到祭獻坑', textEn: 'Return to the Sacrificial Pit', action: function() { loadNode('r0_look'); } },
  ], { label: L('試煉失敗', 'Trial Failed') });
});

registerNode('r0_ferryman_descent', () => {
  state.flags.ferrymanPassed = true;
  autoExplore([
    { tag: '感知', tagColor: 'tag-petri',
      text: '深淵的凝視灌入你的腦海——',
      textEn: 'The gaze of the abyss floods your mind —',
      delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '你看見了黑暗。比任何黑暗都更深邃的黑暗。',
      textEn: 'You see darkness. A darkness deeper than any other.',
      delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense',
      text: '然後——黑暗退去了。你的額頭上留下一個冰涼的印記。',
      textEn: 'Then — the darkness recedes. A cold mark remains on your forehead.',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「……你承受住了。」渡江人的聲音中帶著一絲意外。',
      textEn: '"...You endured." A hint of surprise in the ferryman\'s voice.',
      delay: 2800 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「上船吧。我送你去深淵的另一邊。」',
      textEn: '"Board the vessel. I will take you to the other side of the abyss."',
      delay: 2500 },
    { art: `<pre class="ascii-art" style="color:#7a9aaa;">
    ·    ✦    ·    ✦    ·    ✦    ·
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~                                  ~~~
  ~~   ╭──────────────────────╮        ~~
  ~~   │  ╱▔╲        ╱▔╲     │        ~~
  ~~   │ │ ◉│    ☆  │  │     │        ~~
  ~~   │  ╲▁╱   │    ╲▁╱     │        ~~
  ~~   │        ─┤──          │        ~~
  ~~   │         │            │        ~~
  ~~   ╰────╥────╨────────────╯        ~~
  ~~~~~~~~~╱╱╲~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~╱╱  ╲~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~   ▼  ▼  ▼   更  深  處  ▼  ▼  ▼  ~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</pre>`, artEn: `<pre class="ascii-art" style="color:#7a9aaa;">
    ·    ✦    ·    ✦    ·    ✦    ·
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~                                  ~~~
  ~~   ╭──────────────────────╮        ~~
  ~~   │  ╱▔╲        ╱▔╲     │        ~~
  ~~   │ │ ◉│    ☆  │  │     │        ~~
  ~~   │  ╲▁╱   │    ╲▁╱     │        ~~
  ~~   │        ─┤──          │        ~~
  ~~   │         │            │        ~~
  ~~   ╰────╥────╨────────────╯        ~~
  ~~~~~~~~~╱╱╲~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~╱╱  ╲~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~  ▼  ▼  ▼  T H E  D E E P  ▼  ▼  ▼ ~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</pre>`, delay: 1500 },
    { tag: '行動', tagColor: 'tag-move',
      text: '你踏上那艘破舊的木船。船身在黑水中輕輕搖晃。',
      textEn: 'You step onto the decrepit boat. It sways gently in the black water.',
      delay: 2500 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '渡江人站在船尾，用一根長篙撐開了河岸。',
      textEn: 'The ferryman stands at the stern, pushing off with a long pole.',
      delay: 2500 },
    { tag: '環境', tagColor: 'tag-sense',
      text: '木船緩緩駛入黑暗。河岸上那些屍體的輪廓漸漸消失。',
      textEn: 'The boat drifts into darkness. The silhouettes of corpses on the bank fade away.',
      delay: 3000 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「河的對岸……是石化瘟疫的源頭。那裡有比你見過的一切都更古老的東西。」',
      textEn: '"On the other shore... lies the source of the Stone Plague. Things far older than anything you have seen."',
      delay: 3500 },
    { tag: '渡江人', tagColor: 'tag-npc',
      text: '「也許你能找到終結這一切的方法。也許你會成為下一具河岸上的屍體。」',
      textEn: '"Perhaps you will find a way to end it all. Perhaps you will become the next corpse on the bank."',
      delay: 3500 },
    { tag: '環境', tagColor: 'tag-petri',
      text: '前方的黑暗中，隱約浮現出一個巨大的輪廓……',
      textEn: 'In the darkness ahead, a vast silhouette slowly takes shape...',
      delay: 3000 },
    { tag: '系統', tagColor: 'tag-system',
      html: '<b>—— 深淵更深處．敬請期待 ——</b>',
      htmlEn: '<b>—— The Deeper Abyss · Coming Soon ——</b>',
      delay: 2000 },
  ], [
    { text: '返回河岸（暫時結束）', textEn: 'Return to the bank (end of current content)', action: function() {
      notify(L('冥河渡江人的印記已刻在你的額頭上。', 'The ferryman\'s mark is etched upon your forehead.'));
      loadNode('r0_look');
    }},
  ], { label: L('渡河', 'Crossing the River') });
});

// ═══════════════════════════════════════════════════
//  Region 0 — path shortcut
// ═══════════════════════════════════════════════════
registerNode('r0_path', () => {
  autoExplore([
    { tag: '決意', tagColor: 'tag-info', text: '你不想在這個死亡之坑裡多待一秒。', textEn: 'You don\'t want to spend another second in this death pit.', delay: 2000,
      art: `<pre class="ascii-art">
        ·    ✦    ·         ·    ✦
    ╔═══════════════════════════════╗
    ║  ·  ·  ·     ·  ·  ·  ·  ·  ║
    ║     ░░░░░░░░░░░░░░░░░░░     ║
    ║   ░░░░░  ·  ░░░  ·  ░░░░░  ║
    ║  ░░░  ·       ·       ·░░░  ║
    ║  ░░               ↑     ░░  ║
    ║  ░░   ·    ☆    · ↑  ·  ░░  ║
    ║  ░░░  ·       ·   ↑ · ░░░  ║
    ║   ░░░░░  ·  ░░░  ·  ░░░░░  ║
    ║     ░░░░░░░░░░░░░░░░░░░     ║
    ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
        ·    ✦    ·         ·    ✦
    ╔═══════════════════════════════╗
    ║  ·  ·  ·     ·  ·  ·  ·  ·  ║
    ║     ░░░░░░░░░░░░░░░░░░░     ║
    ║   ░░░░░  ·  ░░░  ·  ░░░░░  ║
    ║  ░░░  ·       ·       ·░░░  ║
    ║  ░░               ↑     ░░  ║
    ║  ░░   ·    ☆    · ↑  ·  ░░  ║
    ║  ░░░  ·       ·   ↑ · ░░░  ║
    ║   ░░░░░  ·  ░░░  ·  ░░░░░  ║
    ║     ░░░░░░░░░░░░░░░░░░░     ║
    ╚═══════════════════════════════╝
</pre>` },
    { tag: '探索', tagColor: 'tag-explore', text: '快速掃視洞穴——北面岩壁上的攀爬痕跡最為明顯。', textEn: 'Quick scan of the cave — climbing marks on the north wall are the most obvious.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '那應該是唯一的出路。但也許應該先做些準備。', textEn: 'That seems to be the only exit. But perhaps some preparation first.', delay: 2200 },
  ], [
    { text: '先仔細觀察環境再說', textEn: 'Survey the area first', action: () => loadNode('r0_look') },
    { text: '不管了，直接爬', textEn: 'Forget it, just climb', action: () => loadNode('r0_climb_str') },
  ], { label: L('尋找出路', 'Finding exit') });
});
