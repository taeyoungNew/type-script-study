// funcOverload 関数宣言のみ使える
// 関数の戻り値をTSにちゃんと伝えること
// 上にoverloadさせることによってfunction toUpperCase2(x: string | number)は無視される
// function toUpperCase2(x: boolean): boolean// しかし元の関数が必ず取り得るものではないとため
function toUpperCase2(x: string): number
function toUpperCase2(x: string): string; // 引数がstringタイプだった場合戻り値はstringと定義する
function toUpperCase2(x: number): number; // 複数overloadすることができる
function toUpperCase2(x: string | number): string | number {
    if(typeof x === "string") {
        return x.toUpperCase()
    }
    return x
}
const upperHello2 = toUpperCase2("dads");
// const upperHello: string | numberとunion型を型推論してしまう
// const upperHello = toUpperCase2("hello") as string;
upperHello2.toString
//　明らかに文字なのにnumberタイプのデータが持つメソットを呼び出すことがができる
upperHello2.valueOf
