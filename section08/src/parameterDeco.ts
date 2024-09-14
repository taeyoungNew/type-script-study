// parameter decorator
// パラメータデコレーター
function proLogging6(target: any, propertyKey: string) {
    console.log('property logging')
    console.log(target);
    console.log(propertyKey) 
}

function enumerable6(isEnu:boolean) {
    // 사용하지 않는 파라미터는 앞에 언더스코어를 붙이면 
    // 타입스크립트에 명시적으로 사용하지 않는다는걸 알리는 것이다.
    return function name(_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
        return {
            enumerable: isEnu
        }
    }
}
// msg parameter
// 引数は３つ取れる
function msgParameter(target: any, propertyKey: string, paramIndex: number) {
    console.log('parameter loggin')
    console.log("target = ", target);
    console.log("propertyKey = ", propertyKey) 
    console.log("paramIndex = ", paramIndex);
}

// function funcDeco6(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log('method logging')
//     console.log(target);
//     console.log(propertyKey) 
//     console.log(descriptor);
    
// }

class User6 {
    @proLogging6
    name4 = "Quill";
    constructor(public age: number) {
        console.log("User was created")
    }

    
    // @enumerable6(false)
    // @funcDeco6
    // -0번째 파라미터
    greeting(@msgParameter msg: string) {
        console.log("hello");
        
    }
}