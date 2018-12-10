import { h, render } from "preact";
import App from "@components/app";
import style from "@styles/index.scss";

function init() {
  render(<App />, document.body, document.getElementById("app"));
}

if (module.hot) {
  module.hot.accept("@components/app", () => requestAnimationFrame(init));
}

init();
