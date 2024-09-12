// index signature
// 基本的には使わない　使うときは注意すること
interface Designer {
    // index signatureを使う場合は
    // interface内のプロパティの型までindex signatureの型に合わせる必要がある
    // age: number; // エラー
    name: string;

    // 括弧の中の型の場合keyの型であって
    // stringの場合は数字が来てもオッケー
    // しかしnumberの場合は文字がエラー
    [index: string]: string
}

// interfaceに定められているプロパティ以外は付け加えられない
const designer: Designer = {
    name: "Quill",
    role: "dasdawd",
    job: "musicion"
}

// index signatureを使った場合下のようにinterfaceに定義されていない
// プロパティにもアクセスできる
designer.value