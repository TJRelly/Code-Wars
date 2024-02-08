function getGrade (s1, s2, s3) {
    //find average
    let average = (s1 + s2 + s3)/3
    //return letter grade associated
    if(average >= 90) return "A"
    if(average >= 80) return "B"
    if(average >= 70) return "C"
    if(average >= 60) return "D"
    if(average < 60) return "F"
  }