import { h, Component } from "preact";
import LatestDeals from "@components/latestDeals/latestDeals";
import DealFetcher from "./../DealFetcher";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { deals: {}, dealCount: 0 };
  }

  componentDidMount() {
    if (typeof PRERENDER === "undefined") {
      DealFetcher.getDeals().then(groupedDeals => {
        let dealCount = 0;
        Object.keys(groupedDeals).forEach(key => {
          dealCount += groupedDeals[key].length;
        });
        this.setState({
          dealCount,
          deals: groupedDeals,
        });
      });
    }
  }

  render() {
    const dealProps = {
      dealCount: this.state.dealCount,
      deals: this.state.deals,
    };

    return (
      <main>
        <LatestDeals {...dealProps} />
      </main>
    );
  }
}
