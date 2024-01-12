const letters = "aaabbbbcccddddea"

console.log(removeDups(letters))

function removeDups(str){
    // //declare result 
    // let result = ""
    // //iterate array
    // for(const letter of arr){
    //     //check if duplicate
    //     let isDup = false
    //     for(const char of result) {
    //         if(letter === char) isDup = true
    //     }
    //     //if not duplicate concat with result
    //     if(!isDup) result += letter
    // }   
    // //return result
    // return result

    //save letter to hash map
    
    const map = {}
    str.split("").forEach(letter => {
        map[letter] = ++map[letter] || 1
    })
    //return keys
    return Object.keys(map).join("")
}
