const firstNames = ["John", "Arya"]
const lastNames = ["Snow", "Stark"]
const places = ["The Wall", "Winterfell"]

const bios = []

for(let i = 0; i < firstNames.length; i++) {
    bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}.`)
    console.log(bios[i])
}


