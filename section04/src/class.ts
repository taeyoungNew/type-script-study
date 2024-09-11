// 基本的にクラスの名前は頭文字を大文字にする
class Person {
    // 設計図
    // フィールド
    name: string;

    // Objectが作成する時に実行される関数である
    constructor(initName: string) {
        // thisとはクラスのフィールドが格納されたもの
        this.name = initName;
    }

    greeting() {
        console.log(`Hello My name is ${this.name}`)
    }
}

const person = new Person("テヨン");

person.greeting();
console.log(person)

const anotherName = {
    name: "anotherName",
    anotherGreeting: person.greeting
}

// クラスの中のthis.はフィールドを参照するけど
// anotherGreetingの中のthisはahotherNameというObjectを示している
// つまりthisは定義された時ではなく呼び出された時決まる
anotherName.anotherGreeting();