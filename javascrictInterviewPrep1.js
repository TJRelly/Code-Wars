const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
]

// let userNames2 = (arr) => {
//     let names = []
//     for (let i = 0; i < arr.length; i++){
//         names.push(arr[i].name)
//     }
//     return names
// }

// function userNames3(arr){
//     let names = []
//     for (let user of arr) {
//         names.push(user.name)
//     }
//     return names
// }

// let userNames4 = (arr) => arr.map(user => user.name)

// let userNames = (arr) => {

//     const names = []
//     arr.forEach(user => names.push(user.name))
//     return names
// }

// console.log(userNames(users))

// const names = []

// for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name)
//     }
// }

// const names = users.filter(user => user.isActive).map(user => user.name)

// const names = []

// users.sort ((a, b) => a.age - b.age, 0)

// console.log(users)

// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name)
// }

const names = users
  .sort((a, b) => a.age - b.age, 0)
  .filter((user) => user.isActive)
  .map((user) => user.name)

console.log(names)
