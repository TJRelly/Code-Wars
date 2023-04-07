function high(x){
    //split string of words into an array
    let arr = x.split(' ')
    //create an array of scores from words
    let score = arr.map(word => [...word].reduce((acc, curr) =>
        acc + curr.charCodeAt(0) - 96
    , 0))
    return arr[score.indexOf(Math.max(...score))]
  }