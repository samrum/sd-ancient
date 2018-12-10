import { h, Component } from "preact";
import TellAFriendIcon from "@images/tellafriend.gif";
import LinkList from "@components/patterns/linkList";

export default class DealDetails extends Component {
  render({ deal, showNext, showPrevious }) {
    if (!deal) {
      return (
        <article class="deal-details placeholder">
          <header />
        </article>
      );
    }

    const links = [
      {
        label: "Tell a Friend",
        url: deal.link,
        image: TellAFriendIcon,
        openInNewTab: true,
      },
      {
        label: "Top",
        url: "#top",
      },
    ];

    if (showPrevious) {
      links.push({
        label: "Previous",
        url: `#${deal.id - 1}`,
      });
    }

    if (showNext) {
      links.push({
        label: "Next",
        url: `#${deal.id + 1}`,
      });
    }

    const actionLinks = LinkList(links, " | ", "row");

    return (
      <article class="deal-details" id={deal.id}>
        <header>
          &nbsp;{deal.title} <span>({deal.postDate})</span>
        </header>
        <section class="details-top">
          <div>Exp: ??</div>
          {actionLinks}
        </section>
        <section
          class="details-text"
          dangerouslySetInnerHTML={{ __html: deal.text }}
        />
      </article>
    );
  }
}
