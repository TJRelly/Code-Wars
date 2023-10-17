// // Examples:

// const assertEqual = (actual, expected, testName) =>
//   actual === expected
//     ? console.log("passed")
//     : console.log(
//         `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
//       )

// // SUCCESS CASE

// function multiplyByTwo1(n) {
//   return n * 2
// }
// var output = multiplyByTwo1(2) // returns 4
// assertEqual(output, 4, "it doubles 2 to 4")

// // console output:
// // passed

// // FAILURE CASE

// function multiplyByTwo(n) {
//   return n * 2 + 1 // an incorrect implementation
// }
// var output = multiplyByTwo(2) // returns 5

// assertEqual(output, 4, "it doubles 2 to 4")
// // console output:
// // FAILED [it doubles 2 to 4] Expected "4", but got "5"
