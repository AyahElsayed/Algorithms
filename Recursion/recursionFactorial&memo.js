// Task 1: Without peeking, write your own recursive factorial method

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

// solution

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
    }
}
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
console.log(factorial(5)); // calculated for 6 and cached for 5

/*
output:
    Calculating result 5
    Calculating result 4
    Calculating result 3
    Calculating result 2
    Calculating result 1
    Calculating result 0
    120
    Fetching from cache 5
    120
*/