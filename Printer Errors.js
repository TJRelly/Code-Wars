//Attempt 1
function printerError(s) {
    console.log(s)
    let length = s.length
    let err = 0
    if (s.match(/[n-z]/g)){
      err = s.match(/[n-z]/g).length
    }
    console.log(`${err}/${length}`)
    return `${err}/${length}`
  }

function printerError(s) {
    let len = s.length
    let err = 0
    for (let i = 0; i < len; i++){
      s[i] > 'm' ? err ++ : ''
    }
    return `${err}/${len}`
  }