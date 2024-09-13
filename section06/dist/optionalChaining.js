"use strict";
var _a, _b;
const downloadedData = {
    id: 1
};
// undefinedやNullのものに対してプロパティやメソットにアクセスすると
// JSとはエラーを起こす、そのエラーを防ぐために使う
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
