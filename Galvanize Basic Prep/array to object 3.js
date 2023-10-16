let input = [
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
]

// Output
// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]

// function transformEmployeeData(employeeData) {
//     let employeeList = []
//     for (let employee of employeeData) {
//         let employeeObj = {}
//         let firstName = employee[0]
//         let lastName = employee[1]
//         let age = employee[2]
//         let role = employee[3]
//         employeeObj[firstName[0]] = firstName[1]
//         employeeObj[lastName[0]] = lastName[1]
//         employeeObj[age[0]] = age[1]
//         employeeObj[role[0]] = role[1]
//         employeeList.push(employeeObj)
//     }
//     return employeeList
//   }

function transformEmployeeData(employeeData) {
    let personList = []
    for (let employee of employeeData){
        let employeeObj = {}
        for (let data of employee) {
            let key = data[0]
            let value = data[1]
            employeeObj[key] = value
        }
        personList.push(employeeObj)
    }
    return personList
}

console.log(transformEmployeeData(input))

