function* generatorFunc() {
  console.log('1');
  yield 1;
  console.log('2');
  yield 2;
  console.log('3');
  yield 3;
  console.log('4');
  return;
}

const generator = generatorFunc();

generator.next(); //1
// {value: 1, done: false}
generator.next(); //2
// {value: 2, done: false}
generator.next(); //3
// {value: 3, done: false}
generator.next(); //4
// {value: undefined, done: true}

// フィボナッチ数列とは以下のように表される数列です。
// ● F0=0
// ● F1=1
// ● Fn+2 =Fn+1 +Fn (n≥0)
// 例として最初の 10 項目を挙げると次のようになります。
// ● 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// このフィボナッチ数列を無限に生成し続けるイテレータをジェネレータ関数を使 用して定義してください。
function* fibonacii() {
  let n0 = -1;
  let n1 = 1;
  while (true) {
    [n0, n1] = [n1, n0 + n1];
    yield n1;
  }
}

let result = [];
let count = 10;
for (let n of fibonacii()) {
  result.push(n);
  if (--count === 0) break;
}
