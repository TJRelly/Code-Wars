function calculateFactorial(number) {
    // Base case: if the number is 0 or 1, return 1
    if (number === 0 || number === 1) {
      return 1;
    } else {
      // Recursive case: multiply the current number by the factorial of (number - 1)
      return number * calculateFactorial(number - 1);
    }
  }
  
  // Let's calculate the factorial of 5
  const result = calculateFactorial(4);
  console.log("4 factorial is: " + result);

// ClassicProblem: 4! = 4 * 3 * 2 * 1 = 24 

// 4 * 6
//   3 * 2
//     2 * 1
//       1 = 1
  
//A programing tool used to break a big repetative problem into smaller parts
//A recursive function is a function that calls itself
//It has two parts 
//1. base case 
//2. recusive call
//factorial example  

