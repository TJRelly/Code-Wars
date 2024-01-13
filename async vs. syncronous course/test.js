const letters = "aaabbbbcccddddea"

console.log(removeDups(letters))

function removeDups(arr){
    //declare result 
    let result = ""
    //iterate array
    for(const letter of arr){
        if(!result.includes(letter)) result += letter
    }   
    //return result
    return result
}
