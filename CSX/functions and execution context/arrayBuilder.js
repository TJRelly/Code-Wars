//input count obj
//output array with elements from obj grouped by count
function arrayBuilder(obj) {
    //   //create a results array
    //   let results = []
    //   // iterate the obj
    //   for(let key in obj) {
    //     //capture key and value
    //     let value = obj[key]
    //   	//push key to results "value" amount of times
    //   		//use for loop w/ value as conditional
    //     for(let i = 0; i < value; i++) {
    //       results.push(key)
    //     }
    //   }
          
    //   //return results array
    //   return results
      
      return Object.keys(obj).reduce((arr, key) => {
        let value = obj[key];
        //push value of key to array "value" amount of times
        for(let i = 0; i < value; i++) {
          arr.push(key);
        }
        return arr;
      }, [])
    }
    
    // Uncomment these to check your work!
    console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
    console.log(arrayBuilder({})); // => []