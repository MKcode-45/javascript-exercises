const removeFromArray = function(arr, ...args) {

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < args.length; j++){
            arr = arr.filter(()=> arr[i] !== args[j] );
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
