function getAllKeys(obj) {
  let keys = []
  for (let key in obj) {
    keys.push(key)
  }
  return keys
}

var alternativeInput = {
  a: "a",
  number: 11,
  hungry: true,
  grammyWins: 1,
}

console.log(getAllKeys(alternativeInput))

function listAllValues(obj) {
  let values = []
  for (key in obj) {
    values.push(obj[key])
  }
  return values
}

console.log(listAllValues(alternativeInput))

function convertObjectToArray(obj) {
  let keyValuePairs = []
  for (key in obj) {
    let pair = []
    pair.push(key)
    pair.push(obj[key])
    keyValuePairs.push(pair)
  }
  return keyValuePairs
}

var input = {
  name: "Holly",
  age: 35,
  role: "producer",
}

//   output: [['name', 'Holly'], ['age', 35], ['role', 'producer']]

console.log(convertObjectToArray(input))

var customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
}

function greetCustomer(firstName) {
  for (let customer in customerData) {
    if (!customerData[firstName]) return "Welcome! Is this your first time?"
    else {
      let visits = customerData[firstName].visits
      if (visits === 1)
        return `Welcome back, ${firstName}! We're glad you liked us the first time!`
      else return `Welcome back, ${firstName}! So glad to see you again!`
    }
  }
}

console.log(greetCustomer("Terrell"))
