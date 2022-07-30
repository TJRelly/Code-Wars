const isDivisible = (n, x, y) => n % x === 0 && n % y === 0

const isDivisible = (n, x, y) => !(n % x) && !(n % y)

function isDivisible(n, x, y) {
    return !(n % x) && !(n % y)
  }