import { h, Component } from "preact";
import DealDetails from "@components/latestDeals/dealDetails";

export default class LatestDealDetails extends Component {
  render({ dealCount, deals }) {
    let dealDetailElements = [];
    const dealKeys = Object.keys(deals);

    if (dealKeys.length) {
      dealDetailElements = dealKeys.map(key => {
        const dealGroup = deals[key];

        return dealGroup.deals.map(deal => {
          const props = {
            deal,
            showNext: deal.id < dealCount - 1,
            showPrevious: deal.id > 0,
          };

          return <DealDetails {...props} />;
        });
      });
    } else {
      for (let i = 0; i < 20; i++) {
        dealDetailElements.push(<DealDetails />);
      }
    }

    return <div class="latest-deals-details">{dealDetailElements}</div>;
  }
}
