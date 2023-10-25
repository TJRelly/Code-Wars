// function wordsToMarks(string){
//   let total = 0
//   for (let i = 0; i < string.length; i++) {
//     total += string[i].charCodeAt(0) - 96
//   }
//   return total
// }

function wordsToMarks(string) {
  return string
    .split("")
    .map((letter) => letter.charCodeAt(0) - 96)
    .reduce((acc, curr) => acc + curr, 0)
}
