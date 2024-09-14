// import나 export가 없으면 자바스크립트에서는 
// 해당 파일을 script로 취급한다. 
// script파일의 경우 import를 하지않아도 
// 다른 JS파일에서 그냥 접급이 가능하다.
// 반대로 module파일에서 정의된 변수나 함수등은 
// 다른 JS파일에서 import를 하지 않는 이상 참조가 되지 않는다.
const hello = "module"