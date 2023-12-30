// Instructions
// Output
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  // convert num to array
  const digits = num.toString().split("");
  const results = [];
  // add zeros based on index and length
  for (let i = 0; i < digits.length; i++) {
    let result = digits[i] * 10 ** (digits.length - 1 - i);
    if (result > 0) results.push(result);
  }
  return results.join(" + ");
}
