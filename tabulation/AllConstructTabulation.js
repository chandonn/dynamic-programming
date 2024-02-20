/**
 * Given a target word and a list of words, what are the possible ways to construct the target word using the list?
 * If the target word is an empty string, the solution is an empty array, its possible to generate using any list but with no spots
 * "" => [[]], one solution, empty array
 * For every piece of the word, we should trace back to see if there are ways to build them, adding up the pieces must build the whole string
 * ABC, [A, AB, B, C] => A 1, AB 2, B 1, C 1. Adding up every possible solution to the piece just found
 */
function allConstructTabulation(target, words) {
    const table = new Array(target.length + 1).fill().map(() => [])
    // base case, one solution
    table[0] = [[]]

    for (let index = 0; index <= target.length; index++) {
        for (const word of words) {
            if (target.slice(index, index + word.length) === word) {
                const newCombinations = table[index].map(combination => [...combination, word])
                table[index + word.length].push(...newCombinations)
            }
        }
    }

    return table
}

console.log(allConstructTabulation("abcdef", ["ab", "dc", "abcd", "ef", "cd", "fe", "cdef"]))
console.log(allConstructTabulation("eeeeeeeeeef", ["eee", "e", "eb", "ec", "eeeee", "ef"]))
