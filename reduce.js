function reduce(array, callback, initialValue) {
  // If the functions initialValue is undefined,

  //"accumulator value" starts as first element in array
  if (initialValue === undefined) acc = array[0];
  else acc = initialValue;
  // loop starts on acc[1], note: needs 1 less iteration than when passed an initialValue
  for (let i = 1; i < array.length; i++) {
    // pass in acc, curr into callback
    acc = callback(acc, array[i]);
    // reassign acc to the evaluated result of previous
    console.log(i, acc);
  }
  // return acc
  return acc;
  //     }// Else The function has an "accumulator value" which starts as the initialValue
  //             let acc = initialValue;
  //           // iterate over array
  //             for(let i = 0; i < array.length; i++) {
  //                     // pass in acc, curr into callback
  //                 acc = callback(acc, array[i])
  //                     // reassign acc to the evaluated result of previous
  //               console.log(i, acc)
  //           }
  //             // return acc
  //             return acc;
}
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add)); //-> 8
