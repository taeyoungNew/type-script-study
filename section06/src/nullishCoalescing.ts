// nullsh coalescing
// もし値がundefinedだったらほかの値を入れる
interface DownloadedData2 {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}

const downloadedData2: DownloadedData2 = {
    id: 1
}
// ||と差は
// ??はは空文字や０でもuserData2に代入する
const userData2 = downloadedData2.user?.name ?? "no-user"