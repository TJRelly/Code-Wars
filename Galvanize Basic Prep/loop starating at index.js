function loopStartingAtIndex(array, index) {
    // create a loop which iterates from index to the end of the input array
    // log current array element to the console
    for (let i = index; i < array.length; i++) {
      console.log(array[i])
    }
  }
  
  loopStartingAtIndex(["a", "b", "c", "d", "e"], 2)
  // console output:
  // c
  // d
  // e
  
  loopStartingAtIndex([1, 2, 3, 4, 5], 3)
  // console output:
  // 4
  // 5