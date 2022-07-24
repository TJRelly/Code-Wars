function countPositivesSumNegatives(input) {
    let pos = []
    let neg = []
    if (input === null || !input.length) return []
    else {
        input.map(num => {
            return num > 0 ? pos.push(num) : neg.push(num)
        })
    }
    let out1 = pos.length
    let out2 = neg.reduce((a, c) => a + c, 0)
    return [out1, out2]
}
