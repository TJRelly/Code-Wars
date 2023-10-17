function getProperty(obj, key) {
  let output = obj[key]
  if (!obj[key]) return undefined
  else return output
}

var obj = {
  key: "value",
}
var output = getProperty(obj, "key")
console.log(output) // --> 'value'

function addProperty(obj, key) {
  if (!obj[key]) {
    obj[key] = true
  }
}

var myObj = {}
addProperty(myObj, "myProperty")
console.log(myObj.myProperty) // --> true

function removeProperty(obj, key) {
  delete obj[key]
}

var obj = {
  name: "Sam",
  age: 20,
}
removeProperty(obj, "name")
console.log(obj.name) // --> undefined
