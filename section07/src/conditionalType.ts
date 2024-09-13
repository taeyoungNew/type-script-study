// conditional type
// 型のif文のようなもの
// 下のコードはtomatoがstringに代入できればnumber否かはboolean
type ConditionalTypes = 123 extends string ? number : boolean
let conditionalType: ConditionalTypes = true

// infer : 推測する
type conditionalTypeInfer = { tomato: string } extends { tomato: infer R } ? R : boolean
// DistributiveConditionalTypesのタイプは左側のタイプに右側が代入できるかどうかによって
// numberかbooleanのどれかになる
type DistributiveConditionalTypes <T> = T extends "tomato" ? number : boolean
let tmp4: DistributiveConditionalTypes< "tomato">
let tmp5: NonNullable<string | null>
tmp4 = 123