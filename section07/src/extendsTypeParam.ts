// extends type param
// 型パラメータに制約をつける方法
// Tに条件をつける
function copy2<T extends { age: number}>(value: T): T {
    return value
}

copy2({ age: 123123 })