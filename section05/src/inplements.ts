// ほぼジャバと一緒だな
interface Human2 {
    name: string;
    age: number;
    greeting(msg: string): void;
    // static address: string;
}

interface Human3 {
    name: string;
}

// interfaceは複数implemantsできる
class Developer implements Human2, Human3 {
    static id: number = 0; // interfaceはstaticメソットやフィールドには一切影響を与えることはできない
    constructor(public name: string, public age: number, public experience: string) {
        
    }

    greeting(msg: string): void {
        console.log(this.name)
    }
}