function reduce2(array, callback, initialValue) {
  // If initial value is undefined or null we assign it to the first element in the array
  let acc = initialValue ?? array[0]; //let acc = initialValue === undefined ? array[0] : initialValue;
  // if initialValue is undefined we decrease the loops iterations by one
  for (let i = initialValue === undefined ? 1 : 0; i < array.length; i++) {
    // pass in acc, curr into callback
    acc = callback(acc, array[i]);
    // reassign acc to the evaluated result of previous
    // console.log(i, acc);
  }
  // return acc
  return acc;
}
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce2(nums, add));
