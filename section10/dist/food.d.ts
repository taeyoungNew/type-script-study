import * as Interfaces from "./interfaces";
import { Foods } from "./foods";
export declare class Food implements Interfaces.Foodalbe {
    element: HTMLDivElement;
    foods: typeof Foods.getInstance;
    constructor(element: HTMLDivElement);
    clickEventHandler(): void;
}
