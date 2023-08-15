// Given a string, return the letter that appears most frequently. If multiple letters appear with the maximum frequency, return the letter that appears earliest in the alphabet. If the string has no letters, return null. Treat letters as case-sensitive.

// reLetter('I have been looking to your mother!') // 'o'
// reLetter('%^&*()!') // null
// reLetter('Don’t put too much pressure on yourself to pick the best conversational topic ever, at first. ') // 't'
// reLetter('. You don’t have to reinvent the wheel here;') // 'e'
// reLetter('') // null

const reLetter = (str) => {
  let map = {}
  let highest = 0
  let highestChar = ""
  console.log(str)
  for (let letter of str) {
    if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
      if (!map[letter]) map[letter] = 0
      map[letter]++
      if (map[letter] > highest) {
        highest = map[letter]
        highestChar = letter
      }
    }
  }
  if (!highestChar) return null
  return highestChar
}
