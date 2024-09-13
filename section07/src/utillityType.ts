// utillity type　+ default type parameter
interface Todo {
    title: string;
    text: string;
}

interface ResponseData<T extends { msg: string }= any> {
    data: T;
    status: number;
}

let tmp: ResponseData


// ArrayでGeneric配列型宣言ができる
const vegetables: Array<String> = ["Tomato", "Broccoli"]


// Promise ObjectにおいてもGeneric型を使える
const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve("hello")
    }, 1000)
})

fetchData.then(data => {
    data.toUpperCase
})

// Partial:importしなくてもTSが内蔵している便利なライブラリー
type Todoable = Partial<Todo>
// => type Todoable = {
//     title?: string | undefined;
//     text?: string | undefined;
// }

type ReadTodo = Readonly<Todo>
// => type ReadTodo = {
//     readonly title: string;
//     readonly text: string;
// }