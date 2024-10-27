const sumAll = function(intendedMin,intendedMax) {
    /*Find lowest, then just keep adding one till upper is reached*/
    if (!Number.isInteger(intendedMin) || !Number.isInteger(intendedMax)|| intendedMin <0 || intendedMax<0){
        return "ERROR";
    }
    if (intendedMax<intendedMin){
        let hold = intendedMax;
        intendedMax = intendedMin;
        intendedMin = hold;
    }
    let finalSum = 0;
    for (let i = intendedMin; i <= intendedMax; i++ ){
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
