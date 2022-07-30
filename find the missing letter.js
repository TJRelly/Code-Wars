array1 = ['a', 'b', 'c', 'd', 'f'] // 'e'
array2 = ['O', 'Q', 'R', 'S'] // 'P'

//map the array
//change each value to a number
//check if nums are consecutive with loop
//return the missing number and index
//splice the missing letter

function findMissingLetter1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i].charCodeAt(0)
        let next = arr[i + 1].charCodeAt(0)
        if (next - curr > 1) return String.fromCharCode(curr + 1)
    }
}

const findMissingLetter2 = arr => {
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i].charCodeAt()
        let next = arr[i + 1].charCodeAt()
        if (next - curr > 1) return String.fromCharCode(curr + 1)
    }
}

function findMissingLetter(array) {
    let curr = array[0].charCodeAt()
    array.map((letter) => {
        letter.charCodeAt() === curr ? curr++ : curr
    })
    return String.fromCharCode(curr)
}



console.log(findMissingLetter(array1))

console.log(findMissingLetter(array2))

// let consectutive = array1.forEach(e => console.log(e))
// console.log(consectutive)