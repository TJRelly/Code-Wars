// // Skeleton

// // FUNCTION DEFINITION(S)
// function PhoneNumberFormatter(numbers) {
//     this.numbers = numbers;
//   }

//   PhoneNumberFormatter.prototype.render = function() {
//     var string = '';
//     // get area code - parenthesize it - add to string
//     string += this.parenthesize(this.getAreaCode())
//     // add exchange code to string
//     string += this.getExchangeCode()
//     // add dash
//     string += "-"
//     // add line number to string
//     string += this.getLineNumber()
//     return string;
//   };

//   PhoneNumberFormatter.prototype.getAreaCode = function() {
//     let areaCode = this.slice(0, 3)
//     return areaCode
//   };

//   PhoneNumberFormatter.prototype.getExchangeCode = function() {
//     let exchangeCode = this.slice(3, 6)
//     return exchangeCode
//   };

//   PhoneNumberFormatter.prototype.getLineNumber = function() {
//     let lineNumber = this.slice(6, 10)
//     return lineNumber
//   };

//   PhoneNumberFormatter.prototype.parenthesize = function(string) {
//     return '(' + string + ')';
//   };

//   PhoneNumberFormatter.prototype.slice = function(start, end) {
//     return this.numbers.slice(start, end).join('');
//   };

class PhoneNumberFormatter {
  constructor(numbers) {
    this.numbers = numbers
  }
  //methods
  slice(start, end) {
    return this.numbers.slice(start, end).join("")
  }
  parenthesize(string) {
    return "(" + string + ")"
  }
  getAreaCode() {
    return this.slice(0, 3)
  }
  getExchangeCode() {
    return this.slice(3, 6)
  }
  getLineNumber() {
    return this.slice(6, 10)
  }
  render() {
    let areaCode = this.parenthesize(this.getAreaCode())
    let exchangeCode = this.getExchangeCode()
    let lineNumber = this.getLineNumber()
    let formatted = areaCode + " " + exchangeCode + "-" + lineNumber
    return formatted
  }
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let phoneNumber = new PhoneNumberFormatter(nums)

console.log(phoneNumber.getAreaCode())
console.log(phoneNumber.getExchangeCode())
console.log(phoneNumber.getLineNumber())
console.log(phoneNumber.render())
