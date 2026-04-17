// ══ Combat System ══

function startCombat(enemy, onWin, onFlee) {
  state.mood = 'combat';
  ambientAudio.setCombat(true);
  state.flags._runCombats = (state.flags._runCombats || 0) + 1;
  state.flags._combatCount = (state.flags._combatCount || 0) + 1;
  if (typeof statsTrackCombat === 'function') statsTrackCombat();
  // NG+ scaling: 1.5x enemy stats
  enemy = scaleEnemyNgPlus(enemy);
  let enemyHp = enemy.hp;
  const eName = enemy.name;
  let observed = false;   // next attack deals 2x
  let empathy = 0;        // commune progress (need 3 to spare)
  const empathyGoal = enemy.empathyGoal || 3;

  // Skill system state (NG+ only)
  var hasSkills = (typeof skillSystem !== 'undefined');
  var chargeActive = false;  // next attack 3x
  var pierceActive = false;  // all attacks +30% this fight
  var shieldActive = false;  // next damage halved
  if (hasSkills) skillSystem.resetCooldowns();

  // Commune text pool per-enemy, with fallback
  var communeTexts = enemy.commune || [
    { zh: '你試著向它傳達善意……它似乎猶豫了一瞬。', en: 'You reach out with goodwill... it hesitates for a moment.' },
    { zh: '你凝視著它的眼睛，感受到深處殘存的意識。', en: 'You gaze into its eyes, sensing a flicker of awareness within.' },
    { zh: '它的攻擊放緩了，像是在回憶什麼遙遠的東西。', en: 'Its attacks slow, as if remembering something distant.' },
  ];
  var communeFail = enemy.communeFail || [
    { zh: '但它完全無法理解，石化能量反噬了你。', en: 'But it cannot comprehend. Petrification energy lashes back.' },
    { zh: '你的意識碰觸到一片虛無，石化的寒意侵入。', en: 'Your mind touches void. A chill of stone creeps in.' },
  ];

  function combatRound() {
    var hpPct = clamp(Math.floor(enemyHp / enemy.hp * 10), 0, 10);
    var hpBar = '\u2588'.repeat(hpPct) + '\u2591'.repeat(10 - hpPct);
    var myPct = clamp(Math.floor(state.hp / state.maxHp * 10), 0, 10);
    var myBar = '\u2588'.repeat(myPct) + '\u2591'.repeat(10 - myPct);

    var combatTitle = L('戰  鬥', 'COMBAT');
    var youLabel = L('你', 'You').padEnd(6);

    // Status indicators
    var statusLine = '';
    if (observed) statusLine += ' <span class="cl-observe">' + L('[觀察中·下次2x]', '[OBSERVED·2x next]') + '</span>';
    if (empathy > 0) statusLine += ' <span class="cl-empathy">' + L('[共鳴 ' + empathy + '/' + empathyGoal + ']', '[Empathy ' + empathy + '/' + empathyGoal + ']') + '</span>';
    var mercyPct = getMercyReduction();
    if (mercyPct > 0) statusLine += ' <span style="color:#7ad" title="' + L('連續死亡減傷', 'Mercy: death streak reduction') + '">' + L('[慈悲 -' + Math.round(mercyPct * 100) + '%]', '[Mercy -' + Math.round(mercyPct * 100) + '%]') + '</span>';
    if (chargeActive) statusLine += ' <span class="cl-skill">' + L('[蓄力·下次3x]', '[CHARGED·3x next]') + '</span>';
    if (pierceActive) statusLine += ' <span class="cl-skill">' + L('[看破·+30%]', '[PIERCED·+30%]') + '</span>';
    if (shieldActive) statusLine += ' <span class="cl-skill">' + L('[護壁·減半]', '[SHIELD·½]') + '</span>';
    if (hasSkills) statusLine += skillSystem.statusLine();

    var text = '<pre class="ascii-art red">'
      + '\n  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557'
      + '\n  \u2551                                        \u2551'
      + '\n  \u2551          >>  ' + combatTitle + '  <<              \u2551'
      + '\n  \u2551                                        \u2551'
      + '\n  \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563'
      + '\n  \u2551                                        \u2551'
      + '\n  \u2551   ' + eName.padEnd(8) + '  [' + hpBar + ']   ' + String(enemyHp).padStart(3) + '   \u2551'
      + '\n  \u2551                                        \u2551'
      + '\n  \u2551   ' + youLabel.padEnd(8) + '[' + myBar + ']   ' + String(state.hp).padStart(3) + '   \u2551'
      + '\n  \u2551                                        \u2551'
      + '\n  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d'
      + '\n</pre>'
      + (statusLine ? '<div class="combat-status">' + statusLine + '</div>' : '')
      + (enemy.desc || '');

    // Build choices
    var atkLabel = L('攻擊', 'Attack');
    if (observed) atkLabel += L(' (2x)', ' (2x)');
    var choices = [
      { text: atkLabel, action: function() { doAttack(); } },
      { text: L('觀察 [敏捷]', 'Observe [AGI]'), action: function() { doObserve(); } },
      { text: L('感應 [意志]', 'Commune [WIL]'), action: function() { doCommune(); } },
    ];
    // Insert active skill buttons (NG+ only)
    if (hasSkills) {
      var skillChoices = skillSystem.getActiveChoices();
      for (var si = 0; si < skillChoices.length; si++) {
        (function(sc) {
          choices.push({ text: sc.text, action: function() { doSkillAction(sc.skillId); } });
        })(skillChoices[si]);
      }
    }
    if (onFlee) {
      choices.push({ text: L('逃跑', 'Flee'), action: function() { sfx.click(); state.mood = 'normal'; ambientAudio.setCombat(false); onFlee(); } });
    }
    renderScene(text, choices);
  }

  // ── Attack (with skill integration) ──
  function doAttack() {
    var eqStats = (typeof getEquipStats === 'function') ? getEquipStats() : { dmg: 0, def: 0, petriResist: 0 };
    var weaponBonus = (state.flags.weaponDmg || 0) + eqStats.dmg;
    var effStr = effectiveStat('str');
    var effAgi = effectiveStat('agi');
    var effWil = effectiveStat('wil');
    var baseDmg = rng(3, 6) + Math.floor(effStr * 1.2) + weaponBonus;
    // Multiplier: charge(3x) > observed(2x) > base(1x); pierce adds +30%
    var mult = chargeActive ? 3 : (observed ? 2 : 1);
    var dmg = Math.floor(baseDmg * mult * (pierceActive ? 1.3 : 1));
    var wasObserved = observed;
    var wasCharged = chargeActive;
    observed = false;
    chargeActive = false;
    // AGI dodges a flat amount; WIL adds mental-fortitude reduction (up to 25%)
    var rawEnemyDmg = Math.max(0, rng(enemy.atkMin, enemy.atkMax) - Math.floor(effAgi * 0.3));
    var wilReduction = Math.min(0.25, effWil * 0.02); // 2% per WIL, capped at 25%
    var armorDef = eqStats.def / 100;
    var mercy = getMercyReduction();
    var totalReduction = Math.min(0.75, armorDef + mercy + wilReduction);
    var enemyDmg = totalReduction > 0 ? Math.max(1, Math.floor(rawEnemyDmg * (1 - totalReduction))) : rawEnemyDmg;
    // Shield: halve incoming damage
    if (shieldActive) { enemyDmg = Math.max(1, Math.floor(enemyDmg / 2)); shieldActive = false; }
    enemyHp -= dmg;
    sfx.hit();

    var bonusLabel = wasCharged ? L('（蓄力加成！）', '(Charge bonus!)') : (wasObserved ? L('（觀察加成！）', '(Observed bonus!)') : '');
    var log = '<div class="combat-log combat-log-player">'
      + '<span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
      + L('揮出攻擊，造成 ' + dmg + ' 點傷害', 'Attack! Dealt ' + dmg + ' damage')
      + (bonusLabel ? ' <span class="cl-observe">' + bonusLabel + '</span>' : '')
      + L('。', '.')
      + '</div>';

    if (enemyHp <= 0) {
      sfx.pass();
      state.flags._lastCombatSpared = false;
      state.flags._consecutiveDeaths = 0;
      log += '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + L('被擊敗了！', 'has been defeated!')
        + '</div>';
      // Skill unlock check: kill trigger
      if (hasSkills) { var uid = skillSystem.checkUnlock('kill'); if (uid) { log += skillSystem.unlockHtml(uid); sfx.levelUp(); } }
      // Skill unlock check: crit trigger (observed kill)
      if (hasSkills && wasObserved) { var uid2 = skillSystem.checkUnlock('crit'); if (uid2) { log += skillSystem.unlockHtml(uid2); sfx.levelUp(); } }
      state.mood = 'normal';
      ambientAudio.setCombat(false);
      var xpGain = enemy.xp || 5;
      gainXp(xpGain);
      renderScene(log, [{ text: L('繼續', 'Continue'), action: function() { onWin(); } }]);
      return;
    }

    // Enemy counterattack
    var dead = changeHp(-enemyDmg);
    // Undying: prevent death
    if (dead && hasSkills) {
      if (skillSystem.tryUndying()) { dead = false; log += skillSystem.undyingLog(); }
    }
    // WIL resists petri damage: 1 point per 4 WIL (stacks with equipment)
    var wilPetriResist = Math.floor(effWil / 4);
    var petriDmg = enemy.petriDmg ? Math.max(0, enemy.petriDmg - eqStats.petriResist - wilPetriResist) : 0;
    // Absorb: convert petri damage to HP
    if (!dead && petriDmg > 0 && hasSkills && skillSystem.tryAbsorb()) {
      var hpGain = petriDmg;
      changeHp(hpGain);
      log += skillSystem.absorbLog(hpGain);
      petriDmg = 0; // absorbed, no petri damage
    }
    if (!dead && petriDmg > 0) dead = changePetri(petriDmg);
    sfx.hurt();
    if (enemy.petriDmg) sfx.petri();
    log += '<div class="combat-log combat-log-enemy">'
      + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
      + L('反擊，造成 ' + enemyDmg + ' 點傷害。', 'Strikes back! ' + enemyDmg + ' damage.')
      + (petriDmg > 0 ? ' <span class="cl-petri">' + L('石化 +' + petriDmg + '%', 'Petri +' + petriDmg + '%') + '</span>' : '')
      + '</div>';

    // Passive: counter
    if (!dead && hasSkills) {
      var counter = skillSystem.tryCounter();
      if (counter) { enemyHp -= counter.damage; log += counter.log; sfx.hit(); }
    }
    // Passive: shield activation when HP low
    if (!dead && hasSkills && !shieldActive && skillSystem.tryShield()) {
      shieldActive = true;
      log += skillSystem.shieldLog();
    }
    // Skill unlock checks
    if (!dead && hasSkills) {
      if (wasObserved || wasCharged) { var uid = skillSystem.checkUnlock('crit'); if (uid) { log += skillSystem.unlockHtml(uid); sfx.levelUp(); } }
      if (state.hp < state.maxHp * 0.3) { var uid2 = skillSystem.checkUnlock('lowHp'); if (uid2) { log += skillSystem.unlockHtml(uid2); sfx.levelUp(); } }
      if (enemyDmg > 0) { var uid3 = skillSystem.checkUnlock('hurt'); if (uid3) { log += skillSystem.unlockHtml(uid3); sfx.levelUp(); } }
      skillSystem.tickCooldowns();
    }

    if (dead) return;
    // Check if counter killed enemy
    if (enemyHp <= 0) {
      sfx.pass();
      log += '<div class="combat-log combat-log-enemy"><span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> ' + L('被擊敗了！', 'has been defeated!') + '</div>';
      state.mood = 'normal'; ambientAudio.setCombat(false);
      gainXp(enemy.xp || 5);
      renderScene(log, [{ text: L('繼續', 'Continue'), action: function() { onWin(); } }]);
      return;
    }
    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
  }

  // ── Observe ──
  function doObserve() {
    var effAgi = effectiveStat('agi');
    var roll = rng(1, 6) + effAgi;
    var dc = 7;
    var log;

    if (roll >= dc) {
      observed = true;
      sfx.pass();
      log = '<div class="combat-log combat-log-player">'
        + '<span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
        + L('仔細觀察了 ' + eName + ' 的動作模式，發現了破綻！', 'Carefully studied ' + eName + '\'s patterns — found an opening!')
        + ' <span class="cl-observe">' + L('下次攻擊 2 倍傷害', 'Next attack deals 2x damage') + '</span>'
        + '</div>'
        + '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + L('趁你觀察的間隙發起攻擊——但你及時閃開了。', 'Lunges at you during observation — but you dodge in time.')
        + '</div>';
      // Skill unlock: observe success
      if (hasSkills) { var uid = skillSystem.checkUnlock('observe'); if (uid) { log += skillSystem.unlockHtml(uid); sfx.levelUp(); } }
    } else {
      var rawObsDmg = Math.max(1, rng(enemy.atkMin, enemy.atkMax));
      var mercyObs = getMercyReduction();
      var enemyDmg = mercyObs > 0 ? Math.max(1, Math.floor(rawObsDmg * (1 - mercyObs))) : rawObsDmg;
      var obsDead = changeHp(-enemyDmg);
      if (obsDead && hasSkills && skillSystem.tryUndying()) { obsDead = false; log += skillSystem.undyingLog(); }
      sfx.fail();
      sfx.hurt();
      log = '<div class="combat-log combat-log-player">'
        + '<span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
        + L('嘗試觀察，但沒能看出端倪……', 'Tried to observe, but couldn\'t find an opening...')
        + '</div>'
        + '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + L('趁隙攻擊！造成 ' + enemyDmg + ' 點傷害。', 'Seizes the opening! ' + enemyDmg + ' damage.')
        + '</div>';
      if (obsDead) return;
      if (hasSkills && state.hp < state.maxHp * 0.3) { var uid2 = skillSystem.checkUnlock('lowHp'); if (uid2) { log += skillSystem.unlockHtml(uid2); sfx.levelUp(); } }
    }
    if (hasSkills) skillSystem.tickCooldowns();
    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
  }

  // ── Commune ──
  function doCommune() {
    var effWil = effectiveStat('wil');
    var roll = rng(1, 6) + effWil;
    var dc = 8;
    var log;

    if (roll >= dc) {
      empathy++;
      sfx.pass();
      var txt = communeTexts[Math.min(empathy - 1, communeTexts.length - 1)];
      log = '<div class="combat-log combat-log-commune">'
        + '<span class="cl-tag cl-commune">' + L('【感應】', '[COMMUNE]') + '</span> '
        + L(txt.zh, txt.en)
        + ' <span class="cl-empathy">' + L('共鳴 ' + empathy + '/' + empathyGoal, 'Empathy ' + empathy + '/' + empathyGoal) + '</span>'
        + '</div>';

      // Skill unlock: commune success
      if (hasSkills) { var uid = skillSystem.checkUnlock('commune'); if (uid) { log += skillSystem.unlockHtml(uid); sfx.levelUp(); } }

      if (empathy >= empathyGoal) {
        // Spare the enemy — peaceful resolution
        state.flags._lastCombatSpared = true;
        state.flags._consecutiveDeaths = 0; // reset mercy on spare
        sfx.item();
        // Skill unlock: spare trigger
        if (hasSkills) { var uid2 = skillSystem.checkUnlock('kill'); if (uid2) { log += skillSystem.unlockHtml(uid2); sfx.levelUp(); } }
        var spareText = enemy.spareText
          || { zh: eName + ' 的眼中閃過一絲清明，它緩緩後退，消失在陰影中……', en: eName + '\'s eyes flicker with clarity. It slowly backs away into the shadows...' };
        log += '<div class="combat-log combat-log-commune">'
          + '<span class="cl-tag cl-commune">' + L('【共鳴】', '[RESONANCE]') + '</span> '
          + L(spareText.zh, spareText.en)
          + '</div>';
        state.mood = 'normal';
        ambientAudio.setCombat(false);
        // Bonus: more XP, petri reduction
        var xpGain = Math.floor((enemy.xp || 5) * 1.5);
        gainXp(xpGain);
        var petriHeal = Math.min(state.petri, 3);
        if (petriHeal > 0) changePetri(-petriHeal);
        log += '<div class="combat-log combat-log-commune">'
          + '<span class="cl-empathy">' + L('和平解決！經驗 +' + xpGain + (petriHeal ? '  石化 -' + petriHeal + '%' : ''), 'Peaceful resolution! EXP +' + xpGain + (petriHeal ? '  Petri -' + petriHeal + '%' : '')) + '</span>'
          + '</div>';
        renderScene(log, [{ text: L('繼續', 'Continue'), action: function() { onWin(); } }]);
        return;
      }
    } else {
      sfx.fail();
      var txt = communeFail[rng(0, communeFail.length - 1)];
      var communePetriDmg = Math.max(1, Math.floor((enemy.petriDmg || 1) * 1.5));
      changePetri(communePetriDmg);
      sfx.petri();
      log = '<div class="combat-log combat-log-commune">'
        + '<span class="cl-tag cl-commune">' + L('【感應】', '[COMMUNE]') + '</span> '
        + L(txt.zh, txt.en)
        + ' <span class="cl-petri">' + L('石化 +' + communePetriDmg + '%', 'Petri +' + communePetriDmg + '%') + '</span>'
        + '</div>';
    }

    // Enemy still attacks (lighter if empathy > 0, mercy reduction if consecutive deaths)
    var atkReduction = empathy > 0 ? Math.floor(empathy * 1.5) : 0;
    var rawCDmg = Math.max(0, rng(enemy.atkMin, enemy.atkMax) - atkReduction);
    var mercyC = getMercyReduction();
    var enemyDmg = mercyC > 0 ? Math.max(0, Math.floor(rawCDmg * (1 - mercyC))) : rawCDmg;
    if (enemyDmg > 0) {
      changeHp(-enemyDmg);
      sfx.hurt();
      log += '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + (empathy > 0
          ? L('猶豫地攻擊，造成 ' + enemyDmg + ' 點傷害。', 'Hesitantly attacks, dealing ' + enemyDmg + ' damage.')
          : L('攻擊！造成 ' + enemyDmg + ' 點傷害。', 'Attacks! ' + enemyDmg + ' damage.'))
        + '</div>';
    } else if (empathy > 0) {
      log += '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + L('停下了攻擊的動作，似乎在掙扎……', 'Stops its attack, as if struggling within...')
        + '</div>';
    }

    if (state.hp <= 0) return;
    if (state.petri >= 100) return;
    if (hasSkills) skillSystem.tickCooldowns();
    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
  }

  // ── Active Skill Actions ──
  function doSkillAction(skillId) {
    if (!hasSkills) return;
    sfx.hit();
    var result;
    switch (skillId) {
      case 'charge':
        result = skillSystem.doCharge();
        chargeActive = result.chargeActive;
        renderScene(result.log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
        return;
      case 'combo':
        result = skillSystem.doCombo();
        // Two attacks: full + 60%
        var eqStats = (typeof getEquipStats === 'function') ? getEquipStats() : { dmg: 0, def: 0, petriResist: 0 };
        var weaponBonus = (state.flags.weaponDmg || 0) + eqStats.dmg;
        var effStr = effectiveStat('str');
        var baseDmg = rng(3, 6) + Math.floor(effStr * 1.2) + weaponBonus;
        var dmg1 = Math.floor(baseDmg * (pierceActive ? 1.3 : 1));
        var dmg2 = Math.floor(baseDmg * 0.6 * (pierceActive ? 1.3 : 1));
        enemyHp -= (dmg1 + dmg2);
        var log = result.log;
        log += '<div class="combat-log combat-log-player"><span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
          + L('第一擊 ' + dmg1 + ' + 第二擊 ' + dmg2 + ' = 共 ' + (dmg1 + dmg2) + ' 點傷害！', 'Hit 1: ' + dmg1 + ' + Hit 2: ' + dmg2 + ' = ' + (dmg1 + dmg2) + ' total damage!') + '</div>';
        if (enemyHp <= 0) {
          sfx.pass(); state.flags._lastCombatSpared = false; state.flags._consecutiveDeaths = 0;
          log += '<div class="combat-log combat-log-enemy"><span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> ' + L('被擊敗了！', 'has been defeated!') + '</div>';
          if (hasSkills) { var uid = skillSystem.checkUnlock('kill'); if (uid) { log += skillSystem.unlockHtml(uid); sfx.levelUp(); } }
          state.mood = 'normal'; ambientAudio.setCombat(false); gainXp(enemy.xp || 5);
          renderScene(log, [{ text: L('繼續', 'Continue'), action: function() { onWin(); } }]);
          return;
        }
        // Enemy attacks back
        var rawE = Math.max(0, rng(enemy.atkMin, enemy.atkMax) - Math.floor(effectiveStat('agi') * 0.3));
        var mrc = getMercyReduction(); var eDmg = mrc > 0 ? Math.max(1, Math.floor(rawE * (1 - mrc))) : rawE;
        if (shieldActive) { eDmg = Math.max(1, Math.floor(eDmg / 2)); shieldActive = false; }
        var ded = changeHp(-eDmg);
        if (ded && skillSystem.tryUndying()) { ded = false; log += skillSystem.undyingLog(); }
        sfx.hurt();
        log += '<div class="combat-log combat-log-enemy"><span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> ' + L('反擊，造成 ' + eDmg + ' 點傷害。', 'Strikes back! ' + eDmg + ' damage.') + '</div>';
        if (ded) return;
        skillSystem.tickCooldowns();
        renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
        return;
      case 'resonance':
        result = skillSystem.doResonance();
        enemyHp -= result.damage;
        var rlog = result.log;
        if (enemyHp <= 0) {
          sfx.pass(); state.flags._lastCombatSpared = false; state.flags._consecutiveDeaths = 0;
          rlog += '<div class="combat-log combat-log-enemy"><span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> ' + L('被擊敗了！', 'has been defeated!') + '</div>';
          state.mood = 'normal'; ambientAudio.setCombat(false); gainXp(enemy.xp || 5);
          renderScene(rlog, [{ text: L('繼續', 'Continue'), action: function() { onWin(); } }]);
          return;
        }
        skillSystem.tickCooldowns();
        renderScene(rlog, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
        return;
      case 'pierce':
        result = skillSystem.doPierce();
        pierceActive = true;
        skillSystem.tickCooldowns();
        renderScene(result.log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
        return;
      case 'omnisight':
        result = skillSystem.doOmnisight();
        // Observe + Attack in one turn
        observed = false; // consume immediately
        var eqS = (typeof getEquipStats === 'function') ? getEquipStats() : { dmg: 0, def: 0, petriResist: 0 };
        var wB = (state.flags.weaponDmg || 0) + eqS.dmg;
        var bD = rng(3, 6) + Math.floor(effectiveStat('str') * 1.2) + wB;
        var oDmg = Math.floor(bD * 2 * (pierceActive ? 1.3 : 1)); // always 2x
        enemyHp -= oDmg;
        var olog = result.log;
        olog += '<div class="combat-log combat-log-player"><span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
          + L('觀察與攻擊同時完成！造成 ' + oDmg + ' 點傷害！', 'Observe and attack simultaneously! ' + oDmg + ' damage!') + '</div>';
        if (enemyHp <= 0) {
          sfx.pass(); state.flags._lastCombatSpared = false; state.flags._consecutiveDeaths = 0;
          olog += '<div class="combat-log combat-log-enemy"><span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> ' + L('被擊敗了！', 'has been defeated!') + '</div>';
          state.mood = 'normal'; ambientAudio.setCombat(false); gainXp(enemy.xp || 5);
          renderScene(olog, [{ text: L('繼續', 'Continue'), action: function() { onWin(); } }]);
          return;
        }
        sfx.hit();
        skillSystem.tickCooldowns();
        renderScene(olog, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
        return;
      case 'burst':
        result = skillSystem.doBurst();
        enemyHp -= result.damage;
        var blog = result.log;
        if (enemyHp <= 0) {
          sfx.pass(); state.flags._lastCombatSpared = false; state.flags._consecutiveDeaths = 0;
          blog += '<div class="combat-log combat-log-enemy"><span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> ' + L('被擊敗了！', 'has been defeated!') + '</div>';
          state.mood = 'normal'; ambientAudio.setCombat(false); gainXp(enemy.xp || 5);
          renderScene(blog, [{ text: L('繼續', 'Continue'), action: function() { onWin(); } }]);
          return;
        }
        skillSystem.tickCooldowns();
        renderScene(blog, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
        return;
    }
  }

  combatRound();
}
