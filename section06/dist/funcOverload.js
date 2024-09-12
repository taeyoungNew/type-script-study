"use strict";
function toUpperCase2(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
const upperHello2 = toUpperCase2("dads");
// const upperHello: string | numberとunion型を型推論してしまう
// const upperHello = toUpperCase2("hello") as string;
upperHello2.toString;
//　明らかに文字なのにnumberタイプのデータが持つメソットを呼び出すことがができる
upperHello2.valueOf;
