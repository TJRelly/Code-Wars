function assertArraysEqual(actual, expected, testName) {
  let sameLength = actual.length === expected.length
  let match = true

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      match = false
      break
    }
  }

  match && sameLength
    ? console.log("passed")
    : console.log(
        `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
      )
}

// Examples:

// SUCCESS CASE

var expected = ["b", "r", "o", "k", "e", "n"]
var actual = "broken".split("")
assertArraysEqual(actual, expected, "splits string into array of characters")
// console output:
// passed
// FAILURE CASE

var expected = [1, 1, 2, 3, 5, 8, 13]
var actual = [1, 1, 2, 3, 5, 8]
assertArraysEqual(actual, expected, "generates first 7 Fibonacci numbers")
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"
