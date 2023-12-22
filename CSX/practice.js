const randomNums = [1, 14, 7, 21, -6]

//declare function minMax //input: array of nums
function minMax (arr) {
    //declare a min var
    let min = arr[0]
    //and max var
    let max = arr[0]
    //track min and max with forloop
    for(const num of arr) {
        if(num > max) max = num
        if(num < min) min = num
    }
    //output: array with min and max
    return [min, max]
}

// console.log(minMax(randomNums))

//declare func addOne //input: num
function addOne(num) {
    return ++num
}
//output: num plus one
// console.log(addOne(5))
// console.log(addOne(8))

//declare func subtractOne //input: num
function subtractOne(num) {
    return --num
}
//output: num minus one
// console.log(subtractOne(5))
// console.log(subtractOne(8))

//use premade functions to increment
//if A immediately follows increment
//if B decrement

//declare func usePotion //input: string
function usePotion (str) {
    let newStr = ""
    //interate the string
    for(let i = 0; i < str.length; i++) {
        //if A after element increment and concat
        if(str[i + 1] === "A") newStr += addOne(Number(str[i]))
        //if B decrement and concat
        else if(str[i + 1] === "B") newStr += subtractOne(Number(str[i]))
        //otherwise concat only if not A and not B is true
        else if(str[i] !== "A" && str[i] !== "B") newStr += str[i]
    }
    return newStr
}
    

console.log(usePotion("1A2B3B45")) //"21245"
console.log(usePotion("9999B")) //"9998"
console.log(usePotion("9A123")) //"10123"
console.log(usePotion("567")) //"567"

// Function Signature
function excludeElements(inputString, excludeChars) {
    let newStr = ""
    for(let i = 0; i < inputString.length; i++) {
       if(!excludeChars.includes(inputString[i])) newStr += inputString[i]
    }
    return newStr
}

// Test Cases
// console.log(excludeElements("hello123", ['e', 'o'])); // "hll123"
// console.log(excludeElements("abcABC123", ['A', '2'])); // "abcBC13"
// console.log(excludeElements("javascript", ['j', 't'])); // "ava"
// console.log(excludeElements("testing", ['x', 'y', 'z'])); // "testing"
// console.log(excludeElements("12345", [])); // "12345"

// Function Signature
function reverseWords(inputString) {
    //convert string to array
   
    //reverse array
   
    //convert array to string and return
    // return inputString.split(" ").reverse().join(" ").trim()
    let output = []
    let arr = inputString.trim().split(" ")
    for (let i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i])
    }
    return output.join(" ")
}
// Test Cases
// console.log(reverseWords("Hello World")); // "World Hello"
// console.log(reverseWords("The quick brown fox")); // "fox brown quick The"
// console.log(reverseWords("JavaScript is fun!")); // "fun! is JavaScript"
// console.log(reverseWords("  OpenAI   GPT-3  ")); // "GPT-3 OpenAI"
// console.log(reverseWords("")); // ""