function calculateYears(principal, interest, tax, desired) {
    let year = 0
    while (principal < desired) {
        year++
        let totalInterest = principal * interest
        let totalTaxes = principal * interest * tax
        let gain = totalInterest - totalTaxes
        principal += gain
    }
    return year
}