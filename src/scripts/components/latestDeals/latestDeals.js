import { h, Component } from "preact";
import LinkList from "@components/patterns/linkList";
import LatestDealDetails from "@components/latestDeals/latestDealDetails";
import LatestDealsSection from "@components/latestDeals/latestDealsSection";
import LatestDealsFooter from "@components/latestDeals/latestDealsFooter";
import { formatTimestamp } from "@utils/Dates";

export default class LatestDeals extends Component {
  render(props) {
    const { deals } = props;

    let latestDealsSections = null;
    const dealKeys = Object.keys(deals);

    if (dealKeys.length) {
      latestDealsSections = dealKeys.map(key => {
        const dealGroup = deals[key];

        const props = {
          header: formatTimestamp(dealGroup.day),
          deals: dealGroup.deals,
        };

        return <LatestDealsSection {...props} />;
      });
    } else {
      latestDealsSections = [<LatestDealsSection deals={deals} />];
    }

    const links = [
      {
        label: "Last 20",
        url: ".",
      },
      {
        label: "Last 7 Days",
        url:
          "https://slickdeals.net/newsearch.php?src=SearchBarV2&pp=20&sort=relevance&rating=frontpage&previousdays=7&forumid%5B%5D=all&forumid%5B%5D=9&forumid%5B%5D=30&forumid%5B%5D=54&forumid%5B%5D=4&hideexpired=1",
      },
      {
        label: "This Month",
        url:
          "https://slickdeals.net/newsearch.php?src=SearchBarV2&pp=20&sort=relevance&rating=frontpage&previousdays=30&forumid%5B%5D=all&forumid%5B%5D=30&forumid%5B%5D=9&forumid%5B%5D=54&forumid%5B%5D=4&hideexpired=1",
      },
    ];

    const filterLinks = LinkList(links, " | ", "row");

    const dealDays = Object.keys(deals);

    const toDate = dealDays[0];
    const fromDate = dealDays[dealDays.length - 1];
    const footerProps = {
      toDate,
      fromDate,
    };

    return (
      <div>
        <div class="latest-deals">
          <header class="latest-deals-header">Latest Deals</header>
          <section class="latest-deal-controls">
            Show deals from:
            {filterLinks}
          </section>
          {latestDealsSections}
          <LatestDealsFooter {...footerProps} />
        </div>
        <LatestDealDetails {...props} />
      </div>
    );
  }
}
