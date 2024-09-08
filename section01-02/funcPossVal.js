// 함수를 보유하는 변수에 타입을 지정하는 방법
function add(num1, num2) {
    return num1 + num2;
}
// const anotherAdd = add;
// 型注釈は矢印, 関数宣言はコロン
var anotherAdd = add;
console.log(anotherAdd(12, 32));
