let arr1 = [0, 3, 4, 31]
let arr2 = [4, 6, 30]
//[0,3,4,4,6,30,31]
//concat these arrays
//sort these arrays

function mergeSortedArrays(arr1, arr2){
    return arr1.concat(arr2).sort((a, b) => a - b, 0)
}



console.log(mergeSortedArrays(arr1, arr2))