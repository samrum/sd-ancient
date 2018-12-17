import { h, Component } from "preact";
import LastUpdate from "./lastUpdate";
import LeftColumn from "./leftColumn";
import Main from "./main";
import RightColumn from "./rightColumn";
import Footer from "./footer";
import Intro from "@components/Intro";
import Header from "@components/Header";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      lastUpdate: null,
    };

    this.onDealFetch = this.onDealFetch.bind(this);
  }

  onDealFetch({ lastUpdate }) {
    this.setState({
      lastUpdate,
    });
  }

  render() {
    const { lastUpdate } = this.state;

    return (
      <div id="app">
        <Header />
        <Intro />
        <LastUpdate lastUpdate={lastUpdate} />
        <section class="page-content">
          <LeftColumn />
          <Main onDealFetch={this.onDealFetch} />
          <RightColumn />
        </section>
        <Footer />
      </div>
    );
  }
}
