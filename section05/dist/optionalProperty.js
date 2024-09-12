"use strict";
// typeもinterfaceも全部複数に継承できる
class Developer8 {
    constructor(_name) {
        this._name = _name;
        if (_name) {
            this.name = _name;
        }
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
// const nameble: Nameble = {
//     name: "TYTy"
// }
