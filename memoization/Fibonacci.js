// Fibonacci common function
function fib(n) {
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(5))
console.log(fib(8))
console.log(fib(8))

// For bigger values of N
// This version has a time complexity of O(n²), space complexity O(n)
console.log(fib(45))

/** 
 * Fibonacci with Dynamic Programming techiniques
 * we will use the Memoization technique to store values already calculated, therefore lowering our time complexity
 */
function dynamicFib(n, memoization = {}) {
    // memoization is a hashMap, to store previous values
    if (n in memoization) return memoization[n]
    if (n <= 2) return 1

    memoization[n] = dynamicFib(n - 1, memoization) + dynamicFib(n - 2, memoization)
    return memoization[n]
}

// Look at the drastic decrease in computation time from the reguar fib to the dynamic one, for the same values
console.log(dynamicFib(45))