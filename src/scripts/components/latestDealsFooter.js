import { h, Component } from "preact";
import DateSelectors from "./patterns/dateSelectors";

export default class LatestDealsFooter extends Component {
  render({ fromDate, toDate }) {
    return (
      <footer class="latest-deals-footer">
        View Deals From <DateSelectors displayDate={fromDate} />
        <div>
          To <DateSelectors displayDate={toDate} />
          <button>Go</button>
        </div>
      </footer>
    );
  }
}
