"use strict";
let kVal;
kVal = "age";
kVal = "name";
// extends keyofとは
function copy3(value, key) {
    value[key];
    return value;
}
copy3({ name: "taki", age: 39 }, "name");
