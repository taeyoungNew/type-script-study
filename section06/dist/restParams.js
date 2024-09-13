"use strict";
// rest paraneter
// レストパラメータは配列の型を持つ
// tuple型も入れれる
// あってもなくても良い引数の場合は？をつける
// とある型の引数を無数に受けたい場合は最後に...<型>[]と作成する
// しかし手前の引数をすべて受けた場合に最後の...<型>[]の引数を受け入れることができる
function advanceFn(...param) {
    return param;
}
advanceFn("das", 123, true);
// numberタイプの複数の引数を受け入れたい場合
// unionタイプの場合
function restParams(...param) {
}
// ラベルタプル
function labelTuple(...params) {
    return params;
}
console.log(labelTuple("TAEYEONG", 23, "社員", "エンジニア"));
