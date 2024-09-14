interface Scoreable {
    readonly totalScore: number;
    render(): void
}

interface Foodalbe {
    element: HTMLDivElement;
    clickEventHandler(): void
    
}

interface Foodsalbe {
    elements: NodeListOf<HTMLDivElement>
    readonly activeEls: HTMLDivElement[]
    readonly activeElsScore: number[]
}

class Score implements Scoreable {

    private static instance: Score;
    private constructor() {
    }
    static getInstance() {
        if(!Score.instance) {
            Score.instance = new Score()
        }

        return Score.instance
    }
    get totalScore() {
        const foods = Foods.getInstance()
        console.log(foods)
        return foods.activeElsScore.reduce((total, score) => total + score, 0)
    }

    render() {
        document.querySelector(".score__number")!.textContent = String(this.totalScore)
    }

}


class Food implements Foodalbe {
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


class Foods implements Foodsalbe {

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
            const foodScore = el.querySelector('.food__score')
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


// 인스턴스를 만들고 foodApp이 호출되면 foods가 실행
const foods = Foods.getInstance()