// Capitalize every other in string
// "hello" => "hElLo" --- starting with index 0 or 1
// how to handle spaces or non-letter characters
// will there be capital letters in the string?

const capitalizeEveryOther1 = (str) => {
  let res = ""
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) res += str[i].toUpperCase()
    else res += str[i].toLowerCase()
  }
  return res
}

const capitalizeEveryOther = (str) =>
  [...str].reduce(
    (a, c, i) => (i % 2 === 0 ? a + c.toUpperCase() : a + c.toLowerCase()),
    ""
  )

console.log(capitalizeEveryOther("hello"))
