import { Foods } from "./foods.js";
export class Score {
    constructor() {
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
    get totalScore() {
        const foods = Foods.getInstance();
        console.log(foods);
        return foods.activeElsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector(".score__number").textContent = String(this.totalScore);
    }
}
