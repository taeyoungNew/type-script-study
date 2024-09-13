// key operator
// objectの型について使用
// keyを型にする
type K = keyof { name: string; age: number}

let kVal: K;
kVal = "age"
kVal = "name"

// extends keyofとは
function copy3<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
    value[key]
    return value
}

copy3({ name: "taki", age: 39}, "name")