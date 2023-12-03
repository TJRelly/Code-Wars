// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

//input: 2 arrays, callback
//output: obj

//? reduce

function objOfMatches(arr1, arr2, callback) {
    return arr1.reduce((obj, curr, i) => {
      //take each current value and run through callback function
      //compare result of invocation to corresponding item in array 2
      //if match array 1 item = key and array 2 item = value
      if(arr2[i] === callback(curr)) obj[curr] = arr2[i]
      return obj
    }, {})
  }
  

// Uncomment these to check your work!
// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }