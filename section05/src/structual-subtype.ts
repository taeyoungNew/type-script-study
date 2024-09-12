// structual subtype
// interfaceをimplementsしたクラスで作った
// インスタンスはinterfaceを型として持てる
// 構造的部分型と呼ぶ
interface Human4 {
    name: string;
    age: number;
    greeting(msg: string): void;
}

class Developer4 implements Human4 {
    static id: number = 0; // interfaceはstaticメソットやフィールドには一切影響を与えることはできない
    constructor(public name: string, public age: number, public experience: number) {
        
    }

    greeting(msg: string): void {
        console.log(this.name)
    }
}


// つまり制限がゆるい型に対して制限が厳しい型を入れられる
const user4: Human4= new Developer4("TYTY", 23, 4);

const develop = {
    name: "TY",
    age: 12,
    greeting(msg: string): void {
        console.log("hi")  
    },
    birthday: "2020-20-20"
}

// Obejectも入れることができる
const user5: Human4 = develop;