//Synchronous - everything in order -> a race with one lane - one stops, everyone stops

//Asynchronous - everything independently -> a race with multiple lanes - if anyone stops, everyone continues to run

//callbacks - calling a function inside another function

// Order --> Production

let order = (fruit, call_production) => {
  setTimeout(() => {
    console.log(`${inventory.fruits[fruit]} was selected`)
    call_production()
  }, 2000)
}

let production = () => {
  setTimeout(() => {
    console.log("production has started")

    setTimeout(() => {
      console.log("the fruit has been chopped")

      setTimeout(() => {
        console.log(
          `${inventory.liquids[0]} and ${inventory.liquids[1]} has been added`
        )

        setTimeout(() => {
          console.log("machine was started")

          setTimeout(() => {
            console.log(`ice cream placed in ${inventory.holders[0]}`)

            setTimeout(() => {
              console.log(`${inventory.toppings[1]} added to the top`)


              
            }, 1000)
          }, 2000)
        }, 1000)
      }, 1000)
    }, 2000)
  }, 0)
}

// Store Room ---> Back-end
// Kitchen ---> Front-end

let inventory = {
  fruits: ["strawberry", "banana", "grapes", "apple"],
  liquids: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}

order(0, production)
