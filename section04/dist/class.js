"use strict";
// 基本的にクラスの名前は頭文字を大文字にする
// クラスは型にできる
// JSではprivateをどう使う？
// ES2022でprivateフィールドが追加され
// フィールドの前に#を付け加えることでprivateフィールドとして使える
class Person {
    // Objectが作成する時に実行される関数である
    constructor(initName, initAge) {
        // thisとはクラスのフィールドが格納されたもの
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    // パラメータにthis: {name: string }を作成することで
    // objectとかで参照する時thisはその位置のnameを指すこととなる
    // 普通の関数は呼び出された時に決まる
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`);
    }
}
let person2 = new Person("クラス型で宣言", 31);
person2.incrementAge();
person2.greeting();
// Property 'age' is private and only accessible within class 'Person'
// person2.age = 2;
const person = new Person("テヨン", 23);
person.greeting();
// console.log("person = ",　person)
// const anotherName = {
//     name: "anotherName",
//     // thisは実行した場所に依存している、つまりどこで使われるかによって変わる
//     anotherGreeting: person.greeting
// }
// // クラスの中のthis.はフィールドを参照するけど
// // anotherGreetingの中のthisはahotherNameというObjectを示している
// // つまりthisは定義された時ではなく呼び出された時決まる
// anotherName.anotherGreeting();
