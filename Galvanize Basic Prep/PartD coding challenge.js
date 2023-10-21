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

function generateLaceDetails(inventory) {
  const laceDetails = []

  for (designer of inventory) {
    for (shoe of designer.shoes) {
      if (shoe.name.indexOf("lace") !== -1) {
        const shoeArr = shoe.name.split(" ")
        const shoeDetails = {
          nameWords: shoeArr,
          targetWordIndex: findLaceInArray(shoeArr),
        }
        laceDetails.push(shoeDetails)
      }
    }
  }

  return laceDetails
}

// Helper function(s)
function findLaceInArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf("lace") !== -1) {
      return i
    }
  }
}

// Assertation Function(s)
function assertArraysEqual(actual, expected, testName) {
  let sameLength = actual.length === expected.length
  let match = true

  for (let i = 0; i < actual.length; i++) {
    actual[i] = JSON.stringify(actual[i])
    expected[i] = JSON.stringify(expected[i])

    if (actual[i] !== expected[i]) {
      match = false
      console.log(
        `Failed [assertObjectsEqual] expected ${expected[i]} but got ${actual[i]}`
      )
      break
    }
  }
  sameLength && match
    ? console.log("passed")
    : console.log(
        `Failed [${testName}] Expected "${expected}" but got "${actual}`
      )
}

// Test Case(s)
let actual = generateLaceDetails(currentInventory)
let expected = [
  {
    nameWords: ["tasselled", "black", "low-top", "lace-up"],
    targetWordIndex: 3,
  },
  {
    nameWords: ["tasselled", "green", "low-top", "lace-up"],
    targetWordIndex: 3,
  },
  {
    nameWords: ["red", "leather", "laced", "sneakers"],
    targetWordIndex: 2,
  },
  {
    nameWords: ["black", "leather", "laced", "sneakers"],
    targetWordIndex: 2,
  },
]

assertArraysEqual(actual, expected, "find all laced shoes")
