"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// parameter decorator
// パラメータデコレーター
function proLogging6(target, propertyKey) {
    console.log('property logging');
    console.log(target);
    console.log(propertyKey);
}
function enumerable6(isEnu) {
    // 사용하지 않는 파라미터는 앞에 언더스코어를 붙이면 
    // 타입스크립트에 명시적으로 사용하지 않는다는걸 알리는 것이다.
    return function name(_target, _propertyKey, _descriptor) {
        return {
            enumerable: isEnu
        };
    };
}
// msg parameter
// 引数は３つ取れる
function msgParameter(target, propertyKey, paramIndex) {
    console.log('parameter loggin');
    console.log("target = ", target);
    console.log("propertyKey = ", propertyKey);
    console.log("paramIndex = ", paramIndex);
}
// function funcDeco6(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log('method logging')
//     console.log(target);
//     console.log(propertyKey) 
//     console.log(descriptor);
// }
class User6 {
    constructor(age) {
        this.age = age;
        this.name4 = "Quill";
        console.log("User was created");
    }
    // @enumerable6(false)
    // @funcDeco6
    greeting(msg) {
        console.log("hello");
    }
}
__decorate([
    proLogging6
], User6.prototype, "name4", void 0);
__decorate([
    __param(0, msgParameter)
], User6.prototype, "greeting", null);
