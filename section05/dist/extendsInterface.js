"use strict";
// 特定の部分を再利用したい場合使う
class Developer6 {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(msg) {
        console.log(this.name);
    }
}
let user4 = new Developer6("TYTY", 23, 4);
