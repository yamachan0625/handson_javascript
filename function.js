function getPrimes(max) {
  let primes = '';
  outer: for (let i = 1; i < max; i++) {
    for (let divisor = i - 1; 1 < divisor; divisor--) {
      if (i % divisor === 0) {
        console.log(i);
        continue outer; // 現在のループまたはラベル付きループの現在反復中の処理の実行を終了し、次の反復処理でのループを実行する。
      }
    }
    primes += i + ' ';
  }
  return primes;
}
console.log(getPrimes(10));

// 再帰関数を関数式で定義する
let fact = function (num) {
  return num === 1 ? 1 : num * fact(num - 1); // return 3 * fact(2) return 3 * fact(1)
};
fact(3); // 6

// タグ関数を使用してテンプレート文字列を処理する
let bold = (strs, ...targets) => {
  console.log({ strs });
  console.log(...targets);
  let ret = strs[0];
  for (i = 1; i < 3; i++) {
    ret += `<b>${targets[i - 1]}</b>${strs[i]}`;
  }
  return ret;
};

console.log(bold`The ${'world'} is ${'mine'}`); // "The <b>world</b> is <b>mine</b>"
