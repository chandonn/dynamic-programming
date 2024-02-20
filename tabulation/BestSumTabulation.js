/**
 * Given a target and a list of numbers, whats is the best/shortest combination of values form the list to get to target
 * 0 is created by adding no numbers, so it is our base case, returns []
 * We need to iterate over the table of size target + 1 checking if the current sum of every value is better than the new combination
 * table[1] < new table[1]
 * we add the shortest one
 */
function bestSumTabulation(target, numbers) {
    // the table
    const table = new Array(target + 1).fill(null)
    // the base case
    table[0] = []

    // iterate
    for (let index = 0; index <= target; index++) {
        // we only calculate for possible numbers
        if (table[index] !== null) {
            for (let number of numbers) {
                const position = index + number
                const currentCombination = table[position]
                // takes current combination and adds number
                const newCombination = [...table[index], number]

                if (!currentCombination || newCombination.length < currentCombination.length) {
                    table[position] = newCombination
                }
            }
        }
    }

    return [table, table[target]]
}

console.log(bestSumTabulation(7, [2, 3, 5]))
console.log(bestSumTabulation(300, [70, 140, 115, 81]))