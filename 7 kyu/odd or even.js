function oddOrEven(array) {
    return !(array.reduce((acc, curr) => acc + curr, 0) % 2) ? 'even' : 'odd'
}

function oddOrEven(array) {
    let sum = array.reduce((acc, curr) => acc + curr, 0)
    return !(sum % 2) ? 'even' : 'odd'
}

const oddOrEven = (array) => !(array.reduce((acc, curr) => acc + curr, 0) % 2) ? 'even' : 'odd'

