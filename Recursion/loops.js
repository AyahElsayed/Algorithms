const loopNTimes = (n) => {

    console.log('n ===', n);

    if (n <= 1) {
        return 'complete';
    }
    return loopNTimes(n - 1);
};

loopNTimes(3);
/*
output:
        n === 3
        n === 2
        n === 1
        complete
*/
// --------------------

// FACTORIAL WITH LOOP

function computeFactorial(num) {
    var result = 1;

    for (var i = 2; i <= num; i++) {
        console.log(`result = ${result} * ${i} (${result * i})`);
        result *= i;
    }

    return result;
}

computeFactorial(5);

/*
output:
        result = 1 * 2 (2)
        result = 2 * 3 (6)
        result = 6 * 4 (24)
        result = 24 * 5 (120)
        120
*/

// --------------------------------

// with Recursion
function computeFactorial(num) {

    if (num === 1) {
        console.log('hitting the base case');
        return 1;
    } else {
        console.log(`returning ${num} * computeFactorial(${num - 1})`);
        return num * computeFactorial(num - 1);
    }
}
computeFactorial(5);
/*
output:
        returning 5 * computeFactorial(4)
        returning 4 * computeFactorial(3)
        returning 3 * computeFactorial(2)
        returning 2 * computeFactorial(1)
        hitting the base case
        120
*/

// --------------------------

// LOOP TO RECURSION
function logNumbers(start, end) {

    console.log(`iteratively looping from ${start} until ${end}`);

    for (var i = start; i <= end; i++) {
        console.log('hitting index', i);
    }
}

console.log('~~~ logNumbers ~~~')
logNumbers(1, 2);

function logNumbersRecursively(start, end) {

    console.log(`recursively looping from ${start} until ${end}`);

    function recurse(i) {
        console.log('hitting index', i);

        if (i < end) {
            recurse(i + 1);
        }
    }

    recurse(start);
}

console.log('~~~ logNumbersRecursively ~~~')
logNumbersRecursively(1, 3);
/*
output:
        ~~~ logNumbers ~~~
        iteratively looping from 1 until 2
        hitting index 1
        hitting index 2
        ~~~ logNumbersRecursively ~~~
        recursively looping from 1 until 3
        hitting index 1
        hitting index 2
        hitting index 3
*/

// ------------------
// Recursion can always be implemented as a loop, but in some situations, 
// believe it or not, it is simpler to use recursion