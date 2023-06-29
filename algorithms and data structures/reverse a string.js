let str = 'Hi my name is TJ'

const reverse = str => {
    return str.split('').reverse().join('')
}

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

const reverse3 = str => str.split('').reverse().join('') 

console.log(reverse(str))
console.log(reverse2(str))
console.log(reverse3(str))