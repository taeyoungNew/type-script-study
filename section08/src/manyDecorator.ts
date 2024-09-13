// many decoration
// デコレーターの実行順は下から上順である
function Logging2(msg: string) {
    console.log("Logging2")
    return function (constructor: Function) {
        console.log("Logging2 factory")
        console.log(constructor)
    }
}

// では？デコレーターファクトリーは？
// 上から下に実行
function Component2(template: string, selector: string) {
    console.log("Component2")
    return function (constructor: {new(...args: any[]): { name: string}}) {
        console.log("Component2 factory")
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

@Logging2("Logging2 User")
@Component2('<h1>{{ name }}<h1/>', '#app')
class User2 {
    name = "TY";
    constructor() {
        console.log("User was created")
    }
}