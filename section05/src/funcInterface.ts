// function interface
interface AddFunc {
    // interfaceの中に定義する関数はメソッド名を書かなくてよい
    // newを前につけることでconstructor関数
    new (num1: number, num2: number): number;
    exFunc(say: string): void;
    // call
}

function tmp(num1: number, num2: number, func: AddFunc) {
    const result = new func(num1, num2);
    console.log(result)
}


// 特定の部分を再利用したい場合使う
// class Developer7 implements AddFunc {
//     constructor(public foo: string, public name: string, public age: number, public experience: number) {
        
//     }
//    addfunc(num1: number, num2: number): number {
//        return num1 + num2;
//    }

// }





// JSでは関数がObjectである
function foo() {}

foo.bar= "bar"