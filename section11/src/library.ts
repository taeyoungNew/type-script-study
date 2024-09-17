import axios  from "axios";
declare module "axios" {
    export const apple: "apple"
}



// axios.get("http")

 // 타입스크립트 형정의 파일이 없어서 그냥은 못씀
import _ from "lodash"

// 아래의 코드는 상황에 따라서 2가지의 의미를 가진다.
// 환경모듈선언(스크립환경) or 모듈확장(모듈환경)
// declare module "lodash" {
//     export function shuffle<T>(array: T[]): T[]
//     // export const hello: "hello"
// }



console.log(_.shuffle([1, 2, 3, 4, 5]));
