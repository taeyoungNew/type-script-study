"use strict";
// 基本的にクラスの名前は頭文字を大文字にする
class Person {
    // Objectが作成する時に実行される関数である
    constructor(initName) {
        // thisとはクラスのフィールドが格納されたもの
        this.name = initName;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}`);
    }
}
const person = new Person("テヨン");
person.greeting();
console.log(person);
const anotherName = {
    name: "anotherName",
    anotherGreeting: person.greeting
};
// クラスの中のthis.はフィールドを参照するけど
// anotherGreetingの中のthisはahotherNameというObjectを示している
// undefined
anotherName.anotherGreeting();
