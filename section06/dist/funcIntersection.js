"use strict";
// 型がA関数かつB関数
// なんの型なのか？
let intersectionFunc;
// 結論からいうとFuncA7とFuncB7をオーバーロードした型になる
// interface FuncA7 {
//     (a: number, b: string): number;
//     (a: string, b: number): number;
//     (a: string): number;
// }]
// 位置が変わると優先順位が変わる
intersectionFunc = function (a, b) {
    return 0;
};
let interfaceFunc2;
interfaceFunc2 = function (a, b) {
    return 0;
};
