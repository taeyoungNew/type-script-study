// how to decoration class
// クラスをデコレーションしてみよう
//クラスを違うものにする
function Logging3(msg: string) {
    return function (constructor: Function) {
    }
}
function Component3(template: string, selector: string) {
    return function <T extends {　new(...args: any[]): { name: string, age: number}}>(constructor: T) {
       
        // User3クラスを継承している
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                const mountedElement = document.querySelector(selector)
                const instance = new constructor()
                if(mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1')!.textContent = instance.name
                }
            }
        }
    }
}

@Logging3("Logging3 User")
@Component3('<h1>{{ name }}<h1/>', '#app')
class User3 {
    name = "TY";
    constructor(public age: number) {
        console.log("User was created")
    }
}