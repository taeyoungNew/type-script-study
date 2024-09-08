// 定められた型しか代入できない
// 
let unionType: number | string;
unionType = 1;
unionType = 'dwada'
unionType.toLowerCase()
// unionType = true //　タイプエラー

// 配列でユニオンタイプを使うとき
// 配列では複数のタイプを指定することができる。
// 下記のコードはナンバー文字ブーリアンタイプのデータを
// 保存することができる
let unionTypes: (number | string | boolean)[] = [];

unionTypes.push(1)
unionTypes.push('fawdas')

