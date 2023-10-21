// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  let words = sentence.split(" ")
  // iterate words and collect the palindromes
  let palindromes = words.filter((word) => isPalindrome(word))
  // sort the list of palindromes by word length
  let sorted = palindromes.sort(sortAscendingByLength)
  // return the largest item in the sorted list
  return sorted.at(-1)
}

function reverseString(string) {
  //turn to array - reverse - join
  return string.split("").reverse().join("")
}

function isPalindrome(word) {
  //if string is same as reverse then it's a palindrome
  return word === reverseString(word)
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1
  } else if (a.length < b.length) {
    return -1
  }
  return 0
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  return actual === expected
    ? "passed"
    : `Failed [${testName}] Expected "${expected}" but got "${actual}"`
}

// TESTS CASES
let string = "tests"
let actual = reverseString(string)
let expected = "stset"
console.log(assertEqual(actual, expected, "reverse string"))

let string2 = "radar"
let actual2 = isPalindrome(string2)
let expected2 = true
console.log(assertEqual(actual2, expected2, "palindrome true"))

let string3 = "radars"
let actual3 = isPalindrome(string3)
let expected3 = false
console.log(assertEqual(actual3, expected3, "palindrome false"))

let string4 = "radar peep"
let actual4 = findLongestPalindrome(string4)
let expected4 = "radar"
console.log(assertEqual(actual4, expected4, "longest palindrome in sentence"))

let string5 = "pop dad mom"
let actual5 = findLongestPalindrome(string5)
let expected5 = "mom"
console.log(assertEqual(actual5, expected5, "find last of equal length palindromes"))
