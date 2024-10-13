
var sortedSquares = function(nums) {
    //iterate nums, square each number, sort array
    //Time O(nlogn)
    // const squared = nums.map(num => num**2) //O(n)
    // const sortedSquares = squared.sort((a, b) => a - b) //O(nlogn)
    // return sortedSquares

    //two pointers
    //L and R
    //if squared item is greater add to array, move pointer, compare next items
    //O(n) time and space

    let i = 0
    let j = nums.length - 1
    
    const sortedSquares = []

    while(i <= j) {
        let iSquared = nums[i]**2
        let jSquared = nums[j]**2

        if(iSquared > jSquared) {
            sortedSquares.push(iSquared)
            i++
        } else {
            sortedSquares.push(jSquared)
            j--
        }
    }

    return sortedSquares.reverse()
};