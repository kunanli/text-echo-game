// ══ NPC Affinity & Item Rarity System ══
// Computes NPC affinity from existing story flags.
// Provides gift-claim flow when affinity is maxed.

// ── Item Rarity Tiers ──
// common=白, uncommon=綠, rare=藍, epic=紫, legendary=金
var ITEM_RARITY = {
  // Region 0
  '碎石匕首': 'common',     'Stone Dagger': 'common',
  '黑麵包': 'common',       'Black Bread': 'common',
  '微光石': 'common',       'Glowstone': 'common',
  '石化水瓶': 'common',     'Petri-Water Flask': 'common',
  '乾燥草藥': 'common',     'Dried Herbs': 'common',
  '粗繩': 'common',         'Rope': 'common',
  '石化結晶': 'uncommon',   'Petri Crystal': 'uncommon',
  // Region 1
  '鍛造鐵錘': 'uncommon',   'Forged Hammer': 'uncommon',
  '迴廊地圖': 'common',     'Corridor Map': 'common',
  '純淨石化結晶': 'rare',   'Pure Petri Crystal': 'rare',
  '灰石盾': 'uncommon',     'Greystone Shield': 'uncommon',
  '守衛核心石': 'rare',     'Guardian Core Stone': 'rare',
  '抗石化護符': 'rare',     'Anti-Petri Amulet': 'rare',
  '礦工烈酒': 'common',     "Miner's Spirits": 'common',
  '礦工口糧': 'common',     "Miner's Ration": 'common',
  '皮甲碎片': 'uncommon',   'Leather Scrap': 'uncommon',
  '淨化藥劑': 'uncommon',   'Purification Elixir': 'uncommon',
  '石鱗護腕': 'rare',       'Stone-Scale Bracer': 'rare',
  '黑曜石短刀': 'epic',     'Obsidian Knife': 'epic',
  '螢的筆記抄本': 'uncommon', "Ying's Note Copy": 'uncommon',
  '蜥蜴鱗片': 'uncommon',   'Lizard Scale': 'uncommon',
  // Region 2
  '強化鶴嘴鋤': 'uncommon', 'Reinforced Pickaxe': 'uncommon',
  '抗石化藥膏': 'uncommon', 'Anti-Petri Salve': 'uncommon',
  '高純度石化結晶': 'rare', 'High-Purity Petri Crystal': 'rare',
  '工程師筆記': 'rare',     "Engineer's Notebook": 'rare',
  '機甲控制鍵': 'epic',     'Mech Control Key': 'epic',
  '精鍛戰鋤': 'rare',       'Masterwork War Pick': 'rare',
  '濃縮淨化液': 'rare',     'Concentrated Purifier': 'rare',
  '螢的護身符': 'epic',     "Ying's Charm": 'epic',
  '石化抑制劑': 'rare',     'Petri Suppressant': 'rare',
  // Revival stones
  '復活石': 'rare',         'Revival Stone': 'rare',
  // Region 3
  '河城地圖': 'common',     'River City Map': 'common',
  '河城草藥包': 'uncommon', 'River City Herb Pack': 'uncommon',
  '河城淨化液': 'rare',     'River City Purifier': 'rare',
  // NPC Gift items
  '老周的護石': 'epic',           "Zhou's Ward Stone": 'epic',
  '灰鶴的祕藏匕首': 'epic',      "Grey Crane's Hidden Blade": 'epic',
  '螢的手繪護符': 'legendary',    "Ying's Hand-drawn Charm": 'legendary',
  '鐵霜的指揮佩刀': 'rare',      "Iron Frost's Command Saber": 'rare',
  '精鍛強化甲': 'rare',          'Master-forged Armor': 'rare',
  '清露的特製藥劑': 'rare',      "Dew's Special Elixir": 'rare',
  '銅鐘的議事令牌': 'epic',      "Bronze Bell's Council Token": 'epic',
};

function getItemRarity(itemName) {
  return ITEM_RARITY[itemName] || 'common';
}

// ── NPC Definitions ──
var NPC_DEFS = {
  zhou: {
    name: '老周', nameEn: 'Old Zhou',
    maxAffinity: 5,
    affinityFlags: [
      'r1SurvivorMet',
      'r1SurvivorFed',
      'r1SurvivorFullTrust',
      'r2ZhouTrace',
      'r3ZhouMet'
    ],
    giftFlag: 'giftZhou',
    gift:     { zh: '老周的護石', en: "Zhou's Ward Stone" },
    giftDesc: {
      zh: '老周從懷中取出一塊被體溫焐暖的石頭，表面隱約泛著微光。\n「這是我入礦三十年的護身石……它沒能護住我的腿，但至少護住了我的命。」\n他用力把石頭塞進你手裡：「帶著它，比我有用。」',
      en: 'Old Zhou pulls a warm stone from his chest. Its surface glimmers faintly.\n"This has been my ward stone for thirty years in the mines... It couldn\'t save my legs, but it saved my life."\nHe presses it firmly into your hands: "Take it. It\'ll serve you better."'
    },
    giftEffect: function() { changePetri(-10); changeStat('wil', 1); }
  },
  crane: {
    name: '灰鶴', nameEn: 'Grey Crane',
    maxAffinity: 5,
    affinityFlags: [
      'r1WandererMet',
      'r1WandererLore',
      'r2CraneMet',
      'r2CraneLore',
      'r3CraneTestimony'
    ],
    giftFlag: 'giftCrane',
    gift:     { zh: '灰鶴的祕藏匕首', en: "Grey Crane's Hidden Blade" },
    giftDesc: {
      zh: '灰鶴從靴筒中抽出一把短匕，刀身漆黑，邊緣泛著冷光。\n「這把刀跟了我很多年。在深淵裡……有把好刀比什麼都重要。」\n她頓了頓：「別弄丟了，我可沒第二把。」',
      en: 'Grey Crane draws a short blade from her boot — dark steel with a cold gleam along its edge.\n"This knife has been with me for years. Down here... a good blade matters more than anything."\nShe pauses: "Don\'t lose it. I don\'t have a spare."'
    },
    giftEffect: function() { state.flags.weaponDmg = (state.flags.weaponDmg || 0) + 4; changeStat('agi', 1); }
  },
  ying: {
    name: '螢', nameEn: 'Ying',
    maxAffinity: 5,
    affinityFlags: [
      'r1YingTrustUp',
      'r1YingCompanion',
      'r2YingNight',
      'r2YingLore4',
      'r3YingInn'
    ],
    giftFlag: 'giftYing',
    gift:     { zh: '螢的手繪護符', en: "Ying's Hand-drawn Charm" },
    giftDesc: {
      zh: '螢低著頭，把一張折疊的紙遞給你。展開一看——上面畫著一個精巧的護符陣，邊角是你的肖像素描。\n「這是我查了所有古籍……自己設計的抗石化紋樣。」\n她的耳根泛紅：「不、不是什麼特別的意思。只是……你要是變成石頭了，我的紀錄就沒人可寫了。」',
      en: 'Ying holds out a folded paper, head bowed. You unfold it — an intricate ward circle, with a small sketch of you in the corner.\n"I researched every old text... and designed this anti-petrification pattern myself."\nHer ears turn red: "It\'s not — it doesn\'t mean anything special. It\'s just... if you turn to stone, I\'ll have no one left to write about."'
    },
    giftEffect: function() { state.maxHp += 20; state.hp = Math.min(state.hp + 20, state.maxHp); changePetri(-15); }
  },
  frost: {
    name: '鐵霜', nameEn: 'Iron Frost',
    maxAffinity: 3,
    affinityFlags: [
      'r2ChiefTalked',
      'r2BossDefeated',
      'r3BellAlliance'
    ],
    giftFlag: 'giftFrost',
    gift:     { zh: '鐵霜的指揮佩刀', en: "Iron Frost's Command Saber" },
    giftDesc: {
      zh: '鐵霜解下腰間的佩刀，用石化的左手托著遞給你。\n「這刀跟著我指揮了無數次巡邏……現在你比我更需要它。」\n他的目光裡閃過一絲不捨，但很快被堅定取代。',
      en: 'Iron Frost unbuckles the saber at his waist, offering it on his petrified left hand.\n"This blade has led countless patrols... Now you need it more than I do."\nA flash of reluctance crosses his eyes, quickly replaced by resolve.'
    },
    giftEffect: function() { state.flags.weaponDmg = (state.flags.weaponDmg || 0) + 3; changeStat('str', 1); }
  },
  cast: {
    name: '老鑄', nameEn: 'Old Cast',
    maxAffinity: 3,
    affinityFlags: [
      'r2CampVisited',
      'r2PickaxeUpgraded',
      'r2ArmorUpgraded'
    ],
    giftFlag: 'giftCast',
    gift:     { zh: '精鍛強化甲', en: 'Master-forged Armor' },
    giftDesc: {
      zh: '老鑄默默從工作台下拖出一件護甲，金屬表面帶著精密的鍛打紋路。\n「……最後一件了。用最好的料。」\n他用石化的手指輕敲甲面，發出清脆的聲響。連他自己似乎都對這件作品很滿意。',
      en: 'Old Cast silently pulls a suit of armor from under his workbench. The metal surface bears precise forging patterns.\n"...Last one. Best materials."\nHe taps the surface with petrified fingers — a clear ring. Even he seems satisfied with this piece.'
    },
    giftEffect: function() { state.maxHp += 10; state.hp = Math.min(state.hp + 10, state.maxHp); }
  },
  dew: {
    name: '清露', nameEn: 'Dew',
    maxAffinity: 3,
    affinityFlags: [
      'r2CampVisited',
      'r2MedicHealed',
      'r2MedicElixir'
    ],
    giftFlag: 'giftDew',
    gift:     { zh: '清露的特製藥劑', en: "Dew's Special Elixir" },
    giftDesc: {
      zh: '清露從面具後露出難得的笑容，把一瓶深藍色液體遞給你。\n「這是我私藏的配方……用了最稀有的材料。」\n她猶豫了一下：「本來是留給自己的。但你撐到現在……比我更值得活下去。」',
      en: 'Dew shows a rare smile behind her mask, offering a deep blue vial.\n"This is my private formula... made with the rarest ingredients."\nShe hesitates: "I was saving it for myself. But you\'ve lasted this long... you deserve to live more than I do."'
    },
    giftEffect: function() { state.hp = state.maxHp; changePetri(-20); }
  },
  bell: {
    name: '銅鐘', nameEn: 'Bronze Bell',
    maxAffinity: 3,
    affinityFlags: [
      'r3BellMet',
      'r3BellAlliance',
      'r3BellQuest'
    ],
    giftFlag: 'giftBell',
    gift:     { zh: '銅鐘的議事令牌', en: "Bronze Bell's Council Token" },
    giftDesc: {
      zh: '銅鐘取下脖子上的金屬令牌，上面刻著精密的花紋和議事廳的徽記。\n「持有這個令牌的人，在河城擁有不受質疑的通行權。」\n她的眼神嚴肅：「好好用它。我把自己的信譽交給你了。」',
      en: 'Bronze Bell removes a metal token from her neck, engraved with intricate patterns and the Council\'s crest.\n"The bearer of this token holds unquestioned passage in River City."\nHer gaze is solemn: "Use it well. I\'m entrusting you with my reputation."'
    },
    giftEffect: function() { changeStat('wil', 2); }
  }
};

var NPC_IDS = ['zhou', 'crane', 'ying', 'frost', 'cast', 'dew', 'bell'];

// ── Affinity Computation ──
function getNpcAffinity(id) {
  var def = NPC_DEFS[id];
  if (!def) return 0;
  var count = 0;
  for (var i = 0; i < def.affinityFlags.length; i++) {
    if (state.flags[def.affinityFlags[i]]) count++;
  }
  return Math.min(count, def.maxAffinity);
}

function getNpcMaxAffinity(id) {
  var def = NPC_DEFS[id];
  return def ? def.maxAffinity : 0;
}

function isAffinityMaxed(id) {
  return getNpcAffinity(id) >= getNpcMaxAffinity(id);
}

function isGiftAvailable(id) {
  return isAffinityMaxed(id) && !state.flags[NPC_DEFS[id].giftFlag];
}

function isGiftClaimed(id) {
  return !!state.flags[NPC_DEFS[id].giftFlag];
}

// Get the NPC with highest affinity (>0). Returns {id, name, nameEn, affinity, max} or null.
function getTopNpc() {
  var best = null;
  var bestScore = 0;
  for (var i = 0; i < NPC_IDS.length; i++) {
    var id = NPC_IDS[i];
    var aff = getNpcAffinity(id);
    if (aff > bestScore) {
      bestScore = aff;
      best = id;
    }
  }
  if (!best) return null;
  var def = NPC_DEFS[best];
  return {
    id: best,
    name: def.name,
    nameEn: def.nameEn,
    affinity: bestScore,
    max: def.maxAffinity
  };
}

// Get all NPCs with affinity > 0, sorted descending
function getAllNpcAffinity() {
  var list = [];
  for (var i = 0; i < NPC_IDS.length; i++) {
    var id = NPC_IDS[i];
    var aff = getNpcAffinity(id);
    if (aff > 0) {
      var def = NPC_DEFS[id];
      list.push({ id: id, name: def.name, nameEn: def.nameEn, affinity: aff, max: def.maxAffinity });
    }
  }
  list.sort(function(a, b) { return b.affinity - a.affinity; });
  return list;
}

// ── Gift Claim Flow ──
function claimNpcGift(id) {
  var def = NPC_DEFS[id];
  if (!def || !isGiftAvailable(id)) return;

  state.flags[def.giftFlag] = true;
  var itemName = state.lang === 'en' ? def.gift.en : def.gift.zh;
  addItem(itemName);
  if (def.giftEffect) def.giftEffect();

  var npcLabel = state.lang === 'en' ? def.nameEn : def.name;
  var title = L('好 感 度 獎 勵', 'AFFINITY REWARD');
  var text = '<pre class="ascii-art gold">'
    + '\n  ╔══════════════════════════════════════╗'
    + '\n  ║                                      ║'
    + '\n  ║       ♦  ' + title + '  ♦        ║'
    + '\n  ║                                      ║'
    + '\n  ╚══════════════════════════════════════╝'
    + '\n</pre>'
    + '<div class="gift-dialogue">'
    + '<div class="gift-npc-name">' + npcLabel + '</div>'
    + '<div class="gift-text">' + L(def.giftDesc.zh, def.giftDesc.en) + '</div>'
    + '<div class="gift-item rarity-' + getItemRarity(itemName) + '">'
    + L('獲得：', 'Acquired: ') + '<b>' + itemName + '</b>'
    + '</div>'
    + '</div>';

  renderScene(text, [
    { text: L('收下（繼續）', 'Accept (Continue)'), action: function() {
      renderStatus();
      loadNode(state.node);
    }}
  ]);
  saveGame();
}

// ══════════════════════════════════════════
//  NPC Patrol Aid System
// ══════════════════════════════════════════
// Each NPC can appear in certain regions to assist during patrol.
// Aid type and text vary per NPC.

var NPC_PATROL_AID = {
  zhou: {
    regions: [1, 2, 3],
    minAffinity: 2,
    // Reduces damage taken
    apply: function(result) { result.dmgMult = 0.5; },
    text: [
      { zh: '老周的聲音從暗處傳來：「小心，那東西喜歡從右邊偷襲！」你及時閃開了幾次攻擊。',
        en: 'Old Zhou\'s voice echoes from the dark: "Watch out, it likes to flank from the right!" You dodge several attacks in time.' },
      { zh: '你聽見拐杖敲擊地面的聲音——老周蹣跚地趕來，用他的採礦經驗幫你判斷了敵人的弱點。',
        en: 'You hear a cane tapping the ground — Zhou hobbles over, using his mining experience to spot the enemy\'s weakness.' },
    ]
  },
  crane: {
    regions: [1, 2, 3],
    minAffinity: 2,
    // Adds bonus damage (kills faster, fewer rounds)
    apply: function(result) { result.bonusDmg = 8 + rng(0, 6); },
    text: [
      { zh: '一道黑影掠過——灰鶴從側面切入，短刀在敵人身上劃出一道深痕，隨即消失在暗處。「別發呆，繼續打。」',
        en: 'A shadow flickers — Grey Crane darts in from the side, her blade cutting deep, then vanishes. "Don\'t space out. Keep fighting."' },
      { zh: '灰鶴不知何時出現在你身後，一腳踢飛了撲向你的敵人：「又欠我一頓酒。」',
        en: 'Grey Crane appears behind you, kicking the lunging enemy aside: "You owe me another drink."' },
    ]
  },
  ying: {
    regions: [1, 2, 3],
    minAffinity: 2,
    // Reduces petrification damage
    apply: function(result) { result.petriMult = 0; },
    text: [
      { zh: '螢從背包裡翻出一片浸了藥液的布，快速蒙住你的口鼻：「石化粒子太濃了，先擋一下！」',
        en: 'Ying pulls a medicated cloth from her pack and covers your face: "Petri-particles are too dense — use this!"' },
      { zh: '「等一下！」螢擋在你前面，在空中展開一張寫滿符文的紙——石化能量被短暫地偏轉了。\n她氣喘吁吁：「我的護符……有效的。」',
        en: '"Wait!" Ying steps in front of you, unfolding a rune-covered paper — petrification energy deflects briefly.\nShe pants: "My ward... it works."' },
    ]
  },
  frost: {
    regions: [2],
    minAffinity: 2,
    // Heavy bonus damage + damage reduction
    apply: function(result) { result.bonusDmg = 12 + rng(0, 4); result.dmgMult = 0.7; },
    text: [
      { zh: '鐵霜帶著巡邏隊趕到，石化的左臂揮出沉重的一擊：「這裡是我的地盤！」他的隊員掩護了你的側翼。',
        en: 'Iron Frost arrives with a patrol squad, his petrified arm dealing a crushing blow: "This is MY territory!" His men cover your flanks.' },
    ]
  },
  cast: {
    regions: [2],
    minAffinity: 2,
    // Bonus weapon damage
    apply: function(result) { result.bonusDmg = 6 + rng(0, 4); },
    text: [
      { zh: '一把鋒利的投擲斧從旁邊的通道飛來，深深嵌入敵人體內。你轉頭一看——老鑄站在角落，面無表情地點了點頭。',
        en: 'A sharp throwing axe flies from a side passage, embedding deep in the enemy. You look — Old Cast stands in the corner, nodding expressionlessly.' },
    ]
  },
  dew: {
    regions: [2],
    minAffinity: 2,
    // Heals some HP, negates petri
    apply: function(result) { result.healHp = 15 + rng(0, 10); result.petriMult = 0.3; },
    text: [
      { zh: '戰鬥結束後，清露快步走來，手上拿著急救包：「坐下，讓我看看。」她手法熟練地處理了你的傷口，又塗上了抗石化藥膏。',
        en: 'After the fight, Dew hurries over with a first aid kit: "Sit down, let me look." She treats your wounds expertly and applies anti-petri salve.' },
    ]
  },
  bell: {
    regions: [3],
    minAffinity: 2,
    // Damage reduction + petri reduction
    apply: function(result) { result.dmgMult = 0.6; result.petriMult = 0.5; },
    text: [
      { zh: '幾名持盾的議事廳衛兵出現在你身旁：「銅鐘議員的命令——協助深淵來客。」他們用盾牆擋住了大部分攻擊。',
        en: 'Council guards with shields appear at your side: "By order of Councilor Bronze Bell — assist the Abyss visitor." Their shield wall blocks most attacks.' },
    ]
  }
};

// Roll for NPC patrol aid. Returns null or {id, name, nameEn, text, apply}.
// Chance scales with affinity: (affinity / max) * 30%
function rollPatrolAid() {
  var candidates = [];
  for (var i = 0; i < NPC_IDS.length; i++) {
    var id = NPC_IDS[i];
    var aid = NPC_PATROL_AID[id];
    if (!aid) continue;
    if (aid.regions.indexOf(state.region) === -1) continue;
    var aff = getNpcAffinity(id);
    if (aff < aid.minAffinity) continue;
    candidates.push({ id: id, affinity: aff, max: getNpcMaxAffinity(id), aid: aid });
  }
  if (candidates.length === 0) return null;

  // Pick highest affinity candidate (ties broken randomly)
  candidates.sort(function(a, b) { return b.affinity - a.affinity || (Math.random() - 0.5); });
  var pick = candidates[0];

  // Chance: (affinity / max) * 30%, minimum 10% at minAffinity
  var chance = (pick.affinity / pick.max) * 0.30;
  if (Math.random() > chance) return null;

  var def = NPC_DEFS[pick.id];
  var texts = pick.aid.text;
  var t = texts[rng(0, texts.length - 1)];
  return {
    id: pick.id,
    name: def.name,
    nameEn: def.nameEn,
    text: L(t.zh, t.en),
    apply: pick.aid.apply
  };
}
