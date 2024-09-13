"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// many decoration
// デコレーターの実行順は下から上順である
function Logging2(msg) {
    console.log("Logging2");
    return function (constructor) {
        console.log("Logging2 factory");
        console.log(constructor);
    };
}
// では？デコレーターファクトリーは？
// 上から下に実行
function Component2(template, selector) {
    console.log("Component2");
    return function (constructor) {
        console.log("Component2 factory");
        const mountedElement = document.querySelector(selector);
        // デコレーターが付いているクラスのインスタンスにアクセスできる
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            // decoratorされたクラスのフィールドをどう取得するか
            mountedElement.querySelector('h1').textContent = instance.name;
        }
    };
}
let User2 = class User2 {
    constructor() {
        this.name = "TY";
        console.log("User was created");
    }
};
User2 = __decorate([
    Logging2("Logging2 User"),
    Component2('<h1>{{ name }}<h1/>', '#app')
], User2);
