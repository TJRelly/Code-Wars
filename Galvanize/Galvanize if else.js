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
