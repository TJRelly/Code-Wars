// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

function minValue(values) {
  values.sort((a, b) => a - b)
  let unique = []
  for (let value of values) {
    if (!unique.includes(value)) unique.push(value)
  }
  return Number(unique.join(""))
}

function minValue(values) {
  return Number(
    values
      .sort((a, b) => a - b)
      .filter((value, i, arr) => arr.indexOf(value) === i)
      .join("")
  )
}
