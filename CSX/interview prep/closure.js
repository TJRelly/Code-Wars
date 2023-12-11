// Write a function 'stored' that takes in a function and returns a new function. The new function
// will check if it has already computed the result for the given argument. If it hasn't, it will
// run the passed-in function on the argument and return the result. If it has, it will return
// the stored argument along with its result. If an argument is not a number, the new function
// will not store the argument and instead return the error message "Please enter a valid number".

//input: function
//output: new function

function stored(callback) {
  const cache = {};

  return function (arg) {
    //if arg not a number return "Please enter a valid number"
    if (typeof arg !== "number") return "Please enter a valid number";
    //check cache for arg
    //if arg in cache return cache key and value
    if (arg in cache) return arg + ": " + cache[arg];
    //otherwise   //return evaluted result of the callback w/ arg
    cache[arg] = callback(arg);

    return callback(arg);
  };
}

const cube = (n) => n ** 3;
const cubeStored = stored(cube);
console.log(cubeStored(2)); // 8
console.log(cubeStored(2)); // '2: 8'
console.log(cubeStored(3)); // 27
console.log(cubeStored(3)); // '3: 27'
console.log(cubeStored("a")); // "Please enter a valid number"
console.log(cubeStored("a")); // "Please enter a valid number"
console.log(cubeStored(2)); // '2: 8'
