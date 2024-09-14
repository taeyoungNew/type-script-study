"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// property decoration
// クラス全体ではなく、クラスの中に部分的にデコレーションする方法
// JSでは関数はObjectである
function proLogging5(target, propertyKey) {
    console.log('property logging');
    console.log(target);
    console.log(propertyKey);
}
function enumerable(isEnu) {
    return function name(target, propertyKey, descriptor) {
        return {
            enumerable: isEnu
        };
    };
}
function funcDeco5(target, propertyKey, descriptor) {
    console.log('method logging');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
class User5 {
    constructor(age) {
        this.age = age;
        this.name4 = "Quill";
        console.log("User was created");
    }
    greeting() {
        console.log("hello");
    }
}
__decorate([
    proLogging5
], User5.prototype, "name4", void 0);
__decorate([
    enumerable(false),
    funcDeco5
], User5.prototype, "greeting", null);
