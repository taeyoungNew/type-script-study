"use strict";
// class generics
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const strLightDatabase = new LightDatabase();
strLightDatabase.add("apple");
strLightDatabase.add("banana");
strLightDatabase.add("superman");
strLightDatabase.remove("apple");
strLightDatabase.get();
console.log(strLightDatabase.get());
