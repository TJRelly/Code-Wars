// function capitalizeFirst (arr, result=[]) {
//     //base case: if arr is empty return new array with capital strings
//     if(arr.length === 0) return result
//     //recursive case:
//     //take first element in array and capital it.
//     result.push(arr[0][0].toUpperCase() + arr[0].slice(1))
    
//     return capitalizeFirst(arr.slice(1), result)        
//   }

  function capitalizeFirst (arr) {
    //base case: if arr is empty return new array with capital strings
    let result = []
    if(arr.length === 0) return result
    //recursive case:
    //take first element in array and capitalize it.
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1))
    //push to result arr
    //return result
    return result.concat(capitalizeFirst(arr.slice(1)))    
  }
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana'])

function makePerson(name, age) {
	this.name = name
  this.age = age

}

const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24