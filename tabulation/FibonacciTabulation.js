/**
 * For this approach, we need to create a table bigger than N, because arrays are indexed 0
 * After that, we go about the array adding the current number to the next 2 positions
 * If I can recall the recursive implementation of fib, that's the same but backwards.
 */

function fibonacciTabulation(n) {
    const table = new Array(n + 1).fill(0)
    table[1] = 1

    for (let index = 0; index < n; index++) {
        table[index + 1] = table[index + 1] + table[index]
        if ((index + 2) in table) {
            table[index + 2] = table[index + 2] + table[index]
        }
    }

    return table
}

console.log(fibonacciTabulation(50))