// ENUM
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee: {
    hot: boolean,
    size: CoffeeSize
} = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.VENTI

console.log(coffee)

// enumに関してはすべて大文字をで書こう
enum NoTypeEnum {
    ONE,    // 0 
    TWO,    // 0
    THREE   // 0
}
const val = NoTypeEnum.ONE
console.log(val)
