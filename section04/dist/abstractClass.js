"use strict";
// abstract
// abstractクラスはインスタンスを生成できない
class Person5 {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`);
        this.explainJob();
    }
}
Person5.species = "Homo sapiens";
// 継承先でabstractメソットを作成する必要がある
class Teacher5 extends Person5 {
    // getを使う際はコンストラクタのパラメータにある名前が同じではならない
    get subject() {
        if (!this._subject) {
            throw new Error("There is no subject");
        }
        return this._subject;
    }
    set subject(value) {
        // if(!this._subject) {
        //     throw new Error("There is no subject")
        // }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am teacher and I teach ${this._subject}`);
    }
}
const teacher5 = new Teacher5("teayeon", 20, "Math");
console.log(teacher5.explainJob());
