// String Compression using count of repeated characters - Run Length Encoding
// Objective: Write an algorithm to compress the given string by using the count of repeated characters.

//declare func compress
//input: string
//output: string
function compress(str) {
  //declare output str
  let output = "";
  //split str into array
  //reduce array into object that tracks
  let arr = str.split("");

  let obj = arr.reduce((obj, curr) => {
    //key: letter
    //value: frequency
    obj[curr] = ++obj[curr] || 1;
    return obj;
  }, {});

  //iterate object
  for (let key in obj) {
    //concat key, value to ouput string
    output += key + obj[key];
  }

  //return output string
  return output;
}

// Example:
// Input String : ssssuuuummmmmmiiiittttttttttttt
// Compressed String : s4u4m6i4t13

console.log(compress("ssssuuuummmmmmiiiittttttttttttt")); //s4u4m6i4t13
console.log(compress("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"));

//Do the reverse

//declare fun decompress
//input: string
//output: string
function decompress(str) {
  
  //declare output str
  let output = "";
  //declare letter str
  let letter = "";
  //declare number str
  let number = "";
  //declare digits str
  const digits = "0123456789";

  //intialize a for loop
  for (let i = 0; i < str.length; i++) {
    //if not a digit
    if(!digits.includes(str[i])) letter += str[i]
      //store in letter
    //if digit, store in number
    else number += str[i]
    //if next element is not a digit
    
    if(!digits.includes(str[i + 1])) {
      //concat letter to output "number" amount of times
      output += letter.repeat(Number(number))
      number = ""
      letter = ""
    } 
  }
  
  //return output
  return output
}

console.log(decompress("s4u4m6i4t13")); //ssssuuuummmmmmiiiittttttttttttt
console.log(decompress("y107")); 