let array1 = [0, 3, 4, 31]
let array2 = [4, 6, 30]
//[0,3,4,4,6,30,31]
//concat these arrays
//sort these arrays

function mergeSortedArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b, 0)
}

const mergeSortedArrays2 = (arr1, arr2) =>
    arr1.concat(arr2).sort((a, b) => a - b, 0)

function mergeSortedArrays3(arr1, arr2) {
    if (!arr1.length) return arr2
    if (!arr2.length) return arr1

    const merged = []
    // let arr1Item = arr1[0]
    // let arr2Item = arr2[0]
    // let i = 1
    // let j = 1

    // // while (arr1Item || arr2Item) {
    // //     if (arr1Item < arr2Item) {
    // //         merged.push(arr1Item)
    // //         i++
    // //         arr1Item = arr1[i]
    // //     } else {
    // //         merged.push(arr2Item)
    // //         j++
    // //         arr2Item = arr2[j]
    // //     }
    // // }
    return merged
}

console.log(mergeSortedArrays3(array1, array2))