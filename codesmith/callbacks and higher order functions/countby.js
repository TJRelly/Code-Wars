//input: array and cb
//output: object
function countBy(array, cb){
    // //declare empty obj
    // const result = {}
    // //iterate arr
    // for(const element of array) {
    //   //track number of times value returned from cb
    //         //if value exists in obj
    //             //increment the value
    //   let key = cb(element)
    //   //invoke callback of each ele
    //   //save result as key on obj
    //   // !result[key] ? result[key] = 1 : result[key]++
    //   result[key] = ++result[key] || 1
    // }
      
    // //return obj
    // return result
    return array.reduce((obj, curr) => {
      let key = cb(curr)
      // !obj[key] ? obj[key] = 1 : obj[key]++
      obj[key] = ++obj[key] || 1
      return obj
    }, {})
  }
  
  // Uncomment these to check your work!
  function evenOdd(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
  }
  const nums = [1, 2, 3, 4, 5];
  console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }