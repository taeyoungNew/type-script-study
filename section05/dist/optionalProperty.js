"use strict";
// typeもinterfaceも全部複数に継承できる
class Developer8 {
    constructor(name) {
        this.name = name;
    }
    // パラメータにもOptionalにできるけど
    // そのOptionalをそのまま戻り値には使えない
    testFunc(param) {
        if (!param) {
            return "何も持っていない";
        }
        return param; // エラー
    }
}
// nickNameがなくてもエラーが起きない
const nameble = {
    name: "TYTy"
};
