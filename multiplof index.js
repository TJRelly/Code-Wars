function multipleOfIndex(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] % i === 0) res.push(array[i])
      else if (array[i] === 0 && i === 0) res.push(0)
    }
    return res
  }

  function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0 || num === 0 && i === 0)
  }