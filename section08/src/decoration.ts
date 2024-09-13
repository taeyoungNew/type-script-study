// decoration
// インスタンスの生成時ではなくクラスの定義時に実行される
// function Logging(constructor: Function) {
//         console.log("Logging...")
//         console.log(constructor)
// }

// decoratorにパラメータを受け取りたい時は？
// デコレーターを返す関数を作成する
function Logging(msg: string) {
    return function (constructor: Function) {
        console.log("Logging...")
        console.log(constructor)
    }
}

// decorator factory
function Component(template: string, selector: string) {
    return function (constructor: {new(...args: any[]): { name: string}}) {
        const mountedElement = document.querySelector(selector)
        // デコレーターが付いているクラスのインスタンスにアクセスできる
        const instance = new constructor()
        if(mountedElement) {
            mountedElement.innerHTML = template;
            // decoratorされたクラスのフィールドをどう取得するか
            mountedElement.querySelector('h1')!.textContent = instance.name
        }
    }
}

// クラス全体か部分的にデコレーションできる
// クラスが実行する前に実行する
@Component('<h1>{{ name }}<h1/>', '#app')
@Logging("Logging User")
class User {
    name = "TY";
    constructor() {
        console.log("User was created")
    }
}