const convertToCelsius = function (tempFahrenheit) {
  tempCelsius = (tempFahrenheit - 32) * 5 / 9;
  if (tempCelsius != 0) {
    tempCelsius = Number(tempCelsius.toFixed(1));
  }
  return tempCelsius;
};

const convertToFahrenheit = function (tempCelsius) {
  tempFahrenheit = tempCelsius * 9 / 5 + 32;
  if (tempFahrenheit != 0) {
    tempFahrenheit = Number(tempFahrenheit.toFixed(1));
  }
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
