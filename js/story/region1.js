// ══ Region 1 — 石脈迴廊 ══

// ═══════════════════════════════════════════════════
//  Region 1 — 石脈迴廊 (Vein Corridor)
// ═══════════════════════════════════════════════════

registerNode('r1_start', () => {
  state.region = 1;
  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '石門在你身後緩緩關閉。', textEn: 'The stone gate slowly closes behind you.', delay: 1500 },
    { art: `<pre class="ascii-art blue">
  ╔══════╦═══════════════════════════════════╦══════╗
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░║      石    脈    迴    廊         ║░░░░░░║
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░╠═══════════════════════════════════╣░░░░░░║
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░║   .:*~*:.              .:*~*:.    ║░░░░░░║
  ║░░░░░░║  .:*~*~*:.            .:*~*~*:.   ║░░░░░░║
  ║░░░░░░║    礦  脈              礦  脈     ║░░░░░░║
  ║░░░░░░║  .:*~*~*:.            .:*~*~*:.   ║░░░░░░║
  ║░░░░░░║   .:*~*:.              .:*~*:.    ║░░░░░░║
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░║              . . .                ║░░░░░░║
  ║░░░░░░║             . _o_ .               ║░░░░░░║
  ║░░░░░░║            . / | \\ .              ║░░░░░░║
  ║░░░░░░║              . 你 .                ║░░░░░░║
  ║░░░░░░║              ' ' '                ║░░░░░░║
  ╚══════╩═══════════════════════════════════╩══════╝
</pre>`, artEn: `<pre class="ascii-art blue">
  ╔══════╦═══════════════════════════════════╦══════╗
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░║     V E I N    C O R R I D O R   ║░░░░░░║
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░╠═══════════════════════════════════╣░░░░░░║
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░║   .:*~*:.              .:*~*:.    ║░░░░░░║
  ║░░░░░░║  .:*~*~*:.            .:*~*~*:.   ║░░░░░░║
  ║░░░░░░║   Ore Vein             Ore Vein   ║░░░░░░║
  ║░░░░░░║  .:*~*~*:.            .:*~*~*:.   ║░░░░░░║
  ║░░░░░░║   .:*~*:.              .:*~*:.    ║░░░░░░║
  ║░░░░░░║                                   ║░░░░░░║
  ║░░░░░░║              . . .                ║░░░░░░║
  ║░░░░░░║             . _o_ .               ║░░░░░░║
  ║░░░░░░║            . / | \\ .              ║░░░░░░║
  ║░░░░░░║              .You .                ║░░░░░░║
  ║░░░░░░║              ' ' '                ║░░░░░░║
  ╚══════╩═══════════════════════════════════╩══════╝
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', html: '你踏入了<b>石脈迴廊</b>。', htmlEn: 'You step into the <b>Vein Corridor</b>.', delay: 1800 },
    { tag: '感知', tagColor: 'tag-sense', text: '這裡不再是天然洞穴——走廊由切割整齊的石磚砌成。', textEn: 'No longer a natural cave — the corridor is built of precisely cut stone bricks.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '牆壁上鑲嵌著發光的石化礦脈，散發出幽藍冷光。', textEn: 'Glowing petrification ore veins are embedded in the walls, casting cold blue light.', delay: 2000 },
    { tag: '石化', tagColor: 'tag-petri', text: '空氣中的石化氣息比坑底更濃。', textEn: 'The petrification in the air is denser than in the pit below.', delay: 1800 },
    { tag: '感知', tagColor: 'tag-sense', text: '遠處傳來金屬碰撞的迴音。', textEn: 'The echo of clanging metal resonates in the distance.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '這裡曾經是一座礦坑——地表文明崩潰後，人類在地下開採石化礦脈的設施。', textEn: 'This was once a mine — after the surface collapsed, humans extracted petrification ore underground.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '正是這些礦工挖穿了古老的封印，釋放出石化瘟疫……', textEn: 'It was these miners who breached the ancient seal, unleashing the Stone Plague...', delay: 2800 },
  ], [
    { text: '觀察迴廊', textEn: 'Survey the corridor', action: () => loadNode('r1_look') },
  ], { label: L('進入石脈迴廊', 'Entering Vein Corridor') });
});

registerNode('r1_look', () => {
  state.region = 1;
  var firstVisit = !state.flags.r1Looked;
  state.flags.r1Looked = true;

  var mapArt = { art: `<pre class="ascii-art blue">
           北：鍛 造 間
              │
  ┌───────────┼───────────┐
  │   .:*:.   │   .:*:.   │
  │  *~*~*~*  │  *~*~*~*  │
  │   礦脈    │   礦脈    │
  │           │           │
  │  ╔═════╗  │           │
  │  ║ 礦 ║──┤  鐵軌遺跡 │
  │  ║ 車 ║  │  ========= │
  │  ╚═════╝  │           │
  │           │           │
  ├─── 西 ────┼──── 東 ───┤
  │           │           │
  │  石化結晶  │  守衛殘骸  │
  │  .:*~*:.  │   ╱▔▔╲   │
  │           │  │ ░░ │   │
  │           │   ╲__╱    │
  └───────────┼───────────┘
              │
           南：石 門（返回）
</pre>`, artEn: `<pre class="ascii-art blue">
            N: Forge Room
              │
  ┌───────────┼───────────┐
  │   .:*:.   │   .:*:.   │
  │  *~*~*~*  │  *~*~*~*  │
  │  Ore Vein │  Ore Vein │
  │           │           │
  │  ╔═════╗  │           │
  │  ║Cart ║──┤ Rail Track│
  │  ║     ║  │ ========= │
  │  ╚═════╝  │           │
  │           │           │
  ├─── W ─────┼──── E ────┤
  │           │           │
  │ Petri     │  Guard    │
  │ Crystal   │  Remains  │
  │ .:*~*:.   │   ╱▔▔╲   │
  │           │  │ ░░ │   │
  │           │   ╲__╱    │
  └───────────┼───────────┘
              │
           S: Gate (Return)
</pre>`, delay: 800 };

  var steps = firstVisit ? [
    { tag: '探索', tagColor: 'tag-explore', text: '你仔細觀察石脈迴廊的構造。', textEn: 'You study the structure of the Vein Corridor.', delay: 2000 },
    mapArt,
    { tag: '探索', tagColor: 'tag-explore', text: '迴廊是一個十字形結構，中央有生鏽的鐵軌延伸向各個方向。', textEn: 'The corridor forms a cross shape, with rusted rails stretching in every direction.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '中央停著一輛破舊的礦車，車身覆蓋著灰色的石化結晶。', textEn: 'A broken-down mine cart sits at the center, encrusted with grey petrification crystals.', delay: 2500 },
    { tag: '發現', tagColor: 'tag-item', html: '北面通道盡頭似乎有<b>火光</b>閃爍——那裡可能是鍛造間。', htmlEn: '<b>Firelight</b> flickers at the end of the northern passage — possibly a forge room.', delay: 2200 },
    { tag: '探索', tagColor: 'tag-explore', text: '東面走廊的盡頭有一具巨大的石化殘骸——像是某種守衛。', textEn: 'At the east end, a massive petrified husk — some kind of guardian.', delay: 2200 },
    { tag: '探索', tagColor: 'tag-explore', text: '西面的牆壁上結晶特別密集，空氣中充斥著刺鼻的石化氣息。', textEn: 'The western walls are thick with crystals, the air heavy with petrification.', delay: 2200 },
  ] : [
    { tag: '行動', tagColor: 'tag-move', text: '你回到了石脈迴廊中央，環顧四周。', textEn: 'You return to the center of the Vein Corridor and survey the area.', delay: 1500 },
    mapArt,
  ];

  autoExplore(steps, (function() {
    var c = [];
    c.push({ text: '探索北面鍛造間', textEn: 'Explore the forge room to the north', action: () => loadNode('r1_forge') });
    c.push({ text: '查看東面的守衛殘骸', textEn: 'Examine the guardian remains to the east', action: () => loadNode('r1_guard_check') });
    c.push({ text: '調查西面的結晶礦脈', textEn: 'Investigate the crystal veins to the west', action: () => loadNode('r1_crystal') });
    if (state.flags.r1ForgeVisited && state.flags.r1GuardDefeated) {
      c.push({ text: '沿鐵軌深入迴廊', textEn: 'Follow the rails deeper', action: () => loadNode('r1_deep') });
    }
    if (!state.flags.r1MinecartDone) {
      c.push({ text: '查看廢棄礦車軌道', textEn: 'Check the abandoned mine cart track', action: () => loadNode('r1_minecart') });
    }
    if (!state.flags.r1RiverDone) {
      c.push({ text: '循水聲探索地下河', textEn: 'Follow the sound of water to an underground river', action: () => loadNode('r1_underground_river') });
    }
    if (!state.flags.r1CollapseDone) {
      c.push({ text: '冒險穿越坍塌區域', textEn: 'Risk passage through the collapsed area', action: () => loadNode('r1_collapse') });
    }
    if (!state.flags.r1ShrineDone) {
      c.push({ text: '前往礦工祠堂', textEn: 'Visit the miner\'s shrine', action: () => loadNode('r1_shrine') });
    }
    if (!state.flags.r1VeinDeepDone) {
      c.push({ text: '深入高密度結晶區', textEn: 'Venture into the dense crystal vein', action: () => loadNode('r1_vein_deep') });
    }
    if (!state.flags.r1GhostDone) {
      c.push({ text: '靠近那個半透明的身影', textEn: 'Approach the translucent figure', action: () => loadNode('r1_ghost') });
    }
    c.push({ text: '在迴廊中巡邏練級', textEn: 'Patrol the corridor for experience', action: () => loadNode('r1_patrol') });
    return c;
  })(), { label: L('觀察迴廊', 'Surveying corridor') });
});

// ── Forge Room ──
registerNode('r1_forge', () => {
  var firstVisit = !state.flags.r1ForgeVisited;
  state.flags.r1ForgeVisited = true;
  var steps = [];
  if (!firstVisit) {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你再次走進了鍛造間。熔爐的餘火依舊微弱地燃著。', textEn: 'You enter the forge room again. Faint embers still glow in the furnace.', delay: 1500 });
  }
  steps = steps.concat([
    { art: `<pre class="ascii-art red">
  ╔═══════════════════════════════════════════╗
  ║                                           ║
  ║       ╱▔▔▔▔▔▔▔╲        ╱╲  ╱╲           ║
  ║      │ ░░░░░░░░ │      │  ╲╱  │          ║
  ║      │ ░ 熔 爐 ░ │      │ 風 箱 │          ║
  ║      │ ░░*火*░░ │      │      │          ║
  ║      │ ░░░░░░░░ │       ╲____╱           ║
  ║       ╲________╱                          ║
  ║                                           ║
  ║   ╔══════╗  ┌──────┐  ┌──────┐           ║
  ║   ║ 鐵  ║  │ 工具 │  │ 礦石 │           ║
  ║   ║ 砧  ║  │ 架   │  │ 堆   │           ║
  ║   ╚══════╝  └──────┘  └──────┘           ║
  ║                                           ║
  ╚═══════════════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art red">
  ╔═══════════════════════════════════════════╗
  ║                                           ║
  ║       ╱▔▔▔▔▔▔▔╲        ╱╲  ╱╲           ║
  ║      │ ░░░░░░░░ │      │  ╲╱  │          ║
  ║      │ ░Furnace░ │      │Bellows│          ║
  ║      │ ░░*fire*░ │      │      │          ║
  ║      │ ░░░░░░░░ │       ╲____╱           ║
  ║       ╲________╱                          ║
  ║                                           ║
  ║   ╔══════╗  ┌──────┐  ┌──────┐           ║
  ║   ║Anvil ║  │Tools │  │ Ore  │           ║
  ║   ║      ║  │ Rack │  │ Pile │           ║
  ║   ╚══════╝  └──────┘  └──────┘           ║
  ║                                           ║
  ╚═══════════════════════════════════════════╝
</pre>`, delay: 800 },
  ]);
  if (firstVisit) {
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '北面通道盡頭是一間廢棄的鍛造間。', textEn: 'The northern passage ends at an abandoned forge room.', delay: 2000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '出乎意料的是——熔爐裡還有微弱的餘火。', textEn: 'Surprisingly — faint embers still glow in the furnace.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '這裡曾用來冶煉石化礦石。工具架上還掛著幾把鏽蝕的工具。', textEn: 'This place smelted petrification ore. A few rusted tools still hang on the rack.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '鐵砧旁有一個皮革工具包，看起來保存得還不錯。', textEn: 'A leather tool pouch sits beside the anvil, still in decent condition.', delay: 2200 });
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '角落裡堆著一些未加工的礦石，其中幾塊散發著異樣的光芒。', textEn: 'Unprocessed ore piles up in the corner, some pieces glowing strangely.', delay: 2200 });
  }
  if (!state.flags.r1ForgeSearched) {
    steps.push({ tag: '發現', tagColor: 'tag-item', html: '工具包裡有一把品質不錯的<b>鍛造鐵錘</b>。', htmlEn: 'Inside the pouch — a decent-quality <b>Forged Hammer</b>.', delay: 2000, effect: () => { addItem(L('鍛造鐵錘', 'Forged Hammer')); state.flags.r1ForgeSearched = true; } });
  }
  autoExplore(steps, [
    { text: '嘗試使用熔爐', textEn: 'Try using the furnace', action: () => loadNode('r1_furnace') },
    { text: '搜索鍛造間的其他角落', textEn: 'Search the rest of the forge', action: () => loadNode('r1_forge_search') },
    { text: '返回迴廊', textEn: 'Return to corridor', action: () => loadNode('r1_look') },
  ], { label: L('探索鍛造間', 'Exploring forge') });
});

registerNode('r1_furnace', () => {
  var hasCrystal = hasItem(L('石化結晶', 'Petri Crystal'));
  var hasFlask = hasItem(L('石化水瓶', 'Petri-Water Flask'));
  var furnaceArt = { art: `<pre class="ascii-art red">
      ╱▔▔▔▔▔▔▔╲
     │ ░░░░░░░░ │
     │ ░░*火*░░ │    ~  ~  ~
     │ ░░░░░░░░ │   ~ 煙 霧 ~
      ╲________╱     ~  ~  ~
         ╱  ╲
    ════╤════╤════
        │    │
   ─────┴────┴─────
</pre>`, artEn: `<pre class="ascii-art red">
      ╱▔▔▔▔▔▔▔╲
     │ ░░░░░░░░ │
     │ ░░*fire*░ │    ~  ~  ~
     │ ░░░░░░░░ │   ~ Smoke ~
      ╲________╱     ~  ~  ~
         ╱  ╲
    ════╤════╤════
        │    │
   ─────┴────┴─────
</pre>`, delay: 800 };
  if (hasCrystal || hasFlask) {
    autoExplore([
      furnaceArt,
      { tag: '行動', tagColor: 'tag-move', text: '你把材料放入熔爐中……', textEn: 'You place materials into the furnace...', delay: 1800 },
      { tag: '環境', tagColor: 'tag-system', text: '火焰舔舐著石化礦物，發出嘶嘶的聲響。', textEn: 'Flames lick at the petrification minerals, hissing loudly.', delay: 2200 },
      { tag: '感知', tagColor: 'tag-sense', text: '灰色的煙霧升起，散發出刺鼻的氣味——你退後幾步。', textEn: 'Grey smoke rises, acrid — you step back.', delay: 2500 },
      { tag: '物品', tagColor: 'tag-item', html: '爐中的礦物融合凝結，形成了一枚<b>抗石化護符</b>。', htmlEn: 'The minerals fuse and solidify into an <b>Anti-Petri Amulet</b>.', delay: 2500, effect: () => {
        if (hasCrystal) removeItem(L('石化結晶', 'Petri Crystal'));
        if (hasFlask) removeItem(L('石化水瓶', 'Petri-Water Flask'));
        addItem(L('抗石化護符', 'Anti-Petri Amulet'));
        changePetri(-8);
      }},
      { tag: '情報', tagColor: 'tag-info', text: '佩戴它能減緩石化的侵蝕速度。', textEn: 'Wearing it slows the spread of petrification.', delay: 1800 },
    ], [
      { text: '返回鍛造間', textEn: 'Return to forge', action: () => loadNode('r1_forge') },
    ], { label: L('使用熔爐', 'Using furnace') });
  } else {
    autoExplore([
      furnaceArt,
      { tag: '行動', tagColor: 'tag-move', text: '你查看了熔爐。餘火還能用，但你沒有合適的材料。', textEn: 'You check the furnace. Embers remain, but you have no suitable materials.', delay: 2000 },
      { tag: '情報', tagColor: 'tag-info', text: '也許石化結晶或石化之水可以在這裡加工。', textEn: 'Perhaps petrification crystals or water could be processed here.', delay: 2200 },
    ], [
      { text: '返回鍛造間', textEn: 'Return to forge', action: () => loadNode('r1_forge') },
    ], { label: L('查看熔爐', 'Checking furnace') });
  }
});

registerNode('r1_forge_search', () => {
  if (state.flags.r1ForgeFullSearch) {
    renderScene(L('你再次翻找鍛造間的每個角落，但已經沒有新的發現了。', 'You search every corner again, but find nothing new.'),
      [{ text: '返回', textEn: 'Return', action: () => loadNode('r1_forge') }]);
    return;
  }
  state.flags.r1ForgeFullSearch = true;
  autoExplore([
    { art: `<pre class="ascii-art red">
     ┌──────┐  ┌──────┐  ┌──────┐
     │ 工具 │  │ 模具 │  │ 礦石 │
     │ ╳╳╳  │  │ ○□△  │  │ .:*: │
     └──┬───┘  └──┬───┘  └──┬───┘
  ──────┴─────────┴─────────┴──────
     ╔══════╗
     ║ 手札 ║  ← 灰塵覆蓋
     ║ ≡≡≡≡ ║
     ╚══════╝
</pre>`, artEn: `<pre class="ascii-art red">
     ┌──────┐  ┌──────┐  ┌──────┐
     │Tools │  │Molds │  │ Ore  │
     │ ╳╳╳  │  │ ○□△  │  │ .:*: │
     └──┬───┘  └──┬───┘  └──┬───┘
  ──────┴─────────┴─────────┴──────
     ╔══════╗
     ║Jrnl. ║  ← dust-covered
     ║ ≡≡≡≡ ║
     ╚══════╝
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '你仔細翻找鍛造間的各個角落。', textEn: 'You carefully search every corner of the forge.', delay: 2000 },
    { tag: '發現', tagColor: 'tag-item', text: '礦石堆底下藏著一本被灰塵覆蓋的手札。', textEn: 'Beneath the ore pile, a dust-covered journal.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', html: '手札上寫道：<b>「守衛的核心在胸口——只有鈍器才能擊碎它。」</b>', htmlEn: 'The journal reads: <b>"The guardian\'s core is in its chest — only blunt weapons can shatter it."</b>', delay: 3000, effect: () => { state.flags.r1GuardHint = true; } },
    { tag: '情報', tagColor: 'tag-info', text: '後面還寫著：「東面的守衛已經石化了……但它仍在巡邏。瘟疫驅動著它，就像驅動那些石礦工一樣。」', textEn: 'It continues: "The eastern guardian has petrified... but it still patrols. The plague drives it, just as it drives the Stone Miners."', delay: 3200 },
    { tag: '發現', tagColor: 'tag-item', html: '手札的夾頁中掉出了一張<b>迴廊地圖</b>。', htmlEn: 'A <b>Corridor Map</b> slips out from the journal\'s pages.', delay: 2000, effect: () => addItem(L('迴廊地圖', 'Corridor Map')) },
    { tag: '情報', tagColor: 'tag-info', text: '地圖上標註了一條通往更深處的路線——需要穿過守衛所在的區域。', textEn: 'The map marks a route deeper — through the guardian\'s area.', delay: 2500 },
  ], [
    { text: '返回鍛造間', textEn: 'Return to forge', action: () => loadNode('r1_forge') },
  ], { label: L('搜索鍛造間', 'Searching forge') });
});

// ── Crystal Vein (West) ──
registerNode('r1_crystal', () => {
  var firstVisit = !state.flags.r1CrystalVisited;
  state.flags.r1CrystalVisited = true;
  var steps = [];
  if (!firstVisit) {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你再次走向結晶區。空氣中的石化粒子依舊濃密，但你已經比較習慣了。', textEn: 'You head for the crystal area again. Petri-particles are still thick, but you\'re more used to it.', delay: 1800 });
  }
  steps = steps.concat([
    { art: `<pre class="ascii-art purple">
     .:*~*:.    .:*~*:.    .:*~*:.    .:*~*:.
    *~*~*~*~*  *~*~*~*~*  *~*~*~*~*  *~*~*~*~*
   *~* 石 *~*~* 化 *~*~* 結 *~*~* 晶 *~*
    *~*~*~*~*  *~*~*~*~*  *~*~*~*~*  *~*~*~*~*
     ':*~*:'    ':*~*:'    ':*~*:'    ':*~*:'
         \\         |         |         /
          \\        |         |        /
           \\       |         |       /
    ════════╧══════╧═════════╧══════╧════════
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░  石化粒子在空氣中飄浮  ░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, artEn: `<pre class="ascii-art purple">
     .:*~*:.    .:*~*:.    .:*~*:.    .:*~*:.
    *~*~*~*~*  *~*~*~*~*  *~*~*~*~*  *~*~*~*~*
   *~* Pe *~*~* tri *~*~* Cry *~*~* stal *~*
    *~*~*~*~*  *~*~*~*~*  *~*~*~*~*  *~*~*~*~*
     ':*~*:'    ':*~*:'    ':*~*:'    ':*~*:'
         \\         |         |         /
          \\        |         |        /
           \\       |         |       /
    ════════╧══════╧═════════╧══════╧════════
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░ Petri particles float in the air ░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, delay: 800 },
  ]);
  if (firstVisit) {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走向西面結晶密集的區域。', textEn: 'You head toward the crystal-dense western area.', delay: 1500 });
    steps.push({ tag: '警告', tagColor: 'tag-warn', text: '越靠近，空氣越沉重——石化粒子肉眼可見地漂浮著。', textEn: 'The closer you get, the heavier the air — petrification particles visibly float.', delay: 2200 });
    steps.push({ tag: '石化', tagColor: 'tag-petri', text: '你感覺到皮膚表面微微發緊。', textEn: 'Your skin begins to feel taut.', delay: 2000 });
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '巨大的石化結晶從牆壁和天花板生長出來，像冰凌一樣交錯。', textEn: 'Enormous petrification crystals jut from walls and ceiling, criss-crossing like icicles.', delay: 2500 });
    steps.push({ tag: '發現', tagColor: 'tag-item', text: '結晶叢中隱約可以看到一些被石化的物品——武器、盔甲的碎片。', textEn: 'Among the crystals, petrified objects are visible — weapon and armor fragments.', delay: 2500 });
  }
  autoExplore(steps, [
    { label: checkLabel('嘗試採集結晶', 'Try to harvest crystals', 'wil', 9), action: () => {
      changePetri(3);
      var r = statCheck('wil', 9);
      if (r === 'crit') {
        autoExplore([
          { tag: '大成功', tagColor: 'tag-info', text: '你的精神力完美壓制住石化氣息——在結晶叢中如入無人之境！', textEn: 'Your willpower perfectly suppresses the petrification — you move freely among the crystals!', delay: 1500 },
          { tag: '行動', tagColor: 'tag-move', text: '你精準地敲下兩塊品質極高的結晶。', textEn: 'You precisely chip off two extremely high-quality crystals.', delay: 2000 },
          { tag: '物品', tagColor: 'tag-item', html: '獲得兩塊<b>純淨石化結晶</b>。', htmlEn: 'Acquired two <b>Pure Petri Crystals</b>.', delay: 2000, effect: () => { addItem(L('純淨石化結晶', 'Pure Petri Crystal')); addItem(L('純淨石化結晶', 'Pure Petri Crystal')); } },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r1_look') }]);
      } else if (r === 'pass') {
        autoExplore([
          { tag: '意志', tagColor: 'tag-info', text: '你集中精神，壓制住石化的侵蝕。', textEn: 'You focus, suppressing the petrification.', delay: 1500 },
          { tag: '行動', tagColor: 'tag-move', text: '你小心翼翼地敲下一塊純淨的結晶。', textEn: 'You carefully chip off a pure crystal.', delay: 2000 },
          { tag: '物品', tagColor: 'tag-item', html: '獲得<b>純淨石化結晶</b>——品質比坑底的好得多。', htmlEn: 'Acquired <b>Pure Petri Crystal</b> — much higher quality than the pit\'s.', delay: 2000, effect: () => addItem(L('純淨石化結晶', 'Pure Petri Crystal')) },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r1_look') }]);
      } else {
        changePetri(5);
        changeHp(-4);
        autoExplore([
          { tag: '失敗', tagColor: 'tag-warn', text: '你靠近結晶——石化粒子猛然湧向你！', textEn: 'You approach the crystals — petrification particles surge at you!', delay: 1500 },
          { tag: '石化', tagColor: 'tag-petri', text: '手臂瞬間變得僵硬，你慌忙退了回來。', textEn: 'Your arms go rigid instantly. You scramble back.', delay: 2000 },
          { tag: '傷害', tagColor: 'tag-warn', text: '需要更強的意志力才能在這裡停留。', textEn: 'You need stronger willpower to linger here.', delay: 1800 },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r1_look') }]);
      }
    }},
    { text: '查看被石化的物品', textEn: 'Examine the petrified objects', action: () => loadNode('r1_crystal_items') },
    { text: '返回', textEn: 'Return', action: () => loadNode('r1_look') },
  ], { label: L('調查結晶區', 'Investigating crystals') });
});

registerNode('r1_crystal_items', () => {
  if (state.flags.r1CrystalItemsTaken) {
    renderScene(L('結晶中的物品你已經取過了。剩下的都完全石化，無法使用。', 'You\'ve already taken what you could. The rest is fully petrified and useless.'),
      [{ text: '返回', textEn: 'Return', action: () => loadNode('r1_look') }]);
    return;
  }
  state.flags.r1CrystalItemsTaken = true;
  autoExplore([
    { art: `<pre class="ascii-art purple">
    .:*~*:.    .:*~*:.    .:*~*:.
   *~*~*~*~*  *~*~*~*~*  *~*~*~*~*
  *~*  ╔══╗ *~* ┌──┐ *~* ╱▔▔╲  *~*
  *~*  ║盾║ *~* │瓶│ *~* │??│  *~*
  *~*  ╚══╝ *~* └──┘ *~* ╲__╱  *~*
   *~*~*~*~*  *~*~*~*~*  *~*~*~*~*
    ':.*~*.'    ':.*~*.'    ':.*~*.'
  ────────────────────────────────
    石 化 結 晶 中 的 遺 物
</pre>`, artEn: `<pre class="ascii-art purple">
    .:*~*:.    .:*~*:.    .:*~*:.
   *~*~*~*~*  *~*~*~*~*  *~*~*~*~*
  *~*  ╔══╗ *~* ┌──┐ *~* ╱▔▔╲  *~*
  *~*  ║☗ ║ *~* │☕│ *~* │??│  *~*
  *~*  ╚══╝ *~* └──┘ *~* ╲__╱  *~*
   *~*~*~*~*  *~*~*~*~*  *~*~*~*~*
    ':.*~*.'    ':.*~*.'    ':.*~*.'
  ────────────────────────────────
    Relics in Petrified Crystal
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '你小心翼翼地在結晶叢中翻找那些被石化的物品。', textEn: 'You carefully search through the petrified objects among the crystals.', delay: 2000 },
    { tag: '石化', tagColor: 'tag-petri', text: '每靠近一步，石化氣息就更加濃烈……', textEn: 'With every step closer, the petrification grows more intense...', delay: 2200 },
    { tag: '發現', tagColor: 'tag-item', text: '你找到了一面半石化的小型盾牌——邊緣已經灰化，但中央還算結實。', textEn: 'You find a half-petrified small shield — edges grey, but the center is solid.', delay: 2500 },
    { tag: '物品', tagColor: 'tag-item', html: '獲得<b>灰石盾</b>。', htmlEn: 'Acquired <b>Greystone Shield</b>.', delay: 1500, effect: () => addItem(L('灰石盾', 'Greystone Shield')) },
    { tag: '發現', tagColor: 'tag-item', text: '盾牌下面壓著一張發黃的紙條。', textEn: 'A yellowed note is pressed beneath the shield.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', html: '「<b>礦工第七班已全員石化。放棄西區。——監工 K</b>」', htmlEn: '"<b>Crew 7 fully petrified. Abandon west sector. — Overseer K</b>"', delay: 2800 },
  ], [
    { text: '返回迴廊', textEn: 'Return to corridor', action: () => { changePetri(2); loadNode('r1_look'); } },
  ], { label: L('搜索結晶物品', 'Searching crystal items') });
});

// ── Guardian Check (East) ──
registerNode('r1_guard_check', () => {
  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '你走向東面走廊。', textEn: 'You head toward the eastern passage.', delay: 1500 },
    { tag: '感知', tagColor: 'tag-sense', text: '隨著你的靠近，地面開始微微震動。', textEn: 'As you approach, the ground trembles faintly.', delay: 2000 },
    { art: `<pre class="ascii-art red">
              ╱▔▔▔▔▔▔▔▔▔╲
             ╱  ●      ●  ╲
            │    ╲____╱    │
            │              │
       ╱════╧══════════════╧════╲
      │ ░░░░░░░░░░░░░░░░░░░░░░░ │
      │ ░░  ╔════════════╗  ░░░ │
      │ ░░  ║  核  心  ◆ ║  ░░░ │
      │ ░░  ╚════════════╝  ░░░ │
      │ ░░░░░░░░░░░░░░░░░░░░░░░ │
       ╲════╤══════════════╤════╱
            │   │      │   │
            │   │      │   │
           ╱╲  ╱╲    ╱╲  ╱╲
          ╱  ╲╱  ╲  ╱  ╲╱  ╲
         ═════════════════════
           石  脈  守  衛
</pre>`, artEn: `<pre class="ascii-art red">
              ╱▔▔▔▔▔▔▔▔▔╲
             ╱  ●      ●  ╲
            │    ╲____╱    │
            │              │
       ╱════╧══════════════╧════╲
      │ ░░░░░░░░░░░░░░░░░░░░░░░ │
      │ ░░  ╔════════════╗  ░░░ │
      │ ░░  ║  Core   ◆  ║  ░░░ │
      │ ░░  ╚════════════╝  ░░░ │
      │ ░░░░░░░░░░░░░░░░░░░░░░░ │
       ╲════╤══════════════╤════╱
            │   │      │   │
            │   │      │   │
           ╱╲  ╱╲    ╱╲  ╱╲
          ╱  ╲╱  ╲  ╱  ╲╱  ╲
         ═════════════════════
          Vein  Guardian
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-combat', html: '一具巨大的<b>石脈守衛</b>堵在通道中央！', htmlEn: 'A massive <b>Vein Guardian</b> blocks the passage!', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '它的身體由石化礦石和鐵構件組成，胸口有一顆閃爍的核心。', textEn: 'Its body is made of petrification ore and iron. A glowing core pulses in its chest.', delay: 2500 },
    { tag: '警告', tagColor: 'tag-warn', text: '雖然表面已經部分石化……但它的眼睛仍然亮著。', textEn: 'Though partially petrified on the surface... its eyes still glow.', delay: 2500 },
  ], (function() {
    var c = [];
    if (state.flags.r1GuardDefeated) {
      c.push({ text: '走過守衛的殘骸', textEn: 'Walk past the guardian\'s remains', action: () => loadNode('r1_deep') });
    } else {
      c.push({ text: '正面戰鬥', textEn: 'Fight head-on', action: () => loadNode('r1_guard_fight') });
      if (state.flags.r1GuardHint && hasItem(L('鍛造鐵錘', 'Forged Hammer'))) {
        c.push({ text: '用鐵錘攻擊胸口核心', textEn: 'Strike the chest core with the hammer', action: () => loadNode('r1_guard_weak') });
      }
      if (checkRate('agi', 10) > 0) {
        c.push({ label: checkLabel('從守衛旁邊的縫隙溜過去', 'Slip through the gap beside it', 'agi', 10), action: () => loadNode('r1_guard_sneak') });
      }
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r1_look') });
    return c;
  })(), { label: L('面對守衛', 'Facing guardian') });
});

registerNode('r1_guard_fight', () => {
  var gName = L('石脈守衛', 'Vein Guardian');
  var gDesc = L('石脈守衛緩慢但攻擊力極強，每次重擊都帶有強烈的石化效果。', 'The Vein Guardian is slow but hits hard. Each blow carries intense petrification.');
  startCombat(
    { name: gName, hp: 55, atkMin: 16, atkMax: 28, petriDmg: 8, xp: 30, desc: gDesc },
    () => {
      state.flags.r1GuardDefeated = true;
      changeStat('str', 2);
      gainXp(25);
      notify(L('力量 +2，經驗 +25', 'STR +2, XP +25'));
      autoExplore([
        { art: `<pre class="ascii-art red">
       ╱▔▔▔▔▔▔▔╲
      │ ▓▓ ◈◈ ▓▓ │
      │ ▓▓▓▓▓▓▓▓ │    ✦ 核心碎裂 ✦
       ╲________╱
    ▓▓▓▓│      │▓▓▓▓
   ▓▓▓──┤  ↯↯  ├──▓▓▓
  ▓▓▓╱  │      │  ╲▓▓▓
       ╱╱╲    ╱╲╲
      ╱╱  ╲  ╱  ╲╲
     ▓▓   ▓▓▓▓   ▓▓
  ═══════════════════════
    石 脈 守 衛 · 已 擊 敗
</pre>`, artEn: `<pre class="ascii-art red">
       ╱▔▔▔▔▔▔▔╲
      │ ▓▓ ◈◈ ▓▓ │
      │ ▓▓▓▓▓▓▓▓ │    ✦ Core shattered ✦
       ╲________╱
    ▓▓▓▓│      │▓▓▓▓
   ▓▓▓──┤  ↯↯  ├──▓▓▓
  ▓▓▓╱  │      │  ╲▓▓▓
       ╱╱╲    ╱╲╲
      ╱╱  ╲  ╱  ╲╲
     ▓▓   ▓▓▓▓   ▓▓
  ═══════════════════════
   Vein Guardian · Defeated
</pre>`, delay: 800 },
        { tag: '勝利', tagColor: 'tag-explore', text: '守衛轟然倒地，石化碎片四散飛濺。', textEn: 'The guardian crashes to the ground, petrified fragments scattering.', delay: 2000 },
        { tag: '發現', tagColor: 'tag-item', html: '它胸口的核心碎裂了，露出裡面一塊<b>守衛核心石</b>。', htmlEn: 'Its chest core cracks open, revealing a <b>Guardian Core Stone</b>.', delay: 2200, effect: () => addItem(L('守衛核心石', 'Guardian Core Stone')) },
        { tag: '情報', tagColor: 'tag-info', text: '通往迴廊深處的道路打開了。', textEn: 'The path deeper into the corridor is now open.', delay: 1800 },
      ], [{ text: '繼續前進', textEn: 'Continue forward', action: () => loadNode('r1_look') }]);
    },
    () => {
      changePetri(6);
      autoExplore([
        { tag: '撤退', tagColor: 'tag-move', text: '你轉身撤退——守衛的拳頭擦過你的背脊。', textEn: 'You turn and flee — the guardian\'s fist grazes your back.', delay: 1500 },
        { tag: '石化', tagColor: 'tag-petri', text: '被擦到的地方迅速泛灰……', textEn: 'Where it grazed turns grey rapidly...', delay: 1800 },
      ], [{ text: '退回迴廊', textEn: 'Retreat to corridor', action: () => loadNode('r1_look') }]);
    }
  );
});

registerNode('r1_guard_weak', () => {
  state.flags.r1GuardDefeated = true;
  autoExplore([
    { art: `<pre class="ascii-art red">
       ╱▔▔▔▔▔▔▔╲
      │ ▓▓ ◈◈ ▓▓ │
      │ ▓▓▓▓▓▓▓▓ │
       ╲___╱╲___╱
    ▓▓▓▓│  ✦✦  │▓▓▓▓   ← 核心弱點
   ▓▓▓──┤ (◆◆) ├──▓▓▓
  ▓▓▓╱  │      │  ╲▓▓▓
       ╱ ╲    ╱ ╲
      ╱   ╲  ╱   ╲
     ▓▓▓  ▓▓▓▓  ▓▓▓
  ═══════════════════════
    石 脈 守 衛 · 弱 點
</pre>`, artEn: `<pre class="ascii-art red">
       ╱▔▔▔▔▔▔▔╲
      │ ▓▓ ◈◈ ▓▓ │
      │ ▓▓▓▓▓▓▓▓ │
       ╲___╱╲___╱
    ▓▓▓▓│  ✦✦  │▓▓▓▓   ← Core weak point
   ▓▓▓──┤ (◆◆) ├──▓▓▓
  ▓▓▓╱  │      │  ╲▓▓▓
       ╱ ╲    ╱ ╲
      ╱   ╲  ╱   ╲
     ▓▓▓  ▓▓▓▓  ▓▓▓
  ═══════════════════════
   Vein Guardian · Weakness
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-combat', text: '你握緊鍛造鐵錘，瞄準守衛胸口的核心——', textEn: 'You grip the Forged Hammer, aiming for the core in the guardian\'s chest —', delay: 1800 },
    { tag: '戰鬥', tagColor: 'tag-combat', text: '你衝上前，在守衛揮拳之前，用盡全力砸向那顆發光的石頭！', textEn: 'You charge in and smash the glowing stone with all your might before it can swing!', delay: 2200 },
    { tag: '戰鬥', tagColor: 'tag-combat', text: '「喀啦——！」核心應聲碎裂！', textEn: '"CRACK—!" The core shatters!', delay: 1500 },
    { tag: '勝利', tagColor: 'tag-explore', text: '守衛的雙眼熄滅，巨大的身軀轟然倒塌。', textEn: 'The guardian\'s eyes go dark. Its massive body collapses.', delay: 2200 },
    { tag: '物品', tagColor: 'tag-item', html: '碎裂的核心中掉出一塊<b>守衛核心石</b>。', htmlEn: 'A <b>Guardian Core Stone</b> drops from the shattered core.', delay: 2000, effect: () => { addItem(L('守衛核心石', 'Guardian Core Stone')); changeStat('str', 1); gainXp(25); } },
    { tag: '發現', tagColor: 'tag-item', html: '碎石堆裡閃爍著一塊<b>復活石</b>——守衛曾經守護的東西之一。', htmlEn: 'Among the rubble, a <b>Revival Stone</b> glimmers — one of the things the guardian once protected.', delay: 2200, effect: () => { addItem(L('復活石', 'Revival Stone')); sfx.item(); } },
  ], [
    { text: '繼續前進', textEn: 'Continue forward', action: () => loadNode('r1_look') },
  ], { label: L('攻擊弱點', 'Striking weakness') });
});

registerNode('r1_guard_sneak', () => {
  var r = statCheck('agi', 10);
  var sneakArt = { art: `<pre class="ascii-art">
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
  ║    ╱▔▔▔▔▔▔▔╲               ║
  ║   │ ▓▓◈◈▓▓  │    ·  ·  ·   ║
  ║    ╲_______╱      · _o_ ·   ║
  ║   ▓▓│    │▓▓    · ╱ │ ╲ ·  ║
  ║  ▓▓─┤    ├─▓▓     · 你 ·   ║
  ║     ╱╲  ╱╲           ↓      ║
  ║    ▓▓  ▓▓  ▓▓   ─→ 陰影    ║
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
</pre>`, artEn: `<pre class="ascii-art">
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
  ║    ╱▔▔▔▔▔▔▔╲               ║
  ║   │ ▓▓◈◈▓▓  │    ·  ·  ·   ║
  ║    ╲_______╱      · _o_ ·   ║
  ║   ▓▓│    │▓▓    · ╱ │ ╲ ·  ║
  ║  ▓▓─┤    ├─▓▓     · You·   ║
  ║     ╱╲  ╱╲           ↓      ║
  ║    ▓▓  ▓▓  ▓▓   → Shadow   ║
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
</pre>`, delay: 800 };
  if (r === 'crit') {
    state.flags.r1GuardDefeated = true;
    autoExplore([
      sneakArt,
      { tag: '大成功', tagColor: 'tag-move', text: '你觀察守衛的巡邏路線——找到了完美的時機！', textEn: 'You study the guardian\'s patrol — and find the perfect moment!', delay: 2000 },
      { tag: '行動', tagColor: 'tag-move', text: '你如同一陣清風般無聲滑過，守衛完全沒有察覺。', textEn: 'You glide past like a breeze — the guardian notices nothing.', delay: 1800 },
      { tag: '成功', tagColor: 'tag-explore', text: '不僅毫髮無傷，你還順手從守衛身上掰下了一塊有用的礦石。', textEn: 'Not only unscathed, you even pry a useful mineral off the guardian.', delay: 2000, effect: () => { changeStat('agi', 1); gainXp(20); } },
    ], [
      { text: '繼續前進', textEn: 'Continue forward', action: () => loadNode('r1_look') },
    ], { label: L('潛行通過', 'Sneaking past') });
  } else if (r === 'pass') {
    state.flags.r1GuardDefeated = true;
    autoExplore([
      sneakArt,
      { tag: '潛行', tagColor: 'tag-move', text: '你觀察守衛的巡邏路線——它的動作非常緩慢且有規律。', textEn: 'You study the guardian\'s patrol — its movements are extremely slow and predictable.', delay: 2000 },
      { tag: '行動', tagColor: 'tag-move', text: '在它轉身的瞬間，你閃身鑽進了旁邊的縫隙！', textEn: 'The moment it turns, you dart through the gap beside it!', delay: 1800 },
      { tag: '感知', tagColor: 'tag-sense', text: '肩膀擦過它石化的手臂——一陣刺痛傳來。', textEn: 'Your shoulder grazes its petrified arm — a sharp sting.', delay: 2000 },
      { tag: '成功', tagColor: 'tag-explore', text: '你順利通過了守衛區域！', textEn: 'You\'ve made it past the guardian\'s area!', delay: 1500, effect: () => { changePetri(2); changeStat('agi', 1); gainXp(15); } },
    ], [
      { text: '繼續前進', textEn: 'Continue forward', action: () => loadNode('r1_look') },
    ], { label: L('潛行通過', 'Sneaking past') });
  } else {
    changePetri(4);
    changeHp(-6);
    autoExplore([
      sneakArt,
      { tag: '潛行', tagColor: 'tag-move', text: '你嘗試從縫隙溜過去……', textEn: 'You try to slip through the gap...', delay: 1500 },
      { tag: '失敗', tagColor: 'tag-warn', text: '守衛突然轉身——巨大的石拳朝你揮來！', textEn: 'The guardian suddenly turns — a massive stone fist swings at you!', delay: 1800 },
      { tag: '傷害', tagColor: 'tag-warn', text: '你勉強閃過致命一擊，但被擦到了肩膀。', textEn: 'You barely dodge the lethal blow, but it clips your shoulder.', delay: 2000 },
      { tag: '石化', tagColor: 'tag-petri', text: '被碰到的地方迅速泛灰……你連滾帶爬退了回來。', textEn: 'Where it touched turns grey rapidly... you scramble back.', delay: 2000 },
    ], [
      { text: '正面戰鬥', textEn: 'Fight head-on', action: () => loadNode('r1_guard_fight') },
      { text: '撤退', textEn: 'Retreat', action: () => loadNode('r1_look') },
    ], { label: L('潛行失敗', 'Stealth failed') });
  }
});

// ── Deep Corridor ──
registerNode('r1_deep', () => {
  var firstVisit = !state.flags.r1DeepVisited;
  state.flags.r1DeepVisited = true;
  var steps = [];
  steps.push({ art: `<pre class="ascii-art blue">
  ═══╦═══════════════════════════╦═══
  ░░░║  .:*~*:.      .:*~*:.    ║░░░
  ░░░║ *~*~*~*~*    *~*~*~*~*   ║░░░
  ░░░║  .:*~*:.      .:*~*:.    ║░░░
  ░░░║                           ║░░░
  ░░░║    ══════╤══════          ║░░░
  ░░░║          │  ╱▔▔▔▔╲       ║░░░
  ░░░║    ──────┤  │ 大門 │      ║░░░
  ░░░║    宿舍  │  ╲____╱       ║░░░
  ░░░║          │                ║░░░
  ═══╩══════════╧════════════════╩═══
        迴 廊 深 處 · 分 叉 路
</pre>`, artEn: `<pre class="ascii-art blue">
  ═══╦═══════════════════════════╦═══
  ░░░║  .:*~*:.      .:*~*:.    ║░░░
  ░░░║ *~*~*~*~*    *~*~*~*~*   ║░░░
  ░░░║  .:*~*:.      .:*~*:.    ║░░░
  ░░░║                           ║░░░
  ░░░║    ══════╤══════          ║░░░
  ░░░║          │  ╱▔▔▔▔╲       ║░░░
  ░░░║    ──────┤  │ Gate │      ║░░░
  ░░░║  Quarters│  ╲____╱       ║░░░
  ░░░║          │                ║░░░
  ═══╩══════════╧════════════════╩═══
      Deep Corridor · The Fork
</pre>`, delay: 800 });
  if (firstVisit) {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你沿著鐵軌深入迴廊。', textEn: 'You follow the rails deeper into the corridor.', delay: 2000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '這一段的礦脈更加粗大，藍色冷光照亮了整條走廊。', textEn: 'The ore veins here are thicker, blue light illuminating the entire corridor.', delay: 2500 });
    steps.push({ tag: '環境', tagColor: 'tag-system', text: '空氣變得異常冰冷——你能看到自己的呼吸化為白霧。', textEn: 'The air turns bitterly cold — you can see your breath forming white mist.', delay: 2200 });
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '鐵軌在這裡分叉——一條通往左邊的礦工宿舍，一條通往前方的大門。', textEn: 'The rails fork — one track to a miners\' quarters on the left, another to a great door ahead.', delay: 2500 });
  } else {
    steps.push({ tag: '移動', tagColor: 'tag-move', text: '你回到了迴廊深處的分叉路口。冰冷的空氣和藍色礦脈光依舊如初。', textEn: 'You return to the deep corridor fork. Cold air and blue ore-glow remain unchanged.', delay: 1800 });
  }
  // ── Foreshadowing: traces of Ying (螢) ──
  if (!state.flags.r1YingHintSeen) {
    state.flags.r1YingHintSeen = true;
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '等等——鐵軌上有什麼東西。', textEn: 'Wait — there\'s something on the rails.', delay: 2000 });
    steps.push({ tag: '發現', tagColor: 'tag-item', html: '一張被撕下的紙頁，邊緣沾著新鮮的<b>墨漬</b>。上面畫著礦脈的分佈圖，標註細緻得不像礦工的手筆。', htmlEn: 'A torn page, its edges stained with fresh <b>ink</b>. It bears a meticulous ore vein map — too detailed for a miner\'s hand.', delay: 3000 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '紙頁還是溫的。有人剛剛經過這裡。', textEn: 'The page is still warm. Someone passed through here moments ago.', delay: 2500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你抬頭望向前方的暗處——似乎有一個纖細的身影一閃而過，消失在岔路的陰影中。', textEn: 'You look up into the darkness ahead — a slender figure seems to flicker past, vanishing into the shadows of the fork.', delay: 3000 });
  }
  autoExplore(steps, (function() {
    var c = [];
    c.push({ text: '查看礦工宿舍', textEn: 'Check the miners\' quarters', action: () => loadNode('r1_quarters') });
    if (!state.flags.r1WandererMet) {
      c.push({ text: '調查鐵軌旁的腳印', textEn: 'Investigate footprints by the rails', action: () => loadNode('r1_wanderer') });
    } else {
      c.push({ text: '尋找灰鶴', textEn: 'Look for Grey Crane', action: () => loadNode('r1_wanderer_trade') });
    }
    // ── Ying encounter option ──
    if (state.flags.r1YingHintSeen && !state.flags.r1YingMet) {
      c.push({ text: '追上那個身影', textEn: 'Follow that figure', action: () => loadNode('r1_ying_encounter') });
    } else if (state.flags.r1YingMet) {
      c.push({ text: '去找螢', textEn: 'Look for Ying', action: () => loadNode('r1_ying_talk') });
    }
    c.push({ text: '走向前方的大門', textEn: 'Approach the great door', action: () => loadNode('r1_gate') });
    c.push({ text: '返回迴廊中央', textEn: 'Return to corridor center', action: () => loadNode('r1_look') });
    return c;
  })(), { label: L('深入迴廊', 'Going deeper') });
});

// ── Miners' Quarters ──
registerNode('r1_quarters', () => {
  var steps = [
    { art: `<pre class="ascii-art">
  ┌──────────────────────────────────────┐
  │  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗        │
  │  ║床鋪║  ║床鋪║  ║床鋪║  ║床鋪║        │
  │  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝        │
  │                                      │
  │  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗        │
  │  ║░░░║  ║░░░║  ║░░░║  ║░░░║        │
  │  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝        │
  │         石化            石化          │
  │    ┌────────┐     ┌────────┐         │
  │    │ 儲物櫃 │     │ 水  桶 │         │
  │    └────────┘     └────────┘         │
  └──────────────────────────────────────┘
</pre>`, artEn: `<pre class="ascii-art">
  ┌──────────────────────────────────────┐
  │  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗        │
  │  ║ Bed║  ║ Bed║  ║ Bed║  ║ Bed║        │
  │  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝        │
  │                                      │
  │  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗        │
  │  ║░░░║  ║░░░║  ║░░░║  ║░░░║        │
  │  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝        │
  │       Petrified        Petrified     │
  │    ┌────────┐     ┌────────┐         │
  │    │ Locker │     │ Barrel │         │
  │    └────────┘     └────────┘         │
  └──────────────────────────────────────┘
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '這是礦工們的宿舍。八張床位排列整齊。', textEn: 'The miners\' quarters. Eight bunks in neat rows.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '其中四張床上……還躺著人。不——是「石礦工」。完全石化的軀體。', textEn: 'Four of the bunks still have occupants. No — "Stone Miners." Fully petrified husks.', delay: 2500 },
    { tag: '石化', tagColor: 'tag-petri', text: '他們的姿態栩栩如生——有的在睡夢中，有的在掙扎。肉體鈣化、記憶侵蝕。', textEn: 'Their poses are lifelike — some sleeping, some struggling. Flesh calcified, memories eroded.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '石化瘟疫在他們毫無防備時發作。感染者成為石礦工——被蜂巢思維驅動，永遠困在挖掘的動作中。', textEn: 'The Stone Plague struck when they were defenseless. The infected become Stone Miners — driven by a hive mind, forever trapped in the motion of digging.', delay: 3200 },
  ];
  if (!state.flags.r1QuartersSearched) {
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你檢查儲物櫃——大部分已經鏽蝕打不開了。', textEn: 'You check the lockers — most are rusted shut.', delay: 2000 });
    steps.push({ tag: '發現', tagColor: 'tag-item', html: '只有一個能勉強打開，裡面有一瓶<b>礦工烈酒</b>和一塊<b>皮甲碎片</b>。', htmlEn: 'Only one opens, containing a bottle of <b>Miner\'s Spirits</b> and a <b>Leather Armor Scrap</b>.', delay: 2500, effect: () => { addItem(L('礦工烈酒', 'Miner\'s Spirits')); addItem(L('皮甲碎片', 'Leather Scrap')); state.flags.r1QuartersSearched = true; } });
  }
  autoExplore(steps, (function() {
    var c = [];
    if (hasItem(L('礦工烈酒', 'Miner\'s Spirits'))) {
      c.push({ text: '使用礦工烈酒恢復體力', textEn: 'Drink the spirits to restore health', action: () => {
        removeItem(L('礦工烈酒', 'Miner\'s Spirits'));
        changeHp(20);
        changeStat('str', 1);
        notify(L('HP +20，力量 +1（酒精的力量！）', 'HP +20, STR +1 (Power of spirits!)'));
        loadNode('r1_deep');
      }});
    }
    if (hasItem(L('黑麵包', 'Black Bread'))) {
      c.push({ text: '啃一口黑麵包充飢', textEn: 'Eat the black bread to stave off hunger', action: () => {
        removeItem(L('黑麵包', 'Black Bread'));
        changeHp(15);
        changePetri(-4);
        autoExplore([
          { tag: '物品', tagColor: 'tag-item', text: '你掰開乾硬的黑麵包，小口小口地咀嚼。', textEn: 'You break the stale black bread and chew it slowly.', delay: 1800 },
          { tag: '恢復', tagColor: 'tag-explore', text: '味道苦澀，但飢餓的身體如飲甘霖。', textEn: 'Bitter taste, but your starving body drinks it in like nectar.', delay: 2200 },
          { tag: '感知', tagColor: 'tag-sense', text: '溫暖從胃部擴散到四肢——石化的麻痺感也稍稍消退了。', textEn: 'Warmth spreads from your stomach to your limbs — the petrification numbness recedes.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', text: '也許那些石化之人留下這塊麵包，是因為食物能延緩石化侵蝕。', textEn: 'Perhaps the petrified left this bread because food slows the plague\'s advance.', delay: 2800 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_quarters') }]);
      }});
    }
    if (!state.flags.r1SurvivorMet) {
      c.push({ text: '調查最裡面那張床鋪的窸窣聲', textEn: 'Investigate the rustling from the farthest bunk', action: () => loadNode('r1_survivor') });
    } else {
      c.push({ text: '找老周說話', textEn: 'Talk to Old Zhou', action: () => loadNode('r1_survivor_talk') });
    }
    c.push({ text: '在床上休息', textEn: 'Rest on a bunk', action: () => loadNode('r1_rest') });
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r1_deep') });
    return c;
  })(), { label: L('搜索宿舍', 'Searching quarters') });
});

registerNode('r1_rest', () => {
  autoExplore([
    { art: `<pre class="ascii-art">
  ┌────────────────────────────────┐
  │  ╔═══╗                        │
  │  ║    ║  z Z z                 │
  │  ║ ～ ║   z Z                  │
  │  ║____║    z                   │
  │  ┊····┊                       │
  │                                │
  │  .:*~*:.    .:*~*:.           │
  │   礦脈光      礦脈光          │
  └────────────────────────────────┘
          礦 工 床 鋪
</pre>`, artEn: `<pre class="ascii-art">
  ┌────────────────────────────────┐
  │  ╔═══╗                        │
  │  ║    ║  z Z z                 │
  │  ║ ～ ║   z Z                  │
  │  ║____║    z                   │
  │  ┊····┊                       │
  │                                │
  │  .:*~*:.    .:*~*:.           │
  │   Ore glow    Ore glow        │
  └────────────────────────────────┘
         Miner's Bunk
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你找了一張沒有石化礦工的床鋪，小心翼翼地躺了下來。', textEn: 'You find an empty bunk and carefully lie down.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '床墊硬邦邦的，但比起石頭地面已經好太多了。', textEn: 'The mattress is stiff, but far better than the stone floor.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '……', textEn: '...', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '你做了一個夢。夢裡，你站在一個廣闊的地下洞穴中，頭頂是發光的礦脈。', textEn: 'You dream. Standing in a vast underground cavern, glowing ore veins overhead.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '人們在四周忙碌著——這是地表崩潰後建立的避難所，一座地底城市。', textEn: 'People bustle around — a shelter built after the surface collapsed, an underground city.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '礦工們推著礦車進入深處，開採那些發光的石頭。他們還不知道自己在挖掘什麼。', textEn: 'Miners push carts into the depths, extracting glowing stones. They don\'t yet know what they\'re unearthing.', delay: 3200 },
    { tag: '記憶', tagColor: 'tag-system', html: '一個老婦人拉住你的手：<b>「孩子，別去礦坑那邊。那裡的空氣不對勁。」</b>', htmlEn: 'An old woman grabs your hand: <b>"Child, don\'t go near the mines. Something\'s wrong with the air there."</b>', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你猛地醒來。石礦工們無聲地注視著你——永遠凝固在挖掘的姿態中。', textEn: 'You jolt awake. Stone Miners stare silently — frozen forever in the posture of digging.', delay: 2500 },
    { tag: '恢復', tagColor: 'tag-explore', text: '身體恢復了不少，但那個夢……那是你的記憶，還是這些礦工的？', textEn: 'Your body has recovered well, but that dream... was it your memory, or theirs?', delay: 2500 },
  ], (function() {
    var c = [];
    if (hasItem(L('黑麵包', 'Black Bread'))) {
      c.push({ text: '吃黑麵包後再休息', textEn: 'Eat black bread then rest', action: () => {
        removeItem(L('黑麵包', 'Black Bread'));
        changeHp(25);
        changePetri(-6);
        notify(L('HP +25，石化度 -6%（飽腹感讓恢復更好）', 'HP +25, Petri -6% (a full stomach aids recovery)'));
        loadNode('r1_deep');
      }});
    }
    if (hasItem(L('淨化藥劑', 'Purification Elixir'))) {
      c.push({ text: '喝下淨化藥劑', textEn: 'Drink the Purification Elixir', action: () => {
        removeItem(L('淨化藥劑', 'Purification Elixir'));
        changePetri(-15);
        changeHp(10);
        autoExplore([
          { tag: '物品', tagColor: 'tag-item', text: '你拔開瓶塞，一股苦澀的草藥味撲鼻而來。', textEn: 'You uncork the bottle — a bitter herbal scent fills the air.', delay: 1500 },
          { tag: '行動', tagColor: 'tag-move', text: '你一口灌下深綠色的液體。味道像嚼碎了一把苦草。', textEn: 'You gulp down the dark green liquid. Tastes like chewing bitter weeds.', delay: 2000 },
          { tag: '恢復', tagColor: 'tag-explore', html: '一股<b>清涼的力量</b>從胃部擴散到全身——石化紋路肉眼可見地消退了！', htmlEn: 'A <b>cool power</b> spreads from your stomach to your whole body — petrification visibly recedes!', delay: 2500 },
          { tag: '恢復', tagColor: 'tag-explore', text: '左手的灰色紋路淡了很多。這是你到目前為止感覺最好的時刻。', textEn: 'The grey patterns on your left hand fade significantly. This is the best you\'ve felt so far.', delay: 2500 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_deep') }]);
      }});
    }
    c.push({ text: '站起來繼續前進', textEn: 'Get up and move on', action: () => {
      changeHp(15);
      changePetri(-3);
      notify(L('HP +15，石化度 -3%', 'HP +15, Petri -3%'));
      loadNode('r1_deep');
    }});
    return c;
  })(), { label: L('休息', 'Resting') });
});

// ── NPC: Old Zhou — Surviving Miner ──
registerNode('r1_survivor', () => {
  state.flags.r1SurvivorMet = true;
  autoExplore([
    { art: npcPortrait.art('zhou', { subtitle: '倖存者' }) || `<pre class="ascii-art">
       ╭──╮
       │⊙ │  ╭━━━━━━╮
       ╰┬─╯ ╱░░▔▔▔▔▔╲
        │  ╱░░│ ─   ● │
        │ │░░░│  ═══  │
        ╰─│░░░ ╲▄▄▄▄╱
     ╱━━━━┿━━░░│    │
    ╱  ╱╲ │░░░░│    ├━━╲
   ╱  ╱  ╲│░░░░│    │   ╲
  ⌐──╯    ░░░░░│    │    ╲
          ░░░░╱ ╲╱  ╲
         ░░░╱╱    ╲  ╲╲
         ░░═════════════
       老 周  ——  倖 存 者
</pre>`, artEn: npcPortrait.art('zhou', { subtitle: 'Survivor' }) || `<pre class="ascii-art">
       ╭──╮
       │⊙ │  ╭━━━━━━╮
       ╰┬─╯ ╱░░▔▔▔▔▔╲
        │  ╱░░│ ─   ● │
        │ │░░░│  ═══  │
        ╰─│░░░ ╲▄▄▄▄╱
     ╱━━━━┿━━░░│    │
    ╱  ╱╲ │░░░░│    ├━━╲
   ╱  ╱  ╲│░░░░│    │   ╲
  ⌐──╯    ░░░░░│    │    ╲
          ░░░░╱ ╲╱  ╲
         ░░░╱╱    ╲  ╲╲
         ░░═════════════
     Old Zhou  ——  Survivor
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-combat', text: '你走向最裡面的床鋪——突然，一隻佈滿灰紋的手從毯子底下伸了出來！', textEn: 'You approach the farthest bunk — suddenly, a grey-veined hand shoots out from under the blanket!', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '「別過來！我……我還沒完全變成那種東西！」', textEn: '"Stay back! I... I haven\'t completely turned into one of those things yet!"', delay: 2500 },
    { tag: '遭遇', tagColor: 'tag-explore', html: '毯子下鑽出一個<b>活人</b>——一個身材魁梧的男人，右半邊臉已經部分石化。即使在這種境況下，他的五官仍然端正：濃眉大眼，鼻樑挺直，石化的右半邊臉反而給他添了幾分粗獷的滄桑感。', htmlEn: 'A <b>living person</b> emerges — a broad-shouldered man, the right side of his face partially petrified. Even in this state, his features are striking: thick brows, deep-set eyes, a straight nose. The petrification on his right side only adds a rugged, weathered edge.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '他穿著礦工的舊制服，敞開的領口露出結實的胸膛和鎖骨上蔓延的石化紋路。胸口繡著「第三班·周」的字樣。', textEn: 'He wears an old mining uniform, open collar revealing a solid chest and petrification veins along his collarbone. "Crew 3 · Zhou" stitched on the chest.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '他看著你——完好的左眼是深棕色的，帶著在地底生活久了的人才有的那種沉穩。石化的右眼中映出一絲複雜的光芒——驚訝、警惕、和一絲久違的……希望。', textEn: 'He stares at you — his good left eye is deep brown, carrying the steady calm of someone long accustomed to the underground. His stone-veined right eye holds a complex light — surprise, wariness, and a trace of... hope.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「你……也是從坑底爬上來的？」他的聲音低沉而沙啞，帶著幾分磁性，像是很久沒有說過話。他用粗糙的大手攏了攏散亂的黑髮——鬢角有幾縷過早的白。', textEn: '"You... climbed up from the pit too?" His voice is deep and hoarse, with a rough magnetism, as if unused for a long time. He rakes thick fingers through disheveled black hair — a few premature silver streaks at the temples.', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: '「我叫老周。第三班的礦工。瘟疫爆發那天，我躲進了通風管道……一直躲到現在。」他站起身——足足比你高了半個頭，即使石化讓他消瘦了不少，那寬闊的肩膀和厚實的手掌仍然讓人安心。', textEn: '"Name\'s Old Zhou. Crew 3 miner. When the plague broke out, I hid in the ventilation shaft... been hiding ever since." He stands — a full half-head taller than you. Even with petrification thinning him, those broad shoulders and thick hands still feel reassuring.', delay: 3500 },
  ].concat(state.flags.ngPlus ? [
    { tag: '記憶', tagColor: 'tag-petri', text: '你恍惚間想起了什麼——似乎在另一段生命中，你們曾在河城重逢過。', textEn: 'A hazy memory surfaces — in another life, you met again in River City.', delay: 2500 },
  ] : []), (function() {
    var c = [];
    if (hasItem(L('黑麵包', 'Black Bread'))) {
      c.push({ text: '把黑麵包分給他', textEn: 'Share the black bread with him', action: () => loadNode('r1_survivor_bread') });
    }
    c.push({ text: '詢問他關於這裡的情況', textEn: 'Ask about the situation here', action: () => loadNode('r1_survivor_info') });
    c.push({ text: '警惕地後退', textEn: 'Back away cautiously', action: () => loadNode('r1_quarters') });
    return c;
  })(), { label: L('遭遇倖存者', 'Meeting a survivor') });
});

registerNode('r1_survivor_bread', () => {
  state.flags.r1SurvivorFed = true;
  removeItem(L('黑麵包', 'Black Bread'));
  autoExplore([
    { art: npcPortrait.art('zhou', { subtitle: '倖存者' }) || `<pre class="ascii-art">
      ╭──╮ ╭━━━━━╮
      │⊙ │╱░░▔▔▔▔╲
      ╰┬─╱░│ ─  ● │
       │░░░│ ═══  │
    ╱━━┿━░░╲▄▄▄▄╱
   ╱ ╱╲│░░░│   ├━╲
  ⌐─╯  ░░░░│   │  ╲
       ░░═══════════
     老 周 · 倖 存 者
</pre>`, artEn: npcPortrait.art('zhou', { subtitle: 'Survivor' }) || `<pre class="ascii-art">
      ╭──╮ ╭━━━━━╮
      │⊙ │╱░░▔▔▔▔╲
      ╰┬─╱░│ ─  ● │
       │░░░│ ═══  │
    ╱━━┿━░░╲▄▄▄▄╱
   ╱ ╱╲│░░░│   ├━╲
  ⌐─╯  ░░░░│   │  ╲
       ░░═══════════
   Old Zhou · Survivor
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你從包裡掏出那塊乾硬的黑麵包，遞了過去。', textEn: 'You pull out the stale black bread and offer it to him.', delay: 1800 },
    { tag: '感知', tagColor: 'tag-sense', text: '老周愣了一下——那雙深棕色的眼睛驟然泛紅，像是某堵牆在一瞬間裂開了。', textEn: 'Old Zhou freezes — those deep brown eyes redden suddenly, as if a wall inside cracked open in an instant.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「多久了……多久沒吃過正經東西了……」他接過麵包，那雙粗糙的大手在發抖。你注意到他的指節佈滿老繭——是三十年礦工生涯的勳章。', textEn: '"How long... how long since I\'ve had real food..." He takes the bread with trembling hands. You notice his knuckles are covered in calluses — thirty years of mining, worn like medals.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '他小心翼翼地掰下一小塊，放進嘴裡慢慢嚼。石化的右半邊臉似乎也微微動了——完好的左半邊露出了一個極其溫柔的表情，和他魁梧的身材形成了奇妙的反差。', textEn: 'He carefully breaks off a small piece and chews slowly. Even the petrified half of his face seems to shift — on the intact left side, an incredibly gentle expression appears, strangely at odds with his massive build.', delay: 3500 },
    { tag: '情報', tagColor: 'tag-info', html: '「<b>食物能減緩石化。</b>我就是靠這個撐到現在的。」老周擦了擦嘴角，「之前在通風管裡找到過幾隻洞穴鼠，烤來吃。最近……什麼都沒有了。」', htmlEn: '"<b>Food slows the petrification.</b> That\'s how I\'ve lasted this long." Old Zhou wipes his mouth. "Found some cave rats in the vents before. Recently... nothing."', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '他看你的眼神變了——從戒備變成了信任。', textEn: 'The way he looks at you changes — from wariness to trust.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', html: '「你救了我一命。作為回報，我有些東西要告訴你——<b>也有東西要給你。</b>」', htmlEn: '"You saved my life. In return, I have something to tell you — <b>and something to give you.</b>"', delay: 2800 },
  ], [
    { text: '聽他說', textEn: 'Listen to him', action: () => loadNode('r1_survivor_reward') },
  ], { label: L('分享麵包', 'Sharing bread') });
});

registerNode('r1_survivor_reward', () => {
  autoExplore([
    { art: npcPortrait.art('zhou', { subtitle: '倖存者' }) || `<pre class="ascii-art">
      ╭──╮ ╭━━━━━╮
      │⊙ │╱░░▔▔▔▔╲
      ╰┬─╱░│ ─  ● │
       │░░░│ ═══  │
    ╱━━┿━░░╲▄▄▄▄╱
   ╱ ╱╲│░░░│   ├━╲
  ⌐─╯  ░░░░│   │  ╲
       ░░═══════════
     老 周 · 倖 存 者
</pre>`, artEn: npcPortrait.art('zhou', { subtitle: 'Survivor' }) || `<pre class="ascii-art">
      ╭──╮ ╭━━━━━╮
      │⊙ │╱░░▔▔▔▔╲
      ╰┬─╱░│ ─  ● │
       │░░░│ ═══  │
    ╱━━┿━░░╲▄▄▄▄╱
   ╱ ╱╲│░░░│   ├━╲
  ⌐─╯  ░░░░│   │  ╲
       ░░═══════════
   Old Zhou · Survivor
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '老周從床墊底下摸出一個油紙包。', textEn: 'Old Zhou pulls an oilskin pouch from under the mattress.', delay: 1800 },
    { tag: '物品', tagColor: 'tag-item', html: '裡面是一塊包裹完好的<b>礦工口糧</b>——壓縮的堅果和蜂蜜混合物。', htmlEn: 'Inside — a well-preserved <b>Miner\'s Ration</b>, compressed nuts and honey.', delay: 2200, effect: () => addItem(L('礦工口糧', 'Miner\'s Ration')) },
    { tag: '情報', tagColor: 'tag-info', text: '「這是我最後的存糧。你比我更需要它——你還有路要走。」', textEn: '"My last supplies. You need it more than I do — you still have a road ahead."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', html: '他壓低了聲音：「聽好了——<b>大門後面不是終點，而是開始。</b>」', htmlEn: 'He lowers his voice: "<b>Beyond the great door isn\'t the end — it\'s the beginning.</b>"', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「大採石場裡有一座地底城市的遺跡。瘟疫爆發之前，那裡住著幾千人。」', textEn: '"The Great Quarry holds the ruins of an underground city. Thousands lived there before the plague."', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', html: '「城市的中心有一口<b>熱泉</b>——長老們說那是石化瘟疫的源頭。但我總覺得……那裡也藏著治癒的方法。」', htmlEn: '"At the city\'s center lies a <b>hot spring</b> — the elders said it was the plague\'s origin. But I always felt... the cure is there too."', delay: 3500 },
    { tag: '記憶', tagColor: 'tag-system', text: '熱泉……這個詞讓你的左手隱隱作痛。那是你的記憶中，被獻祭之前最後看到的東西。', textEn: 'Hot spring... the word makes your left hand ache. In your memories, it was the last thing you saw before the sacrifice.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '老周握住你的手：「孩子，替我看看外面的世界。我的腿……已經走不動了。」', textEn: 'Old Zhou grips your hand: "Kid, see the world beyond for me. My legs... can\'t carry me anymore."', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '他掀起褲管——雙腿從膝蓋以下已經完全石化，像兩根灰色的石柱。', textEn: 'He lifts his trouser legs — below the knees, both legs are fully petrified, like grey stone pillars.', delay: 2800 },
  ], [
    { text: '我會找到出路的', textEn: 'I will find a way out', action: () => {
      changeStat('wil', 1);
      notify(L('意志 +1', 'WIL +1'));
      state.flags.r1SurvivorFullTrust = true;
      loadNode('r1_quarters');
    }},
  ], { label: L('老周的回報', 'Zhou\'s reward') });
});

registerNode('r1_survivor_info', () => {
  autoExplore([
    { art: npcPortrait.art('zhou', { subtitle: '倖存者' }) || `<pre class="ascii-art">
      ╭──╮ ╭━━━━━╮
      │⊙ │╱░░▔▔▔▔╲
      ╰┬─╱░│ ─  ● │
       │░░░│ ═══  │
    ╱━━┿━░░╲▄▄▄▄╱
   ╱ ╱╲│░░░│   ├━╲
  ⌐─╯  ░░░░│   │  ╲
       ░░═══════════
     老 周 · 倖 存 者
</pre>`, artEn: npcPortrait.art('zhou', { subtitle: 'Survivor' }) || `<pre class="ascii-art">
      ╭──╮ ╭━━━━━╮
      │⊙ │╱░░▔▔▔▔╲
      ╰┬─╱░│ ─  ● │
       │░░░│ ═══  │
    ╱━━┿━░░╲▄▄▄▄╱
   ╱ ╱╲│░░░│   ├━╲
  ⌐─╯  ░░░░│   │  ╲
       ░░═══════════
   Old Zhou · Survivor
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '老周警惕地看著你，但還是開口了。', textEn: 'Old Zhou watches you warily, but speaks.', delay: 1800 },
    { tag: '情報', tagColor: 'tag-info', text: '「迴廊裡的守衛……那東西以前是人。是監工 K 造出來的戰爭機械。」', textEn: '"The guardian in the corridor... that thing used to be human. A war machine built by Overseer K."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「石化瘟疫爆發後，它也被感染了。但和其他人不同——它沒有停下來，反而更兇猛了。」', textEn: '"After the plague hit, it got infected too. But unlike the others — it didn\'t stop. It got fiercer."', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', html: '「大門那邊……我沒去過。但以前聽老礦工說，<b>那裡有一座被遺棄的地底城市</b>。很多人……可能還活著。」', htmlEn: '"Beyond the gate... I\'ve never been. But old miners said <b>there\'s an abandoned underground city</b>. Many people... might still be alive."', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '他的目光變得黯淡：「不過我已經走不動了。腿已經沒有知覺了。」', textEn: 'His gaze dims: "But I can\'t walk anymore. No feeling in my legs."', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '他欲言又止地看了看你的背包。', textEn: 'He glances at your pack, hesitating.', delay: 2000 },
  ], (function() {
    var c = [];
    if (hasItem(L('黑麵包', 'Black Bread'))) {
      c.push({ text: '把黑麵包分給他', textEn: 'Share the black bread', action: () => loadNode('r1_survivor_bread') });
    }
    if (hasItem(L('乾燥草藥', 'Dried Herbs'))) {
      c.push({ text: '用草藥幫他減緩石化', textEn: 'Use herbs to slow his petrification', action: () => {
        removeItem(L('乾燥草藥', 'Dried Herbs'));
        state.flags.r1SurvivorHelped = true;
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你取出草藥，碾碎後敷在他石化的關節處。', textEn: 'You crush the herbs and apply them to his petrified joints.', delay: 2000 },
          { tag: '感知', tagColor: 'tag-sense', text: '老周倒吸一口涼氣——然後緩緩舒了口氣。', textEn: 'Old Zhou winces — then slowly exhales with relief.', delay: 2200 },
          { tag: '情報', tagColor: 'tag-info', text: '「……好多了。謝謝你。」他的語氣中多了幾分感激。', textEn: '"...much better. Thank you." Genuine gratitude fills his voice.', delay: 2500 },
          { tag: '情報', tagColor: 'tag-info', html: '「你是好人。<b>大門後面的城市裡，找一個叫「灰鶴」的女人</b>——她知道很多關於瘟疫的事。」', htmlEn: '"You\'re a good person. <b>In the city beyond the gate, find a woman called Grey Crane</b> — she knows much about the plague."', delay: 3200 },
        ], [{ text: '記住這個名字', textEn: 'Remember the name', action: () => { changeStat('wil', 1); notify(L('意志 +1', 'WIL +1')); loadNode('r1_quarters'); } }]);
      }});
    }
    c.push({ text: '謝過他，離開', textEn: 'Thank him and leave', action: () => loadNode('r1_quarters') });
    return c;
  })(), { label: L('詢問情況', 'Asking for information') });
});

registerNode('r1_survivor_talk', () => {
  var fed = state.flags.r1SurvivorFed;
  var helped = state.flags.r1SurvivorHelped;
  var trust = fed || helped || state.flags.r1SurvivorFullTrust;
  var steps = [];
  steps.push({ art: npcPortrait.art('zhou', { subtitle: '倖存者' }) || `<pre class="ascii-art">
      ╭──╮ ╭━━━━━╮
      │⊙ │╱░░▔▔▔▔╲
      ╰┬─╱░│ ─  ● │
       │░░░│ ═══  │
    ╱━━┿━░░╲▄▄▄▄╱
   ╱ ╱╲│░░░│   ├━╲
  ⌐─╯  ░░░░│   │  ╲
       ░░═══════════
     老 周 · 倖 存 者
</pre>`, artEn: npcPortrait.art('zhou', { subtitle: 'Survivor' }) || `<pre class="ascii-art">
      ╭──╮ ╭━━━━━╮
      │⊙ │╱░░▔▔▔▔╲
      ╰┬─╱░│ ─  ● │
       │░░░│ ═══  │
    ╱━━┿━░░╲▄▄▄▄╱
   ╱ ╱╲│░░░│   ├━╲
  ⌐─╯  ░░░░│   │  ╲
       ░░═══════════
   Old Zhou · Survivor
</pre>`, delay: 800 });
  if (trust) {
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '老周看到你回來，露出了笑容。', textEn: 'Old Zhou sees you return and smiles.', delay: 1500 });
    if (fed && !state.flags.r1ZhouToldHotSpring) {
      state.flags.r1ZhouToldHotSpring = true;
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '「對了，還有一件事要提醒你。」', textEn: '"Oh, one more thing I should mention."', delay: 2000 });
      steps.push({ tag: '情報', tagColor: 'tag-info', html: '「<b>石化不是單純的疾病——它有意識。</b>石化越深的人，越能聽到呢喃聲。」', htmlEn: '"<b>Petrification isn\'t just a disease — it has consciousness.</b> The deeper it goes, the louder the whispers."', delay: 3000 });
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '「那個聲音……它想讓你停下來。停下來不動，變成石頭。千萬不能聽它的。」', textEn: '"That voice... it wants you to stop. Stop moving, turn to stone. Never listen to it."', delay: 3000 });
    } else {
      steps.push({ tag: '情報', tagColor: 'tag-info', text: '「還活著就好。我在這裡等你的好消息。」', textEn: '"Glad you\'re still alive. I\'ll be here waiting for good news."', delay: 2200 });
    }
  } else {
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '老周看到你，警惕地縮了縮身子。', textEn: 'Old Zhou sees you and shrinks back warily.', delay: 1500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「你又來了……有什麼事嗎？」他的語氣還是很冷淡。', textEn: '"You again... what do you want?" His tone is cold.', delay: 2200 });
  }
  autoExplore(steps, (function() {
    var c = [];
    if (!trust && hasItem(L('黑麵包', 'Black Bread'))) {
      c.push({ text: '把黑麵包分給他', textEn: 'Share the black bread', action: () => loadNode('r1_survivor_bread') });
    }
    if (!trust && hasItem(L('乾燥草藥', 'Dried Herbs'))) {
      c.push({ text: '用草藥幫他', textEn: 'Help him with herbs', action: () => {
        removeItem(L('乾燥草藥', 'Dried Herbs'));
        state.flags.r1SurvivorHelped = true;
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你取出草藥敷在他的關節處。', textEn: 'You apply herbs to his joints.', delay: 2000 },
          { tag: '情報', tagColor: 'tag-info', text: '「……你是好人。」他的態度軟化了。', textEn: '"...you\'re a good person." His demeanor softens.', delay: 2200 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_survivor_talk') }]);
      }});
    }
    if (trust && hasItem(L('礦工口糧', 'Miner\'s Ration'))) {
      c.push({ text: '使用礦工口糧', textEn: 'Use the Miner\'s Ration', action: () => {
        removeItem(L('礦工口糧', 'Miner\'s Ration'));
        changeHp(30);
        changePetri(-8);
        autoExplore([
          { tag: '物品', tagColor: 'tag-item', text: '你打開油紙包，裡面是壓縮的堅果蜂蜜塊。', textEn: 'You open the oilskin pouch — compressed nut-and-honey bars inside.', delay: 1800 },
          { tag: '恢復', tagColor: 'tag-explore', text: '久違的甜味在口中擴散。能量湧遍全身，石化的麻痺感大幅消退。', textEn: 'A long-forgotten sweetness fills your mouth. Energy surges through you, petrification receding sharply.', delay: 2500 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_quarters') }]);
      }});
    }
    // Sidequest: Zhou's hidden memory (requires full trust)
    if (trust && !state.flags.r1ZhouMemory) {
      c.push({ text: '通風管裡刻的字……不只是求生記錄吧？', textEn: 'Those carvings in the vents... they\'re more than survival notes, right?', action: () => loadNode('r1_zhou_memory') });
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r1_quarters') });
    return c;
  })(), { label: L('與老周交談', 'Talking to Zhou') });
});

// ── NPC Sidequest: Old Zhou's Memory ──
registerNode('r1_zhou_memory', () => {
  state.flags.r1ZhouMemory = true;
  autoExplore([
    { tag: '對話', tagColor: 'tag-npc',
      text: L('老周聽到你的問題，整個人僵住了。好一會兒，他才開口。',
             'Old Zhou stiffens at your question. A long silence before he speaks.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「……你看到了。」他低下頭。「我以為那些字太小，沒人會注意。」',
             '"...You saw them." He lowers his head. "I thought no one would notice — the letters were so small."'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「通風管裡……我不只刻了求救的話。」老周的聲音沙啞了。「我把所有記得的都刻下來了。怕自己石化之前忘掉。」',
             '"In the vents... I didn\'t just carve pleas for help." Old Zhou\'s voice goes rough. "I carved everything I could remember. Afraid I\'d forget before the stone took me."'),
      delay: 3500 },
    { art: `<pre class="ascii-art">
  ╔═════════════════════════════════╗
  ║  通風管壁 — 老周的記錄          ║
  ╠═════════════════════════════════╣
  ║                                 ║
  ║  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱      ║
  ║  ╱ 第三班 17人            ╱     ║
  ║  ╱ 礦難前一天 監工K下令   ╱     ║
  ║  ╱ 加班開採 東翼B-7區    ╱     ║
  ║  ╱ 那裡不該碰的          ╱     ║
  ║  ╱ 所有人都知道           ╱     ║
  ║  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱      ║
  ║  ╱ 第二天 爆炸           ╱     ║
  ║  ╱ 不是瓦斯 不是塌方     ╱     ║
  ║  ╱ 是封印碎了            ╱     ║
  ║  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱      ║
  ║                                 ║
  ║     · ˚ · 密密麻麻的刻痕 · ˚ · ║
  ╚═════════════════════════════════╝
</pre>`, artEn: `<pre class="ascii-art">
  ╔═════════════════════════════════╗
  ║  Vent Wall — Zhou's Record     ║
  ╠═════════════════════════════════╣
  ║                                 ║
  ║  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱      ║
  ║  ╱ Crew 3, 17 men         ╱    ║
  ║  ╱ Day before disaster:   ╱    ║
  ║  ╱ Overseer K ordered     ╱    ║
  ║  ╱ overtime in East Wing  ╱    ║
  ║  ╱ Sector B-7             ╱    ║
  ║  ╱ We all knew: forbidden ╱    ║
  ║  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱      ║
  ║  ╱ Next day: explosion    ╱    ║
  ║  ╱ Not gas. Not collapse. ╱    ║
  ║  ╱ The seal broke.        ╱    ║
  ║  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱      ║
  ║                                 ║
  ║    · ˚ · Dense carvings · ˚ ·  ║
  ╚═════════════════════════════════╝
</pre>`, delay: 800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「東翼 B-7 區——那裡有一層古老的封印。老礦工都知道，不能碰。但監工 K……他不在乎。」',
             '"East Wing Sector B-7 — there was an ancient seal. All the old miners knew: don\'t touch it. But Overseer K... he didn\'t care."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「他說封印後面有大量石化結晶——純度最高的那種。值很多錢。」老周攥緊了拳頭。',
             '"He said behind the seal lay massive petrification crystals — highest purity. Worth a fortune." Old Zhou clenches his fists.'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我們第三班被派去炸開封印。十七個人。」他的聲音開始發抖。',
             '"Our Crew 3 was ordered to blast the seal open. Seventeen men." His voice starts shaking.'),
      delay: 2800 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「爆炸的一瞬間——不是石頭碎裂的聲音。是一聲……尖嘯。像是什麼東西被放了出來。」',
             '"The instant it blew — it wasn\'t the sound of rock shattering. It was a... shriek. Like something had been set free."'),
      delay: 3200 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「然後石化瘟疫就來了。先是離封印最近的人——幾秒鐘內就完全石化。然後是第二排、第三排……」老周閉上了眼睛。',
             '"Then the petrification plague came. First the men closest to the seal — fully petrified in seconds. Then the second row, the third..." Old Zhou closes his eyes.'),
      delay: 3500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「十七個人。活下來的只有我一個。因為我當時在最後面搬炸藥。」',
             '"Seventeen men. I\'m the only survivor. Because I was at the back, carrying explosives."'),
      delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense',
      text: L('老周的完好的手在發抖。他那隻深棕色的眼睛濕潤了。',
             'Old Zhou\'s good hand trembles. His deep brown eye glistens.'),
      delay: 2500 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「我把這些都刻在通風管裡了。怕的是——如果我也石化了，就再也沒人記得真相。」',
             '"I carved it all in the vents. I was afraid — if I turned to stone too, no one would remember the truth."'),
      delay: 3000 },
    { tag: '對話', tagColor: 'tag-npc',
      text: L('「礦難不是天災。是監工 K 為了石化結晶，故意炸開了封印。」',
             '"The disaster wasn\'t natural. Overseer K blew the seal open on purpose — for the crystals."'),
      delay: 3000 },
  ], [
    { text: '監工 K 現在在哪？', textEn: 'Where is Overseer K now?',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('老周搖了搖頭。「不知道。爆炸之後我就跑了，再也沒見過他。」',
                   'Old Zhou shakes his head. "Don\'t know. I ran after the explosion. Never saw him again."'),
            delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「但如果他還活著——他一定往上跑了。那種人不會往下走。」',
                   '"But if he\'s alive — he ran upward. That kind of man doesn\'t go deeper."'),
            delay: 2800 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「如果你到了上面……替那十六個人問問他——值不值得。」老周的語氣平靜得可怕。',
                   '"If you make it up there... ask him for those sixteen men — was it worth it." Old Zhou\'s tone is terrifyingly calm.'),
            delay: 3200 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('獲得關鍵情報 | 經驗 +10', 'Key intel acquired | XP +10'),
            delay: 1500, effect: () => { gainXp(10); state.flags.r1ZhouMineDisaster = true; } },
        ], [
          { text: '我會查清楚的', textEn: 'I\'ll find out', action: () => loadNode('r1_quarters') },
        ], { label: L('老周的真相', 'Zhou\'s truth') });
      }},
    { text: '這些不會白白被埋沒的', textEn: 'This won\'t be buried',
      action: () => {
        autoExplore([
          { tag: '對話', tagColor: 'tag-npc',
            text: L('老周看了你很久。然後他點了點頭。',
                   'Old Zhou looks at you for a long time. Then nods.'),
            delay: 2500 },
          { tag: '對話', tagColor: 'tag-npc',
            text: L('「……謝了，小子。」他低聲說。「能有人知道就夠了。」',
                   '"...Thanks, kid." He says quietly. "Just knowing someone knows is enough."'),
            delay: 2800 },
          { tag: '效果', tagColor: 'tag-system',
            text: L('獲得關鍵情報 | 經驗 +10', 'Key intel acquired | XP +10'),
            delay: 1500, effect: () => { gainXp(10); state.flags.r1ZhouMineDisaster = true; } },
        ], [
          { text: '返回', textEn: 'Back', action: () => loadNode('r1_quarters') },
        ], { label: L('老周的真相', 'Zhou\'s truth') });
      }},
  ], { label: L('老周的記憶', 'Zhou\'s memory') });
});

// ── NPC: The Wanderer — 灰鶴 (Grey Crane) ──
registerNode('r1_wanderer', () => {
  state.flags.r1WandererMet = true;
  autoExplore([
    { tag: '感知', tagColor: 'tag-sense', text: '鐵軌旁傳來輕微的腳步聲——不是石化生物那種僵硬的步伐。', textEn: 'Light footsteps by the rails — not the rigid gait of a petrified creature.', delay: 2000 },
    { tag: '遭遇', tagColor: 'tag-combat', text: '你立刻壓低身體，握緊武器——', textEn: 'You crouch immediately, weapon ready —', delay: 1500 },
    { art: npcPortrait.art('crane', { subtitle: '流浪者' }) || `<pre class="ascii-art gold">
      ·  .  ·  .  ·  .  ·  .  ·
          ╭━━━━━━━━━╮
         ╱           ╲
        ╱  ╭━━━━━━━╮  ╲
       │   │ ─   ─ │   │
       │   │  ╰△╯  │   │
        ╲  ╰━━━┯━━━╯  ╱
    ╭╮   ╲╲    │    ╱╱   ╭────╮
    ││  ╱╱ ╲───┤───╱ ╲╲  │行囊│
    ╰┤ ╱╱   ╲  │  ╱   ╲╲ ├────┤
     │╱╱     ╲ │ ╱     ╲╰┤ ◆◇ │
     ╱╱       ╲│╱       ╲╰┬───╯
    ╱╱        ╱ ╲        │╯
             ╱   ╲
      灰 鶴  ——  流 浪 者
</pre>`, artEn: npcPortrait.art('crane', { subtitle: 'Wanderer' }) || `<pre class="ascii-art gold">
      ·  .  ·  .  ·  .  ·  .  ·
          ╭━━━━━━━━━╮
         ╱           ╲
        ╱  ╭━━━━━━━╮  ╲
       │   │ ─   ─ │   │
       │   │  ╰△╯  │   │
        ╲  ╰━━━┯━━━╯  ╱
    ╭╮   ╲╲    │    ╱╱   ╭────╮
    ││  ╱╱ ╲───┤───╱ ╲╲  │Pack│
    ╰┤ ╱╱   ╲  │  ╱   ╲╲ ├────┤
     │╱╱     ╲ │ ╱     ╲╰┤ ◆◇ │
     ╱╱       ╲│╱       ╲╰┬───╯
    ╱╱        ╱ ╲        │╯
             ╱   ╲
    Grey Crane — Wanderer
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-explore', html: '暗處走出一個人影——一個穿著打滿補丁斗篷的<b>女人</b>。', htmlEn: 'A figure emerges from the shadows — a <b>woman</b> in a heavily-patched cloak.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '她的皮膚幾乎沒有石化紋路——在這個深度，這幾乎不可能。', textEn: 'Her skin shows almost no petrification — at this depth, that should be impossible.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '她看到你，停下腳步。冷靜地打量了你幾秒。', textEn: 'She spots you and stops. Calmly sizes you up for a few seconds.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '「你不是石礦工，也不是亡魂。有意思。」她的聲音平靜而低沉。', textEn: '"Not a Stone Miner, not a ghost. Interesting." Her voice is calm and low.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「叫我灰鶴就好。我在這些礦道裡……來來回回很多年了。」', textEn: '"Call me Grey Crane. I\'ve been going back and forth through these mines... for many years."', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '她背著一個鼓鼓囊囊的行囊，裡面發出各種叮叮噹噹的聲響。', textEn: 'She carries a bulging pack that clinks and clatters with every step.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', html: '「看你的樣子，是從坑底爬上來的？<b>你是「爐灶' + (state.sex === 'male' ? '少年' : '少女') + '」嗎？</b>」', htmlEn: '"By the look of you, climbed up from the pit? <b>Are you the \'' + (state.sex === 'male' ? 'Hearth-Youth' : 'Hearth-Maiden') + '\'?</b>"', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '這個詞再次刺痛了你的記憶。她怎麼會知道？', textEn: 'The word stings your memory again. How does she know?', delay: 2500 },
  ].concat(state.flags.ngPlus ? [
    { tag: '記憶', tagColor: 'tag-petri', text: '她的臉……那道斗篷下的疤痕……你確定你在某處見過她。也許是在骰子桌旁。', textEn: 'Her face... that scar beneath the cloak... you\'re certain you\'ve met before. Perhaps at a dice table.', delay: 2800 },
  ] : []), [
    { text: '你怎麼知道「爐灶' + (state.sex === 'male' ? '少年' : '少女') + '」？', textEn: 'How do you know about the "' + (state.sex === 'male' ? 'Hearth-Youth' : 'Hearth-Maiden') + '"?', action: () => loadNode('r1_wanderer_lore') },
    { text: '你有什麼東西可以交易嗎？', textEn: 'Do you have anything to trade?', action: () => loadNode('r1_wanderer_trade') },
    { text: '保持警惕，沉默不語', textEn: 'Stay silent and on guard', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '灰鶴微微一笑：「不想說也沒關係。能活到這裡的人，都有自己的故事。」', textEn: 'Grey Crane smiles faintly: "That\'s fine. Anyone who\'s survived this far has their own story."', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「如果你想交易，或者需要情報，我會在這附近。礦道是我的家。」', textEn: '"If you want to trade or need information, I\'ll be around. The mines are my home."', delay: 2500 },
      ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r1_deep') }]);
    }},
  ], { label: L('遭遇流浪者', 'Meeting a wanderer') });
});

registerNode('r1_wanderer_lore', () => {
  autoExplore([
    { art: npcPortrait.art('crane', { subtitle: '流浪者' }) || `<pre class="ascii-art gold">
       ╭━━━━━━━╮
      ╱ ╭━━━━━╮ ╲
     │  │─  ─ │  │
     │  │ ╰△╯ │  │
      ╲ ╰━┯━━━╯ ╱
    ╭╮ ╲╲─┤──╱╱ ╭──╮
    ╰┤╱╱ ╲│ ╱╲╲ │囊│
     ╱╱   ╱╲  ╲╰┬──╯
          ╱  ╲  │╯
    灰 鶴 · 流 浪 者
</pre>`, artEn: npcPortrait.art('crane', { subtitle: 'Wanderer' }) || `<pre class="ascii-art gold">
       ╭━━━━━━━╮
      ╱ ╭━━━━━╮ ╲
     │  │─  ─ │  │
     │  │ ╰△╯ │  │
      ╲ ╰━┯━━━╯ ╱
    ╭╮ ╲╲─┤──╱╱ ╭───╮
    ╰┤╱╱ ╲│ ╱╲╲ │Pack│
     ╱╱   ╱╲  ╲╰┬───╯
          ╱  ╲  │╯
  Grey Crane · Wanderer
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '灰鶴的笑容消失了。她沉默了一會兒。', textEn: 'Grey Crane\'s smile fades. She\'s silent for a moment.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '「……因為我見過上一個。」', textEn: '"...because I saw the last one."', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「十年前。長老們抓了一個女孩，說她的血能平息瘟疫。他們把她浸入熱泉。」', textEn: '"Ten years ago. The elders took a girl, said her blood could quell the plague. They submerged her in the hot spring."', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: '「那之後，瘟疫確實停了……三個月。然後更猛烈地爆發了。」', textEn: '"After that, the plague did stop... for three months. Then it came back fiercer."', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', html: '「<b>獻祭從來不是解藥——只是暫時的封印。每次封印碎裂，瘟疫就更強。</b>」', htmlEn: '"<b>The sacrifice was never a cure — just a temporary seal. Each time it breaks, the plague grows stronger.</b>"', delay: 3200 },
    { tag: '記憶', tagColor: 'tag-system', text: '你的左手劇烈疼痛——這些話觸動了某些深埋的記憶碎片。', textEn: 'Your left hand throbs violently — her words dredge up buried memory fragments.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '灰鶴看著你的反應，若有所思。', textEn: 'Grey Crane observes your reaction, thoughtful.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', html: '「你如果想真正結束這一切——<b>不要去熱泉。去找封印的源頭。</b>那東西在大採石場的最深處。」', htmlEn: '"If you want to truly end this — <b>don\'t go to the hot spring. Find the source of the seal.</b> It\'s in the deepest part of the Great Quarry."', delay: 3500 },
  ], [
    { text: '你為什麼不受石化影響？', textEn: 'Why aren\'t you affected by petrification?', action: () => {
      autoExplore([
        { tag: '感知', tagColor: 'tag-sense', text: '灰鶴捲起袖子——', textEn: 'Grey Crane rolls up her sleeve —', delay: 1500 },
        { tag: '感知', tagColor: 'tag-sense', text: '她的手臂上遍佈密密麻麻的刀痕。每一道傷口的邊緣都有石化紋路。', textEn: 'Her arm is covered with countless knife scars. Petrification patterns edge each wound.', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', html: '「<b>放血。</b>當石化蔓延到某個部位，我就割開它，讓帶著瘟疫的血流出來。」', htmlEn: '"<b>Bloodletting.</b> When petrification reaches a spot, I cut it and let the plagued blood drain."', delay: 3000 },
        { tag: '情報', tagColor: 'tag-info', text: '「痛嗎？痛。但比變成石頭好。」她放下袖子。', textEn: '"Does it hurt? Yes. But better than turning to stone." She lowers her sleeve.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「不推薦你試——只有對瘟疫有天生抗性的人才能承受得住。」', textEn: '"Don\'t recommend you try it — only those with innate resistance can survive the process."', delay: 2500 },
      ], [
        { text: '謝謝你告訴我這些', textEn: 'Thank you for telling me this', action: () => {
          state.flags.r1WandererLore = true;
          changeStat('wil', 1);
          notify(L('意志 +1', 'WIL +1'));
          loadNode('r1_wanderer_trade');
        }},
      ]);
    }},
    { text: '我想交易', textEn: 'I want to trade', action: () => loadNode('r1_wanderer_trade') },
  ], { label: L('爐灶' + (state.sex === 'male' ? '少年' : '少女') + '的真相', 'Truth about the ' + (state.sex === 'male' ? 'Hearth-Youth' : 'Hearth-Maiden')) });
});

registerNode('r1_wanderer_trade', () => {
  var hasBread = hasItem(L('黑麵包', 'Black Bread'));
  var hasScale = hasItem(L('蜥蜴鱗片', 'Lizard Scale'));
  var hasPureCrystal = hasItem(L('純淨石化結晶', 'Pure Petri Crystal'));
  autoExplore([
    { art: npcPortrait.art('crane', { subtitle: '流浪者' }) || `<pre class="ascii-art gold">
       ╭━━━━━━━╮
      ╱ ╭━━━━━╮ ╲
     │  │─  ─ │  │
     │  │ ╰△╯ │  │
      ╲ ╰━┯━━━╯ ╱
    ╭╮ ╲╲─┤──╱╱ ╭──╮
    ╰┤╱╱ ╲│ ╱╲╲ │囊│
     ╱╱   ╱╲  ╲╰┬──╯
          ╱  ╲  │╯
    灰 鶴 · 流 浪 者
</pre>`, artEn: npcPortrait.art('crane', { subtitle: 'Wanderer' }) || `<pre class="ascii-art gold">
       ╭━━━━━━━╮
      ╱ ╭━━━━━╮ ╲
     │  │─  ─ │  │
     │  │ ╰△╯ │  │
      ╲ ╰━┯━━━╯ ╱
    ╭╮ ╲╲─┤──╱╱ ╭───╮
    ╰┤╱╱ ╲│ ╱╲╲ │Pack│
     ╱╱   ╱╲  ╲╰┬───╯
          ╱  ╲  │╯
  Grey Crane · Wanderer
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '灰鶴解開行囊，裡面裝滿了各種從礦道中搜刮來的物資。', textEn: 'Grey Crane opens her pack, filled with scavenged supplies from the mines.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '「我不收錢——這裡的錢幣除了扔人以外沒什麼用處。」', textEn: '"I don\'t take coins — money\'s only good for throwing at people down here."', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '「但如果你有食物或者稀有材料，我們可以交換。」', textEn: '"But if you have food or rare materials, we can trade."', delay: 2000 },
  ], (function() {
    var c = [];
    if (hasBread && !state.flags.r1TradedBread) {
      c.push({ text: '用黑麵包交換', textEn: 'Trade the black bread', action: () => {
        state.flags.r1TradedBread = true;
        removeItem(L('黑麵包', 'Black Bread'));
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你遞出那塊黑麵包。灰鶴接過去仔細看了看。', textEn: 'You offer the black bread. Grey Crane examines it carefully.', delay: 1800 },
          { tag: '情報', tagColor: 'tag-info', text: '「坑底的麵包……至少二十年了吧。居然沒完全腐爛——石化空氣反而保存了它。」', textEn: '"Bread from the pit... at least twenty years old. The petrification air actually preserved it."', delay: 2800 },
          { tag: '物品', tagColor: 'tag-item', html: '她從行囊裡取出一瓶深綠色的液體：<b>「淨化藥劑」</b>。', htmlEn: 'She pulls a bottle of dark green liquid from her pack: <b>"Purification Elixir."</b>', delay: 2200, effect: () => addItem(L('淨化藥劑', 'Purification Elixir')) },
          { tag: '情報', tagColor: 'tag-info', text: '「喝下去能大幅減緩石化。一次性的，但效果很好。」', textEn: '"Drink it to greatly slow petrification. One-time use, but very effective."', delay: 2500 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_wanderer_trade') }]);
      }});
    }
    if (hasScale && !state.flags.r1TradedScale) {
      c.push({ text: '用蜥蜴鱗片交換', textEn: 'Trade the lizard scale', action: () => {
        state.flags.r1TradedScale = true;
        removeItem(L('蜥蜴鱗片', 'Lizard Scale'));
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '灰鶴接過鱗片，對著光仔細端詳。', textEn: 'Grey Crane takes the scale, examining it against the light.', delay: 1800 },
          { tag: '情報', tagColor: 'tag-info', text: '「石蜥蜴的鱗片——這東西能做很好的護具。」', textEn: '"A Stone Lizard scale — excellent for making armor."', delay: 2200 },
          { tag: '物品', tagColor: 'tag-item', html: '她用鱗片和皮革迅速編織出一個<b>石鱗護腕</b>。', htmlEn: 'She quickly weaves the scale and leather into a <b>Stone-Scale Bracer</b>.', delay: 2200, effect: () => { addItem(L('石鱗護腕', 'Stone-Scale Bracer')); changeStat('agi', 1); } },
          { tag: '情報', tagColor: 'tag-info', text: '「戴上它能提升你的反應速度。」', textEn: '"Wear it to sharpen your reflexes."', delay: 1800 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_wanderer_trade') }]);
      }});
    }
    if (hasPureCrystal && !state.flags.r1TradedCrystal) {
      c.push({ text: '用純淨石化結晶交換', textEn: 'Trade a Pure Petri Crystal', action: () => {
        state.flags.r1TradedCrystal = true;
        removeItem(L('純淨石化結晶', 'Pure Petri Crystal'));
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '灰鶴看到結晶，眼睛一亮。', textEn: 'Grey Crane\'s eyes light up at the crystal.', delay: 1500 },
          { tag: '情報', tagColor: 'tag-info', text: '「品質極好的結晶……這可是稀有貨。」', textEn: '"Top-quality crystal... rare stuff."', delay: 2000 },
          { tag: '物品', tagColor: 'tag-item', html: '她拿出一把精心打磨的<b>黑曜石短刀</b>。', htmlEn: 'She produces a carefully honed <b>Obsidian Knife</b>.', delay: 2200, effect: () => { addItem(L('黑曜石短刀', 'Obsidian Knife')); changeStat('str', 1); } },
          { tag: '情報', tagColor: 'tag-info', text: '「大採石場的火山石磨出來的。比碎石匕首好用一百倍。」', textEn: '"Ground from volcanic stone in the Great Quarry. A hundred times better than a stone dagger."', delay: 2500 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_wanderer_trade') }]);
      }});
    }
    if (!hasBread && !hasScale && !hasPureCrystal) {
      c.push({ text: '（沒有可交易的物品）', textEn: '(Nothing to trade)', action: () => {
        autoExplore([
          { tag: '情報', tagColor: 'tag-info', text: '灰鶴搖了搖頭：「下次有好東西再來找我吧。」', textEn: 'Grey Crane shakes her head: "Come back when you have something good."', delay: 2000 },
        ], [{ text: '返回', textEn: 'Return', action: () => loadNode('r1_deep') }]);
      }});
    }
    c.push({ text: '結束交易', textEn: 'End trading', action: () => {
      autoExplore([
        { tag: '情報', tagColor: 'tag-info', text: '灰鶴繫好行囊：「小心前面的路。大門後面……不止有石頭。」', textEn: 'Grey Crane ties her pack: "Watch out ahead. Beyond the gate... there\'s more than stone."', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '她轉身消失在暗處。腳步聲很快被迴廊的風聲吞沒。', textEn: 'She turns and vanishes into the darkness. Her footsteps are quickly swallowed by the wind.', delay: 2200 },
      ], [{ text: '繼續探索', textEn: 'Continue exploring', action: () => loadNode('r1_deep') }]);
    }});
    return c;
  })(), { label: L('與灰鶴交易', 'Trading with Grey Crane') });
});

// ═══════════════════════════════════════════════════
//  NPC: 螢 (Ying / Firefly) — 記錄員學徒
// ═══════════════════════════════════════════════════

// ── First encounter: chasing the figure ──
registerNode('r1_ying_encounter', () => {
  state.flags.r1YingMet = true;
  var isMale = state.sex === 'male';
  var yingGender = isMale ? L('女孩', 'girl') : L('少年', 'young man');
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');

  autoExplore([
    { tag: '行動', tagColor: 'tag-move', text: '你追著那道身影跑進了岔路旁的窄隧道。', textEn: 'You chase the figure into a narrow tunnel beside the fork.', delay: 1800 },
    { tag: '感知', tagColor: 'tag-sense', text: '隧道很窄，勉強容一人通過。牆壁上的礦脈在這裡特別密集，光線反而比主道更亮。', textEn: 'The tunnel is barely wide enough for one. Ore veins crowd the walls, casting brighter light than the main corridor.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '腳步聲停了。', textEn: 'The footsteps stop.', delay: 2000 },
    { tag: '遭遇', tagColor: 'tag-combat', text: '「別再跟了——」', textEn: '"Stop following me—"', delay: 1800 },
    { tag: '感知', tagColor: 'tag-sense', text: '一道清亮但帶著緊張的聲音從前方傳來。', textEn: 'A clear but tense voice rings out from ahead.', delay: 2000 },
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
          ·  ✦  ·
       ╲ ╲│╱ ╱
        ╲ ╭─╮ ╱      ～～╮
         ╭╯ ╰╮        ╭─╯
        ╱ ◉ ◉ ╲      ╱
        │ ╰▽╯ │    ╭╯
         ╲ ── ╱───╮│
    ✦·  ╱╭┤  ├╮╲  ╰┤  ·✦
       ╱ │╰──╯│ ╲╭─┴─╮
      ╱ ✦│    │  ││冊 │
     ✦·  │    │  ╰┴───╯
         ╱    ╲
       ╱╱      ╲╲
      螢  ——  記 錄 員
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
          ·  ✦  ·
       ╲ ╲│╱ ╱
        ╲ ╭─╮ ╱      ～～╮
         ╭╯ ╰╮        ╭─╯
        ╱ ◉ ◉ ╲      ╱
        │ ╰▽╯ │    ╭╯
         ╲ ── ╱───╮│
    ✦·  ╱╭┤  ├╮╲  ╰┤  ·✦
       ╱ │╰──╯│ ╲╭─┴─╮
      ╱ ✦│    │  ││Note│
     ✦·  │    │  ╰┴───╯
         ╱    ╲
       ╱╱      ╲╲
    Ying  ——  Chronicler
</pre>`, delay: 800 },
    { tag: '遭遇', tagColor: 'tag-explore', html: '隧道盡頭的小洞室裡，一個年輕的<b>' + yingGender + '</b>背靠岩壁站著，雙手護住胸前的一本破舊手冊。', htmlEn: 'In a small chamber at the tunnel\'s end, a young <b>' + (isMale ? 'girl' : 'man') + '</b> stands backed against the rock wall, clutching a worn notebook to ' + (isMale ? 'her' : 'his') + ' chest.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '的手指沾滿墨漬，指節纖細但佈滿老繭——是長年書寫留下的痕跡。', textEn: (isMale ? 'Her' : 'His') + ' fingers are stained with ink, slender but callused — marks of years of writing.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '的皮膚上有淡淡的石化紋路，但比你見過的任何倖存者都輕。像是霜花印在瓷器上。', textEn: 'Faint petrification traces mark ' + (isMale ? 'her' : 'his') + ' skin — lighter than any survivor you\'ve seen. Like frost etched on porcelain.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「……你不是石礦工。」' + yingPronoun + '上下打量你，警惕稍微放鬆了一些。', textEn: '"...You\'re not a Stone Miner." ' + (isMale ? 'She' : 'He') + ' sizes you up, guard lowering slightly.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「我叫螢。以前是地底城市的記錄員……學徒。瘟疫爆發後，長老們把所有記錄都燒了。」', textEn: '"I\'m Ying. Used to be a chronicler\'s apprentice in the underground city. When the plague broke out, the elders burned all the records."', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '低頭看了看手中的手冊，像是在保護什麼珍貴的東西。', textEn: (isMale ? 'She' : 'He') + ' glances down at the notebook, as if guarding something precious.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', html: '「<b>但我偷偷抄了一份。</b>關於瘟疫起源的記錄……至少是碎片。我一直在這些礦道裡補全它。」', htmlEn: '"<b>But I secretly copied some.</b> Records about the plague\'s origin... fragments, at least. I\'ve been filling in the gaps in these tunnels."', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '的眼睛在礦脈的藍光中顯得格外明亮——那是一種執著的、不肯熄滅的光。', textEn: (isMale ? 'Her' : 'His') + ' eyes catch the blue glow of the ore veins — burning with a stubborn, unquenchable light.', delay: 3000 },
  ].concat(state.flags.ngPlus ? [
    { tag: '記憶', tagColor: 'tag-petri', text: '一股強烈的既視感湧上心頭——你見過' + yingPronoun + '。在某個不屬於這裡的記憶中。', textEn: 'A powerful sense of déjà vu hits — you\'ve seen ' + (isMale ? 'her' : 'him') + ' before. In a memory that doesn\'t belong here.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '似乎也察覺到了什麼，微微皺眉：「……你的眼神很奇怪。好像……認識我？」', textEn: (isMale ? 'She' : 'He') + ' seems to notice something too, frowning slightly: "...Your eyes are strange. As if... you know me?"', delay: 3000 },
  ] : []), [
    { text: '我叫' + state.name + '，我也在找瘟疫的真相', textEn: 'I\'m ' + state.name + '. I\'m searching for the truth too', action: () => loadNode('r1_ying_truth') },
    { text: '這裡很危險，你怎麼一個人？', textEn: 'It\'s dangerous here. Why are you alone?', action: () => loadNode('r1_ying_alone') },
    { text: '保持沉默，點了點頭', textEn: 'Stay silent and nod', action: () => loadNode('r1_ying_silent') },
  ], { label: L('遭遇記錄員', 'Meeting the chronicler') });
});

// ── Ying: player shares purpose ──
registerNode('r1_ying_truth', () => {
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  var yingPronounCap = isMale ? 'She' : 'He';
  state.flags.r1YingTrustUp = true;
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴─╮
     ✦· │  │ │冊│
        ╱  ╲ ╰──╯
      ╱╱    ╲╲
      螢  ·  記錄員
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴──╮
     ✦· │  │ │Note│
        ╱  ╲ ╰───╯
      ╱╱    ╲╲
     Ying · Chronicler
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '你把自己的名字和來歷簡單說了。螢聽到「爐灶' + (isMale ? '少年' : '少女') + '」四個字時，手微微一顫。', textEn: 'You briefly share your name and background. When Ying hears "' + (isMale ? 'Hearth-Youth' : 'Hearth-Maiden') + '," ' + (isMale ? 'her' : 'his') + ' hand trembles.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「……你就是那個被獻祭的人？」' + yingPronoun + '的聲音微微發抖，但眼中多了一種複雜的光芒。', textEn: '"...You\'re the one who was sacrificed?" ' + yingPronounCap + ' voice trembles, but ' + (isMale ? 'her' : 'his') + ' eyes fill with something complicated.', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', html: yingPronoun + '翻開手冊，指著其中一頁：「<b>我記錄過你的事。</b>長老會議的紀錄裡提到過——第十七任爐灶' + (isMale ? '少年' : '少女') + '，被選中的理由是「對石化具有異常的抗性」。」', htmlEn: yingPronounCap + ' flips open the notebook, pointing to a page: "<b>I chronicled your case.</b> The elders\' council records mention — the 17th ' + (isMale ? 'Hearth-Youth' : 'Hearth-Maiden') + ', chosen for \'anomalous resistance to petrification.\'"', delay: 4000 },
    { tag: '記憶', tagColor: 'tag-system', text: '第十七任……在你之前，已經有十六個人被丟進熱泉。', textEn: 'The seventeenth... before you, sixteen others were cast into the hot spring.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「我以為你已經死了。」螢低聲說，目光停留在你泛灰的左手上。', textEn: '"I thought you were dead," Ying murmurs, eyes lingering on your grey-tinged left hand.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '伸出手，猶豫了一瞬，輕輕碰了碰你石化的指尖——像是在確認你是否真實存在。', textEn: yingPronounCap + ' reaches out, hesitates, then lightly touches your petrified fingertips — as if checking whether you\'re real.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '那一瞬間的觸感很溫暖。在這座冰冷的地底，你已經很久沒有被人這樣碰觸了。', textEn: 'That brief touch is warm. In these frozen depths, it\'s been so long since anyone touched you like that.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '螢迅速收回手，耳根微微泛紅：「抱歉……我只是……確認一下。」', textEn: 'Ying quickly pulls back, ears flushing: "Sorry... I just... had to make sure."', delay: 2800 },
  ], [
    { text: '你知道的比我想像的多', textEn: 'You know more than I expected', action: () => { changeStat('wil', 1); notify(L('意志 +1', 'WIL +1')); loadNode('r1_ying_share'); } },
  ], { label: L('分享真相', 'Sharing truth') });
});

// ── Ying: why alone? ──
registerNode('r1_ying_alone', () => {
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  var yingPronounCap = isMale ? 'She' : 'He';
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴─╮
     ✦· │  │ │冊│
        ╱  ╲ ╰──╯
      ╱╱    ╲╲
      螢  ·  記錄員
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴──╮
     ✦· │  │ │Note│
        ╱  ╲ ╰───╯
      ╱╱    ╲╲
     Ying · Chronicler
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '螢苦笑了一下：「一個人？習慣了。」', textEn: 'Ying smiles bitterly: "Alone? I\'m used to it."', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '「瘟疫爆發後，城市裡的人分成了兩派——一派往上逃，一派往更深處挖。我哪邊都不想去。」', textEn: '"After the plague hit, the city split — one group fled upward, the other dug deeper. I didn\'t want either."', delay: 3500 },
    { tag: '情報', tagColor: 'tag-info', html: '「我只想<b>記下來</b>。發生了什麼，為什麼會這樣。如果所有人都變成石頭了，至少要有人寫下來。」', htmlEn: '"I just wanted to <b>write it down</b>. What happened, why it happened. If everyone turns to stone, at least someone should record it."', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '的語氣平靜，但你注意到' + yingPronoun + '握著手冊的指節發白。', textEn: yingPronounCap + ' voice is calm, but you notice ' + (isMale ? 'her' : 'his') + ' knuckles whiten around the notebook.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「何況……記錄員有個好處。我知道哪些區域的石化濃度低，哪些路線相對安全。」', textEn: '"Besides... being a chronicler has its perks. I know which areas have low petrification density, which routes are safer."', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '突然看著你：「倒是你——從坑底爬上來，身上帶著祭獻的印記。你比我更應該害怕獨處才對。」', textEn: yingPronounCap + ' suddenly looks at you: "But you — climbing up from the pit, bearing the mark of sacrifice. You should fear solitude more than I do."', delay: 3500 },
  ], [
    { text: '告訴螢你的來歷', textEn: 'Tell Ying your story', action: () => { state.flags.r1YingTrustUp = true; loadNode('r1_ying_truth'); } },
    { text: '也許我們可以互相照應', textEn: 'Maybe we could watch out for each other', action: () => { state.flags.r1YingTrustUp = true; loadNode('r1_ying_share'); } },
  ], { label: L('詢問螢', 'Asking Ying') });
});

// ── Ying: player stays silent ──
registerNode('r1_ying_silent', () => {
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴─╮
     ✦· │  │ │冊│
        ╱  ╲ ╰──╯
      ╱╱    ╲╲
      螢  ·  記錄員
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴──╮
     ✦· │  │ │Note│
        ╱  ╲ ╰───╯
      ╱╱    ╲╲
     Ying · Chronicler
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你沒有說話，只是點了點頭，表示自己沒有敵意。', textEn: 'You say nothing, just nod to show you mean no harm.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢盯著你看了很久。然後' + yingPronoun + '輕聲說——', textEn: 'Ying stares at you for a long time. Then ' + (isMale ? 'she' : 'he') + ' says softly —', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「……你的眼睛跟別人不一樣。不像放棄了的人。」', textEn: '"...Your eyes are different. Not like someone who\'s given up."', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「如果你想找我，我會在這條隧道附近。我叫螢。」', textEn: '"If you need me, I\'ll be near this tunnel. I\'m Ying."', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '微微側頭，嘴角浮現一絲淺淺的笑意。在這片灰暗中，那個笑容意外地明亮。', textEn: (isMale ? 'She' : 'He') + ' tilts ' + (isMale ? 'her' : 'his') + ' head, a faint smile crossing ' + (isMale ? 'her' : 'his') + ' lips. In this grey world, that smile is unexpectedly bright.', delay: 3000 },
  ], [
    { text: '轉身離開', textEn: 'Turn and leave', action: () => loadNode('r1_deep') },
  ], { label: L('沉默的相遇', 'Silent meeting') });
});

// ── Ying: sharing information ──
registerNode('r1_ying_share', () => {
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  var yingPronounCap = isMale ? 'She' : 'He';
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴─╮
     ✦· │  │ │冊│
        ╱  ╲ ╰──╯
      ╱╱    ╲╲
      螢  ·  記錄員
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴──╮
     ✦· │  │ │Note│
        ╱  ╲ ╰───╯
      ╱╱    ╲╲
     Ying · Chronicler
</pre>`, delay: 800 },
    { tag: '情報', tagColor: 'tag-info', text: '螢在洞室的地面上攤開手冊。你湊近一看——上面密密麻麻寫滿了文字和圖表。', textEn: 'Ying spreads the notebook on the chamber floor. You lean in — it\'s packed with text and diagrams.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '你們的距離很近。你能聞到' + yingPronoun + '身上的墨水味，混著礦石的冷冽氣息。', textEn: 'You\'re very close. You catch the scent of ink on ' + (isMale ? 'her' : 'him') + ', mingled with the crisp smell of mineral stone.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', html: '螢指著一段文字：「<b>石化瘟疫最早的記錄可以追溯到三百年前。</b>但那時它只是一種稀有的「石骨病」，只影響極少數人。」', htmlEn: 'Ying points to a passage: "<b>The earliest plague records date back three hundred years.</b> But then it was just a rare \'Stone-Bone Disease,\' affecting very few."', delay: 3500 },
    { tag: '情報', tagColor: 'tag-info', html: '「直到五十年前——礦工們在大採石場最深處挖到了<b>「封印石室」</b>。從那以後，瘟疫就像洪水一樣擴散了。」', htmlEn: '"Until fifty years ago — miners in the Great Quarry\'s deepest level broke into the <b>Seal Chamber</b>. After that, the plague spread like a flood."', delay: 3800 },
    { tag: '記憶', tagColor: 'tag-system', text: '封印石室……灰鶴也提到過「封印的源頭」。這些線索正在匯聚。', textEn: 'The Seal Chamber... Grey Crane also mentioned "the source of the seal." The pieces are coming together.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '螢合上手冊，抬頭看著你。藍色的礦脈光映在' + yingPronoun + '的瞳孔裡。', textEn: 'Ying closes the notebook and looks up at you. Blue ore-light reflects in ' + (isMale ? 'her' : 'his') + ' eyes.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「你要去大採石場，對嗎？」', textEn: '"You\'re heading for the Great Quarry, aren\'t you?"', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', text: '「……我也是。」', textEn: '"...So am I."', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '頓了頓，像是下定了什麼決心。', textEn: yingPronounCap + ' pauses, as if making a decision.', delay: 2000 },
    { tag: '情報', tagColor: 'tag-info', html: '「以前我一個人走，因為不想拖累別人。但如果是跟一個<b>從祭獻坑爬出來的人</b>一起——」', htmlEn: '"I always traveled alone, not wanting to burden anyone. But with someone who <b>climbed out of the Sacrificial Pit</b>—"', delay: 3200 },
    { tag: '情報', tagColor: 'tag-info', text: yingPronoun + '沒有說完那句話，但意思已經很明白了。', textEn: yingPronounCap + ' doesn\'t finish the sentence, but the meaning is clear.', delay: 2500 },
  ], [
    { text: '那就一起走吧', textEn: 'Then let\'s go together', action: () => {
      state.flags.r1YingCompanion = true;
      addItem(L('螢的筆記抄本', 'Ying\'s Note Copy'));
      autoExplore([
        { tag: '行動', tagColor: 'tag-move', text: '你伸出手。螢看著你的手——那隻左手指尖泛灰，石化紋路蜿蜒。', textEn: 'You extend your hand. Ying looks at it — your left hand, grey at the fingertips, petrification patterns winding up.', delay: 2500 },
        { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '猶豫了一下，然後伸出沾滿墨漬的手，握住了你的。', textEn: yingPronounCap + ' hesitates, then extends ' + (isMale ? 'her' : 'his') + ' ink-stained hand and grips yours.', delay: 2800 },
        { tag: '感知', tagColor: 'tag-sense', text: '石化的冰冷和體溫的溫暖交錯——一種奇異的感覺。', textEn: 'Petrification\'s chill and the warmth of body heat intertwine — a strange sensation.', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「我會把沿途看到的都記下來。」螢小聲說，聲音裡多了一些以前沒有的東西。', textEn: '"I\'ll record everything we see along the way," Ying says quietly, something new in ' + (isMale ? 'her' : 'his') + ' voice.', delay: 3000 },
        { tag: '物品', tagColor: 'tag-item', html: '螢撕下幾頁筆記遞給你：「<b>這是我整理的石化濃度分佈。</b>去採石場的時候會用到。」', htmlEn: 'Ying tears out several pages: "<b>My compiled petrification density maps.</b> You\'ll need them in the Quarry."', delay: 3000 },
      ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_deep') }]);
    }},
    { text: '我不能保證你的安全', textEn: 'I can\'t guarantee your safety', action: () => {
      autoExplore([
        { tag: '情報', tagColor: 'tag-info', text: '螢搖了搖頭，笑了。', textEn: 'Ying shakes ' + (isMale ? 'her' : 'his') + ' head and smiles.', delay: 1800 },
        { tag: '情報', tagColor: 'tag-info', text: '「我在這些礦道裡活了兩年，不需要誰來保證安全。」', textEn: '"I\'ve survived two years in these tunnels. I don\'t need safety guarantees."', delay: 2800 },
        { tag: '情報', tagColor: 'tag-info', text: '「但我們可以交換情報。你有經驗，我有記錄。這筆交易很划算。」', textEn: '"But we can trade intel. You have experience, I have records. That\'s a fair deal."', delay: 2800 },
        { tag: '物品', tagColor: 'tag-item', html: '螢撕下幾頁筆記遞給你：「先拿著這個。算是<b>訂金</b>。」', htmlEn: 'Ying tears out a few pages: "Take these first. Consider it a <b>down payment</b>."', delay: 2500, effect: () => { state.flags.r1YingCompanion = true; addItem(L('螢的筆記抄本', 'Ying\'s Note Copy')); } },
      ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_deep') }]);
    }},
  ], { label: L('交換情報', 'Exchanging intel') });
});

// ── Ying: return visit / talk ──
registerNode('r1_ying_talk', () => {
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  var yingPronounCap = isMale ? 'She' : 'He';
  var trusted = state.flags.r1YingTrustUp;
  var companion = state.flags.r1YingCompanion;

  var steps = [];
  steps.push({ art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴─╮
     ✦· │  │ │冊│
        ╱  ╲ ╰──╯
      ╱╱    ╲╲
      螢  ·  記錄員
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴──╮
     ✦· │  │ │Note│
        ╱  ╲ ╰───╯
      ╱╱    ╲╲
     Ying · Chronicler
</pre>`, delay: 800 });
  steps.push({ tag: '移動', tagColor: 'tag-move', text: '你走進螢藏身的窄隧道。', textEn: 'You enter the narrow tunnel where Ying hides.', delay: 1500 });

  if (companion) {
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '螢正靠著牆壁寫東西。看到你來，' + yingPronoun + '的筆停了一下。', textEn: 'Ying is writing against the wall. ' + yingPronounCap + ' pen pauses when ' + (isMale ? 'she sees' : 'he sees') + ' you.', delay: 2200 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '「回來了？」' + yingPronoun + '的語氣比上次柔和了不少。', textEn: '"Back?" ' + yingPronounCap + ' tone is noticeably softer than before.', delay: 2200 });
  } else {
    steps.push({ tag: '遭遇', tagColor: 'tag-explore', text: '螢坐在角落裡，警惕地抬起頭。認出是你之後，表情放鬆了些。', textEn: 'Ying sits in the corner, looking up warily. Recognition brings some relief.', delay: 2500 });
  }

  // ── Lore tidbits on return visits ──
  if (companion && !state.flags.r1YingLore1) {
    state.flags.r1YingLore1 = true;
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「對了——我整理筆記的時候發現了一件有趣的事。」', textEn: '"By the way — I found something interesting while organizing my notes."', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「長老會議的紀錄裡有一段被刪掉了，但我能看出底稿的痕跡——<b>「第一任爐灶' + (isMale ? '少年' : '少女') + '不是被獻祭的。' + (isMale ? '他' : '她') + '是自願走進熱泉的。」</b>」', htmlEn: '"A passage was deleted from the elders\' council records, but I can see traces of the draft — <b>\'The first ' + (isMale ? 'Hearth-Youth' : 'Hearth-Maiden') + ' wasn\'t sacrificed. ' + (isMale ? 'He' : 'She') + ' walked into the hot spring willingly.\'</b>"', delay: 4000 });
    steps.push({ tag: '記憶', tagColor: 'tag-system', text: '自願？為什麼有人會自願走進那片滾燙的水中……？', textEn: 'Willingly? Why would anyone willingly walk into those scalding waters...?', delay: 2500 });
  } else if (companion && state.flags.r1YingLore1 && !state.flags.r1YingLore2) {
    state.flags.r1YingLore2 = true;
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: '你注意到螢的手冊上多了很多新的墨跡。' + yingPronoun + '一直在寫。', textEn: 'You notice fresh ink marks filling Ying\'s notebook. ' + yingPronounCap + '\'s been writing non-stop.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「我在記錄你。」螢說得很自然，好像這是理所當然的事。', textEn: '"I\'m recording you," Ying says matter-of-factly, as if it were the most natural thing.', delay: 2800 });
    steps.push({ tag: '情報', tagColor: 'tag-info', html: '「第十七任爐灶' + (isMale ? '少年' : '少女') + '，從祭獻坑生還，正在向大採石場前進。<b>這是三百年來第一個活著回來的。</b>」', htmlEn: '"The 17th ' + (isMale ? 'Hearth-Youth' : 'Hearth-Maiden') + ', survived the Sacrificial Pit, advancing toward the Great Quarry. <b>The first to return alive in three hundred years.</b>"', delay: 3500 });
    steps.push({ tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '抬起頭看著你，眼神裡有一種你說不清楚的溫度。', textEn: yingPronounCap + ' looks up at you, eyes carrying a warmth you can\'t quite name.', delay: 2500 });
    steps.push({ tag: '情報', tagColor: 'tag-info', text: '「……要是以後有人讀到這段記錄，他們會知道你的名字。」', textEn: '"...If anyone reads these records someday, they\'ll know your name."', delay: 2800 });
  }

  autoExplore(steps, (function() {
    var c = [];
    // ── Romantic scene: treating Ying's petrification ──
    if (companion && hasItem(L('乾燥草藥', 'Dried Herbs')) && !state.flags.r1YingHerb) {
      c.push({ text: '用草藥幫螢處理石化紋路', textEn: 'Use herbs on Ying\'s petrification', action: () => loadNode('r1_ying_herb') });
    }
    // ── Give food ──
    if (hasItem(L('黑麵包', 'Black Bread')) && !state.flags.r1YingFed) {
      c.push({ text: '分一些黑麵包給螢', textEn: 'Share black bread with Ying', action: () => {
        state.flags.r1YingFed = true;
        removeItem(L('黑麵包', 'Black Bread'));
        autoExplore([
          { tag: '行動', tagColor: 'tag-move', text: '你把黑麵包掰成兩半，遞了一塊過去。', textEn: 'You break the black bread in half and offer a piece.', delay: 1800 },
          { tag: '感知', tagColor: 'tag-sense', text: '螢愣了一下，然後接過去，小口小口地吃。', textEn: 'Ying pauses, then takes it and eats in small bites.', delay: 2200 },
          { tag: '情報', tagColor: 'tag-info', text: '「……謝謝。」聲音很輕，但你聽得很清楚。', textEn: '"...Thank you." Barely above a whisper, but you hear it clearly.', delay: 2500 },
          { tag: '感知', tagColor: 'tag-sense', text: '你們在沉默中分食了那塊乾硬的麵包。莫名地，這個地底洞穴似乎沒有那麼冷了。', textEn: 'You share the stale bread in silence. Somehow, this underground chamber doesn\'t feel as cold anymore.', delay: 3000 },
        ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_ying_talk') }]);
      }});
    }
    if (companion && !state.flags.r1YingWarmth) {
      c.push({ text: '這裡好冷……要不要靠近一點？', textEn: 'It\'s so cold... want to huddle closer?', action: () => loadNode('r1_ying_warmth') });
    }
    if (companion) {
      c.push({ text: '聊聊天', textEn: 'Chat a while', action: () => loadNode('r1_ying_chat') });
    }
    c.push({ text: '離開', textEn: 'Leave', action: () => loadNode('r1_deep') });
    return c;
  })(), { label: L('找螢說話', 'Talking to Ying') });
});

// ── Ying: herb scene (romantic tension) ──
registerNode('r1_ying_herb', () => {
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  var yingPronounCap = isMale ? 'She' : 'He';
  state.flags.r1YingHerb = true;
  removeItem(L('乾燥草藥', 'Dried Herbs'));
  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴─╮
     ✦· │  │ │冊│
        ╱  ╲ ╰──╯
      ╱╱    ╲╲
      螢  ·  記錄員
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴──╮
     ✦· │  │ │Note│
        ╱  ╲ ╰───╯
      ╱╱    ╲╲
     Ying · Chronicler
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '「讓我看看。」你拿出乾燥草藥，走到螢身邊。', textEn: '"Let me see." You take out the dried herbs and step closer to Ying.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢下意識地退了一步，但隧道很窄——' + yingPronoun + '的後背貼上了岩壁。', textEn: 'Ying instinctively steps back, but the tunnel is narrow — ' + (isMale ? 'her' : 'his') + ' back presses against the rock wall.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「你脖子後面有一塊石化紋路在擴散。讓我處理一下。」', textEn: '"There\'s a petrification pattern spreading behind your neck. Let me treat it."', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢沉默了一瞬，然後慢慢轉過身去，低下頭，露出後頸。', textEn: 'Ying is silent for a moment, then slowly turns around and lowers ' + (isMale ? 'her' : 'his') + ' head, exposing the back of ' + (isMale ? 'her' : 'his') + ' neck.', delay: 3000 },
    { tag: '行動', tagColor: 'tag-move', text: '你碾碎草藥，小心翼翼地敷在那片灰色的紋路上。', textEn: 'You crush the herbs and carefully apply them to the grey pattern.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '的肩膀輕輕顫了一下。你感覺到指尖下的皮膚微微發燙。', textEn: yingPronounCap + ' shoulders tremble slightly. You feel the skin beneath your fingertips grow warm.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '「……你的手很冰。」螢的聲音悶悶的。', textEn: '"...Your hands are cold," Ying mumbles.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '「是石化的那隻嗎？」', textEn: '"The petrified one?"', delay: 1800 },
    { tag: '行動', tagColor: 'tag-move', text: '你沒有回答。草藥的綠色汁液滲入紋路中，灰色漸漸褪去。', textEn: 'You don\'t answer. The herbs\' green essence seeps into the patterns, grey fading.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '處理完畢。螢轉過身來，你們之間的距離近得有些不自然。', textEn: 'Treatment done. Ying turns around. The distance between you is unnaturally close.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '在幽藍的礦脈光中，' + yingPronoun + '的睫毛投下細碎的影子。', textEn: 'In the soft blue glow, ' + (isMale ? 'her' : 'his') + ' eyelashes cast delicate shadows.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '「……好多了。」螢輕聲說，但沒有後退。', textEn: '"...Much better," Ying says softly, but doesn\'t step back.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '沉默持續了幾秒。然後你們不約而同地移開了視線。', textEn: 'Silence stretches for several seconds. Then you both look away at the same time.', delay: 3000 },
  ], [
    { text: '「小心別再讓紋路擴散了。」', textEn: '"Be careful not to let the patterns spread again."', action: () => {
      changeStat('wil', 1);
      notify(L('意志 +1', 'WIL +1'));
      autoExplore([
        { tag: '情報', tagColor: 'tag-info', text: '螢點了點頭。' + yingPronoun + '的耳朵尖微微泛紅，但語氣恢復了平靜：', textEn: 'Ying nods. The tips of ' + (isMale ? 'her' : 'his') + ' ears redden, but ' + (isMale ? 'her' : 'his') + ' voice steadies:', delay: 2500 },
        { tag: '情報', tagColor: 'tag-info', text: '「我會把這個記下來——草藥對早期石化紋路的緩解效果。很重要的數據。」', textEn: '"I\'ll note this — the herbs\' effect on early-stage petrification patterns. Important data."', delay: 3000 },
        { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '低頭在手冊上快速地寫著什麼。但你注意到' + yingPronoun + '的筆跡比平時凌亂。', textEn: yingPronounCap + ' bends over the notebook, scribbling quickly. But you notice ' + (isMale ? 'her' : 'his') + ' handwriting is messier than usual.', delay: 2800 },
      ], [{ text: '繼續', textEn: 'Continue', action: () => loadNode('r1_ying_talk') }]);
    }},
  ], { label: L('為螢敷藥', 'Treating Ying') });
});

// ── Ying: casual chat (deepening bond) ──
registerNode('r1_ying_chat', () => {
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  var yingPronounCap = isMale ? 'She' : 'He';

  var yingArt = { art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴─╮
     ✦· │  │ │冊│
        ╱  ╲ ╰──╯
      ╱╱    ╲╲
      螢  ·  記錄員
</pre>`, artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">
         ·  ✦  ·
      ╲ ╲│╱ ╱     ～╮
       ╲ ╭─╮ ╱   ╭─╯
        ╱◉ ◉╲   ╱
        │╰▽╯│ ╭╯
    ✦·╱╭┤  ├╮╲╰┤·✦
      ╱✦│  │ ╭┴──╮
     ✦· │  │ │Note│
        ╱  ╲ ╰───╯
      ╱╱    ╲╲
     Ying · Chronicler
</pre>`, delay: 800 };

  if (state.flags.r1YingChat2) {
    // Third+ chat: comfortable silence
    autoExplore([
      yingArt,
      { tag: '感知', tagColor: 'tag-sense', text: '你坐在螢旁邊。' + yingPronoun + '在寫字，你在休息。', textEn: 'You sit beside Ying. ' + yingPronounCap + ' writes, you rest.', delay: 2000 },
      { tag: '環境', tagColor: 'tag-system', text: '筆尖的沙沙聲在安靜的隧道裡意外地令人安心。', textEn: 'The scratching of pen on paper is unexpectedly comforting in the quiet tunnel.', delay: 2500 },
      { tag: '感知', tagColor: 'tag-sense', text: '螢忽然停筆，歪頭看了你一眼。', textEn: 'Ying suddenly stops writing and glances at you sideways.', delay: 2200 },
      { tag: '情報', tagColor: 'tag-info', text: '「你知道嗎——你是我記錄生涯裡，寫得最多的一個人。」', textEn: '"You know — you\'re the person I\'ve written the most about in my entire career as a chronicler."', delay: 3000 },
      { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '迅速低下頭繼續寫字，假裝什麼都沒說。但' + yingPronoun + '握筆的手指微微收緊了。', textEn: yingPronounCap + ' quickly looks down and keeps writing, pretending nothing was said. But ' + (isMale ? 'her' : 'his') + ' fingers tighten around the pen.', delay: 3000 },
    ], [
      { text: '我很高興被記住', textEn: 'I\'m glad to be remembered', action: () => {
        changeHp(10);
        changePetri(-2);
        notify(L('HP +10，石化度 -2%（內心的溫暖）', 'HP +10, Petri -2% (Inner warmth)'));
        loadNode('r1_deep');
      }},
      { text: '繼續安靜地待著', textEn: 'Stay in comfortable silence', action: () => {
        changeHp(8);
        notify(L('HP +8（片刻的寧靜）', 'HP +8 (A moment of peace)'));
        loadNode('r1_deep');
      }},
    ], { label: L('與螢閒聊', 'Chatting with Ying') });
  } else if (state.flags.r1YingChat1) {
    // Second chat
    state.flags.r1YingChat2 = true;
    autoExplore([
      yingArt,
      { tag: '情報', tagColor: 'tag-info', text: '「你以前……在地表崩潰之前是做什麼的？」螢問你。', textEn: '"Before... before the surface collapsed, what did you do?" Ying asks.', delay: 2500 },
      { tag: '記憶', tagColor: 'tag-system', text: '你努力回想。但那些記憶模糊得像隔著一層灰色的霧。', textEn: 'You try to remember. But those memories are hazy, like looking through a grey fog.', delay: 2500 },
      { tag: '情報', tagColor: 'tag-info', text: '「記不起來也沒關係。」螢看出了你的困惑。', textEn: '"It\'s okay if you can\'t remember." Ying sees your confusion.', delay: 2200 },
      { tag: '情報', tagColor: 'tag-info', html: '「石化瘟疫不只侵蝕身體——<b>它也會吞噬記憶。</b>我在記錄中見過太多這樣的案例。」', htmlEn: '"The Stone Plague doesn\'t just erode the body — <b>it devours memories too.</b> I\'ve seen too many cases in my records."', delay: 3200 },
      { tag: '感知', tagColor: 'tag-sense', text: '螢沉默了一會兒，然後輕聲說：', textEn: 'Ying falls quiet, then whispers:', delay: 2000 },
      { tag: '情報', tagColor: 'tag-info', text: '「……所以我才要記錄。趁它們還在的時候。」', textEn: '"...That\'s why I record things. While they still exist."', delay: 2800 },
      { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '看了你一眼——那一眼裡有心疼，也有某種決心。', textEn: yingPronounCap + ' glances at you — with both tenderness and resolve in that gaze.', delay: 2500 },
      { tag: '情報', tagColor: 'tag-info', text: '「如果你忘了什麼重要的事——來找我。我會唸給你聽。」', textEn: '"If you forget anything important — come find me. I\'ll read it back to you."', delay: 3000 },
    ], [
      { text: '那就拜託你了', textEn: 'Then I\'ll be counting on you', action: () => {
        changeStat('wil', 1);
        notify(L('意志 +1', 'WIL +1'));
        loadNode('r1_deep');
      }},
    ], { label: L('與螢閒聊', 'Chatting with Ying') });
  } else {
    // First chat
    state.flags.r1YingChat1 = true;
    autoExplore([
      yingArt,
      { tag: '情報', tagColor: 'tag-info', text: '「螢——這個名字是誰取的？」', textEn: '"Ying — who gave you that name?"', delay: 2000 },
      { tag: '情報', tagColor: 'tag-info', text: '螢停下了筆，想了想。', textEn: 'Ying stops writing and thinks.', delay: 2000 },
      { tag: '情報', tagColor: 'tag-info', text: '「我師父。記錄院的老院長。他說——」', textEn: '"My mentor. The old head of the Chronicle Hall. He said —"', delay: 2500 },
      { tag: '情報', tagColor: 'tag-info', html: '「<b>「螢火之光雖微，卻能在最深的黑暗中指引方向。」</b>」', htmlEn: '"<b>\'Though a firefly\'s glow is faint, it can guide the way through the deepest dark.\'</b>"', delay: 3000 },
      { tag: '情報', tagColor: 'tag-info', text: '「聽起來很厲害對吧？但其實他取這個名字只是因為我小時候怕黑。」' + yingPronoun + '笑了。', textEn: '"Sounds impressive, right? But actually he named me this just because I was scared of the dark as a kid." ' + yingPronounCap + ' laughs.', delay: 3200 },
      { tag: '感知', tagColor: 'tag-sense', text: '那是你在地底聽過的，最好聽的笑聲。', textEn: 'It\'s the most beautiful laughter you\'ve heard underground.', delay: 2500 },
      { tag: '情報', tagColor: 'tag-info', text: '「他後來也石化了。連同整個記錄院。」螢的笑容淡了，但沒有消失。', textEn: '"He petrified too, in the end. Along with the entire Chronicle Hall." Ying\'s smile dims, but doesn\'t vanish.', delay: 3000 },
      { tag: '情報', tagColor: 'tag-info', text: '「但他教會了我——只要還能握筆，就還沒有輸。」', textEn: '"But he taught me — as long as you can still hold a pen, you haven\'t lost."', delay: 2800 },
    ], [
      { text: '你師父是個好人', textEn: 'Your mentor was a good person', action: () => {
        changeHp(5);
        notify(L('HP +5（片刻的溫暖）', 'HP +5 (A warm moment)'));
        loadNode('r1_deep');
      }},
    ], { label: L('與螢閒聊', 'Chatting with Ying') });
  }
});

// ── Ying: sharing warmth (first night as companions) ──
registerNode('r1_ying_warmth', () => {
  var isMale = state.sex === 'male';
  var yingPronoun = isMale ? L('她', 'she') : L('他', 'he');
  var yingPronounCap = isMale ? 'She' : 'He';
  var yPo = isMale ? 'her' : 'his';
  state.flags.r1YingWarmth = true;

  autoExplore([
    { art: npcPortrait.art('ying', { subtitle: '記錄員' }), artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }), delay: 800 },
    { tag: '環境', tagColor: 'tag-system', text: '礦道深處的溫度越來越低。你的呼吸在空氣中凝成白霧。', textEn: 'The temperature drops deeper in the mines. Your breath forms white mist in the air.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢縮在牆角，手冊抱在胸前，嘴唇微微發紫。' + yingPronoun + '在發抖，卻還在堅持寫字。', textEn: 'Ying huddles in the corner, notebook clutched to ' + yPo + ' chest, lips tinged blue. ' + yingPronounCap + '\'s shivering but still writing.', delay: 2800 },
    { tag: '感知', tagColor: 'tag-sense', text: '你注意到' + yingPronoun + '的筆跡已經歪歪扭扭——手指凍得快握不住筆了。', textEn: 'You notice ' + yPo + ' handwriting has gone wobbly — fingers too cold to hold the pen steady.', delay: 2500 },
    { tag: '行動', tagColor: 'tag-move', text: '你在螢身邊坐下。', textEn: 'You sit down beside Ying.', delay: 1500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢的身體僵了一瞬——然後慢慢放鬆下來。', textEn: 'Ying\'s body tenses for a moment — then slowly relaxes.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', text: '「……你也冷嗎？」' + yingPronoun + '的聲音很輕，像是怕驚擾什麼。', textEn: '"...Are you cold too?" ' + yingPronounCap + ' voice is barely a whisper, as if afraid to disturb something.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '你沒有說話，只是把肩膀靠近了一些。', textEn: 'You say nothing, just move your shoulder closer.', delay: 2200 },
    { tag: '感知', tagColor: 'tag-sense', text: '過了很久——也許只是幾秒——螢的頭輕輕靠上了你的肩膀。', textEn: 'After a long time — or maybe just a few seconds — Ying\'s head gently comes to rest on your shoulder.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '的頭髮蹭過你的脖子。有墨水的味道，還有地底苔蘚淡淡的青草氣息。那些髮絲輕輕掃過你的鎖骨，帶來一陣微微的癢。', textEn: yingPronounCap + ' hair brushes your neck. The scent of ink, mingled with the faint green smell of underground moss. Those strands sweep lightly across your collarbone, bringing a faint tickle.', delay: 3000 },
    { tag: '情報', tagColor: 'tag-info', text: '「……不要動。」螢小聲說。聲音悶在你的肩窩裡，像是怕被誰聽見。「就一下下。」', textEn: '"...Don\'t move." Ying murmurs, voice muffled against your shoulder, as if afraid someone might hear. "Just for a moment."', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '的身體慢慢挪過來——先是肩膀貼上你的手臂，然後整個側身都靠了上來。你能感覺到' + yingPronoun + '的體溫穿過衣料，像微弱的火焰。', textEn: yingPronounCap + ' body shifts closer — first a shoulder pressing your arm, then ' + yPo + ' whole side leaning in. You feel ' + yPo + ' warmth seeping through the fabric, like a faint flame.', delay: 3200 },
    { tag: '環境', tagColor: 'tag-system', text: '寂靜中，你能感受到彼此的體溫正在緩慢地匯聚。冰冷的石壁，微弱的磷光，和身側那一整片柔軟的溫暖。', textEn: 'In the silence, you feel your shared warmth slowly merging. Cold stone walls, faint phosphorescence, and that entire soft warmth pressed against your side.', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '螢的呼吸變得平穩了。筆從指間滑落，輕輕落在地上。' + yingPronoun + '的手卻沒有鬆——反而在半夢半醒中攥住了你的袖口。', textEn: 'Ying\'s breathing evens out. The pen slips from ' + yPo + ' fingers and drops softly to the ground. But ' + yPo + ' hand doesn\'t release — it clutches your sleeve, half-asleep.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: yingPronoun + '睡著了。整個人的重量都壓在你身上——很輕，卻讓你覺得自己被什麼牢牢地綁住了。', textEn: yingPronounCap + '\'s fallen asleep. All ' + yPo + ' weight rests on you — so light, yet it feels like something has bound you firmly in place.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你低頭看——' + yingPronoun + '的睫毛在磷光下微微顫動。半開的唇間呼出溫熱的氣息，每一次都拂過你的頸側。', textEn: 'You look down — ' + yPo + ' eyelashes tremble in the phosphorescent glow. Warm breath escapes ' + yPo + ' half-parted lips, each exhale brushing your neck.', delay: 3200 },
    { tag: '環境', tagColor: 'tag-system', text: '你不敢動。你害怕這一刻會碎掉。你甚至放慢了呼吸——怕吵醒' + yingPronoun + '，更怕' + yingPronoun + '醒來之後會覺得不好意思而離開。', textEn: 'You don\'t dare move. You\'re afraid this moment might shatter. You even slow your breathing — afraid of waking ' + (yPo === 'her' ? 'her' : 'him') + ', more afraid ' + (yPo === 'her' ? 'she' : 'he') + '\'d pull away in embarrassment.', delay: 3200 },
    { tag: '感知', tagColor: 'tag-sense', text: '過了不知多久，螢在睡夢中翻了個身。' + yingPronoun + '的臉埋進你的胸口，手指無意識地攥緊了你的衣襟——像是溺水的人抓住了唯一的浮木。', textEn: 'After an unknowable time, Ying shifts in ' + yPo + ' sleep. ' + yingPronounCap + ' face buries against your chest, fingers unconsciously gripping your collar — like someone drowning clinging to the only driftwood.', delay: 3500 },
    { tag: '感知', tagColor: 'tag-sense', text: '你聽見' + yingPronoun + '在夢裡含糊地說了什麼。只有一個字——像是一個名字。你的名字。', textEn: 'You hear ' + (yPo === 'her' ? 'her' : 'him') + ' mumble something in the dream. Just one word — sounds like a name. Your name.', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你把' + yingPronoun + '的手冊撿起來，小心地放在' + yingPronoun + '膝上。然後你閉上眼睛——但你知道你不會睡著。因為你捨不得。', textEn: 'You pick up ' + yPo + ' notebook and carefully place it on ' + yPo + ' lap. Then you close your eyes — but you know you won\'t sleep. Because you can\'t bear to miss a second of this.', delay: 3200 },
    { tag: '環境', tagColor: 'tag-system', text: '在這座冰冷的石窟最深處——兩個人的體溫纏繞在一起，暫時擋住了整個世界的寒意。你不知道明天會怎樣。但此刻，你的手臂環著' + yingPronoun + '的肩。此刻就夠了。', textEn: 'In the deepest part of this frozen cavern — two bodies\' warmth intertwined, holding back the cold of the entire world. You don\'t know what tomorrow brings. But right now, your arm is around ' + yPo + ' shoulders. Right now is enough.', delay: 4000 },
  ], [
    { text: '（醒來時，你發現螢已經不在了。但你的肩膀還殘留著溫度。）', textEn: '(When you wake, Ying is gone. But warmth still lingers on your shoulder.)', action: () => {
      changeHp(20);
      changePetri(-8);
      changeStat('wil', 1);
      notify(L('HP +20，石化度 -8%，意志 +1（共眠的溫度）', 'HP +20, Petri -8%, WIL +1 (Warmth of sleeping together)'));
      loadNode('r1_deep');
    }},
  ], { label: L('寒夜共眠', 'Warmth in the Cold') });
});

// ── Gate to Region 2 ──
registerNode('r1_gate', () => {
  var hasCore = hasItem(L('守衛核心石', 'Guardian Core Stone'));
  autoExplore([
    { art: `<pre class="ascii-art gold">
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░                                         ░
  ░    ╔═══════════════════════════════╗    ░
  ░    ║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║    ░
  ░    ║▓                             ▓║    ░
  ░    ║▓    大   採   石   場       ▓║    ░
  ░    ║▓                             ▓║    ░
  ░    ║▓    ─ ─ ─ ─ ─ ─ ─ ─ ─     ▓║    ░
  ░    ║▓                             ▓║    ░
  ░    ║▓    需 要 鑰 匙             ▓║    ░
  ░    ║▓                             ▓║    ░
  ░    ║▓         ╔═════╗             ▓║    ░
  ░    ║▓         ║  ◆  ║             ▓║    ░
  ░    ║▓         ║凹槽 ║             ▓║    ░
  ░    ║▓         ╚═════╝             ▓║    ░
  ░    ║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║    ░
  ░    ╚═══════════════════════════════╝    ░
  ░                                         ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, artEn: `<pre class="ascii-art gold">
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░                                         ░
  ░    ╔═══════════════════════════════╗    ░
  ░    ║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║    ░
  ░    ║▓                             ▓║    ░
  ░    ║▓    G R E A T  Q U A R R Y   ▓║    ░
  ░    ║▓                             ▓║    ░
  ░    ║▓    ─ ─ ─ ─ ─ ─ ─ ─ ─     ▓║    ░
  ░    ║▓                             ▓║    ░
  ░    ║▓    K E Y   R E Q U I R E D ▓║    ░
  ░    ║▓                             ▓║    ░
  ░    ║▓         ╔═════╗             ▓║    ░
  ░    ║▓         ║  ◆  ║             ▓║    ░
  ░    ║▓         ║Slot ║             ▓║    ░
  ░    ║▓         ╚═════╝             ▓║    ░
  ░    ║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║    ░
  ░    ╚═══════════════════════════════╝    ░
  ░                                         ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '鐵軌的盡頭是一扇巨大的金屬門。', textEn: 'The rails end at a massive metal door.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '門上刻著精細的紋飾——和祭獻坑的石門完全不同，這是人工精密鑄造的。', textEn: 'Intricate engravings cover the door — unlike the pit\'s crude stone gate, this was precision-cast.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', html: '門上的文字：<b>「大採石場——唯有持核者方可進入」</b>', htmlEn: 'Inscription: <b>"Great Quarry — Only the core-bearer may enter"</b>', delay: 2500 },
    { tag: '探索', tagColor: 'tag-explore', text: '門的中央有一個菱形凹槽——和守衛核心石的形狀一模一樣。', textEn: 'A diamond-shaped slot at the center — the exact shape of the Guardian Core Stone.', delay: 2200 },
  ], (function() {
    var c = [];
    if (hasCore) {
      c.push({ text: '將守衛核心石放入凹槽', textEn: 'Place the Guardian Core Stone in the slot', action: () => loadNode('r1_gate_open') });
    } else {
      c.push({ text: '你需要找到鑰匙……', textEn: 'You need to find the key...', action: () => {
        notify(L('門上的凹槽需要某種菱形的石頭。', 'The slot requires a diamond-shaped stone.'));
        loadNode('r1_deep');
      }});
    }
    c.push({ text: '返回', textEn: 'Return', action: () => loadNode('r1_deep') });
    return c;
  })(), { label: L('調查大門', 'Examining gate') });
});

registerNode('r1_gate_open', () => {
  autoExplore([
    { art: `<pre class="ascii-art gold">
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░  ╔═══════════╗ ╔═══════════╗   ░
  ░  ║▓▓▓▓▓▓▓▓▓▓▓║ ║▓▓▓▓▓▓▓▓▓▓▓║   ░
  ░  ║▓  ✦ ✦ ✦  ▓║ ║▓  ✦ ✦ ✦  ▓║   ░
  ░  ║▓         ▓║ ║▓         ▓║   ░
  ░  ║▓  ═══════▓║ ║▓═══════  ▓║   ░
  ░  ║▓    ╔═╗  ▓╠═╣▓  ╔═╗   ▓║   ░
  ░  ║▓    ║◆║  ▓║ ║▓  ║◆║   ▓║   ░
  ░  ║▓    ╚═╝  ▓║ ║▓  ╚═╝   ▓║   ░
  ░  ║▓▓▓▓▓▓▓▓▓▓▓║ ║▓▓▓▓▓▓▓▓▓▓▓║   ░
  ░  ╚═══════════╝ ╚═══════════╝   ░
  ░           ← 開 啟 →            ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, artEn: `<pre class="ascii-art gold">
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░  ╔═══════════╗ ╔═══════════╗   ░
  ░  ║▓▓▓▓▓▓▓▓▓▓▓║ ║▓▓▓▓▓▓▓▓▓▓▓║   ░
  ░  ║▓  ✦ ✦ ✦  ▓║ ║▓  ✦ ✦ ✦  ▓║   ░
  ░  ║▓         ▓║ ║▓         ▓║   ░
  ░  ║▓  ═══════▓║ ║▓═══════  ▓║   ░
  ░  ║▓    ╔═╗  ▓╠═╣▓  ╔═╗   ▓║   ░
  ░  ║▓    ║◆║  ▓║ ║▓  ║◆║   ▓║   ░
  ░  ║▓    ╚═╝  ▓║ ║▓  ╚═╝   ▓║   ░
  ░  ║▓▓▓▓▓▓▓▓▓▓▓║ ║▓▓▓▓▓▓▓▓▓▓▓║   ░
  ░  ╚═══════════╝ ╚═══════════╝   ░
  ░          ← Opening →           ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</pre>`, delay: 800 },
    { tag: '行動', tagColor: 'tag-move', text: '你將守衛核心石嵌入凹槽。', textEn: 'You press the Guardian Core Stone into the slot.', delay: 1500 },
    { tag: '環境', tagColor: 'tag-system', text: '核心石亮起耀眼的光芒——門上的紋飾依次點亮。', textEn: 'The core blazes with light — engravings ignite one by one.', delay: 2200 },
    { tag: '環境', tagColor: 'tag-system', text: '沉重的金屬碰撞聲迴盪在走廊中——', textEn: 'Heavy metallic clangs echo through the corridor —', delay: 2000 },
    { tag: '環境', tagColor: 'tag-system', text: '大門開始緩緩打開。', textEn: 'The great door slowly opens.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '門後是一條向上的階梯，乾燥的風撲面而來。', textEn: 'Beyond the door, stairs ascend. A dry wind washes over you.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '空氣中混雜著碎石和鏽鐵的味道——前方似乎是一個巨大的開闊空間。', textEn: 'The air carries the scent of crushed stone and rusted iron — a vast open space lies ahead.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', html: '前方是第三層——<b>大採石場</b>。戰場遺跡與石化戰爭機械沉睡其中。', htmlEn: 'Ahead lies the third floor — the <b>Great Quarry</b>. Battlefield ruins and petrified war machines slumber within.', delay: 2500 },
  ], [
    { text: '踏入大採石場', textEn: 'Enter the Great Quarry', action: () => loadNode('r2_start') },
    { text: '先休息一下', textEn: 'Rest first', action: () => {
      changeHp(20);
      changePetri(-5);
      notify(L('HP +20，石化度 -5%', 'HP +20, Petri -5%'));
      loadNode('r1_deep');
    }},
  ], { label: L('開啟大門', 'Opening the gate') });
});

// ── Region 1 Patrol ──
registerNode('r1_patrol', () => {
  autoExplore([
    { art: `<pre class="ascii-art blue">
  ═══╦════════════════════════╦═══
  ░░░║  .:*~*:.    .:*~*:.   ║░░░
  ░░░║                        ║░░░
  ░░░║     · _o_ ·           ║░░░
  ░░░║    · ╱ │ ╲ ·    ?     ║░░░
  ░░░║       ╱ ╲      ╱╲     ║░░░
  ░░░║      ╱   ╲    ╱??╲    ║░░░
  ░░░║  ══════════════════    ║░░░
  ═══╩════════════════════════╩═══
         迴 廊 巡 邏
</pre>`, artEn: `<pre class="ascii-art blue">
  ═══╦════════════════════════╦═══
  ░░░║  .:*~*:.    .:*~*:.   ║░░░
  ░░░║                        ║░░░
  ░░░║     · _o_ ·           ║░░░
  ░░░║    · ╱ │ ╲ ·    ?     ║░░░
  ░░░║       ╱ ╲      ╱╲     ║░░░
  ░░░║      ╱   ╲    ╱??╲    ║░░░
  ░░░║  ══════════════════    ║░░░
  ═══╩════════════════════════╩═══
       Corridor Patrol
</pre>`, delay: 800 },
    { tag: '判斷', tagColor: 'tag-move', text: '迴廊中的怪物比坑底更強，但也能提供更好的戰鬥經驗。', textEn: 'Corridor monsters are tougher, but offer better combat experience.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你握緊武器，沿著礦脈的冷光前進。', textEn: 'You grip your weapon and advance by the cold glow of ore veins.', delay: 2000 },
  ], [
    { text: '開始巡邏', textEn: 'Begin patrol', action: () => startPatrol() },
    { text: '返回', textEn: 'Return', action: () => loadNode('r1_look') },
  ], { label: L('準備巡邏', 'Preparing patrol') });
});
