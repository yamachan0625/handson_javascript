iter = ['a', 'b', 'c'].values(); //Array Iterator {}
iter.next(); // {value: "a", done: false}
iter.next(); // {value: "b", done: false}
iter.next(); // {value: "c", done: false}
iter.next(); // {value: undefined, done: true}

// イテラブル：反復可能
// オブジェクトが反復可能がどうかは、そのオブジェクトがSymbol.iteratorをキーとするプロパティを持っているかどうかで決まる
const obj = [...'abc'];
// for-ofでかく場合
for (const item of obj) {
  console.log(item);
}
// for-ofのなかで行なっていること
// つまり、for-of文は与えられたオブジェクトの[Symbol.iterator]メソッドを呼び出していイテレータを取得し、
// そのイテレータのんぽnext()メソッドの呼び出し結果のオブジェクトのdoneプロパティが、trueになるまで、
// イテレータのnext()メソッド呼び出し結果オブジェクトのvalueプロパティの値を変数に代入し、
// その変数を使用して与えられた処理を繰り返し実行している
for (
  let iter = obj[Symbol.iterator](), rslt = iter.next(), item = rslt.value; // 初期値
  !rslt.done; // doneプロパティがtrueになるまで回す
  rslt = iter.next(), item = rslt.value
) {
  console.log(item);
}
