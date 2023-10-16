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

// function assertArraysEqual(actual, expected, testName) {
//   let sameLength = actual.length === expected.length
//   let match = true

//   for (let i in actual) {
//     if (actual[i] !== expected[i] || !sameLength) {
//       match = false
//       break
//     }
//   }

//   match && sameLength
//     ? console.log("passed")
//     : console.log(
//         `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
//       )
// }

// // Examples:

// // SUCCESS CASE

// var expected = ["b", "r", "o", "k", "e", "n"]
// var actual = "broken".split("")
// assertArraysEqual(actual, expected, "splits string into array of characters")
// // console output:
// // passed
// // FAILURE CASE

// var expected = [1, 1, 2, 3, 5, 8, 13]
// var actual = [1, 1, 2, 3, 5, 8]
// assertArraysEqual(actual, expected, "generates first 7 Fibonacci numbers")
// // console output:
// // FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"


