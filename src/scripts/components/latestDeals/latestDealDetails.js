import { h, Component } from "preact";
import DealDetails from "@components/latestDeals/dealDetails";

export default class LatestDealDetails extends Component {
  render({ dealCount, deals }) {
    let dealDetailElements = [];
    const groupedDealKeys = Object.keys(deals);

    if (groupedDealKeys.length) {
      dealDetailElements = groupedDealKeys.map(key =>
        deals[key].map(deal => {
          const props = {
            deal,
            showNext: deal.id < dealCount - 1,
            showPrevious: deal.id > 0,
          };

          return <DealDetails {...props} />;
        })
      );
    } else {
      for (let i = 0; i < 20; i++) {
        dealDetailElements.push(<DealDetails />);
      }
    }

    return <div class="latest-deals-details">{dealDetailElements}</div>;
  }
}
