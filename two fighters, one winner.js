function declareWinner(fighter1, fighter2, firstAttacker) {
    let damage1 = Math.ceil(fighter1.health/fighter2.damagePerAttack)
    let damage2 = Math.ceil(fighter2.health/fighter1.damagePerAttack)
    if (damage1 > damage2) return fighter1.name
    else if (damage2 > damage1) return fighter2.name
    else return firstAttacker
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let hitpoints1 = Math.ceil(fighter1.health/fighter2.damagePerAttack)
    let hitpoints2 = Math.ceil(fighter2.health/fighter1.damagePerAttack)
    return hitpoints1 > hitpoints2 ? fighter1.name : hitpoints2 > hitpoints1 ? fighter2.name : firstAttacker
  }