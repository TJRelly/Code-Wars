let inventory = {
  fruits: ["strawberry", "banana", "grapes", "apple"],
  liquids: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}

let shopOpen = true

let toppingsChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping would you like?"))
    }, 3000)
  })
}

async function kitchen() {
  console.log(" A ")
  console.log(" B ")
  console.log(" C ")

  await toppingsChoice()

  console.log(" D ")
  console.log(" E ")
}

kitchen()

console.log("doing the dishes")
console.log("cleaning the tobles")
console.log("taking other orders")