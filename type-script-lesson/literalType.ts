// literal type : 特定の決まった値のみを扱う型
let apple : 'apple' = 'apple';
// apple = 'banana';　＝ エラー
// appleというリテラル型しか扱わない。

///////////////////////////////
// zero = 2; 0というリテラル型のデータしか代入できない
let zero: 0 = 0;

enum ClothSize {
    small = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

let clothSize : ClothSize = ClothSize.small;
let clothSize2 : ClothSize = ClothSize.GRANDE;

let clothSize3: 'small' | 'medium' | 'large' = "small";


let cloths: {
    color: string
    size: ClothSize
} = {
    color:　'red',
    size: ClothSize.GRANDE
};

cloths.color = 'red';
