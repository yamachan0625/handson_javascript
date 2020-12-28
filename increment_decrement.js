// インクリメント、デクリメント演算子の挙動の違い

// NOTE: インクリメント演算子は前置するとインクリメント後の整数値が返り、
//       後置するとインクリメント前の辺数値が帰る

let count = 0;
// undefined
count++;
// 0
count++;
// 1

let count2 = 0;
// undefined

++count2;
// 1
++count2;
// 2
