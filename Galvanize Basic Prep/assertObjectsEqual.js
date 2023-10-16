function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    actual === expected
      ? console.log("passed")
      : console.log(
          `FAILED [${testName}] Expected ${expected}, but got ${actual}`
        )
  }
  
  // Examples:
  
  // SUCCESS CASE:
  
  var person = {
    firstName: "Cassidy",
    lastName: "Jacobs",
  }
  
  person["firstName"] = "Jack"
  
  var expected = {
    firstName: "Jack",
    lastName: "Jacobs",
  }
  
  assertObjectsEqual(
    person,
    expected,
    "updates person's existing first name field"
  )
  // console output:
  // passed
  
  // FAILURE CASE (We will assume that updateObject does NOT work):
  
  var person = {
    firstName: "Joe",
    lastName: "Blow",
  }
  
  // person["age"] = 35;
  
  var expected = {
    firstName: "Joe",
    lastName: "Blow",
    age: 35,
  }
  assertObjectsEqual(person, expected, "adds person's non-existing age field")
  // console output:
  // FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}