function cascade(number, originalNum, increasing = false) {
    // if(number === 1) {
    //     console.log(number)
    //     console.log(placeHolder)
    //     return 1
    // }

    // placeHolder = number
    // console.log(number)
    // return cascade(Math.floor(number/10), placeHolder)
    originalNum = number
    number = number.toString()
    
    console.log(originalNum)
    //base case 1: if number is equal to original number and increasing is true
        //return 
    if(number === originalNum && increasing) return    
    //if not increasing //log number    
    //if number length is equal to 1 then increasing is equal to true
    if(number.length === 1) increasing = true
    //if increasing use original number to restore each digit    
    console.log(number)
    //recursive case 1: cut digit from number
    if(!increasing) return cascade(number.slice(0, -1), originalNum, increasing)
    //recursive case 2: add digit back to number from originalNum
    else {
        number += originalNum[0]
        return cascade(number, originalNum.slice(1), increasing)
    }
}

console.log(cascade(12345))