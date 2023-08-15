// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  let sentence = s.split(" ")
  let res = []
  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence.indexOf(sentence[i]))
    if (sentence.indexOf(sentence[i]) === i) res.push(sentence[i])
  }
  return res.join(" ")
}

const removeDuplicateWords = (str) =>
  str
    .split(" ")
    .filter((word, index, arr) => arr.indexOf(word) === index)
    .join(" ")

