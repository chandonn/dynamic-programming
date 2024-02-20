function bestSum(targetSum, numbers) {
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let bestCombination = null

    for (let number of numbers) {
        const rest = targetSum - number
        const response = bestSum(rest, numbers)

        if (response !== null) {
            const combination = [ ...response, number ]
            if (bestCombination === null || combination.length < bestCombination.length) {
                bestCombination = combination
            }
        }
    }

    return bestCombination
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]

// This case looks pretty slow, because it needs to go over every branch, for each number, compating all of them
// Time complexity: n (target), m (numbers) => O(n^m*m) => O(n^m²)
// Space complexity: O(m²)
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]

function dynamicBestSum(targetSum, numbers, memoization = {}) {
    if (targetSum in memoization) return memoization[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let bestCombination = null

    for (let number of numbers) {
        const rest = targetSum - number
        const response = dynamicBestSum(rest, numbers, memoization)

        if (response !== null) {
            const combination = [ ...response, number ]
            if (bestCombination === null || combination.length < bestCombination.length) {
                bestCombination = combination
            }

            memoization[targetSum] = bestCombination
        }
    }

    memoization[targetSum] = bestCombination
    return bestCombination
}

console.log("================ Dynamic memoized version ===================")
console.log(dynamicBestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
