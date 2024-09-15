import { Foodsalbe } from "./interfaces"; // esmodule
import { Food } from "./food";

export class Foods implements Foodsalbe {

    private static inctance: Foods;
    // <HTMLDivElement>
    elements = document.querySelectorAll<HTMLDivElement>(".food")
    
    // active요소가 있는 el들을 배열로 만들자
    private _activeEls: HTMLDivElement[] = [];
    // 클릭한 요소들의 점수를 넣을 배열
    private _activeElsScore: number[] = []
    
    
    private constructor() {
        console.log("Foods");
        
        this.elements.forEach(el => {
            // Food클래스의 생성자에 el을 보내준다.
            new Food(el)
        })
    }

    // 클릭한 요소들의 점수를 합치는 함수
    get activeElsScore() {
        this._activeElsScore = []
        this.activeEls.forEach(el => {
            const foodScore = el.querySelector<HTMLDivElement>('.food__score')
            if (foodScore) {
                this._activeElsScore.push(Number(foodScore.textContent))
            }
        })
        return this._activeElsScore
    }

    // 클릭한 요소들을 배열에 저장하는 함수
    get activeEls() {
        console.log("get activeEls");
        
        this._activeEls = [];
        this.elements.forEach(el => {
            if(el.classList.contains('food--active')) {
                this._activeEls.push(el)
            }
        })
        console.log(this._activeEls)
        return this._activeEls;
    }


    static getInstance() {
        if(!Foods.inctance) {
            Foods.inctance = new Foods()
        }

        return Foods.inctance
    }
}
