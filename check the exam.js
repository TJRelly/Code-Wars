function checkExam(array1, array2) {
    let score = 0
    for (let i = 0; i < array1.length; i++){
      if(array1[i] == array2[i]) score += 4
      else if(array2[i] == 0) score += 0
      else score -= 1
    }
    return score > 0 ? score : 0
  }

  function checkExam(array1, array2) {
    let key = array1
    let res = array2.reduce((score, answer, i) => {
      if (answer === key[i]) score += 4
      else if (answer === '') score += 0
      else score -= 1
      console.log(answer, key[i], score)
      return score
   }, 0)
   return res > 0 ? res : 0
  }
