// 콜백함수에 타입지정하기
// 첫 매개변수 number타입, 두번쨰 매개변수 콜백함수
function sayHello(name, callback) {
    var words = "\uD558\uC774 \uB0B4 \uC774\uB984\uC740 ".concat(name);
    callback(words);
}
sayHello("태영", function (greet) {
    // return greet
    console.log(greet);
});
// doubleNum은 첫번째 매개변수에 숫자
// 두번째 매개변수에 숫자타입의 데이터를 매개변수로 받는 콜백함수를 매개변수로 받는다. 
function doubleNum(num1, callback) {
    // 함수가 호출되고 첫번째 매개변수로 받은 숫자데이터를 콜백함수에 넘긴다.
    return callback(num1);
}
// 콜백함수에 넘긴 데이터를 콜백함수는 100을 더해서 리턴한다.
var result = doubleNum(10, function (num) {
    return num + 100;
});
console.log(result);
function doubleAndHandle(num, callback) {
    var doubleNum = callback(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(12, function (pram) {
    return pram;
});
