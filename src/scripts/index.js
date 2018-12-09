import { h, render } from "preact";
import App from "@components/app";
import style from "@styles/index.scss";

const root = document.getElementById("app");

function init() {
  render(<App />, root, root.lastChild);
}

if (module.hot) {
  module.hot.accept("@components/app", () => requestAnimationFrame(init));
}

init();
