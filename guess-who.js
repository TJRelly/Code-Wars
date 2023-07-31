GuessWho.prototype.guess = function (guess) {
  //check if guess is name
  const guessIsName = this.characteristic.some((character) =>
    character.includes(guess)
  )

  if (!guessIsName) {
    this.characteristic = this.characteristic.filter((character) =>
      character[1].includes(guess)
    )
    this.turns++
  }

  if (guessIsName && guess !== this.character) {
    this.characteristic = this.characteristic.filter(
      (character) => character[0] !== guess
    )
    this.turns++
  }

  if (guess === this.character) {
    this.turns++
    return [`Correct! in ${this.turns} turns`]
  }

  let characters = this.characteristic.map((char) => char[0])

  return characters
}
