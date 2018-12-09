import { h, Component } from "preact";
import ImageLogo from "@images/logo.gif";

export default class Header extends Component {
  render() {
    return (
      <header class="global-header">
        <a href="https://slickdeals.net">
          <img src={ImageLogo} />
        </a>
        <nav>
          <ul>
            <li class="active">
              <a href=".">Home</a>
            </li>
            <li>
              <a href="https://slickdeals.net/deals/">New Deals</a>
            </li>
            <li>
              <a href="https://slickdeals.net/coupons/">New Coupons</a>
            </li>
            <li>
              <a href="https://slickdeals.net/deal-alerts/">Expiring Soon</a>
            </li>
            <li>
              <a href="https://slickdeals.net/forums/forumdisplay.php?f=9">
                New Customer Deals
              </a>
            </li>
            <li>
              <a href="https://slickdeals.net/featured-deals/">Top Deals</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
