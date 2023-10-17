function isOldEnoughToDrink(age) {
  return age >= 21
}

var output = isOldEnoughToDrink(22)
console.log(output) // --> true

function isOldEnoughToDrive(age) {
  return age >= 16
}

var output = isOldEnoughToDrive(22)
console.log(output) // --> true

function isOldEnoughToVote(age) {
  return age >= 18
}

var output = isOldEnoughToVote(22)
console.log(output) // --> true

function isOldEnoughToDrinkAndDrive(age) {
    return false
}

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false