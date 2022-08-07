function countSmileys(arr) {
    let count = 0
    for(let face of arr){
      let re = /[:;][-~]?[)D]/g
      if(face.match(re))
        count ++
    }
    return count
  }
  