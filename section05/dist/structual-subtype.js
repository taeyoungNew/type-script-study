"use strict";
class Developer4 {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(msg) {
        console.log(this.name);
    }
}
Developer4.id = 0; // interfaceはstaticメソットやフィールドには一切影響を与えることはできない
// つまり制限がゆるい型に対して制限が厳しい型を入れられる
const user4 = new Developer4("TYTY", 23, 4);
const develop = {
    name: "TY",
    age: 12,
    greeting(msg) {
        console.log("hi");
    },
    birthday: "2020-20-20"
};
// Obejectも入れることができる
const user5 = develop;
