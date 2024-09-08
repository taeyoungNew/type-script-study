// watchmode란 
// ts파일을 저장했을 때 자동적으로
// JS파일로 컴파일하는 모드이다.
// 예) tsc index.ts --watch
// 주의점) 타입에러 등이 발생을 해도 JS파일에 자동 컴파일이 된다.
let ex = 12312422;
function consoleLog(ex: number): void {
    console.log(ex)
}