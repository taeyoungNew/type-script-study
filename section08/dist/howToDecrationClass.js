"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// how to decoration class
// クラスをデコレーションしてみよう
//クラスを違うものにする
function Logging3(msg) {
    return function (constructor) {
    };
}
function Component3(template, selector) {
    return function (constructor) {
        // User3クラスを継承している
        return class extends constructor {
            constructor(...args) {
                super(...args);
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1').textContent = instance.name;
                }
            }
        };
    };
}
let User3 = class User3 {
    constructor(age) {
        this.age = age;
        this.name = "TY";
        console.log("User was created");
    }
};
User3 = __decorate([
    Logging3("Logging3 User"),
    Component3('<h1>{{ name }}<h1/>', '#app')
], User3);
