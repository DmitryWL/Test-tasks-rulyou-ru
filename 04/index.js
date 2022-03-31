function rle(source) {
    let resStr = "",
        lastCount = 1;
    for (let i = 0; i < source.length; i++) {
        if (i === 0) {
            resStr += source[i];
            continue;
        }
        if (source[i] === source[i - 1]) {
            lastCount++;
            if (source.length - i === 1) {
                resStr += lastCount > 1 ? lastCount : "";
            }
            continue;
        }
        if (lastCount === 1) {
            resStr += source[i];
        } else {
            resStr += lastCount + source[i];
            lastCount = 1;
        }
    }

    return resStr;
}

module.exports = rle;