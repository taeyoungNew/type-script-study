"use strict";
function toUpperCase2(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
// 上のinterfaceを型にした場合何を入れればあ良いのだろうか
// overloadのすべての関数に対応できる関数を入れなければならない
// const tmpFunc: TmpFunc = function (x: string | number) {
//     return 0
// };
// 関数の型の形
const upperHello2 = toUpperCase2;
upperHello2("hi");
upperHello2(123);
// const upperHello: string | numberとunion型を型推論してしまう
// const upperHello = toUpperCase2("hello") as string;
upperHello2.toString;
//　明らかに文字なのにnumberタイプのデータが持つメソットを呼び出すことがができる
upperHello2.valueOf;
