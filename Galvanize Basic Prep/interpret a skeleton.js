// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  wordArr = word.split("")
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
  let letterCount = wordArr.reduce((obj, letter) => {
    if (!obj[letter]) obj[letter] = 0
    obj[letter]++
    return obj
  }, {})

  let highest = 0

  for (count in letterCount) {
    let temp = letterCount[count]
    temp > highest ? (highest = temp) : ""
  }
  return highest
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0
  var wordWithMaxRepeatCount = ""

  // Break up input text into words (space-delimited).
  textArr = text.split(" ")
  // For each word...
  textArr.forEach((word) => {
    var repeatCountForWord = findMaxRepeatCountInWord(word)
    if (repeatCountForWord > maxRepeatCountOverall) {
      maxRepeatCountOverall = repeatCountForWord
      wordWithMaxRepeatCount = word
    }
  })

  return wordWithMaxRepeatCount
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  return actual === expected
    ? console.log("passed")
    : console.log(`Failed [${testName}] Expected ${expected} but got ${actual}`)
}

// TESTS CASES
// findMaxRepeatCountInWord
let input1 = "happy"
let actual1 = findMaxRepeatCountInWord(input1)
let expected1 = 2
assertEqual(actual1, expected1, "should return 2 for most repeated letter")

let input2 = "haaaaaapppyyyy"
let actual2 = findMaxRepeatCountInWord(input2)
let expected2 = 6
assertEqual(actual2, expected2, "should return 6 for most repeated letter")

// findFirstWordWithMostRepeatedChars
let input3 = "hapy happy happpy"
let actual3 = findFirstWordWithMostRepeatedChars(input3)
let expected3 = "happpy"
assertEqual(actual3, expected3, "first word with most repeated letters")

let input4 = "I'm so happy cappy tappyyyy iiii"
let actual4 = findFirstWordWithMostRepeatedChars(input4)
let expected4 = "tappyyyy"
assertEqual(actual4, expected4, "first word with most repeated letters")
