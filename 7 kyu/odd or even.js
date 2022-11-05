function oddOrEven(array) {
    return !(array.reduce((acc, curr) => acc + curr, 0) % 2) ? 'even' : 'odd'
 }
 