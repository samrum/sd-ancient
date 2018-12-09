import { h, Component } from "preact";
import BaseWidget from "./baseWidget";
import RecommendImage from "@images/recommended.gif";

export default class RecommendWidget extends Component {
  render({ position }) {
    const props = {
      position,
      title: "Recommend",
      type: "recommend",
      twoBorder: true,
    };

    return (
      <BaseWidget {...props}>
        <a href="https://slickdeals.net/giveaway/">
          <img src={RecommendImage} />
          <br />
          Win $10,000!
        </a>
        <br />
        <br />
        Like this site? Please recommend us to your friends! Get a chance to win
        $10,000 each time you do.
      </BaseWidget>
    );
  }
}
