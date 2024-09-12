"use strict";
function tmp(num1, num2, func) {
    const result = new func(num1, num2);
    console.log(result);
}
// 特定の部分を再利用したい場合使う
// class Developer7 implements AddFunc {
//     constructor(public foo: string, public name: string, public age: number, public experience: number) {
//     }
//    addfunc(num1: number, num2: number): number {
//        return num1 + num2;
//    }
// }
// JSでは関数がObjectである
function foo() { }
foo.bar = "bar";
