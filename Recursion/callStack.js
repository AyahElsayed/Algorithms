
var tracker = 0;
var callMe = function () {
    tracker++
    if (tracker === 3) {
        return 'loops!';
    }
    callMe('anytime');
};

/*
1. Push called Fn on stack.

2. Execute Fn body.

until...

... another fn is called:

    Pause the current execution and start at step 1.

... a return is hit:

    Pop the current Fn off the stack.

    Resume executing the previous Fn.
*/

var callMyself = function () {

    if (condition) {
        // base case
        return;
    } else {
        // recursive case
        callMyself();
    }

    return;
};
/*
Recursion in 4 Steps:
    1. Identify base case(s).
    2. Identify recursive case(s).
    3. Return where appropriate.
    4. Write procedures for each case that bring you closer to the base case(s)
*/