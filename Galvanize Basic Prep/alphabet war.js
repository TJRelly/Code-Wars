// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

function alphabetWar(fight) {
  
    let left = 0;
    let right = 0;
    
    for(let i = 0; i < fight.length; i ++) {
      if(fight[i] === "w") left += 4;
      if(fight[i] === "p") left += 3;
      if(fight[i] === "b") left += 2;
      if(fight[i] === "s") left += 1;
      
      if(fight[i] === "m") right += 4;
      if(fight[i] === "q") right += 3;
      if(fight[i] === "d") right += 2;
      if(fight[i] === "z") right += 1;
    }
    
    return left > right ? "Left side wins!" : right > left ? "Right side wins!" : "Let's fight again!";
  }