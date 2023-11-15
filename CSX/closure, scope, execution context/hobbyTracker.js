function hobbyTracker(hobbies) {
    //define cache obj
    let cache = {
      //key: name of each hobby
        //value: hours practiced
    }
    //loop hobbies and use each hobby as key w/ value zero
    for (let hobby of hobbies) {
      cache[hobby] = 0
    }
    
    //input: string (hobby), integer(hours practiced)
    function logHobbyHours(hobby, hoursPracticed) {
        //update cache object
        //output: updated cache object
      if(hobby) {
        cache[hobby] += hoursPracticed
        return cache
      } else {
        //if no input 
            //reset values in cache to zero
        for(let hobby in cache) {
          cache[hobby] = 0
        }
            //output: string "tracker has been reset!"
        return "tracker has been reset!"
      } 
    } 
        
    return logHobbyHours
  }
  
  // Uncomment the code below to check your code:
  const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
  updateHobbies('yoga', 2);
  updateHobbies('baking', 4);
  updateHobbies('yoga', 1);
  console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
  console.log(updateHobbies()); // --> 'tracker has been reset!'
  console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}