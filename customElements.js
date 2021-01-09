class InfoPanel extends HTMLElement {
  constructor() {
    super();
  }
}
// 定義した要素は customElements.define() 関数を使用してタグとして利用できるよ うに登録できます。
customElements.define("info-panel", InfoPanel);

let infoPanel = document.createElement("info-panell");
document.body.appendChild(infoPanel); // <info-panel></info-panel>というタグが生成される 登録したタグは既存のタグとまったく同じように利用できます。
