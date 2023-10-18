// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = []

  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]))
  }

  return newArray
}

function cubeAll(n) {
  return n ** 3
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
  let sameLength = actual.length === expected.length
  let hasSameItems = true
  for (let i in actual) {
    if (actual[i] !== expected[i]) {
      hasSameItems = false
      break
    }
  }
  if (sameLength && hasSameItems) console.log("passed")
  else
    console.log(
      `Failed [${testName}] Expected [${expected}] but got [${actual}]
      
      `
    )
}

// TESTS CASES
let actual = map([1, 2, 3], cubeAll)
let expected = [1, 8, 27]
assertArraysEqual(actual, expected, "cube all")
// passed

actual = map([3, 5, 7], cubeAll)
expected = [27, 125,343]
assertArraysEqual(actual, expected, "cube all")
// passed

actual = map([1, 2, 3], cubeAll)
expected = [5, 8, 27]
assertArraysEqual(actual, expected, "cube all")
// `Failed [${testName}] Expected "${expected}" but got "${actual}"`

actual = map([1, 2, 3], cubeAll)
expected = [1, 9, 27]
assertArraysEqual(actual, expected, "cube all")
// `Failed [${testName}] Expected "${expected}" but got "${actual}"`

actual = map([1, 2, 3], cubeAll)
expected = [1, 8, 2]
assertArraysEqual(actual, expected, "cube all")
// `Failed [${testName}] Expected "${expected}" but got "${actual}"`
