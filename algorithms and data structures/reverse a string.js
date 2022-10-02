let str = 'Hi my name is TJ'

const reverse = str => {
    return str.split('').reverse().join('')
}

console.log(reverse(str))

const reverse2 = str => {
    let reversed = []
    if (typeof (str) !== 'string') console.log('error')
    else {
        for (let i = 1; i <= str.length; i++) {
            reversed.push(str[str.length - i])
        }
    }
    return reversed.join('')
}

console.log(reverse2('Hi World!'))