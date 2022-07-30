//Brute force solution
function findUniq(arr) {
    console.log(arr)
    let numObj = arr.reduce((obj, c) => {
      if(!obj[c]) obj[c] = 0
      obj[c]++
      return obj
    }, {})
    console.log(numObj)
    for (num in numObj){
      if (numObj[num] === 1) return Number(num)
    }
  }

//Clever Solution
  const findUniq  = (arr) => {
    arr.sort()
    return arr[0] === arr[1] ? arr.pop() : arr[0]
  } 