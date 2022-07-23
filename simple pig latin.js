function pigIt(str){
    strArr = str.split(' ')
    let pigArr = []
    for (word of strArr) {
      if(!word.match(/^[.,:!?]/)) {
        let wordArr = word.split('')
        let first = wordArr.shift()
        wordArr.push(first + 'ay')
        pigArr.push(wordArr.join('')) 
      } 
      else {
        pigArr.push(word)
      }
    }
    return pigArr.join(' ')
  }