function computeFactorialOfN(n) {
    if(n === 0) return 1
    return n * computeFactorialOfN(n - 1)
}

console.log(computeFactorialOfN(6))