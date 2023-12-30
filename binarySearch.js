function binarySearch(arr, value) {
  //pointer: start
  let start = 0;
  //pointer: end
  let end = arr.length - 1;
  //loop until value is found
  //if start is equal to or greater than the end stop looping
  while (start <= end) {
    //pointer: mid
    let mid = Math.floor((start + end) / 2);
    //check if value is mid
    //if value found return index
    if (value === arr[mid]) return mid;
    //if value is greater than mid
    //start becomes the the mid and the loop continues
    //otherwise end becomes the mid
    value > arr[mid] ? (start = mid + 1) : (end = mid - 1);
  }
  //otherwise return -1
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //should be 1.'.
console.log(binarySearch([1, 2, 3, 4, 5], 3)); //should be 2.'.
console.log(binarySearch([1, 2, 3, 4, 5], 5)); //should be 4.'.
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); //should be 2.'.
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); //should be 16.'.
