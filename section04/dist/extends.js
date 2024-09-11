"use strict";
// extends
class Person2 {
    // protected: privateは継承した息子のクラスにも適用されるので
    // protectedを使用して継承した息子クラスからアクセスできるようにしよう
    // ただし完全に外部からはアクセスできない
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        // readonlyとは文字通り読むだけ
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`);
    }
}
class Teacher2 extends Person2 {
    constructor(name, age, subject) {
        super(name, age); // 継承した親のコンストラクタ 
        this.subject = subject;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old I teach ${this.subject}`);
    }
}
const teacher2 = new Teacher2("先生", 123, "Math");
