function threeInOne(arr){
    let splitted = []
    let res = []
    for (let i = 0; i < arr.length; i+=3) {
      splitted.push(arr.slice(i, i + 3))
    }
    for (let i = 0; i < splitted.length; i++) {
     res.push(splitted[i].reduce((a, c) => a + c, 0))
    }
    return res
  }