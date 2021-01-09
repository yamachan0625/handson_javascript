// shift キーを押しながらマ ウスドラッグするとその位置に縦横5pxの<div class="dot">要素を追加する
// イベントハンドラを定義してください。なお、事前に次のコードで CSS を登録して おきます。

document.styleSheets[0].insertRule(` .dot {
    position:absolute; width:5px;
    height:5px; background-color:black;
    } `);

let clicking;
document.body.addEventListener("mousedown", () => (clicking = true));
document.body.addEventListener("mouseup", () => (clicking = false));
document.body.addEventListener("mousemove", (evt) => {
  if (!(clicking && evt.shiftKey)) return;
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${evt.clientX}px`;
  dot.style.top = `${evt.clientY}px`;
  document.body.append(dot);
});
