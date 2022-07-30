function high(x){
    //split string of words into an array
    let arr = x.split(' ')
    //create an array of scores from words
    let score = arr.map(word => [...word].reduce((acc, curr) =>
        acc + curr.charCodeAt(0) - 96
    , 0))
    return arr[score.indexOf(Math.max(...score))]
  }

//2nd solution after break
  const high = (str) => {
    let words = str.split(' ')
    let score = words.map(word => [...word].reduce((a, c) => a + c.charCodeAt(0) - 96, 0))
    return words[score.indexOf(Math.max(...score))]
  }