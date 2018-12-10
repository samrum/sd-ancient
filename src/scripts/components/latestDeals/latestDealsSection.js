import { h, Component } from "preact";

export default class LatestDealsSection extends Component {
  render({ deals, header }) {
    let dealRows = [];
    let headerText = header;

    if (deals.length) {
      dealRows = deals.map(deal => {
        const href = `#${deal.id}`;

        return (
          <li>
            <a href={href}>{deal.title}</a>
          </li>
        );
      });
    } else {
      const placeholder = <div class="placeholder" />;

      for (let i = 0; i < 20; i++) {
        dealRows.push(<li>{placeholder}</li>);
      }

      headerText = placeholder;
    }

    return (
      <section class="latest-deals-section">
        <header>{headerText}</header>
        <ul>{dealRows}</ul>
      </section>
    );
  }
}
