function divisors(integer) {
    let factors = []
    for (let i = 2; i < integer; i++){
      if (integer % i === 0) factors.push(i)
    }
    return factors.length ? factors : integer + " is prime"
  }

  const divisors = n => {
    res = []
    for(let i = 2; i < n; i++){
      if (n % i === 0) res.push(i)
    }
    return !res.length ? n + " is prime": res
  }