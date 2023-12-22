// declare function prioritize
//input: array, cb
//output: array
function prioritize(arr, cb) {
    // //declare true results array
    // const trueResults = []
    // //declare false results array
    // const falseResults = []
    // //iterate array
    // for(let i = 0; i < arr.length; i++) {
    //   //perform cb on each ele
    // 	let result = cb(arr[i])
    // 	//if result is true
    //   if (result === true) trueResults.push(arr[i])
    //   else falseResults.push(arr[i])
    // 		//push ele to array
    // }
    // //return concat results arrays
    // return trueResults.concat(falseResults)
    let first = arr.filter(str => cb(str))
   let second = arr.filter(str => !cb(str))
    return first.concat(second)
  }
  
  // Uncomment these to check your work!
  function startsWithS(str) { return str[0].toLowerCase() === 's'; }
  const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
  console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']