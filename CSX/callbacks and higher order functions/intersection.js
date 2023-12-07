// // declare function intersection
// // input: arrays
// // output: array
// function intersection(arrays) {
//   //choose array for comparison
//   let acc = arrays[0]
//   //iterate that array
//   for (let i = 1; i < arrays.length; i++) {
//     let results = []
//     let curr = arrays[i]
//     for (let j = 0; j < curr.length; j++) {
//       if (acc.includes(curr[j])) results.push(curr[j])
//     }
//     acc = results
//   }
//   //return results array
//   return acc
// }

// //declare func intersection
// //input: array of arrays
// //output: array
// function intersection(arrays) {
//   //use reduce
//   //acc: first array
//   //curr: other arrays
//   return arrays.reduce((acc, curr) => {
//     //declare results arr
//     let results = []
//     //iterate curr
//     for (let ele of curr) {
//       //if element found in acc
//       //push to results array
//       if (acc.includes(ele)) results.push(ele)
//     }
//     //reassign acc to the results
//     acc = results
//     //return acc
//     return acc
//   })
// }

function intersection(arrays) {
    return arrays.reduce((acc, curr) => {
        return curr.filter(element => acc.includes(element))
    })
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20]
const arr2 = [15, 88, 1, 5, 7]
const arr3 = [1, 10, 15, 5, 20]
console.log(intersection([arr1, arr2, arr3])) // should log: [5, 15]
