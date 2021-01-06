// htmlファイルを想定
{
  /* <template id="info-panel-template">
  <style>
    .info-panel {
      margin: 10px;
      padding: 10px;
      border: 1px solid gray;
    }
    dt {
      width: 120px;
      float: left;
    }
  </style>
  <div class="info-panel">
    <h1 id="name">
      <dl>
        <dt>Power</dt>
        <dd id="power"></dd>
        <dt>Speed</dt>
        <dd id="speed"></dd>
        <dt>Range</dt>
        <dd id="range"></dd>
      </dl>
    </h1>
  </div> </template
>; */
}

class InfoPanel extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("info-panel-template");
    // <template>要素のcontent属性に必要なDOMツリーがあるのでcloneNode(true)で複製して利用する
    const content = template.content
      .cloneNode(true)

      [("name", "power", "speed", "range")].forEach((id) => {
        content.getElementById(id).textContent = this.getAttribute(id);
      });
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(content);
  }
}
