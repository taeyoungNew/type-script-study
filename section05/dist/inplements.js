"use strict";
// interfaceは複数implemantsできる
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(msg) {
        console.log(this.name);
    }
}
Developer.id = 0; // interfaceはstaticメソットやフィールドには一切影響を与えることはできない
