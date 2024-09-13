"use strict";
// type compatibllity
// 違うタイプでも互換性ある場合
// SとTが同じ型の場合
// SかTどっちかがanyの場合　等々…
let target = "hello";
let source = "hello";
target = source; // 互換性がある
// source = target; // これはエラー
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["COFFEE"] = 2] = "COFFEE";
})(Color || (Color = {}));
var Coffee;
(function (Coffee) {
    Coffee[Coffee["COFFEE"] = 0] = "COFFEE";
})(Coffee || (Coffee = {}));
// enum型に数字型は入れれる
// enum型と数字型は互換性がある
let target2 = Color.RED;
let source2 = 0;
target2 = source2; // これはいける
// しかし同じenum型は互換性がない
let enumColor = Color.RED;
let enumCoffee = Coffee.COFFEE;
// enumCoffee = enumColor
// 関数は？
// 代入される関数の引数の数が多い場合はエラーとなる
// あと、代入される関数の戻り値の制限がtargetの関数より緩い場合代入可能
let targetFunc = function (x, b) {
    return "string";
};
let sourceFunc = function (x, b) {
    return "string";
};
targetFunc = sourceFunc;
targetFunc("hi", "hello");
// classの互換性
// classのフィールドにprivate修飾子があったらエラーになる
class AdvancePerson {
    constructor() {
        this.name = "Peter";
    }
}
class AdvanceCar {
    constructor() {
        this.age = 35;
        this.name = "Prius";
    }
}
let targetClassPerson = new AdvancePerson();
let targetClasscar = new AdvanceCar();
targetClassPerson = targetClasscar;
// targetClasscar = targetClassPerson // carの場合がpersonより制限が強いのでエラーが起きる
