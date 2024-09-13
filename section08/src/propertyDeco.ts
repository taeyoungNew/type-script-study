// property decoration
// クラス全体ではなく、クラスの中に部分的にデコレーションする方法
// JSでは関数はObjectである
function proLogging4(target: any, propertyKey: string) {
    console.log('property logging')
    console.log(target);
    console.log(propertyKey) 
}

function funcDeco4(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('method logging')
    console.log(target);
    console.log(propertyKey) 
    console.log(descriptor);
    
}

class User4 {
    @proLogging4
    name4 = "Quill";
    constructor(public age: number) {
        console.log("User was created")
    }

    @funcDeco4
    greeting() {
        console.log("hello");
        
    }
}