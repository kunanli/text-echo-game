// ══ Combat System ══
// 4 actions: Attack, Observe, Commune, Flee
//   Attack  — STR-based damage, enemy counter-attacks
//   Observe — AGI check, success grants 2x dmg buff next attack
//   Commune — WIL check, build empathy to spare enemy (bonus XP, less petri)
//   Flee    — escape (if allowed)

function startCombat(enemy, onWin, onFlee) {
  state.mood = 'combat';
  ambientAudio.setCombat(true);
  state.flags._runCombats = (state.flags._runCombats || 0) + 1;
  if (typeof statsTrackCombat === 'function') statsTrackCombat();
  // NG+ scaling: 1.5x enemy stats
  var ngScale = state.flags.ngPlus ? 1.5 : 1;
  var scaledEnemy = enemy;
  if (ngScale > 1) {
    scaledEnemy = {};
    for (var k in enemy) { if (enemy.hasOwnProperty(k)) scaledEnemy[k] = enemy[k]; }
    scaledEnemy.hp = Math.floor(enemy.hp * ngScale);
    scaledEnemy.atkMin = Math.floor(enemy.atkMin * ngScale);
    scaledEnemy.atkMax = Math.floor(enemy.atkMax * ngScale);
    scaledEnemy.petriDmg = Math.floor(enemy.petriDmg * ngScale);
    scaledEnemy.xp = Math.floor(enemy.xp * 1.25); // bonus XP in NG+
  }
  enemy = scaledEnemy;
  let enemyHp = enemy.hp;
  const eName = enemy.name;
  let observed = false;   // next attack deals 2x
  let empathy = 0;        // commune progress (need 3 to spare)
  const empathyGoal = enemy.empathyGoal || 3;

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
    if (onFlee) {
      choices.push({ text: L('逃跑', 'Flee'), action: function() { sfx.click(); state.mood = 'normal'; ambientAudio.setCombat(false); onFlee(); } });
    }
    renderScene(text, choices);
  }

  // ── Attack ──
  function doAttack() {
    var weaponBonus = state.flags.weaponDmg || 0;
    var effStr = typeof effectiveStat === 'function' ? effectiveStat('str') : state.str;
    var effAgi = typeof effectiveStat === 'function' ? effectiveStat('agi') : state.agi;
    var baseDmg = rng(3, 6) + Math.floor(effStr * 1.2) + weaponBonus;
    var dmg = observed ? baseDmg * 2 : baseDmg;
    var wasObserved = observed;
    observed = false;
    var enemyDmg = Math.max(0, rng(enemy.atkMin, enemy.atkMax) - Math.floor(effAgi * 0.3));
    enemyHp -= dmg;
    sfx.hit();

    var log = '<div class="combat-log combat-log-player">'
      + '<span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
      + L('揮出攻擊，造成 ' + dmg + ' 點傷害', 'Attack! Dealt ' + dmg + ' damage')
      + (wasObserved ? ' <span class="cl-observe">' + L('（觀察加成！）', '(Observed bonus!)') + '</span>' : '')
      + L('。', '.')
      + '</div>';

    if (enemyHp <= 0) {
      sfx.pass();
      state.flags._lastCombatSpared = false;
      log += '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + L('被擊敗了！', 'has been defeated!')
        + '</div>';
      state.mood = 'normal';
      ambientAudio.setCombat(false);
      var xpGain = enemy.xp || 5;
      gainXp(xpGain);
      renderScene(log, [{ text: L('繼續', 'Continue'), action: function() { onWin(); } }]);
      return;
    }

    var dead = changeHp(-enemyDmg);
    if (!dead && enemy.petriDmg) dead = changePetri(enemy.petriDmg);
    sfx.hurt();
    if (enemy.petriDmg) sfx.petri();
    log += '<div class="combat-log combat-log-enemy">'
      + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
      + L('反擊，造成 ' + enemyDmg + ' 點傷害。', 'Strikes back! ' + enemyDmg + ' damage.')
      + (enemy.petriDmg ? ' <span class="cl-petri">' + L('石化 +' + enemy.petriDmg + '%', 'Petri +' + enemy.petriDmg + '%') + '</span>' : '')
      + '</div>';

    if (dead) return;
    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
  }

  // ── Observe ──
  function doObserve() {
    var effAgi = typeof effectiveStat === 'function' ? effectiveStat('agi') : state.agi;
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
    } else {
      var enemyDmg = Math.max(1, rng(enemy.atkMin, enemy.atkMax));
      changeHp(-enemyDmg);
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
      if (state.hp <= 0) return;
    }
    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
  }

  // ── Commune ──
  function doCommune() {
    var effWil = typeof effectiveStat === 'function' ? effectiveStat('wil') : state.wil;
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

      if (empathy >= empathyGoal) {
        // Spare the enemy — peaceful resolution
        state.flags._lastCombatSpared = true;
        sfx.item();
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
      var petriPenalty = Math.max(1, Math.floor((enemy.petriDmg || 1) * 1.5));
      changePetri(petriPenalty);
      sfx.petri();
      log = '<div class="combat-log combat-log-commune">'
        + '<span class="cl-tag cl-commune">' + L('【感應】', '[COMMUNE]') + '</span> '
        + L(txt.zh, txt.en)
        + ' <span class="cl-petri">' + L('石化 +' + petriPenalty + '%', 'Petri +' + petriPenalty + '%') + '</span>'
        + '</div>';
    }

    // Enemy still attacks (lighter if empathy > 0)
    var atkReduction = empathy > 0 ? Math.floor(empathy * 1.5) : 0;
    var enemyDmg = Math.max(0, rng(enemy.atkMin, enemy.atkMax) - atkReduction);
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
    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: function() { combatRound(); } }]);
  }

  combatRound();
}
