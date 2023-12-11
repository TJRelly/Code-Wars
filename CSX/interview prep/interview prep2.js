// Create a function named zipIt that takes two numbers and interleaves their digits to form a single string. The function should merge the digits from both numbers alternately.

function zipIt (num1, num2) {
    //declare results string
    let result = [];
    //spit nums into arrays
    const digits1 = num1.toString();
    const digits2 = num2.toString();
    //find longest string
    let limit = Math.max(digits1.length, digits2.length);
    //iterate longer string
    //concat digits to result string
    for (let i = 0; i < limit; i++) {
        result.push(digits1[i], digits2[i]); //new to me
    }
    //return results string
    return result.join('');
  }

// * Example:
console.log(zipIt(111, 222))  // => '121212'
console.log(zipIt(123, 456))  // => '142536'
console.log(zipIt(12, 5555))  // => '152555'