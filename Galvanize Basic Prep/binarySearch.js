// Binary Search Algorithm
// Input: nums[] = [2, 3, 5, 7, 9]target = 7 Output: Element found at index 3  Input: nums[] = [1, 4, 5, 8, 9]target = 2 Output: Element not found

//output element found at index or element not found
function binarySearch(arr, target) {
    let high = arr.length - 1
    let low = 0
    let mid = Math.floor((high + low)/2)
    
    while(high > low) {
        if(arr[mid] === target) return `element found at index ${mid}`
        if(target > arr[mid]) {
            low = mid + 1
            mid = Math.floor((high + low)/2)
        }
        if(target < arr[mid]) {
            high = mid - 1
            mid = Math.floor((high + low)/2)
        }
    }
    return "element not found"
}

console.log(binarySearch([5, 6, 7, 8, 9], 5))//element found at index 0
console.log(binarySearch([2, 3, 5, 7, 9], 7))//element found at index 3
console.log(binarySearch([1, 4, 5, 8, 9], 2))//element not found