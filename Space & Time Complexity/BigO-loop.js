var countChars = function(str){
    var count = 0; // 1 operation

    for(var i = 0; i<str.lenght; i++){
        count++;  // 5 operation
        // increment has const no. of operations
    }
    return count; // 1 operation
};

countChars("dsance");
countChars("walk");

// time complexity => linear
// if i change the value of countChars() no. of operations 
// dosnt change 
