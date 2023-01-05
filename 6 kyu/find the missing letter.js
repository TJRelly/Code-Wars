array1 = ['a', 'b', 'c', 'd', 'f'] // 'e'
array2 = ['O', 'Q', 'R', 'S'] // 'P'

//map the array
//change each value to a number
//check if nums are consecutive with loop
//return the missing number and index
//splice the missing letter

function findMissingLetter(array) {
    for (let i = 0; i < array.lenght; i++) {
        console.log(String.fromCharCode(ar[i].charCodeAt(0) + 1)
    }
}


console.log(findMissingLetter(array1))

console.log(findMissingLetter(array2))

// let consectutive = array1.forEach(e => console.log(e))
// console.log(consectutive)