"use strict";
// generics : 型を引数として受け汎用的に使える
// anyとどう違うのか : anyは型のメソッドを使えない
// どんな型でもその型のメソットを使えるようになる
function copy(value) {
    return value;
}
let result = copy(123123);
let result2 = copy(123123);
result = "adasd";
let objResult = copy({ age: 123 });
// 関数宣言以外でもgenericsは使うことができる
const arrowFunc = (num) => num;
