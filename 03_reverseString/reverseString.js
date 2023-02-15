const reverseString = function(array) {
    var output = [];
    for (var i=array.length-1; i>=0 ; i--){
        output += array[i];
    }
    return output.toString();
};

// Do not edit below this line
module.exports = reverseString;
