/**
 * Given a target word and a list of words. Return true if you can create the target word with words from the list
 * In this case our table is created from the target word, with as usually length + 1 of size, because we need to use the last index as the size, and arrays starts with 0
 * The 0 index is an empty string, which is always possible to create with no words from the list, the base case
 * The others are false
 * For every letter we check if starting with the letter position, we can add the words from the list, only if they are a substring AT that position
 * If positive, asign true for the current index + substring length
 * Example => abc, [ab, c] => ["", a, b, c] => index 0, true, "ab" is a substring with index 0, so 0 + 2 === true, you can generate "ab"
 */
function canConstructTabulation(target, words) {
    const table = new Array(target.length + 1).fill(false)
    // the empty string
    table[0] = true

    for (let index = 0; index <= target.length; index++) {
        if (table[index] === true) {
            for (let word of words) {
                if (target.slice(index, index + word.length) === word) {
                    // It is a substring starting from the current index
                    table[index + word.length] = true
                }
            }
        }
    }

    return [table, table[target.length]]
}

console.log(canConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "e", "e", "eeeeeeeeee", "ef"]))
console.log(canConstructTabulation("abcdef", ["ab", "abc", "bcd", "d", "ef"]))
