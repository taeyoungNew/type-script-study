// class generics
class LightDatabase<T extends string | number | boolean> {
    private data: T[] = []
    add(item: T) {
        this.data.push(item)
    }

    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    get() {
        return this. data
    }
}

// interface
interface TmpDatabase<T> {
    id: number;
    data: T[]
}

const tempDatabase: TmpDatabase<number> = {
    id: 3,
    data: [32]
}

const strLightDatabase = new LightDatabase<string>()
strLightDatabase.add("apple")
strLightDatabase.add("banana")
strLightDatabase.add("superman")
strLightDatabase.remove("apple")

strLightDatabase.get()

console.log(strLightDatabase.get()
)