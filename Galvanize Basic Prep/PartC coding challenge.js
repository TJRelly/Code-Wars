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

function listAllBlackShoes(inventory) {
  let flatList = ""
  for (let designer of inventory) {
    for (let shoe of designer.shoes) {
      if (nameIncludesBlack(shoe)) {
        flatList += renderFlatString(designer.name, shoe.name, shoe.price)
      }
    }
  }
  return flatList
}

//Create helper functions if needed
function renderFlatString(designer, shoeName, shoePrice) {
  return designer + ", " + shoeName + ", " + shoePrice + "\n"
}

function nameIncludesBlack(shoe) {
    return shoe.name.indexOf("black") !== -1
}

// Assertion Function(s)
function assertEqual(actual, expected, testName) {
  actual === expected
    ? console.log("passed")
    : console.log(
        `Failed [${testName}] Expected "${expected}" but got "${actual}"`
      )
}

// Test Cases
let actual = listAllBlackShoes(currentInventory)
let expected =
  "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n"
assertEqual(actual, expected, "only black shoes returned")
