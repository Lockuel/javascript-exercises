const leapYears = function(Year) {
    if (!Number.isInteger(Year)){
        return "ERROR"
    }
    if ((Year % 4 == 0 && Year % 100 != 0) || (Year % 400 == 0 && Year % 100 == 0)){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
