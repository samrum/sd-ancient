import { h, Component } from "preact";
import LastUpdate from "./lastUpdate";
import LeftColumn from "./leftColumn";
import Main from "./main";
import RightColumn from "./rightColumn";
import Footer from "./footer";
import Intro from "@components/Intro";
import Header from "@components/Header";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Intro />
        <LastUpdate />
        <section class="page-content">
          <LeftColumn />
          <Main />
          <RightColumn />
        </section>
        <Footer />
      </div>
    );
  }
}
