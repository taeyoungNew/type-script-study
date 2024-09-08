// never type
// 決して何も返さない
// 
const error = function error(message: string): never {
    throw new Error(message)
    
}

console.log(error('this is an error'))