function order(words){
    //string to arr
    let arr = words.split(' ')
    //loop string
    let nums = arr.map(word => [...word].sort()[0] + ' ' + word).sort()
    //loop word for num
    return words ? nums.map(word => word.slice(2)).join(' ') : ''
    //map arr in correct order
  }

  //using sort and find
  const order = str => {
    return str.split(' ').sort((a, b) => a.split('').find(Number) - b.split('').find(Number)).join(' ')
  }