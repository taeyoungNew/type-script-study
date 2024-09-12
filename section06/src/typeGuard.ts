// type guard + tag union
 
class Dog {
    // tag union
    kind: "dog" = "dog"
    speak() {
        console.log("bow-wow")
    }
}

class Bird {
    kind: "bird" = "bird"
    speak() {
        console.log("tweet-tweet")
    }

    fly() {
        console.log("flutter")
    }
}

type Pet = Dog | Bird;

function havePet(pet: Pet) {
    // タグをつけることによって判別できるようにする
    switch(pet.kind) {
        case "bird": 
            pet.fly()
        case "dog":
            pet.speak()
    }
    pet.speak()
    // is pet instanceof Bird?
    // petはBirdから生成されたインスタンスなのか？
    if(pet instanceof Bird) {
        pet.fly()
    }
}

havePet(new Bird())

function toUpperCase(x: string | number) {
    if(typeof x === "string") {
        return x.toUpperCase()
    }
    return ""
}

interface Engineer2 {
    name: string;
    role: string;
}

interface Blogger2 {
    name: string;
    follower: number;
}
type NomadWorker = Engineer2 | Blogger2;

function describeNomadWorkerProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker)
    // typeofはJSのタイプしか区別できない
    // TSではin演算子を使用して区別する
    if("role" in nomadWorker) {
        console.log(nomadWorker.role)
    }
    if("follwer" in nomadWorker) {
        console.log(nomadWorker.follwer)
    }
}