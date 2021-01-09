// js/worker2.js
self.addEventListener("message", (event) => {
  const name = event.data;
  if (typeof name !== "string") throw "名前が文字列ではありません";
  self.postMessage(`Hello, ${name}`);
});

worker2 = new Worker("js/worker2.js");
worker2.addEventListener("message", (event) =>
  console.log(`受信「${event.data}」`)
);
worker2.postMessage("World"); // 受信「Hello, World」

// workerで発生した例外を捉えるにはtry catchではなくerrorイベントハンドラを使用する
worker2.addEventListener("error", (event) => {
  console.error(`例外を捕捉: ${event.message}`);
});
