//input: array and cb
//output: object
function countBy(array, cb){
    //declare empty obj
    let result = {}
    //iterate arr
    for(let element of array) {
      //track number of times value returned from cb
            //if value exists in obj
                //increment the value
      let key = cb(element)
      //invoke callback of each ele
      //save result as key on obj
      !result[key] ? result[key] = 1 : result[key]++
    }
      
    //return obj
    return result
  }
  
  // Uncomment these to check your work!
  function evenOdd(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
  }
  const nums = [1, 2, 3, 4, 5];
  console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }