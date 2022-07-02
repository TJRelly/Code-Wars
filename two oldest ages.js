// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let sorted = ages.sort((a, b) => b-a)
    return [sorted[1], sorted[0]]
  }

 const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)