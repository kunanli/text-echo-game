// ══ Combat System ══
function startCombat(enemy, onWin, onFlee) {
  state.mood = 'combat';
  let enemyHp = enemy.hp;
  const eName = enemy.name;

  function combatRound() {
    const hpPct = Math.max(0, Math.floor(enemyHp / enemy.hp * 10));
    const hpBar = '█'.repeat(hpPct) + '░'.repeat(10 - hpPct);
    const myPct = Math.max(0, Math.floor(state.hp / state.maxHp * 10));
    const myBar = '█'.repeat(myPct) + '░'.repeat(10 - myPct);

    var combatTitle = L('戰  鬥', 'COMBAT');
    var youLabel = L('你', 'You').padEnd(6);
    const text = `<pre class="ascii-art red">
  ╔════════════════════════════════════════╗
  ║                                        ║
  ║          >>  ${combatTitle}  <<              ║
  ║                                        ║
  ╠════════════════════════════════════════╣
  ║                                        ║
  ║   ${eName.padEnd(8)}  [${hpBar}]   ${String(enemyHp).padStart(3)}   ║
  ║                                        ║
  ║   ${youLabel.padEnd(8)}[${myBar}]   ${String(state.hp).padStart(3)}   ║
  ║                                        ║
  ╚════════════════════════════════════════╝
</pre>
${enemy.desc || ''}`;

    const choices = [
      { text: L('攻擊', 'Attack'), action: () => doAttack() },
      { text: L('閃避', 'Dodge'), action: () => doDodge() },
      { text: L('防守', 'Defend'), action: () => doDefend() },
    ];
    if (onFlee) {
      choices.push({ text: L('逃跑', 'Flee'), action: () => { state.mood = 'normal'; onFlee(); } });
    }
    renderScene(text, choices);
  }

  function doAttack() {
    const dmg = rng(3, 6) + Math.floor(state.str * 1.2);
    const enemyDmg = Math.max(0, rng(enemy.atkMin, enemy.atkMax) - Math.floor(state.agi * 0.3));
    enemyHp -= dmg;

    let log = '<div class="combat-log combat-log-player">'
      + '<span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
      + L('揮出攻擊，造成 ' + dmg + ' 點傷害。', 'Attack! Dealt ' + dmg + ' damage.')
      + '</div>';

    if (enemyHp <= 0) {
      log += '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + L('被擊敗了！', 'has been defeated!')
        + '</div>';
      state.mood = 'normal';
      renderScene(log, [{ text: L('繼續', 'Continue'), action: () => onWin() }]);
      return;
    }

    changeHp(-enemyDmg);
    if (enemy.petriDmg) changePetri(enemy.petriDmg);
    log += '<div class="combat-log combat-log-enemy">'
      + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
      + L('反擊，造成 ' + enemyDmg + ' 點傷害。', 'Strikes back! ' + enemyDmg + ' damage.')
      + (enemy.petriDmg ? ' <span class="cl-petri">' + L('石化 +' + enemy.petriDmg + '%', 'Petri +' + enemy.petriDmg + '%') + '</span>' : '')
      + '</div>';

    if (state.hp <= 0) return;

    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: () => combatRound() }]);
  }

  function doDodge() {
    const dodgeRoll = rng(1, 10) + state.agi;
    let log;
    if (dodgeRoll >= 10) {
      log = '<div class="combat-log combat-log-player">'
        + '<span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
        + L('靈巧地閃開了攻擊！', 'Nimbly dodged the attack!')
        + '</div>'
        + '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + L('攻擊落空。', 'Attack missed.')
        + '</div>';
    } else {
      const enemyDmg = Math.max(1, rng(enemy.atkMin, enemy.atkMax) - state.agi);
      changeHp(-enemyDmg);
      var petriAmt = enemy.petriDmg ? Math.floor(enemy.petriDmg / 2) : 0;
      if (petriAmt) changePetri(petriAmt);
      log = '<div class="combat-log combat-log-player">'
        + '<span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
        + L('閃避失敗！', 'Dodge failed!')
        + '</div>'
        + '<div class="combat-log combat-log-enemy">'
        + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
        + L('命中！造成 ' + enemyDmg + ' 點傷害。', 'Hit! ' + enemyDmg + ' damage.')
        + (petriAmt ? ' <span class="cl-petri">' + L('石化 +' + petriAmt + '%', 'Petri +' + petriAmt + '%') + '</span>' : '')
        + '</div>';
      if (state.hp <= 0) return;
    }
    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: () => combatRound() }]);
  }

  function doDefend() {
    const block = Math.floor(state.str * 0.8) + rng(2, 5);
    const enemyDmg = Math.max(0, rng(enemy.atkMin, enemy.atkMax) - block);
    changeHp(-enemyDmg);
    const petriReduce = state.wil >= 7 ? 2 : 0;
    if (petriReduce) changePetri(-petriReduce);

    let log = '<div class="combat-log combat-log-player">'
      + '<span class="cl-tag cl-you">' + L('【你】', '[YOU]') + '</span> '
      + L('舉起防禦，', 'Raised guard, ')
      + (petriReduce ? L('意志集中！石化 -' + petriReduce + '%', 'Focus! Petri -' + petriReduce + '%') : L('嚴陣以待。', 'standing firm.'))
      + '</div>'
      + '<div class="combat-log combat-log-enemy">'
      + '<span class="cl-tag cl-enemy">' + L('【' + eName + '】', '[' + eName + ']') + '</span> '
      + L('攻擊被擋下，僅造成 ' + enemyDmg + ' 點傷害。', 'Attack blocked! Only ' + enemyDmg + ' damage.')
      + '</div>';

    if (state.hp <= 0) return;
    renderScene(log, [{ text: L('繼續戰鬥', 'Continue fighting'), action: () => combatRound() }]);
  }

  combatRound();
}
