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
    { tag: '情報', tagColor: 'tag-info', text: '這裡曾經是一座礦坑——用來開採石化礦脈的地下設施。', textEn: 'This was once a mine — an underground facility for extracting petrification ore.', delay: 2500 },
  ], [
    { text: '觀察迴廊', textEn: 'Survey the corridor', action: () => loadNode('r1_look') },
  ], { label: L('進入石脈迴廊', 'Entering Vein Corridor') });
});

registerNode('r1_look', () => {
  state.flags.r1Looked = true;
  autoExplore([
    { tag: '探索', tagColor: 'tag-explore', text: '你仔細觀察石脈迴廊的構造。', textEn: 'You study the structure of the Vein Corridor.', delay: 2000 },
    { art: `<pre class="ascii-art blue">
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
</pre>`, delay: 800 },
    { tag: '探索', tagColor: 'tag-explore', text: '迴廊是一個十字形結構，中央有生鏽的鐵軌延伸向各個方向。', textEn: 'The corridor forms a cross shape, with rusted rails stretching in every direction.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '中央停著一輛破舊的礦車，車身覆蓋著灰色的石化結晶。', textEn: 'A broken-down mine cart sits at the center, encrusted with grey petrification crystals.', delay: 2500 },
    { tag: '發現', tagColor: 'tag-item', html: '北面通道盡頭似乎有<b>火光</b>閃爍——那裡可能是鍛造間。', htmlEn: '<b>Firelight</b> flickers at the end of the northern passage — possibly a forge room.', delay: 2200 },
    { tag: '探索', tagColor: 'tag-explore', text: '東面走廊的盡頭有一具巨大的石化殘骸——像是某種守衛。', textEn: 'At the east end, a massive petrified husk — some kind of guardian.', delay: 2200 },
    { tag: '探索', tagColor: 'tag-explore', text: '西面的牆壁上結晶特別密集，空氣中充斥著刺鼻的石化氣息。', textEn: 'The western walls are thick with crystals, the air heavy with petrification.', delay: 2200 },
  ], (function() {
    var c = [];
    c.push({ text: '探索北面鍛造間', textEn: 'Explore the forge room to the north', action: () => loadNode('r1_forge') });
    c.push({ text: '查看東面的守衛殘骸', textEn: 'Examine the guardian remains to the east', action: () => loadNode('r1_guard_check') });
    c.push({ text: '調查西面的結晶礦脈', textEn: 'Investigate the crystal veins to the west', action: () => loadNode('r1_crystal') });
    if (state.flags.r1ForgeVisited && state.flags.r1GuardDefeated) {
      c.push({ text: '沿鐵軌深入迴廊', textEn: 'Follow the rails deeper', action: () => loadNode('r1_deep') });
    }
    c.push({ text: '在迴廊中巡邏練級', textEn: 'Patrol the corridor for experience', action: () => loadNode('r1_patrol') });
    return c;
  })(), { label: L('觀察迴廊', 'Surveying corridor') });
});

// ── Forge Room ──
registerNode('r1_forge', () => {
  state.flags.r1ForgeVisited = true;
  var steps = [
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
    { tag: '探索', tagColor: 'tag-explore', text: '北面通道盡頭是一間廢棄的鍛造間。', textEn: 'The northern passage ends at an abandoned forge room.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '出乎意料的是——熔爐裡還有微弱的餘火。', textEn: 'Surprisingly — faint embers still glow in the furnace.', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', text: '這裡曾用來冶煉石化礦石。工具架上還掛著幾把鏽蝕的工具。', textEn: 'This place smelted petrification ore. A few rusted tools still hang on the rack.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '鐵砧旁有一個皮革工具包，看起來保存得還不錯。', textEn: 'A leather tool pouch sits beside the anvil, still in decent condition.', delay: 2200 },
    { tag: '探索', tagColor: 'tag-explore', text: '角落裡堆著一些未加工的礦石，其中幾塊散發著異樣的光芒。', textEn: 'Unprocessed ore piles up in the corner, some pieces glowing strangely.', delay: 2200 },
  ];
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
  if (hasCrystal || hasFlask) {
    autoExplore([
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
    { tag: '探索', tagColor: 'tag-explore', text: '你仔細翻找鍛造間的各個角落。', textEn: 'You carefully search every corner of the forge.', delay: 2000 },
    { tag: '發現', tagColor: 'tag-item', text: '礦石堆底下藏著一本被灰塵覆蓋的手札。', textEn: 'Beneath the ore pile, a dust-covered journal.', delay: 2200 },
    { tag: '情報', tagColor: 'tag-info', html: '手札上寫道：<b>「守衛的核心在胸口——只有鈍器才能擊碎它。」</b>', htmlEn: 'The journal reads: <b>"The guardian\'s core is in its chest — only blunt weapons can shatter it."</b>', delay: 3000, effect: () => { state.flags.r1GuardHint = true; } },
    { tag: '情報', tagColor: 'tag-info', text: '後面還寫著：「東面的守衛已經石化了……但它仍在巡邏。」', textEn: 'It continues: "The eastern guardian has petrified... but it still patrols."', delay: 2800 },
    { tag: '發現', tagColor: 'tag-item', html: '手札的夾頁中掉出了一張<b>迴廊地圖</b>。', htmlEn: 'A <b>Corridor Map</b> slips out from the journal\'s pages.', delay: 2000, effect: () => addItem(L('迴廊地圖', 'Corridor Map')) },
    { tag: '情報', tagColor: 'tag-info', text: '地圖上標註了一條通往更深處的路線——需要穿過守衛所在的區域。', textEn: 'The map marks a route deeper — through the guardian\'s area.', delay: 2500 },
  ], [
    { text: '返回鍛造間', textEn: 'Return to forge', action: () => loadNode('r1_forge') },
  ], { label: L('搜索鍛造間', 'Searching forge') });
});

// ── Crystal Vein (West) ──
registerNode('r1_crystal', () => {
  autoExplore([
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
    { tag: '移動', tagColor: 'tag-move', text: '你走向西面結晶密集的區域。', textEn: 'You head toward the crystal-dense western area.', delay: 1500 },
    { tag: '警告', tagColor: 'tag-warn', text: '越靠近，空氣越沉重——石化粒子肉眼可見地漂浮著。', textEn: 'The closer you get, the heavier the air — petrification particles visibly float.', delay: 2200 },
    { tag: '石化', tagColor: 'tag-petri', text: '你感覺到皮膚表面微微發緊。', textEn: 'Your skin begins to feel taut.', delay: 2000 },
    { tag: '探索', tagColor: 'tag-explore', text: '巨大的石化結晶從牆壁和天花板生長出來，像冰凌一樣交錯。', textEn: 'Enormous petrification crystals jut from walls and ceiling, criss-crossing like icicles.', delay: 2500 },
    { tag: '發現', tagColor: 'tag-item', text: '結晶叢中隱約可以看到一些被石化的物品——武器、盔甲的碎片。', textEn: 'Among the crystals, petrified objects are visible — weapon and armor fragments.', delay: 2500 },
  ], [
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
    { name: gName, hp: 55, atkMin: 8, atkMax: 14, petriDmg: 4, desc: gDesc },
    () => {
      state.flags.r1GuardDefeated = true;
      changeStat('str', 2);
      gainXp(25);
      notify(L('力量 +2，經驗 +25', 'STR +2, XP +25'));
      autoExplore([
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
    { tag: '行動', tagColor: 'tag-combat', text: '你握緊鍛造鐵錘，瞄準守衛胸口的核心——', textEn: 'You grip the Forged Hammer, aiming for the core in the guardian\'s chest —', delay: 1800 },
    { tag: '戰鬥', tagColor: 'tag-combat', text: '你衝上前，在守衛揮拳之前，用盡全力砸向那顆發光的石頭！', textEn: 'You charge in and smash the glowing stone with all your might before it can swing!', delay: 2200 },
    { tag: '戰鬥', tagColor: 'tag-combat', text: '「喀啦——！」核心應聲碎裂！', textEn: '"CRACK—!" The core shatters!', delay: 1500 },
    { tag: '勝利', tagColor: 'tag-explore', text: '守衛的雙眼熄滅，巨大的身軀轟然倒塌。', textEn: 'The guardian\'s eyes go dark. Its massive body collapses.', delay: 2200 },
    { tag: '物品', tagColor: 'tag-item', html: '碎裂的核心中掉出一塊<b>守衛核心石</b>。', htmlEn: 'A <b>Guardian Core Stone</b> drops from the shattered core.', delay: 2000, effect: () => { addItem(L('守衛核心石', 'Guardian Core Stone')); changeStat('str', 1); gainXp(25); } },
  ], [
    { text: '繼續前進', textEn: 'Continue forward', action: () => loadNode('r1_look') },
  ], { label: L('攻擊弱點', 'Striking weakness') });
});

registerNode('r1_guard_sneak', () => {
  var r = statCheck('agi', 10);
  if (r === 'crit') {
    state.flags.r1GuardDefeated = true;
    autoExplore([
      { tag: '大成功', tagColor: 'tag-move', text: '你觀察守衛的巡邏路線——找到了完美的時機！', textEn: 'You study the guardian\'s patrol — and find the perfect moment!', delay: 2000 },
      { tag: '行動', tagColor: 'tag-move', text: '你如同一陣清風般無聲滑過，守衛完全沒有察覺。', textEn: 'You glide past like a breeze — the guardian notices nothing.', delay: 1800 },
      { tag: '成功', tagColor: 'tag-explore', text: '不僅毫髮無傷，你還順手從守衛身上掰下了一塊有用的礦石。', textEn: 'Not only unscathed, you even pry a useful mineral off the guardian.', delay: 2000, effect: () => { changeStat('agi', 1); gainXp(20); } },
    ], [
      { text: '繼續前進', textEn: 'Continue forward', action: () => loadNode('r1_look') },
    ], { label: L('潛行通過', 'Sneaking past') });
  } else if (r === 'pass') {
    state.flags.r1GuardDefeated = true;
    autoExplore([
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
  autoExplore([
    { tag: '移動', tagColor: 'tag-move', text: '你沿著鐵軌深入迴廊。', textEn: 'You follow the rails deeper into the corridor.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '這一段的礦脈更加粗大，藍色冷光照亮了整條走廊。', textEn: 'The ore veins here are thicker, blue light illuminating the entire corridor.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '空氣變得異常冰冷——你能看到自己的呼吸化為白霧。', textEn: 'The air turns bitterly cold — you can see your breath forming white mist.', delay: 2200 },
    { tag: '探索', tagColor: 'tag-explore', text: '鐵軌在這裡分叉——一條通往左邊的礦工宿舍，一條通往前方的大門。', textEn: 'The rails fork — one track to a miners\' quarters on the left, another to a great door ahead.', delay: 2500 },
  ], [
    { text: '查看礦工宿舍', textEn: 'Check the miners\' quarters', action: () => loadNode('r1_quarters') },
    { text: '走向前方的大門', textEn: 'Approach the great door', action: () => loadNode('r1_gate') },
    { text: '返回迴廊中央', textEn: 'Return to corridor center', action: () => loadNode('r1_look') },
  ], { label: L('深入迴廊', 'Going deeper') });
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
    { tag: '感知', tagColor: 'tag-sense', text: '其中四張床上……還躺著人。不——是完全石化的礦工。', textEn: 'Four of the bunks still have occupants. No — fully petrified miners.', delay: 2500 },
    { tag: '石化', tagColor: 'tag-petri', text: '他們被石化的姿態栩栩如生——有的在睡夢中，有的在掙扎。', textEn: 'Their petrified poses are lifelike — some sleeping, some struggling.', delay: 2800 },
    { tag: '情報', tagColor: 'tag-info', text: '石化發生在他們毫無防備的時候。', textEn: 'The petrification struck when they were defenseless.', delay: 2200 },
  ];
  if (!state.flags.r1QuartersSearched) {
    steps.push({ tag: '探索', tagColor: 'tag-explore', text: '你檢查儲物櫃——大部分已經鏽蝕打不開了。', textEn: 'You check the lockers — most are rusted shut.', delay: 2000 });
    steps.push({ tag: '發現', tagColor: 'tag-item', html: '只有一個能勉強打開，裡面有一瓶<b>礦工烈酒</b>和一塊<b>皮甲碎片</b>。', htmlEn: 'Only one opens, containing a bottle of <b>Miner\'s Spirits</b> and a <b>Leather Armor Scrap</b>.', delay: 2500, effect: () => { addItem(L('礦工烈酒', 'Miner\'s Spirits')); addItem(L('皮甲碎片', 'Leather Scrap')); state.flags.r1QuartersSearched = true; } });
  }
  autoExplore(steps, [
    { text: '使用礦工烈酒恢復體力', textEn: 'Drink the spirits to restore health', action: () => {
      if (hasItem(L('礦工烈酒', 'Miner\'s Spirits'))) {
        removeItem(L('礦工烈酒', 'Miner\'s Spirits'));
        changeHp(20);
        changeStat('str', 1);
        notify(L('HP +20，力量 +1（酒精的力量！）', 'HP +20, STR +1 (Power of spirits!)'));
      } else {
        notify(L('你沒有烈酒了。', 'No spirits left.'));
      }
      loadNode('r1_deep');
    }},
    { text: '在床上休息', textEn: 'Rest on a bunk', action: () => loadNode('r1_rest') },
    { text: '返回', textEn: 'Return', action: () => loadNode('r1_deep') },
  ], { label: L('搜索宿舍', 'Searching quarters') });
});

registerNode('r1_rest', () => {
  autoExplore([
    { tag: '行動', tagColor: 'tag-move', text: '你找了一張沒有石化礦工的床鋪，小心翼翼地躺了下來。', textEn: 'You find an empty bunk and carefully lie down.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '床墊硬邦邦的，但比起石頭地面已經好太多了。', textEn: 'The mattress is stiff, but far better than the stone floor.', delay: 2500 },
    { tag: '環境', tagColor: 'tag-system', text: '……', textEn: '...', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '你做了一個夢。夢裡，你在一座地下城市的街道上行走。', textEn: 'You dream. Walking through the streets of an underground city.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '街道兩旁是發光的礦脈——和這裡一模一樣，但更加繁華。', textEn: 'Glowing veins line the streets — just like here, but thriving.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', text: '人們穿梭其間，工匠、商人、士兵……石化還沒有蔓延。', textEn: 'People bustle about — artisans, merchants, soldiers... before the petrification spread.', delay: 3000 },
    { tag: '記憶', tagColor: 'tag-system', html: '有人叫住了你：<b>「喂！你也是新來的探礦者嗎？」</b>', htmlEn: 'Someone calls out: <b>"Hey! Are you one of the new prospectors?"</b>', delay: 3000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你猛地醒來。石化礦工無聲地注視著你。', textEn: 'You jolt awake. Petrified miners stare silently.', delay: 2500 },
    { tag: '恢復', tagColor: 'tag-explore', text: '身體恢復了不少，但那個夢……那是你的記憶嗎？', textEn: 'Your body has recovered well, but that dream... was it a memory?', delay: 2500 },
  ], [
    { text: '站起來繼續前進', textEn: 'Get up and move on', action: () => {
      changeHp(15);
      changePetri(-3);
      notify(L('HP +15，石化度 -3%', 'HP +15, Petri -3%'));
      loadNode('r1_deep');
    }},
  ], { label: L('休息', 'Resting') });
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
  ░    ║▓    灰   燼   神   殿       ▓║    ░
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
  ░    ║▓    A S H    S A N C T U M   ▓║    ░
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
    { tag: '情報', tagColor: 'tag-info', html: '門上的文字：<b>「灰燼神殿——唯有持核者方可進入」</b>', htmlEn: 'Inscription: <b>"Ash Sanctum — Only the core-bearer may enter"</b>', delay: 2500 },
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
    { tag: '行動', tagColor: 'tag-move', text: '你將守衛核心石嵌入凹槽。', textEn: 'You press the Guardian Core Stone into the slot.', delay: 1500 },
    { tag: '環境', tagColor: 'tag-system', text: '核心石亮起耀眼的光芒——門上的紋飾依次點亮。', textEn: 'The core blazes with light — engravings ignite one by one.', delay: 2200 },
    { tag: '環境', tagColor: 'tag-system', text: '沉重的金屬碰撞聲迴盪在走廊中——', textEn: 'Heavy metallic clangs echo through the corridor —', delay: 2000 },
    { tag: '環境', tagColor: 'tag-system', text: '大門開始緩緩打開。', textEn: 'The great door slowly opens.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '門後是一條向上的階梯，熱浪撲面而來。', textEn: 'Beyond the door, stairs ascend. A wave of heat washes over you.', delay: 2500 },
    { tag: '感知', tagColor: 'tag-sense', text: '空氣中混雜著灰燼的味道——和某種……香料的氣息？', textEn: 'The air carries the scent of ash — and something... incense?', delay: 2500 },
    { tag: '情報', tagColor: 'tag-info', html: '前方是第三層——<b>灰燼神殿</b>。', htmlEn: 'Ahead lies the third floor — the <b>Ash Sanctum</b>.', delay: 2000 },
    { tag: '系統', tagColor: 'tag-system', html: '<i>（第三層 — 灰燼神殿的冒險將在後續更新中展開……）</i>', htmlEn: '<i>(Floor 3 — Ash Sanctum adventures coming in a future update...)</i>', delay: 1500 },
  ], [
    { text: '在門口休息，準備下一段旅程', textEn: 'Rest at the gate, prepare for the next journey', action: () => {
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
    { tag: '判斷', tagColor: 'tag-move', text: '迴廊中的怪物比坑底更強，但也能提供更好的戰鬥經驗。', textEn: 'Corridor monsters are tougher, but offer better combat experience.', delay: 2000 },
    { tag: '感知', tagColor: 'tag-sense', text: '你握緊武器，沿著礦脈的冷光前進。', textEn: 'You grip your weapon and advance by the cold glow of ore veins.', delay: 2000 },
  ], [
    { text: '開始巡邏', textEn: 'Begin patrol', action: () => startPatrol() },
    { text: '返回', textEn: 'Return', action: () => loadNode('r1_look') },
  ], { label: L('準備巡邏', 'Preparing patrol') });
});
