// get()
//     プロパティの値の取得に割り込む
// set()
//     プロパティの値の設定に割り込む
// has()
//     in 演算子を使用したプロパティの存在確認に割り込む
// ownKeys()
//     Object.getOwnPropertyNames() などのプロパティ一覧の取得に割り込む
// apply()
//     関数やメソッドの呼び出しに割り込む
// construct()
//     コンストラクタに割り込む
// isExtensible()
//     Object.isExtensible() メソッドに割り込む
// preventExtensions()
//     Object.preventExtensions() メソッドに割り込む
// defineProperty()
//     Object.defineProperty() と Object.defineProperties() メソッドに割り 込む
// getOwnPropertyDescriptor()
//     Object.getOwnPropertyDescriptor() メソッドに割り込む
// deleteProperty()
//     プロパティの削除に割り込む

let array = [3.14, 9.8, 2.718];
let arrayProxy = new Proxy(array, {
  get(target, prop) {
    return Math.round(target[prop]);
  },
  set(target, prop, value) {
    if (!Number.isInteger(value)) {
      throw new Error("not integer");
    }
    target[prop] = value;
  },
  has(target, prop) {
    return prop < 2;
  },
  ownKeys(target) {
    return ["0", "1", "length"];
  },
});
// Proxy {0: 3.14, 1: 9.8, 2: 2.718}
arrayProxy[0]; // 3 proxyでアクセスすると整数で返ってくる
arrayProxy[1]; // 10
arrayProxy[3] = 8.31; // 少数を代入しようとするとエラーになる
//  Uncaught Error: not integer
//  at Object.set (<anonymous>:7:15)
//  at <anonymous>:1:15
arrayProxy[3] = 365;
array; // array(4)[(3.14, 9.8, 2.718, 365)];

// インデックスが 2 以上の要素は存在しないように見える。
// これは見せかけで実際に 2 以上のインデックスを指定して配列要素にアクセスする と値を取得できます。
0 in arrayProxy; // true
1 in arrayProxy; // true
2 in arrayProxy; // false
Object.getOwnPropertyNames(arrayProxy);
// (3) ["0", "1", "length"]

function add(a, b, c) {
  return a + b + c;
}
addProxy = new Proxy(add, {
  apply(target, thisArg, args) {
    console.log("aaa", target, thisArg, args);
    return target.apply(
      thisArg,
      args.map((n) => n * n)
    );
  },
});
addProxy(1, 4, 5); //42

array = [..."WRYYYY"];
array.join = new Proxy(Array.prototype.join, {
  apply(target, thisArg, args) {
    return target.apply(thisArg, ["!"]);
  },
});
array.join(); // "W!R!Y!Y!Y!Y"
