const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { publicDecrypt } = require("crypto")
module.exports = {
    mode: "development", // 개발용 모드 bunle.js의 내용이 다르게 보인다
    entry: "./src/libray.ts", // 제일먼저 시작하는 파일 
    output: {
        filename: "bundle.js", // 컴파일될때 압축된 JS코드를 넣는 파일을 설정
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"
    },
    devtool: "inline-source-map", //
    module: {
        rules: [{
            // ts-loader
            test: /\.ts$/, // TS파일의 대상으로라는 뜻
            use: "ts-loader",
            // 가령 import한 TS파일이 node_modules폴더안에서 가져온거라면 
            // ts-loader가 취급을 안한다는 설정이다
            exclude: /node_modules/ 
        }]
    },
    // 확장자가 없으면 자동으로 추가해주는 옵션
    resolve: {
        extensions: [".ts", ".js"]
    },
    // 플러그인 사용방법
    plugins: [
        new CleanWebpackPlugin()
    ]
}