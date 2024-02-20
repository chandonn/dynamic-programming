/**
 * Given a target number, and a list of positive number, how can we sum the number to get the target?
 * return any sublist of numbers found, one number can be repeated. return null if no sublist found
 * 
 * For any number in the list, we can subtract every number in the list until get to zero or a negative number
 * we can go down a tree where each leaf is a new target sum with the previous - list element
 * so the base case is we reached ZERO or a NEGATIVE number
 * We need to add the number to the list of possible sulutions
 * Return for any combination found, so return the first one
 */

function howSum(targetSum, numbers) {
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let number of numbers) {
        const newTargetSum = targetSum - number
        const response = howSum(newTargetSum, numbers)
        if ( response !== null) {
            return [ ...response, number ]
        }
    }

    return null
}

console.log(howSum(8, [2, 4]))
console.log(howSum(48, [3, 6]))
console.log(howSum(300, [7, 14]))

/**
 * Now for the memoized version of howSum
 */

function dynamicHowSum(targetSum, numbers, memoization = {}) {
    if (targetSum in memoization) return memoization[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let number of numbers) {
        const newTargetSum = targetSum - number
        const response = dynamicHowSum(newTargetSum, numbers, memoization)
        if ( response !== null) {
            memoization[targetSum] = [ ...response, number ]
            return memoization[targetSum]
        }
    }

    memoization[targetSum] = null
    return memoization[targetSum]
}

console.log("================ Dynamic memoized version ===================")
console.log(dynamicHowSum(300, [7, 14]))