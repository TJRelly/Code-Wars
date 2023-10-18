// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  let sumOfNums = sum(numbers)
  return  sumOfNums / numbers.length
}

function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr)
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  actual === expected
    ? console.log("passed")
    : console.log(
        `Failed [${testName}] Expected "${expected}" but got "${actual}"`
      )
}

// TESTS CASES
let input = [1, 2, 3, 4, 5]

//sum
let actual = sum(input)
let expected = 15
assertEqual(actual, expected, "find sum")

//average
actual = average(input)
expected = 3
assertEqual(actual, expected, "find average")
