// ══ Region 2 — 大採石場 ══

// ═══════════════════════════════════════════════════
//  Region 2 — 大採石場 (Great Quarry)
// ═══════════════════════════════════════════════════

registerNode('r2_start', () => {
  state.region = 2;
  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '你踏上了通往上方的階梯。', textEn: 'You ascend the stairs leading upward.', delay: 1500 },
    { art: `<pre class="ascii-art gold">
  ╔══════════════════════════════════════════════════════╗
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
  ║░                                                    ░║
  ║░        大      採      石      場                  ░║
  ║░                                                    ░║
  ║░════════════════════════════════════════════════════░║
  ║░                                                    ░║
  ║░     ╱╲      ╱╲                ╱╲      ╱╲          ░║
  ║░    ╱░░╲    ╱░░╲    ▓▓▓▓     ╱░░╲    ╱░░╲         ░║
  ║░   ╱░░░░╲  ╱░░░░╲  ▓機械▓  ╱░░░░╲  ╱░░░░╲        ░║
  ║░  ╱░岩柱░╲╱░岩柱░╲  ▓▓▓▓  ╱░岩柱░╲╱░岩柱░╲       ░║
  ║░  ════════════════    ▓▓    ════════════════        ░║
  ║░        .:*~*:.    ╱════╲    .:*~*:.                ░║
  ║░       .:*~*~*:.  ╱  你  ╲  .:*~*~*:.              ░║
  ║░        結  晶   ╱════════╲   結  晶               ░║
  ║░                                                    ░║
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
  ╚══════════════════════════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art gold">
  ╔══════════════════════════════════════════════════════╗
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
  ║░                                                    ░║
  ║░       G R E A T    Q U A R R Y                     ░║
  ║░                                                    ░║
  ║░════════════════════════════════════════════════════░║
  ║░                                                    ░║
  ║░     ╱╲      ╱╲                ╱╲      ╱╲          ░║
  ║░    ╱░░╲    ╱░░╲    ▓▓▓▓     ╱░░╲    ╱░░╲         ░║
  ║░   ╱░░░░╲  ╱░░░░╲  ▓Mech▓  ╱░░░░╲  ╱░░░░╲        ░║
  ║░  ╱Pillar╲╱Pillar╲  ▓▓▓▓  ╱Pillar╲╱Pillar╲       ░║
  ║░  ════════════════    ▓▓    ════════════════        ░║
  ║░        .:*~*:.    ╱════╲    .:*~*:.                ░║
  ║░       .:*~*~*:.  ╱ You  ╲  .:*~*~*:.              ░║
  ║░       Crystals  ╱════════╲  Crystals               ░║
  ║░                                                    ░║
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
  ╚══════════════════════════════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', html: '你踏入了<b>大採石場</b>。', htmlEn: 'You step into the <b>Great Quarry</b>.', delay: 1800 },
    { tag: '感知', tagColor: 'tag-sense', text: '這裡的空間大得令人窒息——巨大的岩柱撐起數十米高的穹頂。', textEn: 'The sheer scale is overwhelming — colossal stone pillars support a ceiling dozens of meters high.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '頭頂的結晶礦脈散發出暗金色的光芒，照亮了整座地下工場。', textEn: 'Crystal veins overhead emit a dark golden glow, illuminating the entire underground quarry.', delay: 2200 },
    { tag: '環境', tagColor: 'tag-system', text: '四周散落著巨大的石塊、斷裂的鐵軌和被遺棄的機械殘骸。', textEn: 'Massive boulders, broken rails, and abandoned mechanical remains litter the ground.', delay: 2200 },
    { tag: '石化', tagColor: 'tag-petri', text: '空氣中的石化粒子濃度驟升——你的皮膚隱隱刺痛。', textEn: 'Petrification particles in the air surge — your skin tingles faintly.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '這裡曾是地底文明最大的採石場——也是石化戰爭的主戰場。', textEn: 'This was the underground civilization\'s largest quarry — and the main battlefield of the Petrification War.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '當石化瘟疫失控時，人類動用了戰爭機械試圖封鎖礦坑。但最終，機械也被石化了。', textEn: 'When the plague spiraled out of control, humans deployed war machines to seal the mines. In the end, the machines were petrified too.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '遠處……似乎有火光在閃爍。這個深度，還有人活著？', textEn: 'In the distance... a flickering firelight. People, alive at this depth?', delay: 2500 },
  ].concat(state.flags.r1YingCompanion ? [
    { tag: '記憶', tagColor: 'tag-system', text: '你想起了螢——你們約好在採石場會合。希望' + (state.sex === 'male' ? '她' : '他') + '能平安到達這裡。', textEn: 'You think of Ying — you agreed to meet at the quarry. You hope ' + (state.sex === 'male' ? 'she' : 'he') + ' made it here safely.', delay: 2500 },
  ] : []), [
    { text: '觀察採石場', textEn: 'Survey the quarry', action: () => loadNode('r2_look') },
  ], { label: L('進入大採石場', 'Entering Great Quarry') });
});

// ── Hub: Quarry Overview ──
registerNode('r2_look', () => {
  state.region = 2;
  var firstVisit = !state.flags.r2Looked;
  state.flags.r2Looked = true;

  var mapArt = { art: `<pre class="ascii-art gold">
            北：上升通道（鎖）
              │
  ┌───────────┼───────────┐
  │  ╱╲  ╱╲  │  ╱╲  ╱╲  │
  │ ╱機械╲    │    營  地 │
  │  殘骸     │   🔥      │
  │           │           │
  │  ========─┤  ─═─═─═─ │
  │  採石台   │   斷  橋  │
  │  ========─┤  ─═─═─═─ │
  │           │           │
  │  .:*~*:.  │   ╱▔▔╲   │
  │  結晶密林 │  │機甲│   │
  │  .:*~*:.  │   ╲__╱   │
  └───────────┼───────────┘
              │
           南：迴廊（返回）
</pre>`, artEn: `<pre class="ascii-art gold">
            N: Ascent Shaft (Locked)
              │
  ┌───────────┼───────────┐
  │  ╱╲  ╱╲  │  ╱╲  ╱╲  │
  │ ╱Machine╲ │   Camp    │
  │  Ruins    │   🔥      │
  │           │           │
  │  ========─┤  ─═─═─═─ │
  │  Quarry   │  Broken   │
  │  Platform │  Bridge   │
  │           │           │
  │  .:*~*:.  │   ╱▔▔╲   │
  │  Crystal  │  │Mech│   │
  │  Thicket  │   ╲__╱   │
  └───────────┼───────────┘
              │
           S: Corridor (Return)
</pre>`, delay: 800 };

  var steps = [];
  if (firstVisit) {
    steps.push(mapArt);
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '採石場的規模超乎想像。你站在入口的高台上，俯瞰整片地下工場。', textEn: 'The quarry\'s scale defies imagination. You stand on a raised platform, overlooking the underground works.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '左邊是大片的採石台和結晶密林。右邊是一座斷裂的石橋，橋對面似乎有營火的光芒。', textEn: 'To the left: quarry platforms and crystal thickets. To the right: a broken stone bridge, with firelight beyond.', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '正前方的遠端，一座巨大的石化戰爭機械矗立在那裡，彷彿沉睡的巨人。', textEn: 'Straight ahead, a colossal petrified war machine stands like a sleeping giant.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '北面的岩壁上有一條通道口——那是通往上層的上升通道，但似乎被什麼東西封鎖了。', textEn: 'On the north wall, a passage opening — the ascent shaft to the upper level, but something blocks it.', delay: 2500 });
    // ── Ying arrives ──
    if (state.flags.r1YingCompanion && !state.flags.r2YingArrived) {
      state.flags.r2YingArrived = true;
      var isMale = state.sex === 'male';
      var yP = isMale ? L('她', 'she') : L('他', 'he');
      steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '「——等等我！」', textEn: '"— Wait for me!"', delay: 2200 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '身後傳來急促的腳步聲和喘息。你轉過身——', textEn: 'Hurried footsteps and panting from behind. You turn —', delay: 2000 });
      steps.push({ tag: '遭遇', tagColor: 'tag-explore', html: '<b>螢</b>從入口的階梯上跑來，滿臉灰塵，衣角還沾著礦石碎屑。' + yP + '手裡緊抱著那本手冊。', htmlEn: '<b>Ying</b> rushes up the entrance stairs, face dusty, clothes flecked with mineral debris. ' + (isMale ? 'She' : 'He') + ' clutches that notebook tight.', delay: 2800 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「哈……哈……我從側隧道繞上來的。差點被一隻石化蟒吃了。」螢彎著腰喘氣，但眼睛裡帶著笑意。', textEn: '"Ha... ha... I came up through a side tunnel. Nearly got eaten by a petrified python." Ying doubles over panting, but ' + (isMale ? 'her' : 'his') + ' eyes are smiling.', delay: 3200 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: yP + '直起身，四下張望，然後深吸一口氣——', textEn: (isMale ? 'She' : 'He') + ' straightens up, looks around, takes a deep breath —', delay: 2200 });
      steps.push({ tag: '情報', tagColor: 'tag-info', html: '「……<b>大採石場。</b>」螢的眼神變了，變得專注而狂熱。「我找了兩年的地方。封印石室就在這底下某處。」', htmlEn: '"...<b>The Great Quarry.</b>" Ying\'s gaze shifts — focused, fervent. "The place I\'ve searched for two years. The Seal Chamber is somewhere beneath this."', delay: 3500 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: yP + '轉頭看著你，嘴角微揚：「還好你走得不算太快。」', textEn: (isMale ? 'She' : 'He') + ' turns to you, lips curving: "Good thing you didn\'t walk too fast."', delay: 2500 });
    }
  } else {
    steps.push(mapArt);
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你回到了採石場的瞭望台。暗金色的光芒依舊照亮著這片荒蕪的地下工場。', textEn: 'You return to the quarry overlook. Dark golden light still illuminates this desolate underground works.', delay: 2000 });
  }

  autoExplore(steps, (function() {
    var c = [];
    c.push({ text: '前往採石台', textEn: 'Go to the quarry platform', action: () => loadNode('r2_quarry_floor') });
    c.push({ text: '調查石化機械殘骸', textEn: 'Investigate the petrified machine', action: () => loadNode('r2_machine') });
    if (!state.flags.r2BridgeFixed) {
      c.push({ text: '查看斷橋', textEn: 'Examine the broken bridge', action: () => loadNode('r2_bridge') });
    } else {
      c.push({ text: '過橋前往營地', textEn: 'Cross bridge to the camp', action: () => loadNode('r2_camp') });
    }
    if (state.flags.r2CampVisited) {
      c.push({ text: '去找營地的人', textEn: 'Visit the camp', action: () => loadNode('r2_camp') });
    }
    if (state.flags.r2MachineCore) {
      c.push({ text: '前往上升通道', textEn: 'Go to the ascent shaft', action: () => loadNode('r2_gate') });
    }
    if (state.flags.r2YingArrived) {
      c.push({ text: '找螢', textEn: 'Find Ying', action: () => loadNode('r2_ying_talk') });
    }
    c.push({ text: '巡邏採石場', textEn: 'Patrol the quarry', action: () => loadNode('r2_patrol') });
    c.push({ text: '返回石脈迴廊', textEn: 'Return to Vein Corridor', action: () => loadNode('r1_deep') });
    return c;
  })(), { label: L('觀察採石場', 'Surveying quarry') });
});

// ── Quarry Floor — 採石台 ──
registerNode('r2_quarry_floor', () => {
  var firstVisit = !state.flags.r2FloorVisited;
  state.flags.r2FloorVisited = true;
  var steps = [];
  if (firstVisit) {
    steps.push({ art: `<pre class="ascii-art gold">
  ════════════════════════════════════════
      ╱╲              ╱╲              ╱╲
     ╱░░╲  .:*~*:.   ╱░░╲  .:*~*:.  ╱░░╲
    ╱░░░░╲.:*~*~*:. ╱░░░░╲.:*~*~*:.╱░░░░╲
    ═══════  結 晶  ═══════  結 晶  ═══════
              ◆                ◆
         ╔═══════╗        ╔═══════╗
         ║ 採石台 ║        ║ 工具架 ║
         ╚═══════╝        ╚═══════╝
  ════════════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art gold">
  ════════════════════════════════════════
      ╱╲              ╱╲              ╱╲
     ╱░░╲  .:*~*:.   ╱░░╲  .:*~*:.  ╱░░╲
    ╱░░░░╲.:*~*~*:. ╱░░░░╲.:*~*~*:.╱░░░░╲
    ═══════ Crystal ═══════ Crystal ═══════
              ◆                ◆
         ╔═══════╗        ╔═══════╗
         ║Quarry ║        ║ Tools ║
         ║Platfm ║        ║ Rack  ║
         ╚═══════╝        ╚═══════╝
  ════════════════════════════════════════
</pre>`, delay: 800 });
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你來到了採石場的主作業區。巨大的採石台上還留著開鑿的痕跡。', textEn: 'You reach the quarry\'s main work area. Massive platforms still bear chisel marks.', delay: 2200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '採石台之間生長著密集的石化結晶——有些高達兩米，散發出危險的金色光芒。', textEn: 'Dense petrification crystals grow between platforms — some two meters tall, radiating dangerous golden light.', delay: 2500 });
    steps.push({ tag: '環境', tagColor: 'tag-system', text: '地面上散落著巨型鑿岩工具和採礦車的殘骸。', textEn: 'Giant rock-carving tools and mining cart remains litter the ground.', delay: 2000 });
  } else {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你回到了採石台。結晶的金色光芒依舊不減，石化粒子在空氣中漂浮。', textEn: 'You return to the quarry platforms. Crystal light still burns gold, petri-particles drift in the air.', delay: 1800 });
  }
  if (!state.flags.r2FloorSearched) {
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '工具架上還有一些完好的裝備。', textEn: 'Some intact equipment remains on the tool rack.', delay: 1800 });
    steps.push({ tag: '發現', tagColor: 'tag-item', html: '你找到了一把<b>強化鶴嘴鋤</b>和一瓶<b>抗石化藥膏</b>。', htmlEn: 'You find a <b>Reinforced Pickaxe</b> and a jar of <b>Anti-Petri Salve</b>.', delay: 2500, effect: () => {
      addItem(L('強化鶴嘴鋤', 'Reinforced Pickaxe'));
      addItem(L('抗石化藥膏', 'Anti-Petri Salve'));
      state.flags.r2FloorSearched = true;
    }});
  }
  if (!state.flags.r2CrystalHarvested) {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '其中一簇結晶特別明亮——似乎蘊含著高純度的石化能量。', textEn: 'One cluster of crystals shines especially bright — it seems to contain high-purity petrification energy.', delay: 2200 });
  }
  autoExplore(steps, (function() {
    var c = [];
    if (!state.flags.r2CrystalHarvested) {
      c.push({ text: checkLabel('嘗試採集高純度結晶', 'Harvest high-purity crystal', 'str', 10), action: () => loadNode('r2_crystal_harvest') });
    }
    if (hasItem(L('抗石化藥膏', 'Anti-Petri Salve'))) {
      c.push({ text: '使用抗石化藥膏', textEn: 'Apply Anti-Petri Salve', action: () => {
        removeItem(L('抗石化藥膏', 'Anti-Petri Salve'));
        changePetri(-12);
        changeHp(8);
        notify(L('石化度 -12%，HP +8', 'Petri -12%, HP +8'));
        loadNode('r2_quarry_floor');
      }});
    }
    c.push({ text: '搜索結晶密林深處', textEn: 'Search deep in the crystal thicket', action: () => loadNode('r2_crystal_deep') });
    if (state.flags.r1SurvivorMet && !state.flags.r2ZhouTrace) {
      c.push({ text: '岩壁上好像有字……', textEn: 'There seems to be writing on the rock wall...', action: () => loadNode('r2_zhou_trace') });
    }
    c.push({ text: '返回瞭望台', textEn: 'Return to overlook', action: () => loadNode('r2_look') });
    return c;
  })(), { label: L('搜索採石台', 'Searching quarry platform') });
});

registerNode('r2_crystal_harvest', () => {
  var result = statCheck('str', 10);
  if (result !== 'fail') {
    state.flags.r2CrystalHarvested = true;
    addItem(L('高純度石化結晶', 'High-Purity Petri Crystal'));
    autoExplore([
      { art: `<pre class="ascii-art gold">
    .:*~*:.    .:*~*:.    .:*~*:.
   .:*~*~*:.  .:*~*~*:.  .:*~*~*:.
   ·✦ 結晶 ✦· ·✦ 結晶 ✦· ·✦ 結晶 ✦·
    ˚:·△·:˚    ˚:·△·:˚    ˚:·△·:˚
     ║██║       ║██║       ║██║
     ║██║       ║██║       ║██║
  ───╨══╨───────╨══╨───────╨══╨───
        ╱⚒╲  ← 鶴嘴鋤
       ╱····╲
  ════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art gold">
    .:*~*:.    .:*~*:.    .:*~*:.
   .:*~*~*:.  .:*~*~*:.  .:*~*~*:.
   ·✦Crystal✦· ·✦Crystal✦· ·✦Crystal✦·
    ˚:·△·:˚    ˚:·△·:˚    ˚:·△·:˚
     ║██║       ║██║       ║██║
     ║██║       ║██║       ║██║
  ───╨══╨───────╨══╨───────╨══╨───
        ╱⚒╲  ← Pickaxe
       ╱····╲
  ════════════════════════════════
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你舉起鶴嘴鋤，用力鑿向結晶根部——', textEn: 'You raise the pickaxe and strike at the crystal\'s base —', delay: 1800 },
      { tag: '成功', tagColor: 'tag-item', html: '結晶應聲碎裂！你小心翼翼地取下一塊拳頭大小的<b>高純度石化結晶</b>。', htmlEn: 'The crystal shatters! You carefully extract a fist-sized <b>High-Purity Petri Crystal</b>.', delay: 2200 },
      { tag: '石化', tagColor: 'tag-petri', text: '碎裂的瞬間釋放出一股石化粒子——你的手臂瞬間僵硬了一下。', textEn: 'A burst of petrification particles — your arm goes rigid for a moment.', delay: 2000 },
    ], [
      { text: '繼續', textEn: 'Continue', action: () => { changePetri(3); loadNode('r2_quarry_floor'); } },
    ], { label: L('採集結晶', 'Harvesting crystal') });
  } else {
    changePetri(5);
    changeHp(-8);
    autoExplore([
      { tag: '行動', tagColor: 'tag-move', text: '你用力揮下——但結晶比想像中堅硬得多。', textEn: 'You swing hard — but the crystal is far tougher than expected.', delay: 1800 },
      { tag: '失敗', tagColor: 'tag-warn', text: '鶴嘴鋤彈了回來，結晶的碎片飛濺，刺入你的手臂！', textEn: 'The pickaxe bounces back, crystal shards fly and pierce your arm!', delay: 2000 },
      { tag: '石化', tagColor: 'tag-petri', text: '石化能量從傷口灌入——你的手臂開始泛灰。', textEn: 'Petrification energy seeps through the wound — your arm begins to grey.', delay: 2200 },
    ], [
      { text: '退後', textEn: 'Back away', action: () => loadNode('r2_quarry_floor') },
    ], { label: L('採集失敗', 'Harvest failed') });
  }
});

registerNode('r2_crystal_deep', () => {
  changePetri(2);
  var steps = [
    { art: `<pre class="ascii-art gold">
  .:*~*~*:..:*~*~*:. .:*~*~*:..:*~*:.
  ·✦·✦·✦·✦··✦·✦·✦·✦· ·✦·✦·✦·✦··✦·✦·
   ║██████║║██████║   ║██████║║████║
   ║██████║║██████║   ║██████║║████║
   ║██████║║██████║   ║██████║║████║
   ║██░░██║║██░░██║   ║██░░██║║██║
   ║██░░██║║██░░██║   ║██░░██║║██║
  ─╨══════╨╨══════╨───╨══════╨╨══╨──
     ✦ 結晶密林 — 深處 ✦
  ══════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art gold">
  .:*~*~*:..:*~*~*:. .:*~*~*:..:*~*:.
  ·✦·✦·✦·✦··✦·✦·✦·✦· ·✦·✦·✦·✦··✦·✦·
   ║██████║║██████║   ║██████║║████║
   ║██████║║██████║   ║██████║║████║
   ║██████║║██████║   ║██████║║████║
   ║██░░██║║██░░██║   ║██░░██║║██║
   ║██░░██║║██░░██║   ║██░░██║║██║
  ─╨══════╨╨══════╨───╨══════╨╨══╨──
     ✦ Crystal Thicket — Deep ✦
  ══════════════════════════════════
</pre>`, delay: 800 },
    { tag: '移動', tagColor: 'tag-move', text: '你深入結晶密林。四周的結晶越來越高大密集。', textEn: 'You venture deep into the crystal thicket. Crystals grow taller and denser.', delay: 2000 },
    { tag: '石化', tagColor: 'tag-petri', text: '空氣中的石化濃度極高——你的呼吸變得沉重。', textEn: 'Petrification density is extreme — breathing grows heavy.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '結晶之間……有一具石化的軀體。不——是一座雕像般的人形。', textEn: 'Among the crystals... a petrified body. No — a statuesque humanoid form.', delay: 2500 },
  ];
  if (!state.flags.r2CrystalStatueSearched) {
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '這是一位穿著工程師制服的女性。她的手中還緊握著一本筆記。', textEn: 'A woman in engineer\'s garb. Her hand still clutches a notebook.', delay: 2500 });
    steps.push({ tag: '發現', tagColor: 'tag-item', html: '你小心翼翼地取下了<b>工程師筆記</b>。封面寫著：「第七號戰甲——啟動手冊」。', htmlEn: 'You carefully take the <b>Engineer\'s Notebook</b>. Its cover reads: "Mech Unit No.7 — Activation Manual."', delay: 2800, effect: () => {
      addItem(L('工程師筆記', 'Engineer\'s Notebook'));
      state.flags.r2CrystalStatueSearched = true;
    }});
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '筆記中記載了戰爭機械的核心啟動方法。也許……那些機械還能再次運轉？', textEn: 'The notebook describes how to activate war machine cores. Perhaps... those machines could run again?', delay: 2800 });
  } else {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '石化工程師的雕像依舊佇立在結晶叢中，永遠凝固在伸手的姿勢。', textEn: 'The petrified engineer still stands among the crystals, frozen forever mid-reach.', delay: 2200 });
  }
  autoExplore(steps, [
    { text: '離開結晶密林', textEn: 'Leave the crystal thicket', action: () => loadNode('r2_quarry_floor') },
  ], { label: L('探索結晶密林', 'Exploring crystal thicket') });
});

// ── War Machine — 石化戰爭機械 ──
registerNode('r2_machine', () => {
  var hasNotebook = hasItem(L('工程師筆記', 'Engineer\'s Notebook'));
  var hasCrystal = hasItem(L('高純度石化結晶', 'High-Purity Petri Crystal'));
  var steps = [
    { art: `<pre class="ascii-art red">
          ╔═══════════════════╗
          ║   ╱▔▔▔▔▔▔▔╲     ║
          ║  │  ◆    ◆  │    ║
          ║  │  ╔════╗  │    ║
          ║   ╲ ║核心║ ╱     ║
          ║    ╲╚════╝╱      ║
          ║  ╔══╧════╧══╗    ║
          ║  ║ ▓▓▓▓▓▓▓▓ ║    ║
          ║  ║ ▓ 戰甲 ▓ ║    ║
          ║  ║ ▓ 七號 ▓ ║    ║
          ║  ║ ▓▓▓▓▓▓▓▓ ║    ║
          ║  ╠══╤════╤══╣    ║
          ║  ║  │    │  ║    ║
          ║  ╱╲ │    │ ╱╲    ║
          ║ ╱░░╲│    │╱░░╲   ║
          ╚═══════════════════╝
</pre>`, artEn: `<pre class="ascii-art red">
          ╔═══════════════════╗
          ║   ╱▔▔▔▔▔▔▔╲     ║
          ║  │  ◆    ◆  │    ║
          ║  │  ╔════╗  │    ║
          ║   ╲ ║Core║ ╱     ║
          ║    ╲╚════╝╱      ║
          ║  ╔══╧════╧══╗    ║
          ║  ║ ▓▓▓▓▓▓▓▓ ║    ║
          ║  ║ ▓ MECH ▓ ║    ║
          ║  ║ ▓  No.7 ▓ ║    ║
          ║  ║ ▓▓▓▓▓▓▓▓ ║    ║
          ║  ╠══╤════╤══╣    ║
          ║  ║  │    │  ║    ║
          ║  ╱╲ │    │ ╱╲    ║
          ║ ╱░░╲│    │╱░░╲   ║
          ╚═══════════════════╝
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '你來到了巨大的石化戰爭機械面前。它有三層樓高，全身覆蓋著灰色的石化外殼。', textEn: 'You stand before the colossal petrified war machine. Three stories tall, coated in grey petrification shell.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '機甲的胸口有一個菱形凹槽——核心反應爐的位置。但裡面是空的。', textEn: 'A diamond-shaped slot in its chest — the core reactor. But it\'s empty.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '這是「第七號戰甲」——石化戰爭時期的人形兵器。曾是保衛地下城市的最後防線。', textEn: 'This is "Mech Unit No.7" — a humanoid weapon from the Petrification War. Once the last line of defense for the underground city.', delay: 2800 },
  ];
  if (hasNotebook && !state.flags.r2MachineInspected) {
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '你翻開<b>工程師筆記</b>——記載了啟動方法：「需要高純度石化結晶作為動力核心，嵌入胸口反應爐。」', htmlEn: 'You open the <b>Engineer\'s Notebook</b> — it describes activation: "Requires a high-purity petri crystal as power core, inserted into the chest reactor."', delay: 3000, effect: () => { state.flags.r2MachineInspected = true; } });
  }
  autoExplore(steps, (function() {
    var c = [];
    if (hasNotebook && hasCrystal && !state.flags.r2MachineCore) {
      c.push({ text: '將高純度結晶嵌入核心', textEn: 'Insert the crystal into the core', action: () => loadNode('r2_machine_activate') });
    } else if (!hasNotebook) {
      c.push({ text: '檢查機甲外部', textEn: 'Examine the mech\'s exterior', action: () => {
        notify(L('沒有啟動手冊，你無從下手。也許某處有線索……', 'Without a manual, you can\'t proceed. Perhaps there are clues elsewhere...'));
        loadNode('r2_look');
      }});
    } else if (!hasCrystal) {
      c.push({ text: '你缺少動力核心……', textEn: 'You lack a power core...', action: () => {
        notify(L('需要高純度石化結晶來啟動機甲。', 'Need a high-purity petri crystal to activate the mech.'));
        loadNode('r2_look');
      }});
    }
    c.push({ text: '返回瞭望台', textEn: 'Return to overlook', action: () => loadNode('r2_look') });
    return c;
  })(), { label: L('調查戰爭機械', 'Investigating war machine') });
});

registerNode('r2_machine_activate', () => {
  removeItem(L('高純度石化結晶', 'High-Purity Petri Crystal'));
  state.flags.r2MachineCore = true;
  addItem(L('機甲控制鍵', 'Mech Control Key'));
  autoExplore([
    { art: `<pre class="ascii-art red">
      ╔═══════════════════════════╗
      ║    ╱▔▔▔▔▔▔▔▔▔╲         ║
      ║   │  ◉      ◉  │         ║
      ║   │     ▓▓▓     │         ║
      ║    ╲___________╱          ║
      ║      ║║█████║║            ║
      ║    ╔═╬╬═✦✦✦═╬╬═╗         ║
      ║    ║ ║║ ◆◆◆ ║║ ║  ← 核心 ║
      ║    ╚═╬╬═════╬╬═╝         ║
      ║      ║║█████║║            ║
      ║     ╱╱║█████║╲╲          ║
      ║    ╱╱  ═════  ╲╲         ║
      ╚═══════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art red">
      ╔═══════════════════════════╗
      ║    ╱▔▔▔▔▔▔▔▔▔╲         ║
      ║   │  ◉      ◉  │         ║
      ║   │     ▓▓▓     │         ║
      ║    ╲___________╱          ║
      ║      ║║█████║║            ║
      ║    ╔═╬╬═✦✦✦═╬╬═╗         ║
      ║    ║ ║║ ◆◆◆ ║║ ║  ← Core ║
      ║    ╚═╬╬═════╬╬═╝         ║
      ║      ║║█████║║            ║
      ║     ╱╱║█████║╲╲          ║
      ║    ╱╱  ═════  ╲╲         ║
      ╚═══════════════════════════╝
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你按照筆記中的步驟，將高純度結晶嵌入機甲胸口的反應爐。', textEn: 'Following the notebook\'s instructions, you insert the crystal into the mech\'s chest reactor.', delay: 2000 },
    { tag: '環境', tagColor: 'tag-system', text: '結晶開始發出耀眼的金色光芒——機甲的全身石化外殼出現了裂紋。', textEn: 'The crystal blazes with golden light — cracks spider across the mech\'s petrified shell.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '石殼一塊塊剝落，露出了底下生鏽但完整的金屬裝甲。', textEn: 'Stone shell peels away chunk by chunk, revealing rusted but intact metal armor beneath.', delay: 2200 },
    { tag: '環境', tagColor: 'tag-system', text: '機甲的眼部亮起了暗紅色的光——但隨即又暗了下去。', textEn: 'The mech\'s eyes glow a dim red — then fade again.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', html: '核心已經啟動，但機甲的能量不足以完全運轉。不過——反應爐旁彈出了一把<b>機甲控制鍵</b>。', htmlEn: 'The core activates, but energy is insufficient for full operation. However — a <b>Mech Control Key</b> ejects from beside the reactor.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '筆記中提到：「控制鍵可以操作採石場的上升通道閘門。」', textEn: 'The notebook mentions: "The control key can operate the quarry\'s ascent shaft gate."', delay: 2500 },
  ], [
    { text: '返回瞭望台', textEn: 'Return to overlook', action: () => loadNode('r2_look') },
  ], { label: L('啟動機甲核心', 'Activating mech core') });
});

// ── Broken Bridge — 斷橋 ──
registerNode('r2_bridge', () => {
  var hasRope = hasItem(L('粗繩', 'Rope'));
  var hasPickaxe = hasItem(L('強化鶴嘴鋤', 'Reinforced Pickaxe'));
  autoExplore([
    { art: `<pre class="ascii-art">
    這邊                          那邊
  ═══════╗                    ╔═══════
  ░░░░░░░║   ～～深  淵～～   ║░░░░░░░
  ░░░░░░░║                    ║░░░░░░░
  ░░░░░░░╚══╗            ╔══╝░░░░░░░
  ░░░░░░░░░░║  ╱斷裂╲    ║░░░░░░░░░░
  ░░░░░░░░░░║ ╱~~~~~~╲   ║░░░░░░░░░░
             ╚╱~~~~~~~~╲═╝
              ~~~~~~~~~~
</pre>`, artEn: `<pre class="ascii-art">
   This side                  That side
  ═══════╗                    ╔═══════
  ░░░░░░░║   ～～ Abyss ～～  ║░░░░░░░
  ░░░░░░░║                    ║░░░░░░░
  ░░░░░░░╚══╗            ╔══╝░░░░░░░
  ░░░░░░░░░░║  ╱Broken╲  ║░░░░░░░░░░
  ░░░░░░░░░░║ ╱~~~~~~~~╲ ║░░░░░░░░░░
             ╚╱~~~~~~~~~~╲╝
              ~~~~~~~~~~~~
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '一座石橋橫跨在深不見底的裂縫上——但中段已經斷裂。', textEn: 'A stone bridge spans a bottomless chasm — but the middle section has collapsed.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '橋的對面可以看到微弱的火光和人影。那裡似乎有一個營地。', textEn: 'Faint firelight and figures are visible on the other side. A camp, perhaps.', delay: 2200 },
    { tag: '環境', tagColor: 'tag-system', text: '斷口寬約三米。直接跳過去太危險了。', textEn: 'The gap spans about three meters. Too dangerous to jump across.', delay: 2000 },
  ], (function() {
    var c = [];
    if (hasRope && hasPickaxe) {
      c.push({ text: '用粗繩和鶴嘴鋤搭建通道', textEn: 'Build a crossing with rope and pickaxe', action: () => loadNode('r2_bridge_fix') });
    }
    if (hasRope && !hasPickaxe) {
      c.push({ text: checkLabel('用繩索擺盪過去', 'Swing across with rope', 'agi', 11), action: () => loadNode('r2_bridge_swing') });
    }
    c.push({ text: checkLabel('助跑跳躍', 'Running jump', 'str', 12), action: () => loadNode('r2_bridge_jump') });
    c.push({ text: '返回瞭望台', textEn: 'Return to overlook', action: () => loadNode('r2_look') });
    return c;
  })(), { label: L('調查斷橋', 'Examining broken bridge') });
});

registerNode('r2_bridge_fix', () => {
  removeItem(L('粗繩', 'Rope'));
  state.flags.r2BridgeFixed = true;
  autoExplore([
    { art: `<pre class="ascii-art">
  ╔══════╗                  ╔══════╗
  ║ 此岸 ║                  ║ 彼岸 ║
  ║══════║   ～～繩索～～   ║══════║
  ║██████║─ ─ ─ ─ ─ ─ ─ ─ ─║██████║
  ║██████║  ⚒鶴嘴鋤(固定)  ║██████║
  ╚══════╝                  ╚══════╝
      ║                        ║
      ║    ░░ 深  淵 ░░        ║
      ║    ░░░░░░░░░░░░        ║
      ║    ░░░░░░░░░░░░        ║
</pre>`, artEn: `<pre class="ascii-art">
  ╔══════╗                  ╔══════╗
  ║ This ║                  ║ Far  ║
  ║ Side ║   ~~~ Rope ~~~   ║ Side ║
  ║██████║─ ─ ─ ─ ─ ─ ─ ─ ─║██████║
  ║██████║  ⚒Pickaxe(anchor)║██████║
  ╚══════╝                  ╚══════╝
      ║                        ║
      ║    ░░  Abyss  ░░      ║
      ║    ░░░░░░░░░░░░        ║
      ║    ░░░░░░░░░░░░        ║
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你將鶴嘴鋤深深釘入橋的斷口邊緣，然後把粗繩牢牢綁在上面。', textEn: 'You drive the pickaxe deep into the bridge\'s broken edge and tie the rope securely.', delay: 2200 },
    { tag: '行動', tagColor: 'tag-move', text: '你把繩索的另一端甩向對面——繩子纏住了一根突出的石柱！', textEn: 'You hurl the rope\'s other end across — it catches on a protruding stone pillar!', delay: 2000 },
    { tag: '成功', tagColor: 'tag-item', text: '繩索被拉緊後形成了一條簡易通道。雖然搖搖晃晃，但足以通過。', textEn: 'The taut rope forms a makeshift crossing. Shaky, but passable.', delay: 2200 },
    { tag: '行動', tagColor: 'tag-move', text: '你小心翼翼地攀著繩索來到了對面。', textEn: 'You carefully cross to the other side along the rope.', delay: 2000 },
  ], [
    { text: '前往營地', textEn: 'Head to the camp', action: () => loadNode('r2_camp') },
  ], { label: L('搭建通道', 'Building crossing') });
});

registerNode('r2_bridge_swing', () => {
  var result = statCheck('agi', 11);
  if (result !== 'fail') {
    state.flags.r2BridgeFixed = true;
    autoExplore([
      { art: `<pre class="ascii-art">
          ┃ 繩索
          ┃╱
  ║██████║┃         ║██████║
  ║██████║ ╲        ║██████║
  ║══════║  ╲ ○     ║══════║
  ╚══════╝   ╲╱│╲   ╚══════╝
               │  →
  ░░░░░░░░░░╱  ╲░░░░░░░░░░
  ░░░ 深  淵 ░░░░░░░ 深 淵 ░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, artEn: `<pre class="ascii-art">
          ┃ Rope
          ┃╱
  ║██████║┃         ║██████║
  ║██████║ ╲        ║██████║
  ║══════║  ╲ ○     ║══════║
  ╚══════╝   ╲╱│╲   ╚══════╝
               │  →
  ░░░░░░░░░░╱  ╲░░░░░░░░░░
  ░░░ A b y s s ░░░░ Abyss ░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, delay: 800 },
      { tag: '行動', tagColor: 'tag-move', text: '你將繩索甩向對面的石柱，然後用力擺盪——', textEn: 'You throw the rope at a stone pillar across and swing —', delay: 1800 },
      { tag: '成功', tagColor: 'tag-item', text: '腳尖精準地踩上了對面的邊緣！你把繩索綁好，留作日後通行之用。', textEn: 'Your toes land precisely on the far edge! You tie the rope for future crossing.', delay: 2200 },
    ], [
      { text: '前往營地', textEn: 'Head to the camp', action: () => loadNode('r2_camp') },
    ], { label: L('擺盪成功', 'Swing successful') });
  } else {
    changeHp(-15);
    autoExplore([
      { tag: '行動', tagColor: 'tag-move', text: '你用力擺盪——但繩子在半空中鬆脫了！', textEn: 'You swing hard — but the rope slips mid-air!', delay: 1800 },
      { tag: '傷害', tagColor: 'tag-warn', text: '你摔落在斷橋邊緣，勉強抓住了岩石邊沿，爬了回來。', textEn: 'You crash against the bridge\'s broken edge, barely grabbing the rock rim, and pull yourself back.', delay: 2200 },
    ], [
      { text: '退回', textEn: 'Retreat', action: () => loadNode('r2_look') },
    ], { label: L('擺盪失敗', 'Swing failed') });
  }
});

registerNode('r2_bridge_jump', () => {
  var result = statCheck('str', 12);
  if (result !== 'fail') {
    state.flags.r2BridgeFixed = true;
    autoExplore([
      { art: `<pre class="ascii-art">
  ║██████║              ║██████║
  ║██████║    ○         ║██████║
  ║══════║   ╱│╲  →→→   ║══════║
  ╚══════╝  ╱  ╲        ╚══════╝
           ╱    ╲
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░ 深    淵 ░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, artEn: `<pre class="ascii-art">
  ║██████║              ║██████║
  ║██████║    ○         ║██████║
  ║══════║   ╱│╲  →→→   ║══════║
  ╚══════╝  ╱  ╲        ╚══════╝
           ╱    ╲
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░ A b y s s ░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, delay: 800 },
      { tag: '行動', tagColor: 'tag-move', text: '你深吸一口氣，助跑——然後用盡全力跳躍！', textEn: 'You take a deep breath, sprint — and leap with all your might!', delay: 2000 },
      { tag: '成功', tagColor: 'tag-item', text: '你的身體劃過深淵上方的空氣——雙腳穩穩落在了對面！', textEn: 'Your body arcs over the abyss — both feet land firmly on the other side!', delay: 2200 },
    ], [
      { text: '前往營地', textEn: 'Head to the camp', action: () => loadNode('r2_camp') },
    ], { label: L('跳躍成功', 'Jump successful') });
  } else {
    changeHp(-20);
    changePetri(4);
    autoExplore([
      { tag: '行動', tagColor: 'tag-move', text: '你全力跳出——但距離不夠！', textEn: 'You leap with everything — but fall short!', delay: 1800 },
      { tag: '傷害', tagColor: 'tag-warn', text: '你的手指勉強抓住了對面的邊緣，身體撞上石壁。劇痛！', textEn: 'Your fingers barely catch the far edge, body slamming against the rock wall. Agony!', delay: 2200 },
      { tag: '石化', tagColor: 'tag-petri', text: '深淵底部湧上來的石化氣流灼傷了你的腿。', textEn: 'Petrification vapors surging from the abyss sear your legs.', delay: 2000 },
      { tag: '行動', tagColor: 'tag-move', text: '你拼命爬了上去，氣喘吁吁地趴在地上。', textEn: 'You desperately pull yourself up, collapsing on the ground, gasping.', delay: 2200 },
    ], [
      { text: '前往營地', textEn: 'Head to the camp', action: () => { state.flags.r2BridgeFixed = true; loadNode('r2_camp'); } },
    ], { label: L('勉強攀上', 'Barely made it') });
  }
});

// ── Survivor Camp — 倖存者營地 ──
registerNode('r2_camp', () => {
  var firstVisit = !state.flags.r2CampVisited;
  state.flags.r2CampVisited = true;
  var steps = [
    { art: `<pre class="ascii-art">
  ┌─────────────────────────────────────┐
  │                                     │
  │         🔥  營  火  🔥              │
  │                                     │
  │   ╔═══╗   ╔═══╗   ╔═══╗           │
  │   ║帳篷║   ║帳篷║   ║帳篷║           │
  │   ╚═══╝   ╚═══╝   ╚═══╝           │
  │                                     │
  │    ╱▔▔╲   ╱▔▔╲   ╱▔▔╲            │
  │   │鐵匠│  │醫師│  │隊長│            │
  │    ╲__╱    ╲__╱    ╲__╱            │
  │                                     │
  │   ┌──────┐    ┌──────┐             │
  │   │ 水源 │    │ 糧倉 │             │
  │   └──────┘    └──────┘             │
  └─────────────────────────────────────┘
</pre>`, artEn: `<pre class="ascii-art">
  ┌─────────────────────────────────────┐
  │                                     │
  │         🔥  Camp Fire  🔥           │
  │                                     │
  │   ╔═══╗   ╔═══╗   ╔═══╗           │
  │   ║Tent║   ║Tent║   ║Tent║           │
  │   ╚═══╝   ╚═══╝   ╚═══╝           │
  │                                     │
  │    ╱▔▔╲   ╱▔▔╲   ╱▔▔╲            │
  │   │Smith│ │Medic│ │Chief│            │
  │    ╲__╱    ╲__╱    ╲__╱            │
  │                                     │
  │   ┌──────┐    ┌──────┐             │
  │   │Water │    │Supply│             │
  │   └──────┘    └──────┘             │
  └─────────────────────────────────────┘
</pre>`, delay: 800 },
  ];
  if (firstVisit) {
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你來到了一個小型營地。營火的溫暖讓你幾乎忘記了自己在地底深處。', textEn: 'You reach a small camp. The campfire\'s warmth almost makes you forget you\'re deep underground.', delay: 2200 });
    steps.push({ tag: '遭遇', tagColor: 'tag-combat', text: '一個高大的女人攔住了你的去路——她手持一柄巨大的石錘。', textEn: 'A tall woman blocks your path — she wields a massive stone hammer.', delay: 2200 });
    steps.push({ tag: '遭遇', tagColor: 'tag-combat', html: '「站住。」她的聲音低沉而警惕。「你是從下面上來的？<b>被石化感染了嗎？</b>」', htmlEn: '"Halt." Her voice is deep and wary. "You came from below? <b>Are you infected with petrification?</b>"', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '她叫<b>鐵霜</b>——這個倖存者營地的隊長。她和十幾個人在這裡堅守了三年。', htmlEn: 'She\'s <b>Iron Frost</b> — captain of this survivor camp. She and a dozen others have held out here for three years.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「上升通道被石化巨獸堵住了。我們一直在想辦法清除牠，但那東西太強了。」', textEn: '"The ascent shaft is blocked by a petrified colossus. We\'ve been trying to clear it, but that thing is too strong."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「如果你要向上走——我們可以幫你。但你也得幫我們。」', textEn: '"If you want to go up — we can help you. But you\'ll need to help us too."', delay: 2500 });
  } else {
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你回到了倖存者營地。營火依舊燃燒著，鐵霜向你點了點頭。', textEn: 'You return to the survivor camp. The campfire still burns. Iron Frost nods at you.', delay: 2000 });
  }
  autoExplore(steps, (function() {
    var c = [];
    c.push({ text: '和鐵霜說話', textEn: 'Talk to Iron Frost', action: () => loadNode('r2_camp_chief') });
    c.push({ text: '找鐵匠', textEn: 'Visit the blacksmith', action: () => loadNode('r2_camp_smith') });
    c.push({ text: '找醫師', textEn: 'Visit the medic', action: () => loadNode('r2_camp_medic') });
    if (state.flags.r2YingArrived) {
      c.push({ text: '和螢坐坐', textEn: 'Sit with Ying', action: () => loadNode('r2_ying_talk') });
    }
    if (state.flags.r1WandererMet) {
      c.push({ text: state.flags.r2CraneMet ? '找灰鶴' : '角落裡有個熟悉的身影……', textEn: state.flags.r2CraneMet ? 'Find Grey Crane' : 'A familiar figure in the corner...', action: () => loadNode('r2_crane') });
    }
    c.push({ text: '在營地休息', textEn: 'Rest at the camp', action: () => loadNode('r2_rest') });
    c.push({ text: '過橋返回', textEn: 'Cross back', action: () => loadNode('r2_look') });
    return c;
  })(), { label: L('倖存者營地', 'Survivor camp') });
});

// ── Camp NPCs ──
registerNode('r2_camp_chief', () => {
  var steps = [];
  if (!state.flags.r2ChiefTalked) {
    state.flags.r2ChiefTalked = true;
    steps.push({ art: `<pre class="ascii-art">
          ·  ˚  鐵霜 — 營地隊長  ˚  ·
            ╱─────────╲
           │  ◉     ◉  │
           │  ─══════─  │
           │   ╲════╱   │
            ╲─────────╱
    █████████│         │─────────
   ██████████├─────────┤──╲  ╱──╲
   ██████████│ ░░░░░░░ │   ╲╱    │
    █████████│ ░░░░░░░ │    │    │
     ████████│ ░░░░░░░ │    │  ⚒ │
      ·█·█·█·│         │────╯ ╱──╯
      石化左臂│    ⚒    │   石錘
              ╰─────────╯
</pre>`, artEn: `<pre class="ascii-art">
        ·  ˚  Iron Frost — Leader  ˚  ·
            ╱─────────╲
           │  ◉     ◉  │
           │  ─══════─  │
           │   ╲════╱   │
            ╲─────────╱
    █████████│         │─────────
   ██████████├─────────┤──╲  ╱──╲
   ██████████│ ░░░░░░░ │   ╲╱    │
    █████████│ ░░░░░░░ │    │    │
     ████████│ ░░░░░░░ │    │  ⚒ │
      ·█·█·█·│         │────╯ ╱──╯
   Petrified │    ⚒    │  War Hammer
              ╰─────────╯
</pre>`, delay: 800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '<b>鐵霜</b>坐在營火旁，石錘靠在身邊。她的左臂從肘部以下已經完全石化。', htmlEn: '<b>Iron Frost</b> sits by the fire, hammer beside her. Her left arm is fully petrified from the elbow down.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我曾是地下城的守備軍指揮官。瘟疫爆發那天，我下令撤退到這裡。」', textEn: '"I was the underground city\'s garrison commander. The day the plague erupted, I ordered retreat here."', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我們原本有五十人。現在……只剩十二個。」', textEn: '"We started with fifty. Now... only twelve remain."', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「上升通道是通往地表的唯一出路。但通道入口被一隻石化巨獸盤踞著。」', textEn: '"The ascent shaft is the only way to the surface. But a Petrified Colossus guards the entrance."', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「那東西曾是我們的同伴——<b>第三號戰甲的駕駛員</b>。他和機甲一起被石化了，變成了怪物。」', htmlEn: '"That thing was once one of us — <b>the pilot of Mech Unit No.3</b>. He and the mech petrified together, becoming a monster."', delay: 3000 });
  } else {
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '鐵霜看著營火：「準備好了就告訴我。我們會一起面對那頭巨獸。」', textEn: 'Iron Frost gazes at the fire: "Tell me when you\'re ready. We\'ll face that colossus together."', delay: 2500 });
  }
  autoExplore(steps, (function() {
    var c = [];
    if (state.flags.r2MachineCore) {
      c.push({ text: '「我準備好了，一起去挑戰巨獸。」', textEn: '"I\'m ready. Let\'s challenge the colossus."', action: () => loadNode('r2_boss_prep') });
    }
    c.push({ text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') });
    return c;
  })(), { label: L('與鐵霜對話', 'Talking to Iron Frost') });
});

registerNode('r2_camp_smith', () => {
  var steps = [
    { art: `<pre class="ascii-art">
        ·  ˚  老鑄 — 鍛匠  ˚  ·
              ╱───────╲
             │ ─    ─  │
             │  ╲──╱   │
              ╲───────╱
        ░░██░░│       │░░██░░
       ░███░░─┤       ├─░░███░
       ░███░░ │░░░░░░░│ ░░███░
        ░██░░ │░░░░░░░│ ░░██░
    ⚒──░░░░╱  │       │  ╲░░░░
       ╱      ╰───┬───╯
  ════╤═══════════╧═══════════╤════
  ░░░░│      ⚒  鐵砧  ⚒      │░░░░
  ════╧═══════════════════════╧════
</pre>`, artEn: `<pre class="ascii-art">
      ·  ˚  Old Cast — Blacksmith  ˚  ·
              ╱───────╲
             │ ─    ─  │
             │  ╲──╱   │
              ╲───────╱
        ░░██░░│       │░░██░░
       ░███░░─┤       ├─░░███░
       ░███░░ │░░░░░░░│ ░░███░
        ░██░░ │░░░░░░░│ ░░██░
    ⚒──░░░░╱  │       │  ╲░░░░
       ╱      ╰───┬───╯
  ════╤═══════════╧═══════════╤════
  ░░░░│     ⚒  Anvil  ⚒      │░░░░
  ════╧═══════════════════════╧════
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', html: '營地的鐵匠叫<b>老鑄</b>——一個沉默寡言的矮壯男人。他的雙手佈滿了石化紋路，但依然在敲打著鐵砧。', htmlEn: 'The camp smith is <b>Old Cast</b> — a quiet, stocky man. His hands are lined with petrification patterns, but still hammer the anvil.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「……需要什麼？」他頭也不抬地問。', textEn: '"...Need something?" he asks without looking up.', delay: 1800 },
  ];
  autoExplore(steps, (function() {
    var c = [];
    if (hasItem(L('強化鶴嘴鋤', 'Reinforced Pickaxe')) && !state.flags.r2PickaxeUpgraded) {
      c.push({ text: '請老鑄強化鶴嘴鋤', textEn: 'Ask Old Cast to upgrade the pickaxe', action: () => {
        removeItem(L('強化鶴嘴鋤', 'Reinforced Pickaxe'));
        addItem(L('精鍛戰鋤', 'Masterwork War Pick'));
        changeStat('str', 2);
        state.flags.r2PickaxeUpgraded = true;
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '老鑄接過鶴嘴鋤，仔細端詳了一會。', textEn: 'Old Cast takes the pickaxe and studies it carefully.', delay: 2000 },
          { tag: '環境', tagColor: 'tag-system', text: '他把鶴嘴鋤放上鍛台，燒紅、錘打、淬火……動作精準而嫻熟。', textEn: 'He places it on the forge — heats, hammers, quenches... precise and practiced.', delay: 2500 },
          { tag: '成功', tagColor: 'tag-item', html: '「拿去。」他把煥然一新的武器遞給你——<b>精鍛戰鋤</b>。力量 +2。', htmlEn: '"Take it." He hands you the reforged weapon — <b>Masterwork War Pick</b>. STR +2.', delay: 2200 },
        ], [
          { text: '道謝', textEn: 'Thank him', action: () => loadNode('r2_camp') },
        ], { label: L('鍛造武器', 'Forging weapon') });
      }});
    }
    if (hasItem(L('皮甲碎片', 'Leather Scrap')) && !state.flags.r2ArmorUpgraded) {
      c.push({ text: '請老鑄修補皮甲', textEn: 'Ask Old Cast to repair the leather armor', action: () => {
        removeItem(L('皮甲碎片', 'Leather Scrap'));
        state.maxHp += 15;
        state.hp += 15;
        state.flags.r2ArmorUpgraded = true;
        notify(L('HP 上限 +15！', 'Max HP +15!'));
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '老鑄把碎片展開，用備用的皮革和鐵環補好了缺口。', textEn: 'Old Cast unfolds the scraps, patching gaps with spare leather and iron rings.', delay: 2200 },
          { tag: '成功', tagColor: 'tag-item', text: '「穿上。」他把修好的輕甲遞給你。HP上限 +15。', textEn: '"Wear it." He hands you the repaired light armor. Max HP +15.', delay: 2000 },
        ], [
          { text: '道謝', textEn: 'Thank him', action: () => loadNode('r2_camp') },
        ], { label: L('修補護甲', 'Repairing armor') });
      }});
    }
    c.push({ text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') });
    return c;
  })(), { label: L('鐵匠鋪', 'Blacksmith') });
});

registerNode('r2_camp_medic', () => {
  autoExplore([
    { art: `<pre class="ascii-art cyan">
        ·  ˚  清露 — 醫師  ˚  ·
           ╭─·˚ ✚ ˚·─╮
          ╱  ˚·   ·˚  ╲
         │   ◠     ◠   │
         │  ╭═══════╮  │
         │  │░░░░░░░│  │  ← 面罩
          ╲ ╰═══════╯ ╱
      ─·─·─╲─────────╱─·─·─
          ╱─┤         ├─╲
         ╱  │  ✚ ✚ ✚  │  ╲
        ╱   │ ░░░░░░░ │   ╲
       │    │ ░░░░░░░ │    │
        ╲   ╰────┬────╯   ╱
         ·─·  ◇藥箱◇  ·─·
</pre>`, artEn: `<pre class="ascii-art cyan">
         ·  ˚  Dew — Medic  ˚  ·
           ╭─·˚ ✚ ˚·─╮
          ╱  ˚·   ·˚  ╲
         │   ◠     ◠   │
         │  ╭═══════╮  │
         │  │░░░░░░░│  │  ← Mask
          ╲ ╰═══════╯ ╱
      ─·─·─╲─────────╱─·─·─
          ╱─┤         ├─╲
         ╱  │  ✚ ✚ ✚  │  ╲
        ╱   │ ░░░░░░░ │   ╲
       │    │ ░░░░░░░ │    │
        ╲   ╰────┬────╯   ╱
         ·─·  ◇Med Kit◇  ·─·
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', html: '營地的醫師叫<b>清露</b>——一個年輕的女人，臉上戴著防石化面罩。', htmlEn: 'The camp medic is <b>Dew</b> — a young woman wearing an anti-petrification mask.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「讓我看看你的石化程度。」她伸手檢查你的手臂。', textEn: '"Let me check your petrification level." She examines your arm.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '「……比我預想的好。你的意志力很強。」', textEn: '"...Better than I expected. Your willpower is strong."', delay: 2200 },
  ], (function() {
    var c = [];
    if (!state.flags.r2MedicHealed) {
      c.push({ text: '接受治療', textEn: 'Receive treatment', action: () => {
        state.flags.r2MedicHealed = true;
        changeHp(30);
        changePetri(-10);
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '「坐下。把袖子捲起來。」清露的語氣不容拒絕。', textEn: '"Sit down. Roll up your sleeves." Dew\'s tone allows no argument.', delay: 2500 },
          { tag: '感知', tagColor: 'tag-sense', text: '你坐在簡陋的行軍床上。清露跪在你面前，摘下了一隻手套。', textEn: 'You sit on the makeshift cot. Dew kneels before you, removing one glove.', delay: 2800 },
          { tag: '感知', tagColor: 'tag-sense', text: '她的手指纖細而冰涼——沿著你的手臂慢慢移動，仔細按壓每一處石化紋路。', textEn: 'Her fingers are slender and cool — tracing slowly along your arm, pressing each petrification line.', delay: 3200 },
          { tag: '感知', tagColor: 'tag-petri', text: '當她觸碰到石化最嚴重的部位時，你不自覺地抽了一口氣。', textEn: 'When she touches the worst of the petrification, you inhale sharply.', delay: 2800 },
          { tag: '清露', tagColor: 'tag-npc', text: '「忍一下。」她的聲音從面罩後面傳出，比想像中柔軟。', textEn: '"Bear with it." Her voice comes from behind the mask, softer than expected.', delay: 2500 },
          { tag: '恢復', tagColor: 'tag-explore', text: '清露從藥箱裡取出一罐深色的藥膏，用指尖挖出少量，小心翼翼地塗抹在你的石化紋路上。', textEn: 'Dew takes a jar of dark salve from her kit, scoops a small amount with her fingertips, and carefully applies it to your petrification patterns.', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '她的手指帶著藥膏，一遍一遍地在你的皮膚上畫圈——動作很輕，幾乎像是撫摸。', textEn: 'Her fingers, coated with salve, trace circles on your skin over and over — so gently it\'s almost a caress.', delay: 3200 },
          { tag: '恢復', tagColor: 'tag-explore', text: '一股清涼的感覺從接觸點擴散開來，石化的灰色紋路在她的指尖下緩緩消退。', textEn: 'A cool sensation spreads from her touch, the grey petrification patterns slowly receding beneath her fingertips.', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '你看見她面罩上方露出的眼睛——專注、認真，睫毛微微顫動。那雙眼睛比深淵裡的任何光源都明亮。', textEn: 'You catch her eyes above the mask — focused, earnest, lashes trembling slightly. Those eyes are brighter than any light in the abyss.', delay: 3500 },
          { tag: '行動', tagColor: 'tag-move', text: '她開始纏繃帶。浸泡過淨化液的布條緊貼你的皮膚，每一圈都帶著她手指的溫度。', textEn: 'She wraps the bandages. The purified cloth clings to your skin, each layer carrying the warmth of her fingers.', delay: 3000 },
          { tag: '清露', tagColor: 'tag-npc', text: '纏好最後一圈後，她的手停留在繃帶上多了幾秒，像是在確認——又像是不捨得鬆開。', textEn: 'After the last wrap, her hand lingers on the bandage a few seconds longer — as if checking, or perhaps reluctant to let go.', delay: 3200 },
          { tag: '清露', tagColor: 'tag-npc', text: '「……這是我僅剩的藥膏了。」她輕輕嘆了口氣，把藥罐蓋好放回箱子。', textEn: '"...That\'s the last of my salve." She sighs softly, sealing the jar and returning it to the kit.', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '她站起身時，你注意到她自己的手腕上也有淡淡的灰色紋路——石化的痕跡。她一直在治療別人，卻沒有藥留給自己。', textEn: 'As she stands, you notice faint grey patterns on her own wrist — traces of petrification. She treats everyone else, saving nothing for herself.', delay: 3500 },
          { tag: '清露', tagColor: 'tag-npc', text: '「好好利用吧。」她轉過身去翻找藥箱，聲音壓得很低：「……活下去。」', textEn: '"Use it well." She turns to rummage through her kit, voice barely a whisper: "...Stay alive."', delay: 3000 },
          { tag: '物品', tagColor: 'tag-item', html: '清露又從藥箱深處翻出一塊發光的石頭，雙手捧著遞給你——她的手指微微發抖：「<b>復活石</b>——這是在深處採集到的，能在瀕死時將你從石化中拉回來。」', htmlEn: 'Dew digs out a glowing stone from deep in her kit, offering it with both hands — her fingers trembling slightly: "<b>Revival Stone</b> — found in the depths. It can pull you back from the brink of petrification."', delay: 3200, effect: () => { addItem(L('復活石', 'Revival Stone')); sfx.item(); } },
          { tag: '感知', tagColor: 'tag-sense', text: '當你接過石頭的瞬間，你的手指碰到了她的。她沒有馬上縮回去。', textEn: 'As you take the stone, your fingers brush hers. She doesn\'t pull away immediately.', delay: 2800 },
        ], [
          { text: '「……謝謝你，清露。」', textEn: '"...Thank you, Dew."', action: () => loadNode('r2_camp') },
        ], { label: L('接受治療', 'Receiving treatment') });
      }});
    }
    if (!state.flags.r2MedicElixir) {
      c.push({ text: '詢問有沒有藥物可以帶走', textEn: 'Ask if there\'s medicine to take along', action: () => {
        state.flags.r2MedicElixir = true;
        addItem(L('濃縮淨化液', 'Concentrated Purifier'));
        autoExplore([
          { tag: '清露', tagColor: 'tag-npc', text: '清露聽到你的請求後沉默了一會兒。她低下頭，你看不到面罩後面的表情。', textEn: 'Dew falls silent at your request. She lowers her head — you can\'t see her expression behind the mask.', delay: 2800 },
          { tag: '行動', tagColor: 'tag-move', text: '她慢慢打開藥箱，手指在幾個瓶子之間遊移——最後停在一個被藏在最裡層的深綠色小瓶上。', textEn: 'She slowly opens the kit, fingers hovering between several bottles — settling on a small dark green vial hidden in the deepest layer.', delay: 3000 },
          { tag: '感知', tagColor: 'tag-sense', text: '她握著那個瓶子猶豫了很久。你注意到她的拇指在瓶身上反覆摩挲——那是她為自己留下的最後一瓶。', textEn: 'She holds the bottle for a long time. You notice her thumb rubbing the glass again and again — this was the last one she\'d saved for herself.', delay: 3500 },
          { tag: '物品', tagColor: 'tag-item', html: '最終她還是把瓶子遞給了你，聲音平靜但帶著一絲不易察覺的顫抖：「<b>濃縮淨化液</b>——最後一瓶了。在關鍵時刻用。」', htmlEn: 'In the end she offers you the bottle, her voice steady but with an imperceptible tremor: "<b>Concentrated Purifier</b> — the last bottle. Use it when it matters most."', delay: 3000 },
          { tag: '清露', tagColor: 'tag-npc', text: '「答應我一件事——」她抬起眼看著你，面罩上方的那雙眼睛認真得讓你無法移開視線：「不要浪費它。」', textEn: '"Promise me one thing —" She looks up at you, the eyes above her mask so earnest you can\'t look away: "Don\'t waste it."', delay: 3200 },
        ], [
          { text: '「我答應你。」', textEn: '"I promise."', action: () => loadNode('r2_camp') },
        ], { label: L('獲得淨化液', 'Getting purifier') });
      }});
    }
    c.push({ text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') });
    return c;
  })(), { label: L('醫師帳篷', 'Medic tent') });
});

// ── Rest ──
registerNode('r2_rest', () => {
  autoExplore([
    { art: `<pre class="ascii-art">
  ·  ˚   ·  ˚   ·  ˚   ·  ˚   ·
       ╱╲          ╱╲
      ╱░░╲        ╱░░╲
     ╱░░░░╲      ╱░░░░╲
     ════════    ════════

           ·  🔥  ·
          ╱ ✦✦✦✦ ╲
         ╱ ✦ 營火 ✦╲
          ════════════

       ○            ○
      ╱│╲          ╱│╲
       │            │
  ·  ˚   ·  ˚   ·  ˚   ·  ˚   ·
</pre>`, artEn: `<pre class="ascii-art">
  ·  ˚   ·  ˚   ·  ˚   ·  ˚   ·
       ╱╲          ╱╲
      ╱░░╲        ╱░░╲
     ╱░░░░╲      ╱░░░░╲
     ════════    ════════

           · 🔥  ·
          ╱ ✦✦✦✦ ╲
         ╱ ✦Camp ✦╲
         ╱✦ Fire ✦╲
          ════════════

       ○            ○
      ╱│╲          ╱│╲
       │            │
  ·  ˚   ·  ˚   ·  ˚   ·  ˚   ·
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你在營火旁找了個位置坐下。溫暖的火光照在臉上。', textEn: 'You find a spot by the campfire and sit down. Warm firelight on your face.', delay: 2000 },
    { tag: '環境', tagColor: 'tag-system', text: '營地裡的人各自忙碌著——有人在修補裝備，有人在低聲交談。', textEn: 'Camp residents go about their tasks — some repair gear, others talk quietly.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '在這個石化肆虐的世界裡，營火的溫暖是如此珍貴。', textEn: 'In this world ravaged by petrification, the campfire\'s warmth is so precious.', delay: 2500 },
    { tag: '記憶', tagColor: 'tag-system', text: '你閉上眼睛，腦海中浮現出模糊的畫面——地表的陽光、風的觸感、草地的氣味。', textEn: 'You close your eyes. Hazy images surface — sunlight on the surface, the touch of wind, the scent of grass.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '那些記憶正在消逝。石化不僅侵蝕身體，也在一點點吞噬你的過去。', textEn: 'Those memories are fading. Petrification erodes not just the body, but your past too, bit by bit.', delay: 2800 },
    { tag: '恢復', tagColor: 'tag-explore', text: '但你的決心更加堅定了。你必須繼續向上。', textEn: 'But your resolve only hardens. You must keep ascending.', delay: 2000 },
  ], (function() {
    var c = [];
    if (hasItem(L('濃縮淨化液', 'Concentrated Purifier'))) {
      c.push({ text: '喝下濃縮淨化液', textEn: 'Drink the Concentrated Purifier', action: () => {
        removeItem(L('濃縮淨化液', 'Concentrated Purifier'));
        changePetri(-20);
        changeHp(15);
        autoExplore([
          { tag: '物品', tagColor: 'tag-item', text: '你拔開瓶塞——苦澀的草藥味比上次遇到的淨化藥劑更加濃烈。', textEn: 'You uncork the bottle — the bitter herbal scent is far stronger than before.', delay: 1800 },
          { tag: '恢復', tagColor: 'tag-explore', html: '一股<b>強烈的清涼力量</b>貫穿全身！石化紋路劇烈消退——你的手臂幾乎恢復了正常的膚色！', htmlEn: 'A <b>powerful cool energy</b> surges through your whole body! Petrification patterns retreat dramatically — your arm nearly returns to normal!', delay: 2500 },
          { tag: '恢復', tagColor: 'tag-explore', text: '這是你到達深淵以來感覺最清醒的一刻。', textEn: 'This is the clearest you\'ve felt since reaching the abyss.', delay: 2000 },
        ], [
          { text: '繼續', textEn: 'Continue', action: () => loadNode('r2_camp') },
        ]);
      }});
    }
    if (hasItem(L('石化抑制劑', 'Petri Suppressant'))) {
      c.push({ text: '服用石化抑制劑', textEn: 'Take the Petri Suppressant', action: () => {
        removeItem(L('石化抑制劑', 'Petri Suppressant'));
        changePetri(-15);
        changeHp(10);
        notify(L('石化度 -15%，HP +10', 'Petri -15%, HP +10'));
        loadNode('r2_camp');
      }});
    }
    c.push({ text: '站起來繼續', textEn: 'Get up and continue', action: () => {
      changeHp(20);
      changePetri(-5);
      notify(L('HP +20，石化度 -5%', 'HP +20, Petri -5%'));
      loadNode('r2_camp');
    }});
    return c;
  })(), { label: L('營火旁休息', 'Resting by campfire') });
});

// ── Boss Prep + Boss Fight ──
registerNode('r2_boss_prep', () => {
  var yingSteps = [];
  if (state.flags.r2YingArrived) {
    var isMale = state.sex === 'male';
    var yP = isMale ? L('她', 'she') : L('他', 'he');
    var yPC = isMale ? 'She' : 'He';
    if (state.flags.r2YingPromise) {
      yingSteps.push({ tag: '感知', tagColor: 'tag-sense', text: '螢站在營地入口，目光追隨著你。' + yP + '輕輕摸了摸自己空蕩蕩的領口——護身符已經在你身上了。', textEn: 'Ying stands at the camp entrance, eyes following you. ' + yPC + ' touches ' + (isMale ? 'her' : 'his') + ' bare collar — the charm is with you now.', delay: 2800 });
      yingSteps.push({ tag: '感知', tagColor: 'tag-sense', text: yP + '沒有說話，只是朝你用力地點了一下頭。那個動作裡包含了太多說不出口的話。', textEn: yPC + ' says nothing, just nods firmly. That single gesture holds everything words cannot.', delay: 2800 });
    } else {
      yingSteps.push({ tag: '感知', tagColor: 'tag-sense', text: '螢在人群後面看著你出發。' + yP + '的嘴唇動了動，但最終什麼都沒說。', textEn: 'Ying watches from the back as you set out. ' + yPC + ' lips move, but no words come.', delay: 2500 });
    }
  }
  autoExplore([
    { art: `<pre class="ascii-art red">
  ╔═══════════════════════════════════╗
  ║         ⚠  作 戰 準 備  ⚠        ║
  ╠═══════════════════════════════════╣
  ║                                   ║
  ║    ╱▔▔▔╲     ╱▔▔▔▔▔▔▔╲         ║
  ║   │◉   ◉│   │           │        ║
  ║   │ ═══ │   │  石化巨像  │        ║
  ║    ╲___╱    │   ◉   ◉   │        ║
  ║    ░║ ║░    │  ═══════  │        ║
  ║   ░░║⚒║░░   │  ╱██◆██╲  │        ║
  ║   鐵 霜     │  ║██◆██║  │        ║
  ║              ╲___________╱        ║
  ║         → 目標：胸口核心 ←        ║
  ╚═══════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art red">
  ╔═══════════════════════════════════╗
  ║       ⚠  Battle Preparation  ⚠   ║
  ╠═══════════════════════════════════╣
  ║                                   ║
  ║    ╱▔▔▔╲     ╱▔▔▔▔▔▔▔╲         ║
  ║   │◉   ◉│   │           │        ║
  ║   │ ═══ │   │  Petrified │        ║
  ║    ╲___╱    │  Colossus  │        ║
  ║    ░║ ║░    │  ◉     ◉  │        ║
  ║   ░░║⚒║░░   │  ╱██◆██╲  │        ║
  ║  Iron Frost  │  ║██◆██║  │        ║
  ║              ╲___________╱        ║
  ║       → Target: Chest Core ←     ║
  ╚═══════════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '鐵霜站了起來，用石化的左手握緊了石錘。', textEn: 'Iron Frost rises, gripping her stone hammer with her petrified left hand.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '「好。我帶兩個最好的戰士跟你一起去。其他人留下守營地。」', textEn: '"Good. I\'ll take two of our best fighters with you. The rest guard the camp."', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「記住——那頭巨獸是半人半機甲的存在。普通攻擊對它的外殼效果很差。」', textEn: '"Remember — that colossus is half-human, half-mech. Normal attacks barely scratch its shell."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', html: '「你有機甲控制鍵——<b>在戰鬥中找到它胸口的核心接口，插入控制鍵就能讓它短路。</b>」', htmlEn: '"You have the mech control key — <b>find the core port on its chest during battle. Insert the key to short-circuit it.</b>"', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「但在那之前，你得先打穿它的護甲……準備好了嗎？」', textEn: '"But first you need to break through its armor... Are you ready?"', delay: 2500 },
  ].concat(yingSteps), [
    { text: '出發！', textEn: 'Let\'s go!', action: () => loadNode('r2_boss') },
    { text: '再準備一下', textEn: 'I need more preparation', action: () => loadNode('r2_camp') },
  ], { label: L('作戰準備', 'Battle preparations') });
});

registerNode('r2_boss', () => {
  var BOSS = {
    name: '石化巨像', nameEn: 'Petrified Colossus',
    hp: 60, atkMin: 16, atkMax: 28, petriDmg: 10, xp: 40,
    empathyGoal: 4,
    art: [
      '       ╔═══════════╗',
      '       ║  ◆     ◆  ║',
      '       ║  ╔═════╗  ║',
      '       ║  ║ ░░░ ║  ║',
      '       ║  ╚═════╝  ║',
      '    ╔══╩═══════════╩══╗',
      '    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║',
      '    ║ ▓  石化巨像  ▓ ║',
      '    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║',
      '    ╠══╤═══════╤══════╣',
      '    ║  │ ░░░░░ │     ║',
      '    ╱╲ │       │    ╱╲',
      '   ╱░░╲│       │   ╱░░╲',
    ],
    commune: [
      { zh: '你凝視著巨像的眼睛——在石化的外殼下，你看到了人類的悲傷。', en: 'You gaze into the colossus\'s eyes — beneath the stone shell, you see human sorrow.' },
      { zh: '「……幫……我……」一個微弱的聲音從巨像內部傳出。', en: '"...help...me..." A faint voice emanates from within the colossus.' },
      { zh: '巨像的動作遲緩了——內部的人類意識正在和石化本能抗爭。', en: 'The colossus slows — the human consciousness within battles its petrification instincts.' },
      { zh: '巨像跪了下來。石化的外殼開始崩裂——裡面露出了一個蜷縮的人影。', en: 'The colossus kneels. Its stone shell cracks — revealing a curled human form within.' },
    ],
    spareText: { zh: '石化巨像完全崩解。一個瘦弱的男人從碎裂的機甲中跌落——他還活著。鐵霜衝上前抱住了他：「……你終於回來了。」', en: 'The colossus shatters completely. A frail man tumbles from the broken mech — still alive. Iron Frost rushes to embrace him: "...You\'re finally back."' },
  };

  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '你帶著鐵霜和兩名戰士來到了上升通道的入口。', textEn: 'You arrive at the ascent shaft entrance with Iron Frost and two fighters.', delay: 2000 },
    { art: `<pre class="ascii-art red">
       ╔═══════════╗
       ║  ◆     ◆  ║
       ║  ╔═════╗  ║
       ║  ║ ░░░ ║  ║
       ║  ╚═════╝  ║
    ╔══╩═══════════╩══╗
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ║ ▓  石化巨像  ▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ╠══╤═══════╤══════╣
    ║  │ ░░░░░ │     ║
    ╱╲ │       │    ╱╲
   ╱░░╲│       │   ╱░░╲
</pre>`, artEn: `<pre class="ascii-art red">
       ╔═══════════╗
       ║  ◆     ◆  ║
       ║  ╔═════╗  ║
       ║  ║ ░░░ ║  ║
       ║  ╚═════╝  ║
    ╔══╩═══════════╩══╗
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ║ ▓  COLOSSUS  ▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ╠══╤═══════╤══════╣
    ║  │ ░░░░░ │     ║
    ╱╲ │       │    ╱╲
   ╱░░╲│       │   ╱░░╲
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-combat', html: '一個巨大的身影從黑暗中走出——<b>石化巨像</b>。曾經的三號戰甲駕駛員，如今已與機甲融為一體。', htmlEn: 'A massive figure emerges from the darkness — the <b>Petrified Colossus</b>. Once the No.3 mech pilot, now fused with the machine.', delay: 2800 },
    { tag: '遭遇', tagColor: 'tag-combat', text: '它發出一聲低沉的咆哮——半是機械的轟鳴，半是人類的痛苦。', textEn: 'It lets out a deep roar — half mechanical grinding, half human agony.', delay: 2200 },
    { tag: '遭遇', tagColor: 'tag-combat', text: '鐵霜舉起石錘：「——來吧。」', textEn: 'Iron Frost raises her hammer: "— Come."', delay: 1800 },
  ], [
    { text: '戰鬥！', textEn: 'Fight!', action: () => {
      startCombat(BOSS, function() {
        // Victory
        state.flags.r2BossDefeated = true;
        loadNode('r2_gate');
      }, function() {
        // Flee
        loadNode('r2_camp');
      });
    }},
  ], { label: L('石化巨像', 'Petrified Colossus') });
});

// ── Gate to Region 3 ──
registerNode('r2_gate', () => {
  var hasKey = hasItem(L('機甲控制鍵', 'Mech Control Key'));
  if (state.flags.r2BossDefeated) {
    autoExplore([
      { art: `<pre class="ascii-art gold">
  ╔═══════════════════════════════╗
  ║   ▓▓▓▓▓▓▓   ↑ 上升  ▓▓▓▓▓▓ ║
  ║   ▓▓▓▓▓▓▓   ↑ 通道  ▓▓▓▓▓▓ ║
  ║   ▓▓▓▓▓▓▓           ▓▓▓▓▓▓ ║
  ║   ═══════╗  ╔═══╗  ╔══════  ║
  ║          ║  ║ ✦ ║  ║        ║
  ║   ░閘門░ ║  ║控制║  ║ ░閘門░ ║
  ║          ║  ║ 台 ║  ║        ║
  ║   ═══════╝  ╚═══╝  ╚══════  ║
  ║        ◇ 閘門已開啟 ◇       ║
  ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art gold">
  ╔═══════════════════════════════╗
  ║   ▓▓▓▓▓▓▓  ↑ Ascent ▓▓▓▓▓▓ ║
  ║   ▓▓▓▓▓▓▓  ↑ Shaft  ▓▓▓▓▓▓ ║
  ║   ▓▓▓▓▓▓▓           ▓▓▓▓▓▓ ║
  ║   ═══════╗  ╔═══╗  ╔══════  ║
  ║          ║  ║ ✦ ║  ║        ║
  ║   ░Gate░ ║  ║Ctrl║  ║ ░Gate░ ║
  ║          ║  ║Panl║  ║        ║
  ║   ═══════╝  ╚═══╝  ╚══════  ║
  ║        ◇ Gate Opened ◇      ║
  ╚═══════════════════════════════╝
</pre>`, delay: 800 },
      { tag: '環境', tagColor: 'tag-system', text: '石化巨像已經倒下。通往上升通道的路終於暢通了。', textEn: 'The Petrified Colossus has fallen. The path to the ascent shaft is finally clear.', delay: 2000 },
      { tag: '行動', tagColor: 'tag-move', text: '你將機甲控制鍵插入通道閘門的控制台。', textEn: 'You insert the mech control key into the shaft gate\'s control panel.', delay: 2200 },
      { tag: '環境', tagColor: 'tag-system', text: '齒輪轉動的聲音在岩壁中迴盪——厚重的金屬閘門緩緩升起。', textEn: 'Gears grind within the rock — the heavy metal gate slowly rises.', delay: 2500 },
      { tag: '感知', tagColor: 'tag-sense', text: '閘門後是一條向上延伸的斜坡隧道。你能感覺到……來自上方的風。', textEn: 'Beyond the gate, a sloped tunnel ascends. You can feel... wind from above.', delay: 2500 },
      { tag: '情報', tagColor: 'tag-info', html: '鐵霜拍了拍你的肩膀：「前面就是<b>河城渡口</b>——地底世界的交通樞紐。如果還有人類社會存在的話，就在那裡。」', htmlEn: 'Iron Frost pats your shoulder: "Ahead lies the <b>River City Ferry</b> — the underground world\'s transport hub. If human society still exists, it\'s there."', delay: 3000 },
      { tag: '情報', tagColor: 'tag-info', text: '「我會帶大家跟上來的。你先走吧——路上小心。」', textEn: '"I\'ll bring everyone along. Go ahead — be careful."', delay: 2500 },
    ], [
      { text: '踏入上升通道，前往河城渡口', textEn: 'Enter the shaft, head for River City Ferry', action: () => {
        changeHp(25);
        changePetri(-8);
        notify(L('HP +25，石化度 -8%', 'HP +25, Petri -8%'));
        loadNode('r3_start');
      }},
      { text: '留下來做最後的準備', textEn: 'Stay to make final preparations', action: () => loadNode('r2_look') },
    ], { label: L('開啟上升通道', 'Opening ascent shaft') });
  } else {
    autoExplore([
      { art: `<pre class="ascii-art red">
  ╔═══════════════════════════════╗
  ║   ▓▓▓▓▓▓▓  ✖ 封鎖  ▓▓▓▓▓▓ ║
  ║   ▓▓▓▓▓▓▓  ✖ 中··  ▓▓▓▓▓▓ ║
  ║   ▓▓▓▓▓▓▓           ▓▓▓▓▓▓ ║
  ║   ███████╗  ╔═══╗  ╔██████  ║
  ║   ███████║  ║ ◇ ║  ║██████  ║
  ║   █閘門█║  ║鑰匙║  ║█閘門█  ║
  ║   ███████║  ║ 槽 ║  ║██████  ║
  ║   ███████╝  ╚═══╝  ╚██████  ║
  ║      ⚠ 巨影在閘門後蠕動 ⚠    ║
  ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art red">
  ╔═══════════════════════════════╗
  ║   ▓▓▓▓▓▓▓  ✖ Sealed ▓▓▓▓▓▓ ║
  ║   ▓▓▓▓▓▓▓  ✖ ····   ▓▓▓▓▓▓ ║
  ║   ▓▓▓▓▓▓▓           ▓▓▓▓▓▓ ║
  ║   ███████╗  ╔═══╗  ╔██████  ║
  ║   ███████║  ║ ◇ ║  ║██████  ║
  ║   █Gate█║  ║Key ║  ║█Gate█  ║
  ║   ███████║  ║Slot║  ║██████  ║
  ║   ███████╝  ╚═══╝  ╚██████  ║
  ║    ⚠ A shadow stirs beyond ⚠ ║
  ╚═══════════════════════════════╝
</pre>`, delay: 800 },
      { tag: '探索', tagColor: 'tag-explore', text: '你來到了上升通道的入口。一座巨大的金屬閘門封鎖了去路。', textEn: 'You reach the ascent shaft entrance. A massive metal gate blocks the way.', delay: 2000 },
      { tag: '感知', tagColor: 'tag-sense', text: '閘門旁有一個控制台——上面有機甲控制鍵的插槽。', textEn: 'A control panel beside the gate — with a slot for the mech control key.', delay: 2200 },
      { tag: '環境', tagColor: 'tag-system', text: '但閘門前方的通道裡……有一個巨大的影子在移動。', textEn: 'But in the passage before the gate... a massive shadow moves.', delay: 2500 },
      { tag: '警告', tagColor: 'tag-warn', html: '<b>石化巨像</b>還在那裡。你需要先擊敗它。', htmlEn: 'The <b>Petrified Colossus</b> still lurks there. You must defeat it first.', delay: 2200 },
    ], (function() {
      var c = [];
      if (hasKey) {
        c.push({ text: '回營地找鐵霜商量', textEn: 'Return to camp to plan with Iron Frost', action: () => loadNode('r2_camp_chief') });
      }
      c.push({ text: '返回瞭望台', textEn: 'Return to overlook', action: () => loadNode('r2_look') });
      return c;
    })(), { label: L('上升通道', 'Ascent shaft') });
  }
});

// ═══════════════════════════════════════════════════
//  NPC Continuation — 螢 (Ying) in Region 2
// ═══════════════════════════════════════════════════

registerNode('r2_ying_talk', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';

  var steps = [];
  steps.push({ art: `<pre class="ascii-art cyan">
       ·✦· 螢 — 記錄員少女 ·✦·
               ╭───╮
              ╱ ˚ ˚ ╲───╮
             │  ‿‿‿  │   │
              ╲──────╱  ╱╱
         ╭────╲────╱───╱╱
        ╱  ✦·  │    │  ·✦
       │ ·✦··──┤    ├──· │
       │ ✦·  ╱ │    │ ╲  │
        ╲·  ╱  │    │  ╲╱
         ╲╱  ╭─┤    ├─╮
             │ ╰────╯ │
             │ ◇手冊◇ │
             ╰────────╯
       ✦ 石化紋在手臂上微微發光 ✦
</pre>`, artEn: `<pre class="ascii-art cyan">
      ·✦· Ying — Young Chronicler ·✦·
               ╭───╮
              ╱ ˚ ˚ ╲───╮
             │  ‿‿‿  │   │
              ╲──────╱  ╱╱
         ╭────╲────╱───╱╱
        ╱  ✦·  │    │  ·✦
       │ ·✦··──┤    ├──· │
       │ ✦·  ╱ │    │ ╲  │
        ╲·  ╱  │    │  ╲╱
         ╲╱  ╭─┤    ├─╮
             │ ╰────╯ │
             │◇Notes◇ │
             ╰────────╯
      ✦ Petri-marks glow on arms ✦
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你在瞭望台的邊緣找到了螢。' + yP + '正蹲在地上，用炭筆在手冊上飛速地畫著什麼。', textEn: 'You find Ying at the edge of the overlook. ' + yPC + '\'s crouching, charcoal pencil flying across the notebook.', delay: 2200 });

  if (!state.flags.r2YingLore3) {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你湊近一看——' + yP + '在畫採石場的地形圖，標註著各種符號。', textEn: 'You look closer — ' + yPC + '\'s drawing a topographic map of the quarry, marked with symbols.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「你來得正好。」螢頭也不抬地說。「我一直在對照筆記裡的舊地圖——有些東西對上了。」', textEn: '"Perfect timing." Ying speaks without looking up. "I\'ve been comparing the old maps in my notes — some things match."', delay: 3000 });
  } else {
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '螢看到你來，收起炭筆，拍了拍手上的灰：「又想我了？」', textEn: 'Ying sees you, puts away the charcoal, dusts off ' + yPo + ' hands: "Missed me already?"', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: yP + '說完自己先紅了臉，迅速低頭翻手冊：「我是說——有什麼新發現嗎？」', textEn: yPC + ' blushes first, quickly flipping through the notebook: "I mean — any new discoveries?"', delay: 2800 });
  }

  autoExplore(steps, (function() {
    var c = [];
    if (!state.flags.r2YingLore3) {
      c.push({ text: '聽螢分析採石場', textEn: 'Listen to Ying\'s quarry analysis', action: () => loadNode('r2_ying_seal') });
    }
    if (state.flags.r2YingLore3 && !state.flags.r2YingSketch) {
      c.push({ text: '你在畫什麼？', textEn: 'What are you drawing?', action: () => {
        state.flags.r2YingSketch = true;
        autoExplore([
          { tag: '感知', tagColor: 'tag-sense', text: '你瞥見手冊攤開的那一頁——上面不是地圖，是一幅素描。', textEn: 'You glimpse the open page — it\'s not a map, it\'s a sketch.', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '是一個人的側臉。有些模糊，但你認出了那個輪廓——那是你。', textEn: 'A profile of someone. Blurred, but you recognize the outline — it\'s you.', delay: 2800 },
          { tag: '感知', tagColor: 'tag-sense', text: '螢猛地合上手冊，耳根通紅：「那是——那只是練習！記錄員需要練習速寫技巧！」', textEn: 'Ying slams the notebook shut, ears burning: "That\'s — it\'s just practice! Chroniclers need to practice sketching!"', delay: 3200 },
          { tag: '感知', tagColor: 'tag-sense', text: yP + '把手冊藏到身後，不肯讓你再看。但你注意到' + yP + '的嘴角在微微上揚。', textEn: yPC + ' hides the notebook behind ' + yPo + ' back, refusing to let you see more. But you notice the corners of ' + yPo + ' lips curving up.', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「……你如果敢告訴別人，我就在記錄裡把你寫成禿頭。」', textEn: '"...If you tell anyone, I\'ll write you as bald in the records."', delay: 2500 },
        ], [
          { text: '我不會說的', textEn: 'I won\'t tell', action: () => {
            changeHp(5);
            changePetri(-2);
            notify(L('HP +5，石化度 -2%（溫暖的感覺）', 'HP +5, Petri -2% (A warm feeling)'));
            loadNode('r2_look');
          }},
        ], { label: L('螢的素描', 'Ying\'s sketch') });
      }});
    }
    if (state.flags.r2CampVisited && !state.flags.r2YingNight) {
      c.push({ text: '要不要一起去營地休息？', textEn: 'Want to rest at the camp together?', action: () => loadNode('r2_ying_night') });
    }
    if (state.flags.r2YingLore3 && state.flags.r2ChiefTalked && !state.flags.r2YingPromise) {
      c.push({ text: '我快要去挑戰巨獸了……', textEn: 'I\'m about to face the colossus...', action: () => loadNode('r2_ying_promise') });
    }
    if (state.flags.r2CrystalStatueSearched && !state.flags.r2YingEngineer) {
      c.push({ text: '告訴螢石化工程師的事', textEn: 'Tell Ying about the petrified engineer', action: () => {
        state.flags.r2YingEngineer = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '你把在結晶密林裡發現石化工程師的事告訴了螢。', textEn: 'You tell Ying about the petrified engineer you found in the crystal thicket.', delay: 2000 },
          { tag: '感知', tagColor: 'tag-sense', text: '螢的表情凝重了。' + yP + '翻開手冊，找到一頁人員名單。', textEn: 'Ying\'s expression grows solemn. ' + yPC + ' flips to a page with a personnel list.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', html: '「……<b>柯薇</b>。第七號戰甲的首席工程師。失蹤於瘟疫爆發後第三天。」螢輕聲唸道。', htmlEn: '"...<b>Kwei</b>. Chief engineer of Mech Unit No.7. Missing since day three of the plague outbreak." Ying reads softly.', delay: 3200 },
          { tag: '情報', tagColor: 'tag-info', text: '「她一定是在最後關頭還想啟動七號機甲……但來不及了。」', textEn: '"She must have been trying to activate Mech No.7 until the very end... but ran out of time."', delay: 2800 },
          { tag: '感知', tagColor: 'tag-sense', text: '螢在手冊上柯薇的名字旁寫了一行小字：「已確認。安息。」', textEn: 'Ying writes a small note beside Kwei\'s name: "Confirmed. Rest in peace."', delay: 2500 },
          { tag: '感知', tagColor: 'tag-sense', text: yP + '合上手冊，沉默了一會兒：「……至少有人記得她。」', textEn: yPC + ' closes the notebook, silent for a moment: "...At least someone remembers her."', delay: 2500 },
        ], [
          { text: '繼續', textEn: 'Continue', action: () => {
            changeStat('wil', 1);
            notify(L('意志 +1', 'WIL +1'));
            loadNode('r2_ying_talk');
          }},
        ], { label: L('柯薇的記錄', 'Kwei\'s record') });
      }});
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r2_look') });
    return c;
  })(), { label: L('和螢說話', 'Talking to Ying') });
});

// ── Ying: Seal Chamber lore ──
registerNode('r2_ying_seal', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  state.flags.r2YingLore3 = true;
  autoExplore([
    { art: `<pre class="ascii-art cyan">
       ·✦· 螢 — 記錄員少女 ·✦·
               ╭───╮
              ╱ ˚ ˚ ╲───╮
             │  ‿‿‿  │   │
              ╲──────╱  ╱╱
         ╭────╲────╱───╱╱
        ╱  ✦·  │    │  ·✦
       │ ·✦··──┤    ├──· │
       │ ✦·  ╱ │    │ ╲  │
        ╲·  ╱  │    │  ╲╱
         ╲╱  ╭─┤    ├─╮
             │ ╰────╯ │
             │ ◇手冊◇ │
             ╰────────╯
       ✦ 石化紋在手臂上微微發光 ✦
</pre>`, artEn: `<pre class="ascii-art cyan">
      ·✦· Ying — Young Chronicler ·✦·
               ╭───╮
              ╱ ˚ ˚ ╲───╮
             │  ‿‿‿  │   │
              ╲──────╱  ╱╱
         ╭────╲────╱───╱╱
        ╱  ✦·  │    │  ·✦
       │ ·✦··──┤    ├──· │
       │ ✦·  ╱ │    │ ╲  │
        ╲·  ╱  │    │  ╲╱
         ╲╱  ╭─┤    ├─╮
             │ ╰────╯ │
             │◇Notes◇ │
             ╰────────╯
      ✦ Petri-marks glow on arms ✦
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '螢把手冊攤在地上，指著一張泛黃的手繪地圖。', textEn: 'Ying spreads the notebook on the ground, pointing to a yellowed hand-drawn map.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', html: '「根據舊記錄，<b>封印石室在採石場的最底層</b>——比我們現在站的位置還要深三層。」', htmlEn: '"According to old records, <b>the Seal Chamber is on the quarry\'s deepest level</b> — three floors below where we stand now."', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: '「但那條路在五十年前的瘟疫爆發時就被封死了。唯一的通道——」', textEn: '"But that path was sealed fifty years ago when the plague broke out. The only passage —"', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '螢用炭筆在地圖上劃了一條線：「——經過上升通道，再從另一側繞下去。」', textEn: 'Ying traces a line on the map: "— goes through the ascent shaft, then loops back down from the other side."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', html: '「換句話說——<b>我們必須先上去，才能找到下去的路。</b>」', htmlEn: '"In other words — <b>we have to go up first to find the way down.</b>"', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢合上手冊，看著你的眼睛。在暗金色的光線中，' + yP + '的表情前所未有地認真。', textEn: 'Ying closes the notebook and looks into your eyes. In the dark golden light, ' + yPo + ' expression is unprecedentedly serious.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「你要去上面。我要去下面。但路是同一條。」', textEn: '"You need to go up. I need to go down. But the path is the same."', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '頓了頓，聲音低了下來：「……到了分岔路口，你會怎麼選？」', textEn: yPC + ' pauses, voice dropping: "...When we reach the fork, which way will you choose?"', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '你聽出了' + yP + '話裡的意思——' + yP + '在問，你會不會和' + yP + '一起去封印石室。', textEn: 'You hear the subtext — ' + (isMale ? 'she\'s' : 'he\'s') + ' asking whether you\'d go with ' + (isMale ? 'her' : 'him') + ' to the Seal Chamber.', delay: 3000 },
  ], [
    { text: '到了再說吧。先活著走出這裡。', textEn: 'We\'ll decide when we get there. Survive this first.', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '螢笑了一下，但那個笑容裡有一絲你看不透的東西。', textEn: 'Ying smiles, but there\'s something in that smile you can\'t quite read.', delay: 2200 },
        { tag: '情報', tagColor: 'tag-info', text: '「也對。先活著。」' + yP + '把手冊收好，站了起來。', textEn: '"Fair enough. Survive first." ' + yPC + ' packs the notebook and stands.', delay: 2200 },
        { tag: '感知', tagColor: 'tag-sense', text: '「——但我會在筆記裡留一頁給你的答案。」', textEn: '"— But I\'ll save a page for your answer."', delay: 2500 },
      ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r2_look') }]);
    }},
    { text: '我答應過跟你一起走', textEn: 'I promised to walk with you', action: () => {
      state.flags.r2YingLore4 = true;
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '螢愣了一下。然後' + yP + '別過頭去，但你看到' + yP + '的耳尖紅了。', textEn: 'Ying freezes. Then ' + (isMale ? 'she' : 'he') + ' turns away, but you see ' + yPo + ' ear tips redden.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「……你這個人，說話總是這麼直接。」螢的聲音有些發顫。', textEn: '"...You always speak so directly." Ying\'s voice trembles slightly.', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '轉過身，眼睛裡帶著水光，但嘴角是上揚的。', textEn: yPC + ' turns back, eyes glistening, but lips curved upward.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「好。我記下了。白紙黑字——你賴不掉。」', textEn: '"Good. Noted. In black and white — you can\'t take it back."', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '低頭在手冊上寫了什麼。你沒看清內容，但你看到了' + yP + '落筆時的微笑。', textEn: yPC + ' writes something in the notebook. You can\'t see what, but you see the smile as the pen touches paper.', delay: 3000 },
      ], [{ text: '繼續', textEn: 'Continue', action: () => {
        changeStat('wil', 1);
        notify(L('意志 +1', 'WIL +1'));
        loadNode('r2_look');
      }}]);
    }},
  ], { label: L('封印石室的線索', 'Seal Chamber clues') });
});

// ── Ying: campfire night scene ──
registerNode('r2_ying_night', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  state.flags.r2YingNight = true;
  autoExplore([
    { art: `<pre class="ascii-art cyan">
       ·✦· 螢 — 記錄員少女 ·✦·
               ╭───╮
              ╱ ˚ ˚ ╲───╮
             │  ‿‿‿  │   │
              ╲──────╱  ╱╱
         ╭────╲────╱───╱╱
        ╱  ✦·  │    │  ·✦
       │ ·✦··──┤    ├──· │
       │ ✦·  ╱ │    │ ╲  │
        ╲·  ╱  │    │  ╲╱
         ╲╱  ╭─┤    ├─╮
             │ ╰────╯ │
             │ ◇手冊◇ │
             ╰────────╯
       ✦ 石化紋在手臂上微微發光 ✦
</pre>`, artEn: `<pre class="ascii-art cyan">
      ·✦· Ying — Young Chronicler ·✦·
               ╭───╮
              ╱ ˚ ˚ ╲───╮
             │  ‿‿‿  │   │
              ╲──────╱  ╱╱
         ╭────╲────╱───╱╱
        ╱  ✦·  │    │  ·✦
       │ ·✦··──┤    ├──· │
       │ ✦·  ╱ │    │ ╲  │
        ╲·  ╱  │    │  ╲╱
         ╲╱  ╭─┤    ├─╮
             │ ╰────╯ │
             │◇Notes◇ │
             ╰────────╯
      ✦ Petri-marks glow on arms ✦
</pre>`, delay: 800 },
    { tag: '移動', tagColor: 'tag-move', text: '你帶著螢來到了營地。營火的光芒讓' + yP + '的表情柔和了不少。', textEn: 'You bring Ying to the camp. The campfire\'s glow softens ' + yPo + ' expression.', delay: 2200 },
    { tag: '環境', tagColor: 'tag-system', text: '營地裡的人大多已經睡了。只有零星的幾個人在輪值守夜。', textEn: 'Most camp residents have turned in. Only a few stand watch.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你和螢在營火旁坐下。火光在你們之間跳躍，把兩個人的影子拉得很長。', textEn: 'You and Ying sit by the campfire. Flames dance between you, casting long shadows.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '沉默了一會兒。但這不是尷尬的沉默——是那種彼此存在就已足夠的安靜。', textEn: 'Silence for a while. Not awkward silence — the kind where each other\'s presence is enough.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「……如果我們能走出去——」螢忽然開口，盯著火焰。', textEn: '"...If we make it out—" Ying suddenly speaks, staring into the flames.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「到了地表，你想做什麼？」', textEn: '"When we reach the surface, what do you want to do?"', delay: 2200 },
    { tag: '記憶', tagColor: 'tag-system', text: '地表……那個概念對你來說已經模糊得像一場夢了。陽光、風、天空——你甚至記不清它們的顏色。', textEn: 'The surface... that concept has grown dream-like. Sunlight, wind, sky — you can\'t even recall their colors.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢似乎看出了你的困惑。' + yP + '輕輕靠近了一些——肩膀幾乎碰到了你的。', textEn: 'Ying seems to sense your confusion. ' + yPC + ' leans slightly closer — shoulders nearly touching yours.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「我想……找一個安靜的地方。把這一切都寫成書。」螢的聲音很輕。', textEn: '"I want to... find a quiet place. Write all of this into a book." Ying\'s voice is soft.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「三百年的石化瘟疫史。從第一任爐灶少女到最後一個。」', textEn: '"Three hundred years of the Stone Plague. From the first Hearth-Maiden to the last."', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '側過頭看著你，火光映在' + yP + '的瞳孔裡，像兩顆微小的星。', textEn: yPC + ' turns to look at you, firelight reflected in ' + yPo + ' eyes like two tiny stars.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「如果你願意……我希望你能在旁邊。幫我校對。」', textEn: '"If you\'re willing... I\'d like you nearby. To help me proofread."', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '那句話聽起來像是在說校對。但你知道' + yP + '的意思不只是校對。', textEn: 'It sounds like proofreading. But you know ' + (isMale ? 'she' : 'he') + ' means more than that.', delay: 2800 },
  ], [
    { text: '我不太會寫字', textEn: 'I\'m not great at writing', action: () => {
      autoExplore([
        { tag: '情報', tagColor: 'tag-info', text: '螢噗嗤一聲笑了。', textEn: 'Ying snorts a laugh.', delay: 1800 },
        { tag: '情報', tagColor: 'tag-info', text: '「笨蛋。我是記錄員，寫字是我的事。你只要待在那裡就好。」', textEn: '"Idiot. I\'m the chronicler — writing is my job. You just have to be there."', delay: 2800 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '說完這句話後就不再開口了。但' + yP + '的肩膀輕輕靠上了你的。', textEn: 'After saying that, ' + (isMale ? 'she' : 'he') + ' falls silent. But ' + yPo + ' shoulder gently leans against yours.', delay: 2800 },
        { tag: '環境', tagColor: 'tag-system', text: '營火噼啪作響。頭頂的石化結晶散發出微弱的光——像一片地底的星空。', textEn: 'The campfire crackles. Overhead, faint crystal glow — like an underground starscape.', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: '過了很久，你感覺肩膀上的重量變得均勻——螢靠著你睡著了。', textEn: 'After a long while, the weight on your shoulder steadies — Ying has fallen asleep against you.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '的呼吸很輕，嘴唇微微張開。手冊滑到了膝蓋上——攤開的那一頁寫滿了字。', textEn: yPC + ' breathes softly, lips slightly parted. The notebook has slipped to ' + yPo + ' knee — the open page covered in writing.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '你不敢動。在這座冰冷的地底世界裡，此刻肩上的溫度是你擁有的最珍貴的東西。', textEn: 'You dare not move. In this cold underground world, the warmth on your shoulder is the most precious thing you possess.', delay: 3200 },
      ], [
        { text: '靜靜地陪著', textEn: 'Stay with her quietly', action: () => {
          changeHp(25);
          changePetri(-8);
          notify(L('HP +25，石化度 -8%（深層的寧靜）', 'HP +25, Petri -8% (Deep tranquility)'));
          loadNode('r2_camp');
        }},
      ], { label: L('營火夜話', 'Campfire night') });
    }},
    { text: '那是個約定', textEn: 'It\'s a promise', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '螢低下頭，火光把' + yP + '泛紅的臉映得更紅了。', textEn: 'Ying lowers ' + yPo + ' head, the firelight making ' + yPo + ' flushed face even redder.', delay: 2200 },
        { tag: '情報', tagColor: 'tag-info', text: '「……又是這種直接的說法。」' + yP + '小聲嘟囔。', textEn: '"...There you go being direct again." ' + yPC + ' mutters.', delay: 2200 },
        { tag: '感知', tagColor: 'tag-sense', text: '但' + yP + '伸出手——帶著墨漬的手指輕輕碰了碰你石化的左手。', textEn: 'But ' + (isMale ? 'she' : 'he') + ' reaches out — ink-stained fingers gently brush your petrified left hand.', delay: 2800 },
        { tag: '感知', tagColor: 'tag-sense', text: '這一次，' + yP + '沒有縮回去。', textEn: 'This time, ' + (isMale ? 'she' : 'he') + ' doesn\'t pull back.', delay: 2200 },
        { tag: '環境', tagColor: 'tag-system', text: '營火的溫暖、手指的觸感、頭頂結晶的微光——這一刻，石化的寒冷似乎很遠很遠。', textEn: 'The campfire\'s warmth, the touch of fingers, the faint crystal glow above — in this moment, petrification\'s chill seems far, far away.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢靠著你的肩膀，慢慢閉上了眼睛。手冊滑落到地上，' + yP + '也沒有去撿。', textEn: 'Ying leans against your shoulder, slowly closing ' + yPo + ' eyes. The notebook falls to the ground, but ' + (isMale ? 'she' : 'he') + ' doesn\'t pick it up.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '你也沒有動。就讓這一刻停留久一些吧。', textEn: 'You don\'t move either. Let this moment last a little longer.', delay: 2500 },
      ], [
        { text: '閉上眼睛', textEn: 'Close your eyes', action: () => {
          changeHp(30);
          changePetri(-10);
          changeStat('wil', 1);
          notify(L('HP +30，石化度 -10%，意志 +1（心的溫度）', 'HP +30, Petri -10%, WIL +1 (Warmth of heart)'));
          loadNode('r2_camp');
        }},
      ], { label: L('營火夜話', 'Campfire night') });
    }},
  ], { label: L('營火邊的螢', 'Ying by the campfire') });
});

// ── Ying: pre-boss promise ──
registerNode('r2_ying_promise', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  state.flags.r2YingPromise = true;
  autoExplore([
    { art: `<pre class="ascii-art cyan">
       ·✦· 螢 — 記錄員少女 ·✦·
               ╭───╮
              ╱ ˚ ˚ ╲───╮
             │  ‿‿‿  │   │
              ╲──────╱  ╱╱
         ╭────╲────╱───╱╱
        ╱  ✦·  │    │  ·✦
       │ ·✦··──┤    ├──· │
       │ ✦·  ╱ │    │ ╲  │
        ╲·  ╱  │    │  ╲╱
         ╲╱  ╭─┤    ├─╮
             │ ╰────╯ │
             │ ◇手冊◇ │
             ╰────────╯
       ✦ 石化紋在手臂上微微發光 ✦
</pre>`, artEn: `<pre class="ascii-art cyan">
      ·✦· Ying — Young Chronicler ·✦·
               ╭───╮
              ╱ ˚ ˚ ╲───╮
             │  ‿‿‿  │   │
              ╲──────╱  ╱╱
         ╭────╲────╱───╱╱
        ╱  ✦·  │    │  ·✦
       │ ·✦··──┤    ├──· │
       │ ✦·  ╱ │    │ ╲  │
        ╲·  ╱  │    │  ╲╱
         ╲╱  ╭─┤    ├─╮
             │ ╰────╯ │
             │◇Notes◇ │
             ╰────────╯
      ✦ Petri-marks glow on arms ✦
</pre>`, delay: 800 },
    { tag: '感知', tagColor: 'tag-sense', text: '聽到你要去挑戰石化巨獸，螢的手停了。', textEn: 'Hearing you\'re going to face the Petrified Colossus, Ying\'s hand stops.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '慢慢合上手冊，抬起頭。' + yP + '的表情很平靜，但你看到' + yP + '咬緊了嘴唇。', textEn: yPC + ' slowly closes the notebook and looks up. ' + yPC + ' expression is calm, but you see ' + yPo + ' lips pressed tight.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「……我知道攔不住你。」螢站了起來，走到你面前。', textEn: '"...I know I can\'t stop you." Ying stands and walks up to you.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '從領口解下一條細繩——上面繫著一枚小小的、打磨光滑的石頭。形狀像一顆螢火蟲。', textEn: yPC + ' unties a thin cord from ' + yPo + ' collar — on it hangs a small, polished stone. Shaped like a firefly.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', html: '「這是我師父留給我的。他說<b>螢火之光可以照亮最深的黑暗</b>——雖然我一直覺得這只是安慰話。」', htmlEn: '"My mentor left me this. He said <b>a firefly\'s light can illuminate the deepest dark</b> — though I always thought it was just comfort."', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢把石墜掛在你的脖子上。' + yP + '的手指在你鎖骨處停留了一瞬——微微發抖。', textEn: 'Ying hangs the pendant around your neck. ' + yPC + ' fingers linger at your collarbone for a moment — trembling slightly.', delay: 3000 },
    { tag: '物品', tagColor: 'tag-item', html: '獲得了<b>螢的護身符</b>。', htmlEn: 'Received <b>Ying\'s Charm</b>.', delay: 1500, effect: () => { addItem(L('螢的護身符', 'Ying\'s Charm')); } },
    { tag: '情報', tagColor: 'tag-info', text: '「你給我答應——活著回來。」螢看著你的眼睛，聲音很輕但很堅定。', textEn: '"Promise me — come back alive." Ying looks into your eyes, voice soft but firm.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '在暗金色的光線中，' + yP + '的眼睛比你見過的任何結晶都要明亮。', textEn: 'In the dark golden light, ' + yPo + ' eyes are brighter than any crystal you\'ve seen.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「我還有很多東西沒寫完。你的故事——不能在這裡結束。」', textEn: '"I still have so much to write. Your story — it can\'t end here."', delay: 2800 },
  ], [
    { text: '我會回來的', textEn: 'I\'ll come back', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '螢點了點頭。然後' + yP + '做了一件你沒料到的事——', textEn: 'Ying nods. Then ' + (isMale ? 'she' : 'he') + ' does something unexpected —', delay: 2200 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '踮起腳尖，在你的額頭上輕輕印了一下。很快。像蜻蜓點水。', textEn: yPC + ' stands on tiptoe and lightly presses ' + yPo + ' lips to your forehead. Quickly. Like a dragonfly touching water.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '「……這是記錄員的祝福。」螢的聲音發顫，臉紅到了脖子。「不許多想。」', textEn: '"...That\'s a chronicler\'s blessing." Ying\'s voice wavers, blush spreading to ' + yPo + ' neck. "Don\'t read into it."', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '轉身快步走開，但你聽到' + yP + '小聲說了一句——', textEn: yPC + ' turns and walks away quickly, but you hear ' + (isMale ? 'her' : 'him') + ' whisper —', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「——一定要回來。」', textEn: '"— Come back. Please."', delay: 2500 },
      ], [{ text: '繼續', textEn: 'Continue', action: () => {
        changeStat('wil', 2);
        changeHp(15);
        changePetri(-5);
        notify(L('意志 +2，HP +15，石化度 -5%（不可辜負的約定）', 'WIL +2, HP +15, Petri -5% (A promise that must be kept)'));
        loadNode('r2_look');
      }}]);
    }},
  ], { label: L('螢的護身符', 'Ying\'s charm') });
});

// ═══════════════════════════════════════════════════
//  NPC Continuation — 灰鶴 (Grey Crane) in Region 2
// ═══════════════════════════════════════════════════

registerNode('r2_crane', () => {
  var steps = [];
  if (!state.flags.r2CraneMet) {
    state.flags.r2CraneMet = true;
    steps.push({ art: `<pre class="ascii-art gold">
       ·  ˚  灰鶴 — 行商人  ˚  ·
         ═══════════════════
        ╱ ·  ˚  ·  ˚  ·  ˚ ╲
       ╱═══════════════════════╲
              ╱───────╲
             │ ─    ─  │
             │  ╲──╱   │
              ╲───╱───╱
         ╱░░░░░│     │░░░░░╲
        ╱░░░░░─┤     ├─░░░░░╲
       ╱░░░░░░ │     │ ░░░░░░╲
      ╱░░░░░░░ │     │ ░░░░░░░╲
     ╱░░░░░░░░ │     │ ░░░░░░░░╲
      ·─·─·─ ╭═╧═════╧═╮ ─·─·─·
             ║ ◆ 貨物 ◆ ║
             ╰═════════╯
</pre>`, artEn: `<pre class="ascii-art gold">
      ·  ˚  Grey Crane — Merchant  ˚  ·
         ═══════════════════
        ╱ ·  ˚  ·  ˚  ·  ˚ ╲
       ╱═══════════════════════╲
              ╱───────╲
             │ ─    ─  │
             │  ╲──╱   │
              ╲───╱───╱
         ╱░░░░░│     │░░░░░╲
        ╱░░░░░─┤     ├─░░░░░╲
       ╱░░░░░░ │     │ ░░░░░░╲
      ╱░░░░░░░ │     │ ░░░░░░░╲
     ╱░░░░░░░░ │     │ ░░░░░░░░╲
      ·─·─·─ ╭═╧═════╧═╮ ─·─·─·
             ║ ◆ Wares ◆ ║
             ╰═════════╯
</pre>`, delay: 800 });
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '你在營地的角落看到一個熟悉的身影——一件灰色的斗篷，背上的大包裹叮噹作響。', textEn: 'In a camp corner, a familiar figure — a grey cloak, a large pack clinking on the back.', delay: 2500 });
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', html: '「喲——<b>又見面了</b>。」灰鶴轉過身，露出那張永遠帶著商人笑容的臉。', htmlEn: '"Well — <b>we meet again</b>." Grey Crane turns, showing that perpetual merchant\'s grin.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「怎麼，你也上來了？比我想的快。」他把包裹放下，從裡面掏出一瓶酒。', textEn: '"So, you made it up too? Faster than I expected." He sets down the pack and pulls out a bottle.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我從另一條商路繞過來的。迴廊東邊有一條暗渠——做生意的都知道。」', textEn: '"I came through another trade route. There\'s a culvert east of the corridor — all the traders know it."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「這個營地的人跟我買了不少東西。鐵霜那個女人殺價很狠。」灰鶴搖搖頭笑了。', textEn: '"The camp folk bought plenty from me. That Iron Frost woman drives a hard bargain." Grey Crane shakes her head, laughing.', delay: 2800 });
  } else {
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '灰鶴坐在她那堆貨物旁邊喝酒。看到你走來，她舉起酒瓶晃了晃。', textEn: 'Grey Crane sits beside her pile of goods, drinking. She waves the bottle as you approach.', delay: 2200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「又來找我？是要做生意，還是聽故事？」', textEn: '"Back again? Business, or stories?"', delay: 2000 });
  }
  autoExplore(steps, (function() {
    var c = [];
    if (!state.flags.r2CraneLore) {
      c.push({ text: '聽灰鶴說說上面的情況', textEn: 'Ask Grey Crane about what\'s above', action: () => {
        state.flags.r2CraneLore = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '灰鶴喝了口酒，眼神變得認真了一些。', textEn: 'Grey Crane takes a swig, her eyes growing more serious.', delay: 2000 },
          { tag: '情報', tagColor: 'tag-info', html: '「上面是<b>河城渡口</b>——曾經是地底最繁華的交通樞紐。」', htmlEn: '"Above is the <b>River City Ferry</b> — once the underground world\'s busiest transport hub."', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '「現在嘛……還有一些人在那裡。但情況很複雜。有好幾個勢力在搶地盤。」', textEn: '"Now... some people remain. But things are complicated. Several factions fighting over territory."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', html: '「有一個叫<b>「渡口議會」</b>的組織在維持秩序——但他們對外來者不太友善。」', htmlEn: '"An organization called the <b>Ferry Council</b> maintains order — but they aren\'t friendly to outsiders."', delay: 3000 },
          { tag: '情報', tagColor: 'tag-info', text: '「不過對我這種商人來說，哪裡都能去。只要帶對東西。」灰鶴眨了眨眼。', textEn: '"But for a merchant like me, I can go anywhere. As long as I bring the right goods." Grey Crane winks.', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '「你要上去的話——記住一個名字：<b>銅鐘</b>。是渡口議會裡唯一還算講道理的人。」', textEn: '"If you\'re heading up — remember a name: <b>Bronze Bell</b>. The only reasonable person on the Ferry Council."', delay: 3000 },
        ], [
          { text: '謝了', textEn: 'Thanks', action: () => {
            gainXp(5);
            loadNode('r2_camp');
          }},
        ], { label: L('灰鶴的情報', 'Grey Crane\'s intel') });
      }});
    }
    if (!state.flags.r2CraneTrade) {
      c.push({ text: '看看有什麼好東西', textEn: 'Browse his wares', action: () => {
        state.flags.r2CraneTrade = true;
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '灰鶴攤開她的包裹。裡面的東西比上次豐富了不少。', textEn: 'Grey Crane opens her pack. Far more goods than last time.', delay: 2000 },
          { tag: '情報', tagColor: 'tag-info', text: '「看你面子，給你便宜點——不收錢，用情報換。」', textEn: '"Since it\'s you, I\'ll cut you a deal — no coin, just intel."', delay: 2500 },
          { tag: '物品', tagColor: 'tag-item', html: '灰鶴遞給你一瓶渾濁的液體：「<b>石化抑制劑</b>——河城那邊的配方。比淨化液好用。」', htmlEn: 'Grey Crane hands you a murky liquid: "<b>Petri Suppressant</b> — River City formula. Better than purifiers."', delay: 2800, effect: () => { addItem(L('石化抑制劑', 'Petri Suppressant')); } },
          { tag: '情報', tagColor: 'tag-info', text: '「你跟我說的那些迴廊裡的路線——很有價值。這就當是回報。」', textEn: '"The corridor routes you told me about — valuable intel. Consider this payback."', delay: 2500 },
        ], [
          { text: '道謝', textEn: 'Thank him', action: () => loadNode('r2_camp') },
        ], { label: L('灰鶴的貨物', 'Grey Crane\'s wares') });
      }});
    }
    // Gambling — always available after first meeting
    c.push({ text: L('來一把吹牛骰？', 'Fancy a game of Liar\'s Dice?'), action: () => {
      var gold = state.flags.gold || 0;
      var bet = Math.max(5, Math.min(20, Math.floor(gold / 3) + 5));
      if (gold < bet) {
        // Give starting gold if broke
        if (gold < 5) {
          state.flags.gold = 10;
          gold = 10;
          notify(L('灰鶴借了你 10 金幣：「沒錢怎麼賭？先借你。」', 'Grey Crane lends you 10 gold: "Can\'t gamble with nothing. I\'ll spot you."'));
          renderStatus();
        }
        bet = 5;
      }
      var introSteps = [
        { tag: L('骰子', 'DICE'), tagColor: 'tag-npc',
          text: L('灰鶴從包裹裡掏出兩個皮杯和十顆骰子，眼睛亮了起來。',
                 'Grey Crane pulls two leather cups and ten dice from her pack, eyes lighting up.'),
          delay: 2000 },
        { tag: L('骰子', 'DICE'), tagColor: 'tag-npc',
          text: L('「吹牛骰——地底商路上最受歡迎的賭法。各搖五顆，輪流喊場上有幾個某點數。喊不下去就叫開，看誰在吹牛。」',
                 '"Liar\'s Dice — most popular game on underground trade routes. Five dice each, take turns bidding how many of a face exist total. Can\'t raise? Call liar and reveal."'),
          delay: 3500 },
        { tag: L('骰子', 'DICE'), tagColor: 'tag-info',
          text: L('「來吧，' + bet + ' 金幣一局。」', '"Let\'s go, ' + bet + ' gold a round."'),
          delay: 1500 },
      ];
      autoExplore(introSteps, [
        { text: L('開賭 (' + bet + '金幣)', 'Play (' + bet + ' gold)'), action: function() {
          diceGame.start(bet, function(won, walkAway) {
            if (walkAway) { loadNode('r2_crane'); return; }
            // Check for weapon reward
            var wins = state.flags.diceWins || 0;
            if (wins >= 3 && !state.flags.craneSwordOffered) {
              state.flags.craneSwordOffered = true;
              offerCraneSword(function() { loadNode('r2_crane'); });
            } else {
              loadNode('r2_crane');
            }
          });
        }},
        { text: L('算了', 'No thanks'), action: () => loadNode('r2_crane') },
      ], { label: L('吹牛骰', 'Liar\'s Dice') });
    }});

    c.push({ text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') });
    return c;
  })(), { label: L('灰鶴的攤位', 'Grey Crane\'s stall') });
});

// ── Crane's Sword Reward ──
function offerCraneSword(onDone) {
  var en = state.lang === 'en';
  var earnings = state.flags.diceEarnings || 0;
  // Weapon damage scales with total winnings: 3~8 bonus damage
  var dmgBonus = Math.min(8, Math.max(3, Math.floor(earnings / 15)));
  var swordNameZh = '灰鶴的' + (dmgBonus >= 6 ? '精鍛商路刀' : '商路短刀');
  var swordNameEn = 'Grey Crane\'s ' + (dmgBonus >= 6 ? 'Masterwork Trade Blade' : 'Trade Blade');
  var swordName = en ? swordNameEn : swordNameZh;

  var steps = [
    { tag: en ? 'NPC' : '灰鶴', tagColor: 'tag-npc',
      text: L('灰鶴看了你一眼，從包裹最底層翻出一個布包。',
             'Grey Crane eyes you, then rummages to the bottom of her pack and pulls out a cloth bundle.'),
      delay: 2500 },
    { tag: en ? 'NPC' : '灰鶴', tagColor: 'tag-npc',
      html: L('「贏了我 ' + (state.flags.diceWins || 3) + ' 把的人不多。」他把布包打開——裡面是一把<b>泛著冷光的短刀</b>。',
             '"Not many win ' + (state.flags.diceWins || 3) + ' rounds from me." He unfolds the bundle — inside, a <b>cold-gleaming blade</b>.'),
      delay: 3000 },
    { tag: en ? 'ITEM' : '物品', tagColor: 'tag-item',
      html: L('「<b>' + swordNameZh + '</b>——商路上最好的武器，用石化結晶鍛的邊。送你了，算我認輸的代價。」',
             '"<b>' + swordNameEn + '</b> — finest weapon on the trade routes, petrification crystal edge. It\'s yours — the price of my defeat."'),
      delay: 3000 },
    { tag: en ? 'SYSTEM' : '系統', tagColor: 'tag-system',
      text: L('獲得武器：' + swordNameZh + '（攻擊 +' + dmgBonus + '）',
             'Acquired weapon: ' + swordNameEn + ' (ATK +' + dmgBonus + ')'),
      delay: 2000, effect: function() {
        addItem(swordName);
        state.flags.weaponDmg = dmgBonus;
        state.flags.craneSwordName = swordName;
      }},
  ];

  autoExplore(steps, [
    { text: L('收下', 'Accept'), action: onDone },
  ], { label: L('灰鶴的餽贈', 'Grey Crane\'s gift') });
}

// ═══════════════════════════════════════════════════
//  NPC Continuation — 老周 (Old Zhou) traces
// ═══════════════════════════════════════════════════

registerNode('r2_zhou_trace', () => {
  state.flags.r2ZhouTrace = true;
  autoExplore([
    { art: `<pre class="ascii-art">
  ░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░
  █  ·  ˚    ·    ˚   ·    ˚   █
  ▓    ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱     ▓
  █   ╱ 老周到此一遊       ╱    █
  ▓  ╱  往北走了           ╱    ▓
  █ ╱   腿快不行了         ╱    █
  ▓╱    活著就好  ──→ 北  ╱     ▓
  █ ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱      █
  ▓       ·  ↑ 刻痕  ·          ▓
  █  ·  ˚    ·    ˚   ·    ˚   █
  ░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░
</pre>`, artEn: `<pre class="ascii-art">
  ░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░
  █  ·  ˚    ·    ˚   ·    ˚   █
  ▓    ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱     ▓
  █   ╱ Old Zhou was here  ╱    █
  ▓  ╱  Headed north       ╱    ▓
  █ ╱   Legs giving out    ╱    █
  ▓╱    Just stay alive → N╱     ▓
  █ ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱      █
  ▓      · ↑ Carved  ·          ▓
  █  ·  ˚    ·    ˚   ·    ˚   █
  ░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '採石台的角落裡，你注意到了一些不尋常的東西——岩壁上刻著字。', textEn: 'In a corner of the quarry platform, you notice something unusual — words carved into the rock wall.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '刻痕很新。不是古代的遺跡——是最近才有人用鑿子刻上去的。', textEn: 'The carvings are fresh. Not ancient ruins — someone chiseled these recently.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', html: '「<b>老周到此一遊。往北走了。腿快不行了。誰看到這行字，替我跟下面的人說一聲——活著就好。</b>」', htmlEn: '"<b>Old Zhou was here. Headed north. My legs are giving out. Whoever reads this, tell the folks below — just stay alive.</b>"', delay: 3500 },
    { tag: '記憶', tagColor: 'tag-system', text: '老周……迴廊裡那個倔強的老礦工。他也上來了。而且比你更早。', textEn: 'Old Zhou... that stubborn old miner from the corridor. He made it up too. And earlier than you.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '刻痕旁邊還有一個小小的箭頭，指向北方——上升通道的方向。', textEn: 'Beside the carving, a small arrow points north — toward the ascent shaft.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '他還活著。至少在刻下這些字的時候還活著。', textEn: 'He\'s alive. At least he was when he carved these words.', delay: 2200 },
  ], [
    { text: '在旁邊刻下「已讀。會轉告。」', textEn: 'Carve "Read. Will pass on the message." beside it', action: () => {
      changeStat('wil', 1);
      notify(L('意志 +1（老友的牽掛）', 'WIL +1 (An old friend\'s concern)'));
      loadNode('r2_quarry_floor');
    }},
    { text: '點頭，繼續', textEn: 'Nod, continue', action: () => loadNode('r2_quarry_floor') },
  ], { label: L('老周的留言', 'Old Zhou\'s message') });
});

// ── Region 2 Patrol ──
registerNode('r2_patrol', () => {
  autoExplore([
    { art: `<pre class="ascii-art red">
  ════════════════════════════════
      ╱╲    ·˚✦˚·    ╱╲
     ╱░░╲  .:*~*:.  ╱░░╲
    ╱░░░░╲.:*~*~*:.╱░░░░╲
    ════════ 結  晶 ════════
       ·  ·  ·  ·  ·  ·
      ⚠ 暗 影 在 移 動 ⚠
       ·  ·  ·  ·  ·  ·
         ╱▔╲   ╱▔╲
        │??│  │??│  ← 敵影
         ╲_╱   ╲_╱
  ════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art red">
  ════════════════════════════════
      ╱╲    ·˚✦˚·    ╱╲
     ╱░░╲  .:*~*:.  ╱░░╲
    ╱░░░░╲.:*~*~*:.╱░░░░╲
    ════════Crystal ════════
       ·  ·  ·  ·  ·  ·
     ⚠ Shadows are moving ⚠
       ·  ·  ·  ·  ·  ·
         ╱▔╲   ╱▔╲
        │??│  │??│  ← Hostiles
         ╲_╱   ╲_╱
  ════════════════════════════════
</pre>`, delay: 800 },
    { tag: '判斷', tagColor: 'tag-move', text: '採石場的怪物比迴廊更加兇猛。但你需要更多的戰鬥經驗來面對前方的挑戰。', textEn: 'Quarry monsters are fiercer than those in the corridor. But you need combat experience for the challenges ahead.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你握緊武器，踏入了採石台之間的暗影。', textEn: 'You grip your weapon and step into the shadows between quarry platforms.', delay: 2000 },
  ], [
    { text: '開始巡邏', textEn: 'Begin patrol', action: () => startPatrol() },
    { text: '返回', textEn: 'Return', action: () => loadNode('r2_look') },
  ], { label: L('準備巡邏', 'Preparing patrol') });
});
