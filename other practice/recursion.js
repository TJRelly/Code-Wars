//Factorial
//4! = 4 * 3 * 2 * 1 = 24

const factorial = (n) => {
  //Base Case
  if (n === 0) return 1
  //Recursive call
  else return n * factorial(n - 1)
}

console.log(factorial(4)) //24

// factorial(4)
//     4 * factorial(3)
//         3 * factorial(2)
//             2 * ...