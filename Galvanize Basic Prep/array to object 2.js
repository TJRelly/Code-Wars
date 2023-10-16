// function transformArrayToObject(array) {
//   let obj = {}
//   for (let item of array) {
//     let key = item[0]
//     let value = item[1]
//     if (!obj[key]) {
//       obj[key] = value
//     }
//   }
//   return obj
// }

function transformArrayToObject(array) {
    return array.reduce((obj, curr) => {
        let key = curr[0]
        let value = curr[1]
        obj[key] = value
        return obj
    }, {})
}

var input = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
]

console.log(transformArrayToObject(input))
// Function's return value (output):

// {
//   make : 'Ford',
//   model : 'Mustang',
//   year : 1964
// }
