// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

function findPairForSum(arr, target){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }
    return []
}

function assertArraysEqual(actual, expected, testName) {
    console.log
    let equalLengths = actual.length === expected.length
    let equalValues = true

    for(let i = 0; i < actual.length; i++) {
        if(actual[i] !== expected[i]) {
            equalValues = false
        }
    }

    return equalLengths && equalValues ? console.log("passed") : console.log(`Failed [${testName}] expected "${expected}" but got "${actual}"`)
}

let actual = findPairForSum([3, 34, 45, 12, 5, 2], 9)
let expected = []
assertArraysEqual(actual, expected, "should return empty array if no matches")

actual = findPairForSum([3, 34, 45, 12, 5, 2], 50)
expected = [45, 5]
assertArraysEqual(actual, expected, "should return arr with addeds")