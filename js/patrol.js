// ══ Patrol / Idle Grind System ══
var R0_MONSTERS = [
  { name: '石化蝙蝠', nameEn: 'Petrified Bat', hp: 12, atkMin: 4, atkMax: 10, petriDmg: 2, xp: 5,
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
  { name: '灰蘑菇怪', nameEn: 'Grey Mushroom', hp: 8, atkMin: 2, atkMax: 8, petriDmg: 1, xp: 3,
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
  { name: '石蜥蜴幼體', nameEn: 'Baby Stone Lizard', hp: 18, atkMin: 6, atkMax: 14, petriDmg: 4, xp: 8,
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
  { name: '石化鼠群', nameEn: 'Petrified Rat Swarm', hp: 15, atkMin: 4, atkMax: 12, petriDmg: 2, xp: 6,
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
  { name: '洞窟水蛭', nameEn: 'Cave Leech', hp: 14, atkMin: 5, atkMax: 11, petriDmg: 3, xp: 6,
    empathyGoal: 2,
    art: [
      '       ╭━━╮',
      '      ╱ ○○ ╲',
      '     │ ╰──╯ │',
      '      ╲░░░░╱',
      '       ╰━━╯',
      '       ╱╲╱╲',
    ],
    commune: [
      { zh: '你靜靜地把手伸入水坑……水蛭輕輕吸附上來，卻沒有用力。', en: 'You dip your hand into the pool... the leech latches on gently, without force.' },
      { zh: '它的身體發出幽暗的微光——像是地底的螢火蟲。它只是餓了。', en: 'Its body emits a dim glow — like an underground firefly. It\'s just hungry.' },
    ],
    spareText: { zh: '水蛭鬆開了你的手，緩緩沉回水坑深處。水面上留下一圈淡淡的光暈。', en: 'The leech releases your hand and sinks back into the pool. A faint halo of light lingers on the surface.' },
  },
  { name: '石化甲蟲', nameEn: 'Petrified Beetle', hp: 20, atkMin: 7, atkMax: 13, petriDmg: 3, xp: 7,
    empathyGoal: 3,
    art: [
      '      ╭════╮',
      '     ╱ ◆  ◆ ╲',
      '    │ ▓▓▓▓▓▓ │',
      '    │ ▓▓▓▓▓▓ │',
      '     ╲╱╲╱╲╱╲╱',
      '      ~~  ~~',
    ],
    commune: [
      { zh: '你用指節輕叩它的甲殼——裡面傳來微弱的振動回應。', en: 'You tap its shell with your knuckle — a faint vibration responds from within.' },
      { zh: '甲蟲翻了翻身，露出腹部柔軟的石化紋路。它在示弱。', en: 'The beetle rolls over, revealing soft petrified patterns on its belly. It\'s showing submission.' },
      { zh: '它用觸角輕碰你的靴子，像小狗一樣蹭了蹭。', en: 'It brushes your boot with its antennae, nuzzling like a puppy.' },
    ],
    spareText: { zh: '石化甲蟲展開翅鞘，笨拙地飛了起來，撞了兩次石壁才找到方向。', en: 'The beetle opens its wing case and clumsily takes flight, bumping the wall twice before finding its way.' },
  },
];

var R1_MONSTERS = [
  { name: '礦脈蠕蟲', nameEn: 'Ore Vein Worm', hp: 22, atkMin: 8, atkMax: 16, petriDmg: 4, xp: 10,
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
  { name: '鐵甲石蟲', nameEn: 'Ironclad Stonebug', hp: 28, atkMin: 10, atkMax: 18, petriDmg: 4, xp: 12,
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
  { name: '石化礦工亡魂', nameEn: 'Petrified Miner Ghost', hp: 20, atkMin: 6, atkMax: 20, petriDmg: 6, xp: 14,
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
  { name: '結晶蝎', nameEn: 'Crystal Scorpion', hp: 25, atkMin: 12, atkMax: 22, petriDmg: 6, xp: 15,
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
  { name: '磷光蜈蚣', nameEn: 'Phosphor Centipede', hp: 24, atkMin: 9, atkMax: 17, petriDmg: 5, xp: 11,
    empathyGoal: 3,
    art: [
      '   ╭╮╭╮╭╮╭╮╭╮╭╮',
      '  ╱◎╲╲╱╲╲╱╲╲╱◎╲',
      '  ╲╱╱╱╲╱╱╲╱╱╲╱╱',
      '  ╱╲╱╲╱╲╱╲╱╲╱╲╱',
      '  ╰╯╰╯╰╯╰╯╰╯╰╯',
    ],
    commune: [
      { zh: '你蹲下身……蜈蚣停止蠕動，無數足肢在空中微微顫抖。', en: 'You crouch... the centipede stops writhing, countless legs trembling in the air.' },
      { zh: '它的磷光變成了柔和的藍色——從警戒轉為好奇。', en: 'Its phosphorescence shifts to a soft blue — from alarm to curiosity.' },
      { zh: '蜈蚣繞著你的腳踝轉了一圈，像是在撒嬌。', en: 'The centipede circles your ankle, as if being affectionate.' },
    ],
    spareText: { zh: '磷光蜈蚣亮起全身的光芒——像一條活生生的燈帶——然後鑽入石壁縫隙消失了。', en: 'The centipede lights up entirely — like a living light strip — then vanishes into a wall crack.' },
  },
  { name: '礦道幽靈', nameEn: 'Tunnel Phantom', hp: 16, atkMin: 8, atkMax: 19, petriDmg: 7, xp: 13,
    empathyGoal: 2,
    art: [
      '      ╱▔▔▔╲',
      '     ╱ ○  ○ ╲',
      '    │   ▽   │',
      '     ╲ ·══· ╱',
      '      ╲░░░╱',
      '       ·╱╲·',
    ],
    commune: [
      { zh: '「你……也是……迷路的人嗎？」幽靈的聲音像風穿過裂縫。', en: '"Are you... also... lost?" The phantom\'s voice is like wind through a crack.' },
      { zh: '它伸出透明的手指了指前方——是在指路。它一直在這裡等人來。', en: 'It points a translucent finger ahead — showing the way. It has been waiting here for someone.' },
    ],
    spareText: { zh: '幽靈露出一個模糊的微笑，身形漸漸消散：「……謝謝你……願意停下來聽我說話。」', en: 'The phantom smiles faintly, its form dissolving: "...Thank you... for stopping to listen."' },
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
  { text: '一滴冰冷的水珠從洞頂落下，滴在你的脖頸上。', textEn: 'An icy drop falls from the ceiling onto your neck.' },
  { text: '你的手指拂過石壁——上面刻著某個早已遺忘的名字。', textEn: 'Your fingers brush the wall — someone carved a long-forgotten name here.' },
  { text: '空氣中飄著一絲硫磺的氣味，越往深處越濃。', textEn: 'A faint sulfur smell hangs in the air, growing stronger deeper in.' },
  { text: '你踩碎了一塊發光的石化結晶，碎片散發出短暫的冷光。', textEn: 'You crush a glowing petrified crystal underfoot; shards emit a brief cold light.' },
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
  { text: '你發現牆上刻著礦工留下的計數線——數到四百多就中斷了。', textEn: 'You find tally marks carved by miners on the wall — they stop at over four hundred.' },
  { text: '一根鏽蝕的釘子從支撐架上掉落，在寂靜中叮噹作響。', textEn: 'A rusted nail drops from a support frame, clanging in the silence.' },
  { text: '你腳下的鐵軌突然震動了一下——遠處有什麼在移動。', textEn: 'The rails beneath your feet vibrate briefly — something moves in the distance.' },
  { text: '走廊的盡頭傳來微弱的哼唱聲，但當你靠近時就消失了。', textEn: 'Faint humming echoes from the corridor\'s end, but vanishes as you approach.' },
];

var R2_MONSTERS = [
  { name: '石化巨蟻', nameEn: 'Petrified Giant Ant', hp: 30, atkMin: 12, atkMax: 24, petriDmg: 6, xp: 16,
    art: [
      '      ╭━━╮',
      '     ╱ ◆◆ ╲',
      '    │ ╰──╯ │━╮',
      '    ╰─╮  ╭─╯░░╲',
      '   ╱╲ ╰━━╯ ░░░░│',
      '  ╱╱ ╲░░░░░░░╱╱',
      '  ~~  ~~~~~~~~',
    ],
    commune: [
      { zh: '你蹲下身——巨蟻的觸角停止了擺動，朝你的方向傾斜。', en: 'You crouch — the giant ant\'s antennae stop swaying and tilt toward you.' },
      { zh: '它用前足輕輕碰了碰你的手——像是在試探。', en: 'It gently taps your hand with its foreleg — as if testing.' },
      { zh: '巨蟻的複眼中映出你的倒影。它不再把你當作敵人。', en: 'Your reflection gleams in its compound eyes. It no longer sees you as an enemy.' },
    ],
    spareText: { zh: '石化巨蟻轉身朝巢穴走去，走了幾步又回頭看了你一眼——然後消失在石壁的裂縫中。', en: 'The giant ant turns toward its nest, glances back at you once, then vanishes into a crack in the rock.' },
  },
  { name: '碎岩傀儡', nameEn: 'Rubble Golem', hp: 40, atkMin: 16, atkMax: 26, petriDmg: 6, xp: 18,
    empathyGoal: 4,
    art: [
      '     ╔═══╗',
      '     ║◇ ◇║',
      '     ╚═╤═╝',
      '    ╔══╧══╗',
      '    ║▓▓▓▓▓║',
      '    ╠═╤═╤═╣',
      '    ╱╱ │ ╲╲',
    ],
    commune: [
      { zh: '你伸出手……傀儡停下了揮拳的動作，歪著頭看你。', en: 'You extend your hand... the golem pauses mid-swing, tilting its head.' },
      { zh: '它的身體裡傳出嗡嗡的振動——像是某種古老的語言。', en: 'A hum vibrates from within — like some ancient language.' },
      { zh: '你的手掌貼上它粗糙的表面——溫暖從石頭裡傳來。', en: 'Your palm touches its rough surface — warmth radiates from within.' },
      { zh: '傀儡緩緩跪下，胸口的石塊分開——露出了一顆發光的核心。它在向你展示它的心。', en: 'The golem slowly kneels, chest stones parting — revealing a glowing core. It shows you its heart.' },
    ],
    spareText: { zh: '碎岩傀儡站起身，用石臂輕輕拍了拍你的肩膀——然後一塊塊散開，回歸為採石場的碎石。', en: 'The golem rises, gently pats your shoulder with a stone arm — then crumbles piece by piece, returning to quarry rubble.' },
  },
  { name: '鏽蝕機甲殘骸', nameEn: 'Rusted Mech Wraith', hp: 35, atkMin: 14, atkMax: 30, petriDmg: 8, xp: 20,
    empathyGoal: 3,
    art: [
      '     ╔══╗',
      '    ╱ ●● ╲',
      '    ╚═╤══╝',
      '   ░░╱║╲░░',
      '  ░░╱ ║ ╲░░',
      '     ╱ ╲',
      '    ╱╱ ╲╲',
    ],
    commune: [
      { zh: '「……操縱者……已經……不在了……」破碎的音頻從殘骸中傳出。', en: '"...pilot...is...gone..." Broken audio emits from the wraith.' },
      { zh: '殘骸中的警示燈閃爍——像是在哭泣。它不想戰鬥，只是在執行最後的命令。', en: 'Warning lights flicker within — like weeping. It doesn\'t want to fight, merely follows its final orders.' },
      { zh: '你輕聲說了聲「解除命令」——殘骸的攻擊停止了。它聽到了。', en: 'You whisper "cancel orders" — the wraith\'s attacks cease. It heard you.' },
    ],
    spareText: { zh: '機甲殘骸的眼部亮了最後一下：「……任務完成。」然後永遠沉寂了下去。地上留下了一枚鏽蝕的徽章。', en: 'The wraith\'s eyes flash one last time: "...mission complete." Then silence forever. A rusted badge remains on the ground.' },
  },
  { name: '深層石化蟒', nameEn: 'Deep Stone Serpent', hp: 38, atkMin: 18, atkMax: 32, petriDmg: 10, xp: 22,
    empathyGoal: 4,
    art: [
      '    ╭━━━╮',
      '   ╱ ◉◉ ╲━━╮',
      '  │ ╰──╯ ░░│━╮',
      '   ╲░░░░░░░│ ░╲',
      '    ╰━╮░░╭━╯░░│',
      '      ╰━━╯░░░╱',
      '         ╰━━╯',
    ],
    commune: [
      { zh: '你靜靜站在原地……石化蟒慢慢環繞在你四周。', en: 'You stand still... the serpent slowly coils around you.' },
      { zh: '它的舌頭輕輕舔過你的手臂上的石化紋路——像是在品嚐某種記憶。', en: 'Its tongue flicks over the petrification on your arm — as if tasting a memory.' },
      { zh: '石化蟒收起了攻擊姿態，蟠踞在地上看著你。它的眼中有著某種古老的智慧。', en: 'The serpent relaxes its attack posture, coiling on the ground to watch you. Ancient wisdom glimmers in its eyes.' },
      { zh: '它抬起頭，朝洞穴深處看了一眼——像是在告訴你什麼。然後緩緩離去。', en: 'It raises its head, glancing into the cave depths — as if telling you something. Then slowly departs.' },
    ],
    spareText: { zh: '深層石化蟒朝你點了點頭——是的，它點了頭。然後潛入了地底的裂縫中，留下一道金色的蛻皮。', en: 'The stone serpent nods at you — yes, it nods. Then dives into a ground fissure, leaving a golden shed skin.' },
  },
  { name: '碎晶飛蛾', nameEn: 'Shard Moth', hp: 22, atkMin: 10, atkMax: 20, petriDmg: 5, xp: 14,
    empathyGoal: 3,
    art: [
      '      ╱ ✦ ╲',
      '    ╱╱ ╱ ╲ ╲╲',
      '   ╱╱╱ ◎◎ ╲╲╲',
      '   ╲╲╲ ╰╯ ╱╱╱',
      '    ╲╲ ╲ ╱ ╱╱',
      '      ╲ ║ ╱',
    ],
    commune: [
      { zh: '你舉起手掌——飛蛾停在你指尖上，翅膀上的碎晶折射出微弱的虹光。', en: 'You raise your palm — the moth lands on your fingertip, wing shards refracting faint rainbow light.' },
      { zh: '它輕輕拍動翅膀，碎晶粉塵飄落在你肩上，帶著一絲溫暖。', en: 'It gently flaps, shard dust drifting onto your shoulder with a hint of warmth.' },
      { zh: '飛蛾繞著你飛了三圈，留下一條閃爍的軌跡——像是祝福。', en: 'The moth circles you three times, leaving a glimmering trail — like a blessing.' },
    ],
    spareText: { zh: '碎晶飛蛾向著採石場頂部飛去，在黑暗中化為一顆遙遠的星星。', en: 'The shard moth flies toward the quarry ceiling, becoming a distant star in the darkness.' },
  },
  { name: '鑄造殘兵', nameEn: 'Forged Remnant', hp: 36, atkMin: 15, atkMax: 28, petriDmg: 7, xp: 19,
    empathyGoal: 3,
    art: [
      '     ╔═══╗',
      '     ║ ● ●║',
      '     ╠═══╣',
      '    ╱║▓▓▓║╲',
      '   ╱ ║▓▓▓║ ╲',
      '  ╱╱ ╚═╤═╝ ╲╲',
      '      ╱ ╲',
    ],
    commune: [
      { zh: '「……命令……執行……」它的動作僵硬而重複。你叫了一聲「休息」。', en: '"...orders...execute..." Its movements are stiff and repetitive. You call out "rest."' },
      { zh: '殘兵停頓了——手中的武器微微下垂。它聽懂了。', en: 'The remnant pauses — its weapon droops slightly. It understood.' },
      { zh: '它緩緩舉手行了一個軍禮，鏽蝕的關節發出吱嘎聲。', en: 'It slowly raises its hand in a salute, rusted joints creaking.' },
    ],
    spareText: { zh: '鑄造殘兵收起武器，筆直地站在原地。它選擇了站崗——永遠地守護這片空無一人的廣場。', en: 'The remnant sheathes its weapon and stands at attention. It chose to stand guard — forever watching over this empty plaza.' },
  },
];

var R2_PATROL_TEXTS = [
  { text: '你穿越巨大的採石台之間，腳步聲在空曠中迴盪。', textEn: 'You weave between massive quarry platforms, footsteps echoing in the vastness.' },
  { text: '頭頂的結晶礦脈閃爍著不祥的暗金色光芒。', textEn: 'Crystal veins overhead pulse with ominous dark golden light.' },
  { text: '一塊碎石從岩柱上掉落，發出沉悶的碰撞聲。', textEn: 'A chunk of rock falls from a pillar, landing with a dull thud.' },
  { text: '你經過一輛翻覆的巨型礦車。鐵輪已經被石化粒子腐蝕殆盡。', textEn: 'You pass an overturned giant mining cart. Its iron wheels are corroded by petri-particles.' },
  { text: '遠處傳來機械殘骸自行崩塌的聲響。', textEn: 'The distant sound of mechanical wreckage collapsing on its own.' },
  { text: '你沿著一條乾涸的水渠前進，渠壁上佈滿了石化紋路。', textEn: 'You follow a dried-up canal, its walls covered in petrification patterns.' },
  { text: '一陣熱風從地底深處湧來，空氣中夾雜著金屬燒灼的氣味。', textEn: 'A hot gust surges from the depths, carrying the smell of scorched metal.' },
  { text: '你踩到了什麼軟的東西——是一塊被石化到一半的菌毯。', textEn: 'You step on something soft — a mat of fungus, half petrified.' },
  { text: '一面巨大的石化浮雕從岩壁上剝落，砸在地上碎成齏粉。', textEn: 'A massive petrified relief crumbles off the wall, shattering to dust on the ground.' },
  { text: '你路過一處營火遺跡，灰燼還帶著餘溫——有人不久前來過。', textEn: 'You pass campfire remains, ashes still warm — someone was here recently.' },
  { text: '腳下的石板裂開了一條縫，從中散發出熱氣和硫磺味。', textEn: 'A flagstone cracks open, venting hot gas and sulfur from below.' },
  { text: '你抬頭看了一眼——無數石化的鐘乳石倒懸在頭頂，像凝固的雨。', textEn: 'You look up — countless petrified stalactites hang overhead, like frozen rain.' },
];

var R3_MONSTERS = [
  { name: '河蛭巨蟲', nameEn: 'River Leech Worm', hp: 35, atkMin: 16, atkMax: 28, petriDmg: 8, xp: 22,
    art: [
      '     ╭━━━━━╮',
      '    ╱ ● ═══ ╲',
      '   │ ╰─○─╯ ░░│',
      '    ╲░░░░░░░░╱',
      '     ╰━━━━━╮╱',
      '           ╰╯',
    ],
    commune: [
      { zh: '你伸出手掌放在河水中……河蛭慢慢靠近，觸鬚碰了碰你的指尖。', en: 'You dip your palm in the river... the leech drifts closer, feelers brushing your fingertips.' },
      { zh: '它的身體發出微弱的生物光——像是在回應你的存在。', en: 'Its body emits a faint bioluminescence — as if responding to your presence.' },
      { zh: '河蛭蟲收起了吸盤，在水中繞著你緩緩旋轉。它不再敵視你了。', en: 'The leech retracts its suckers, slowly circling you in the water. It no longer sees you as a threat.' },
    ],
    spareText: { zh: '河蛭巨蟲沉入黑暗的水底，尾部的生物光漸漸消失——像一盞熄滅的燈籠。', en: 'The leech sinks into the dark water, its bioluminescence fading — like a lantern going out.' },
  },
  { name: '鏽鱗魚人', nameEn: 'Rust-Scale Fishman', hp: 42, atkMin: 18, atkMax: 32, petriDmg: 8, xp: 25,
    empathyGoal: 3,
    art: [
      '      ╭──╮',
      '     ╱●  ●╲',
      '    │ ╰──╯ │',
      '    │ ▓▓▓▓ │╮',
      '    ╲╱╲╱╲╱╲╱│',
      '     ╱╱  ╲╲ │',
      '    ~~    ~~',
    ],
    commune: [
      { zh: '「嘎……嘎啊……」魚人發出粗啞的聲音。不是攻擊的嘶吼——更像是……說話。', en: '"Grr... grraa..." The fishman makes rough sounds. Not battle cries — more like... speech.' },
      { zh: '你蹲下身，模仿它的聲音回應。魚人停下了攻擊，歪著頭看你。', en: 'You crouch and mimic its sounds. The fishman stops attacking, tilting its head.' },
      { zh: '它伸出佈滿鏽鱗的手——手掌裡握著一顆河珍珠。它在向你展示自己的寶物。', en: 'It extends a rust-scaled hand — holding a river pearl. It\'s showing you its treasure.' },
    ],
    spareText: { zh: '魚人把河珍珠塞進你手裡，然後轉身跳入水中。在水花中，你看到它回頭看了你一眼——像在說再見。', en: 'The fishman presses the pearl into your hand, then dives into the water. In the splash, it looks back — as if saying goodbye.' },
  },
  { name: '石化水母群', nameEn: 'Petrified Jellyfish Swarm', hp: 28, atkMin: 10, atkMax: 36, petriDmg: 12, xp: 24,
    art: [
      '    ╭═══╮  ╭══╮',
      '   ╱ ◎◎╱  ╱◎◎ ╲',
      '   ╲═══╱  ╲══╱',
      '   ╱╲╱╲    ╱╲╱╲',
      '  │ │ │   │ │ │',
      '  · · ·   · · ·',
    ],
    commune: [
      { zh: '你閉上眼睛，放鬆身體……水母群的觸手停止了蟄刺，在你身邊漂浮。', en: 'You close your eyes and relax... the jellyfish stop stinging, floating around you.' },
      { zh: '它們發出幽藍的光芒，像是地底的星空在水中重現。', en: 'They emit a ghostly blue glow, like an underground starscape reflected in water.' },
      { zh: '水母群形成了一個光環——將你包裹在溫柔的光芒中。它們在療癒你。', en: 'The swarm forms a halo of light — wrapping you in gentle radiance. They\'re healing you.' },
    ],
    spareText: { zh: '水母群散去，在水面留下了一層閃爍的磷光。你感覺到石化的痕跡略微褪去了一些。', en: 'The swarm disperses, leaving a shimmering phosphorescence on the water. Your petrification marks fade slightly.' },
  },
  { name: '淵底鱷龍', nameEn: 'Abyss Crocodilian', hp: 50, atkMin: 24, atkMax: 40, petriDmg: 10, xp: 30,
    empathyGoal: 4,
    art: [
      '   ╭━━━━━━━━━━━━╮',
      '  ╱ ◆        ◆  ╲',
      ' │ ╰════════════╯ │',
      ' │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │',
      '  ╲═══╤══════╤═══╱',
      '     ╱╱      ╲╲',
      '    ~~  ~~~~~~  ~~',
    ],
    commune: [
      { zh: '你面對巨大的鱷龍，沒有退後。它的瞳孔收縮——在打量你。', en: 'You face the massive crocodilian without retreating. Its pupils contract — sizing you up.' },
      { zh: '你伸出手，慢慢碰觸它的鱗甲。粗糙的表面下有心跳的振動。', en: 'You extend your hand and slowly touch its scales. Beneath the rough surface, a heartbeat pulses.' },
      { zh: '鱷龍闔上了嘴。它低沉的喉音不再是咆哮——而是一種安靜的呼嚕聲。', en: 'The crocodilian closes its mouth. Its deep throat sounds shift from roaring to a quiet rumble.' },
      { zh: '它趴在地上，巨大的頭顱靠在你腳邊。這個地底的頂級掠食者——選擇了信任你。', en: 'It lies down, resting its massive head at your feet. The underground\'s apex predator — chooses to trust you.' },
    ],
    spareText: { zh: '淵底鱷龍站起身，用尾巴輕輕碰了碰你的手。然後它轉身滑入河流深處——水面上泛起的漣漪漸漸消失。', en: 'The crocodilian rises, gently tapping your hand with its tail. Then it slides into the river depths — ripples fading on the surface.' },
  },
  { name: '潮汐寄居蟹', nameEn: 'Tidal Hermit Crab', hp: 32, atkMin: 14, atkMax: 26, petriDmg: 6, xp: 20,
    empathyGoal: 3,
    art: [
      '      ╭═══╮',
      '    ╱╱ ▓▓▓ ╲╲',
      '   │  ◎  ◎  │',
      '   │╲ ╰──╯ ╱│',
      '  ╱╱ ╲════╱ ╲╲',
      ' ╱╱   ╱╲╱╲   ╲╲',
    ],
    commune: [
      { zh: '你蹲在水邊，輕輕敲了敲它背上的石殼。寄居蟹縮了一下，又探出了觸角。', en: 'You crouch by the water and tap its stone shell. The crab flinches, then extends its antennae.' },
      { zh: '它用螯夾了一小塊石頭放在你面前——像是在送禮物。', en: 'It picks up a pebble with its claw and places it before you — like offering a gift.' },
      { zh: '寄居蟹爬上了你的手掌，在上面轉了幾圈才滿意地停下。', en: 'The crab climbs onto your palm, turning in circles before settling contentedly.' },
    ],
    spareText: { zh: '潮汐寄居蟹背著石殼，橫著走進水裡。它回頭舉起一隻螯——像是在跟你揮手道別。', en: 'The hermit crab sidesteps into the water with its shell. It raises a claw over its shoulder — as if waving goodbye.' },
  },
  { name: '深水燈籠魚', nameEn: 'Deep Lanternfish', hp: 26, atkMin: 12, atkMax: 34, petriDmg: 10, xp: 23,
    empathyGoal: 3,
    art: [
      '        ✦',
      '        │',
      '    ╭━━━╯━━━╮',
      '   ╱  ◉    ◉ ╲',
      '   ╲  ╰════╯  ╱',
      '    ╰━━━━━━━━╯',
      '      ╲╱╲╱╲╱',
    ],
    commune: [
      { zh: '你閉上眼睛，不再注視它頭頂誘人的光——燈籠魚停止了搖擺。', en: 'You close your eyes, ignoring the lure atop its head — the lanternfish stops swaying.' },
      { zh: '它游近你，用頭頂的燈照亮了你的臉——不是誘餌，而是觀察。', en: 'It swims close, illuminating your face with its lantern — not as bait, but to observe.' },
      { zh: '燈籠魚的光從刺眼的白變成溫暖的橙色——它放下了戒備。', en: 'The lanternfish\'s light shifts from blinding white to warm orange — it\'s lowering its guard.' },
    ],
    spareText: { zh: '深水燈籠魚在你周圍繞了一圈光環，然後沉入水底。黑暗中，那盞小小的燈籠漸行漸遠，像是地底深處的一顆星。', en: 'The lanternfish draws a circle of light around you, then sinks. In the dark, its tiny lantern drifts away — a star in the deep.' },
  },
];

var R3_PATROL_TEXTS = [
  { text: '你沿著濕滑的河岸隧道前進，水聲在石壁間迴盪。', textEn: 'You advance through slippery river tunnels, water sounds echoing off stone walls.' },
  { text: '腳下是黏膩的河泥，每一步都發出吸盤般的聲音。', textEn: 'Sticky river mud underfoot, each step making a squelching sound.' },
  { text: '隧道壁上附著著發光的水藻，映出你警惕的身影。', textEn: 'Bioluminescent algae clings to tunnel walls, casting your wary silhouette.' },
  { text: '你經過一個地下瀑布，水霧打濕了你的臉。', textEn: 'You pass an underground waterfall, mist dampening your face.' },
  { text: '遠處傳來某種生物拍打水面的聲音。', textEn: 'The distant sound of some creature slapping the water surface.' },
  { text: '一股腥臭的氣味從隧道深處飄來——有什麼東西住在那裡。', textEn: 'A foul stench drifts from deep in the tunnel — something lives there.' },
  { text: '你踩過一灘散發螢光的淺水。水底有什麼東西在游動。', textEn: 'You wade through luminescent shallows. Something swims below.' },
  { text: '隧道分岔了。你選了水聲更大的那條——那裡通常有更多生物。', textEn: 'The tunnel forks. You choose the louder water sound — usually means more creatures.' },
  { text: '石壁上嵌著一面破碎的銅鏡——你在裡面看見了自己佈滿石化紋路的臉。', textEn: 'A cracked bronze mirror is set into the wall — you see your own face, lined with petrification marks.' },
  { text: '河面上漂過一盞紙燈——不知道是誰放的，也不知道它漂了多久。', textEn: 'A paper lantern drifts past on the river — no telling who set it afloat, or how long ago.' },
  { text: '你聽見遠處傳來模糊的歌聲，但旋律太古老了，你聽不出歌詞。', textEn: 'Faint singing echoes from afar, but the melody is too ancient to make out any words.' },
  { text: '碼頭的木板在你腳下發出不安的嘎吱聲，河水在下方黑暗中湧動。', textEn: 'Dock planks creak nervously beneath you, dark water surging below.' },
];

// ── Register pools into centralized registry (from registry.js) ──
registerMonsterPool(0, R0_MONSTERS);
registerMonsterPool(1, R1_MONSTERS);
registerMonsterPool(2, R2_MONSTERS);
registerMonsterPool(3, R3_MONSTERS);
registerPatrolTexts(0, R0_PATROL_TEXTS);
registerPatrolTexts(1, R1_PATROL_TEXTS);
registerPatrolTexts(2, R2_PATROL_TEXTS);
registerPatrolTexts(3, R3_PATROL_TEXTS);

// ═══════════════════════════════════════════════════
//  Narrative Patrol Events — R0 祭獻坑
// ═══════════════════════════════════════════════════

var R0_EVENTS = [
  // ── Event 1: 石化雕像求救 (戰鬥+道德) ──
  {
    id: 'r0_statue', flag: '_evt_r0_statue', region: 0,
    buildQueue: function(queue) {
      queue.push({ art: '<pre class="ascii-art">\n' +
        '        ╭─────╮\n' +
        '        │ ◉  ◉│  ← 眼睛在動\n' +
        '        │  ▽  │\n' +
        '        ╰──┬──╯\n' +
        '      ░▓███│███▓░\n' +
        '      ▓████│████▓\n' +
        '      ░▓██─┴─██▓░\n' +
        '       ░▓█████▓░\n' +
        '        ░░▓▓▓░░\n' +
        '</pre>', delay: 800 });
      queue.push({ tag: L('事件','Event'), color: 'tag-event',
        text: L('你經過一尊石化雕像時，它的嘴唇動了。', 'As you pass a petrified statue, its lips move.'),
        delay: 2200 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('「……幫……我……」聲音像從石頭縫裡擠出來的，乾澀、痛苦、微弱得幾乎不存在。', '"...help...me..." The voice squeezes from between cracks in stone — dry, agonized, barely there.'),
        delay: 3000 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('你看見它的眼珠在石化的眼眶裡緩慢轉動。這個人還活著——被困在自己的身體裡。', 'You see its eyeballs rolling slowly within petrified sockets. This person is still alive — trapped inside their own body.'),
        delay: 3000 });
      queue.push({ tag: L('抉擇','Choice'), color: 'tag-event',
        text: L('你要怎麼做？', 'What do you do?'),
        choices: [
          { text: L('嘗試撬開石殼 [力量]', 'Try to pry open the shell [STR]'), textEn: 'Try to pry open the shell [STR]',
            action: function() {
              var result = statCheck('str', 6);
              if (result !== 'fail') {
                sfx.pass();
                addItem(L('石心碎片', 'Stone Heart Shard'));
                changePetri(3);
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你用盡全力，掰開了胸口處的石殼。一塊溫熱的碎片落入你手中——它還帶著那個人最後的體溫。', 'You pry open the chest plate with all your strength. A warm shard falls into your palm — still carrying that person\'s last body heat.'), false);
                patrolAppend(L('系統','System'), 'tag-system',
                  L('石化度 +3%。獲得「石心碎片」。', 'Petrification +3%. Obtained "Stone Heart Shard".'), false);
                patrolAppend(L('感知','Sense'), 'tag-sense',
                  L('石像的嘴角似乎微微上揚了。然後，所有的動靜都停了。', 'The statue\'s lips seem to curve upward, just slightly. Then all movement ceases.'), false);
                renderStatus();
              } else {
                sfx.fail();
                changePetri(5);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你的手觸碰石殼的瞬間，石化粉塵從裂縫中噴出，沾滿了你的手臂。你什麼都沒能救出來。', 'The instant you touch the shell, petri-dust erupts from the cracks, coating your arms. You couldn\'t save anything.'), false);
                patrolAppend(L('系統','System'), 'tag-system',
                  L('石化度 +5%。', 'Petrification +5%.'), false);
                renderStatus();
              }
            }
          },
          { text: L('走開', 'Walk away'), textEn: 'Walk away',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你移開目光，繼續前進。身後傳來一聲極輕的嘆息——或者只是風聲。', 'You look away and move on. A faint sigh drifts from behind — or perhaps it\'s just the wind.'), false);
            }
          }
        ]
      });
    }
  },

  // ── Event 2: 裂縫微光 (探索+調查) ──
  {
    id: 'r0_crack_light', flag: '_evt_r0_crack_light', region: 0,
    buildQueue: function(queue) {
      queue.push({ art: '<pre class="ascii-art">\n' +
        '    ██████████████████████\n' +
        '    ████████╲    ╱████████\n' +
        '    █████████╲✦╱█████████\n' +
        '    ██████████╳██████████\n' +
        '    █████████╱ ╲█████████\n' +
        '    ████████╱✦✦ ╲████████\n' +
        '    ███████╱ ·˚· ╲███████\n' +
        '    ██████╱  ✦✦✦  ╲██████\n' +
        '</pre>', delay: 800 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('牆壁上有一道狹窄的裂縫。從裂縫深處，溢出淡淡的金色微光——像是某種結晶在發光。', 'A narrow crack runs through the wall. Deep within, a faint golden glow seeps out — some crystal pulsing with light.'),
        delay: 2800 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('裂縫很窄，勉強能擠進去一個人。空氣中有一股溫暖的礦物味——和一絲甜味。', 'The crack is barely wide enough for one person. The air carries a warm mineral scent — and a hint of sweetness.'),
        delay: 2500 });
      queue.push({ tag: L('抉擇','Choice'), color: 'tag-event',
        text: L('你要鑽進去嗎？', 'Squeeze in?'),
        choices: [
          { text: L('鑽進裂縫 [敏捷]', 'Squeeze through [AGI]'), textEn: 'Squeeze through [AGI]',
            action: function() {
              var result = statCheck('agi', 7);
              if (result !== 'fail') {
                sfx.pass();
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你側身擠過裂縫，手肘擦破了皮，但成功到達另一側——一個拳頭大的空洞裡，藏著前人留下的補給。', 'You squeeze through sideways, scraping your elbows, but reach the other side — a fist-sized cavity with someone\'s hidden supplies.'), false);
                addItem(L('黑麵包', 'Black Bread'));
                changeHp(8);
                patrolAppend(L('系統','System'), 'tag-system',
                  L('HP +8。獲得「黑麵包」。', 'HP +8. Obtained "Black Bread".'), false);
                renderStatus();
              } else {
                sfx.fail();
                changeHp(-5);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你卡在了半路。尖銳的石壁割破了你的腰側，你費了好大力氣才退出來。', 'You get stuck halfway. The jagged rock slices your side, and it takes real effort to back out.'), false);
                patrolAppend(L('系統','System'), 'tag-system',
                  L('HP -5。', 'HP -5.'), false);
                renderStatus();
              }
            }
          },
          { text: L('不值得冒險', 'Not worth the risk'), textEn: 'Not worth the risk',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你記下了裂縫的位置，繼續前進。也許以後會回來。', 'You note the crack\'s location and move on. Perhaps you\'ll return.'), false);
            }
          }
        ]
      });
    }
  },

  // ── Event 3: 遠方歌聲 (羈絆+氛圍) ──
  {
    id: 'r0_singer', flag: '_evt_r0_singer', region: 0,
    buildQueue: function(queue) {
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('你停下腳步。空氣中飄來一段旋律——微弱、破碎、卻清晰得不像回音。有人在唱歌。', 'You stop. A melody drifts through the air — faint, broken, yet too clear to be an echo. Someone is singing.'),
        delay: 2800 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('歌聲來自南面的一條死路。語言聽不懂，但旋律裡有一種令人心碎的溫柔——像是在唱搖籃曲。', 'The song comes from a dead-end to the south. The language is unknown, but the melody holds a heartbreaking tenderness — like a lullaby.'),
        delay: 3000 });
      queue.push({ tag: L('抉擇','Choice'), color: 'tag-event',
        text: L('你要跟隨歌聲嗎？', 'Follow the singing?'),
        choices: [
          { text: L('循著歌聲走去', 'Follow the voice'), textEn: 'Follow the voice',
            pauseQueue: true,
            action: function() {
              patrolAppend(L('移動','Move'), 'tag-move',
                L('你沿著聲音走了大約五十步。歌聲越來越近——然後，突然停了。', 'You follow the sound for fifty paces. The song grows closer — then, abruptly, stops.'), false);
              // Show the petrified singer after a delay
              patrolTimers.push(setTimeout(function() {
                var singerArt = document.createElement('div');
                singerArt.innerHTML = '<pre class="ascii-art">\n' +
                  '          ╭──╮\n' +
                  '          │♪ │  ·˚\n' +
                  '       ╭──┤  ├──╮\n' +
                  '       │░░│  │░░│\n' +
                  '       │▓▓│  │▓▓│\n' +
                  '       │██│  │██│\n' +
                  '    ···╰──┴──┴──╯···\n' +
                  '</pre>';
                $story.appendChild(singerArt);
                $story.scrollTop = $story.scrollHeight;
                patrolTimers.push(setTimeout(function() {
                  patrolAppend(L('感知','Sense'), 'tag-sense',
                    L('死路的盡頭，坐著一個完全石化的女人。她的姿勢像是在抱著什麼——但懷裡是空的。', 'At the dead end sits a fully petrified woman. She seems to be holding something — but her arms are empty.'), false);
                  patrolTimers.push(setTimeout(function() {
                    patrolAppend(L('感知','Sense'), 'tag-sense',
                      L('她的嘴微微張開，嘴唇凝固在一個音節上。完全石化的人，怎麼還能唱歌？', 'Her lips are parted, frozen mid-syllable. How could someone fully petrified still sing?'), false);
                    patrolTimers.push(setTimeout(function() {
                      patrolAppend(L('調查','Clue'), 'tag-info',
                        L('你在她腳邊發現一枚石化吊墜。打開來，裡面有一縷沒有石化的頭髮——嬰兒的頭髮。她在唱搖籃曲。', 'At her feet lies a petrified locket. Inside — a lock of unpetrified hair. An infant\'s. She was singing a lullaby.'), false);
                      // Show second choice
                      $choices.innerHTML = '';
                      var en = state.lang === 'en';
                      var c1 = document.createElement('button');
                      c1.className = 'choice-btn';
                      c1.textContent = en ? 'Take it \u2014 remember her' : '\u5E36\u8D70\u5B83\uFF0C\u8A18\u4F4F\u5979';
                      c1.addEventListener('click', function() {
                        sfx.click(); sfx.item();
                        changeStat('wil', 1); changePetri(2);
                        $choices.innerHTML = '';
                        var sb = document.createElement('button');
                        sb.className = 'choice-btn'; sb.textContent = L('停下腳步','Stop and rest');
                        sb.addEventListener('click', stopPatrol); $choices.appendChild(sb);
                        patrolAppend(L('事件','Event'), 'tag-event',
                          L('你收起吊墜。指尖觸碰石化表面的瞬間，暖意從手心蔓延——像是被感謝了。', 'You pocket the locket. Warmth spreads from your palm at the touch — as if being thanked.'), false);
                        patrolAppend(L('系統','System'), 'tag-system',
                          L('意志 +1。石化度 +2%。', 'WIL +1. Petrification +2%.'), false);
                        notify(L('意志 +1（銘記亡者）', 'WIL +1 (Remembering the lost)'));
                        renderStatus();
                        patrolTimers.push(setTimeout(runPatrolCycle, 2000));
                      });
                      var c2 = document.createElement('button');
                      c2.className = 'choice-btn';
                      c2.textContent = en ? 'Leave it' : '\u653E\u56DE\u53BB';
                      c2.addEventListener('click', function() {
                        sfx.click();
                        $choices.innerHTML = '';
                        var sb = document.createElement('button');
                        sb.className = 'choice-btn'; sb.textContent = L('停下腳步','Stop and rest');
                        sb.addEventListener('click', stopPatrol); $choices.appendChild(sb);
                        patrolAppend(L('巡邏','Patrol'), 'tag-move',
                          L('你把吊墜放回她腳邊。轉身時，彷彿又聽見了極輕的哼唱。', 'You place the locket back. As you turn, you think you hear a faint hum once more.'), false);
                        patrolTimers.push(setTimeout(runPatrolCycle, 2000));
                      });
                      var sb2 = document.createElement('button');
                      sb2.className = 'choice-btn'; sb2.textContent = L('停下腳步','Stop and rest');
                      sb2.addEventListener('click', stopPatrol);
                      $choices.appendChild(c1); $choices.appendChild(c2); $choices.appendChild(sb2);
                    }, 3500));
                  }, 3000));
                }, 2500));
              }, 2000));
            }
          },
          { text: L('忽略它', 'Ignore it'), textEn: 'Ignore it',
            pauseQueue: true,
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你捂住耳朵，加快腳步離開。有些聲音不該去追。', 'You cover your ears and quicken your pace. Some sounds are best left unfollowed.'), false);
              patrolTimers.push(setTimeout(runPatrolCycle, 2000));
            }
          }
        ]
      });
    }
  }
];

registerPatrolEvents(0, R0_EVENTS);

// ═══════════════════════════════════════════════════
//  Narrative Patrol Events — R1 石脈迴廊
// ═══════════════════════════════════════════════════

var R1_EVENTS = [
  // ── Event 1: 未石化的貓 (羈絆) ──
  {
    id: 'r1_cat', flag: '_evt_r1_cat', region: 1,
    buildQueue: function(queue) {
      queue.push({ art: '<pre class="ascii-art">\n' +
        '         ╱╲___╱╲\n' +
        '        (  ·  ·  )\n' +
        '         ╲  ▽  ╱\n' +
        '          ╱    ╲\n' +
        '         │ ╭──╮ │\n' +
        '         │ │  │ │\n' +
        '         ╰─╯  ╰─╯\n' +
        '</pre>', delay: 800 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('一雙發亮的眼睛從鐵軌旁的陰影裡盯著你。', 'A pair of glowing eyes watches you from the shadows beside the rail tracks.'),
        delay: 2200 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('你屏住呼吸——是一隻貓。在這個一切都在石化的地方，一隻完全沒有石化跡象的、活生生的灰色小貓。', 'You hold your breath — it\'s a cat. In this place where everything turns to stone, a small grey cat with no trace of petrification. Alive.'),
        delay: 3200 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('它歪著頭看你，發出一聲短促的「咪」。聲音在空曠的迴廊裡迴盪，竟然有一種荒誕的溫柔。', 'It tilts its head at you and lets out a short "mew." The sound echoes through the empty corridor — absurdly tender.'),
        delay: 2800 });
      // Ying companion variant
      if (state.flags.r1YingCompanion) {
        queue.push({ tag: L('同伴','Ally'), color: 'tag-ally',
          text: L('螢蹲了下來，伸出手。小貓猶豫了一下，然後湊過來蹭了蹭她的指尖。螢笑了——你很少見到她笑得這麼沒有防備。', 'Ying crouches down, hand outstretched. The cat hesitates, then nuzzles her fingertips. Ying smiles — you\'ve rarely seen her smile so unguarded.'),
          delay: 3200 });
        queue.push({ tag: L('同伴','Ally'), color: 'tag-ally',
          text: L('「牠怎麼沒有石化？」她抬頭看你，眼睛裡閃著好奇的光。「也許……牠知道什麼我們不知道的事。」', '"How is it not petrified?" She looks up at you, eyes bright with curiosity. "Maybe... it knows something we don\'t."'),
          delay: 3000 });
      }
      queue.push({ tag: L('抉擇','Choice'), color: 'tag-event',
        text: L('你要餵牠嗎？', 'Feed it?'),
        choices: [
          { text: hasItem(L('黑麵包','Black Bread'))
              ? L('餵牠黑麵包', 'Feed it Black Bread')
              : L('分一點口糧給牠', 'Share some rations'),
            textEn: hasItem(L('黑麵包','Black Bread'))
              ? 'Feed it Black Bread'
              : 'Share some rations',
            action: function() {
              if (hasItem(L('黑麵包','Black Bread'))) removeItem(L('黑麵包','Black Bread'));
              state.flags.r1CatFed = true;
              sfx.item();
              patrolAppend(L('事件','Event'), 'tag-event',
                L('小貓小心翼翼地從你手裡叼走食物，吃完後用頭蹭了蹭你的腳踝。然後它跳上鐵軌，朝迴廊深處跑去——走了幾步又回頭看你一眼。', 'The cat delicately takes the food from your hand. After eating, it bumps its head against your ankle. Then it hops onto the rail and trots deeper into the corridor — pausing once to look back at you.'), false);
              patrolAppend(L('系統','System'), 'tag-system',
                L('巡邏戰鬥中受到的傷害 -10%（貓會分散敵人注意力）。', 'Patrol combat damage taken -10% (cat distracts enemies).'), false);
              if (state.flags.r1YingCompanion) {
                patrolAppend(L('同伴','Ally'), 'tag-ally',
                  L('螢看著跑遠的小貓，又看看你：「……你比看起來心軟。」她的語氣裡有一絲你說不清的東西。', 'Ying watches the cat go, then looks at you: "...You\'re softer than you look." There\'s something in her tone you can\'t quite place.'), false);
              }
              renderStatus();
            }
          },
          { text: L('不理牠', 'Ignore it'), textEn: 'Ignore it',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你沒有停下腳步。小貓在你身後叫了兩聲，然後消失在陰影裡。', 'You don\'t stop. The cat calls twice behind you, then vanishes into shadow.'), false);
            }
          }
        ]
      });
    }
  },

  // ── Event 2: 失控礦車 (戰鬥+動作) ──
  {
    id: 'r1_minecart', flag: '_evt_r1_minecart', region: 1,
    buildQueue: function(queue) {
      queue.push({ tag: L('警告','Alert'), color: 'tag-warn',
        text: L('腳下的鐵軌開始震動。', 'The rail tracks beneath your feet begin to vibrate.'),
        delay: 1800 });
      queue.push({ art: '<pre class="ascii-art">\n' +
        '                    ╔═══╗\n' +
        '     ──────────────→║礦車║→→→\n' +
        '     ════════════════╚═╤═╝════\n' +
        '     ──────────────────┴──────\n' +
        '           !!  ◆你◆  !!\n' +
        '</pre>', delay: 800 });
      queue.push({ tag: L('警告','Alert'), color: 'tag-warn',
        text: L('轟隆隆的聲音從黑暗中傳來——一輛裝滿碎石的礦車沿著軌道直衝而來！生鏽的車輪擦出火花，速度越來越快。', 'A thunderous rumble rolls from the darkness — a minecart loaded with rubble hurtles along the tracks! Rusted wheels throw sparks, accelerating.'),
        delay: 2500, sfx: 'hurt' });
      queue.push({ tag: L('抉擇','Choice'), color: 'tag-event',
        text: L('沒時間想了——', 'No time to think —'),
        choices: [
          { text: L('閃到一邊 [敏捷]', 'Dodge aside [AGI]'), textEn: 'Dodge aside [AGI]',
            action: function() {
              var result = statCheck('agi', 7);
              if (result !== 'fail') {
                sfx.pass();
                patrolAppend(L('事件','Event'), 'tag-event',
                  L('你在最後一刻翻滾到鐵軌外側。礦車呼嘯而過，帶起的氣流吹得你頭髮飛揚。', 'You roll clear at the last second. The cart screams past, its slipstream whipping your hair.'), false);
                if (result === 'crit') {
                  patrolAppend(L('事件','Event'), 'tag-item',
                    L('礦車翻覆後，你在散落的碎石中發現了一瓶完好的藥水。', 'After the cart overturns, you spot an intact potion among the scattered rubble.'), false);
                  addItem(L('HP 藥水', 'HP Potion'));
                }
              } else {
                sfx.fail();
                changeHp(-8);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('你閃避得太慢，礦車的邊緣擦過你的肩膀。劇痛讓你眼前一黑。', 'Too slow — the cart\'s edge clips your shoulder. Pain whites out your vision.'), false);
                patrolAppend(L('系統','System'), 'tag-system',
                  L('HP -8。', 'HP -8.'), false);
                renderStatus();
              }
            }
          },
          { text: L('正面攔住它 [力量]', 'Brace and stop it [STR]'), textEn: 'Brace and stop it [STR]',
            action: function() {
              var result = statCheck('str', 7);
              if (result !== 'fail') {
                sfx.pass();
                patrolAppend(L('事件','Event'), 'tag-combat',
                  L('你紮穩腳步，雙手死死抵住礦車前沿。鐵鏽割破了你的掌心，但車速在減慢——最終，停了下來。', 'You brace yourself, palms jammed against the cart\'s front edge. Rust cuts your palms, but the cart slows — and stops.'), false);
                changeHp(-3);
                addItem(L('HP 藥水', 'HP Potion'));
                patrolAppend(L('系統','System'), 'tag-system',
                  L('HP -3。在車廂裡發現「HP 藥水」。', 'HP -3. Found "HP Potion" inside the cart.'), false);
                renderStatus();
              } else {
                sfx.fail();
                changeHp(-10);
                patrolAppend(L('事件','Event'), 'tag-warn',
                  L('礦車的重量遠超你的預期。它把你撞飛了出去，你重重地摔在鐵軌旁的碎石上。', 'The cart is far heavier than expected. It sends you flying, and you crash onto the gravel beside the tracks.'), false);
                patrolAppend(L('系統','System'), 'tag-system',
                  L('HP -10。', 'HP -10.'), false);
                renderStatus();
              }
            }
          }
        ]
      });
    }
  },

  // ── Event 3: 完整的鏡子 (調查+內心) ──
  {
    id: 'r1_mirror', flag: '_evt_r1_mirror', region: 1,
    buildQueue: function(queue) {
      queue.push({ art: '<pre class="ascii-art">\n' +
        '     ╔═══════════╗\n' +
        '     ║  ╭─────╮  ║\n' +
        '     ║  │ ?   ?│  ║\n' +
        '     ║  │  ▽   │  ║\n' +
        '     ║  │ ███  │  ║\n' +
        '     ║  │ ▓▓▓  │  ║\n' +
        '     ║  │ ░░░  │  ║\n' +
        '     ║  ╰─────╯  ║\n' +
        '     ╚═══════════╝\n' +
        '</pre>', delay: 800 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('礦工宿舍的牆上掛著一面鏡子——完整的、沒有裂痕的。在這個到處都是廢墟的地方，這本身就很不正常。', 'A mirror hangs on the bunkhouse wall — intact, not a single crack. In this ruin, that alone is abnormal.'),
        delay: 2800 });
      queue.push({ tag: L('感知','Sense'), color: 'tag-sense',
        text: L('鏡面上有一層淡淡的灰，但擦掉之後，倒影清晰得令人不安。', 'A thin layer of dust covers the surface, but once wiped, the reflection is unnervingly clear.'),
        delay: 2500 });
      queue.push({ tag: L('抉擇','Choice'), color: 'tag-event',
        text: L('你要仔細看嗎？', 'Look closely?'),
        choices: [
          { text: L('凝視鏡中的自己', 'Gaze into the mirror'), textEn: 'Gaze into the mirror',
            pauseQueue: true,
            action: function() {
              patrolAppend(L('感知','Sense'), 'tag-sense',
                L('你靠近鏡子。起初，倒影是正常的——然後你注意到了。', 'You lean closer. At first, the reflection looks normal — then you notice.'), false);
              patrolTimers.push(setTimeout(function() {
                patrolAppend(L('感知','Sense'), 'tag-petri',
                  L('鏡中的你，石化程度比現實更深。右臂已經完全變成了石頭，左腿的石化紋路一直蔓延到胸口。那是你的未來嗎？', 'The you in the mirror is more petrified than you are now. Right arm fully stone, left leg\'s patterns climbing to the chest. Is that your future?'), false);
                patrolTimers.push(setTimeout(function() {
                  if (state.flags.r1YingCompanion) {
                    patrolAppend(L('同伴','Ally'), 'tag-ally',
                      L('你還注意到——鏡中的你身邊，沒有螢。只有你一個人。', 'You also notice — in the mirror, Ying isn\'t beside you. You\'re alone.'), false);
                  }
                  patrolTimers.push(setTimeout(function() {
                    patrolAppend(L('調查','Clue'), 'tag-info',
                      L('鏡框的背面刻著一行小字：「此鏡照映石化之終。願觀者及時回頭。」——古代封印研究者的留言？', 'On the back of the frame, tiny words: "This mirror reflects petrification\'s end. May the viewer turn back in time." — A note from ancient seal researchers?'), false);
                    // WIL check to resist despair
                    var result = statCheck('wil', 6);
                    if (result !== 'fail') {
                      sfx.pass();
                      changeStat('wil', 1);
                      patrolAppend(L('事件','Event'), 'tag-event',
                        L('你把鏡子翻過去扣在牆上。「我不會變成那樣。」你聽見自己的聲音比預期的更堅定。', 'You flip the mirror face-down against the wall. "I won\'t become that." Your voice sounds firmer than expected.'), false);
                      patrolAppend(L('系統','System'), 'tag-system',
                        L('意志 +1（抗拒命運）。', 'WIL +1 (Defying fate).'), false);
                      notify(L('意志 +1（抗拒命運）', 'WIL +1 (Defying fate)'));
                    } else {
                      sfx.fail();
                      changePetri(3);
                      patrolAppend(L('事件','Event'), 'tag-petri',
                        L('恐懼像冰水一樣灌進你的胸口。你退後一步，呼吸急促。手臂上的石化紋路彷彿比剛才……更深了一點。', 'Fear floods your chest like ice water. You step back, breathing hard. The petrification patterns on your arms seem... slightly deeper than before.'), false);
                      patrolAppend(L('系統','System'), 'tag-system',
                        L('石化度 +3%（恐懼侵蝕）。', 'Petrification +3% (eroded by fear).'), false);
                    }
                    renderStatus();
                    $choices.innerHTML = '';
                    var sb = document.createElement('button');
                    sb.className = 'choice-btn'; sb.textContent = L('停下腳步','Stop and rest');
                    sb.addEventListener('click', stopPatrol); $choices.appendChild(sb);
                    patrolTimers.push(setTimeout(runPatrolCycle, 2000));
                  }, 3000));
                }, 2800));
              }, 2500));
            }
          },
          { text: L('離開，不看', 'Walk away — don\'t look'), textEn: 'Walk away — don\'t look',
            action: function() {
              patrolAppend(L('巡邏','Patrol'), 'tag-move',
                L('你沒有看鏡子。有些真相，知道得太早並不是好事。', 'You leave the mirror alone. Some truths are best left unknown.'), false);
            }
          }
        ]
      });
    }
  }
];

registerPatrolEvents(1, R1_EVENTS);

// Region-aware helpers — now delegate to registry for R4+ extensibility
var PATROL_TEXTS = R0_PATROL_TEXTS; // kept for backwards compat
function getPatrolMonsters() { return getMonsterPool(); }
function getPatrolTexts()    { return getPatrolTextPool(); }
function getPatrolReturnNode() { return getHubNode(); }

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
  ambientAudio.setCombat(true);
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
  ambientAudio.setCombat(false);
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
  { zh: '陰影在牆壁上扭動——那不是你的影子。', en: 'Shadows twist on the wall — those aren\'t yours.' },
  { zh: '你的石化紋路突然隱隱作痛——附近有石化生物。', en: 'Your petrification marks throb — a petrified creature is nearby.' },
  { zh: '地面傳來有節奏的振動，越來越近……', en: 'Rhythmic vibrations pulse through the ground, drawing closer...' },
];

// ── Attack / counter verb pools for vivid combat text ──
var ATK_VERBS = [
  { zh: '你揮出一擊——', en: 'You swing — ' },
  { zh: '你猛力出手——', en: 'You strike hard — ' },
  { zh: '你找到破綻突刺——', en: 'You find an opening — ' },
  { zh: '你衝上前攻擊——', en: 'You rush in — ' },
  { zh: '你側身劈砍——', en: 'You slash from the side — ' },
  { zh: '你低身掃腿——', en: 'You sweep low — ' },
  { zh: '你抓準時機反擊——', en: 'You seize the moment — ' },
];
var COUNTER_VERBS = [
  { zh: '反擊了！', en: 'strikes back!' },
  { zh: '猛撲而來！', en: 'lunges at you!' },
  { zh: '揮爪回擊！', en: 'claws back!' },
  { zh: '狠狠撞來！', en: 'charges at you!' },
  { zh: '發出怒吼反擊！', en: 'roars and retaliates!' },
  { zh: '抓住你的空隙攻擊！', en: 'exploits your opening!' },
];
var DEFEAT_VERBS = [
  { zh: '——致命一擊！擊敗了', en: ' — a killing blow! ' },
  { zh: '——貫穿要害！擊倒了', en: ' — a critical strike! ' },
  { zh: '——最後一擊命中！擊敗了', en: ' — the final blow lands! ' },
  { zh: '——一擊必殺！擊倒了', en: ' — one-shot kill! ' },
  { zh: '——石化紋路爆發！粉碎了', en: ' — petrification surges! Shattered ' },
];

// ── Narrative Event Engine ──
// Runs a registered patrol event instead of combat (25% chance per cycle).
// Events use the same queue/processNext pattern as combat for consistent UX.
function runNarrativeEvent(evt) {
  var queue = [];

  // 1-2 patrol flavor lines (same as combat preamble)
  var patrolPool = getPatrolTexts();
  var p = patrolPool[rng(0, patrolPool.length - 1)];
  queue.push({ tag: L('巡邏','Patrol'), color: 'tag-move',
    text: L(p.text, p.textEn), delay: rng(1500, 2300) });

  // Event builds its own steps into the queue
  evt.buildQueue(queue);

  // Process queue (mirrors combat processNext)
  var qi = 0;
  function processNext() {
    if (!patrolActive) return;
    if (qi >= queue.length) {
      // Event finished — resume patrol cycle
      patrolTimers.push(setTimeout(runPatrolCycle, 1500));
      return;
    }
    var step = queue[qi++];

    // If step has choices, pause auto-advance and show buttons
    if (step.choices) {
      // Render the prompt text first
      if (step.text) {
        patrolAppend(step.tag || L('事件','Event'), step.color || 'tag-info',
          step.text || '', false);
      }
      // Show choice buttons (replace the stop button temporarily)
      $choices.innerHTML = '';
      currentChoices = [];
      var en = state.lang === 'en';
      for (var c = 0; c < step.choices.length; c++) {
        (function(choice) {
          var btn = document.createElement('button');
          btn.className = 'choice-btn';
          btn.textContent = en ? choice.textEn : choice.text;
          btn.addEventListener('click', function() {
            sfx.click();
            // Restore stop-patrol button
            $choices.innerHTML = '';
            currentChoices = [];
            var stopBtn = document.createElement('button');
            stopBtn.className = 'choice-btn';
            stopBtn.textContent = L('停下腳步', 'Stop and rest');
            stopBtn.addEventListener('click', stopPatrol);
            $choices.appendChild(stopBtn);
            // Execute choice action
            if (choice.action) choice.action();
            // If choice doesn't handle continuation itself, resume queue
            if (!choice.pauseQueue) {
              patrolTimers.push(setTimeout(processNext, 800));
            }
          });
          $choices.appendChild(btn);
        })(step.choices[c]);
      }
      // Add stop-patrol option alongside choices
      var stopBtn2 = document.createElement('button');
      stopBtn2.className = 'choice-btn';
      stopBtn2.textContent = L('停下腳步', 'Stop and rest');
      stopBtn2.addEventListener('click', stopPatrol);
      $choices.appendChild(stopBtn2);
      return; // Wait for player choice
    }

    function renderAndContinue() {
      if (!patrolActive) return;
      if (step.sfx) { try { sfx[step.sfx](); } catch(e) {} }
      if (step.effect) { try { step.effect(); } catch(e) {} }
      if (!patrolActive || state.hp <= 0 || state.petri >= 100) return;
      if (step.art) {
        if (typeof step.art === 'string') {
          // HTML art string
          var div = document.createElement('div');
          div.innerHTML = step.art;
          $story.appendChild(div);
          $story.scrollTop = $story.scrollHeight;
        } else {
          patrolAppendArt(step.art, step.artClass || '');
        }
      } else if (step.html) {
        patrolAppend(step.tag, step.color, step.html, true);
      } else if (step.text) {
        patrolAppend(step.tag, step.color, step.text, false);
      }
      patrolTimers.push(setTimeout(processNext, step.delay || 1500));
    }

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

function runPatrolCycle() {
  if (!patrolActive) return;

  // ── 25% chance to trigger a narrative event instead of combat ──
  var available = getAvailablePatrolEvents();
  if (available.length > 0 && Math.random() < 0.25) {
    var evt = available[rng(0, available.length - 1)];
    state.flags[evt.flag] = true; // mark as triggered (once per playthrough)
    runNarrativeEvent(evt);
    return;
  }

  var monsters = getPatrolMonsters();
  var monster = monsters[rng(0, monsters.length - 1)];
  var mName = L(monster.name, monster.nameEn);

  // NG+ scaling
  var scaled = scaleEnemyNgPlus(monster);
  var mHpMax = scaled.hp;
  var mAtkMin = scaled.atkMin;
  var mAtkMax = scaled.atkMax;
  var mPetriDmg = scaled.petriDmg;
  var mXpBase = scaled.xp;

  // Pre-simulate combat
  var mHp = mHpMax;
  var totalDmg = 0, totalPetri = 0, rounds = 0;
  var combatLog = [];
  var effStr = effectiveStat('str');
  var mercy = (typeof getMercyReduction === 'function') ? getMercyReduction() : 0;
  while (mHp > 0 && rounds < 12) {
    rounds++;
    var pAtk = rng(Math.max(1, effStr), effStr + 4);
    var mAtk = rng(mAtkMin, mAtkMax);
    if (mercy > 0) mAtk = Math.max(1, Math.floor(mAtk * (1 - mercy)));
    mHp -= pAtk;
    totalDmg += mAtk;
    totalPetri += mPetriDmg;

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
    delay: 1800, sfx: 'click' });

  // Combat rounds (with dramatic pacing — player and enemy on separate lines)
  for (var i = 0; i < combatLog.length; i++) {
    var entry = combatLog[i];
    var isLast = (i === combatLog.length - 1);
    var tag = entry.who === 'enemy' ? L('反擊','Counter') : L('戰鬥','Battle');
    var color = entry.who === 'enemy' ? 'tag-warn' : 'tag-combat';
    var d = entry.who === 'enemy' ? rng(1200, 1800) : (isLast ? rng(2000, 2800) : rng(1500, 2200));
    var entrySfx = entry.who === 'player' ? 'hit' : 'hurt';
    queue.push({ tag: tag, color: color, text: entry.text,
      delay: d, pending: entry.who === 'player', sfx: entrySfx });
  }

  // NPC Patrol Aid — roll for ally assistance
  var npcAid = (typeof rollPatrolAid === 'function') ? rollPatrolAid() : null;
  if (npcAid) {
    // Build modified result
    var aidResult = { dmgMult: 1, petriMult: 1, bonusDmg: 0, healHp: 0 };
    npcAid.apply(aidResult);
    totalDmg = Math.max(0, Math.floor(totalDmg * aidResult.dmgMult));
    totalPetri = Math.max(0, Math.floor(totalPetri * aidResult.petriMult));
    if (aidResult.bonusDmg > 0) {
      // Extra damage shortens fight — just narrate it
    }
    var aidName = L(npcAid.name, npcAid.nameEn);
    queue.push({ tag: L('援助','ALLY'), color: 'tag-info',
      text: npcAid.text,
      delay: 2200, pending: true });
    // Heal effect if present
    if (aidResult.healHp > 0) {
      var healAmt = aidResult.healHp;
      queue.push({ tag: L('恢復','Heal'), color: 'tag-item',
        text: L(aidName + ' 為你治療了 ' + healAmt + ' HP。',
                aidName + ' heals you for ' + healAmt + ' HP.'),
        delay: 1400,
        sfx: 'item',
        effect: function() { changeHp(healAmt); renderStatus(); }
      });
    }
  }

  // Result + apply effects
  var mXp = mXpBase + rng(0, 2);
  queue.push({ tag: L('結果','Result'), color: 'tag-item',
    text: L('勝利！ HP -' + totalDmg + '  石化 +' + totalPetri + '%  經驗 +' + mXp
            + (npcAid ? '  (' + L(npcAid.name, npcAid.nameEn) + L('的援助！', '\'s aid!') + ')' : ''),
            'Victory! HP -' + totalDmg + '  Petri +' + totalPetri + '%  XP +' + mXp
            + (npcAid ? '  (' + L(npcAid.name, npcAid.nameEn) + L('的援助！', '\'s aid!') + ')' : '')),
    delay: 2000,
    pending: true,
    sfx: 'pass',
    effect: function() {
      changeHp(-totalDmg);
      if (totalPetri > 0) { changePetri(totalPetri); sfx.petri(); }
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
      // Play sound effect if specified
      if (step.sfx) {
        try { sfx[step.sfx](); } catch(e) {}
      }
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
