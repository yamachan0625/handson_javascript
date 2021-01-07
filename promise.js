// Promiseオブジェクト が取りうる状態は対応する非同期処理の実行状況に応じた以下の 3 つです。
// 保留中(pending);
//    処理が成功も失敗もしていない状態;
// 履行済み(fullfilled);
//    処理が成功した状態;
// 棄却済み(rejected);
//    処理が失敗した状態;

function waitFor(msec) {
  return new Promise((resolve) => {
    setTimeout(resolve, msec);
  });
}

waitFor(Math.random() * 5000)
  .then(() => {
    console.log("処理A");
    return waitFor(Math.random() * 5000);
  })
  .then(() => {
    console.log("処理B");
    return waitFor(Math.random() * 5000);
  })
  .then(() => {
    console.log("処理C");
  });

new Promise((resolve, reject) => {
  // 非同期処理を行い、成功時にはresolve()を、失敗時にはreject()を呼び出す。
});

// 引数に2000ms以上を渡すと2秒後にエラーがスルーされる
function waitForAMoment(msec) {
  return new Promise((resolve, reject) => {
    if (msec < 2000) {
      setTimeout(() => resolve(msec), msec);
    } else {
      setTimeout(() => reject(new Error("timeout")), 2000);
    }
  });
}

waitForAMoment(1000)
  .then((value) => console.log(`成功: ${value}`)) // 成功: 1000
  .catch((error) => console.log(`失敗: ${error}`));

//   実際には 2 つのコールバック関数を渡すことができます。ひと つ目は Promise の処理が成功した際に実行される関数です。
//   引数として Promise が解 決された値を受け取ります。2 つ目は処理が失敗したときに実行される処理で、引数と してエラーの内容を受け取ります。
//   いずれのコールバック関数からも return 式で値を 返すことができ、その値が Promise に変換されて then() メソッド自体の戻り値になり ます。
Promise.reject()
  .then(
    () => console.log("成功1"),
    () => console.log("エラー1")
  )
  .then(
    () => console.log("成功2"),
    () => console.log("エラー2")
  );
//   エラー1
//   成功2
//   Promise {<fulfilled>: undefined}

Promise.resolve(42)
  .then(() => console.log("一番目の処理"))
  .then(() => {
    console.log("二番目の処理(失敗)");
    return Promise.reject();
  })
  // 棄却された Promise に対して 2 番目の引数が省略された then() メソッドを呼び出す と同じ内容で棄却された Promise を返すため、
  // Promise をチェーンすると 1 番目から 3 番目までどの then() メソッドにコールバック関数が失敗しても、cathc() メソッドのコールバック関数で捕捉できます。
  .then(() => console.log("三番目の処理"))
  .catch(() => console.log("エラー処理"))
  .finally(() => console.log("終了処理"));
//   一番目の処理
//   二番目の処理(失敗)
//   エラー処理
//   終了処理
//   Promise {<fulfilled>: undefined}

// １秒間処理をまつ
new Promise((resolve) => setTimeout(resolve, 1000));

// Promise.All
// 約5秒後にコンソールに「["成功:1000", "成 功:5000", "成功:4000"]」と表示されます
Promise.all([
  lagReject(1000),
  lagResolve(5000),
  lagResolve(4000),
]).catch((result) => console.log(result));
// Promise {<pending>}
// (3) ["成功:1000", "成功:5000", "成功:4000"]

// Promise.allSettled;
// １秒後に失敗しているにも関わらず、4秒後,5秒後の処理も実行され全ての結果をまとめて得られる
Promise.allSettled([
  lagReject(1000),
  lagResolve(5000),
  lagResolve(4000),
]).then((result) => console.log(result));
// Promise {<pending>} (3) [{...}, {...}, {...}]
// 0: {status: "rejected", reason: Error: 失敗:1000 at <anonymous>:3:29} 1: {status: "fulfilled", value: "成功:5000"}
// 2: {status: "fulfilled", value: "成功:4000"}
// length: 3
// __proto__: Array(0)

// Promise.race;
// 最初に完了するPromiseだけが最終結果に影響を与える。
Promise.race([
  lagReject(1000),
  lagResolve(5000),
  lagResolve(4000),
]).catch((result) => console.log(result));
// Promise {<pending>} Error: 失敗:1000
// at <anonymous>:3:29

// 組み合わせる
// ひとつ目の all() 呼び出しは引数の中の最も時間がかかる Promise の完了を待って 約5秒後に、2つ目のall()呼び出しは同様に約6秒後に終わるはずですが、
// 全体が race() の引数になっているため、より短い時間で終わる前者の結果だけが得られ、約 5秒後に「["成功:1000", "成功:5000", "成功:4000"]」と表示されます。
Promise.race([
  Promise.all([lagResolve(1000), lagResolve(5000), lagResolve(4000)]),
  Promise.all([lagResolve(6000), lagResolve(500), lagResolve(100)]),
]).then((result) => console.log(result));
// Promise {<pending>}
// (3) ["成功:1000", "成功:5000", "成功:4000"]
