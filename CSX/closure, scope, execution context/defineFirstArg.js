// input: function, arg
function defineFirstArg(func, arg) {
	// pass in func
  	//input at least 1 arg
  function newFunc(...args) {
    return func(arg, ...args)
  }
  // output: func invoked w/ passed in func first arg
	return newFunc		
}
// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

// //declare a function defomeFirstArg
// //input: function, arg
// function defineFirstArg(func, arg) {
//     //output: function
//         //input: arg, ...args
//     return function(...args) {
//       //output: invoked passed in functio
//       return func(arg, ...args)
//     }
//   }