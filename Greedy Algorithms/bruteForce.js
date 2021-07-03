// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n.
let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value, i) => {
    recursionCounter++;
    console.log(`${recursionCounter}: calling ${value} at ${i}`)
    if (value === 0) return 0;
    let minCoins;
    coins.forEach((coin, i) => {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin, i);
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
};

makeChange(10);

/*
output:
    1: calling 10 at undefined
    2: calling 0 at 0
    3: calling 4 at 1
    4: calling 3 at 2
    5: calling 2 at 2
    6: calling 1 at 2
    7: calling 0 at 2
    8: calling 9 at 2
    9: calling 3 at 1
    10: calling 2 at 2
    11: calling 1 at 2
    12: calling 0 at 2
    13: calling 8 at 2
    14: calling 2 at 1
    15: calling 1 at 2
    16: calling 0 at 2
    17: calling 7 at 2
    18: calling 1 at 1
    19: calling 0 at 2
    20: calling 6 at 2
    21: calling 0 at 1
    22: calling 5 at 2
    23: calling 4 at 2
    24: calling 3 at 2
    25: calling 2 at 2
    26: calling 1 at 2
    27: calling 0 at 2
    1
*/