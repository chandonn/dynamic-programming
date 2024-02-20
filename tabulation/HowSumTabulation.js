/**
 * For this problem we want some way of getting the target sum, with the numbers into an array of possible matches
 * As usually with tabulation, the target will guide the size of the table
 * Our base is still 0, qhere for 0 is possible to generate with an empty array
 * For every iteration we add into the previous return the current number of the sum
 * Example: 7, [3, 4] => [], null, null, [3], [4], null, [3, 3], [3, 4] and if overlaped [4, 3]
 * So that the return is the array in the target index or null for impossible values, just like the 2 in our case
 */

function howSumTabulation(target, numbers) {
    // initialize table, target + 1 because it is 0 based indexes
    const table = new Array(target + 1).fill(null)
    // our trivial solution
    // every solution will need to part from that
    table[0] = []
    for (let index = 0; index <= target; index++) {
        if (table[index] !== null) {
            for (let number of numbers) {
                table[index + number] = [...table[index], number]
            }
        }
    }

    return [table, table[target]]
}

console.log(howSumTabulation(7, [2, 3, 5]))
console.log(howSumTabulation(300, [70, 140, 115, 81]))