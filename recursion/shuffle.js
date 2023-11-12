// problem:
function shuffleCards(topHalf, bottomHalf, shuffled = [], counter = 0) {
  //console.log(topHalf, bottomHalf, shuffled, counter,shuffled.length, topHalf.length + bottomHalf.length )
  // Base case: if length of shuffled is the length of top and bottom then return it
  if (shuffled.length === topHalf.length + bottomHalf.length) return shuffled
  // Recursive case:
  // counter has been set to 0, use it to keep track of what cards to interleave.
  // check which deck is longer and use it first, copy (slice at counter) first card first deck and place in shuffled array, same 			with second //deck, etc.
  //incremet counter
  // if either deck has zero length then copy the remaining cards to the shuffled array

  if (topHalf.length > bottomHalf.length) {
    shuffled.push(...topHalf.slice(counter, counter + 1))
    shuffled.push(...bottomHalf.slice(counter, counter + 1))
    if (bottomHalf.slice(counter + 1, counter + 2) === undefined) {
      shuffled.push(...topHalf.slice(counter, counter + Infinity))
    }
    return shuffleCards(topHalf, bottomHalf, shuffled, counter + 1)
  } else {
    shuffled.push(...bottomHalf.slice(counter, counter + 1))
    shuffled.push(...topHalf.slice(counter, counter + 1))
    counter++
    return shuffleCards(topHalf, bottomHalf, shuffled, counter + 1)
  }
}
// // UNCOMMENT TO TEST YOUR WORK
const topHalf = [
  "Queen of Diamonds",
  "Five of Hearts",
  "Ace of Spades",
  "Eight of Clubs",
]
const bottomHalf = ["Jack of Hearts", "Ten of Spades"]
console.log(shuffleCards(topHalf, bottomHalf))
// -> ['Queen of Diamonds',
//       'Jack of Hearts',
//       'Five of Hearts',
//       'Ten of Spades',
//       'Ace of Spades',
//       'Eight of Clubs',
//     ]
