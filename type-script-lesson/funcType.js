// 함수에 타입을 붙이기
// 리턴값과 매개변수에 타입을 붙인다
// 매개변수에 타입을 붙이지 않으면 any타입이 된다.
// 그러므로 타입을 붙이는게 좋다.
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
// void
// function sayHello(): void
function sayHello(){
    console.log("hello");
}
sayHello();
