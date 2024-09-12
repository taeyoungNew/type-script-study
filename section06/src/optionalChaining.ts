// optional chaining
// 使い方 : example.exam?.name
// もしデータがNullだったらundefinedを返す
// もしデータか何かがあればそれを返すと意味
interface DownloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}

const downloadedData: DownloadedData = {
    id: 1
}
// undefinedやNullのものに対してプロパティやメソットにアクセスすると
// JSとはエラーを起こす、そのエラーを防ぐために使う
console.log(downloadedData.user?.name?.first)