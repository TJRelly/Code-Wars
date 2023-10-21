var currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
]

// Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

// //...console output:
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// // and so on...
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

// Hint: the return value is a string.

function renderInventory(inventory) {
  let flatList = ""

  for (designer of inventory) {
    for (shoe of designer.shoes) {
    flatList += renderShoeString(designer.name, shoe.name, shoe.price)
    }
  }

  return flatList
}

//Create helper functions if needed
function renderShoeString(designerName, shoeName, shoePrice) {
  return `${designerName}, ${shoeName}, ${shoePrice}\n`
}

// Assertion Function(s)
function assertEqual(actual, expected, testName) {
  return actual === expected
    ? console.log("passed")
    : console.log(
        `Failed [${testName}] Expected "${expected}" but got "${actual}"`
      )
}

// Test Cases
console.log(renderInventory(currentInventory))

// let actual = renderInventory(currentInventory)
// let expected = 5
// let testName = "assert equal test"
// assertEqual(actual, expected, testName)
