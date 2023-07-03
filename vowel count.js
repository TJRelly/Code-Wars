function getCount(str) {
    let count = 0
    const vowels = ['a', 'e','i','o','u']
    for (let letter of str) {
      if (vowels.includes(letter)) count ++
    }
    return count
  }

  function getCount(str) {
    const vowels = ['a', 'e','i','o','u']
    return [...str].reduce((a, c) => {
      if (vowels.includes(c)) a++
      return a
    }, 0)
  }

  //Set O(1) is faster than includes O(n)

  function getCount(str) {
    let count = 0
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    for (let letter of str) {
      if (vowels.has(letter)) count ++
    }
    return count
  }

  function getCount(str) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    return [...str].filter(letter => vowels.has(letter)).length
  }