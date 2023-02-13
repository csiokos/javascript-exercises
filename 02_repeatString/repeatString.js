const repeatString = function(string, num) {
    if(num>=0){
       let i=0;
       let newArray = '';
       for(i=0; i<num; i++){
        newArray = newArray + string;
       }
       return newArray;

    } else {
        return ("ERROR");
    }
    

};

// Do not edit below this line
module.exports = repeatString;