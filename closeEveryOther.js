//close every other div tag
//look for <div> --- then second <div> => </div>
//look for < and d then find the next one and add / after <
//"<div>Hello<div>" => "<div>Hello</div>"
//"<div><div><div>" => "<div></div><div>"

const closeEveryOtherDiv2 = (string) => {
  let res = ""
  let tagCount = 0
  for (let i = 0; i < string.length; i++) {
    if (c === "<" && string[i + 1] === "d") {
      res += c
      tagCount++
      if (tagCount % 2 === 0) {
        res += "/"
      }
    } else {
      res += c
    }
  }
  return res
  
}

const closeEveryOtherDiv = (str) => {
  let tagCount = 0
  return [...str].reduce((a, c, i, arr) => {
    if (c === "<" && arr[i + 1] === "d") {
      a += c
      tagCount++
      if (tagCount % 2 === 0) {
        a += "/"
      }
    } else {
      a += c
    }
    return a
  }, "")
}

console.log(closeEveryOtherDiv("<div>Hello<div>"))

console.log(closeEveryOtherDiv("<div><div><div>"))
