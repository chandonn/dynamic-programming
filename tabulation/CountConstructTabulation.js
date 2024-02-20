/**
 * Given a string and a list of strings, in how many ways can you build the target using the strings from the list?
 * If the target is an empty string, the result is 1 possible way, so this should be a base case
 * The table suze is the size of target + 1, so the last index is the length of target
 * For every letter, check if there is a substring starting at that position in the list, 
 * if there is, add the current possible ways to the words length + the current letter index
 * meaning that you just build one other piece of target from one position to other
 */
function countConstructTabulation(target, words) {
    const table = new Array(target.length + 1).fill(0)
    // base case
    table[0] = 1

    // every letter
    for (let index = 0; index <= target.length; index++) {
        for (let word of words) {
            const pointer = index + word.length
            if (target.slice(index, pointer) === word) {
                // this word is a substring of target starting from the current position
                table[pointer] = table[index] + table[pointer]
            }
        }
    }

    return [table, table[target.length]]
}

console.log(countConstructTabulation("abcdef", ["ab", "dc", "abcd", "ef", "cd", "fe", "cdef"]))
console.log(countConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "e", "e", "eeeeeeeeee", "e"]))
