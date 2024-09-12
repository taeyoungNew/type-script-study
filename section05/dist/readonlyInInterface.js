"use strict";
class Developer5 {
    // interfaceのnameがreadonlyでもDevelop5のnameがpublicで
    // そのDevelop5のインスタンスならHuman5のreadonlyの影響は受けない
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(msg) {
        console.log(this.name);
    }
}
let user4 = new Developer5("TYTY", 23, 4);
// Cannot assign to 'name' because it is a read-only property.
// user4.name = "書き込め"; 
// しかし代入することで書き込めが可能
const developer6 = {
    name: "tytytytyty",
    age: 12,
    greeting() {
        console.log("hihihi");
    }
};
user4 = developer6;
