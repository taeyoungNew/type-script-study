"use strict";
// 基本的にクラスの名前は頭文字を大文字にする
class Person {
    // Objectが作成する時に実行される関数である
    constructor(initName) {
        // パラメータにthis: {name: string }を作成することで
        // objectとかで参照する時thisはその位置のnameを指すこととなる
        // greeting(this: {name: string}) {
        //     console.log(`Hello My name is ${this.name}`)
        // }
        this.greeting = () => {
            console.log(`Hello My name is ${this.name}`);
        };
        // thisとはクラスのフィールドが格納されたもの
        this.name = initName;
    }
}
const person = new Person("テヨン");
// 
person.greeting();
// console.log("person = ",　person)
const anotherName = {
    name: "anotherName",
    // thisは実行した場所に依存している、つまりどこで使われるかによって変わる
    anotherGreeting: person.greeting
};
// クラスの中のthis.はフィールドを参照するけど
// anotherGreetingの中のthisはahotherNameというObjectを示している
// つまりthisは定義された時ではなく呼び出された時決まる
anotherName.anotherGreeting();
