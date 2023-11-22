function Inventory(item, price) {
  this[item] = {
    price: price,
    quantity: 1,
  }
  //Prototype chain 3 methods
  //1: addItem - accepts item and price
  Inventory.prototype.addItem = function (item, price) {
    //checks to see if item obj has property
    if (this.hasOwnProperty(item)) {
      //if yes increment quantity and replace price with passed in value
      this[item].quantity++
      this[item].price = price
    } else {
      //if not add one and set to another item obj
      this[item] = {
        price: price,
        quantity: 1,
      }
    }
  }
  //2: deleteItem - accept str
  Inventory.prototype.deleteItem = function (item) {
    //if matching prop on inv obj
    if (this.hasOwnProperty(item)) {
      if (this[item].quantity > 0) {
        //decrement quantity, return str - "Deleted"
        this[item].quantity--
        return "Deleted"
      }
      //if quantity is 0, return str - "Nothing to delete"
      if (this[item].quantity === 0) return "Nothing to delete"
    }
  }

  //3. checkItem takes str - check if str in inv object
  Inventory.prototype.checkItem = function (item) {
    //if so, return the object for item
    //if not, return "Item is not in inventory"
    return this.hasOwnProperty(item) ? this[item] : "Item is not in inventory"
  }
}

const myInventory = new Inventory("cucumber", 2)

// Uncomment these lines to check your work!
myInventory.addItem("carrot", 1)
console.log(myInventory.checkItem("cucumber")) // Logs: { price: 2, quantity: 1 }
myInventory.addItem("cucumber", 3)
console.log(myInventory.deleteItem("carrot")) // Logs: 'Deleted'
console.log(myInventory.deleteItem("carrot")) // Logs: 'Nothing to delete'
console.log(myInventory) // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem("radish")) // Logs: 'Item is not in inventory'
