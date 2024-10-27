const repeatString = function(text, repeats) {
    if (repeats < 0){
        return "ERROR";
    }
    let finalString="";
    for (let i = 0;i < repeats;i++){
        finalString += text;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
