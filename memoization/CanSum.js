/**
 * Given a target number, and a list of numbers
 * is it possible to generate the target number by summing the numbers in the list?
 * one number can repeat, the target can be among those in the list
 * 
 * If we visualize as a tree, starting from the target number, we can decrease every number from the target
 * thus trating a new target
 * we may repeat the process until we have a 0, because every number can generate a 0 by doing NUMBER - NUMBER
 * and a negative value, will be false because no positive number can amount to a negative one
 * 
 * Example: canSum(7, [3, 4, 7])
 * 7 - 4 = 3 - 7 = -4 false
 * 7 - 7 = 0 true
 * 7 - 3 = 4 etc
 */

function canSum(target, list) {
    // base cases
    if (target === 0) return true
    if (target < 0) return false

    for (let number of list) {
        const newTarget = target - number
        // call recursively until find the answer
        if (canSum(newTarget, list) === true) return true
        // keep on the loop
    }

    return false
}

console.log(canSum(7, [3, 6, 8]))
console.log(canSum(10, [2, 6, 8]))
console.log(canSum(10, [2, 4, 8, 5]))
// This call takes a long time, O(length^target) time complexity, S(target, n)
console.log(canSum(270, [7, 14]))

/**
 * Using the memoization technique, we can store the target that we have already calculated with the list, since the list is the same
 * for every interaction
 */

function dynamicCanSum(target, list, memoization = {}) {
    // base cases
    if (target in memoization) return memoization[target]
    if (target === 0) return true
    if (target < 0) return false

    for (let number of list) {
        const newTarget = target - number
        // call recursively until find the answer
        if (dynamicCanSum(newTarget, list, memoization) === true) {
            memoization[target] = true
            return true
        }
        // keep on the loop
    }

    memoization[target] = false
    return false
}

console.log("================ Dynamic memoized version ===================")
console.log(dynamicCanSum(2900, [7, 14]))
