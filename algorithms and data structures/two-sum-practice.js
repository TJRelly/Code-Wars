// Two Sum
let nums = [2, 7, 11, 15],
  target = 9 // return [0, 1]

//   const twoSum = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//           if (arr[i] + arr[j] === target) return [i, j]
//         }
//       }
//   }

//Time Complexity = O(n^2)
// console.log(twoSum(nums))

const twoSum2 = arr => {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i]
        let diff = target - curr
        if(diff in map) return [map[diff], i]
        map[curr] = i
    }
}

//Time Complexity = 
console.log(twoSum2(nums))