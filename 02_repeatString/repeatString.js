const repeatString = function(string, num) {
    let concatString=""
    if (num < 0){
        errMsg = "ERROR";
        return errMsg;
    } else {
        for (i = num; i > 0; i--){
            concatString += string;
    }
    }
return concatString
};

// Do not edit below this line
module.exports = repeatString;
