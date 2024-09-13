// func intersection
// 関数のintersection型
interface FuncA7 {
    (a: number, b: string): number;
    (a: string, b: number): number;
}

interface FuncB7 {
    (a: string): number;
}

// 型がA関数かつB関数
// なんの型なのか？
let intersectionFunc: FuncA7 & FuncB7;
// 結論からいうとFuncA7とFuncB7をオーバーロードした型になる
// interface FuncA7 {
//     (a: number, b: string): number;
//     (a: string, b: number): number;
//     (a: string): number;
// }]
// 位置が変わると優先順位が変わる

intersectionFunc　 = function(a: number | string, b?: number | string | undefined) {
    return 0
}

let interfaceFunc2: FuncB7 & FuncA7;
interfaceFunc2 = function(a: string | number, b?: undefined | number | string) {
    return 0
}