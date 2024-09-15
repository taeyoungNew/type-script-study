// console.log(__dirname);
// nodeJS에 내장되어있는 path
const path = require("path") // commonJS형식

// nodeJS
module.exports = {
    entry: "./dist/main.js", // 처음 실행되는 파일명
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist") // bundle된 파일들을 저장하는 경로 절대경로ㅊㅇ .
    }
} 