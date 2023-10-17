// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch = true

  for (var i = 0; i < array.length; i++) {
    if (doesEveryElementMatch != callbackFunction(array[i])) {
      doesEveryElementMatch = false
      break
    }
  }
  return doesEveryElementMatch
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) console.log("passed")
  else console.log(`Failed [${testName}] Expected "true" but got "${actual}"`)
}

// TESTS CASES
function isBelowTen(n) {
  return n < 10
}

let actual = every([2, 4, 6], isBelowTen)
assertEqual(actual, true, "every")
// passed

actual = every([10, 4, 6], isBelowTen)
assertEqual(actual, true, "every")
//`Failed [${testName}] Expected "true" but got "${actual}"`

actual = every([1, 4, 6], isBelowTen)
assertEqual(actual, true, "every")
//passed

actual = every([1, 40, 6], isBelowTen)
assertEqual(actual, true, "every")
//`Failed [${testName}] Expected "true" but got "${actual}"`

actual = every([9, 9, 9], isBelowTen)
assertEqual(actual, true, "every")
//passed

actual = every([1, 4, 10], isBelowTen)
assertEqual(actual, true, "every")
//`Failed [${testName}] Expected "true" but got "${actual}"`
