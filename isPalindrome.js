const isPalindrome = x => {
   arr = x.toString().split("")
  
   for(let i = 0; i < arr.length; i++){
        console.log(arr[i] === arr[arr.length - 1])
        if(arr[i] === arr[arr.length - 1]) {
            arr = arr.slice(1, -1)
        }
    }
    return arr.length === 0 || arr.length === 1
}

// console.log(isPalindrome(121)) //true
// console.log(isPalindrome(-121)) //false
console.log(isPalindrome(10)) //false