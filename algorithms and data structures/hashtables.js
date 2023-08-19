// Google Question
// Return the first reoccuring character
// Given:

let array = [2, 5, 1, 2, 3, 1, 2, 4] //2
let array2 = [2, 1, 1, 5, 4, 5, 1, 2, 4] //1
let array3 = [2, 3, 4, 5] //undefined

const firstReoccuring = (arr) => {
  let temp = arr[0]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i]
      else(arr[i + 1])
    }
  }
}

//time: O(n^2) - 2 loops created space: O(1) - no storage created

console.log(firstReoccuring(array))
console.log(firstReoccuring(array2))
console.log(firstReoccuring(array3))

const firstReoccuring2 = (arr) => {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) map[arr[i]] = true
    else return arr[i]
  }
}

//time complexity: O(n) because 1 loop, space complexity O(n) because map(storage, memory space)

console.log(firstReoccuring2(array))
console.log(firstReoccuring2(array2))
console.log(firstReoccuring2(array3))
