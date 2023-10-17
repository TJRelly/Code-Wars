function getFullName(firstName, lastName) {
  return firstName + " " + lastName
}

var output = getFullName("Joe", "Smith")
console.log(output) // --> 'Joe Smith'

function getLengthOfWord(word) {
  return word.length
}

var output = getLengthOfWord("some")
console.log(output) // --> 4

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length
}

var output = getLengthOfTwoWords("some", "words")
console.log(output) // --> 9
