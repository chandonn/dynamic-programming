/**
 * Given a target string and a set of strings, return all possible ways to create the target from the list, in a 2d array.
 * Words can repeat
 */
function allConstruct(target, words) {
    if (target === "") return [[]] // 2d empty array

    let solutions = []
    for (let word of words) {
        if (target.indexOf(word) === 0) {
            // it is a preffix, it is possible to remove from the front of the target
            const suffix = target.slice(word.length)
            const constructSuffix = allConstruct(suffix, words)
            const constructTarget = constructSuffix.map(it => [word, ...it])
            
            solutions.push(...constructTarget)
        }
    }

    return solutions
}

console.log(allConstruct("abcdef", ["ab", "dc", "abcd", "ef", "cd", "fe", "cdef"]))
