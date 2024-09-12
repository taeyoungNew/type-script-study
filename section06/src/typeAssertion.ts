// type assertion 
// 手動で型を上書きする方法が二つある
const input = <HTMLInputElement>document.getElementById("input")
// OR
const input2 = document.getElementById("input") as HTMLInputElement

input.value = "inital input value"

// (document.getElementById("input") as HTMLInputElement).value = "inital input value"
