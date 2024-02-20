/**
 * The grid traveler problem
 * Given a matrix of M, N, in how many ways can someone travel inside that matrix, if only allowed to go right or down?
 * If create a tree of possible solutions, with the left being "DOWN" and right bein "RIGHT"
 * we can go all the way until there is a matrix of 1, 1 or 0, N or N, 0
 * we have hit a base case, a base LEAF
 * we can assume 1 possible way for 1, 1 and 0 if we have 0 columns or 0 rows
 */

function gridTraveler(m, n) {
    // The base cases
    if (m === 0 || n === 0) return 0
    if (m === 1 && n === 1) return 1
    
    // DOWN M - 1 and RIGHT N - 1
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(2, 3))
console.log(gridTraveler(4, 4))

// For bigger matrices, the time escalates by much
// console.log(gridTraveler(16, 16))

// Now the memoized version
/**
 * If we look at the tree of possible moves, we can see that some matrices are repeated during the process
 * Since we may have already calculated that, we can store to retreive it later
 */

function dynamicGridTraveler(m, n, memoization = {}) {
    // since we have a matrix, we need to store the current KEYS to be accessed later
    const key = `${m},${n}`
    const counterKey = `${n},${m}`
    // memoized value
    if (key in memoization) return memoization[key]
    if (counterKey in memoization) return memoization[counterKey]

    // Base cases
    if (m === 0 || n === 0) return 0
    if (m === 1 && n === 1) return 1
    
    // Store the new calculated value
    memoization[key] = dynamicGridTraveler(m - 1, n, memoization) + dynamicGridTraveler(m, n - 1, memoization)
    memoization[counterKey] = memoization[key]

    return memoization[key]
}

console.log("================ Dynamic memoized version ===================")
// We can now calculate extreme values, whereas in previous version the 16, 16 took a long time
console.log(dynamicGridTraveler(30, 30))