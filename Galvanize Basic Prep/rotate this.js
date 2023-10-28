'orldhello w'// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// Extra hint: (click the drop down to ROT7 to see hint)
// Ol eua juahrk znk yzxotm, eua'rr hk ghrk zu lotj gtuznkx yzxotm otyojk znk juahrkj yzxotm ayotm lgsorogx Yzxotm skznujy.

// Juahrkj yzxotm: 'nkrru cuxrjnkrru cuxrj'
// Ykgxin c/ot oz: '       uxrjnkrru c    '

function isRotated(str1, str2) {
    let length = str1.length
    let rotated = false
    let arr = str1.split("")
    while (length >= 0) {
        //rearrange str1 check str2 match
        let lastIndex = arr.pop()
        let rotatedArr = arr.unshift(lastIndex)
        let rotatedStr = arr.join("")
        if (rotatedStr === str2) {
            rotated = true
            break
        }
        length--
    }
    return rotated
}

function assertEqual(actual, expected, testName) {
    return actual === expected ? console.log("passed") : console.log(`Failed [${testName}] Expected "${expected}" but got "${actual}"`)
}

// Test

let actual = isRotated('hello world', 'orldhello w')
let expected = true
assertEqual(actual, expected, "should return true if rotated")