// console.log(__dirname);
// nodeJS에 내장되어있는 path
const path = require("path") // commonJS형식

// nodeJS
module.exports = {
    mode: "development",
    entry: "./src/main.ts", // 처음 실행되는 파일명
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"), // bundle된 파일들을 저장하는 경로 절대경로ㅊㅇ .
        publicPath: "/dist/"
    },
    devtool: "inline-source-map", // webpack에 source map 만들기
    module: {   // webpack에서 
        rules: [{
            test: /\.ts$/, // \으로  .이스케이프와 &를 해주므로써 확장자가 ts로 되어있는 파일을 뜻함
            use: "ts-loader",
            exclude: /node_modules/ // node_modules에 있는 ts파일은 취급안함
        }]
    },
    resolve: { // 확장자가 안붙어있으면 자동으로 붙여주는 옵션
        extensions: [  // 그 해당의 이름의 ts파일이 있는가 아니면 js파일이 있는가 확인하고 있으면 확장자를 붙여줌
            ".ts",
            ".js"
        ]
    }
} 