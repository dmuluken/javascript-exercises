const removeFromArray = function () {
    let originalArray = arguments[0];
    arrayLength = originalArray.length;
    argLength = arguments.length;
    let newArray = [];
    console.log(arrayLength);
    console.log(argLength);
    for (i = 1; i < argLength; i++) {
        newArray = [];
        for (j = 0; j < arrayLength; j++) {
            if (originalArray[j] === arguments[i]) {
                continue;
            }
            newArray.push(originalArray[j]);
        }
        originalArray = newArray;
        arrayLength = originalArray.length;
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
