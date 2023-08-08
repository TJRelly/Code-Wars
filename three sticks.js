// Imagine that you are given two sticks. You want to end up with three sticks of equal length. You are allowed to cut either or both of the sticks to accomplish this, and can throw away leftover pieces.

// Write a function, maxlen, that takes the lengths of the two sticks (L1 and L2, both positive values), that will return the maximum length you can make the three sticks.

function maxlen(l1, l2) {
    let longStick = Math.max(l1, l2)
    let shortStick = Math.min(l1, l2)
    
    if (longStick > 3 * shortStick) return longStick / 3
    else if (longStick > 2 * shortStick) return shortStick
    else return longStick / 2
  }
  