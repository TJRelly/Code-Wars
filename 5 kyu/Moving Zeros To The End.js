// In a given array, remove zero and attach them to the end

const moveZeros = (arr) => {
  let zeros = arr.filter(num => num === 0)
  let nums = arr.filter(num => num !== 0)
  return nums.concat(zeros)
}