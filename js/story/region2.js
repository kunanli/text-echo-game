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
  ], [
    { text: '觀察採石場', textEn: 'Survey the quarry', action: () => loadNode('r2_look') },
  ], { label: L('進入大採石場', 'Entering Great Quarry') });
});

// ── Hub: Quarry Overview ──
registerNode('r2_look', () => {
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
    c.push({ text: '巡邏採石場', textEn: 'Patrol the quarry', action: () => loadNode('r2_patrol') });
    c.push({ text: '返回石脈迴廊', textEn: 'Return to Vein Corridor', action: () => loadNode('r1_deep') });
    return c;
  })(), { label: L('觀察採石場', 'Surveying quarry') });
});

// ── Quarry Floor — 採石台 ──
registerNode('r2_quarry_floor', () => {
  var steps = [
    { art: `<pre class="ascii-art gold">
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
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '你來到了採石場的主作業區。巨大的採石台上還留著開鑿的痕跡。', textEn: 'You reach the quarry\'s main work area. Massive platforms still bear chisel marks.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '採石台之間生長著密集的石化結晶——有些高達兩米，散發出危險的金色光芒。', textEn: 'Dense petrification crystals grow between platforms — some two meters tall, radiating dangerous golden light.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '地面上散落著巨型鑿岩工具和採礦車的殘骸。', textEn: 'Giant rock-carving tools and mining cart remains litter the ground.', delay: 2000 },
  ];
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
          { tag: '恢復', tagColor: 'tag-explore', text: '清露用特製的藥膏塗抹你的石化部位，然後纏上浸泡過淨化液的繃帶。', textEn: 'Dew applies a special salve to your petrified areas, then wraps them in purified bandages.', delay: 2200 },
          { tag: '恢復', tagColor: 'tag-explore', text: '一股清涼的感覺擴散開來——石化的灰色紋路明顯消退了。', textEn: 'A cool sensation spreads — the grey petrification patterns visibly recede.', delay: 2200 },
          { tag: '恢復', tagColor: 'tag-explore', text: '「這是我僅剩的藥膏了。好好利用。」清露嘆了口氣。', textEn: '"That\'s the last of my salve. Use it well." Dew sighs.', delay: 2200 },
        ], [
          { text: '返回營地', textEn: 'Return to camp', action: () => loadNode('r2_camp') },
        ], { label: L('接受治療', 'Receiving treatment') });
      }});
    }
    if (!state.flags.r2MedicElixir) {
      c.push({ text: '詢問有沒有藥物可以帶走', textEn: 'Ask if there\'s medicine to take along', action: () => {
        state.flags.r2MedicElixir = true;
        addItem(L('濃縮淨化液', 'Concentrated Purifier'));
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', html: '清露猶豫了一下，然後從藥箱裡拿出一小瓶深綠色的液體：「<b>濃縮淨化液</b>——最後一瓶了。」', htmlEn: 'Dew hesitates, then produces a small bottle of dark green liquid from her kit: "<b>Concentrated Purifier</b> — the last bottle."', delay: 2800 },
          { tag: '情報', tagColor: 'tag-info', text: '「在關鍵時刻用。它能大幅降低石化度。」', textEn: '"Use it at a critical moment. It dramatically reduces petrification."', delay: 2200 },
        ], [
          { text: '道謝', textEn: 'Thank her', action: () => loadNode('r2_camp') },
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
  autoExplore([
    { tag: '情報', tagColor: 'tag-info', text: '鐵霜站了起來，用石化的左手握緊了石錘。', textEn: 'Iron Frost rises, gripping her stone hammer with her petrified left hand.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '「好。我帶兩個最好的戰士跟你一起去。其他人留下守營地。」', textEn: '"Good. I\'ll take two of our best fighters with you. The rest guard the camp."', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「記住——那頭巨獸是半人半機甲的存在。普通攻擊對它的外殼效果很差。」', textEn: '"Remember — that colossus is half-human, half-mech. Normal attacks barely scratch its shell."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', html: '「你有機甲控制鍵——<b>在戰鬥中找到它胸口的核心接口，插入控制鍵就能讓它短路。</b>」', htmlEn: '"You have the mech control key — <b>find the core port on its chest during battle. Insert the key to short-circuit it.</b>"', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「但在那之前，你得先打穿它的護甲……準備好了嗎？」', textEn: '"But first you need to break through its armor... Are you ready?"', delay: 2500 },
  ], [
    { text: '出發！', textEn: 'Let\'s go!', action: () => loadNode('r2_boss') },
    { text: '再準備一下', textEn: 'I need more preparation', action: () => loadNode('r2_camp') },
  ], { label: L('作戰準備', 'Battle preparations') });
});

registerNode('r2_boss', () => {
  var BOSS = {
    name: '石化巨像', nameEn: 'Petrified Colossus',
    hp: 60, atkMin: 8, atkMax: 14, petriDmg: 5, xp: 40,
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
      { tag: '環境', tagColor: 'tag-system', text: '石化巨像已經倒下。通往上升通道的路終於暢通了。', textEn: 'The Petrified Colossus has fallen. The path to the ascent shaft is finally clear.', delay: 2000 },
      { tag: '行動', tagColor: 'tag-move', text: '你將機甲控制鍵插入通道閘門的控制台。', textEn: 'You insert the mech control key into the shaft gate\'s control panel.', delay: 2200 },
      { tag: '環境', tagColor: 'tag-system', text: '齒輪轉動的聲音在岩壁中迴盪——厚重的金屬閘門緩緩升起。', textEn: 'Gears grind within the rock — the heavy metal gate slowly rises.', delay: 2500 },
      { tag: '感知', tagColor: 'tag-sense', text: '閘門後是一條向上延伸的斜坡隧道。你能感覺到……來自上方的風。', textEn: 'Beyond the gate, a sloped tunnel ascends. You can feel... wind from above.', delay: 2500 },
      { tag: '情報', tagColor: 'tag-info', html: '鐵霜拍了拍你的肩膀：「前面就是<b>河城渡口</b>——地底世界的交通樞紐。如果還有人類社會存在的話，就在那裡。」', htmlEn: 'Iron Frost pats your shoulder: "Ahead lies the <b>River City Ferry</b> — the underground world\'s transport hub. If human society still exists, it\'s there."', delay: 3000 },
      { tag: '情報', tagColor: 'tag-info', text: '「我會帶大家跟上來的。你先走吧——路上小心。」', textEn: '"I\'ll bring everyone along. Go ahead — be careful."', delay: 2500 },
      { tag: '系統', tagColor: 'tag-system', html: '<i>（第四層 — 河城渡口的冒險將在後續更新中展開……）</i>', htmlEn: '<i>(Floor 4 — River City Ferry adventures coming in a future update...)</i>', delay: 1500 },
    ], [
      { text: '在閘門口休息，準備下一段旅程', textEn: 'Rest at the gate, prepare for the next journey', action: () => {
        changeHp(25);
        changePetri(-8);
        notify(L('HP +25，石化度 -8%', 'HP +25, Petri -8%'));
        loadNode('r2_look');
      }},
    ], { label: L('開啟上升通道', 'Opening ascent shaft') });
  } else {
    autoExplore([
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

// ── Region 2 Patrol ──
registerNode('r2_patrol', () => {
  autoExplore([
    { tag: '判斷', tagColor: 'tag-move', text: '採石場的怪物比迴廊更加兇猛。但你需要更多的戰鬥經驗來面對前方的挑戰。', textEn: 'Quarry monsters are fiercer than those in the corridor. But you need combat experience for the challenges ahead.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '你握緊武器，踏入了採石台之間的暗影。', textEn: 'You grip your weapon and step into the shadows between quarry platforms.', delay: 2000 },
  ], [
    { text: '開始巡邏', textEn: 'Begin patrol', action: () => startPatrol() },
    { text: '返回', textEn: 'Return', action: () => loadNode('r2_look') },
  ], { label: L('準備巡邏', 'Preparing patrol') });
});
