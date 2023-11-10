// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(str) {
    let broken = ""
    for (let i = 0; i < str.length; i++) {
       if (str.charAt(i) === str.charAt(i).toUpperCase()) broken += " "
       broken += str[i]
    }
  return broken
}