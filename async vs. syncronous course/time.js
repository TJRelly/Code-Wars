let inventory = {
    fruits: ["strawberry", "banana", "grapes", "apple"],
    liquids: ["water", "ice"],
    holders: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  }
  
  let shopOpen = true

async function time(ms) {

    return new Promise ((resolve, reject) => {
        if(shopOpen){
            resolve(setTimeOut(() => {
                
            }))
        }
    })
}  