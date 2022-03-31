const toHex = require("../03");

function rgb(r, g, b) {
    r = fixNumStr(toHex(fixNum(+r)));
    g = fixNumStr(toHex(fixNum(+g)));
    b = fixNumStr(toHex(fixNum(+b)));

    return `${r}${g}${b}`.toUpperCase();
}

function fixNum(num) {
    if (!num) {
        return 0;
    } else if (num < 0) {
        return 0;
    } else if (num > 255) {
        return 255;
    }

    return num;
}

function fixNumStr(num) {
    if (num.toString().length < 2) {
        return "0" + num;
    }

    return num;
}

module.exports = rgb;