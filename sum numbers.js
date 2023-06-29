// function sum (numbers) {
//     let res = 0
//     for(let i = 0; i < numbers.length; i++) {
//       res += numbers[i]
//     } 
//   return res
// };

const sum = (numbers) => numbers.reduce((a, c) => a + c, 0)