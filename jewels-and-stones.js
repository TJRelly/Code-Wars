
var numJewelsInStones = function(jewels, stones) {
    //iterate the stones to find if they match the jewels
        //if item in stones is in jewels increase count
        //return count
    // let matches = 0
    // for(let stone of stones) {
    //     if(jewels.includes(stone)) {
    //         matches++
    //     }
    // }      
    // return matches
    
    //create object with jewel count
    //add all matching stones to jewels
    // O(N + M) time --- N #stone, M #jewels
    // O(N) space --- stoneCount object
    // let stoneCount = {}

    // for(let stone of stones) {
    //     stoneCount[stone] = ++stoneCount[stone] || 1
    // }

    // let matches = 0

    // for(let jewel of jewels) {
    //     if(jewel in stoneCount) {
    //         matches += stoneCount[jewel]
    //     }
    // }

    //O(N + M) time, O(N) space
    const jewelSet = new Set(jewels); //O(N) time and space

    let matches = 0;

    for(const stone of stones) {
        if(jewelSet.has(stone)) matches++
    }; // O(M) time

    return matches
};