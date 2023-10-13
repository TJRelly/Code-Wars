bakingList = ["flour", "butter", "sugar", "eggs"]
ingredient = "chips"

// function findIngredient(ingredientList, ingredientToSearchFor) {
//   // if ingredientToSearchFor is present within ingredientList
//   // return '{ingredientToSearchFor} is on the list'
//   let ingredient = ingredientList.indexOf(ingredientToSearchFor)
//   if (ingredient > -1) return ingredientToSearchFor + " is on the list"
//   // otherwise
//   // return '{ingredientToSearchFor} is not on the list'
//   else return ingredientToSearchFor + " is not on the list"
// }

function findIngredient(ingredientList, ingredientToSearchFor) {
    // if ingredientToSearchFor is present within ingredientList
    // return '{ingredientToSearchFor} is on the list'
    let ingredient = ingredientList.includes(ingredientToSearchFor)
    if (ingredient) return ingredientToSearchFor + " is on the list"
    // otherwise
    // return '{ingredientToSearchFor} is not on the list'
    else return ingredientToSearchFor + " is not on the list"
  }

console.log(findIngredient(bakingList, ingredient))

function measureRequiredFruit(fruitTotals) {
  // if there are more than 3 bananas and more than 10 strawberries
    // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
    let bananas = fruitTotals["bananas"]
    console.log(bananas)
    let strawberries = fruitTotals["stawberries"]
    console.log(strawberries)
    if (bananas > 3 && strawberries > 10) return "We have enough fruit , with " + bananas + " bananas, and " + strawberries + " strawberries"
  // otherwise
    // return 'We do not have enough of both fruits'
    else return "We do not have enough of both fruits"
}

var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);