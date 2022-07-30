function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b)=> a - b)
    return numbers[0] + numbers[1]
  }

  const sumTwoSmallestNumbers = nums => {
    nums.sort((a, b) => a - b)
    return nums[0] + nums[1]
  }