import { h, Component } from "preact";
import BaseWidget from "./baseWidget";

export default class HelpUsWidget extends Component {
  render({ position }) {
    const props = {
      position,
      title: "Help Us",
      type: "help-us",
      twoBorder: true,
    };

    return (
      <BaseWidget {...props}>
        Find a deal?
        <br />
        <a href="https://slickdeals.net/forums/newthread.php?do=newthread&f=9&action_source=New+Thread+v2+Nav+Right+CTA">
          Click here
        </a>
        .
        <br />
        <br />
        Find an expired deal?
        <br />
        <a href="https://slickdeals.net/forums/forumdisplay.php?f=5">
          Click here
        </a>
        .
        <br />
        <br />
        Have a suggestion to improve this site?{" "}
        <a href="https://slickdeals.net/forums/forumdisplay.php?f=5">
          Click here
        </a>
        .
        <br />
        <br />
        Please Support Us By Using Our Links! Thanks!
      </BaseWidget>
    );
  }
}
