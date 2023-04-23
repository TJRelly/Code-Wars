function nbDig(n, d) {
    let squared = []
    
    for (let i = 0; i <= n; i++) {
      squared.push(i ** 2)
    }
  
    let allDs = squared.join('').split('').filter(num => num == d)
    
    return allDs.length
}