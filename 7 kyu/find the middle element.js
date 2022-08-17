function gimme (arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let mid = arr.filter(num => num != min && num != max)
  return arr.indexOf(+mid)
}

const gimme = (arr) => arr.indexOf(arr.concat().sort((a, b) => a - b)[1])
