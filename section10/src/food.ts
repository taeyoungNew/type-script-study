// import { Foodalbe } from "./interfaces.js";
// import { Foods as FoodList } from "./foods.js"; // 별칭붙이기
import * as Interfaces from "./interfaces.js" // * 전부가져오기
import { Foods } from "./foods.js";
import { Score } from "./score.js";
// Type-Only imports // 타입으로만 가져온다는 뜻 

// export default로 export하면 다른 파일에서 불러올때 {}를 쓰지않고
// 이름을 임의로 해도된다.
export class Food implements Interfaces.Foodalbe {
    
    foods = Foods.getInstance
    constructor(public element: HTMLDivElement) {
        console.log("Food")
        
        // Foods클래스에서 넘어온 모든 요소들에게 click이벤트를 추가해준다.
        // eventListener에서 사용된 this는 그 eventListener가 붙어있는 
        // 요소를 가르키게된다.
        // 따라서 Food클래스가 아닌 element를 가리킴
        // bind(this)를 쓰으로써 이 함수에서 쓰이는 this는 bind의 매개변수의 this라고 정의한다.
        // bind()안의 this는 Food클래스를 가리킨다.
        element.addEventListener("click", this.clickEventHandler.bind(this))

    } 
    clickEventHandler() {
        console.log("clickEventHandler");
        
        this.element.classList.toggle("food--active")
        const score = Score.getInstance()
        score.render()
    }

}