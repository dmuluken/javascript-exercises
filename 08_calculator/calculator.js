const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  const sumAll = arr.reduce((total, currentNumber) => {
    return total + currentNumber;
  }, 0);
  return sumAll;
};

const multiply = function (arr) {
  const multipyAll = arr.reduce((total, currentNumber) => {
    return total * currentNumber;
  }, 1);
  return multipyAll;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
