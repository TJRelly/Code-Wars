// Declare a function 'isHappyNumber' that takes in a positive integer as its single argument and returns a boolean, indicating whether the input number is a happy number. Happy numbers are those that, when replaced iteratively by the sum of the squares of their digits, eventually reach 1.

console.log(isHappyNumber(399));	// false
console.log(isHappyNumber(82)); // true
console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(9119)); // false

//input: positive integer
//output: boolean
function isHappyNumber(num) {
  const seenNums = [];
  while (num !== 1) {
    num = sumOfSquares(num);
    if(num === 1) return true
    else {
        if(seenNums.includes(num)) return false //found num in cycle, not happy
        else seenNums.push(num) //add seen numbers to to check for infinit cycle
    }
  }
  return true //if number is already 1
}

function sumOfSquares(num) {
  //iterate the digit //square each digit //total digits
  return num
    .toString()
    .split("")
    .map((digit) => digit ** 2)
    .reduce((acc, curr) => acc + curr);
}
