function loopASequenceAgain(start, end) {
    // create a loop which loops from start to end
    // log current value to console
    for (let i = start; i <= end; i++) {
      console.log(i)
    }
  }
  
  loopASequenceAgain(2, 5)
  // console output:
  // 2
  // 3
  // 4
  // 5
  
  loopASequenceAgain(3, 7)
  // console output:
  // 3
  // 4
  // 5
  // 6
  // 7
  
  function loopAnArrayAgain(array) {
    // create a loop which iterates over the input array
    // log current array element to the console
    for (item of array) {
      console.log(item)
    }
  }
  
  loopAnArrayAgain(["a", "b", "c", "d"])
  // console output:
  // a
  // b
  // c
  // d
  
  loopAnArrayAgain([1, 2, 3, 4, 5])
  // console output:
  // 1
  // 2
  // 3
  // 4
  // 5
  