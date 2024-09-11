"use strict";
// static
// インスタンスを作らずにクラスを使う
class Person4 {
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
    }
}
Person4.species = "Homo sapiens";
class Teacher4 extends Person4 {
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
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old I teach ${this.subject}`);
    }
}
// const person4 = new Person4("yong", 14)
console.log(Person4.isAdult(13));
const teacher4 = new Teacher4("yong", 14, "math");
// console.log(teacher4.)
