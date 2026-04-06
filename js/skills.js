// ══ Combat Skill System (NG+ Only) ══
// Stellar Blade-style skill unlock — probabilistic triggers during combat.
// Skills are "past-life combat memories" awakened by petrification energy.
// Only active when state.flags.ngPlus === true (2nd playthrough+).

var skillSystem = (function() {

  // ── Skill Definitions ──
  var SKILLS = {
    // Tier 1 — unlockable after 3 combats
    counter:   { tier: 1, zh: '石膚反擊', en: 'Stone Counter',   type: 'passive', trigger: 'hurt',    baseRate: 0.15, pity: 8,  reqCombats: 3, reqLevel: 1, reqSkills: 0,
      descZh: '被攻擊後自動反擊，造成 STR×0.8 傷害', descEn: 'Auto-counter after being hit, dealing STR×0.8 damage',
      unlockZh: '你的身體記住了這種痛——石化的皮膚在被擊中的瞬間自動回彈！', unlockEn: 'Your body remembers the pain — petrified skin rebounds the instant it\'s struck!' },
    charge:    { tier: 1, zh: '石錘蓄力', en: 'Stone Charge',    type: 'active',  trigger: 'crit',    baseRate: 0.15, pity: 8,  reqCombats: 3, reqLevel: 1, reqSkills: 0,
      descZh: '消耗本回合行動，下回合攻擊 3x', descEn: 'Spend this turn charging; next attack deals 3x',
      unlockZh: '力量在你的拳頭裡凝聚——石化的能量不再是詛咒，而是武器！', unlockEn: 'Power coalesces in your fists — petrification is no longer a curse, but a weapon!' },
    shield:    { tier: 1, zh: '石化護壁', en: 'Stone Shield',    type: 'passive', trigger: 'lowHp',   baseRate: 0.12, pity: 10, reqCombats: 3, reqLevel: 1, reqSkills: 0,
      descZh: '下一次受到的傷害減半', descEn: 'Next incoming damage is halved',
      unlockZh: '石化的皮膚硬化成一面盾——你的身體在保護你！', unlockEn: 'Petrified skin hardens into a shield — your body is protecting you!' },

    // Tier 2 — requires level >= 3 and >= 2 tier-1 skills
    combo:     { tier: 2, zh: '裂石連擊', en: 'Rift Combo',      type: 'active',  trigger: 'crit',    baseRate: 0.15, pity: 10, reqCombats: 8, reqLevel: 3, reqSkills: 2,
      descZh: '一回合攻擊 2 次（第二次 60% 傷害）', descEn: 'Attack twice in one turn (2nd hit at 60%)',
      unlockZh: '你的手臂記得這個節奏——兩次揮擊，一氣呵成，像裂開石壁一樣！', unlockEn: 'Your arm remembers the rhythm — two strikes in one breath, splitting stone!' },
    resonance: { tier: 2, zh: '石脈共振', en: 'Vein Resonance',  type: 'active',  trigger: 'commune', baseRate: 0.10, pity: 12, reqCombats: 8, reqLevel: 3, reqSkills: 2,
      descZh: '利用石化能量攻擊，造成 WIL×1.5 傷害', descEn: 'Channel petrification into an attack, dealing WIL×1.5 damage',
      unlockZh: '你感受到了石脈的脈動——它不只是詛咒，也是力量的源頭！', unlockEn: 'You feel the pulse of the stone veins — not just a curse, but a source of power!' },
    pierce:    { tier: 2, zh: '石眼看破', en: 'Stone Pierce',    type: 'active',  trigger: 'observe', baseRate: 0.10, pity: 12, reqCombats: 8, reqLevel: 3, reqSkills: 2,
      descZh: '標記弱點，本場所有攻擊 +30%', descEn: 'Mark weakness; all attacks +30% this fight',
      unlockZh: '你的眼睛——石化的餘痕讓你看見了肉眼看不見的裂縫！', unlockEn: 'Your eyes — the residue of petrification lets you see cracks invisible to the naked eye!' },
    absorb:    { tier: 2, zh: '石化吸收', en: 'Petri Absorb',    type: 'passive', trigger: 'hurt',    baseRate: 0.12, pity: 12, reqCombats: 8, reqLevel: 3, reqSkills: 2,
      descZh: '將石化傷害轉為 HP 回復', descEn: 'Convert petrification damage into HP recovery',
      unlockZh: '石化的能量流入你的身體——不是侵蝕，而是滋養！', unlockEn: 'Petrification energy flows in — not eroding, but nourishing!' },

    // Tier 3 — requires level >= 5 and >= 4 skills total
    burst:     { tier: 3, zh: '深淵脈動', en: 'Abyss Pulse',     type: 'active',  trigger: 'kill',    baseRate: 0.08, pity: 15, reqCombats: 15, reqLevel: 5, reqSkills: 4,
      descZh: '消耗 10% 石化度，造成 (石化度×2) 傷害', descEn: 'Consume 10% petri, deal (petri×2) damage',
      unlockZh: '深淵的脈動在你體內共鳴——石化不是終點，是力量的代價！', unlockEn: 'The abyss pulses within you — petrification isn\'t the end, it\'s the price of power!' },
    undying:   { tier: 3, zh: '石心不屈', en: 'Stone Resolve',   type: 'passive', trigger: 'lowHp',   baseRate: 0.12, pity: 12, reqCombats: 15, reqLevel: 5, reqSkills: 4,
      descZh: 'HP 歸零時恢復 20% HP（每場 1 次）', descEn: 'Revive with 20% HP when HP hits 0 (once per fight)',
      unlockZh: '你拒絕倒下——石化的意志比死亡更頑強！', unlockEn: 'You refuse to fall — a will harder than stone, stronger than death!' },
    omnisight: { tier: 3, zh: '石眼全觀', en: 'Omnisight',       type: 'active',  trigger: 'observe', baseRate: 0.10, pity: 15, reqCombats: 15, reqLevel: 5, reqSkills: 4,
      descZh: '觀察 + 攻擊同時進行（2x 傷害）', descEn: 'Observe + Attack in one turn (2x damage)',
      unlockZh: '時間在你眼中放慢——觀察與攻擊，同時完成！', unlockEn: 'Time slows before your eyes — observe and strike, simultaneously!' },
  };

  var SKILL_IDS = Object.keys(SKILLS);
  var TOTAL_SKILLS = SKILL_IDS.length;

  // ── Helpers ──
  function hasSkill(id) {
    return state.skills && state.skills.indexOf(id) !== -1;
  }

  function skillCount() {
    return state.skills ? state.skills.length : 0;
  }

  function tier1Count() {
    var c = 0;
    if (!state.skills) return 0;
    for (var i = 0; i < state.skills.length; i++) {
      if (SKILLS[state.skills[i]] && SKILLS[state.skills[i]].tier === 1) c++;
    }
    return c;
  }

  function isNgPlus() {
    return !!(state.flags && state.flags.ngPlus);
  }

  function getSkillDef(id) {
    return SKILLS[id] || null;
  }

  // ── Cooldown Management ──
  // Cooldowns are per-combat, reset at combat start
  var cooldowns = {};

  function resetCooldowns() {
    cooldowns = {};
  }

  function isOnCooldown(id) {
    return !!cooldowns[id];
  }

  function setCooldown(id, turns) {
    cooldowns[id] = turns || 1;
  }

  function tickCooldowns() {
    for (var k in cooldowns) {
      if (cooldowns.hasOwnProperty(k) && cooldowns[k] > 0) {
        cooldowns[k]--;
        if (cooldowns[k] <= 0) delete cooldowns[k];
      }
    }
  }

  // ── Unlock Logic ──

  function meetsPrereqs(id) {
    var s = SKILLS[id];
    if (!s) return false;
    if (hasSkill(id)) return false;
    var combats = state.flags._combatCount || 0;
    if (combats < s.reqCombats) return false;
    if (state.level < s.reqLevel) return false;
    if (s.tier === 2 && tier1Count() < 2) return false;
    if (s.tier === 3 && skillCount() < s.reqSkills) return false;
    return true;
  }

  // Calculate unlock probability for a skill given trigger type
  function calcRate(id, triggerType) {
    var s = SKILLS[id];
    if (s.trigger !== triggerType) return 0;
    var rate = s.baseRate;
    // Level bonus
    rate += state.level * 0.02;
    // Petri penalty: high petri reduces most skills, but boosts burst/absorb
    var pen = (typeof petriPenalty === 'function') ? petriPenalty() : { stage: 0 };
    if (pen.stage >= 3) {
      if (id === 'burst' || id === 'absorb') {
        rate *= 1.3; // easier at high petri
      } else {
        rate *= 0.7; // harder at high petri
      }
    }
    return Math.min(rate, 0.80); // cap at 80%
  }

  // Check and potentially unlock a skill. Returns skill id if unlocked, null otherwise.
  function checkUnlock(triggerType) {
    if (!isNgPlus()) return null;

    // Init pity tracker if needed
    if (!state.flags._skillPity) state.flags._skillPity = {};

    // Find candidates matching this trigger
    var candidates = [];
    for (var i = 0; i < SKILL_IDS.length; i++) {
      var id = SKILL_IDS[i];
      if (!meetsPrereqs(id)) continue;
      var rate = calcRate(id, triggerType);
      if (rate <= 0) continue;
      var pityCount = state.flags._skillPity[id] || 0;
      candidates.push({ id: id, rate: rate, pity: pityCount });
    }

    if (candidates.length === 0) return null;

    // Sort by pity (closest to guaranteed first)
    candidates.sort(function(a, b) {
      var pityA = a.pity / SKILLS[a.id].pity;
      var pityB = b.pity / SKILLS[b.id].pity;
      return pityB - pityA;
    });

    // Only check the top candidate per trigger
    var pick = candidates[0];
    var s = SKILLS[pick.id];

    if (Math.random() < pick.rate || pick.pity >= s.pity) {
      // Unlock!
      doUnlock(pick.id);
      return pick.id;
    } else {
      // Increment pity counter
      state.flags._skillPity[pick.id] = (state.flags._skillPity[pick.id] || 0) + 1;
      return null;
    }
  }

  function doUnlock(id) {
    if (!state.skills) state.skills = [];
    state.skills.push(id);
    // Clear pity
    if (state.flags._skillPity) delete state.flags._skillPity[id];
    // Save to globalStats for cross-run persistence
    if (typeof globalStats !== 'undefined') {
      if (!globalStats.unlockedSkills) globalStats.unlockedSkills = [];
      if (globalStats.unlockedSkills.indexOf(id) === -1) {
        globalStats.unlockedSkills.push(id);
      }
      if (typeof saveGlobalStats === 'function') saveGlobalStats();
    }
    // Achievement hook
    if (typeof checkAchievement === 'function') {
      checkAchievement('first_skill');
      if (skillCount() >= TOTAL_SKILLS) checkAchievement('all_skills');
    }
  }

  // Restore skills from globalStats at NG+ start
  function restoreFromGlobal() {
    if (typeof globalStats !== 'undefined' && globalStats.unlockedSkills && globalStats.unlockedSkills.length > 0) {
      if (!state.skills) state.skills = [];
      for (var i = 0; i < globalStats.unlockedSkills.length; i++) {
        var id = globalStats.unlockedSkills[i];
        if (state.skills.indexOf(id) === -1 && SKILLS[id]) {
          state.skills.push(id);
        }
      }
    }
  }

  // ── Unlock Presentation ──
  // Returns an HTML string for the combat log unlock announcement
  function unlockHtml(id) {
    var s = SKILLS[id];
    var name = L(s.zh, s.en);
    var desc = L(s.unlockZh, s.unlockEn);
    return '<div class="skill-unlock-wrap">'
      + '<div class="skill-unlock-banner">'
      + '<span class="skill-unlock-icon">⚡</span> '
      + '<span class="skill-unlock-name">' + name + '</span>'
      + ' <span class="skill-unlock-icon">⚡</span>'
      + '</div>'
      + '<div class="skill-unlock-desc">' + desc + '</div>'
      + '</div>';
  }

  // ── Active Skill Actions (called from combat.js) ──

  // Charge: spend this turn, next attack 3x
  function doCharge() {
    setCooldown('charge', 3);
    return {
      chargeActive: true,
      log: '<div class="combat-log combat-log-skill">'
        + '<span class="cl-tag cl-skill">' + L('【蓄力】', '[CHARGE]') + '</span> '
        + L('你凝聚石化的能量，為下一擊蓄力——', 'You focus petrification energy, charging for the next blow —')
        + ' <span class="cl-observe">' + L('下次攻擊 3x 傷害', 'Next attack deals 3x damage') + '</span>'
        + '</div>'
    };
  }

  // Resonance: WIL-based attack
  function doResonance() {
    setCooldown('resonance', 2);
    var effWil = (typeof effectiveStat === 'function') ? effectiveStat('wil') : state.wil;
    var dmg = Math.floor(effWil * 1.5);
    return {
      damage: dmg,
      log: '<div class="combat-log combat-log-skill">'
        + '<span class="cl-tag cl-skill">' + L('【共振】', '[RESONANCE]') + '</span> '
        + L('石脈的能量從你體內爆發，造成 ' + dmg + ' 點傷害！', 'Vein energy erupts from within, dealing ' + dmg + ' damage!')
        + '</div>'
    };
  }

  // Burst: consume 10% petri, deal petri*2 damage
  function doBurst() {
    setCooldown('burst', 999); // once per fight
    var dmg = Math.floor(state.petri * 2);
    changePetri(-10);
    return {
      damage: dmg,
      log: '<div class="combat-log combat-log-skill">'
        + '<span class="cl-tag cl-skill">' + L('【脈動】', '[PULSE]') + '</span> '
        + L('深淵的力量在你體內炸裂——消耗 10% 石化度，造成 ' + dmg + ' 點傷害！', 'Abyssal power erupts within — consume 10% petri, deal ' + dmg + ' damage!')
        + '</div>'
    };
  }

  // Pierce: mark weakness, +30% all attacks this fight
  function doPierce() {
    setCooldown('pierce', 999); // once per fight
    return {
      pierceActive: true,
      log: '<div class="combat-log combat-log-skill">'
        + '<span class="cl-tag cl-skill">' + L('【看破】', '[PIERCE]') + '</span> '
        + L('你看穿了敵人的弱點——本場所有攻擊 +30%！', 'You see through the enemy\'s weakness — all attacks +30% this fight!')
        + '</div>'
    };
  }

  // Combo: attack twice
  function doCombo() {
    setCooldown('combo', 3);
    // Returns flag; actual damage computed in combat.js
    return {
      comboActive: true,
      log: '<div class="combat-log combat-log-skill">'
        + '<span class="cl-tag cl-skill">' + L('【連擊】', '[COMBO]') + '</span> '
        + L('裂石連擊——兩次揮擊，一氣呵成！', 'Rift combo — two strikes in one breath!')
        + '</div>'
    };
  }

  // Omnisight: observe + attack in one turn
  function doOmnisight() {
    setCooldown('omnisight', 5);
    return {
      omnisightActive: true,
      log: '<div class="combat-log combat-log-skill">'
        + '<span class="cl-tag cl-skill">' + L('【全觀】', '[OMNISIGHT]') + '</span> '
        + L('時間在你眼中放慢——觀察與攻擊，同時完成！', 'Time slows before your eyes — observe and strike, simultaneously!')
        + '</div>'
    };
  }

  // ── Passive Skill Handlers ──

  // Counter: auto-counterattack after being hit. Returns { dmg, log } or null.
  function tryCounter() {
    if (!hasSkill('counter') || isOnCooldown('counter')) return null;
    setCooldown('counter', 999); // once per fight
    var effStr = (typeof effectiveStat === 'function') ? effectiveStat('str') : state.str;
    var dmg = Math.floor(effStr * 0.8);
    return {
      damage: dmg,
      log: '<div class="combat-log combat-log-skill">'
        + '<span class="cl-tag cl-skill">' + L('【反擊】', '[COUNTER]') + '</span> '
        + L('石膚反彈！自動造成 ' + dmg + ' 點反擊傷害！', 'Stone skin rebounds! Auto-counter for ' + dmg + ' damage!')
        + '</div>'
    };
  }

  // Shield: halve next damage. Returns true if shield was consumed.
  function tryShield() {
    if (!hasSkill('shield') || isOnCooldown('shield')) return false;
    // Shield activates when HP < 30%
    if (state.hp > state.maxHp * 0.3) return false;
    setCooldown('shield', 999); // once per fight
    return true;
  }

  function shieldLog() {
    return '<div class="combat-log combat-log-skill">'
      + '<span class="cl-tag cl-skill">' + L('【護壁】', '[SHIELD]') + '</span> '
      + L('石化護壁啟動——傷害減半！', 'Stone Shield activated — damage halved!')
      + '</div>';
  }

  // Absorb: convert petri damage to HP. Returns true if absorbed.
  function tryAbsorb() {
    if (!hasSkill('absorb') || isOnCooldown('absorb')) return false;
    setCooldown('absorb', 4);
    return true;
  }

  function absorbLog(hpGain) {
    return '<div class="combat-log combat-log-skill">'
      + '<span class="cl-tag cl-skill">' + L('【吸收】', '[ABSORB]') + '</span> '
      + L('石化能量被轉化為生命力！HP +' + hpGain, 'Petrification energy converted to vitality! HP +' + hpGain)
      + '</div>';
  }

  // Undying: prevent death, restore 20% HP. Returns true if triggered.
  function tryUndying() {
    if (!hasSkill('undying') || isOnCooldown('undying')) return false;
    setCooldown('undying', 999); // once per fight
    var restore = Math.max(1, Math.floor(state.maxHp * 0.2));
    state.hp = restore;
    return true;
  }

  function undyingLog() {
    return '<div class="combat-log combat-log-skill">'
      + '<span class="cl-tag cl-skill">' + L('【不屈】', '[RESOLVE]') + '</span> '
      + L('你拒絕倒下——石化的意志讓你重新站起！HP 恢復至 ' + state.hp, 'You refuse to fall — stone will lifts you back! HP restored to ' + state.hp)
      + '</div>';
  }

  // ── Build active skill choices for combat ──
  function getActiveChoices() {
    if (!isNgPlus()) return [];
    var choices = [];

    if (hasSkill('charge') && !isOnCooldown('charge')) {
      choices.push({
        text: L('⚡ 蓄力 (3x)', '⚡ Charge (3x)'),
        skillId: 'charge'
      });
    }
    if (hasSkill('combo') && !isOnCooldown('combo')) {
      choices.push({
        text: L('⚡ 連擊 (2x命中)', '⚡ Combo (2 hits)'),
        skillId: 'combo'
      });
    }
    if (hasSkill('resonance') && !isOnCooldown('resonance')) {
      choices.push({
        text: L('⚡ 石脈共振 [意志]', '⚡ Resonance [WIL]'),
        skillId: 'resonance'
      });
    }
    if (hasSkill('pierce') && !isOnCooldown('pierce')) {
      choices.push({
        text: L('⚡ 看破 (全場+30%)', '⚡ Pierce (+30% all)'),
        skillId: 'pierce'
      });
    }
    if (hasSkill('omnisight') && !isOnCooldown('omnisight')) {
      choices.push({
        text: L('⚡ 全觀 (觀察+攻擊)', '⚡ Omnisight (Obs+Atk)'),
        skillId: 'omnisight'
      });
    }
    if (hasSkill('burst') && !isOnCooldown('burst') && state.petri >= 10) {
      choices.push({
        text: L('⚡ 深淵脈動 [-10%石化]', '⚡ Abyss Pulse [-10% petri]'),
        skillId: 'burst'
      });
    }

    return choices;
  }

  // ── Status display helper ──
  function statusLine() {
    if (!isNgPlus() || skillCount() === 0) return '';
    return ' <span class="cl-skill" title="' + L('已學技能', 'Learned skills') + '">⚔ ' + skillCount() + '/' + TOTAL_SKILLS + '</span>';
  }

  // ── Public API ──
  return {
    SKILLS: SKILLS,
    SKILL_IDS: SKILL_IDS,
    TOTAL: TOTAL_SKILLS,
    has: hasSkill,
    count: skillCount,
    isNgPlus: isNgPlus,
    getDef: getSkillDef,
    // Cooldown
    resetCooldowns: resetCooldowns,
    isOnCooldown: isOnCooldown,
    tickCooldowns: tickCooldowns,
    // Unlock
    checkUnlock: checkUnlock,
    restoreFromGlobal: restoreFromGlobal,
    unlockHtml: unlockHtml,
    // Active skills
    doCharge: doCharge,
    doResonance: doResonance,
    doBurst: doBurst,
    doPierce: doPierce,
    doCombo: doCombo,
    doOmnisight: doOmnisight,
    getActiveChoices: getActiveChoices,
    // Passive skills
    tryCounter: tryCounter,
    tryShield: tryShield,
    shieldLog: shieldLog,
    tryAbsorb: tryAbsorb,
    absorbLog: absorbLog,
    tryUndying: tryUndying,
    undyingLog: undyingLog,
    // UI
    statusLine: statusLine,
  };
})();
