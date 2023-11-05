function multiplyBetween(num1, num2) {
    if(num2 <= num1) {
        return 0
    }
    
    let product = num1
    
    for(let i = num1 + 1; i < num2; i++) {
        product *= i
    }
    
    return product
  }

  console.log(multiplyBetween(1, 4))