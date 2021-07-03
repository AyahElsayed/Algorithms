/*
Pseudocode: Merge
-----------------
mergeSort(list)
  initialize n to the length of the list

  base case is if n < 2, just return

  initialize mid to n/2

  left = left slice of array to mid - 1

  right = right slice of array mid to n - 1

  mergeSort(left)
  mergeSort(right)

  merge(left, right)
*/

// implement mergesort
// Split the array into halves and merge them recursively 
function mergeSort(arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

/*
output:
[
  1, 2, 2, 3, 3,
  3, 5, 6, 7, 8
]
*/