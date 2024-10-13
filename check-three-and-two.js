function checkThreeAndTwo(array) {
    const dups = array.reduce((acc, curr) => {
      acc[curr] = ++acc[curr] || 1
      return acc
    }, {})
    
    let vals = Object.values(dups)
    
    return vals.includes(3) && vals.includes(2)
  }