import { h, Component } from "preact";

export default class Intro extends Component {
  render() {
    return (
      <section class="intro">
        <div class="hot-tip">
          <div>
            <span>Hot Tip</span>: Press Ctrl-D to Bookmark this Site!
          </div>
        </div>
        <div class="welcome">
          <header>Welcome to SlickDeals.net!</header>
          The most frequently updated and complete deal site on the web! We
          provide you with the day's hottest deals every day. We also have over
          800 coupons for all your favorite online stores. Browse around and
          you're bound to save more than a few bucks!
        </div>
      </section>
    );
  }
}
