function findEvenIndex(arr)
{
    //Loop throught the array
  for (let i = 0; i < arr.length; i++) {
    //separate the left and right by an index
    let left = arr.slice(0, i).reduce((a,c) => a + c, 0)
    let right = arr.slice(i + 1).reduce((a,c) => a + c, 0)
    //return the index when the sides are equal
    if (left === right) return i
  }
  return -1
}