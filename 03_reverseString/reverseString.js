const reverseString = function (str) {
    len = -1 * str.length;
    // console.log(len);
    // console.log(str.slice(-2, -1));
    result = "";
    if (len == 0) {
        return result;
    } else {
        for (i = -1; i >= len; i--) {
            if (i == -1) {
                result += str.slice(i);
            } else {
                result += str.slice(i, i + 1);
            }
        }
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;

