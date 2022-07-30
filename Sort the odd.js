//sort odd numbers but leave even numbers alone
function sortArray(arr) {
    let odd = arr.filter(num => num % 2).sort((a, b) => a - b)
    return arr.map(num => num % 2 ? odd.shift() : num)
  }