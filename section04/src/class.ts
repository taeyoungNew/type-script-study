// 基本的にクラスの名前は頭文字を大文字にする
// クラスは型にできる
class Person1 {
    private readonly id: number = 32;
    // constructorの省略法
    constructor(public readonly name: string, private age: number) {
        // readonly修飾子が付いてたとしてもコンストラクタの中では書き換えることができる
        this.id = 32323;
    }

    incrementAge() {
        // readonlyとは文字通り読むだけ
        this.age += 1;
    }

    // パラメータにthis: {name: string }を作成することで
    // objectとかで参照する時thisはその位置のnameを指すこととなる
    // 普通の関数は呼び出された時に決まる
    greeting(this: Person1) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`)
    }

}
let person2: Person1 = new Person1("クラス型で宣言", 31);
person2.incrementAge()
person2.greeting();
// nameはreadonly修飾子が付いているので修正することはできない
// Cannot assign to 'name' because it is a read-only property.
// person2.name = "新しい名前"

const person = new Person1("テヨン", 23);

person.greeting();
