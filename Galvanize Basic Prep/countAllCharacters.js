//returns obj
//key - char of string
//value - number of times it appears
function countAllCharacters(string) {
  if (!string.length) return {};
  return string.split("").reduce((obj, char) => {
    obj[char] = ++obj[char] || 1;
    return obj;
  }, {});
}

console.log(countAllCharacters(""))
console.log(countAllCharacters("racecar"))