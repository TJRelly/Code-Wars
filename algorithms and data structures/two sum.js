var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i
  }
  console.log(map)

  for (let j = 0; j < nums.length; j++) {
    let curr = nums[j]
    let comp = target - curr
    if (map[comp] && map[comp] !== j) {
      return [map[comp], j]
    }
  }
}

const twoSum = (nums, target) => {
  let map = {}
  for (let i = 0; i < nums.length; i++) map[nums[i]] = i

  for (let j = 0; j < nums.length; j++) {
    let curr = nums[j]
    let comp = target - curr
    if (map[comp] && map[comp] !== j) return [map[comp], j]
  }
}

function twoSum(numbers, target) {
  let map = {}
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i]
    if (diff in map) return [map[diff], i]
    map[numbers[i]] = i
  }
}

//Brute force

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}
