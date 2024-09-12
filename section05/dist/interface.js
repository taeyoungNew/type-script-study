"use strict";
// 下書きはめんどくさいので
// const human: {
//     name: string;
//     age: number
// } = {
//     name: "TY",
//     age: 31
// }
// 再利用することができる
const human2 = {
    name: "TY",
    age: 123,
    greeting(message) {
        console.log(message);
    }
};
const interHuman = {
    name: "TY",
    age: 123,
    greeting: (param) => {
        console.log(param);
    }
};
let tmpFunc;
