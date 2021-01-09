class InfoPanel extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append("Black Sabbath");
  }
}
customElements.define("info-panel", InfoPanel);
let infoPanel = document.createElement("info-panell");
document.body.appendChild(infoPanel);

class InfoPanel extends HTMLElement {
  constructor() {
    super();
    let style = document.createElement("style");
    style.textContent = `
    .info-panel {
        margin: 10px;
        padding: 10px;
        border: 1px solid gray;
    }
    dt {
        width: 120px;
        float: left;
    }
    `;
    let panel = document.createElement("div");
    panel.classList.add("info-panel");
    panel.innerHTML = `<h1>${this.getAttribute(
      "name"
    )}</h1><dl><dt>Power</dt><dd>${this.getAttribute(
      "power"
    )}</dd><dt>Speed</dt><dd>${this.getAttribute(
      "speed"
    )}</dd> <dt>Range</dt><dd>${this.getAttribute("range")}</dd></dl>`;
    // mode:openを指定するとjabascriptからshadow DOM内部にアクセスでき、closedを指定するとアクセスできなくなる
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(style, panel);
  }
}

customElements.define("info-panel", InfoPanel);
let div = document.createElement("div");
div.innerHTML = `<info-panel name="Black Sabbath" power="E" speed="A" range="A"></info-panel>`;
document.body.append(div);
