// const assertion + 型の中にtype演算子を使ってみよう
const milk2 = "milk"
// milk2 = "milk"
let milk = "milk" as const;
milk = "milk"

// readonlyになる
const array = [10, 20] as const


// const peter: {
//     readonly name: "peter";
//     readonly age: 39;
// }
const peter = {
    name: "peter",
    age: 39
} as const

// PeterTypeにpeterを型にしたいときは？
type PeterType = typeof peter;