(function () {
    'use strict';

    for (var seireki = 1926; seireki <= 1935; seireki++) {
        process.stdout.write("西暦" + seireki + "年は、");
        var syowa = seireki - 1925;
        console.log("昭和" + syowa + "年です。");
    }

})();
