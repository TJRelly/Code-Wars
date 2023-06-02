var capitals = function (word) {
	// loop the list and return the index of the capitals
  let indexes = []
  for (let i = 0; i < word.length; i++){
    let letter = word[i]
    if (letter.toUpperCase() === letter) indexes.push (word.indexOf(letter))
  }
  return indexes
};