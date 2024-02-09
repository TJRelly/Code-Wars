//declare func censor w/ no input
function censor() {
  //return func that accepts two or one string
  let pairs = {}

  return function (str1, str2) {
    //if 2 strings, save to cachedPairs object
    if (str2) {
      pairs[str1] = str2
    } else {
      //if one string - replace obj key w/ obj value within the string.
      let updatedStr = str1
      for (let key in pairs) {
        let value = pairs[key]
        updatedStr = updatedStr.replace(key, value)
      }
      return updatedStr
    }
  }
}

const changeScene = censor()
changeScene("dogs", "cats")
changeScene("quick", "slow")
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")) // should log: 'The slow, brown fox jumps over the lazy cats.'
