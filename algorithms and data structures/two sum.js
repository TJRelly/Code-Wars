var twoSum = function(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        map[nums[i]] = i
    }
    console.log (map)

    for (let j = 0; j < nums.length; j++){
        let curr = nums[j]
        let comp = target - curr
        if (map[comp] && map[comp] !== j){
            return [map[comp], j]
        }
    }
};