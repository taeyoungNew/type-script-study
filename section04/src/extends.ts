// extends
class Person {
    // protected: privateは継承した息子のクラスにも適用されるので
    // protectedを使用して継承した息子クラスからアクセスできるようにしよう
    // ただし完全に外部からはアクセスできない
    constructor(public readonly name: string, protected age: number) {
        
    }

    incrementAge() {
        // readonlyとは文字通り読むだけ
        this.age += 1;
    }

    greeting(this: Person) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old`)
    }

}

class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age); // 継承した親のコンストラクタ 
    }

    greeting(this: Teacher): void {
        console.log(`Hello My name is ${this.name}. I am ${this.age} old I teach ${this.subject}`)
    }
}


const teacher = new Teacher("先生", 123, "Math")