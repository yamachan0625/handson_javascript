// undefined は存在しない。有効な値は true、false、null、数値、文字列、配列、 オブジェクトのみ
// ● 数値の整数部は省略できない。「.5」などの表記は不可。「0.5」と表記する
// ● 文字列の開始と終了に使用できるのは「"」のみ。「'」や「`」は使用できない
// ● オブジェクトが保持できるのはキーと値のみ。メソッドは存在しない
// ● オブジェクトのキーは文字列。つまりキーの開始と終了に「"」が必要
// ● 配列やオブジェクトの末尾の要素の後ろに「,」を置いてはいけない

// JSON文字列からオブジェクトを作成するにはJSON.parseを使用する;
JSON.parse("true"); // true

// JSON.parse('{"k":'V'}') JSON文字列以外を渡すとエラーになる

// JSON.parse() には第二引数として reviver 関数と呼ばれる関数を渡すことができます。

const reviver = (k, v) => {
  console.log(`キー： ${k} バリュ:${v}`);
  //   *変換が不要な場合は元の値をretuenする
  return v instanceof Object ? v : `updated:${v}`;
};
JSON.parse('{"id":1, "name":"Echoes", "power":["E", "C", "B"]}', reviver);
// {id: "updated:1", name: "updated:Echoes", power: Array(3)}
// id: "updated:1"
// name: "updated:Echoes"
// power: Array(3)
// 0: "updated:E"
// 1: "updated:C"
// 2: "updated:B"
// lastIndex: (...)
// lastItem: (...)
// length: 3
// __proto__: Array(0)
// __proto__: Object

// オブジェクトを JSON 形式の文字列に変換するには JSON.stringify() 関数を使用し ます。
obj = { id: 1, name: "Echoes", power: ["E", "C", "B"] };
JSON.stringify(obj);
// "{"id":1,"name":"Echoes","power":["E","C","B"]}"

let replacer = (k, v) => (Array.isArray(v) ? v[0] : v);
JSON.stringify({ id: 1, name: "Echoes", power: ["E", "C", "B"] }, replacer);
// "{"id":1,"name":"Echoes","power":"E"}"

// 第３引数は出力さレルJSON文字列のインデントをしているすルために使用される
// 数値の場合はインデントに使用する空白文字の数
// 文字列の場合はその文字列がインデントに使用される
JSON.stringify({ id: 1, name: "Echoes", power: ["E", "C", "B"] }, undefined, 3);
// "{
//     "id": 1,
//     "name": "Echoes", "power": [
//     "E", "C", "B"
//     ]
// }"

// ディープコピー: コピー先とコピー元でオブジェクトが一切共有されない
// JSONオブジェクトを使用したシリアライズとでシリアライズを利用する
let ko1 = {
  id: 1,
  name: "Echoes",
  parameters: [
    { power: "E", speed: "E", range: "B" },
    { power: "C", speed: "D", range: "B" },
    { power: "B", speed: "B", range: "C" },
  ],
};

let ko2 = JSON.parse(JSON.stringify(ko1));
ko2;
// {id: 1, name: "Echoes", parameters: Array(3)}
ko2.parameters[0].power = "A";
// "A"
