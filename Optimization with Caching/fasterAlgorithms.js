// loops
const isUnique = (arr) => {
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`);

        for (let j = 0; j < arr.length; j++) {
            console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`);
            if (i !== j && arr[i] === arr[j]) {
                result = false;
            }
        }
    }

    return result;
};

console.log(isUnique([1, 2, 3]) === true);
// console.log(isUnique([1,1,3]) === false);

//   output in the console 
/*
~~~~ OUTER LOOP ~~~~ i === 0
~~~~ INNER LOOP ~~~~ j === 0
~~~~ INNER LOOP ~~~~ j === 1
~~~~ INNER LOOP ~~~~ j === 2
~~~~ OUTER LOOP ~~~~ i === 1
~~~~ INNER LOOP ~~~~ j === 0
~~~~ INNER LOOP ~~~~ j === 1
~~~~ INNER LOOP ~~~~ j === 2
~~~~ OUTER LOOP ~~~~ i === 2
~~~~ INNER LOOP ~~~~ j === 0
~~~~ INNER LOOP ~~~~ j === 1
~~~~ INNER LOOP ~~~~ j === 2
true
*/

// -----------------------------------------

// better way to do this
// => breadcrumbs

isUnique = (arr) => {
    const breadcrumbs = {};
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~~ LOOP ~~~~ i === ${i}`);
        if (breadcrumbs[arr[i]]) {
            result = false;
        } else {
            breadcrumbs[arr[i]] = true;
        }
    }

    return result;
};

console.log(isUnique([1, 2, 3]) === true);
  // console.log(isUnique([1,1,3]) === false);

//   output in the console 
/*
~~~~ LOOP ~~~~ i === 0
~~~~ LOOP ~~~~ i === 1
~~~~ LOOP ~~~~ i === 2
true
*/
