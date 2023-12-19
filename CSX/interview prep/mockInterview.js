/* 
Declare a variable, 'fancyColors', and set it to an array containing the strings 'azure', 'bisque', and 'chartreuse'.
*/

const fancyColors = ['azure', 'bisque', 'chartreuse']; // 


// console.log(fancyColors);

/* 
Declare a function, 'camelCase', that takes in two strings as arguments. 'camelCase' should return a new string that contains all characters in the first string, plus the uppercase version of the FIRST character of the second string.

Example: 
camelCase('hi', 'there') //--> 'hiThere'
*/

//output: string
//declare function "camelCase" //input: two strings
function camelCase(str1, str2) {
  //declare newString
  let result = '';
	//first argument concat to newString
  result += str1;
	//second argument capitialize first letter concat to newString
  result += str2[0].toUpperCase() + str2.slice(1);
  return result;
}

// console.log(camelCase('hi', 'there')); //--> 'hiThere'
// console.log(camelCase('hello', 'javaScript'));


/* 
Declare another function called 'condense', which will take in three arguments: an array, a callback function, and a starting value.
When 'condense' is called on a given array, it will condense all of the array's elements into a single value, which it will then return. This returned value is created by sequentially running the callback on each array element. This is how it works:
- The 'condense' function will maintain an 'accumulator value' which will initially be set to the starting string value passed in as the third argument. Its job is to accumulate the outputs of each call to the callback function.
- The array argument is iterated over, passing the accumulator value and the following array element to the callback function.
- The callback function's returned value becomes the new accumulator value.
- The next loop executes with the new accumulator value.
*/

//inputs: array, cb, starting val
//declare func 'condense'
function condense(arr, cb, initialVal) {
  //declare variable accum set to starting val
  let acc = initialVal;
	//  run cb on each elem of array
  for (const element of arr) {
    //declare result var
    //pass the acc and element to the cb
		//reassign acc to result
    acc = cb(acc, element);
  }
	//return accumulator
  return acc;
}
	
/* 
Test your 'condense' function by calling it with the 'fancyColors' array, the 'camelCase' function, and a string representing your favorite color. This should return a string that looks something like this 'purpleAzureBisqueChartreuse' (purple will be whatever color you pass in as the starting value)
*/

// console.log(condense(fancyColors, camelCase, "yellow"))

/* 
Declare a function, 'List', which takes in no arguments and returns an instance of a 'List' object when invoked with the 'new' keyword.
List objects should function similarly to an array - i.e., they will store values at numbered indexes, starting at 0. (You will later be creating methods to add values to the List.)
All List objects should contain their own 'length' property, which keeps track of the number of items they contain. When a List is first created, it should have a length of 0.
*/

//create constructor function "List" //no inputs //invoke with new keyword
function List() {
    //add length property assigned to zero
    this.length = 0;
}

let list = new List()
// console.log(list)

/* 
Declare a function, 'add', which is accessible to ALL instances of 'List'. 'add' should take in a single argument, and when invoked on a List instance, should add the argument to the end of that particular List (i.e. at the highest index), increment the List's length property, and return the new length.
*/

//declare function "add" to List prototype //input: argument
List.prototype.add = function(...args) {
    //key: length of list 
    //value: argument
    //increment the list
    for(value of args) this[this.length++] = value;  
}
   
list.add("hello", 1, 2, 3, 7)
console.log(list)
