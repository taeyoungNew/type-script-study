// tsc --init tsconfig.json을 만들어 
// 모든 ts파일을 일괄 컴파일을 진행하자
// 1. tsc --init을 입력하여 tsconfig.json을 생성
// 2. tsc만 입력해도 모든 TS파일은 JS파일로 컴파일된다.

// 지정해서 한꺼번에 컴파일하는 방법 
// => 예) tsc index.ts index2.ts

// tsc를 입력하면 tsconfig.json을 토대로 컴파일이 된다. 
// 현재 이 폴더에 존재하는 tsconfig.json은 "target": "es2016" 로 설정되어있기때문에 
// 컴파일을 하면 var타입은 안나오고 let const로 컴파일이 된다. 
// 하지만 tsc index.ts와 같이 하게되면 tsconfig.json은 적용되지 않아 
// 예날의 JS의 문법으로 바뀐다. 
let hi: string = "hi";
console.log("compile")
console.log(hi.toUpperCase())
function add(n1: number, n2: number): number {
    return n1 + n2;
}

// "noEmitOnError" : trueと設定すると
//　エラーが起きた場合JSにコンパイルされない
add(hi, 12)