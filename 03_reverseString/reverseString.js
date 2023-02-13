const reverseString = function(string) {
    let newArray = '';
    for(i=0; i<=(string.length-1); i++){
        newArray = newArray +string[string.length-1-i];
    }

    return newArray;

};

// Do not edit below this line
module.exports = reverseString;
