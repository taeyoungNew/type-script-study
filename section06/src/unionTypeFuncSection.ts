// unionTypeFunc
// 関数のintersection型
interface FuncA8 {
    (a: number): number | string;
    // (a: string, b: number): number;
}

interface FuncB8 {
    (a: string): string;
}

// 下のように異なるfunをunion型として受けた場合は
// パラメータはintersection戻り値はunion型となる
let unionFunc8: FuncA8 | FuncB8;
// パラメータがnever型となっている
unionFunc8 = function(a: number | string) {
    return 0
}

unionFunc8 = (b: number) => "adwadasd"