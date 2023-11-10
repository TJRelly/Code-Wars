const forEach = (arr, call) => {
  for (let item of arr) {
    func(item)
  }
}

const map = (arr, call) => {
  let result = []
  forEach(arr, function(item){
    result.push(call(item))
  })
  return result
}

// Uncomment these to check your work!
console.log(typeof forEach) // should log: 'function'
forEach(["a", "b", "c"], (i) => console.log(i)) // should log: 'a', 'b', 'c'
console.log(typeof map) // should log: 'function'
console.log(map([3, 4, 5], (n) => n - 2)) // should log: [1, 2, 3]
