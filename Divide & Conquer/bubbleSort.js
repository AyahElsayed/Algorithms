// sample of arrays to sort
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// basic implementation
function bubbleSortBasic(array) {
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;

    for (var i = 0; i < array.length; i++) {
        countOuter++;
        for (var j = 1; j < array.length; j++) {
            countInner++;
            if (array[j - 1] > array[j]) {
                countSwap++;
                swap(array, j - 1, j);
            }
        }
    }

    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    return array;
}
console.log('~~~ ~~~ BASIC ~~~ ~~~');

console.log('\n~~~ basic: arrayRandom ~~~');
bubbleSortBasic(arrayRandom.slice());

console.log('\n~~~ basic: arrayOrdered ~~~');
bubbleSortBasic(arrayOrdered.slice());

console.log('\n~~~ basic: arrayReversed ~~~')
bubbleSortBasic(arrayReversed.slice());

// optimized
function bubbleSort(array) {
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;

    var swapped;
    do {
        countOuter++;
        swapped = false;
        for (var i = 0; i < array.length; i++) {
            countInner++;
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                countSwap++;
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);

    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    return array;
}

console.log('\n\n~~~ ~~~ OPTIMIZED ~~~ ~~~');

console.log('\n~~~ optimized: arrayRandom ~~~');
bubbleSort(arrayRandom.slice());

console.log('\n~~~ optimized: arrayOrdered ~~~');
bubbleSort(arrayOrdered.slice());

console.log('\n~~~ optimized: arrayReversed ~~~');
bubbleSort(arrayReversed.slice());

/*
output
    ~~~ ~~~ BASIC ~~~ ~~~

    ~~~ basic: arrayRandom ~~~
    outer: 10 inner: 90 swap: 21

    ~~~ basic: arrayOrdered ~~~
    outer: 10 inner: 90 swap: 0

    ~~~ basic: arrayReversed ~~~
    outer: 10 inner: 90 swap: 45


    ~~~ ~~~ OPTIMIZED ~~~ ~~~

    ~~~ optimized: arrayRandom ~~~
    outer: 9 inner: 90 swap: 21

    ~~~ optimized: arrayOrdered ~~~
    outer: 1 inner: 10 swap: 0

    ~~~ optimized: arrayReversed ~~~
    outer: 10 inner: 100 swap: 45
    [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
    ]
*/