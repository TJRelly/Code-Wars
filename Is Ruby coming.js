// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

function isRubyComing(list) {
  // iterate list
  for (let dev of list) {
    // capture developer languange
    // if language is Ruby for any developer return true
    if (dev.language === "Ruby") return true;
  }
  // otherwise return false
  return false;
}
