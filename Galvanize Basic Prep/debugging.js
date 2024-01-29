// We are going to debug a function that takes in an object, and a target value. This function will iterate over the object's values, and attempt to locate the target value. If the value is found, the function should return the name of the key where the value in question is located, and if not, the function should return -1. Below is an example of the code running, assuming that you will have debugged the described function: keyOfObjectValue:

function keyOfObjectValue(object, target) {
  for (const key in object) {
    if (object[key] === target) {
      return key;
    }
  }
  return -1;
}

// var result1 = keyOfObjectValue({ cucumbers: 14, carrots: 20, peas: 400 }, 20);
// console.log('should log "carrots":', result1);

// var result2 = keyOfObjectValue(
//   { name: "Bruce Wayne", hero: "Batman", city: "Gotham" },
//   "Superman"
// );
// console.log("should log -1:", result2);

// We are going to debug a function that takes in an array of numbers. This function will iterate over the array's number elements, and return a count representing the number of elements whose value is greater than 40. If there are no values above 40, then the function should return 0. Below is an example of the code running, assuming that you will have debugged the described function: getElementsAbove40:

//input: arr of nums
function getElementsAbove40(numbers) {
  //iterate array
  //initialize count to zero
  //if num greater than 40 tally it
  //increment count
  //return count
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 40) {
      count++;
    }
  }

  return count;
}

// var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
// console.log("should log 3:", result1);

// var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
// console.log("should log 0:", result2);



function createSentence(words) {
  var sentence = "";
  for (var i = 0; i < words.length; i++) {
    // hint: does this line need to happen every iteration?
    if (i === words.length - 1) sentence += words[i] + ".";
    else sentence += words[i] + " ";
  }
  return sentence
}

console.log(createSentence(["Hello", "world"]));
