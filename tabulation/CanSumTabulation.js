/**
 * For the can sum problem, we can start with a table that's the size of the target, with aditional 1 because we want the last index to be the target 
 * The trivial value still 0, it's possible to generate 0 with any list of numbers, taking no number 
 * For every iteration, if the current value is possible to generate, we travel N positions ahead, and say it's also possible to generate the
 * Current + N
 * Example: 7, [2, 3, 5] => T F F T T T T T, 0, 2, 3, 2 + 2, 4, 5, 3 + 3 and 7 can be generated
 * The last value, the target, is returned
 */
function canSumTabulation(target, numbers) {
    // Table with false values, initial state
    const table = new Array(target + 1).fill(false)
    // Possible to generate 0, trivial solution
    table[0] = true

    for (let index = 0; index <= target; index++) {
        if (table[index] === true) {
            for (let number of numbers) {
                // if (index + number <= target) 
                table[index + number] = true
            }
        }
    }

    return [table, table[target]]
}

console.log(canSumTabulation(7, [2, 3, 5]))
console.log(canSumTabulation(300, [70, 140, 115, 81]))
