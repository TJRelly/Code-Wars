// Google Question
// Return the first reoccuring character
// Given:

let array = [2, 5, 1, 2, 3, 1, 2, 4] //2
let array2 = [2, 1, 3, 5, 4, 5, 1, 2, 4] //1
let array3 = [2, 3, 4, 5] //undefined

const firstReoccuring = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i]
    }
  }
}

//O(n^2)

console.log(firstReoccuring(array))
console.log(firstReoccuring(array2))
console.log(firstReoccuring(array3))

const firstReoccuring2 = (arr) => {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if(!map[arr[i]]) map[arr[i]] = true
    else return arr[i]
  }
}

console.log(firstReoccuring2(array))
console.log(firstReoccuring2(array2))
console.log(firstReoccuring2(array3))
