//first find divisors
//store divisors
//count divisors
// loop through mod of num

function getDivisorsCnt(n){
    let divisor = []
    for (let i = 1; i <= n; i++){
      if(n % i === 0) divisor.push(i)
    }
  return divisor.length
}

const getDivisorsCnt = n => {
    let divisors = []
    for (let i = 1; i <= n; i++){
      if(n % i === 0) divisors.push (i)
    }
    return divisors.length
  }