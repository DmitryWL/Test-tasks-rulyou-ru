function toHex(value) {
    let resArr = [],
        nextNum = value < 0 ? value * -1 : value,
        isPositive = value >= 0;
    while (nextNum > 16) {
        resArr.push(numToHex(nextNum % 16));
        nextNum = Math.trunc(nextNum / 16);
    }
    resArr.push(numToHex(nextNum));
    return (isPositive ? "" : "-") + resArr.reverse().join("");
}

function numToHex(num) {
    if (num <= 9) {
        return num;
    } else {
        switch (num) {
            case 10:
                return "a";
            case 11:
                return "b";
            case 12:
                return "c";
            case 13:
                return "d";
            case 14:
                return "e";
            case 15:
                return "f";
        }
    }
}

module.exports = toHex;