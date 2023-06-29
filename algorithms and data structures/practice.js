// Recursion is a programming technique were a function calls itself. It is used to break a problem into small repeatable step to solve the problem.
// factorial

const factorial = (num) => {
  // base case
  return num === 0 ? 1 : num * factorial(num - 1)
}

// console.log(factorial(3))

// Reducing list into object

vehicles = ["van", "van", "car", "bus", "train", "train", "train"]

let transport = vehicles.reduce((obj, vehicle) => {
  if (!obj[vehicle]) {
    obj[vehicle] = 0
  }
  obj[vehicle]++
  return obj
}, {})

// console.log(transport)
// console.log(transport.train)
// console.log(transport["train"])

arr1 = [1, 2, 3, "a"]
arr2 = ["a", "b", "c"]

//Nested loops time complexity

const isDup = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      console.log(array1[i], array2[j])
      if (array1[i] === array2[j]) return true
    }
  }
  return false
}

const isDup2 = (array1, array2) => {
  let obj = {}
  for (let i = 0; i < array1.length; i++) {
    obj[array1[i]] = true
  }
  for (let j = 0; j < array2.length; j++) {
    if (obj[array2[j]]) return true
  }
  return false
}

console.log(isDup(arr1, arr2))

console.log(isDup2(arr1, arr2))