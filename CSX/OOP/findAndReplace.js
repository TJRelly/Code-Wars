/* 
Declare a variable 'animals' and set it an array containing the strings 'dog', 'frog', 'armadillo', 'parrot', and 'cow'.
*/
const animals = ['dog', 'frog', 'armadillo', 'parrot', 'cow']
// console.log(animals[2])

/* 
Declare a function called 'capitalize', which takes in a string as an argument.
If the string contains 5 or more characters, 'capitalize' should return that string with the first letter capitalized.
If the string contains fewer than 5 characters, return a lowercase version of the entire string.
*/

//Declare a function called 'capitalize'//input: string
function capitalize(str) {
  let newStr = str.toLowerCase()
  //if input has more than 5 char - capitalize
   if(newStr.length > 5) return newStr[0].toUpperCase() + newStr.slice(1)
	//if less than five --- lowercase
   else return newStr
	//output: string
}

// console.log(capitalize("terrell"))//Terrell
// console.log(capitalize("TERrELL"))//Terrell
// console.log(capitalize("hidfss"))//hi
// console.log(capitalize("HI"))//hi

/* 
Declare a function 'changeElements' which takes an array and a callback as arguments.
'changeElements' should iterate through the array run the callback on each element. It should *replace* each array element with the result of running the callback on that element - i.e., the array should be modified in place rather than creating a copy.
When finished, return the updated array.
*/

//declare a function "changeElements" //input: arr and cb
//but mutate the original array w/ evaluated result of ele passed into cb
function changeElements(arr, cb) {
  //iterate array 
  for(let i = 0; i < arr.length; i++) {
    //run callback on each element
    arr[i] = cb(arr[i])
  }
  return arr
}


// Test your work by running 'changeElements' on the 'animals' array and 'capitalize' function.
// console.log(changeElements(animals, capitalize))
// console.log(changeElements(["one", "fivest"], capitalize))

/* 
Write a function 'cacheCalls' that takes in a callback as an argument, and returns a function that invokes this callback and caches (remembers the input and output) each result.
The returned function takes an unspecified number of arguments. When the returned function is invoked, it should return an array containing the results of running the callback on EACH passed-in value. If it has already run the callback on any of the passed-in values, it should retrieve the corresponding result from the cache rather than running the function again. Once complete, make sure to test your function.*/

//declare outerfunction 'cacheCalls'//input: cb
function cacheCalls(cb) {
  //declare cache var
  const cache = {}
	//output: inner funv //input many args
  return function(...args) {
    let output = []
		//if it has'nt seen the input already
    for(const arg of args) {
      if(!cache[arg]){
        cache[arg] = cb(arg)
        //invoke cb and cache it
        output.push(cb(arg))
      } else {
        output.push(cache[arg])
      }
    }
		//output an array with evaluated results of running cb on elements
    // console.log(cache)
    return output
  } 
}

const multiplyBy2 = num => num * 2;

const cachedMultiplyBy2 = cacheCalls(multiplyBy2);

// console.log(cachedMultiplyBy2(2, 4)); // [4, 8]
// console.log(cachedMultiplyBy2(2, 4)); // [4, 8] (from the cache)
// console.log(cachedMultiplyBy2(10, 20, 30)); // [20,40,60]
// console.log(cachedMultiplyBy2(10, 20, 30)); // [20,40,60] (from the cache)

/* 
Declare a recursive  function 'backwardsAndForwards' that accepts one string as an argument and returns true if that string is a palindrome (i.e. the same backwards and forwards). If the string isn't a palindrome, it will return false. This should be inclusive of spaces and punctuation - e.g. the string 'racecar' would be considered a palindrome, but 'race car' would not.
*/
//Declare a recursive  function 'backwardsAndForwards' //input: string
//output: boolean
function backwardsAndForwards(str) {
  //base case: empty string
  if(str.length === 0) return true
	//recursive case:
	//will compare at first and last elements and revome them
  if(str[0] !== str[str.length - 1]) return false
	
	//test if palindrome
  return backwardsAndForwards(str.slice(1, -1))
}


// console.log(backwardsAndForwards('racecar'))//true
// console.log(backwardsAndForwards('race car'))//false

/* 
Declare a function, 'List', which takes in no arguments and returns an instance of a 'List' object when invoked with the 'new' keyword.
List objects should function similarly to an array - i.e., they will store values at numbered indexes, starting at 0. (You will later be creating methods to add values to the List.)
All List objects should contain their own 'length' property, which keeps track of the number of items they contain. When a List is first created, it should have a length of 0.
*/

// Declare a function, 'List'//no input
function List() {
  this.length = 0
}
//length property start at 0
//return obj


/* 
Declare a function, 'add', which is accessible to ALL instances of 'List'. 'add' should take in a single argument, and when invoked on a List instance, should add the argument to the end of that particular List (i.e. at the highest index), increment the List's length property, and return the new length.
*/

// Declare a function, 'add' on the prototype of List//input: arg
List.prototype.add = function(arg) {
  // add arg to end of list by index
  this[this.length] = arg
	// increment list length
  let newLength = this.length++
	// return new length
  return newLength
}



/*
Declare a function 'findAndReplace' which is accessible to ALL instances of 'List'. 'findAndReplace' should take two arguments (a value to search for and a new value). When 'findAndReplace' is invoked on an instance of 'List' it should search for the value to replace. If that value exists in the 'List' instance it should replace that value with the new value argument and return out the updated 'List' instance. If element doesn't exist in the 'List' instance it should return a string saying "element doesn't exist"
*/

//declare func 'findAndReplace' on prototype // two args (a value to search for and a new value)
List.prototype.findAndReplace= function(arg1, arg2) {
    //iterate this to find values
    //search val to replace
    for(const key in this) {
      //if val exists replace w/ new val
      if(this[key] === arg1) {
        this[key] = arg2
        //return updated list
        return this
      }  
    }
    //otherwise return a string saying "element doesn't exist"
    return "element doesn't exist"
  }
  
  let list = new List
  
  list.add("hello")
  list.add("sup Lucas")
  console.log(list)
  console.log(list.findAndReplace("sup Luca", "bye"))
  console.log(list.findAndReplace("sup Lucas", "bye"))