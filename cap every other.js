// Capitalize every other in string
// "hello" => "hElLo" --- starting with index 0 or 1
// how to handle spaces or non-letter characters
// will there be capital letters in the string?

const capitalizeEveryOther = (str) => {
  let res = ""
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) res += str[i].toUpperCase()
    else res += str[i].toLowerCase()
  }
  return res
}

console.log(capitalizeEveryOther("hello"))
