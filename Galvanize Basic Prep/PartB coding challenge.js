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

function calculateAveragePricePerDesigner(inventory) {
  let averagePriceObj = {
    designers: [],
  }

  for (let designer of inventory) {
    let designerObj = {}
    designerObj.name = designer.name
    designerObj.averagePrice = findAveragePrice(designer)

    averagePriceObj["designers"].push(designerObj)
  }
  return averagePriceObj
}

// Create helper functions if needed
function findAveragePrice(shoesListObj) {
  let totalNumberOfShoes = 0
  let totalPriceOfShoes = shoesListObj.shoes.reduce((acc, shoe) => {
    totalNumberOfShoes++
    return shoe.price + acc
  }, 0)
  return totalPriceOfShoes / totalNumberOfShoes
}

//Assertation
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)
  return actual === expected
    ? console.log("passed")
    : console.log(
        `Failed [${testName}] Expected "${expected}" but got "${actual}"`
      )
}
//Test Cases
let actual = calculateAveragePricePerDesigner(currentInventory)

var expected = {
  designers: [
    {
      name: "Brunello Cucinelli",
      averagePrice: 1025,
    },
    {
      name: "Gucci",
      averagePrice: 850,
    },
  ],
}

assertObjectsEqual(actual, expected, "average price")
