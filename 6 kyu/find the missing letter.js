array1 = [ 'a', 'b', 'c', 'd', 'f' ] // 'e'
array2 = ['O','Q','R','S'] // 'P'

//map the array
//change each value to a number
//check if nums are consecutive with loop
//return the missing number and index
//splice the missing letter

function findMissingLetter(array)
{
  console.log(array)
  let nums = array.map(e => e.charCodeAt(0) - 96)
  console.log(nums)
  let consecutive = nums.forEach((num, i) =>{
    num[i] === num[i + 1] - 1 ? '' : num[i] + 1
  })
  console.log(consecutive)
}

findMissingLetter(array1)

findMissingLetter(array2)
