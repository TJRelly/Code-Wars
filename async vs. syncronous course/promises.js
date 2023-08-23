let inventory = {
  fruits: ["strawberry", "banana", "grapes", "apple"],
  liquids: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}

let shopOpen = true

let serveIceCream = new Promise((resolve, reject) => {
  
  if (shopOpen) {
    resolve("Welcome")
  } else {
    reject("Sorry. We're closed.")
  }
})

let order = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Order Placed"))
        }, 1000)
    })
}

serveIceCream
  .then((response) => {
    console.log(response)
    return order()
  })
  
  .catch((err) => console.log(err))
  
  .finally(() => setTimeout(() => {
    console.log("Please come again!")
  }, 1000))
