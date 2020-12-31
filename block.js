// ブロック文
{
  const pi = 3.14;
  console.log(pi); //3.14
}
console.log(pi); // エラー発生

// ブロックで記述するとスコープを気にしなくてよくなる
const pi2 = 3.14;
{
  pi2 = 3.14;
}

if (false) {
  // これがブロックの正体
}
