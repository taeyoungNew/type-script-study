// undefined : 변수를 선언하고 값을 할당하지 않은 상태
// > 원시값으로 선언한 후에 값을 할당하지 않은 변수나 값이
// > 주어지지 않은 변수에 자동으로 할당된다.

// null : 변수를 선언하고 빈 값을 할당한 상태이다. 
// > 원시값중 하나로 어떤 값이 의도적으로 비어있음을 표현한다.
// > 이 경우 해당 변수가 어떤 객체도 가리키고 있지 않다는 것을 의미한다.
// ! null은 typeof null로 출력하면 object로 나옴
// undefined == null => true
// 아래의 변수는 각각  undefined와 null만을 대입할 수 있다.

let tmpUnde: undefined = undefined;
let tmpNull: null = null;