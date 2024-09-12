// lookup type or index access type
// タイプのプロパティの型を取得する方法
interface DownloadedData3 {
    id: number,
    user?: {
        name?: {
            first: string;
            last: string;
        }
    },
    0: number
}

const downloadedData3: DownloadedData3 = {
    id: 1,
    0: 12
}

type id3 = DownloadedData3["user"]
type StringArr = string[] // string[]
type str = StringArr[7] // string
type TupleType = [string, number, boolean]
type TypleVal = TupleType[number] // string | number | boolean