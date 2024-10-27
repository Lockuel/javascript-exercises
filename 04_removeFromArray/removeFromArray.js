const removeFromArray = function(initialArray,...removal) {
    /*Easiest way is to just make a new arrary without the elements
    
    Additonal notes;
    ... = rest operator, rest operator allows for multiple argumetents/list of arguments in one*/
    newArray = [];
    for (let i=0; i < initialArray.length; i++){
        if (!(removal.includes(initialArray[i]))){
            newArray.push(initialArray[i]);
        }

    }
    return newArray; 
    /*Later return check note - forEach is supported in javascript. Looks a lot cleaner*/
};

// Do not edit below this line
module.exports = removeFromArray;
