// mapped type 後でもう一度復習しよう
// 型の構文
type MappedTypes = {
    [P in 32 | "pumpkin"]: string
}

let mapped: MappedTypes;

interface Vegetables {
    tomato:　string;
    pumpkin: string
}