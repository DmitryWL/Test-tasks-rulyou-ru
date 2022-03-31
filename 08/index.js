function sum(a, b) {
    let aArr = a.toString().split(""),
        bArr = b.toString().split("");

    aArr.reverse();
    bArr.reverse();

    let result = aArr.length > bArr.length ? aArr : bArr,
        secondNum = aArr.length > bArr.length ? bArr : aArr;
    for (let i = 0; i < result.length; i++) {
        if (!secondNum[i]) break;
        let sumNums = +result[i] + +secondNum[i];
        result[i] = sumNums;
    }

    result.forEach((value, index) => {
        if (+value >= 10) {
            result[index] = +value - 10;
            result[index + 1] = !isNaN(+result[index + 1]) ? +result[index + 1] + 1 : 1;
        }
    });

    return result.reverse().join("");
}

module.exports = sum;