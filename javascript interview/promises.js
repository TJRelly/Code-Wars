// Understanding Promises
// https://www.youtube.com/watch?v=3OX-jOMiPLY&t=0s

// You call a shoe store to find out if the new Jordan's are available

// The store says yes! -- This is a "promise" to you that the store has what you are looking for.

//Promise fullfilled: You go to the store and the shoes are availble. Hooray! 🎉

//Promis rejected: You go to the store and the "promised" shoes are unavailable. The humanity! 😢

//Promise 1
let shoesAvailable = new Promise((resolve, reject) => {
  inStock = true

  if (inStock) {
    //Promise is fulfilled
    resolve("Store has shoes in stock. 🎉")
  } else {
    //Promise is rejected
    reject("Store does not have shoes in stock. 😢")
  }
})

//Promise 2
let sufficientFunds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Yay! Enough money in the bank"), 1000)
  })
}

// //Promise 2
// let sufficientFunds = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => reject("Sorry! Insufficient funds in the bank."), 1000)
//     })
//   }

//Promise 3
let transaction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Transaction went through"), 1000)
  })
}

// Promise.all([shoesAvailable, sufficientFunds(), transaction()]).then((values) =>
//   console.log(values)
// )

shoesAvailable
    //Promise chaining - used to run multiple asyncronous functions consecutively
  .then((response) => {
    console.log(response)
    return sufficientFunds()
  })
  .then((response) => {
    console.log(response)
    return transaction()
  })
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
