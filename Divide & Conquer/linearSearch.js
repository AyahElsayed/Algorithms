// TASK: Implement linear search.

function linearSearch(list, item) {
    let index = -1; // out of the array
    list.forEach((listItem,i) => {
        if(listItem === item){
            index = i;
        }
    });
    return index;
}

linearSearch([2,6,7,90,103], 90);
// output : 3

// time complexicity => linear