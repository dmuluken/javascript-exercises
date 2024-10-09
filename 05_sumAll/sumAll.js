const sumAll = function (initialNumber, finalNumber) {
    let sum = 0;
    if (typeof (initialNumber) !== "number" || typeof (finalNumber) !== "number" || initialNumber < 0 || finalNumber < 0 || !(Number.isInteger(initialNumber)) || !(Number.isInteger(finalNumber))) {
        return "ERROR";
    } else {
        if (initialNumber >= 0 && finalNumber >= 0) {
            if (initialNumber < finalNumber) {
                for (i = initialNumber; i <= finalNumber; i++) {
                    sum += i;
                }
            }
            // console.log(sum);
            else {
                for (i = initialNumber; i >= finalNumber; i--) {
                    sum += i;
                }
            }
            return sum;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;

