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

var R2_MONSTERS = [
  { name: '石化巨蟻', nameEn: 'Petrified Giant Ant', hp: 30, atkMin: 6, atkMax: 12, petriDmg: 3, xp: 16,
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
  { name: '碎岩傀儡', nameEn: 'Rubble Golem', hp: 40, atkMin: 8, atkMax: 13, petriDmg: 3, xp: 18,
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
  { name: '鏽蝕機甲殘骸', nameEn: 'Rusted Mech Wraith', hp: 35, atkMin: 7, atkMax: 15, petriDmg: 4, xp: 20,
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
  { name: '深層石化蟒', nameEn: 'Deep Stone Serpent', hp: 38, atkMin: 9, atkMax: 16, petriDmg: 5, xp: 22,
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
];

var R3_MONSTERS = [
  { name: '河蛭巨蟲', nameEn: 'River Leech Worm', hp: 35, atkMin: 8, atkMax: 14, petriDmg: 4, xp: 22,
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
  { name: '鏽鱗魚人', nameEn: 'Rust-Scale Fishman', hp: 42, atkMin: 9, atkMax: 16, petriDmg: 4, xp: 25,
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
  { name: '石化水母群', nameEn: 'Petrified Jellyfish Swarm', hp: 28, atkMin: 5, atkMax: 18, petriDmg: 6, xp: 24,
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
  { name: '淵底鱷龍', nameEn: 'Abyss Crocodilian', hp: 50, atkMin: 12, atkMax: 20, petriDmg: 5, xp: 30,
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
];

// Region-aware helpers
var PATROL_TEXTS = R0_PATROL_TEXTS; // kept for backwards compat
function getPatrolMonsters() { return state.region >= 3 ? R3_MONSTERS : state.region >= 2 ? R2_MONSTERS : state.region >= 1 ? R1_MONSTERS : R0_MONSTERS; }
function getPatrolTexts() { return state.region >= 3 ? R3_PATROL_TEXTS : state.region >= 2 ? R2_PATROL_TEXTS : state.region >= 1 ? R1_PATROL_TEXTS : R0_PATROL_TEXTS; }
function getPatrolReturnNode() { return state.region >= 3 ? 'r3_look' : state.region >= 2 ? 'r2_look' : state.region >= 1 ? 'r1_look' : 'r0_look'; }

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
