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

let output = [
  { firstName: "Joe", lastName: "Blow", age: 42, role: "clerk" },
  { firstName: "Mar", lastName: "Jenkins", age: 36, role: "manager" },
]

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
  let employees = []

  for (let i = 0; i < employeeData.length; i++) {
    let employee = employeeData[i]
    let employeeDetails = {}
    for (let j = 0; j < employee.length; j++) {
      let key = employee[j][0]
      let value = employee[j][1]
      employeeDetails[key] = value
    }
    employees.push(employeeDetails)
  }
  return employees
}

console.log(transformEmployeeData(input))

// Assertation
function assertArraysEqual(actual, expected, testName) {
  areEqualLengths = actual.length === expected.length
  areEqualValues = true

  for (let i = 0; i < actual.length; i++) {
    if (JSON.stringify(actual[i]) !== JSON.stringify(expected[i])) {
      areEqualValues = false
      break
    }
  }

  areEqualLengths && areEqualValues
    ? console.log("passed")
    : console.log(
        `Failed [${testName}] Expected "${JSON.stringify(expected)}" but got "${JSON.stringify(actual)}"`
      )
}

// Test(s)

let actual = transformEmployeeData(input)
let expected = output
assertArraysEqual(actual, expected, "turned arrays into objects")
