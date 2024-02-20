/**
 * Given a string and a list of strings. Is it possible to construct the target string using the strings from the list?
 */
function canConstruct(targetString, strings) {
    if (targetString === "") return true

    for (let s of strings) {
        if (targetString.indexOf(s) === 0) {
            const newTargetString = targetString.slice(s.length)
            const response = canConstruct(newTargetString, strings)

            if (response === true) return true
        }
    }

    return false
}

// Time complexity O(m^n*m), M string size, N list size
// Space complexity O(m²)

console.log(canConstruct("abcdef", ["ab", "dc", "ef", "cd", "fe"]))
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "e", "e", "eeeeeeeeee", "e"]))

function dynamicCanConstruct(targetString, strings, memoization = {}) {
    if (targetString in memoization) return memoization[targetString]
    if (targetString === "") return true

    for (let s of strings) {
        if (targetString.indexOf(s) === 0) {
            const newTargetString = targetString.slice(s.length)
            const response = dynamicCanConstruct(newTargetString, strings, memoization)

            if (response === true) {
                memoization[targetString] = true
                return true
            }
        }
    }

    memoization[targetString] = false
    return false
}

console.log(dynamicCanConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "e", "e", "eeeeeeeeee", "e"]))
