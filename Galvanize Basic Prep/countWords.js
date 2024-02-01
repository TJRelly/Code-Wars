// Write a function called "countWords".

// Given a string (words separated by spaces), "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string. If given an empty string, your function should return an empty object.

function countWords(stringOfWords) {
  if (!stringOfWords.length) return {};
  return stringOfWords.split(" ").reduce((obj, word) => {
    obj[word] = ++obj[word] || 1;
    return obj;
  }, {});
}

const result1 = countWords("ask a bunch get a bunch");
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

const result2 = countWords("");
console.log('should log "{}":', result2);
