function cascade(number, decreasing = true, original=[]) {
    let strNum = number
    if(number !== undefined){
        strNum = number.toString()
      if(strNum.length === 1) decreasing = false
    
      // base case
    // console.log("number: " + number)
    
    
    if(decreasing === false && original[0] === undefined) {
      console.log(Number(strNum))
      return 
    }
    
    // console.log("original: " + original)
    // console.log("counter: " + counter)
    // console.log("decreasing: " + decreasing)
    console.log(Number(strNum))
       
    if(decreasing) {
      original.unshift(strNum.slice(-1))
    }
    
    
    // update num and print along the way manipulating the rec. case
    // recursive case - string slice
    if(decreasing) return cascade(strNum.slice(0, -1), decreasing, original)
       else if(original[0]) return cascade(strNum + original[0], decreasing, original.slice(1))
    }
  }
  
  // // Uncomment to test your work!
  cascade(12345)
  // // should print
  // /*
  // 111
  // 11
  // 1
  // 11
  // 111
  // */