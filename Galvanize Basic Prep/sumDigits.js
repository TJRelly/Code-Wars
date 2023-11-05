// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4
// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

function sumDigits(num) {
    let positive = true
    let nums = num.toString().split("")
    
    if (num !== Math.abs(num)) {
        positive = false
    }

    if(positive) {
        let sum = sumNums(nums)
        return sum
    } else {
        nums.shift()
        nums[0] *= -1
        let sum = sumNums(nums)
        return sum
    }   
}

function sumNums(arr){
    let sum = 0
    for(num of arr) {
        sum += Number(num)
    }
    return sum
}


function findSmallestNumberAmongMixedElements(arr) {
    //filter numbers
    //sort smallest to greatest
    let numbers = []
    let smallest = ""
    
    for (let item of arr) {
        if(typeof item = "number") {
            numbers.push(item)
        }
    }
    
    for(let num of numbers) {
        if(smallest === "") {
            smallest = num
        }
    }
    
    return smallest
  }