// getter setter
class Person3 {
    constructor(public readonly name: string, protected age: number) {
        
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person3) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`)
    }

}

class Teacher3 extends Person3 {
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

    greeting(this: Teacher3): void {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old I teach ${this.subject}`)
    }
}


const teacher = new Teacher3("先生", 123, "Math")
// setも関数だけどプロパティのようにデータを代入することができる
teacher.subject = "Music"
console.log(teacher.subject) // 関数なのにプロパティとしてアクセスできる
// teacher.greetings