"use strict";
// getter setter
class Person3 {
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
class Teacher3 extends Person3 {
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
const teacher = new Teacher3("先生", 123, "Math");
// setも関数だけどプロパティのようにデータを代入することができる
teacher.subject = "Music";
console.log(teacher.subject); // 関数なのにプロパティとしてアクセスできる
// teacher.greetings
