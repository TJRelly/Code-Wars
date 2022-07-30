//find the number that is different in the array
//[1,1,1,2] //2
//Is the list sorted? 
//are the lists the same length?

//function that takes in arrays
//sorts the items
//if the first two are equal return the last num
//esle return the first num

function stray(numbers) {
    numbers.sort((a, b) => a - b)
    if (numbers[0] === numbers[1]) return numbers.at(-1)
    else return (numbers[0])
}

const stray = nums => {
    nums.sort((a, b) => a - b)
    return nums[0] === nums[1] ? nums.at(-1) : nums[0]
}