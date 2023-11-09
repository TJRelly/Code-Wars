// Recursive Function - a function that calls itself from within
// It help you to visualize a complex problem in smaller repeatable steps

// Create a recursive function

// 2 Parts
// Base Case - stops function
// Recursive call - holds the repeatable steps

// Example - Factorial - product of all the positive integers between a number and 1
// 4! = 4 * 3 * 2 * 1

function factorial(n) {
    //base case
    if(n === 0) return 1
    //recursive call
    return n * factorial(n - 1)
}

console.log(factorial(4))

4 * 6
3 * 2
2 * 1
1 * 1

numerator = 12
denominator = 0
fraction = denominator/ numerator