function isDivisibleBy6(s) {
    let arr = s.split("");
    let index = arr.indexOf("*");
    let multiplesOfSix = [];
  
    for (let num = 0; num < 10; num++) {
      arr.splice(index, 1, num);
      let multiple = arr.join("");
      let remainder = (BigInt(multiple) % BigInt(6));
  
      if (remainder == 0) {
        multiplesOfSix.push(multiple);
      }
    }
  
    return multiplesOfSix;
  }