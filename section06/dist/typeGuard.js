"use strict";
// type guard + tag union
class Dog {
    constructor() {
        // tag union
        this.kind = "dog";
    }
    speak() {
        console.log("bow-wow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havePet(pet) {
    // タグをつけることによって判別できるようにする
    switch (pet.kind) {
        case "bird":
            pet.fly();
        case "dog":
            pet.speak();
    }
    pet.speak();
    // is pet instanceof Bird?
    // petはBirdから生成されたインスタンスなのか？
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return "";
}
function describeNomadWorkerProfile(nomadWorker) {
    console.log(nomadWorker);
    // typeofはJSのタイプしか区別できない
    // TSではin演算子を使用して区別する
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follwer" in nomadWorker) {
        console.log(nomadWorker.follwer);
    }
}
