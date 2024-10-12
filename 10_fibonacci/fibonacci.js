const fibonacci = function (num) {
    let fab1 = 0;
    let fab2 = 1;
    let fab;
    num = Number(num);
    if (num < 0) {
        return 'OOPS';
    } else if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        for (i = 2; i <= num; i++) {
            fab = fab2 + fab1;
            fab1 = fab2;
            fab2 = fab;
        }
        return fab;
    }
};

// Do not edit below this line
module.exports = fibonacci;
