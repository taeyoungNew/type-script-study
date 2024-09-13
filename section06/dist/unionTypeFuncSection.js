"use strict";
// 下のように異なるfunをunion型として受けた場合は
// パラメータはintersection戻り値はunion型となる
let unionFunc8;
// パラメータがnever型となっている
unionFunc8 = function (a) {
    return 0;
};
unionFunc8 = (b) => "adwadasd";
