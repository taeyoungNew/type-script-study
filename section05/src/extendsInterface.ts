// extends interface
interface Nameable6 {
    name: string;
}

type typeAble = {
    name: string
}

// interfaceはinterfaceを継承できる (タイプエリアスも継承可能)
// interfaceに同じプロパティが存在したら型が代入できる場合、上書きされる
interface Human6 extends Nameable6, typeAble {
    age: number;
    greeting(msg: string): void;
}

// 特定の部分を再利用したい場合使う
class Developer6 implements Human6 {
     constructor(public name: string, public age: number, public experience: number) {
        
    }

    greeting(msg: string): void {
        console.log(this.name)
    }
}


let user4: Human6= new Developer6("TYTY", 23, 4);