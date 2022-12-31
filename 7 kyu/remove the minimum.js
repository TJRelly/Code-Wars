// function removeSmallest(numbers) {
//     let smallest = Math.min(...numbers)
//     let indexOfSmallest = numbers.indexOf(smallest)
//     return numbers.filter((n, i) => i !== indexOfSmallest ? n : '')
//   }

//  const removeSmallest = (numbers) => numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)) ? n : '')

// nums = [1, 2, 3, 4, 5]

// console.log(removeSmallest(nums))

array1 = ['a', 'b', 'c']
array2 = ['x', 'y', 'c']

const matchingValue = (arr1, arr2) => {
    let map = arr1.reduce((obj, curr) => {
        if (!obj[curr]) obj[curr] = true
        return obj
    }, {})
    
    console.log(map)

    for (i in arr2) {
        if (map[arr2[i]]) return true
    }
    return false
}

console.log(matchingValue(array1, array2))