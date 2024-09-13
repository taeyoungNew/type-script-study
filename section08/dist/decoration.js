"use strict";
// decoration
// インスタンスの生成時ではなくクラスの定義時に実行される
// function Logging(constructor: Function) {
//         console.log("Logging...")
//         console.log(constructor)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decoratorにパラメータを受け取りたい時は？
// デコレーターを返す関数を作成する
function Logging(msg) {
    return function (constructor) {
        console.log("Logging...");
        console.log(constructor);
    };
}
// decorator factory
function Component(template, selector) {
    return function (constructor) {
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            // decoratorされたクラスのフィールドをどう取得するか
            mountedElement.querySelector('h1').textContent = instance.name;
        }
    };
}
// クラス全体か部分的にデコレーションできる
// クラスが実行する前に実行する
let User = class User {
    constructor() {
        this.name = "TY";
        console.log("User was created");
    }
};
User = __decorate([
    Component('<h1>{{ name }}<h1/>', '#app'),
    Logging("Logging User")
], User);
