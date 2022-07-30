//Rough code
function isPangram(string) {
    let alphabet = 'abcdefghijklmnopqrstuvzwxyz'.split('')
    let strArr = string.toLowerCase().split('')
    //filter duplicates
    let noDupArr = strArr.filter((e, i) => strArr.indexOf(e) === i)
    //filter alphabet
    let output = noDupArr.filter(letter => alphabet.includes(letter))
    return output.length === 26
}

//Cleaner Code
function isPangram(string) {
    //Does the string include every letter?
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return alphabet.split('').every(letter => string.toLowerCase().includes(letter))
}
