// intersection type 
// AかつB
// type Engineer = {
//     name: string;
//     role: string;
// }

// type Blogger = {
//     name: string;
//     follower: number;
// }

// interfaceでもオッケー
interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

// &を使ってEngineerかつBloggerという型を作ることができる
// type EngineerBlogger = Engineer & Blogger;

interface EngineerBlogger extends Engineer, Blogger {}
// 上の各二つのtypeに定義されているプロパティをすべて持たないとダメ
const taeyeon: EngineerBlogger = {
    name: "TY",
    role: "front-end",
    follower: 123
}

// 二つのユニオン型をインターセクションしたら？
type NumBool = number | boolean;
type stringNum = number | string;
// 両方重なっている部分の型になる
type Mix = NumBool & stringNum;


// neverになる
type tmp = string & number;
let stringNum: tmp = 1 as never;