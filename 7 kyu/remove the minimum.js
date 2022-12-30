function removeSmallest(numbers) {
    let smallest = Math.min(...numbers)
    let indexOfSmallest = numbers.indexOf(smallest)
    return numbers.filter((n, i) => i !== indexOfSmallest ? n : '')
  }

 const removeSmallest = (numbers) => numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)) ? n : '')

nums = [1, 2, 3, 4, 5]

console.log(removeSmallest(nums))