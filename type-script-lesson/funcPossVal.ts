// 함수를 보유하는 변수에 타입을 지정하는 방법
function add(num1: number, num2: number): number {
    return num1 + num2;
}
// const anotherAdd = add;
// 型注釈は矢印, 関数宣言はコロン
let anotherAdd: (n1: number, n2: number) => number = add;

console.log(anotherAdd(12, 32));

// 변수에 익명함수를 넣고 정적타입 부여하기
let anotherAdd2: (n1: number, n2: number) => number = function (n1, n2): number {
    return n1 + n2;
}

// 변수에 화살표함수를 넣고 타입부여
const doubleNum = (num: number) => {
    return num * 2
}

const doubleNum2 = (num: number): number => num * 2;

const doubleNum3: (num: number) => number = num => num * 2;