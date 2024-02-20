/**
 * Given a string and a set of strings, in how many ways can we construct the target string using the ones from the list
 */
function countConstruct(target, words, memoization = {}) {
    if (target in memoization) return memoization[target]
    if (target === "") return 1

    let counter = 0

    for (let word of words) {
        if (target.indexOf(word) === 0) {
            const newTarget = target.slice(word.length)
            const response = countConstruct(newTarget, words, memoization)

            counter += response
            memoization[target] = response
        }
    }

    memoization[target] = counter
    return counter
}

console.log(countConstruct("abcdef", ["ab", "dc", "abcd", "ef", "cd", "fe", "cdef"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "e", "e", "eeeeeeeeee", "e"]))
