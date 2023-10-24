function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) {
    return -1
  } else {
    const a1Max = findMaxStringLength(a1)
    const a1Min = findMinStringLength(a1)
    const a2Max = findMaxStringLength(a2)
    const a2Min = findMinStringLength(a2)
    const diff1 = a1Max - a2Min
    const diff2 = a2Max - a1Min
    return Math.max(diff1, diff2)
  }
}

function findMaxStringLength(arr) {
  if (arr.length) {
    let max = arr[0].length
    for (let i = 1; i < arr.length; i++) {
      let temp = arr[i].length
      if (temp > max) {
        max = temp
      }
    }
    return max
  }
}

function findMinStringLength(arr) {
  if (arr.length) {
    let min = arr[0].length
    for (let i = 1; i < arr.length; i++) {
      let temp = arr[i].length
      if (temp < min) {
        min = temp
      }
    }
    return min
  }
}

// Alternative Solution

function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1
  const a1Lengths = a1.map((string) => string.length)
  const a2Lengths = a2.map((string) => string.length)
  const diff1 = Math.max(...a1Lengths) - Math.min(...a2Lengths)
  const diff2 = Math.max(...a2Lengths) - Math.min(...a1Lengths)
  return Math.max(diff1, diff2)
}
