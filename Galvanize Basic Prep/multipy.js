function multiply(num1, num2) {
    num1Pos = Math.abs(num1)
    num2Pos = Math.abs(num2)
    
    let product = 0
    
    for(let i = 0; i < num1Pos; i ++) {
       product += num2Pos
    }
  
  return isPos(num1) && isPos(num2) ? product : -product
}

function isPos(num) {
    positive = true
    
    if(num !== Math.abs(num)) {
        positive = false
    }
    
    return positive
}

console.log(multiply(-5, 3))