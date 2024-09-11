// 基本的にクラスの名前は頭文字を大文字にする
// クラスは型にできる
// 
class Person {
    // 設計図
    // フィールド
    name: string;

    // Objectが作成する時に実行される関数である
    constructor(initName: string) {
        // thisとはクラスのフィールドが格納されたもの
        this.name = initName;
    }

    // パラメータにthis: {name: string }を作成することで
    // objectとかで参照する時thisはその位置のnameを指すこととなる
    // 普通の関数は呼び出された時に決まる
    greeting(this: Person) {
        console.log(`Hello My name is ${this.name}`)
    }

    // arrow関数の場合は定義時に決まるので
    // 外のobjectから呼び出した場合でもクラスの中に定義されている
    // テヨンというデータが出力される
    // つまりarrow関数はthisをパラメータとして受け入れない
    // greeting = (this: {name: string}) => {　// エラー
    //     console.log(`Hello My name is ${this.name}`)
    // }
}
let person2: Person = new Person("クラス型で宣言");
person2.greeting()


const person = new Person("テヨン");

// 
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