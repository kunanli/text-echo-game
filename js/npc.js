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
