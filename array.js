// 分割代入

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const [a, b, c] = month;
console.log([a, b, c]); //[1,2,3]

const [, , , , , ...lastMonth] = month;
console.log(lastMonth); // [6, 7, 8, 9, 10, 11, 12]

//配列の分割代入でも初期値を持たせることができた
const [x = 1, y = 2, z = 3] = [10, null, undefined];
console.log([x, y, z]); //[10,null,3]

// 分割代入で変数の値を入れ替える
let taki = '僕たち',
  mitsuki = '私たち';
[taki, mitsuki] = [mitsuki, taki];
console.log([taki, mitsuki]);
