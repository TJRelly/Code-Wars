
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

console.log(bunnyEars2(0)) // 0
console.log(bunnyEars2(1)) // 2
console.log(bunnyEars2(2)) // 5
console.log(bunnyEars2(3)) // 7

function bunnyEars2(n, sum=0) {
    //base case: n = 0
    if(n === 0) return sum
    //if num is even add 2
    if(n % 2 === 0) sum += 3
    //if num is odd add 3
    else sum += 2
    //recursive case: decrement the number
    return bunnyEars2(n - 1, sum)
}