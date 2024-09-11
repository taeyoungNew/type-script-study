// abstract
// abstractクラスはインスタンスを生成できない
abstract class Person5 {
    static species = "Homo sapiens"
    static isAdult(age: number) {
        if(age > 17) return true
        return false
    }
    constructor(public readonly name: string, protected age: number) {
        
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person5) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`)
        this.explainJob()
    }
    // abstractクラスの中にしか作成できない
    abstract explainJob(): void;
}

// 継承先でabstractメソットを作成する必要がある
class Teacher5 extends Person5 {
    // getを使う際はコンストラクタのパラメータにある名前が同じではならない
    get subject(): string  {
        if(!this._subject) {
            throw new Error("There is no subject")
        }
        return this._subject;
    }
    set subject(value) {
        // if(!this._subject) {
        //     throw new Error("There is no subject")
        // }
        this._subject = value;
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    explainJob(): void {
        console.log(`I am teacher and I teach ${this._subject}`)
    }
}
const teacher5 = new Teacher5("teayeon", 20, "Math");
console.log(teacher5.explainJob())
