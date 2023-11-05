function getElementsThatEqual10AtProperty(obj, key) {
  let tens = []
  for (key in obj) {
    for (num of obj[key]) {
      if (num === 10) {
        tens.push(num)
      }
    }
  }
  return tens
}

var obj = {
  key: [1000, 10, 50, 10],
}
var output = getElementsThatEqual10AtProperty(obj, "key")
console.log(output) // --> [10, 10]
