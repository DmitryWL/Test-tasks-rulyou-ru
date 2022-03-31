function rleDecode(source) {
    let newCount = 1;
    resStr = "";

    for (let symbol of source) {
        if (isNaN(+symbol)) {
            for (let i = 0; i < newCount; i++) {
                resStr += symbol;
            }
        } else {
            newCount = +symbol;
        }
    }

    return resStr;
}

module.exports = rleDecode;