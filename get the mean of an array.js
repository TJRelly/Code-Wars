// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  return Math.floor(marks.reduce((acc, mark) => acc + mark)/marks.length)
}

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here
switch (education){ 
  case "no high school diploma":
      salary += 25636
      break;
  case "a high school diploma":
      salary += 35256
      break;
  case "an Associate's degree":
      salary += 41496
      break;
  case "a Bachelor's degree":
      salary += 59124
      break;
  case "a Master's degree":
      salary += 69732
      break;
  case "a Professional degree":
      salary += 89960
      break;
  case "a Doctoral degree":
      salary += 84396
      break;
}
   console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.")

   string = "Hi Paul"
   subString = "Paul"
let index = string.indexOf(subString)
  console.log(index)