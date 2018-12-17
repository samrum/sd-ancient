import { h, Component } from "preact";
import LatestDeals from "@components/latestDeals/latestDeals";
import DealFetcher from "@utils/DealFetcher";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { deals: {}, dealCount: 0 };
  }

  componentDidMount() {
    if (typeof PRERENDER === "undefined") {
      const dealConfig = {
        cacheKey: "sd-ancient",
        groupBy: "day",
      };

      DealFetcher.getDeals(dealConfig).then(
        this.processDealResponse.bind(this)
      );
    }
  }

  processDealResponse(response) {
    const { onDealFetch } = this.props;

    let dealCount = 0;

    response.dealGroups.forEach(group => {
      group.deals.forEach(deal => {
        deal.id = dealCount;
        dealCount++;
      });
    });

    this.setState({
      dealCount,
      deals: response.dealGroups,
    });

    onDealFetch({ lastUpdate: response.timestamp });
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
