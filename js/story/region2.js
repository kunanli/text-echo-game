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
    if (state.flags.r2ChengAwake || hasItem(L('古代密道通行碼', 'Ancient Passage Code'))) {
      c.push({ text: '⚙ 前往古代密道', textEn: '⚙ Go to the ancient passage', action: () => loadNode('r2_ancient_tunnel') });
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
    if (state.flags.r2ZhouTrace && state.flags.r1ZhouMineDisaster && !state.flags.r2ZhouTraceDeep) {
      c.push({ text: '老周留言旁邊……還有更多刻痕', textEn: 'Beside Zhou\'s message... more carvings', action: () => loadNode('r2_zhou_trace_deep') });
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
    if (state.flags.r2BossSpared && !state.flags.r2ReunionSeen) {
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你回到營地——氣氛和之前完全不同了。營火旁圍滿了人，有人在低聲祈禱。', textEn: 'You return to camp — the atmosphere is completely different. People crowd the campfire, some praying softly.', delay: 2500 });
      steps.push({ tag: '感知', tagColor: 'tag-sense', text: '有人朝你跑來：「英雄回來了！」「你救了他！你真的把他救回來了！」', textEn: 'Someone runs to you: "The hero is back!" "You saved him! You actually brought him back!"', delay: 2800 });
    } else if (state.flags.r2ChengAwake) {
      steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你回到了倖存者營地。營火依舊燃燒著，氣氛比以前溫暖了許多——承鋼的歸來改變了一切。', textEn: 'You return to the survivor camp. The campfire burns warmly — Cheng Gang\'s return has changed everything.', delay: 2200 });
    } else if (state.flags.r2BossSpared) {
      steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你回到了倖存者營地。承鋼還在昏迷中，鐵霜一直守在他身邊。', textEn: 'You return to the survivor camp. Cheng Gang is still unconscious, Iron Frost keeping vigil.', delay: 2200 });
    } else {
      steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你回到了倖存者營地。營火依舊燃燒著，鐵霜向你點了點頭。', textEn: 'You return to the survivor camp. The campfire still burns. Iron Frost nods at you.', delay: 2000 });
    }
  }
  autoExplore(steps, (function() {
    var c = [];
    if (state.flags.r2BossSpared && !state.flags.r2ReunionSeen) {
      c.push({ text: '去看鐵霜和被救出的男人', textEn: 'Visit Iron Frost and the rescued man', action: () => loadNode('r2_camp_chief') });
    } else if (state.flags.r2BossSpared && state.flags.r2ReunionSeen && !state.flags.r2ChengAwake) {
      c.push({ text: '看看承鋼醒了沒有', textEn: 'Check if Cheng Gang is awake', action: () => loadNode('r2_camp_chief') });
    } else {
      c.push({ text: '和鐵霜說話', textEn: 'Talk to Iron Frost', action: () => loadNode('r2_camp_chief') });
    }
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

  // NG+ memory: recognizing Iron Frost
  if (state.flags.ngPlus) {
    steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '你一踏進營地，腦海中忽然浮現出一個畫面——這個高大的女人，石錘，還有那隻石化的手臂。', textEn: 'The moment you step into camp, a vision flashes — this tall woman, her stone hammer, that petrified arm.', delay: 2500 });
    steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '你叫得出她的名字。鐵霜。但你不知道為什麼。', textEn: 'You know her name. Iron Frost. But you don\'t know why.', delay: 2200 });
  }

  // ── Phase 1: First reunion — Iron Frost tenderly caring for unconscious man ──
  if (state.flags.r2BossSpared && !state.flags.r2ReunionSeen) {
    state.flags.r2ReunionSeen = true;
    steps.push({ art: `<pre class="ascii-art gold">
      ˚  ·  ˚  重逢  ˚  ·  ˚

          ╱─────────╲
         │  ◉     ◉  │
         │  ─══════─  │      ╱───────╲
         │   ╲▽▽▽╱   │     │ ─   ─  │
          ╲─────────╱      │  ───   │
  █████████│         │      │  ╲─╱   │
 ██████████├────╮╭───┤      ╲───────╱
 ██████████│    ││   │──────│       │
  █████████│    ╰╯   │      │  ░░░  │
    ·█·█·█·│  ╭────╮ │      │  ░░░  │
     鐵 霜  │  │ 他 │ │       昏迷中
             ╰──────╯
</pre>`, artEn: `<pre class="ascii-art gold">
      ˚  ·  ˚  Reunion  ˚  ·  ˚

          ╱─────────╲
         │  ◉     ◉  │
         │  ─══════─  │      ╱───────╲
         │   ╲▽▽▽╱   │     │ ─   ─  │
          ╲─────────╱      │  ───   │
  █████████│         │      │  ╲─╱   │
 ██████████├────╮╭───┤      ╲───────╱
 ██████████│    ││   │──────│       │
  █████████│    ╰╯   │      │  ░░░  │
    ·█·█·█·│  ╭────╮ │      │  ░░░  │
   Iron     │  │Him │ │    Unconscious
   Frost     ╰──────╯
</pre>`, delay: 800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', html: '你走進鐵霜的帳篷——她正跪在一張行軍床邊。床上躺著一個瘦弱的男人，身上裹著毛毯，雙眼緊閉，臉色蒼白如紙。', htmlEn: 'You enter Iron Frost\'s tent — she kneels beside a cot. A frail man lies wrapped in blankets, eyes shut, face white as paper.', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '鐵霜沒有回頭。她的石化左手輕輕捧著男人的手，粗糙的石指與他骨瘦的手指交纏在一起。', textEn: 'Iron Frost doesn\'t look back. Her petrified left hand gently cradles the man\'s hand, rough stone fingers intertwined with his gaunt ones.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她的右手沾著藥膏，正一寸一寸地塗在他手臂上殘留的石化紋路上。每一下都很慢，像是怕弄碎什麼。', textEn: 'Her right hand, smeared with salve, traces the residual petrification lines on his arm. Each stroke is slow, as if afraid of breaking something.', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「……他叫<b>承鋼</b>。」鐵霜的聲音很輕，像是怕吵醒他。「三號戰甲的駕駛員。」', htmlEn: '"...His name is <b>Cheng Gang</b>." Iron Frost\'s voice is barely a whisper, afraid to wake him. "Pilot of Mech Unit No.3."', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她低頭，額頭輕輕靠在男人的手背上。那個動作太過私密——你幾乎覺得不該看到。', textEn: 'She lowers her head, resting her forehead against the back of his hand. The gesture is so intimate — you feel you shouldn\'t be watching.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「三年了。」她的肩膀微微發抖。「三年來，每次路過那條通道，我都能聽到他在裡面哭。」', textEn: '"Three years." Her shoulders tremble. "For three years, every time I passed that shaft, I could hear him crying inside."', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「所有人都說他已經死了，那只是石化巨獸的回聲。但我知道不是——」', textEn: '"Everyone said he was dead, that it was just the colossus echoing. But I knew it wasn\'t—"', delay: 2800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她用石化的指尖輕輕撥開男人額前的頭髮。那隻能劈碎岩石的手，此刻溫柔得像在觸碰蝴蝶的翅膀。', textEn: 'She brushes the hair from his forehead with her petrified fingertips. The hand that can shatter rock now moves as gently as touching butterfly wings.', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「他的體溫在回來了。」鐵霜終於抬頭看你——這個鐵一般的女人，臉上滿是淚痕。', textEn: '"His warmth is returning." Iron Frost finally looks at you — this iron woman, her face streaked with tears.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「你沒有殺死他。你<b>把他喚醒了</b>。」她深吸一口氣。「這份恩情——我不知道該怎麼還。」', htmlEn: '"You didn\'t kill him. You <b>awakened him</b>." She takes a deep breath. "This debt — I don\'t know how to repay."', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '男人在昏迷中發出了一聲低吟。鐵霜立刻回過頭，用手指撫過他的嘴唇——像是在確認那一聲是真的。', textEn: 'The man lets out a soft moan in his sleep. Iron Frost immediately turns back, fingers brushing his lips — as if confirming that sound was real.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「他還需要休息。」她輕聲說，聲音裡帶著久違的柔軟。「過一段時間再來吧——等他醒了。」', textEn: '"He needs rest." She whispers, her voice carrying a softness long forgotten. "Come back later — when he wakes."', delay: 3000 });

    autoExplore(steps, [
      { text: '（悄悄離開帳篷）', textEn: '(Quietly leave the tent)', action: () => loadNode('r2_camp') },
    ], { label: L('重逢', 'Reunion') });
    return;
  }

  // ── Phase 2: Return later — Cheng Gang awakens, gives passcode ──
  if (state.flags.r2BossSpared && state.flags.r2ReunionSeen && !state.flags.r2ChengAwake) {
    state.flags.r2ChengAwake = true;
    steps.push({ art: npcPortrait.art('cheng', { subtitle: '甦醒' }) || `<pre class="ascii-art gold">
      ˚  ·  ˚  甦醒  ˚  ·  ˚

          ╱─────────╲
         │  ◉     ◉  │       ╱───────╲
         │  ─══════─  │     │ ◦   ◦  │
         │   ╲═══╱   │     │  ═══   │
          ╲─────────╱      │  ╲▽╱   │
  █████████│         │      ╲───────╱
 ██████████├─────────┤──────│       │
 ██████████│ ░░░░░░░ │      │  ╱╲   │
  █████████│ ░░░░░░░ │      │ ╱  ╲  │
    ·█·█·█·│         │      │╱    ╲ │
     鐵 霜              承鋼（已甦醒）
</pre>`, artEn: npcPortrait.art('cheng', { subtitle: 'Awakening' }) || `<pre class="ascii-art gold">
      ˚  ·  ˚  Awakening  ˚  ·  ˚

          ╱─────────╲
         │  ◉     ◉  │       ╱───────╲
         │  ─══════─  │     │ ◦   ◦  │
         │   ╲═══╱   │     │  ═══   │
          ╲─────────╱      │  ╲▽╱   │
  █████████│         │      ╲───────╱
 ██████████├─────────┤──────│       │
 ██████████│ ░░░░░░░ │      │  ╱╲   │
  █████████│ ░░░░░░░ │      │ ╱  ╲  │
    ·█·█·█·│         │      │╱    ╲ │
   Iron Frost        Cheng Gang (Awake)
</pre>`, delay: 800 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你掀開帳篷——承鋼半坐在床上，背後靠著捲起的毛毯。即使剛從三年的石化中甦醒，他的輪廓依然銳利得像刀削：高挺的鼻樑，深邃的眉骨，下顎線條硬朗而分明。', textEn: 'You lift the tent flap — Cheng Gang sits propped up in bed, blankets rolled behind him. Even after three years of petrification, his features remain sharp as if chiseled: a straight nose, deep-set brows, a jawline hard and defined.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '他的眼睛睜開了——那是一雙琥珀色的眼睛，雖然依舊虛弱，但目光清澈而堅定。石化褪去後殘留的灰色紋路沿著他的頸側蔓延到鎖骨，像一幅奇異的刺青。', textEn: 'His eyes are open — amber, still weak but clear and resolute. The grey veins lingering from petrification trace along his neck to the collarbone, like a strange tattoo.', delay: 3200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '鐵霜站在旁邊，手裡端著一碗清水。她看見你進來，難得地露出了一個笑容。', textEn: 'Iron Frost stands beside him, holding a bowl of water. She sees you enter and, for once, smiles.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '承鋼看向你，聲音低沉而沙啞——那種沙啞反而讓他的聲音帶上了一種磁性：「……你就是那個用共鳴把我喚回來的人？」', htmlEn: 'Cheng Gang looks at you, voice low and hoarse — the kind of hoarseness that lends his tone a certain magnetism: "...You\'re the one who used resonance to call me back?"', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我在石頭裡面……做了三年的噩夢。」他低下頭，修長的手指微微發抖——那雙手骨節分明，即使瘦削也能看出曾經握過操縱桿的力量。「我以為永遠出不來了。」', textEn: '"I was trapped in stone... three years of nightmares." He lowers his head, long fingers trembling — those hands, even thin, still show the strength of one who once gripped a mech\'s controls. "I thought I\'d never get out."', delay: 3200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '鐵霜走過去把水碗放到他手中，石化的手指在他手背上停留了一瞬——但很快收回。', textEn: 'Iron Frost walks over and places the bowl in his hands, her petrified fingers lingering on his knuckles for a moment — then quickly withdrawing.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '承鋼喝了一口水，然後看著你：「鐵霜告訴我你需要往上走。我有一個東西——也許能幫到你。」', htmlEn: 'Cheng Gang takes a sip, then looks at you: "Iron Frost told me you need to go up. I have something — it might help."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「被石化之前，我一直在探索採石場西側的<b>古代遺跡</b>。那裡有一條通道——是石化瘟疫爆發前的文明留下的。」', htmlEn: '"Before I was petrified, I explored the <b>ancient ruins</b> on the quarry\'s west side. There\'s a passage there — left by the civilization before the petrification plague."', delay: 3500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「通道入口有一扇刻著齒輪紋樣的石門。需要輸入通行密碼才能開啟。」', textEn: '"The passage entrance has a stone door carved with gear patterns. It requires a passcode to open."', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '他湊近你，壓低了聲音：「密碼是——<b>『巨神之眼』</b>。在門前的符文板上按照齒輪的順序輸入就行。」', htmlEn: 'He leans closer, lowering his voice: "The passcode is — <b>\'Eye of the Colossus\'</b>. Enter it on the rune panel at the door, following the gear sequence."', delay: 3500 });
    steps.push({ tag: '物品', tagColor: 'tag-item', text: '「裡面有很多古代的東西……我沒來得及探索完。也許——你能發現石化瘟疫的真相。」', textEn: '"Inside are many ancient things... I never finished exploring. Perhaps — you\'ll uncover the truth about the petrification plague."', delay: 3000,
      effect: function() { addItem(L('古代密道通行碼', 'Ancient Passage Code')); sfx.item(); notify(L('獲得「古代密道通行碼」', 'Obtained "Ancient Passage Code"')); }
    });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '鐵霜站在一旁，石化的手臂環在胸前。她看著承鋼的眼神——你第一次在那雙鐵灰色的眼睛裡看到了柔光。', textEn: 'Iron Frost stands beside them, petrified arm crossed over her chest. The way she looks at Cheng Gang — for the first time, you see softness in those iron-grey eyes.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「去吧。」鐵霜說。「密道入口在採石場西側的岩壁上。小心裡面的東西——那些古代防禦系統可能還在運作。」', textEn: '"Go." Iron Frost says. "The passage is on the quarry\'s west wall. Be careful — the ancient defense systems may still be active."', delay: 3000 });

    autoExplore(steps, [
      { text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') },
    ], { label: L('承鋼甦醒', 'Cheng Gang Awakens') });
    return;
  }

  if (!state.flags.r2ChiefTalked) {
    state.flags.r2ChiefTalked = true;
    steps.push({ art: npcPortrait.art('frost', { subtitle: '營地隊長' }) || `<pre class="ascii-art">
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
</pre>`, artEn: npcPortrait.art('frost', { subtitle: 'Leader' }) || `<pre class="ascii-art">
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
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '鐵霜說到這裡時停了下來。她的右手不自覺地握緊了——不是握石錘的那種握法，而是像在握住某個人的手。', textEn: 'Iron Frost pauses here. Her right hand clenches unconsciously — not the way she grips her hammer, but as if holding someone\'s hand.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「他叫承鋼。」她的聲音突然低了下去。「他是……我很重要的人。<b>我相信他還在那頭巨獸裡面。還活著。</b>」', htmlEn: '"His name was Cheng Gang." Her voice drops. "He was... someone very important to me. <b>I believe he\'s still inside that colossus. Still alive.</b>"', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她抬起頭看著你，鐵灰色的眼睛裡閃過一絲從未見過的脆弱：「如果有辦法的話——拜託你，不要殺他。」', textEn: 'She looks up at you, a flash of vulnerability you\'ve never seen in those iron-grey eyes: "If there\'s a way — please, don\'t kill him."', delay: 3000 });
  } else if (state.flags.r2ChengAwake) {
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '承鋼靠在床上，鐵霜坐在旁邊幫他換藥。看見你進來，兩人都抬起了頭。', textEn: 'Cheng Gang leans in bed while Iron Frost changes his dressings. Both look up as you enter.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '承鋼朝你點了點頭：「找到密道了嗎？小心裡面。」', textEn: 'Cheng Gang nods at you: "Found the passage? Be careful in there."', delay: 2000 });
  } else if (state.flags.r2BossSpared) {
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '鐵霜跪在床邊，正在給承鋼擦身。男人仍在昏迷中，但臉色比之前好了一些。', textEn: 'Iron Frost kneels by the bed, wiping Cheng Gang down. He\'s still unconscious, but his color looks better.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '她頭也不回地說：「他還沒醒。再等等吧。」', textEn: 'Without turning, she says: "He hasn\'t woken yet. Give it more time."', delay: 2200 });
  } else {
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '鐵霜看著營火：「準備好了就告訴我。我們會一起面對那頭巨獸。」', textEn: 'Iron Frost gazes at the fire: "Tell me when you\'re ready. We\'ll face that colossus together."', delay: 2500 });
  }
  autoExplore(steps, (function() {
    var c = [];
    if (state.flags.r2MachineCore && !state.flags.r2BossDefeated) {
      c.push({ text: '「我準備好了，一起去挑戰巨獸。」', textEn: '"I\'m ready. Let\'s challenge the colossus."', action: () => loadNode('r2_boss_prep') });
    }
    if (state.flags.r2ChengAwake && (state.flags.r2ChengTrainCount || 0) < 3) {
      c.push({ text: '◆ 和承鋼一起訓練', textEn: '◆ Train with Cheng Gang', action: () => loadNode('r2_cheng_train') });
    }
    // Sidequest: Frost's past (requires first meeting done)
    if (state.flags.r2CampVisited && !state.flags.r2FrostPast) {
      c.push({ text: '鐵霜，你是怎麼到這裡的？', textEn: 'Frost, how did you end up here?', action: () => loadNode('r2_frost_past') });
    }
    // Sidequest: Strange soldier (requires past revealed)
    if (state.flags.r2FrostPast && !state.flags.r2FrostSoldier) {
      c.push({ text: '營地外有人要見鐵霜……', textEn: 'Someone outside wants to see Frost...', action: () => loadNode('r2_frost_soldier') });
    }
    // Sidequest: Frost's letter (requires soldier resolved)
    if (state.flags.r2FrostSoldier && !state.flags.r2FrostLetter) {
      c.push({ text: '鐵霜在寫什麼……', textEn: 'Frost is writing something...', action: () => loadNode('r2_frost_letter') });
    }
    c.push({ text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') });
    return c;
  })(), { label: L('與鐵霜對話', 'Talking to Iron Frost') });
});

// ═══════════════════════════════════════════════════
//  NPC Sidequest — 鐵霜 (Iron Frost) Past
// ═══════════════════════════════════════════════════

// --- r2_frost_past: Frost reveals her surface military past ---
registerNode('r2_frost_past', () => {
  state.flags.r2FrostPast = true;
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('鐵霜聽到你的問題，沉默了。營火的光在她鐵灰色的眼睛裡跳動。',
             'Iron Frost goes silent at your question. Firelight dances in her iron-grey eyes.'),
      delay: 2500 },
    { art: npcPortrait.art('frost') || `<pre class="ascii-art">
       ·  ˚  鐵霜 — 營火邊  ˚  ·
              ╱═══╲
             │ ─  ─ │
             │  ──  │
              ╲═══╱
       ██████████│░░░░░░░░
       ██████████│░░░░░░░░
       ██████████│░░░░░░░░
        █████████│░░░░░░░
        ·█·█·█·  │  ⚒
      石化手臂   │  戰錘
</pre>`, artEn: npcPortrait.art('frost') || `<pre class="ascii-art">
    ·  ˚  Iron Frost — By the fire  ˚  ·
              ╱═══╲
             │ ─  ─ │
             │  ──  │
              ╲═══╱
       ██████████│░░░░░░░░
       ██████████│░░░░░░░░
       ██████████│░░░░░░░░
        █████████│░░░░░░░
        ·█·█·█·  │  ⚒
     Petrified   │ Hammer
</pre>`, delay: 800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我不是地底出生的。」她終於開口。「我是地表軍隊的——第七師團，邊境守備隊。」',
             '"I wasn\'t born underground." She finally speaks. "I was surface military — Seventh Division, border garrison."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「指揮官。帶著三百人。」她用石化的手捏了捏太陽穴。「那時候……地表也不太平。」',
             '"Commander. Three hundred under me." She rubs her temple with her petrified hand. "The surface wasn\'t peaceful either, back then."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「有一天，上面的人下了一道命令——清剿南山村。說村民勾結叛軍。」鐵霜的語氣平淡得可怕。',
             '"One day, the brass sent an order — purge Southhill Village. Villagers accused of harboring rebels." Iron Frost\'s tone is terrifyingly flat.'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我帶隊去了。」她頓了頓。「到了村口，看到的是老人、女人、孩子。沒有叛軍。」',
             '"I led the squad there." She pauses. "At the village gate — the elderly, women, children. No rebels."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我拒絕了。帶著部隊撤回了駐地。」',
             '"I refused. Pulled my troops back to base."'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「三天後——軍事法庭。抗命罪。流放地底。」她看了看自己石化的左手。「三百人的命，就因為我一個人的決定。」',
             '"Three days later — court-martial. Insubordination. Exiled underground." She looks at her petrified left hand. "Three hundred lives, changed by one person\'s decision."'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「部下們有的跟我一起被流放，有的被打散編入其他部隊。」她閉上了眼。「那個村子——後來還是被清了。換了一個聽話的人去。」',
             '"Some of my soldiers followed me into exile. Others were scattered to other units." She closes her eyes. "That village — they sent someone obedient in the end."'),
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('營火噼啪作響。鐵霜睜開眼，目光比營火更亮。',
             'The fire crackles. Iron Frost opens her eyes, their light fiercer than the flames.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我不後悔。」她說。「到了地底之後，我找到了承鋼。找到了這些人。這就夠了。」',
             '"I don\'t regret it." She says. "After coming underground, I found Cheng Gang. Found these people. That\'s enough."'),
      delay: 3000 },
  ], [
    { text: '你做了對的事', textEn: 'You did the right thing',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('鐵霜看了你一眼。嘴角微微動了動——是她最接近笑容的表情。',
                   'Iron Frost glances at you. The corner of her mouth twitches — the closest thing to a smile she has.'),
            delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……謝了。」她轉過頭去。「很久沒有人這麼說了。」',
                   '"...Thanks." She turns away. "It\'s been a long time since anyone said that."'),
            delay: 2500 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('鐵霜好感 ↑↑ | 經驗 +8', 'Iron Frost bond ↑↑ | XP +8'),
            delay: 1500, effect: () => gainXp(8) },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r2_camp_chief') },
        ], { label: L('鐵霜的過去', 'Iron Frost\'s past') });
      }},
    { text: '返回', textEn: 'Back', action: () => loadNode('r2_camp_chief') },
  ], { label: L('鐵霜的過去', 'Iron Frost\'s past') });
});

// --- r2_frost_soldier: A survivor recognizes Frost ---
registerNode('r2_frost_soldier', () => {
  state.flags.r2FrostSoldier = true;
  autoExplore([
    { tag: '緊張', tagColor: 'tag-warn',
      text: L('你回營地時，看到入口處站著一個陌生男人——穿著破爛的軍裝，滿身石化紋路，右眼完全失明。',
             'Returning to camp, you find a stranger at the entrance — tattered military uniform, petrification lines everywhere, right eye fully blind.'),
      delay: 3000 },
    { art: `<pre class="ascii-art">
    ╔═══════════════════════════════╗
    ║     陌生士兵                  ║
    ╠═══════════════════════════════╣
    ║         ╱══╲                  ║
    ║        │╳  ─│  ← 獨眼        ║
    ║        │ ── │                 ║
    ║         ╲══╱                  ║
    ║        ╱▓▓▓▓╲  ← 破舊軍裝   ║
    ║       │▓▓▓▓▓▓│               ║
    ║       │▓ ░░ ▓│  ← 石化紋路   ║
    ║        ╱    ╲                 ║
    ║       ╱      ╲               ║
    ║                               ║
    ║   「……鐵指揮？是你嗎？」      ║
    ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
    ╔═══════════════════════════════╗
    ║     UNKNOWN SOLDIER          ║
    ╠═══════════════════════════════╣
    ║         ╱══╲                  ║
    ║        │╳  ─│  ← one eye     ║
    ║        │ ── │                 ║
    ║         ╲══╱                  ║
    ║        ╱▓▓▓▓╲  ← worn uniform║
    ║       │▓▓▓▓▓▓│               ║
    ║       │▓ ░░ ▓│  ← petri-veins║
    ║        ╱    ╲                 ║
    ║       ╱      ╲               ║
    ║                               ║
    ║   "...Commander Frost?"      ║
    ╚═══════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-explore',
      text: L('他看到鐵霜從帳篷裡走出來，整個人僵住了。然後他的嘴唇開始顫抖。',
             'He sees Iron Frost emerge from her tent and freezes. Then his lips begin to tremble.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「鐵指揮……？真的是你？」他聲音沙啞。「我是方石——第七師團，第二連……」',
             '"Commander Frost...? It\'s really you?" His voice cracks. "I\'m Fang Shi — Seventh Division, Second Company..."'),
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('鐵霜的表情變了。你從未見過她臉上出現這種表情——震驚、愧疚、和一絲……恐懼。',
             'Iron Frost\'s expression shifts. You\'ve never seen her look like this — shock, guilt, and a trace of... fear.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「方石。」鐵霜的聲音很低。「你——你怎麼在這裡？」',
             '"Fang Shi." Iron Frost\'s voice is low. "You — how are you here?"'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「跟您一樣。被流放到地底。」方石苦笑。「因為我跟著您拒絕了。上面把我們這些人都打散了——有的流放，有的失蹤。」',
             '"Same as you. Exiled underground." Fang Shi smiles bitterly. "Because I followed your refusal. They scattered all of us — some exiled, some disappeared."'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我在下面活了三年。聽說採石場有一個營地——就一路爬上來了。」他看著鐵霜。「我不怪您，指揮。您做的是對的。」',
             '"I survived three years down here. Heard there was a camp at the quarry — climbed all the way up." He looks at Frost. "I don\'t blame you, Commander. You did the right thing."'),
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('鐵霜站在原地，一動不動。然後她走上前，伸出完好的右手——用力握住了方石的肩膀。',
             'Iron Frost stands still for a long moment. Then she steps forward and grips Fang Shi\'s shoulder with her good right hand.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……歡迎回來，方石。」她的聲音在微微發抖。「這裡有你的位置。」',
             '"...Welcome back, Fang Shi." Her voice trembles faintly. "There\'s a place for you here."'),
      delay: 3000 },
    { tag: '效果', tagColor: 'tag-system',
      text: L('鐵霜好感 ↑↑ | 經驗 +10', 'Iron Frost bond ↑↑ | XP +10'),
      delay: 1500, effect: () => { gainXp(10); state.flags.r2FrostSoldierSaved = true; } },
  ], [
    { text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') },
  ], { label: L('舊部重逢', 'Reunion with a soldier') });
});

// --- r2_frost_letter: Frost writes a letter for River City ---
registerNode('r2_frost_letter', () => {
  state.flags.r2FrostLetter = true;
  autoExplore([
    { tag: '感知', tagColor: 'tag-sense',
      text: L('你注意到鐵霜坐在帳篷角落，借著燭光在寫什麼。她石化的左手壓著紙角，右手握筆的姿勢異常認真。',
             'You notice Iron Frost sitting in a tent corner, writing by candlelight. Her petrified left hand holds the paper\'s edge, her right grips the pen with unusual care.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「別偷看。」鐵霜沒抬頭。但過了一會兒，她嘆了口氣，把紙轉向你。',
             '"Don\'t peek." Iron Frost doesn\'t look up. But after a moment, she sighs and turns the paper toward you.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……是寫給河城的信。你要上去，對吧？幫我帶一封。」',
             '"...It\'s a letter for River City. You\'re going up, right? Take it for me."'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「信是寫給議會的。內容是：採石場營地有十二個倖存者，加上方石十三個。我們需要物資和撤離支援。」',
             '"It\'s for the Council. Contents: the quarry camp has twelve survivors, thirteen with Fang Shi. We need supplies and evacuation support."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('鐵霜頓了頓。「還有一段私人的。」她的鐵灰色眼睛閃了閃。',
             'Iron Frost pauses. "And something personal." Her iron-grey eyes flash.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「信的最後寫了——如果議會裡有人記得第七師團的話，請查一下南山村事件的真相。三百個被流放的人，不該被遺忘。」',
             '"At the end — if anyone on the Council remembers the Seventh Division, please investigate the truth about Southhill Village. Three hundred exiled people shouldn\'t be forgotten."'),
      delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('她把信折好，用蠟封上。蠟封上壓了一個記號——是一個拳頭的形狀。',
             'She folds the letter and seals it with wax. The seal bears a mark — the shape of a fist.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「這是第七師團的印記。如果議會裡有人認出來——他們會知道這封信是真的。」',
             '"This is the Seventh Division\'s mark. If someone on the Council recognizes it — they\'ll know the letter is genuine."'),
      delay: 3000 },
  ], [
    { text: '我一定送到', textEn: 'I\'ll deliver it',
      action: () => {
        state.flags.r2FrostLetterCarried = true;
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('鐵霜把信遞給你。她的目光異常溫和。',
                   'Iron Frost hands you the letter. Her gaze is unusually gentle.'),
            delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「拜託你了。」她說。「這封信不只是為了營地——是為了那三百個被丟在黑暗裡的人。」',
                   '"I\'m counting on you." She says. "This letter isn\'t just for the camp — it\'s for the three hundred left in the dark."'),
            delay: 3200 },
          { tag: '物品', tagColor: 'tag-item',
            html: L('獲得「<b>鐵霜的密封信</b>」', 'Acquired "<b>Iron Frost\'s Sealed Letter</b>"'),
            delay: 2000, effect: () => addItem(L('鐵霜的密封信', 'Iron Frost\'s Sealed Letter')) },
          { tag: '效果', tagColor: 'tag-system',
            text: L('鐵霜好感 ↑↑↑ | 經驗 +12 | 敏捷 +1', 'Iron Frost bond ↑↑↑ | XP +12 | AGI +1'),
            delay: 1500, effect: () => {
              gainXp(12);
              changeStat('agi', 1);
            }},
          { tag: '系統', tagColor: 'tag-system',
            text: L('（此信將影響河城議會的態度）', '(This letter will affect the River City Council\'s attitude)'),
            delay: 2000 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r2_camp') },
        ], { label: L('鐵霜的信', 'Iron Frost\'s letter') });
      }},
    { text: '返回', textEn: 'Back', action: () => loadNode('r2_camp') },
  ], { label: L('鐵霜的信', 'Iron Frost\'s letter') });
});

registerNode('r2_camp_smith', () => {
  var steps = [
    { art: npcPortrait.art('cast', { subtitle: '鍛匠' }) || `<pre class="ascii-art">
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
</pre>`, artEn: npcPortrait.art('cast', { subtitle: 'Blacksmith' }) || `<pre class="ascii-art">
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
    { art: npcPortrait.art('dew', { subtitle: '醫師' }) || `<pre class="ascii-art cyan">
       ·  ˚  清露 — 醫師  ˚  ·
           ╭──·˚ ✚ ˚·──╮
          ╱   ˚·   ·˚   ╲
         │  ◠  ˚·˚  ◠    │
         │   ╲ 眼神 ╱     │← 專注的眼
         │  ╭═══════════╮ │
         │  │░░░░░░░░░░░│ │← 面罩
          ╲ ╰═══════════╯╱
       ─·──╲───────────╱──·─
          ╱──┤         ├──╲
         ╱   │  ✚   ✚  │   ╲
        ╱    │         │    ╲
       │  ╱──┤         ├──╲  │
       │ ╱   │         │  ░╲ │← 手腕灰紋
        ╲  ╭─┴────┬────┴─╮ ╱
         ·─│ ◇藥箱◇│˚手套˚│·
           ╰──────┴──────╯
</pre>`, artEn: npcPortrait.art('dew', { subtitle: 'Medic' }) || `<pre class="ascii-art cyan">
      ·  ˚  Dew — Medic  ˚  ·
           ╭──·˚ ✚ ˚·──╮
          ╱   ˚·   ·˚   ╲
         │  ◠  ˚·˚  ◠    │
         │   ╲ gaze ╱     │← focused eyes
         │  ╭═══════════╮ │
         │  │░░░░░░░░░░░│ │← mask
          ╲ ╰═══════════╯╱
       ─·──╲───────────╱──·─
          ╱──┤         ├──╲
         ╱   │  ✚   ✚  │   ╲
        ╱    │         │    ╲
       │  ╱──┤         ├──╲  │
       │ ╱   │         │  ░╲ │← grey wrist
        ╲  ╭─┴────┬────┴─╮ ╱
         ·─│◇Kit ◇│˚Glove│·
           ╰──────┴──────╯
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
  // NG+ memory: déjà vu before boss
  var ngBossSteps = [];
  if (state.flags.ngPlus) {
    ngBossSteps.push({ tag: '記憶', tagColor: 'tag-petri', text: '巨像。你在夢裡見過它。那不是夢——是上一世的記憶。', textEn: 'The Colossus. You\'ve seen it in dreams. Not dreams — memories of a past life.', delay: 2500 });
    ngBossSteps.push({ tag: '記憶', tagColor: 'tag-petri', text: '你知道它的弱點在哪裡。你知道它會在第幾回合暴怒。這次，你做好了準備。', textEn: 'You know where its weakness lies. You know which round it rages. This time, you\'re prepared.', delay: 2800 });
  }
  autoExplore(ngBossSteps.concat([
    { art: npcPortrait.art('frost', { subtitle: '營地隊長' }), artEn: npcPortrait.art('frost', { subtitle: 'Leader' }), delay: 800 },
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
    { tag: '感知', tagColor: 'tag-sense', text: '鐵霜頓了一下，石化的手指微微發顫。她別過臉，但你還是聽見了她壓低的聲音——', textEn: 'Iron Frost hesitates, her petrified fingers trembling slightly. She turns away, but you still catch her lowered voice —', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', html: '「……<b>如果你能在戰鬥中跟他交流，讓他想起自己是誰——也許就不用殺他。</b>拜託了。」', htmlEn: '"...<b>If you can commune with him during the fight, help him remember who he is — maybe you won\'t have to kill him.</b> Please."', delay: 3500 },
    { tag: '情報', tagColor: 'tag-info', text: '「但在那之前，你得先打穿它的護甲……準備好了嗎？」', textEn: '"But first you need to break through its armor... Are you ready?"', delay: 2500 },
  ]).concat(yingSteps), [
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
        if (state.flags._lastCombatSpared) {
          state.flags.r2BossSpared = true;
        }
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
      { tag: '環境', tagColor: 'tag-system',
        text: state.flags.r2BossSpared
          ? '石化巨像的殘骸散落在通道前。那個困在裡面的男人已經被安全救出。'
          : '石化巨像已經倒下。通往上升通道的路終於暢通了。',
        textEn: state.flags.r2BossSpared
          ? 'The colossus\'s remains lie scattered before the shaft. The man trapped within has been safely rescued.'
          : 'The Petrified Colossus has fallen. The path to the ascent shaft is finally clear.',
        delay: 2000 },
      { tag: '行動', tagColor: 'tag-move', text: '你將機甲控制鍵插入通道閘門的控制台。', textEn: 'You insert the mech control key into the shaft gate\'s control panel.', delay: 2200 },
      { tag: '環境', tagColor: 'tag-system', text: '齒輪轉動的聲音在岩壁中迴盪——厚重的金屬閘門緩緩升起。', textEn: 'Gears grind within the rock — the heavy metal gate slowly rises.', delay: 2500 },
      { tag: '感知', tagColor: 'tag-sense', text: '閘門後是一條向上延伸的斜坡隧道。你能感覺到……來自上方的風。', textEn: 'Beyond the gate, a sloped tunnel ascends. You can feel... wind from above.', delay: 2500 },
      { tag: '情報', tagColor: 'tag-info', html: state.flags.r2BossSpared
        ? '鐵霜的眼眶還是紅的，但她的語氣堅定：「前面就是<b>河城渡口</b>——地底世界的交通樞紐。你去吧。承鋼……我會照顧好他的。」'
        : '鐵霜拍了拍你的肩膀：「前面就是<b>河城渡口</b>——地底世界的交通樞紐。如果還有人類社會存在的話，就在那裡。」',
        htmlEn: state.flags.r2BossSpared
        ? 'Iron Frost\'s eyes are still red, but her voice is firm: "Ahead lies the <b>River City Ferry</b> — the underground world\'s transport hub. Go. Cheng Gang... I\'ll take care of him."'
        : 'Iron Frost pats your shoulder: "Ahead lies the <b>River City Ferry</b> — the underground world\'s transport hub. If human society still exists, it\'s there."',
        delay: 3000 },
      { tag: '情報', tagColor: 'tag-info', text: state.flags.r2BossSpared
        ? '「謝謝你——真的。」她的聲音微微發顫。「我會帶大家跟上來的。」'
        : '「我會帶大家跟上來的。你先走吧——路上小心。」',
        textEn: state.flags.r2BossSpared
        ? '"Thank you — truly." Her voice trembles slightly. "I\'ll bring everyone along."'
        : '"I\'ll bring everyone along. Go ahead — be careful."',
        delay: 2500 },
    ], (function() {
      var c = [];
      if (state.flags.r2BossSpared) {
        c.push({ text: '先回營地看看承鋼的情況', textEn: 'Return to camp to check on Cheng Gang first', action: () => loadNode('r2_camp') });
      }
      c.push({ text: '踏入上升通道，前往河城渡口', textEn: 'Enter the shaft, head for River City Ferry', action: () => {
        changeHp(25);
        changePetri(-8);
        notify(L('HP +25，石化度 -8%', 'HP +25, Petri -8%'));
        loadNode('r3_start');
      }});
      c.push({ text: '留下來做最後的準備', textEn: 'Stay to make final preparations', action: () => loadNode('r2_look') });
      return c;
    })(), { label: L('開啟上升通道', 'Opening ascent shaft') });
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

  // NG+ memory: deeper connection with Ying
  if (state.flags.ngPlus && !state.flags._r2YingNgTalk) {
    state.flags._r2YingNgTalk = true;
    steps.push({ tag: '記憶', tagColor: 'tag-petri', text: '看著螢翻閱筆記本的側臉，一種無法言說的熟悉感湧上心頭。你記得這個畫面——' + yP + '寫字時微微歪頭的習慣，筆尖在紙上的沙沙聲。', textEn: 'Watching Ying flip through ' + yPo + ' notebook in profile, an inexplicable familiarity surges up. You remember this — the way ' + yP + ' tilts ' + yPo + ' head while writing, the scratch of pen on paper.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '螢忽然停下筆，看向你。「你又在用那種奇怪的眼神看我了。」', textEn: 'Ying suddenly stops writing and looks at you. "You\'re looking at me with that strange expression again."', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你移開視線。有些話還沒到能說出口的時候。', textEn: 'You look away. Some things aren\'t ready to be spoken yet.', delay: 2200 });
  }
  steps.push({ art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
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
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
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
    if (state.flags.r2YingLore3 && state.flags.r2YingSketch && !state.flags.r2YingSecret) {
      c.push({ text: '螢……你的手冊裡還藏了什麼？', textEn: 'Ying... what else are you hiding in that notebook?', action: () => loadNode('r2_ying_secret') });
    }
    if (state.flags.r2CampVisited && !state.flags.r2YingNight) {
      c.push({ text: '要不要一起去營地休息？', textEn: 'Want to rest at the camp together?', action: () => loadNode('r2_ying_night') });
    }
    if (state.flags.r2YingNight && !state.flags.r2YingNightmare) {
      c.push({ text: '螢，你昨晚睡得好嗎？', textEn: 'Ying, did you sleep well last night?', action: () => loadNode('r2_ying_nightmare') });
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
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
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
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
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
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
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
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
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
    { tag: '情報', tagColor: 'tag-info', text: '「三百年的石化瘟疫史。從第一任爐灶' + (isMale ? '少年' : '少女') + '到最後一個。」', textEn: '"Three hundred years of the Stone Plague. From the first ' + (isMale ? 'Hearth-Youth' : 'Hearth-Maiden') + ' to the last."', delay: 2500 },
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
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
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
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
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

// ── Ying: nightmare comfort scene (deepening dependence) ──
registerNode('r2_ying_nightmare', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  state.flags.r2YingNightmare = true;

  autoExplore([
    { tag: '環境', tagColor: 'tag-system', text: '深夜。營火已經熄滅，只剩灰燼中偶爾閃爍的餘溫。', textEn: 'Deep night. The campfire has died, leaving only the occasional ember glowing in the ash.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你被一陣細微的聲音驚醒——是螢。', textEn: 'A faint sound wakes you — it\'s Ying.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '蜷縮在毯子裡，身體在顫抖。嘴裡反覆低喃著什麼。', textEn: yPC + '\'s curled up under a blanket, body trembling. Lips moving, repeating something over and over.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '「不要……不要變成石頭……不要……」', textEn: '"Don\'t... don\'t turn to stone... please don\'t..."', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '的額頭佈滿了冷汗。手指痙攣般地抓著手冊——指節發白。', textEn: yPC + ' forehead is drenched in cold sweat. Fingers clench the notebook spasmodically — knuckles white.', delay: 2800 },
    { tag: '行動', tagColor: 'tag-move', text: '你輕輕握住了螢的手。', textEn: 'You gently take Ying\'s hand.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '猛地睜開眼睛——瞳孔因為恐懼而放大，呼吸急促而混亂。', textEn: yPC + ' eyes snap open — pupils dilated with terror, breathing rapid and ragged.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢花了好幾���才認出你。然後——', textEn: 'It takes several seconds for Ying to recognize you. Then —', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '撲進了你的懷裡。', textEn: yPC + ' falls into your arms.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '沒有猶豫。沒有矜持。像是本能驅使的——' + yP + '的整個身體都貼上了你，手臂緊緊環住你的腰，臉埋進你的胸口。就像你是' + yP + '在這個世界上僅存的、唯一真實的東西。', textEn: 'No hesitation. No reserve. Driven by instinct — ' + yPo + ' entire body presses against you, arms locked around your waist, face buried in your chest. As though you were the only real thing ' + (isMale ? 'she' : 'he') + ' had left in this world.', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你能感受到' + yP + '的心跳——快得像被困住的飛蛾。隔著兩層衣服的布料，那種瘋狂的跳動像是要從' + yP + '的胸口撞出來。', textEn: 'You can feel ' + yPo + ' heartbeat — racing like a trapped moth. Through two layers of fabric, that frantic pounding feels like it might break out of ' + yPo + ' chest.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「我夢到你石化了。」螢的聲音悶在你的胸口，斷斷續續。' + yP + '的嘴唇隔著衣料一張一合，每個字都帶著潮濕的熱氣。', textEn: '"I dreamed you turned to stone." Ying\'s voice is muffled against your chest, broken. ' + yPC + ' lips move against the fabric with each word, each syllable damp and warm.', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: '「你站在那裡……眼睛還是睜開的……但已經不會動了……」', textEn: '"You were standing there... eyes still open... but you couldn\'t move anymore..."', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「我叫你的名字，你聽不見。我碰你的臉——是冰的。」' + yP + '的聲音碎了。「我怎麼摸都是冰的。」', textEn: '"I called your name, but you couldn\'t hear. I touched your face — it was ice cold." ' + yPC + ' voice cracks. "No matter how I touched it — just cold."', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '的手指扣在你的背上，收得很緊。指甲透過衣服嵌進你的皮膚——像是要確認你還是溫的。還是軟的。還是活的。那種力道帶著絕望的飢渴，像是下一秒你就會消失。', textEn: yPC + ' fingers dig into your back, nails pressing through fabric into skin — confirming you\'re still warm. Still soft. Still alive. The force carries a desperate hunger, as if you might vanish in the next second.', delay: 3500 },
  ], [
    { text: '把螢抱緊一點', textEn: 'Hold Ying tighter', action: () => {
      autoExplore([
        { tag: '行動', tagColor: 'tag-move', text: '你收緊了手臂。不是安慰的擁抱——是承諾的擁抱。一隻手托住' + yP + '的後腦，手指沒入' + yP + '的髮間。', textEn: 'You tighten your arms. Not a comforting embrace — a promise. One hand cradles the back of ' + yPo + ' head, fingers threading into ' + yPo + ' hair.', delay: 2800 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢的顫抖漸漸停了。' + yP + '的呼吸從急促變成綿長，從綿長變成平穩。每一次呼氣都像一小團溫熱的霧，融化在你的鎖骨上。', textEn: 'Ying\'s trembling gradually subsides. ' + yPC + ' breathing slows from ragged to long, from long to steady. Each exhale like a small warm cloud melting against your collarbone.', delay: 3200 },
        { tag: '感知', tagColor: 'tag-sense', text: '但' + yP + '沒有放手。反而把臉埋得更深——像是想鑽進你的身體裡，找一個石化瘟疫碰不到的地方。', textEn: 'But ' + (isMale ? 'she' : 'he') + ' doesn\'t let go. Buries ' + yPo + ' face even deeper — as if trying to crawl inside you, to find a place the Stone Plague can\'t reach.', delay: 3000 },
        { tag: '情報', tagColor: 'tag-info', text: '「……你身上好暖。」螢的聲音幾乎聽不見，嘴唇貼在你的頸側。那一小片皮膚像被燙到了——但你一寸都不想退。', textEn: '"...You\'re so warm." Ying\'s voice is almost inaudible, lips against the side of your neck. That small patch of skin feels scalded — but you don\'t want to pull away even an inch.', delay: 3200 },
        { tag: '感知', tagColor: 'tag-sense', text: '你低下頭——' + yP + '的臉埋在你的頸窩裡。你能感受到' + yP + '的睫毛在你的皮膚上輕輕刷過。' + yP + '的鼻尖蹭過你的脈搏，帶著淚水和墨漬的潮濕氣息。', textEn: 'You lower your head — ' + yPo + ' face is nestled in the crook of your neck. You feel ' + yPo + ' eyelashes brush softly against your skin. ' + yPC + ' nose grazes your pulse point, carrying the damp scent of tears and ink.', delay: 3500 },
        { tag: '環境', tagColor: 'tag-system', text: '你們就這樣纏在一起。彼此的心跳慢慢同步——像兩具快要石化的身體裡，最後還在跳動的東西。你分不清那股灼熱是體溫還是別的什麼。你不想分清。', textEn: 'You stay tangled together like this. Your heartbeats slowly synchronize — like the last things still beating inside two bodies on the verge of turning to stone. You can\'t tell if the heat is body warmth or something else. You don\'t want to know.', delay: 3800 },
        { tag: '感知', tagColor: 'tag-sense', text: '過了很久，螢的手鬆開了一點。但只是一點。', textEn: 'After a long while, Ying\'s grip loosens. But only slightly.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「……答應我一件事。」', textEn: '"...Promise me one thing."', delay: 2200 },
        { tag: '情報', tagColor: 'tag-info', text: '「如果有一天你真的開始石化……讓我先知道。不要偷偷一個人扛。」', textEn: '"If the day comes when you start to petrify... tell me first. Don\'t bear it alone in silence."', delay: 3500 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '終於抬起頭，和你四目相對。眼眶還是紅的，但目光比任何時候都堅定。', textEn: yPC + ' finally looks up, meeting your eyes. ' + yPC + ' eyes are still red, but ' + yPo + ' gaze is steadier than ever.', delay: 3000 },
        { tag: '情報', tagColor: 'tag-info', text: '「因為我要把你最後的樣子記下來。」' + yP + '的聲音在發抖，但嘴角在笑。', textEn: '"Because I need to record how you looked at the end." ' + yPC + ' voice trembles, but ' + yPo + ' lips are smiling.', delay: 3200 },
        { tag: '情報', tagColor: 'tag-info', text: '「……開玩笑的。因為我會想辦法救你。」', textEn: '"...Just kidding. Because I\'ll find a way to save you."', delay: 2800 },
      ], [
        { text: '我不會讓那種事發生', textEn: 'I won\'t let that happen', action: () => {
          changeHp(25);
          changePetri(-10);
          changeStat('wil', 1);
          notify(L('HP +25，石化度 -10%，意志 +1（不會放開的手）', 'HP +25, Petri -10%, WIL +1 (A hand that won\'t let go)'));
          loadNode('r2_look');
        }},
      ], { label: L('不會放手', 'Won\'t Let Go') });
    }},
    { text: '輕聲告訴螢：我還在', textEn: 'Whisper to Ying: I\'m still here', action: () => {
      autoExplore([
        { tag: '行動', tagColor: 'tag-move', text: '你把手放在螢的後腦——很輕，像是托著什麼易碎的東西。', textEn: 'You place your hand on the back of Ying\'s head — gently, as if cradling something fragile.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「我還在。你摸摸看——還是溫的。」', textEn: '"I\'m still here. Feel — still warm."', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢伸出手，猶豫了一下，然後輕輕碰了碰你的臉。' + yP + '的手指在發抖——不是因為冷，而是因為害怕摸到的會是石頭。', textEn: 'Ying reaches out, hesitates, then gently touches your face. ' + yPC + ' fingers tremble — not from cold, but from the fear of touching stone.', delay: 2800 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '的指尖從你的額頭滑到臉頰——那觸感帶著墨漬的粗糙，和指尖微微的顫抖。你能感覺到每一道指紋劃過你皮膚的溫度。', textEn: yPC + ' fingertips trace from your forehead to your cheek — the touch rough with ink stains, and a faint tremor. You feel the warmth of every fingerprint trailing across your skin.', delay: 3200 },
        { tag: '情報', tagColor: 'tag-info', text: '「……嗯。是溫的。」螢的聲音還在抖，但不再那麼害怕了。' + yP + '的掌心貼上了你的臉，像是想把這個溫度刻進手心裡。', textEn: '"...Mm. Warm." Ying\'s voice still shakes, but the fear is receding. ' + yPC + ' palm presses against your face, as if trying to engrave that warmth into ' + yPo + ' hand.', delay: 3200 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '沒有收回手。指尖停在你的頰骨上——那裡有一小片石化紋路。' + yP + '的拇指碰到了你的嘴角。你們都僵住了一瞬。', textEn: yPC + ' doesn\'t pull back. Fingertips rest on your cheekbone — where a small patch of petrification shows. ' + yPC + ' thumb touches the corner of your mouth. You both freeze for a heartbeat.', delay: 3500 },
        { tag: '感知', tagColor: 'tag-sense', text: '螢的拇指輕輕描過那些灰色的紋理，然後沿著你的下顎線緩緩滑下。動作極輕極慢，像是在記住你臉上每一寸的輪廓。', textEn: 'Ying\'s thumb traces those grey patterns, then slides slowly along your jawline. Exquisitely light, exquisitely slow — as if memorizing every contour of your face.', delay: 3500 },
        { tag: '情報', tagColor: 'tag-info', text: '「……我會記住的。你現在的樣子。溫的時候的樣子。」' + yP + '的聲音低到像氣音：「活著的時候的樣子。」', textEn: '"...I\'ll remember. How you look right now. When you\'re warm." ' + yPC + ' voice drops to barely a breath: "How you look when you\'re alive."', delay: 3200 },
        { tag: '環境', tagColor: 'tag-system', text: '黑暗中，你們的距離近得能感受到彼此的呼吸。近得你能看見' + yP + '瞳孔裡映出的你的倒影。' + yP + '的嘴唇微微張開——像是想說什麼，又像是在猶豫某件你們都在想卻都不敢做的事。', textEn: 'In the darkness, close enough to feel each other\'s breath. Close enough to see your reflection in ' + yPo + ' eyes. ' + yPC + ' lips part slightly — as if about to say something, or as if hesitating over something you\'re both thinking but neither dares to do.', delay: 3800 },
        { tag: '環境', tagColor: 'tag-system', text: '然後螢把臉埋回你的肩膀。很用力的。像是在逃開什麼。又像是在確認什麼。', textEn: 'Then Ying buries ' + yPo + ' face against your shoulder. Hard. As if fleeing from something. Or confirming something.', delay: 2800 },
        { tag: '環境', tagColor: 'tag-system', text: '你也不再說話。有些話不需要語言。' + yP + '殘留在你臉上的指尖觸感，和那個沒有完成的動作，已經說完了一切。', textEn: 'You say nothing either. Some words don\'t need language. The lingering touch on your face, and that unfinished gesture, have already said everything.', delay: 3200 },
      ], [
        { text: '靜靜陪到天亮', textEn: 'Stay quietly until dawn', action: () => {
          changeHp(25);
          changePetri(-10);
          changeStat('wil', 1);
          notify(L('HP +25，石化度 -10%，意志 +1（觸碰的記憶）', 'HP +25, Petri -10%, WIL +1 (Memory of touch)'));
          loadNode('r2_look');
        }},
      ], { label: L('觸碰的記憶', 'Memory of Touch') });
    }},
  ], { label: L('深夜的噩夢', 'Nightmare in the Dark') });
});

// ── Ying: Secret notebook pages ──
registerNode('r2_ying_secret', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';

  state.flags.r2YingSecret = true;
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }), artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }), delay: 800 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢的表情僵了一下。' + yP + '的手無意識地壓在手冊上，指尖微微泛白。', textEn: 'Ying\'s expression freezes. ' + yPC + '\'s hand presses down on the notebook, fingertips whitening.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「……什麼意思？」' + yP + '的聲音很輕，但你聽出了防備。這不是那個會對你臉紅的螢——這是另一面。', textEn: '"...What do you mean?" ' + yPC + '\'s voice is soft, but you catch the guardedness. This isn\'t the Ying who blushes around you — this is another side.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你之前注意到了——' + yP + '每次寫完筆記，都會把手冊翻到某幾頁用力夾緊。那些頁面的邊角比其他頁磨損得更厲害，像是經常被單獨翻開。', textEn: 'You\'ve noticed — every time ' + yP + ' finishes writing, ' + yP + ' presses certain pages firmly shut. Those pages are more worn than the rest, as if opened separately, often.', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '而且——那些頁面上的字跡和其他頁不一樣。不是給你看的記錄。是寫給別人的。', textEn: 'And the handwriting on those pages differs from the rest. Not records for you to see. Written for someone else.', delay: 3000 },
  ], [
    { text: '我看到了不一樣的字跡。你在寫報告——寫給誰？', textEn: 'I saw different handwriting. You\'re writing reports — to whom?', action: () => loadNode('r2_ying_past') },
    { text: '算了，你不想說就算了', textEn: 'Never mind, you don\'t have to tell me', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '螢看著你的眼睛，沉默了很久。' + yP + '的表情在掙扎——像是很想說什麼，但最終只是低下了頭。', textEn: 'Ying holds your gaze for a long silence. ' + yPC + '\'s expression wrestles with itself — as if wanting to speak, but ultimately just lowers ' + yPo + ' head.', delay: 3200 },
        { tag: '情報', tagColor: 'tag-info', text: '「……謝謝你不追問。」' + yP + '的聲音很小。「等到了河城……我會告訴你的。我保證。」', textEn: '"...Thank you for not pushing." ' + yPC + '\'s voice is tiny. "When we reach River Port... I\'ll tell you. I promise."', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '的手慢慢鬆開了壓住手冊的力道，但你注意到' + yP + '的另一隻手悄悄握了一下拳——像是在鼓勵自己。', textEn: yPC + '\'s grip on the notebook slowly relaxes, but you notice ' + yPo + ' other hand quietly clenching — as if steeling ' + yPo + 'self.', delay: 3000 },
      ], [
        { text: '繼續', textEn: 'Continue', action: () => {
          changeHp(5);
          changePetri(-3);
          notify(L('HP +5，石化度 -3%（信任的重量）', 'HP +5, Petri -3% (Weight of trust)'));
          loadNode('r2_look');
        }},
      ], { label: L('未說出口的話', 'Unspoken words') });
    }},
  ], { label: L('螢的秘密', 'Ying\'s secret') });
});

// ── Ying: True identity reveal ──
registerNode('r2_ying_past', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';

  state.flags.r2YingPast = true;
  autoExplore([
    { tag: '感知', tagColor: 'tag-sense', text: '螢整個人繃緊了。' + yP + '慢慢地把手冊放在膝蓋上，然後深深吸了一口氣。', textEn: 'Ying goes rigid. ' + yPC + ' slowly places the notebook on ' + yPo + ' knee, then draws a long, deep breath.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「……你說得對。」' + yP + '的聲音突然變了——不再是那個會臉紅的少女的語氣，而是某種更冷靜、更專業的腔調。', textEn: '"...You\'re right." ' + yPC + '\'s voice shifts — no longer the girl who blushes, but something colder, more professional.', delay: 3200 },
    { art: npcPortrait.art('ying', { subtitle: '議會調查員' }) || npcPortrait.art('ying', { subtitle: '記錄員' }), artEn: npcPortrait.art('ying', { subtitle: 'Council Investigator' }) || npcPortrait.art('ying', { subtitle: 'Chronicler' }), delay: 800 },
    { tag: '情報', tagColor: 'tag-info', html: L('「我不是普通的記錄員。我是河城議會派下來的<b>調查員</b>。」', '"I\'m not an ordinary chronicler. I\'m an <b>investigator</b> sent by the River Port Council."'), delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '這句話像一桶冰水。你看著' + yP + '——' + yP + '沒有躲開你的目光，但琥珀色的眼睛裡閃過了什麼。是愧疚。', textEn: 'The words hit like ice water. You stare at ' + yP + ' — ' + yP + ' doesn\'t dodge your gaze, but something flickers in those amber eyes. Guilt.', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: '「我的任務是……評估下層的狀況。然後寫一份報告，交給議會。」' + yP + '停了一下。「報告的結論，會決定議會是否封鎖通道。」', textEn: '"My mission is... to assess conditions in the lower levels. Then write a report for the Council." ' + yPC + ' pauses. "The report\'s conclusion will determine whether the Council seals the passages."', delay: 3800 },
    { tag: '感知', tagColor: 'tag-sense', text: '你的腦海裡快速閃過一切——' + yP + '為什麼會出現在石脈迴廊、為什麼一直在記錄、為什麼' + yP + '的筆記本有不同的字跡——全部說通了。', textEn: 'Your mind races through everything — why ' + yP + ' appeared in the Vein Corridor, why ' + yP + ' was always recording, why the notebook has different handwriting — it all makes sense now.', delay: 3500 },
    { tag: '情報', tagColor: 'tag-info', text: '「我原本……」' + yP + '的聲音裂了一下。「我原本被交代寫的是：下層已經不適合人類生存，建議封鎖。上面已經決定好答案了——我只是來蓋章的。」', textEn: '"I was originally..." ' + yPC + '\'s voice cracks. "I was told to write: the lower levels are unsuitable for human survival, recommend sealing. The decision was already made up top — I was just here to rubber-stamp it."', delay: 4000 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '低下頭。你看見' + yP + '的肩膀在微微發抖。', textEn: yPC + ' bows ' + yPo + ' head. You see ' + yPo + ' shoulders trembling.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「但是我遇見了你。遇見了老周、鐵霜、清露——遇見了這些在地底拼命活著的人。」' + yP + '抬起頭，眼眶泛紅。「我寫不出那份報告。我寫不出來。」', textEn: '"But then I met you. Met Old Zhou, Iron Frost, Dew — met all these people fighting to stay alive underground." ' + yPC + ' looks up, eyes reddening. "I can\'t write that report. I just can\'t."', delay: 4000 },
  ], [
    { text: '你為什麼現在才說？', textEn: 'Why tell me now?', action: () => {
      autoExplore([
        { tag: '情報', tagColor: 'tag-info', text: '「因為……」' + yP + '吞了一下口水。「因為你遲早會發現的。我寧可你從我嘴裡聽到——而不是在河城，從別人嘴裡。」', textEn: '"Because..." ' + yPC + ' swallows. "Because you\'d find out sooner or later. I\'d rather you hear it from me — than from someone else in River Port."', delay: 3500 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '看著你的眼睛。你從沒見過' + yP + '這麼認真。也從沒見過' + yP + '這麼害怕。', textEn: yPC + ' looks into your eyes. You\'ve never seen ' + yP + ' this serious. Or this scared.', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', text: '「而且——」' + yP + '的聲音輕得幾乎聽不到。「你是唯一一個……讓我覺得說出真話不會被討厭的人。」', textEn: '"And —" ' + yPC + '\'s voice drops to almost nothing. "You\'re the only person... who makes me feel like telling the truth won\'t make me hated."', delay: 3500 },
      ], [
        { text: '我不會討厭你。但你必須做出選擇', textEn: 'I don\'t hate you. But you need to choose', action: () => loadNode('r2_ying_choice') },
        { text: '你已經做出選擇了，不是嗎？', textEn: 'You\'ve already made your choice, haven\'t you?', action: () => loadNode('r2_ying_choice') },
      ], { label: L('為什麼', 'Why') });
    }},
    { text: '……我需要時間消化', textEn: '...I need time to process this', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '你站起來，沒有看' + yP + '。', textEn: 'You stand, without looking at ' + yP + '.', delay: 2000 },
        { tag: '感知', tagColor: 'tag-sense', text: '身後傳來一聲極輕的抽泣。然後是手冊合上的聲音。', textEn: 'Behind you, the softest sob. Then the sound of a notebook closing.', delay: 2800 },
      ], [
        { text: '繼續', textEn: 'Continue', action: () => loadNode('r2_look') },
      ], { label: L('沉默的離開', 'Silent departure') });
    }},
  ], { label: L('螢的真實身分', 'Ying\'s true identity') });
});

// ── Ying: The choice — her mission vs her conscience ──
registerNode('r2_ying_choice', () => {
  var isMale = state.sex === 'male';
  var yP = isMale ? L('她', 'she') : L('他', 'he');
  var yPC = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';

  state.flags.r2YingChoice = true;
  autoExplore([
    { tag: '感知', tagColor: 'tag-sense', text: '螢擦了擦眼角，深吸一口氣。' + yP + '翻開手冊，找到那些被壓緊的頁面——然後一頁一頁地撕下來。', textEn: 'Ying wipes ' + yPo + ' eyes and draws a deep breath. ' + yPC + ' opens the notebook, finds those tightly pressed pages — and tears them out, one by one.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '碎紙片在風中飄散。那些是' + yP + '寫好的偽報告——「下層不適合人類生存」。', textEn: 'Torn paper scatters in the draft. Those are the fake reports ' + yP + ' had prepared — "lower levels unsuitable for human survival."', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「到了河城之後——」' + yP + '的聲音沙啞但堅定。「我會重新寫。寫真實的報告。寫你們怎麼在下面活過來的。」', textEn: '"When we reach River Port —" ' + yPC + '\'s voice is hoarse but firm. "I\'ll rewrite it. A true report. How you survived down here."', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: yP + '看著你，眼眶還是紅的，但眼神已經不一樣了——那種恐懼不見了，取而代之的是你在' + yP + '身上見過的最堅定的表情。', textEn: yPC + ' looks at you, eyes still red, but the look in them has changed — the fear is gone, replaced by the most resolute expression you\'ve ever seen on ' + yP + '.', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: '「這可能會讓我被除名。甚至被關起來。但——」' + yP + '的嘴角微微上翹。「至少我能在你面前抬起頭。」', textEn: '"This might get me expelled. Even imprisoned. But —" The corner of ' + yPo + ' mouth curls up. "At least I can hold my head up in front of you."', delay: 3500 },
  ], [
    { text: '你不會一個人面對的', textEn: 'You won\'t face this alone', action: () => {
      changeStat('wil', 1);
      changeHp(10);
      changePetri(-5);
      sfx.levelUp();
      notify(L('意志 +1，HP +10，石化度 -5%（共同的決心）', 'WIL +1, HP +10, Petri -5% (Shared resolve)'));
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: yP + '愣了一下——然後笑了。這次的笑和以前不一樣。不是害羞的、躲閃的那種。是真正的、如釋重負的笑。', textEn: yPC + ' blinks — then smiles. This smile is different from before. Not shy or evasive. A genuine, relieved smile.', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: '「……你這個人真的很奇怪。」' + yP + '輕聲說。「被騙了還能說出這種話。」', textEn: '"...You really are strange." ' + yPC + ' murmurs. "Being lied to and still saying something like that."', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: yP + '低頭在手冊上寫了什麼。你瞄了一眼——只看到了兩個字：「吾友。」', textEn: yPC + ' bends over the notebook and writes something. You catch a glimpse — just two words: "My ally."', delay: 3000 },
      ], [
        { text: '繼續', textEn: 'Continue', action: () => loadNode('r2_look') },
      ], { label: L('共同的決心', 'Shared resolve') });
    }},
  ], { label: L('螢的抉擇', 'Ying\'s choice') });
});

// ═══════════════════════════════════════════════════
//  NPC Continuation — 灰鶴 (Grey Crane) in Region 2
// ═══════════════════════════════════════════════════

registerNode('r2_crane', () => {
  var steps = [];
  if (!state.flags.r2CraneMet) {
    state.flags.r2CraneMet = true;
    steps.push({ art: npcPortrait.art('crane', { subtitle: '行商人' }) || `<pre class="ascii-art gold">
       ·  ˚  灰鶴 — 行商人  ˚  ·
              ╱═══╲
             ╱ ·˚· ╲
            │ ─  ─  │
            │  ╲─╱  │
             ╲──┬──╱
          ╱░░░╲ │ ╱░░░╲
         ╱░░░░░╲│╱░░░░░╲   ← 斗篷
        │░░  ╱──┤├──╲  ░░│
        │░ ╱  · ││ ·  ╲ ░│  ← 纖細腰線
        │╱  ╱──═╧╧═──╲  ╲│
         ╲╱ │ ╳╳╳╳╳╳ │ ╲╱  ← 刀疤手臂
          ╲ │ ◆ 貨物 ◆│ ╱
           ╲╰════════╯╱
            ·─·˚酒瓶˚·─·
</pre>`, artEn: npcPortrait.art('crane', { subtitle: 'Merchant' }) || `<pre class="ascii-art gold">
    ·  ˚  Grey Crane — Merchant  ˚  ·
              ╱═══╲
             ╱ ·˚· ╲
            │ ─  ─  │
            │  ╲─╱  │
             ╲──┬──╱
          ╱░░░╲ │ ╱░░░╲
         ╱░░░░░╲│╱░░░░░╲   ← cloak
        │░░  ╱──┤├──╲  ░░│
        │░ ╱  · ││ ·  ╲ ░│  ← slim waist
        │╱  ╱──═╧╧═──╲  ╲│
         ╲╱ │ ╳╳╳╳╳╳ │ ╲╱  ← scarred arms
          ╲ │ ◆ Wares ◆│ ╱
           ╲╰════════╯╱
            ·─·˚bottle˚·─·
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

    // Sidequest: Crane's scars (requires met + lore done)
    if (state.flags.r2CraneLore && !state.flags.r2CraneScar) {
      c.push({ text: '她手臂上的刀疤……', textEn: 'Those scars on her arms...', action: () => loadNode('r2_crane_scar') });
    }
    // Sidequest: Debt collector (requires scar revealed)
    if (state.flags.r2CraneScar && !state.flags.r2CraneDebt) {
      c.push({ text: '營地外有動靜……', textEn: 'Commotion outside the camp...', action: () => loadNode('r2_crane_debt') });
    }
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
//  NPC Sidequest — 灰鶴 (Grey Crane) Past
// ═══════════════════════════════════════════════════

// --- r2_crane_scar: Player asks about bloodletting scars ---
registerNode('r2_crane_scar', () => {
  state.flags.r2CraneScar = true;
  var isMale = state.sex === 'male';
  var cP = isMale ? L('他','he') : L('她','she');
  autoExplore([
    { tag: '情報', tagColor: 'tag-info',
      text: L('你趁灰鶴整理貨物的時候，看見她袖子滑落，露出手臂內側密密麻麻的刀疤。',
             'While Grey Crane sorts her wares, her sleeve slips, revealing a lattice of scars along her inner arm.'),
      delay: 2800 },
    { tag: '情報', tagColor: 'tag-info',
      text: L('那不是戰鬥留下的傷——太規律了，像是某種……儀式。',
             'Not battle wounds — too regular, almost like some kind of... ritual.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      html: L('灰鶴注意到你的目光，迅速拉下袖子。她的笑容消失了一瞬。<br>「看夠了？」',
             'Grey Crane notices your gaze and yanks down her sleeve. Her smile vanishes for an instant.<br>"Seen enough?"'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……那是舊帳。」灰鶴低聲說，目光移開。「地表的舊帳。」',
             '"...Old debts." Grey Crane murmurs, looking away. "Old debts from the surface."'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('她沉默了好一會兒，然後像是做了某個決定，把袖子捲了上去。',
             'She goes quiet for a long moment, then — as if making a decision — rolls her sleeve up.'),
      delay: 2500 },
    { art: `<pre class="ascii-art gold">
      ╱══════════════════════════╲
     ╱  灰鶴的手臂               ╲
    │                              │
    │  ───╱╲───╱╲───╱╲───         │
    │  ╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳         │
    │  ╱╲╱╲  放血刀疤  ╱╲╱╲      │
    │  ╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳         │
    │  ───╱╲───╱╲───╱╲───         │
    │                              │
    │  ·˚· 不是戰鬥……是代價 ·˚·  │
     ╲                            ╱
      ╲══════════════════════════╱
</pre>`, artEn: `<pre class="ascii-art gold">
      ╱══════════════════════════╲
     ╱  Grey Crane's arm          ╲
    │                              │
    │  ───╱╲───╱╲───╱╲───         │
    │  ╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳         │
    │  ╱╲╱╲ Bloodletting  ╱╲╱╲   │
    │  ╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳╳         │
    │  ───╱╲───╱╲───╱╲───         │
    │                              │
    │  ·˚·  Not battle—a price ·˚·│
     ╲                            ╱
      ╲══════════════════════════╱
</pre>`, delay: 800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我以前不叫灰鶴。我叫——算了，那個名字已經死了。」',
             '"I used to have a different name. I was called — forget it. That name is dead."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「在地表的時候，我跟一群人借了錢做生意。當然，做賠了。」灰鶴的語氣平淡得像在說別人的事。',
             '"Up on the surface, I borrowed money from some people to start a business. Naturally, it went bust." Her tone is flat, like she\'s talking about someone else.'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「他們的討債方式很有創意——每拖一天，就割一刀。不是要殺你，是要你記住。」',
             '"Their collection method was creative — one cut for every day overdue. Not to kill, just to make you remember."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「所以我跑了。一頭扎進地底，想著他們總不會追到深淵裡來吧。」灰鶴苦笑了一聲。',
             '"So I ran. Dove straight underground, figuring they\'d never chase me into the abyss." Grey Crane laughs bitterly.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「結果呢——在地底做了商人，反而比地表做得好。」她又恢復了那副商人笑容，但眼底有某種東西不一樣了。',
             '"And then — trading underground turned out better than anything I did topside." The merchant\'s grin returns, but something in her eyes has changed.'),
      delay: 3000 },
  ], [
    { text: '那些人不會追到這裡吧？', textEn: 'They won\'t follow you here, right?',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('灰鶴頓了一下。她沒笑了。',
                   'Grey Crane pauses. No smile now.'),
            delay: 2000 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……希望不會。」',
                   '"...I hope not."'),
            delay: 2500 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r2_crane') },
        ], { label: L('灰鶴的過去', 'Grey Crane\'s past') });
      }},
    { text: '你不欠他們了', textEn: 'You don\'t owe them anymore',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('灰鶴看了你一眼，沉默了很久。',
                   'Grey Crane looks at you for a long time, saying nothing.'),
            delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……謝了。」她輕聲說。這是你第一次聽她說謝謝，不帶任何商人的算計。',
                   '"...Thanks." She says quietly. It\'s the first time you\'ve heard her say thanks without a merchant\'s calculation behind it.'),
            delay: 3000 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r2_crane') },
        ], { label: L('灰鶴的過去', 'Grey Crane\'s past') });
      }},
  ], { label: L('灰鶴的刀疤', 'Grey Crane\'s scars') });
});

// --- r2_crane_debt: Debt collector arrives at quarry ---
registerNode('r2_crane_debt', () => {
  state.flags.r2CraneDebt = true;
  var isMale = state.sex === 'male';
  var playerTitle = isMale ? L('少年','youth') : L('少女','maiden');
  autoExplore([
    { tag: '緊張', tagColor: 'tag-warn',
      text: L('你回到營地時，氣氛明顯不對。幾個營地居民圍在入口處竊竊私語。',
             'The camp feels wrong when you return. Residents cluster near the entrance, whispering.'),
      delay: 2500 },
    { tag: '緊張', tagColor: 'tag-warn',
      text: L('營地入口站著兩個陌生人——穿著地表款式的皮甲，手裡拿著鐵棍。一看就不是深淵的人。',
             'Two strangers stand at the entrance — surface-style leather armor, iron clubs in hand. Clearly not from the abyss.'),
      delay: 3000 },
    { art: `<pre class="ascii-art">
    ╔═══════════════════════════════╗
    ║     追債人 × 2                ║
    ╠═══════════════════════════════╣
    ║                               ║
    ║    ╱══╲      ╱══╲            ║
    ║   │▪  ▪│    │▪  ▪│           ║
    ║   │ ── │    │ ── │           ║
    ║    ╲══╱      ╲══╱            ║
    ║   ╱████╲    ╱████╲           ║
    ║  │██████│  │██████│          ║
    ║  │█ 鐵棍█│  │█鐵棍 █│       ║
    ║                               ║
    ║     「灰鶴在哪？」            ║
    ╚═══════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
    ╔═══════════════════════════════╗
    ║     DEBT COLLECTORS × 2      ║
    ╠═══════════════════════════════╣
    ║                               ║
    ║    ╱══╲      ╱══╲            ║
    ║   │▪  ▪│    │▪  ▪│           ║
    ║   │ ── │    │ ── │           ║
    ║    ╲══╱      ╲══╱            ║
    ║   ╱████╲    ╱████╲           ║
    ║  │██████│  │██████│          ║
    ║  │█ club █│ │█ club █│       ║
    ║                               ║
    ║     "Where's Grey Crane?"    ║
    ╚═══════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-explore',
      text: L('「我們找一個叫灰鶴的女人——欠了地表張三爺一大筆錢。」為首的男人掃視營地。「聽說她在這附近做生意。」',
             '"We\'re looking for a woman called Grey Crane — owes Master Zhang a fortune topside." The lead man scans the camp. "Heard she trades around here."'),
      delay: 3500 },
    { tag: '遭遇', tagColor: 'tag-explore',
      text: L('你看見灰鶴躲在一堆貨箱後面，臉色慘白。她對你做了個「噓」的手勢。',
             'You spot Grey Crane hiding behind a stack of crates, face pale. She puts a finger to her lips.'),
      delay: 2800 },
  ], [
    { text: '站出來幫灰鶴（意志說服）', textEn: 'Step in and talk them down (WIL)',
      action: () => {
        var result = statCheck('wil', 8);
        if (result === 'fail') {
          autoExplore([
            { tag: '檢定', tagColor: 'tag-warn',
              text: L('【意志檢定 DC8 — 失敗】', '[WIL check DC8 — FAIL]'),
              delay: 1500, effect: () => sfx.fail() },
            { tag: '對話', tagColor: 'tag-npc',
              text: L('「少管閒事，' + playerTitle + '。」為首的男人推了你一把。',
                     '"Mind your own business, ' + playerTitle + '." The lead man shoves you.'),
              delay: 2500 },
            { tag: '戰鬥', tagColor: 'tag-combat',
              text: L('說服失敗——追債人動手了！',
                     'Persuasion failed — the collectors attack!'),
              delay: 2000 },
          ], [
            { text: L('應戰', 'Fight'), action: () => {
              var enemy = {
                name: '追債人', nameEn: 'Debt Collector',
                hp: 22, atkMin: 4, atkMax: 8, petriDmg: 0, xp: 12,
                empathyGoal: 3,
                art: [
                  '   ╱══╲ ',
                  '  │▪  ▪│',
                  '  │ ── │',
                  '   ╲══╱ ',
                  '  ╱████╲',
                  ' │██████│',
                  ' │█鐵棍█│',
                ],
                commune: [
                  { zh: '追債人猶豫了一下——他似乎也不想在這麼深的地方打架。', en: 'The collector hesitates — he doesn\'t want to fight this deep underground either.' },
                  { zh: '「……你替她還錢的話，也不是不行。」', en: '"...If you pay her debt, that works too."' },
                ],
                spareText: { zh: '追債人罵罵咧咧地走了：「跟張三爺說，找不到人。」', en: 'The collectors leave cursing: "Tell Master Zhang we couldn\'t find her."' }
              };
              enemy = scaleEnemyNgPlus(enemy);
              startCombat(enemy, function() {
                autoExplore([
                  { tag: '結果', tagColor: 'tag-info',
                    text: L('追債人被你打跑了。灰鶴從貨箱後面走出來，手還在發抖。',
                           'The collectors flee. Grey Crane emerges from behind the crates, hands still shaking.'),
                    delay: 2500 },
                  { tag: '對話', tagColor: 'tag-npc',
                    text: L('「……我欠你一條命。」灰鶴的聲音很輕。這不是商人在談交易。',
                           '"...I owe you my life." Grey Crane\'s voice is barely a whisper. This isn\'t a merchant making a deal.'),
                    delay: 3000 },
                  { tag: '效果', tagColor: 'tag-system',
                    text: L('灰鶴好感 ↑↑ | 經驗 +12', 'Grey Crane bond ↑↑ | XP +12'),
                    delay: 1500, effect: () => { state.flags.r2CraneDebtSaved = true; gainXp(12); } },
                ], [
                  { text: '返回', textEn: 'Back', action: () => loadNode('r2_crane') },
                ], { label: L('灰鶴的債', 'Grey Crane\'s debt') });
              }, null);
            }},
          ], { label: L('追債人', 'Debt collectors') });
        } else {
          autoExplore([
            { tag: '檢定', tagColor: 'tag-info',
              text: L('【意志檢定 DC8 — ' + (result === 'crit' ? '大成功' : '成功') + '】',
                     '[WIL check DC8 — ' + (result === 'crit' ? 'CRITICAL' : 'PASS') + ']'),
              delay: 1500, effect: () => sfx.pass() },
            { tag: '對話', tagColor: 'tag-npc',
              text: L('你攔住追債人，直視他的眼睛。「灰鶴不在這裡。你們走錯路了。」',
                     'You block the collectors, staring him down. "Grey Crane isn\'t here. You took a wrong turn."'),
              delay: 2800 },
            { tag: '對話', tagColor: 'tag-npc',
              text: result === 'crit'
                ? L('追債人被你的氣場鎮住了。「……算了，跟張三爺說這條路死了人，沒找到。」他們退後了幾步。',
                   'Your presence overwhelms them. "...Forget it, tell Master Zhang the route caved in, nobody found." They back off.')
                : L('為首的男人遲疑了。「……你認識她？」他看了看身後的深淵隧道，又看了看你。「在這種鬼地方打架不值得。」',
                   'The lead man hesitates. "...You know her?" He looks at the abyss tunnel behind him, then back at you. "Not worth fighting in a place like this."'),
              delay: 3500 },
            { tag: '遭遇', tagColor: 'tag-explore',
              text: L('追債人互相看了一眼，轉身離開了。你聽到他們的腳步聲漸漸遠去。',
                     'The collectors exchange a glance and turn to leave. Their footsteps fade into the distance.'),
              delay: 2800 },
            { tag: '對話', tagColor: 'tag-npc',
              text: L('灰鶴從貨箱後面走出來。她的商人笑容不見了——取而代之的是你從未見過的表情。',
                     'Grey Crane steps out from behind the crates. The merchant\'s grin is gone — replaced by an expression you\'ve never seen from her.'),
              delay: 3000 },
            { tag: '對話', tagColor: 'tag-npc',
              text: L('「……你不用幫我的。」灰鶴低聲說。「我的爛帳，跟你沒關係。」',
                     '"...You didn\'t have to do that." Grey Crane says quietly. "My mess, nothing to do with you."'),
              delay: 3000 },
            { tag: '對話', tagColor: 'tag-npc',
              text: L('她沉默了一會兒，然後做了一件你意想不到的事——灰鶴抱了你一下。很快，就一下。',
                     'She\'s silent for a moment, then does something unexpected — Grey Crane hugs you. Brief, just once.'),
              delay: 3000 },
            { tag: '對話', tagColor: 'tag-npc',
              text: L('「謝了。」她放開你，又恢復了那副吊兒郎當的語氣。「但你要是跟別人說我哭了——我宰了你。」',
                     '"Thanks." She lets go, slipping back to her casual tone. "But if you tell anyone I cried — I\'ll gut you."'),
              delay: 3200 },
            { tag: '效果', tagColor: 'tag-system',
              text: L('灰鶴好感 ↑↑↑ | 經驗 +15 | 意志 +1', 'Grey Crane bond ↑↑↑ | XP +15 | WIL +1'),
              delay: 1500, effect: () => {
                state.flags.r2CraneDebtSaved = true;
                gainXp(15);
                changeStat('wil', 1);
              }},
          ], [
            { text: '返回', textEn: 'Back', action: () => loadNode('r2_crane') },
          ], { label: L('灰鶴的債', 'Grey Crane\'s debt') });
        }
      }},
    { text: '直接動手趕走他們（力量）', textEn: 'Physically drive them off (STR)',
      action: () => {
        var enemy = {
          name: '追債人', nameEn: 'Debt Collector',
          hp: 22, atkMin: 4, atkMax: 8, petriDmg: 0, xp: 12,
          empathyGoal: 3,
          art: [
            '   ╱══╲ ',
            '  │▪  ▪│',
            '  │ ── │',
            '   ╲══╱ ',
            '  ╱████╲',
            ' │██████│',
            ' │█鐵棍█│',
          ],
          commune: [
            { zh: '追債人猶豫了一下——他似乎也不想在這麼深的地方打架。', en: 'The collector hesitates — he doesn\'t want to fight this deep underground either.' },
            { zh: '「……你替她還錢的話，也不是不行。」', en: '"...If you pay her debt, that works too."' },
          ],
          spareText: { zh: '追債人罵罵咧咧地走了：「跟張三爺說，找不到人。」', en: 'The collectors leave cursing: "Tell Master Zhang we couldn\'t find her."' }
        };
        enemy = scaleEnemyNgPlus(enemy);
        startCombat(enemy, function() {
          autoExplore([
            { tag: '結果', tagColor: 'tag-info',
              text: L('追債人被你打跑了。灰鶴從貨箱後面走出來，手還在發抖。',
                     'The collectors flee. Grey Crane emerges from behind the crates, hands still shaking.'),
              delay: 2500 },
            { tag: '對話', tagColor: 'tag-npc',
              text: L('「……你還真是直接。」灰鶴勉強擠出一個笑容。「我欠你一條命。不開玩笑的那種。」',
                     '"...You really are direct." Grey Crane manages a smile. "I owe you my life. No joke this time."'),
              delay: 3000 },
            { tag: '效果', tagColor: 'tag-system',
              text: L('灰鶴好感 ↑↑ | 經驗 +12', 'Grey Crane bond ↑↑ | XP +12'),
              delay: 1500, effect: () => { state.flags.r2CraneDebtSaved = true; gainXp(12); } },
          ], [
            { text: '返回', textEn: 'Back', action: () => loadNode('r2_crane') },
          ], { label: L('灰鶴的債', 'Grey Crane\'s debt') });
        }, null);
      }},
    { text: '不介入', textEn: 'Don\'t get involved',
      action: () => {
        autoExplore([
          { tag: '遭遇', tagColor: 'tag-explore',
            text: L('你退到一邊，看著事態發展。追債人最終在營地裡搜了一圈，沒找到灰鶴——她躲得很好。',
                   'You step aside and watch. The collectors search the camp but don\'t find Grey Crane — she hides well.'),
            delay: 3000 },
          { tag: '遭遇', tagColor: 'tag-explore',
            text: L('他們走後，灰鶴從暗處鑽出來。她看了你一眼，什麼也沒說。',
                   'After they leave, Grey Crane slips out of the shadows. She looks at you once, says nothing.'),
            delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('商人的笑容回到她臉上——但這一次，你知道那只是面具。',
                   'The merchant\'s grin returns — but this time, you know it\'s just a mask.'),
            delay: 2500 },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r2_crane') },
        ], { label: L('灰鶴的債', 'Grey Crane\'s debt') });
      }},
  ], { label: L('追債人來了', 'The debt collectors') });
});

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

// ── NPC Sidequest: Old Zhou's Deeper Truth ──
registerNode('r2_zhou_trace_deep', () => {
  state.flags.r2ZhouTraceDeep = true;
  autoExplore([
    { tag: '探索', tagColor: 'tag-explore',
      text: L('你回到老周留言的那面岩壁。這一次，你蹲下來仔細看——在大字下方，還有一片密密麻麻的小字。',
             'You return to the wall where Zhou carved his message. This time you crouch down — beneath the large text, there\'s a dense patch of tiny characters.'),
      delay: 3000 },
    { art: `<pre class="ascii-art">
  ░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░
  █                              █
  ▓  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱   ▓
  █  ╱ 監工K真名：孔德業     ╱   █
  ▓  ╱ 不是礦業公司的人      ╱   ▓
  █  ╱ 是議會派來的          ╱   █
  ▓  ╱ 任務：開採石化結晶    ╱   ▓
  █  ╱ 供河城軍事用途        ╱   █
  ▓  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱   ▓
  █  ╱ 我偷聽到他跟上面通話  ╱   █
  ▓  ╱ 「封印後面的結晶      ╱   ▓
  █  ╱   足夠武裝一支軍隊」  ╱   █
  ▓  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱   ▓
  █   ↑ 刮得很深 像是用盡全力    █
  ░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░
</pre>`, artEn: `<pre class="ascii-art">
  ░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░
  █                              █
  ▓  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱   ▓
  █  ╱ Overseer K, real name: ╱   █
  ▓  ╱ Kong De-ye             ╱   ▓
  █  ╱ Not from mining co.    ╱   █
  ▓  ╱ Sent by the Council    ╱   ▓
  █  ╱ Mission: mine petri-   ╱   █
  ▓  ╱ crystals for River     ╱   ▓
  █  ╱ City military use      ╱   █
  ▓  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱   ▓
  █  ╱ I overheard him call:  ╱   █
  ▓  ╱ "Crystals behind seal  ╱   ▓
  █  ╱ enough to arm a force" ╱   █
  ▓  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱   ▓
  █    ↑ Deeply gouged, as if     █
  ░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░▓█▓░
</pre>`, delay: 800 },
    { tag: '調查', tagColor: 'tag-info',
      text: L('這些字比上面的留言刻得更深，像是用盡了全身力氣。有幾處石化的粉末堵住了筆畫——老周刻這些的時候，手已經開始石化了。',
             'These characters are gouged far deeper than the message above, as if carved with every ounce of strength. Petrification dust clogs some strokes — Zhou\'s hand was already turning when he wrote this.'),
      delay: 3500 },
    { tag: '調查', tagColor: 'tag-info',
      html: L('「監工 K 真名<b>孔德業</b>。不是礦業公司的人——是<b>議會派來的</b>。」',
             '"Overseer K, real name <b>Kong De-ye</b>. Not from the mining company — <b>sent by the Council</b>."'),
      delay: 3000 },
    { tag: '調查', tagColor: 'tag-info',
      text: L('「任務：開採封印後的石化結晶。供河城軍事用途。」',
             '"Mission: mine petrification crystals behind the seal. For River City military use."'),
      delay: 2800 },
    { tag: '調查', tagColor: 'tag-info',
      text: L('「我偷聽到他跟上面通話——『封印後面的結晶足夠武裝一支軍隊。』」',
             '"I overheard him report topside — \'Crystals behind the seal, enough to arm a force.\'"'),
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('你站起來，腦子裡在飛速運轉。如果老周說的是真的——石化瘟疫不是天災，而是河城議會為了軍事目的引發的人禍。',
             'You stand up, mind racing. If what Zhou carved is true — the petrification plague wasn\'t a natural disaster, but a catastrophe triggered by the River City Council for military ends.'),
      delay: 3500 },
    { tag: '系統', tagColor: 'tag-system',
      text: L('這份證詞可能改變一切——如果能帶到河城。',
             'This testimony could change everything — if you can bring it to River City.'),
      delay: 2500 },
  ], [
    { text: '用石板拓印這些刻痕', textEn: 'Make a rubbing of the carvings',
      action: () => {
        state.flags.r2ZhouEvidence = true;
        autoExplore([
          { tag: '行動', tagColor: 'tag-move',
            text: L('你找了一塊薄石板，用木炭小心翼翼地把所有刻痕拓印下來。',
                   'You find a thin slate and carefully rub charcoal over all the carvings to copy them.'),
            delay: 2500 },
          { tag: '物品', tagColor: 'tag-item',
            html: L('獲得「<b>老周的礦難證詞拓片</b>」——監工 K 的真實身分與議會的命令。',
                   'Acquired "<b>Zhou\'s Disaster Testimony Rubbing</b>" — Overseer K\'s true identity and the Council\'s orders.'),
            delay: 2500, effect: () => addItem(L('老周的礦難證詞', 'Zhou\'s Disaster Testimony')) },
          { tag: '效果', tagColor: 'tag-system',
            text: L('經驗 +12（關鍵證據）', 'XP +12 (Key evidence)'),
            delay: 1500, effect: () => gainXp(12) },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r2_quarry_floor') },
        ], { label: L('拓印證詞', 'Copying testimony') });
      }},
    { text: '記在心裡就好', textEn: 'Just remember it',
      action: () => {
        state.flags.r2ZhouEvidence = true;
        loadNode('r2_quarry_floor');
      }},
  ], { label: L('老周的深層真相', 'Zhou\'s deeper truth') });
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

// ═══════════════════════════════════════════════════
//  Ancient Science Passage — 古代科學密道
//  (Unlocked by sparing the Colossus boss + Cheng Gang's passcode)
// ═══════════════════════════════════════════════════

registerNode('r2_ancient_tunnel', () => {
  var hasCode = hasItem(L('古代密道通行碼', 'Ancient Passage Code'));

  // ── No passcode yet ──
  if (!hasCode) {
    autoExplore([
      { art: `<pre class="ascii-art">
  ════════════════════════════════════
       ╔═══╗     ╔═══╗     ╔═══╗
       ║ ⚙ ║─────║ ⚙ ║─────║ ⚙ ║
       ╚═══╝     ╚═══╝     ╚═══╝
       │                         │
       │   ╔═══════════════╗     │
       │   ║               ║     │
       │   ║   ◇ ◇ ◇ ◇   ║     │
       │   ║   符文密碼鎖   ║     │
       │   ║               ║     │
       │   ╚═══════════════╝     │
       │          ✖ 鎖定          │
  ════════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art">
  ════════════════════════════════════
       ╔═══╗     ╔═══╗     ╔═══╗
       ║ ⚙ ║─────║ ⚙ ║─────║ ⚙ ║
       ╚═══╝     ╚═══╝     ╚═══╝
       │                         │
       │   ╔═══════════════╗     │
       │   ║               ║     │
       │   ║   ◇ ◇ ◇ ◇   ║     │
       │   ║   Rune  Lock  ║     │
       │   ║               ║     │
       │   ╚═══════════════╝     │
       │        ✖ Locked          │
  ════════════════════════════════════
</pre>`, delay: 800 },
      { tag: '探索', tagColor: 'tag-explore', text: '採石場西側的岩壁上，你找到了一面刻滿齒輪紋樣的石門。門上有一個符文密碼鎖。', textEn: 'On the quarry\'s west wall, you find a stone door carved with gear patterns. A rune-based code lock is set into it.', delay: 2500 },
      { tag: '感知', tagColor: 'tag-sense', text: '你試著觸摸符文板——上面的符號微微發光，但你不知道正確的密碼。', textEn: 'You try touching the rune panel — the symbols glow faintly, but you don\'t know the correct code.', delay: 2200 },
      { tag: '環境', tagColor: 'tag-system', text: '也許有人知道這扇門的秘密。', textEn: 'Perhaps someone knows this door\'s secret.', delay: 1800 },
    ], [
      { text: '返回', textEn: 'Return', action: () => loadNode('r2_look') },
    ], { label: L('古代石門', 'Ancient stone door') });
    return;
  }

  // ── Have passcode — enter the tunnel ──
  if (!state.flags.r2TunnelVisited) {
    state.flags.r2TunnelVisited = true;
    autoExplore([
      { art: `<pre class="ascii-art gold">
  ════════════════════════════════════
       ╔═══╗     ╔═══╗     ╔═══╗
       ║ ⚙ ║─────║ ⚙ ║─────║ ⚙ ║
       ╚═══╝     ╚═══╝     ╚═══╝
       │                         │
       │   ╔═══════════════╗     │
       │   ║  ✦ 巨神之眼 ✦ ║     │
       │   ║               ║     │
       │   ║   ◆ ◆ ◆ ◆   ║     │
       │   ║   密碼正確！   ║     │
       │   ╚═══════════════╝     │
       │        ◇ 開啟中 ◇        │
  ════════════════════════════════════
</pre>`, artEn: `<pre class="ascii-art gold">
  ════════════════════════════════════
       ╔═══╗     ╔═══╗     ╔═══╗
       ║ ⚙ ║─────║ ⚙ ║─────║ ⚙ ║
       ╚═══╝     ╚═══╝     ╚═══╝
       │                         │
       │   ╔═══════════════╗     │
       │   ║ ✦ Eye of the  ║     │
       │   ║   Colossus ✦  ║     │
       │   ║   ◆ ◆ ◆ ◆   ║     │
       │   ║  Code Accepted ║     │
       │   ╚═══════════════╝     │
       │       ◇ Opening ◇       │
  ════════════════════════════════════
</pre>`, delay: 800 },
      { tag: '行動', tagColor: 'tag-move', text: '你在符文板上按照承鋼教的順序輸入密碼——「巨神之眼」。', textEn: 'You enter the passcode on the rune panel in the sequence Cheng Gang taught — "Eye of the Colossus."', delay: 2500 },
      { tag: '環境', tagColor: 'tag-system', text: '齒輪紋樣開始轉動，石門發出沉重的嗡鳴聲。塵封千年的機關緩緩啟動。', textEn: 'The gear patterns begin to turn, the stone door emitting a deep hum. Mechanisms sealed for millennia slowly awaken.', delay: 2800 },
      { tag: '環境', tagColor: 'tag-system', text: '石門向兩側滑開——露出一條向下延伸的金屬走廊。牆壁上的古代照明裝置逐一亮起，散發出柔和的藍光。', textEn: 'The door slides apart — revealing a metal corridor descending downward. Ancient lighting panels flicker on one by one, casting soft blue light.', delay: 3000 },
      { tag: '感知', tagColor: 'tag-sense', text: '空氣乾燥而純淨——和採石場的潮濕完全不同。這裡被完美地密封了不知多少年。', textEn: 'The air is dry and clean — nothing like the quarry\'s humidity. This place has been perfectly sealed for untold years.', delay: 2500 },
      { art: `<pre class="ascii-art cyan">
  ╔═════════════════════════════════════╗
  ║                                     ║
  ║   ┌──┐  ┌──┐  ┌──┐  ┌──┐  ┌──┐  ║
  ║   │⚙│──│⚙│──│⚙│──│⚙│──│⚙│  ║
  ║   └──┘  └──┘  └──┘  └──┘  └──┘  ║
  ║   │     │     │     │     │      ║
  ║   ◇ 石化瘟疫研究紀錄 ◇            ║
  ║                                     ║
  ║   ╔════╗  ╔════╗  ╔════╗          ║
  ║   ║ 樣 ║  ║ 基 ║  ║ 報 ║          ║
  ║   ║ 本 ║  ║ 因 ║  ║ 告 ║          ║
  ║   ╚════╝  ╚════╝  ╚════╝          ║
  ║              ·✦·                    ║
  ╚═════════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art cyan">
  ╔═════════════════════════════════════╗
  ║                                     ║
  ║   ┌──┐  ┌──┐  ┌──┐  ┌──┐  ┌──┐  ║
  ║   │⚙│──│⚙│──│⚙│──│⚙│──│⚙│  ║
  ║   └──┘  └──┘  └──┘  └──┘  └──┘  ║
  ║   │     │     │     │     │      ║
  ║   ◇ Petrification Plague Research ◇ ║
  ║                                     ║
  ║   ╔════╗  ╔════╗  ╔════╗          ║
  ║   ║Sam-║  ║Gene║  ║Rep-║          ║
  ║   ║ples║  ║tic ║  ║ort ║          ║
  ║   ╚════╝  ╚════╝  ╚════╝          ║
  ║              ·✦·                    ║
  ╚═════════════════════════════════════╝
</pre>`, delay: 800 },
      { tag: '探索', tagColor: 'tag-explore', html: '走廊盡頭是一間寬敞的<b>古代研究室</b>。圓弧形的天花板上佈滿管線，中央有一座六角形的工作台。', htmlEn: 'The corridor ends in a spacious <b>ancient laboratory</b>. Curved ceilings lined with conduits, a hexagonal workstation at the center.', delay: 2800 },
      { tag: '探索', tagColor: 'tag-explore', text: '工作台上整齊擺放著密封的玻璃容器——裡面是各種石化樣本。牆壁上的銅板刻滿了研究記錄。', textEn: 'The workstation holds sealed glass containers — petrification samples inside. Copper panels on the walls are covered with research records.', delay: 2800 },
      { tag: '情報', tagColor: 'tag-info', html: '你仔細閱讀銅板上的記錄：「<b>石化瘟疫並非天然疾病。</b>」', htmlEn: 'You study the copper panel records: "<b>The petrification plague is not a natural disease.</b>"', delay: 3000 },
      { tag: '情報', tagColor: 'tag-info', text: '「石化因子最初是我們研發的——目的是讓人類的肉體獲得礦物般的耐久性，以適應地底極端環境。」', textEn: '"The petrification factor was originally developed by us — designed to grant human flesh mineral-like durability, adapting to extreme underground conditions."', delay: 3500 },
      { tag: '情報', tagColor: 'tag-info', text: '「第七代改良株在受試者體內發生了不可控突變。石化不再停止在表皮——它開始侵蝕神經系統。」', textEn: '"The seventh-generation strain mutated uncontrollably in test subjects. Petrification no longer stopped at the epidermis — it began eroding the nervous system."', delay: 3500 },
      { tag: '警告', tagColor: 'tag-warn', html: '「<b>我們試圖銷毀所有樣本，但為時已晚。</b>石化因子已通過地下水系擴散到了整個深淵。」', htmlEn: '"<b>We attempted to destroy all samples, but it was too late.</b> The petrification factor had spread through the underground water systems to the entire abyss."', delay: 3500 },
      { tag: '情報', tagColor: 'tag-info', text: '「附錄：解石化的理論可能性存在。關鍵在於……」', textEn: '"Appendix: A theoretical possibility for reversing petrification exists. The key lies in..."', delay: 2500 },
      { tag: '環境', tagColor: 'tag-system', text: '銅板的最後幾行被刻意抹去了。有人不想讓這個秘密被發現。', textEn: 'The final lines of the copper panel have been deliberately erased. Someone didn\'t want this secret found.', delay: 2500 },
      { tag: '探索', tagColor: 'tag-explore', text: '工作台下方有一個未被打開的抽屜。你拉開它——裡面是一疊保存完好的古代文件。', textEn: 'Beneath the workstation, an unopened drawer. You pull it open — inside, a stack of perfectly preserved ancient documents.', delay: 2500 },
      { tag: '物品', tagColor: 'tag-item', html: '文件封面寫著：「<b>石化瘟疫起源報告——機密</b>」。這就是瘟疫的真相。', htmlEn: 'The cover reads: "<b>Petrification Plague Origin Report — CLASSIFIED</b>". This is the truth about the plague.', delay: 3000,
        effect: function() {
          addItem(L('瘟疫起源報告', 'Plague Origin Report'));
          state.flags.r3PlagueProof = true;
          sfx.item();
          notify(L('獲得「瘟疫起源報告」— 關鍵證據！', 'Obtained "Plague Origin Report" — Key evidence!'));
        }
      },
      { tag: '感知', tagColor: 'tag-sense', text: '研究室角落還有一個金屬箱。箱蓋上刻著「應急醫療物資」。', textEn: 'In a corner of the lab, a metal crate. Its lid reads "Emergency Medical Supplies."', delay: 2200 },
      { tag: '物品', tagColor: 'tag-item', text: '你打開箱子——裡面有一瓶古代抗石化藥劑，雖然過了保質期，但成分依然穩定。', textEn: 'You open the crate — inside, a vial of ancient anti-petrification serum. Past its expiry, but the compounds remain stable.', delay: 2500,
        effect: function() {
          changePetri(-10);
          changeStat('wil', 1);
          sfx.item();
          notify(L('石化度 -10%，WIL +1', 'Petri -10%, WIL +1'));
        }
      },
      { tag: '感知', tagColor: 'tag-sense', text: '你環顧這間千年前的研究室。這裡的一切——都是一場災難的起點。', textEn: 'You survey this millennia-old laboratory. Everything here — marks the beginning of a catastrophe.', delay: 2500 },
      { tag: '環境', tagColor: 'tag-system', html: '帶著<b>瘟疫起源報告</b>，你離開了密道。這份證據，也許能改變河城渡口所有人的命運。', htmlEn: 'With the <b>Plague Origin Report</b> in hand, you leave the passage. This evidence may change the fate of everyone at River City Ferry.', delay: 3000 },
    ], [
      { text: '返回採石場', textEn: 'Return to the quarry', action: () => loadNode('r2_look') },
    ], { label: L('古代科學密道', 'Ancient Science Passage') });
  } else {
    // ── Already explored ──
    autoExplore([
      { tag: '探索', tagColor: 'tag-explore', text: '你回到了古代研究室。銅板上的文字依舊沉默地訴說著真相。', textEn: 'You return to the ancient laboratory. The copper panels still silently tell their truth.', delay: 2000 },
      { tag: '環境', tagColor: 'tag-system', text: '這裡已經沒有新的發現了。', textEn: 'Nothing new remains to find here.', delay: 1500 },
    ], [
      { text: '返回採石場', textEn: 'Return to the quarry', action: () => loadNode('r2_look') },
    ], { label: L('古代科學密道', 'Ancient Science Passage') });
  }
});

// ═══════════════════════════════════════════════════
//  Cheng Gang Strength Training — 承鋼力量訓練
//  Session 1: ~15s, Session 2: ~30s, Session 3: ~60s
//  STR +1 per session, stories about camp life & love
// ═══════════════════════════════════════════════════

registerNode('r2_cheng_train', () => {
  var trainCount = state.flags.r2ChengTrainCount || 0;

  if (trainCount >= 3) {
    autoExplore([
      { art: npcPortrait.art('cheng', { subtitle: '研究員' }), artEn: npcPortrait.art('cheng', { subtitle: 'Researcher' }), delay: 800 },
      { tag: '情報', tagColor: 'tag-info', text: '承鋼搖了搖頭：「你已經足夠強了。剩下的路——要靠你自己的力量走完。」', textEn: 'Cheng Gang shakes his head: "You\'re strong enough. The rest of the road — you\'ll walk it on your own strength."', delay: 2500 },
    ], [
      { text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') },
    ], { label: L('訓練完成', 'Training complete') });
    return;
  }

  var steps = [];
  // ── Common training intro ──
  steps.push({ art: npcPortrait.art('cheng', { subtitle: '研究員' }), artEn: npcPortrait.art('cheng', { subtitle: 'Researcher' }), delay: 800 });
  steps.push({ art: `<pre class="ascii-art gold">
  ╔═════════════════════════════════╗
  ║    ◆◇◆  力 量 訓 練  ◆◇◆      ║
  ╠═════════════════════════════════╣
  ║                                 ║
  ║     ╱▔▔╲    ░▓█▓░    ╱▔▔╲    ║
  ║    │◦  ◦│   ░▓█▓░   │    │   ║
  ║    │ ══ │───░▓█▓░───│ ══ │   ║
  ║     ╲__╱    ░▓█▓░    ╲__╱    ║
  ║     ╱||╲    石  塊    ╱||╲    ║
  ║    ╱ || ╲           ╱ || ╲   ║
  ║    承 鋼              你      ║
  ║                                 ║
  ║        第 ` + (trainCount + 1) + ` / 3 次訓練           ║
  ╚═════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art gold">
  ╔═════════════════════════════════╗
  ║   ◆◇◆ Strength Training ◆◇◆   ║
  ╠═════════════════════════════════╣
  ║                                 ║
  ║     ╱▔▔╲    ░▓█▓░    ╱▔▔╲    ║
  ║    │◦  ◦│   ░▓█▓░   │    │   ║
  ║    │ ══ │───░▓█▓░───│ ══ │   ║
  ║     ╲__╱    ░▓█▓░    ╲__╱    ║
  ║     ╱||╲    Stone     ╱||╲    ║
  ║    ╱ || ╲           ╱ || ╲   ║
  ║   Cheng              You      ║
  ║    Gang                        ║
  ║        Session ` + (trainCount + 1) + ` / 3             ║
  ╚═════════════════════════════════╝
</pre>`, delay: 800 });

  if (trainCount === 0) {
    // ═══ Session 1 (~15s): The Camp — A quick warm-up and glimpse of camp origins ═══
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '承鋼扶著牆壁站了起來——他的腿還在發抖，但眼神堅定。寬鬆的襯衣下能看出他曾經結實的身材正在恢復，肩膀的線條比昨天更有力了。「來。先從搬石頭開始。」', textEn: 'Cheng Gang pulls himself up against the wall — legs still shaking, eyes resolute. Under his loose shirt, the outline of a once-solid frame is returning, shoulders more defined than yesterday. "Come. Start with lifting stones."', delay: 2800 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '你蹲下身，雙手抱住石塊。承鋼在旁邊做著同樣的動作——他捲起了袖子，露出前臂上殘留的石化紋路和底下精瘦的肌肉線條。他的石塊小了一號，但姿勢完美。', textEn: 'You squat and grip a boulder. Cheng Gang mirrors the motion — sleeves rolled up, revealing petrification traces on his forearms and the lean muscle beneath. His stone is a size smaller, but his form is perfect.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「知道這個營地是怎麼建起來的嗎？」他一邊舉石頭，一邊喘著氣。「五十個人——什麼都沒有。擠在黑暗裡發抖。」', textEn: '"Know how this camp was built?" He pants between lifts. "Fifty people — nothing at all. Shivering in the dark."', delay: 3000 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '你把石塊舉過頭頂，手臂在燃燒。承鋼點了點頭：「保持住——十秒。」', textEn: 'You hoist the boulder overhead, arms burning. Cheng Gang nods: "Hold it — ten seconds."', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「老鑄把碎石堆成了爐灶。一個叫春雷的礦工赤手空拳劈開石壁做窩棚。我們就是這麼活下來的——每一塊石頭，兩個人一起搬。」', textEn: '"Old Cast piled rubble into a forge. A miner named Spring Thunder split the wall bare-handed for shelter. That\'s how we survived — every stone, carried by two."', delay: 3500 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '你把石塊重重放下。雙臂在顫抖——但確實比開始的時候更有力了。', textEn: 'You set the boulder down heavily. Arms trembling — but undeniably stronger than before.', delay: 2200 });
    steps.push({ tag: '系統', tagColor: 'tag-system', html: '<b>訓練結束。</b>你感覺到自己的上肢力量有了明顯提升。', htmlEn: '<b>Training complete.</b> You feel a clear improvement in your upper body strength.', delay: 2000,
      effect: function() { changeStat('str', 1); state.flags.r2ChengTrainCount = 1; sfx.pass(); notify(L('STR +1（訓練 1/3）', 'STR +1 (Training 1/3)')); }
    });
  } else if (trainCount === 1) {
    // ═══ Session 2 (~30s): The Love — How he and Iron Frost fell for each other ═══
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '承鋼今天的氣色好了不少，蒼白的膚色透出了一絲血色。他今天換了一件無袖的背心，搬來了兩塊更大的石頭和一根鐵棍。手臂上的石化紋路已經褪去了大半，露出底下結實的肌理。「今天練推舉。」', textEn: 'Cheng Gang looks much better today, a flush of color returning to his pale skin. He\'s wearing a sleeveless vest, bringing two larger stones and an iron bar. The petrification on his arms has mostly faded, revealing the solid musculature beneath. "Today we do presses."', delay: 3000 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '你把沉重的鐵棍架上肩膀。石頭的重量壓得你膝蓋微彎——但你穩住了。', textEn: 'You hoist the heavy bar onto your shoulders. The stones\' weight buckles your knees — but you hold steady.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '承鋼看著你的動作，眼神有些恍惚：「你知道嗎——鐵霜第一次注意到我，也是在訓練場上。」', textEn: 'Cheng Gang watches your form, eyes distant: "You know — Iron Frost first noticed me on the training grounds."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「那時候她剛當上守備軍副指揮。我只是個菜鳥機甲駕駛員。」他笑了。「她嫌我太瘦。」', textEn: '"She had just made deputy garrison commander. I was a rookie mech pilot." He laughs. "She said I was too thin."', delay: 3000 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '「推上去——慢慢放下來。好。再一次。」承鋼一邊指導，一邊繼續說。', textEn: '"Push up — lower slowly. Good. Again." Cheng Gang coaches while continuing his story.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「她親自給我加訓。每天天不亮就把我從床上拖起來——跑步、舉重、格鬥。整整三個月，全身上下沒有不痛的地方。」', textEn: '"She personally added extra training. Dragged me out of bed before dawn — running, lifting, sparring. Three months, every part of me ached."', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '他的表情變得柔軟：「然後有一天晚上，我在訓練場摔斷了肋骨。」', textEn: 'His expression softens: "Then one night, I broke a rib on the training grounds."', delay: 2800 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '你咬著牙又推了一組。汗水順著額頭流進眼睛，但你沒有停下來。', textEn: 'You push through another set, teeth clenched. Sweat runs into your eyes, but you don\'t stop.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「她跑來醫務室，對著醫生吼了一頓——說是訓練強度太大。其實是她自己安排的。」', textEn: '"She rushed to the infirmary, yelled at the medic — said the intensity was too high. It was her own regimen."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「然後她坐在我床邊——一句話都沒說。就那樣坐了一整夜。」', textEn: '"Then she sat by my bed — didn\'t say a word. Just sat there the entire night."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「第二天早上枕頭邊放了一壺熱粥。她從來不會做飯——那碗粥鹹得要命。」承鋼笑出了聲。', textEn: '"Next morning, a pot of porridge by my pillow. She never cooked — salty as hell." Cheng Gang laughs aloud.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '他低下頭，聲音很輕：「那是我第一次覺得，她的力量不只是用來打仗的。」', textEn: 'He lowers his head, voice quiet: "That was the first time I felt her strength wasn\'t just for fighting."', delay: 3000 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '「好——最後一組。吸氣——推上去！」他的聲音突然嚴厲。你吼了一聲，把鐵棍推到最高點。', textEn: '"Last set. Inhale — push!" His voice turns sharp. You roar and drive the bar to its apex.', delay: 2800 });
    steps.push({ tag: '系統', tagColor: 'tag-system', html: '<b>訓練結束。</b>你的肩膀和核心肌群更加結實了。', htmlEn: '<b>Training complete.</b> Your shoulders and core feel considerably more solid.', delay: 2000,
      effect: function() { changeStat('str', 1); state.flags.r2ChengTrainCount = 2; sfx.pass(); notify(L('STR +1（訓練 2/3）', 'STR +1 (Training 2/3)')); }
    });
  } else {
    // ═══ Session 3 (~60s): The Sacrifice — The plague, piloting Mech 3, becoming the Colossus ═══
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '承鋼今天能自己走到訓練場了。他的步伐穩健了許多，曾經蒼白的皮膚恢復了健康的小麥色。他帶來了一面石板——比之前的石頭重了一倍。你注意到他的身形在短短幾天內幾乎恢復到石化前的狀態——寬肩窄腰，背脊挺得筆直。', textEn: 'Cheng Gang walks to the training ground on his own today. His stride is much steadier, and his skin has recovered a healthy tan from its former pallor. He brings a stone slab — twice the previous weight. You notice his frame has nearly recovered in just days — broad shoulders, tapered waist, back ramrod straight.', delay: 3200 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '「最後一次。今天——我們練的是極限。」他把背心脫了搭在石頭上，石化紋路從脊椎中線向兩側蔓延，像一對半展開的翅膀。', textEn: '"Last session. Today — we push limits." He pulls off his vest and drapes it on a stone. Petrification lines trace from his spine outward like half-spread wings.', delay: 2500 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '他讓你把石板背在背上，然後深蹲——一下、兩下、三下。你感覺脊椎在咯吱作響。', textEn: 'He has you carry the slab on your back, then squat — one, two, three. Your spine creaks.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '承鋼的表情沉了下來。今天的他——比前兩天更安靜。', textEn: 'Cheng Gang\'s expression darkens. Today, he\'s quieter than before.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「……你想聽最後的故事嗎？」他看著遠方。「瘟疫爆發那天的事。」', textEn: '"...Want to hear the last story?" He stares into the distance. "What happened the day the plague broke out."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「那天早上一切都很正常。我和鐵霜在食堂吃早飯——她還嫌我筷子拿得不好看。」', textEn: '"That morning, everything was normal. Iron Frost and I were eating breakfast — she was criticizing how I hold my chopsticks."', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「然後警報響了。地底水系突然變色——所有接觸過水源的人，身上開始長出石紋。」', textEn: '"Then the alarms went off. The underground water turned color — everyone who\'d touched it began growing stone lines."', delay: 3200 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '「蹲下去——再起來。不要停。」他的聲音有些沙啞。你照做了，腿在發抖。', textEn: '"Down — up. Don\'t stop." His voice rasps. You obey, legs trembling.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「鐵霜反應很快。她十分鐘內就下了三道命令：封鎖水源、疏散平民、武裝部隊集結。」', textEn: '"Iron Frost reacted fast. Three orders in ten minutes: seal the water, evacuate civilians, assemble the armed forces."', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「但通道被石化巨獸群堵住了——已經變異的生物正在往營地方向移動。五十條命，就堵在死路裡。」', textEn: '"But the passages were blocked by petrified beasts — mutated creatures moving toward camp. Fifty lives, trapped in a dead end."', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '承鋼停了一下，深吸一口氣，然後繼續。', textEn: 'Cheng Gang pauses, takes a deep breath, then continues.', delay: 2000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「三號戰甲——那是我們最後的防線。唯一一台還能運作的戰爭機械。」', textEn: '"Mech Unit No.3 — our last line of defense. The only war machine still operational."', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我自願上了駕駛座。不是因為勇敢——是因為除了我，沒人會開那東西。」', textEn: '"I volunteered for the pilot seat. Not out of bravery — I was the only one who knew how to operate it."', delay: 3000 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '你的腿在燃燒。石板壓在背上，每一次下蹲都像是極限。但承鋼的故事讓你忘記了痛。', textEn: 'Your legs burn. The slab weighs on your back, every squat feels like the limit. But his story makes you forget the pain.', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「鐵霜站在機甲下面，仰頭看著我。她沒有攔我——她知道必須有人去。」', textEn: '"Iron Frost stood beneath the mech, looking up. She didn\'t stop me — she knew someone had to go."', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '承鋼的手在顫抖——不是因為疲勞。', textEn: 'Cheng Gang\'s hands tremble — not from fatigue.', delay: 2000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「她只說了一句話——」他的聲音微微發顫。「『回來。』」', textEn: '"She said just one thing—" His voice wavers. "\'Come back.\'"', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我駕著機甲衝進了獸群。一隻、兩隻、十隻——我全部碾碎了。通道清了。人們跑了出去。」', textEn: '"I drove the mech into the swarm. One, two, ten — crushed them all. The passage cleared. People ran through."', delay: 3200 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '你放下石板，大口喘氣。但承鋼站在原地不動，眼睛看著自己的手。', textEn: 'You set the slab down, gasping. But Cheng Gang stands motionless, staring at his hands.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「但石化因子——從那些巨獸的血液裡滲進了機甲的裂縫。滲進了我的皮膚。」', textEn: '"But the petrification factor seeped through the mech\'s cracks from the beasts\' blood. Into my skin."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我感覺自己的手指變硬了。然後是手臂。然後是——意識開始模糊。」', textEn: '"I felt my fingers stiffen. Then my arms. Then — consciousness began to blur."', delay: 3000 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「最後一個念頭是——我沒能回去。我沒能兌現那個承諾。」', textEn: '"My last thought was — I couldn\'t make it back. I couldn\'t keep that promise."', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '沉默了很長一段時間。營地的風吹過來，帶著營火的煙味。遠處有人在唱歌。', textEn: 'A long silence. Wind from the camp carries woodsmoke. Someone is singing in the distance.', delay: 3500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「……但你把我喚醒了。」他轉過頭看你，眼眶泛紅。「三年的噩夢——結束了。」', textEn: '"...But you woke me." He turns to you, eyes reddening. "Three years of nightmares — over."', delay: 3000 });
    steps.push({ tag: '訓練', tagColor: 'tag-combat', text: '「最後一組。來——和我一起。」他也拿起了一塊石頭。兩個人並肩蹲下，又站起來。', textEn: '"One last set. Come — with me." He picks up a stone too. Side by side, you squat and rise together.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你們一起完成了最後十下。放下石頭的時候，他的手搭上了你的肩膀——掌心寬厚而溫熱，帶著訓練後的汗意。他的琥珀色眼睛直直看著你，那種目光有重量，像是把你整個人都看進去了。', textEn: 'You finish the last ten reps together. As you set down the stones, his hand rests on your shoulder — his palm broad and warm, damp with sweat from the session. His amber eyes meet yours directly, carrying a weight in them, as if seeing you entirely.', delay: 3200 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「你比我強。」承鋼說，嘴角微微上揚。汗水從他的額角滑下，沿著線條分明的下顎滴落。「不只是力量——是那種……不放棄任何人的堅持。」', textEn: '"You\'re stronger than me." Cheng Gang says, lips curving slightly. Sweat traces from his temple along that defined jawline before dripping. "Not just in strength — it\'s that... refusal to give up on anyone."', delay: 3200 });
    steps.push({ tag: '系統', tagColor: 'tag-system', html: '<b>最終訓練結束。</b>你的身體已經脫胎換骨。承鋼的故事，也成為了你力量的一部分。', htmlEn: '<b>Final training complete.</b> Your body has been transformed. Cheng Gang\'s story has become part of your strength.', delay: 2500,
      effect: function() { changeStat('str', 1); state.flags.r2ChengTrainCount = 3; sfx.pass(); notify(L('STR +1（訓練 3/3 完成！）', 'STR +1 (Training 3/3 complete!)')); }
    });
  }

  autoExplore(steps, [
    { text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') },
  ], { label: L('力量訓練 ' + (trainCount + 1) + '/3', 'Strength Training ' + (trainCount + 1) + '/3') });
});
