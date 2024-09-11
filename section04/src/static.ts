// static
// インスタンスを作らずにクラスを使う
class Person4 {
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

    greeting(this: Person4) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`)
    }

}

class Teacher4 extends Person4 {
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

    greeting(this: Teacher4): void {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old I teach ${this.subject}`)
    }
}
// const person4 = new Person4("yong", 14)
console.log(Person4.isAdult(13))
const teacher4 = new Teacher4("yong", 14, "math")
// console.log(teacher4.)