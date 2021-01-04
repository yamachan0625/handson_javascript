// オブジェクトのプロパティ名は[]で囲むことで、動的に生成できる
// これを計算によるプロパティ名と呼ぶ
const katou = { ['加藤' + 123]: '９段' };
console.log(katou); // {加藤123: "９段"}

// 配列内のオブジェクトの分割代入
const param = {
  id: 2,
  name: 'obj',
  arr: [
    { power: 'A', speed: 'A', range: 'A' },
    { power: 'B', speed: 'B', range: 'B' },
    { power: 'C', speed: 'C', range: 'C' },
  ],
};
// ()で囲む必要あり constやletを使用し初期化子として使用する場合は必要ない
({
  name,
  arr: [{ power }, { speed }, { range }],
} = param);
console.log(name, power, speed, range);
// obj, "A", "B", "C"

// オブジェクトリテラルの扱い
let task = {
  cry: 'cry',
  ask() {
    console.log(
      'オブジェクトリテラルでプロパティの値に関数を設定する場合省略できる'
    );
  },
  act() {
    console.log('this.cryでアクセスできる', this.cry);
  },
};

// オブジェクトリテラルで継承
// __proto__でオブジェクトの継承ができる
let tusk = {
  cry: 'Chumimin',
  act() {
    console.log(this.cry);
  },
};

let tusk2 = {
  __proto__: tusk,
  act2() {
    super.act();
    console.log('tail');
  },
};
tusk2.act2(); // Chumimin tail
