// if n = 2, arr = [1,1,1,2,2,,3,3,3] // [1,1,2,2,3,3]
// will the nums be in order?
// keep the same order

let array = [1, 2, 3, 1, 2, 1, 2, 3]

function deleteNth(arr, n) {
    let total = {}
    let filtered = arr.filter(num => total[num] = (++total[num]||0) < n)
    console.log(filtered)
}

deleteNth(array, 2)