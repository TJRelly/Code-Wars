// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

let x = [1, 2, 3, 4] // 1 * 2 * 3 * 4 = 24

const grow = arr => {
    let result = 1
    for (let num of arr) {
        result *= num
    }
    return result
}

// const grow = arr => arr.reduce((acc, curr) => acc * curr)

console.log(grow(x))