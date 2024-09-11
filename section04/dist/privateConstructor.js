"use strict";
// private constructor
// constructorにprivateをつける
// private　constructorを使う理由として
// シングルトーンパターンを作るために用いられる
// シングルパターンとはクラスからインスタンスを一つしか作れないこと！！！！
class Person6 {
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
Person6.species = "Homo sapiens";
class Teacher6 extends Person6 {
    get subject() {
        if (!this._subject) {
            throw new Error("There is no subject");
        }
        return this._subject;
    }
    set subject(value) {
        if (!this._subject) {
            throw new Error("There is no subject");
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am teacher and I teach ${this._subject}`);
    }
    // single pattern
    static getInstance() {
        if (Teacher6.instance)
            return Teacher6.instance;
        Teacher6.instance = new Teacher6("TaeYeong", 23, "Math");
        return Teacher6.instance;
    }
}
// priavte constructorのため下のコードはエラーとなる
// const teacher6 = new Teacher6("teayeon", 20, "Math");
const teacher6 = Teacher6.getInstance();
const teacher62 = Teacher6.getInstance();
console.log(teacher6, teacher62);
