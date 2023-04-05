function towerBuilder(nFloors) {
    let space, star, tower = []
    for(let i = 0; i < nFloors; i++){
      space = ' '.repeat(nFloors - i - 1)
      star = '*'.repeat(i * 2 + 1)
      tower.push(`${space}${star}${space}`)
    }
    return tower
  }

  console.log(towerBuilder(10))