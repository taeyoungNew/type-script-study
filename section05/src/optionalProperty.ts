// optional property
// 変数や関数名の直後に"?"をつけることで、
// あってもなくても良いOptionalプロパティになる
// 値が代入してない場合undefinedになる
interface OptionalInter8 {
    nickName?: string;
    testFunc?(param: string): string;
}

type Nameble = {
    name: string;
    nickName?: string; // optional設定
}
// typeもinterfaceも全部複数に継承できる
class Developer8 implements OptionalInter8 {
    // Optionalは初期化しなくても良い
    name?: string
    constructor(public _name?: string) {
        if(_name) {
           this.name = _name; 
        }
    }

    // パラメータにもOptionalにできるけど
    // そのOptionalをそのまま戻り値には使えない
    testFunc(param?: string): string {
        if(!param) {
            return "何も持っていない"
        }
        return param　// エラー
    }
}


// nickNameがなくてもエラーが起きない
// const nameble: Nameble = {
//     name: "TYTy"
// }