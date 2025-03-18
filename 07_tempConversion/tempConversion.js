const roundOff = function (val){
  return Math.round(val*10)/10;
}

const convertToCelsius = function(degreesInFahrenheit) {
  let celsiusFormula = (degreesInFahrenheit - 32)* 5/9;
  return roundOff(celsiusFormula);
};

const convertToFahrenheit = function(degreesInCelsius) {
  let fahrenheitFormula = degreesInCelsius*(9/5) + 32;
  return roundOff(fahrenheitFormula);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
