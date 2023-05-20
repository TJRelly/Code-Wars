function declareWinner(fighter1, fighter2, firstAttacker) {
    let damage1 = Math.ceil(fighter1.health/fighter2.damagePerAttack)
    let damage2 = Math.ceil(fighter2.health/fighter1.damagePerAttack)
    if (damage1 > damage2) return fighter1.name
    else if (damage2 > damage1) return fighter2.name
    else return firstAttacker
}
