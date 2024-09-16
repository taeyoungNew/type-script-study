import { Scoreable } from "./interfaces";
export declare class Score implements Scoreable {
    private static instance;
    private constructor();
    static getInstance(): Score;
    get totalScore(): number;
    render(): void;
}
