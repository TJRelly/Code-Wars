const sequenceSum = (begin, end, step) => {
    let total = 0
    if (begin > end) return 0
    else {
      for (let i = begin; i <= end; i+=step ){
        total += i 
      }
      return total
    }
  };