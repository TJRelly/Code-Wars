function findAverage(array) {
    let length = array.length
    let sum = array.reduce((a, c) => a + c, 0)
    let average = sum / length
    return average;
  }
  