function add(num1, num2) {
  return this + num1 + num2;
}

// apply()は引数を配列の形でまとめて受け取る
add.apply(1, [16, 25]); // 42 (1がthisで取れる)

// call()は引数を個別の引数として受け取る
add.call(1, 16, 25); // 42 (同上)

// bind()は関数のthisや引数の値を固定した関数を新しく生成します。
add2 = add.bind(1);
// ƒ add(num1, num2) {
//   return this + num1 + num2;
// }
add2(16, 25); // 42
add2.call(999, 16, 25); // 42
add3 = add.bind(1, 16);
add3(25); // 42
add3.call(999, 25); // 42

// call()メソッドを使用して呼び出さない場合はthisの値が第１引数としてコールされる？
add3(999, 25, 25); // 1016
