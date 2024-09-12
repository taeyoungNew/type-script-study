// readonly in interface
interface Human5 {
    readonly name: string; // 読むだけ、書き込めなし
    age: number;
    greeting(msg: string): void;
}

class Developer5 implements Human5 {
    // interfaceのnameがreadonlyでもDevelop5のnameがpublicで
    // そのDevelop5のインスタンスならHuman5のreadonlyの影響は受けない
     constructor(public name: string, public age: number, public experience: number) {
        
    }

    greeting(msg: string): void {
        console.log(this.name)
    }
}


let user4: Human5= new Developer5("TYTY", 23, 4);

// Cannot assign to 'name' because it is a read-only property.
// user4.name = "書き込め"; 

// しかし代入することで書き込めが可能
const developer6 = {
    name: "tytytytyty",
    age:　12,
    greeting(): void {
        console.log("hihihi")
    }
}

user4 = developer6