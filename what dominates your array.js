function dominator(arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++){
      if (!map[arr[i]]) map[arr[i]] = 0
      map[arr[i]]++
      if (map[arr[i]] > arr.length/2) return arr[i]
    }
      return -1
  }

const dominator = (arr) => {
    let map = arr.reduce((obj, curr) => {
        if(!obj[curr]) obj[curr] = 0
        obj[curr] ++
        return obj
    }, {})
    console.log(map)
    
  for (let i in map) {
        if (map[i] > arr.length/2) return +i
      }
  return -1
}  
  