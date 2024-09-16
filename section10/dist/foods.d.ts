import { Foodsalbe } from "./interfaces";
export declare class Foods implements Foodsalbe {
    private static inctance;
    elements: NodeListOf<HTMLDivElement>;
    private _activeEls;
    private _activeElsScore;
    private constructor();
    get activeElsScore(): number[];
    get activeEls(): HTMLDivElement[];
    static getInstance(): Foods;
}
