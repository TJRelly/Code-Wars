// let x = {
//   a: 1,
//   b: 2
// }

// const values = obj => {
//   return Object.values(obj)
// }

// console.log(values(x))

// let x = "hi"
// // "ih"

// const reverse = str => str.split("").reverse().join("")

// console.log(reverse(x))

// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a)
//         return this
//     },
//     getB(){
//         console.log(this.b)
//     }
// }

// obj.getA().getB()

//semi colon needed!!!

Array.prototype.print = function () {
  let output = ""
  for (let i = 0; i < this.length; i++) {
    if (i !== this.length - 1) {
      output += this[i] + ","
    } else output += this[i]
  }
  console.log(output)
}

;[1, 2].print() // 1,2
