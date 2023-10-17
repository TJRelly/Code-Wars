// FUNCTION DEFINITION(S)
function square(n) {
  return n * n
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) console.log("passed")
  else
    console.log(
      `Failed [${testName}] Expected "${expected}" but got "${actual}"`
    )
}
// TESTS CASES
let actual = 16
let expected = 16 
assertEqual(actual, expected, "squared number")
//passed
actual = 16
expected = 25 
assertEqual(actual, expected, "squared number")
//`Failed [${testName}] Expected ${expected} but got ${actual}`
