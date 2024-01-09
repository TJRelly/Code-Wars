function cascade(number, placeHolder) {
    if(number === 1) {
        console.log(number)
        console.log(placeHolder)
        return 1
    }

    placeHolder = number
    console.log(number)
    return cascade(Math.floor(number/10), placeHolder)
}

console.log(cascade(12345))