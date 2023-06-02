function betterThanAverage(classPoints, yourPoints) {
    //class + my points / total scores ave. point
    classPoints.push(yourPoints)
    //compare my points to the ave. 
    //if my points are greater - return true - else false
    let numberOfScores = classPoints.length
    let sumOfScores = classPoints.reduce((a, c) => a + c, 0)
    let aveScore = sumOfScores/numberOfScores
    return yourPoints > aveScore
  }