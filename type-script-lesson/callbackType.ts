// 콜백함수에 타입지정하기
// 첫 매개변수 number타입, 두번쨰 매개변수 콜백함수
function sayHello(name: string, callback: (param: string) => void) {
    const words = `하이 내 이름은 ${name}`;
    
    callback(words)
}

sayHello("태영",  (greet) => {
    // return greet
    console.log(greet)
})

// doubleNum은 첫번째 매개변수에 숫자
// 두번째 매개변수에 숫자타입의 데이터를 매개변수로 받는 콜백함수를 매개변수로 받는다. 
function doubleNum(num1: number, callback: (param: number) => number) {
    // 함수가 호출되고 첫번째 매개변수로 받은 숫자데이터를 콜백함수에 넘긴다.
    return callback(num1)
}

// 콜백함수에 넘긴 데이터를 콜백함수는 100을 더해서 리턴한다.
const result = doubleNum(10, (num) => {
    return num + 100
})

console.log(result)

// 아래의 callback 파라미터를 숫자타입으로 받고 리턴값도 숫자타입으로 반환한다.
// 참거짓 =　真偽(しんぎ)
function doubleAndHandle(num: number, callback: (num: number) => void): void {
    const doubleNum = callback(num * 2)
    console.log(doubleNum)
}


doubleAndHandle(12, (pram: number) => {
    return pram;
});
