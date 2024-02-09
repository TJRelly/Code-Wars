// function union(arrays){
//   // let result = []
//   // for(let arr of arrays) {
//   //     for(let num of arr) {
//   //       if(!result.includes(num)) result.push(num)
//   //     }
//   //   }
//   // return result
//   return arrays.reduce((acc, arr) => {
//     for(let item of arr) {
//       if (!acc.includes(item)) acc.push(item)
//     }
//     return acc
//   }, [])
// }

//declare union array
//input: array of arrays
//output: array
function union(arrays) {
  //reduce
  return arrays.reduce((acc, curr) => {
    //iterate curr array
    //if acc includes element don't push
    //push element to acc)
    curr.forEach((element) => {
      if (!acc.includes(element)) acc.push(element)
    })
    //return acc
    return acc
  })
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15]
const arr2 = [15, 88, 1, 5, 7]
const arr3 = [100, 15, 10, 1, 5]
console.log(union([arr1, arr2, arr3])) // should log: [5, 10, 15, 88, 1, 7, 100]
