// DYNAMIC PROGRAMMING
// Cache values to avoid repeated calculations

// Top- Down Memoization & Bottom-Up Iterative


// Memoization + Recursive Approach
// memo-example

const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
    // Return the value if it’s in the cache
    if (cache[c]) return cache[c];

    let minCoins = -1;

    // Find the best coin
    coins.forEach(coin => {
        if (c - coin >= 0) {
            let currMinCoins = makeChange(c - coin);
            if (minCoins === -1 || currMinCoins < minCoins) {
                minCoins = currMinCoins
            }
        }
    })

    // Save the value into the cache
    cache[c] = minCoins + 1;
    return cache[c];
}

console.log(makeChange(12)); //2

// --------------------
// factorial

// Task: convert this top-down recursive solution from a previous exercise to a bottom-up iterative solution

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        }
        else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};
const factorial = memoize(
    (x) => {
        if (x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
);
console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5

/*
output
    Calculating result 5
    Calculating result 4
    Calculating result 3
    Calculating result 2
    Calculating result 1
    Calculating result 0
    120
    Calculating result 6
    Fetching from cache 5
    720
*/

