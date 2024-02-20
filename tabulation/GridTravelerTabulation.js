/**
 * For this version of grid traveler, we may assume that
 * A 1 dimension grid, has 1 possible way
 * For each new dimension, we add the previous possible ways, which means
 * 2X2, adds one new way for the right and for the down movement, 1 + 1
 */
function gridTravelerTabulation(m, n) {
    const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
    table[1][1] = 1

    // Nested for loop, we need to travel a 2D array
    for (let row = 0; row <= m; row++) {
        for (let column = 0; column <= n; column++) {
            // indexes for the right and down positions
            const down = row + 1
            const right = column + 1
            if (table[down] !== undefined) {
                // adds to bellow
                table[down][column] = table[down][column] + table[row][column]
            }

            if (table[row][right] !== undefined) {
                // add to the right
                table[row][right] = table[row][right] + table[row][column]
            }
        }
    }

    return [table, table[m][n]]
}

console.log(gridTravelerTabulation(3, 3))
console.log(gridTravelerTabulation(18, 18))