// タイプエイリアス：型を変数のように使う
// エイリアス　＝　別名
// small medium largeという型をClothSizeという変数として扱う
type ClothSizeEnum = 'small' | 'medium' | 'large';

let　size: ClothSizeEnum;

size = 'medium'

const cloth: {
    color: string;
    size: ClothSizeEnum
} = {
    color : 'red',
    size : 'medium'
}