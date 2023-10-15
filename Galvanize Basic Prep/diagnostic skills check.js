function transformFirstAndLast(array) {
  let first = array[0]
  let last = array.at(-1)
  let obj = {}
  obj[first] = last
  return obj
}

function transformFirstAndLast(array) {
  return { [array[0]]: array.at(-1) }
}

let array = ["Kevin", "Bacon", "Love", "Hart", "Costner", "Coleman"]
// Function's return value (output):

console.log(transformFirstAndLast(array))
