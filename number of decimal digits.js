// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
    return String(n).split("").length
}

let assertEqual = (actual, expected, testName) => {
    console.log(actual === expected ? "passed" : `Failed [${testName}] Expected "${expected}" but got "${actual}"`)
}

// Tests

let actual = digits(12345)
let expected = 5
assertEqual(actual, expected, "should return correct number of digits")