function betweenExtremes(nums) {
    let highest = Math.max(...nums)
    let lowest = Math.min(...nums)
    return highest - lowest
  }