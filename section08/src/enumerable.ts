// practical class decorator
// クラス全体ではなく、クラスの中に部分的にデコレーションする方法
// JSでは関数はObjectである
function proLogging5(target: any, propertyKey: string) {
    console.log('property logging')
    console.log(target);
    console.log(propertyKey) 
}

function enumerable(isEnu:boolean) {
    // 사용하지 않는 파라미터는 앞에 언더스코어를 붙이면 
    // 타입스크립트에 명시적으로 사용하지 않는다는걸 알리는 것이다.
    return function name(_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
        return {
            enumerable: isEnu
        }
    }
}

function funcDeco5(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('method logging')
    console.log(target);
    console.log(propertyKey) 
    console.log(descriptor);
    
}

class User5 {
    @proLogging5
    name4 = "Quill";
    constructor(public age: number) {
        console.log("User was created")
    }

    
    @enumerable(false)
    @funcDeco5
    greeting() {
        console.log("hello");
        
    }
}