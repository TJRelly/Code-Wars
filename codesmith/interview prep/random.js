// // Given a list of strings, return a list where each string is replaced by 3 copies of the string concatenated together.

// copies3(["a", "bb", "ccc"]) //["aaa", "bbbbbb", "ccccccccc"]
// copies3(["24", "a", ""]) //["242424", "aaa", ""]
// copies3(["hello", "there"]) //["hellohellohello", "theretherethere"]

// //input: array
// //output: array
// //declare function copies3
// function copies3(arr) {
//   //declare result array
//   // const results = []
// 	//iterate arr
//   // let string = ""
//   // for(let i = 0; i < arr.length; i++){
//   //   //inner loop to concat
//   //   // for(let j = 0; j < 3; j++) {
//   //   //   string += arr[i]
//   //   // }
//   //   string = arr[i].repeat(3)
//   // 	//push string to results
//   //   results.push(string)
//   //   //clear string
//   //   string = ""
//   // //push to result array
//   // //return result array
//   // }

//   const results = arr.map(str => str.repeat(3))

//   console.log(results)
// }

// console.log(triangle(0)); // 0
// console.log(triangle(1)); // 1
// console.log(triangle(2)); // 3
// console.log(triangle(3)); // 5
// console.log(triangle(4)); // 7
// console.log(triangle(5)); // 9

// function triangle(input){
//     //start at zero and add input to previous input
//     //base case: num is equal input
//     if(input === 0) return 0
//     if(input === 1) return 1
//     //recursive case: increase input by recursive result
//     return 2 + triangle(input - 1)
// }

// function triangle(int, aux = 0) {
//   if (!int) return aux;

//   aux += int;
//   return triangle(int - 1, aux);
// }

/* 

Declare a function 'NumberedList', which returns a new instance of a 'NumberedList' object when invoked with the `new` keyword.

NumberedList objects should function similarly to arrays - i.e. they store values at number indexes, starting at 0. 

Any arguments passed into the 'NumberedList' constructor should be sequentially added to the NumberedList when it is instantiated.

NumberedList objects should also contain a length property, which keeps track of the number of elements in the list.

*/

function NumberedList(...args) {
  //iterate args
  //use loop to track indexes
  for (let i = 0; i < args.length; i++) {
    //key will be the index
    //value will be the assciated arg
    this[i] = args[i];
  }

  this.length = args.length;
}

const list = new NumberedList(1, 2, 3); // --> create the object and return it

console.log(list); // {length: 3, 0: 1, 1: 2, 2: 3}

//   /*
//   Declare a function, 'manipulateNumberedList', that is available to ALL instances of the NumberedList object.
//   'manipulateNumberedList' takes in a callback function as its argument. The callback function will accept one argument. When calling 'manipulateNumberedList' on a NumberedList object it should return a new NumberedList object that contains values returned from running the callback function on each of original NumberedList's values.

NumberedList.prototype.manipulateNumberedList = function(callback) {
    let newList = [];

    for (let i = 0; i < this.length; i++) {
        newList.push(callback(this[i]))
    };

    return new NumberedList(...newList)
}

const addTwo = (num) => num + 2;

console.log(list.manipulateNumberedList(addTwo)); // => / {0: 3, 1 : 4, 3: 5}
// {0: 3, 1 : 4, 3: 5}


//   */
// NumberedList.prototype.manipulateNumberedList = function (callback) {
//   // declare a function manipulateNumberedList //  use prototype links on the NumberedList obj
//   // input: callback func (one argument)

//   // output: new numberd LIst Ojb.  that contains values returned form running th callbak function
//   //initialize newArray
//   const newArray = [];

//   // initialize for loop  to iterate throu the value of output
//   for (let i = 0; i < this.length; i++) {
//     //invoke callback with the value from output
//     // callback(this[i])
//     // push those vavlues to newArray ;
//     newArray.push(callback(this[i]));
//   }
//   return new NumberedList(...newArray);
// };



// Challenge: most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

//input: string
//output: string - most frequent
//declare func mostFrequentChar
function mostFrequentChar(str) {
  //track instance of characters in obj
  const obj = {};
  for (let char of str) {
    obj[char] = ++obj[char] || 1;
  }
  //iterate obj, storing highest value and associated key
  let highest = 0;
  let aKey = "";
  //iterate obj, reassign highest and associated key
  for (let key in obj) {
    if (obj[key] > highest) {
      highest = obj[key];
      aKey = key;
    }
  }
  //return associated key
  return aKey;
}

// test_00:
// console.log(mostFrequentChar('bookeeper')); // -> 'e'
// test_01:
// mostFrequentChar('david'); // -> 'd'
// test_02:
// mostFrequentChar('abby'); // -> 'b'
// test_03:
// mostFrequentChar('mississippi'); // -> 'i'
// test_04:
// mostFrequentChar('potato'); // -> 'o'
// test_05:
// mostFrequentChar('eleventennine'); // -> 'e'
// test_06:
// mostFrequentChar("riverbed"); // -> 'r'
