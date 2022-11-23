const { test } = require("./test");
const { getColorFromPairNumber } = require("./color-coder");

function printColorCodes() {
    for (i = 1; i < 26; i++) {
        let colorPair = getColorFromPairNumber(i);
        console.log(`${i}:${colorPair}`);
    }
}

test();
printColorCodes();
