// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

function solution(digits) {
  //loop by group of 5
  //compare groups
  let temp = []
  for (let i = 0; i < digits.length; i++) {
    let groupSize = 5
    let fiveDigitNum = digits.slice(i, i + groupSize)
    if (fiveDigitNum.length === 5) {
      if (temp.length === 0) temp.push(fiveDigitNum)
      else if (temp[0] < fiveDigitNum) temp[0] = fiveDigitNum
    }
  }
  return Number(temp[0])
}

const solution = (digits) => {
  let max = ""
  for (let i = 0; i < digits.length - 4; i++) {
    max = Math.max(digits.slice(i, i + 5), max)
  }
  return max
}
