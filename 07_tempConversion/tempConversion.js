/*As a european I must put my moral objection to being forced to support inferior non-metric units.*/

const convertToCelsius = function(fahrenheit) {
  if (typeof fahrenheit != 'number'){
    return "ERROR";
  }
  return Math.round(((fahrenheit-32)/1.8)*10)/10;
};

const convertToFahrenheit = function(celcius) {
  if (typeof celcius != 'number'){
    return "ERROR"
  }
  return Math.round(((celcius * 1.8) +32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
