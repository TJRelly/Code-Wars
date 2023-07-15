//Factorial - Recursion

const factorial = (n) => {
  //base case
  if (n === 0) return 1
  //recursive function
  return n * factorial(n - 1)
}

console.log(factorial(4))

//reduce array into object

const vehicles = ["car", "car", "truck", "car", "truck", "bus", "bike"]
const transportation = vehicles.reduce((obj, vehicle) => {
  if (!obj[vehicle]) obj[vehicle] = 0
  obj[vehicle]++
  return obj
}, {})

console.table(transportation)

//fizzbuzz

const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("fizzbuzz")
    else if (i % 5 === 0) console.log("buzz")
    else if (i % 3 === 0) console.log("fizz")
    else console.log(i)
  }
}

fizzbuzz(150)
