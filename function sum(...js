function sum(...nums){
    let added = 0
    for (let num of nums) added += num
    return added
}

// console.log(sum(1, 2, 3, 7, 10))

const stringIncludes = (str1, str2) => {
   let arr = str1.split(' ')
   console.log(arr)
   for (let i= 0; i < str1.length; i++) {
    if (arr[i].toLowerCase() === str2) return true
   }
   return false
}

// console.log("string includes: " + stringIncludes("Hi I'm from New York", "new"))

const girl = 'samantha';

const capitalizeName = (name) => {
    let first = name.slice(0, 1).toUpperCase()
    let theRest =  name.slice(1)
    return first + theRest
}

// console.log(capitalizeName(girl)); // Samantha

function getNames(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i].name) res.push(arr[i].name)
    }
    return res
}

const getNames2 = (arr) => {
    return arr.filter(obj => obj.name).map(obj => obj.name)
}

let objectArr = [
    {a: 1}, 
    {name: "Jane"},
    {},
    {name:"Mary"}, 
    {b:2}
]

console.log(
    "getNames", getNames2(objectArr)
)