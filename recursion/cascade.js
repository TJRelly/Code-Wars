function cascade(number, decreasing = true, original = []) {
  if (number) {
    strNum = number.toString()
    if (strNum.length === 1) decreasing = false

    // base case
    if (decreasing === false && original[0] === undefined) {
      console.log(Number(strNum))
      return
    }

    console.log(Number(strNum))

    if (decreasing) {
      original.unshift(strNum.slice(-1))
    }

    // update num and print along the way manipulating the rec. case
    // recursive case - string slice
    if (decreasing) return cascade(strNum.slice(0, -1), decreasing, original)
    else return cascade(strNum + original[0], decreasing, original.slice(1))
  }
}

// // Uncomment to test your work!
cascade(12345)
// // should print
// /*
// 111
// 11
// 1
// 11
// 111
// */
