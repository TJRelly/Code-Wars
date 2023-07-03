function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) return true
  }
  return false
}

function check(arr, x) {
  for (let item of arr) {
    if (item === x) return true
  }
  return false
}

function check(arr, x) {
  return arr.some((item) => x === item)
}
