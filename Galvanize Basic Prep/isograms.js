// Skeleton
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// note: a set drops dup values
// thus, to see if all the chars were unique,
// check length of text and the size of the set

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  let set = new Set(text.toLowerCase().split(""))
  return text.length === set.size
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    actual === expected ? console.log("passed") : console.log(`Failed [${testName}] Expected ${expected} but got ${actual}`)
}

// TESTS CASES
let actual = isIsogram("hapPy")
let expected = false
assertEqual(actual, expected, "ignores case")

actual = isIsogram("love")
expected = true
assertEqual(actual, expected, "isogram")

actual = isIsogram("parallel")
expected = false
assertEqual(actual, expected, "non isogram")

actual = isIsogram("")
expected = true
assertEqual(actual, expected, "")

