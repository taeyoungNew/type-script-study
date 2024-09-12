// 下書きはめんどくさいので
// const human: {
//     name: string;
//     age: number
// } = {
//     name: "TY",
//     age: 31
// }


// typeアリアスはすべて適用可能
// Type型で宣言をして
type Human = {
    name: string;
    age: number;
    greeting(msg: string): void;
} | string // union型でも使える

// 再利用することができる
const human2: Human = {
    name: "TY",
    age: 123,
    greeting(message: string) {
        console.log(message)
    }
}

// TSでのインターフェースは下のように作成する
// Objectの構造を現したもの
// Typeエリアスと違うところは
// Obejctのみ適用可能
interface inter {
    name: string;
    age: number;
    greeting(msg: string): void;
}


const interHuman: inter = {
    name: "TY",
    age: 123,
    greeting: (param: string): void => {
        console.log(param)
    }
}

let tmpFunc: (msg: string) => void;
