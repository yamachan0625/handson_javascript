// for文にラベルの付与
//ラベルのない break 文は一番近くの繰り返しブロックから抜け出しますが、
// ラベルを 指定するとそのラベルが付与されている処理から抜けることができます。
// 入れ子になっ た繰り返し文から一気に抜け出すにはラベル付きの break 文を使用してください。
outer: for (let i = 0; i < 3; i++) {
  inner: for (let j = 0; j < 3; j++) {
    console.log(i, j);
    if (i * j === 2) break; // 一番近くの繰り返しブロック(inner)
  }
}

outer: for (let i = 0; i < 3; i++) {
  inner: for (let j = 0; j < 3; j++) {
    console.log(i, j);
    if (i * j === 2) break outer; // outerから抜け出す(ここで終了)
  }
}

// for of forEachと同じ？ forEachよりも優れている。
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (const day of days) {
  console.log(day); // for文のようにindexアクセスなしで取り出せる
}

// for-of文でindexを使用する場合
for (const [i, day] of days.entries()) {
  console.log(`index:${i},day:${day}`); 

// indexのみ取り出すこともできるが、その場合はfor-inを使用した方が良い
for (const i of days.keys()) {
  console.log(i); // for文のようにindexアクセスなしで取り出せる
}

const parameters = [
  { power: 'E', speed: 'E', range: 'B' },
  { power: 'C', speed: 'D', range: 'B' },
  { power: 'B', speed: 'B', range: 'C' },
];
// スプレッド構文で必要なパラメータのみ抽出できる
// NOTE: {key:string}[]型で使えそうだが、forEachの方が万能か
for (const { speed } of parameters) {
  console.log(speed);
}

//fpr in
const parameters2 = {
  power: 'B',
  speed: 'C',
  range: 'D',
  durability: 'C',
  precision: 'D',
  development: 'C',
};

// オブジェクトを回せる
for (const name in parameters2) {
  console.log(`${name}:${parameters2[name]}`);
}
//NOTE: 配列をfor inで回す場合はindexが取れる
//      なお、for-in 文は実際は対象となるオブジェクトのすべてのプロパティに対して処 理を実行するのではなく、「列挙可能なプロパティ」に対してだけ処理を実行します。
