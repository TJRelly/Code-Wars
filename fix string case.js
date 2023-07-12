function solve(str){
    let lower = 0
    let upper = 0
    for (let letter of str) {
      letter === letter.toLowerCase() ? lower++ : upper++
    }
    return upper > lower ? str.toUpperCase() : str.toLowerCase()
  }