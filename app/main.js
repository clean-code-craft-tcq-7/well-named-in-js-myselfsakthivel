const { test } = require("./test");
const { MajorColorNames, MinorColorNames } = require("./color-coder");

function printColorCodes() {
    for (i = 1; i < 26; i++) {
        let minorSize = MajorColorNames.length;
        let majorSize = MinorColorNames.length;
        let zeroBasedPairNumber = i - 1;
        let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
        let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
        pair.majorColor = MajorColorNames[majorIndex];
        pair.minorColor = MinorColorNames[minorIndex];
        console.log(`${i}:[${MajorColorNames[majorIndex]},${MinorColorNames[minorIndex]}`);
    }
}

test();
printColorCodes();
