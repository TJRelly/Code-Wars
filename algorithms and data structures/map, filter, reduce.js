let students = [
    { name: 'Max', id: 31, score: 80 },
    { name: 'Kylie', id: 15, score: 69 },
    { name: 'Treyvon', id: 16, score: 35 },
    { name: 'Lisa', id: 7, score: 55 }
]

let sum = students.map(stu => {
    if (stu.score < 60) stu.score += 20
    return stu
})
.filter(stu => stu.score > 60)
.reduce((a, c) => a + c.score, 0)

console.log(sum)

// let names = []
// for (let i = 0; i < students.length; i++){
//     names.push(students[i].name.toUpperCase())
// }

// const names = students.map((obj) => obj.name.toUpperCase())

// let overSixty = []
// for (let i = 0; i < students.length; i++){
//     if (students[i].score > 60) overSixty.push(students[i].name)
// }

// const overSixty = students.filter((student) => student.score > 60 && student.id > 15).map(student => student.name)

// let sum = students.reduce((acc, curr) => acc + curr.score, 0)

// map and reduce
// students.forEach(stu => stu.score < 60 ? stu.score += 20 : stu.score)
// let overSixtySum = students.reduce((acc, curr) => acc + curr.score, 0)

// let overSixty = students
//     .map(stu => {
//         if (stu.score < 60) stu.score += 20
//         return stu
//     })
//     .filter(stu => stu.score > 60)
//     .reduce((a, c) => a + c.score, 0)

// console.log(overSixty)
