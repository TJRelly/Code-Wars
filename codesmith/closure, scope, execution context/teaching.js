

//   function holidays(arr) {
//     // Do not use a variable to store your result 
//     //iterate array to seach for October
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === "October") return "Happy Halloween"
//     }
//     return "Have a great day!"
//   }
    
  
//   // Uncomment these to check your work!
//   const months = ["April", "May", "June", "October"];
//   const animals = ["Cats", "Dogs", "Pigs"];
//   console.log(holidays(months)); // should return: "Happy Halloween"
//   console.log(holidays(animals)); // should return: "Have a great day!"

// function multiplyAll(...args) {
//     let total = 1;
//     for (let x = 0; x < args.length; x++) {
//       total = total*args[x];
//     }
//     return total;
//   }
  
//   // Uncomment these to check your work!
//   console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
//   console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

function imAboutToExplodeWithExcitement(n){
    for (let x = n; x > -1; x--) {
      if (x === 5) {
        console.log('Oh wow\, I can\'t handle the anticipation\!');
      }
      if (x === 3) {
        console.log('I\'m about to explode with excitement\!')
      }
      if (x === 0) {
        console.log('That was kind of a let down')
      }
      else {
        console.log (x);
      }
    }
  }
  
  // Uncomment the line below to check your work!
  imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'