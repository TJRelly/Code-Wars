function findArray(arr1, arr2) {
  let res = []
  for (let i = 0; i < arr2.length; i++) {
    arr1.length ? res.push(arr1[arr2[i]]) : ""
  }
  return res
}

function findArray(arr1, arr2) {
  return arr1.length ? arr2.map((i) => arr1[i]) : []
}
