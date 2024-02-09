//declare func once
//input call back
function once(callback) {
  // cache the result
  let cache;
  // cache times called
  let hasBeenCalled = false;
  //output func
  return function (...args) {
    //if called return cached result
    if (hasBeenCalled) return cache;
    //1st call returns evaluated result of callback's output
    //cache the value
    cache = callback(...args);
    //update memory for times called
    hasBeenCalled = true;
    return cache;
  };
}

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
