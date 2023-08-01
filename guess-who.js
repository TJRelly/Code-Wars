function GuessWho(character) {
  ;(this.turns = 0),
    (this.character = character),
    (this.characteristic = [
      [
        "Jean-Claude",
        [
          "Male",
          "Glasses",
          "Brown eyes",
          "Bald",
          "White hair",
          "Small mouth",
          "Small nose",
        ],
      ],
      [
        "Pierre",
        [
          "Male",
          "Mustache",
          "Brown eyes",
          "Brown hair",
          "Big mouth",
          "Small nose",
        ],
      ],
      ["Jean", ["Male", "White hair", "Big nose", "Big mouth", "Blue eyes"]],
      [
        "Amelie",
        [
          "Female",
          "Hat",
          "Brown hair",
          "Small mouth",
          "Long hair",
          "Brown eyes",
          "Small nose",
        ],
      ],
      [
        "Mirabelle",
        [
          "Female",
          "Black hair",
          "Earrings",
          "Small mouth",
          "Brown eyes",
          "Big nose",
        ],
      ],
      [
        "Isabelle",
        [
          "Female",
          "Blonde hair",
          "Glasses",
          "Hat",
          "Small mouth",
          "Small nose",
          "Brown eyes",
        ],
      ],
      [
        "Antonin",
        ["Male", "Brown eyes", "Black hair", "Small nose", "Big mouth"],
      ],
      ["Bernard", ["Male", "Brown eyes", "Brown hair", "Small nose", "Hat"]],
      [
        "Owen",
        ["Male", "Blue eyes", "Blonde hair", "Small nose", "Small mouth"],
      ],
      [
        "Dylan",
        [
          "Male",
          "Brown eyes",
          "Blonde hair",
          "Small nose",
          "Small mouth",
          "Bald",
          "Beard",
        ],
      ],
      [
        "Herbert",
        [
          "Male",
          "Brown eyes",
          "Blonde hair",
          "Big nose",
          "Small mouth",
          "Bald",
        ],
      ],
      [
        "Christine",
        [
          "Female",
          "Blue eyes",
          "Blonde hair",
          "Small nose",
          "Small mouth",
          "Long hair",
        ],
      ],
      [
        "Luc",
        [
          "Male",
          "Brown eyes",
          "White hair",
          "Small nose",
          "Small mouth",
          "Glasses",
        ],
      ],
      [
        "Cecilian",
        ["Male", "Brown eyes", "Ginger hair", "Small nose", "Small mouth"],
      ],
      [
        "Lionel",
        [
          "Male",
          "Brown eyes",
          "Brown hair",
          "Big nose",
          "Big mouth",
          "Mustache",
        ],
      ],
      [
        "Benoit",
        [
          "Male",
          "Brown eyes",
          "Brown hair",
          "Small mouth",
          "Small nose",
          "Mustache",
          "Beard",
        ],
      ],
      ["Robert", ["Male", "Blue eyes", "Brown hair", "Big nose", "Big mouth"]],
      [
        "Charline",
        ["Female", "Brown hair", "White hair", "Small nose", "Big mouth"],
      ],
      [
        "Renaud",
        [
          "Male",
          "Brown eyes",
          "Blonde hair",
          "Small nose",
          "Big mouth",
          "Mustache",
        ],
      ],
      [
        "Michel",
        [
          "Male",
          "Brown eyes",
          "Blonde hair",
          "Small nose",
          "Big mouth",
          "Beard",
        ],
      ],
      [
        "Pierre-Louis",
        [
          "Male",
          "Blue eyes",
          "Brown hair",
          "Small nose",
          "Small mouth",
          "Bald",
          "Glasses",
        ],
      ],
      [
        "Etienne",
        [
          "Male",
          "Brown eyes",
          "Blonde hair",
          "Small nose",
          "Small mouth",
          "Glasses",
        ],
      ],
      [
        "Henri",
        ["Male", "Brown eyes", "White hair", "Small nose", "Big mouth", "Hat"],
      ],
      [
        "Damien",
        ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Hat"],
      ],
    ])
}

GuessWho.prototype.guess = function (guess) {
  //check if guess is name
  const guessIsName = this.characteristic.some((character) =>
    character.includes(guess)
  )
  //check characteristics of correct guess
  let correctGuess = this.characteristic.filter(
    (character) => character[0] === this.character
  )

  //if the guess is not a name
  //check correct guess for the characteristic
  //if correct guess has the characteristic, filter characters with the characteristic
  //if not, filter the characters w/o that characterstic
  //turn taken
  if (!guessIsName) {
    correctGuess[0][1].includes(guess)
      ? (this.characteristic = this.characteristic.filter((character) =>
          character[1].includes(guess)
        ))
      : (this.characteristic = this.characteristic.filter(
          (character) => !character[1].includes(guess)
        ))
    this.turns++
  }

  //if the guess is name, but it's not correct guess, filter out the incorrect guess
  //turn taken
  if (guessIsName && guess !== this.character) {
    this.characteristic = this.characteristic.filter(
      (character) => character[0] !== guess
    )
    this.turns++
  }

  //if guess is correct, you win, last turn taken
  if (guess === this.character) {
    this.turns++
    return [`Correct! in ${this.turns} turns`]
  }

  //return updated character list
  let characters = this.characteristic.map((char) => char[0])

  return characters
}
