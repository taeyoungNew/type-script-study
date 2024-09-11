// private constructor
// constructorにprivateをつける
// private　constructorを使う理由として
// シングルトーンパターンを作るために用いられる
// シングルパターンとはクラスからインスタンスを一つしか作れないこと！！！！
abstract class Person6 {
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

    greeting(this: Person6) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`)
        this.explainJob()
    }
    abstract explainJob(): void;
}

class Teacher6 extends Person6 {
    private static instance: Teacher6;
    get subject(): string  {
        if(!this._subject) {
            throw new Error("There is no subject")
        }
        return this._subject;
    }
    set subject(value) {
        if(!this._subject) {
            throw new Error("There is no subject")
        }
        this._subject = value;
    }
    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    explainJob(): void {
        console.log(`I am teacher and I teach ${this._subject}`)
    }

    // single pattern
    static getInstance() {
        if(Teacher6.instance) return Teacher6.instance
        Teacher6.instance = new Teacher6("TaeYeong", 23, "Math")
        return Teacher6.instance
    }
}
// priavte constructorのため下のコードはエラーとなる
// const teacher6 = new Teacher6("teayeon", 20, "Math");
const teacher6 =  Teacher6.getInstance();
const teacher62 = Teacher6.getInstance()
