export interface Scoreable {
    readonly totalScore: number;
    render(): void
}

export interface Foodalbe {
    element: HTMLDivElement;
    clickEventHandler(): void
    
}

export interface Foodsalbe {
    elements: NodeListOf<HTMLDivElement>
    readonly activeEls: HTMLDivElement[]
    readonly activeElsScore: number[]
}