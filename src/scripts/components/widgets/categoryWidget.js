import { h, Component } from "preact";
import BaseWidget from "./baseWidget";
import LinkList from "./../patterns/linkList";

export default class CategoryWidget extends Component {
  render({ position }) {
    const categories = [
      {
        label: "Top Deals",
        url: "https://slickdeals.net/featured-deals/",
      },
      {
        label: "Apparel",
        url: "https://slickdeals.net/deals/apparel/?src=catnav_apparel",
      },
      {
        label: "Books",
        url: "https://slickdeals.net/deals/books-magazines/",
      },
      {
        label: "Computers",
        url: "https://slickdeals.net/deals/computers/",
      },
      {
        label: "Electronics",
        url: "https://slickdeals.net/deals/tech/",
      },
      {
        label: "Gifts",
        url: "https://slickdeals.net/deals/flowers-gifts/",
      },
      {
        label: "Health",
        url: "https://slickdeals.net/deals/beauty/",
      },
      {
        label: "Movies",
        url: "https://slickdeals.net/deals/movie/",
      },
      {
        label: "Music",
        url: "https://slickdeals.net/deals/entertainment/",
      },
      {
        label: "Toys",
        url: "https://slickdeals.net/deals/games/",
      },
      {
        label: "Others",
        url: "https://slickdeals.net/deal-categories/",
      },
    ];

    const categoryList = new LinkList(categories, " ", "column");

    return (
      <BaseWidget title="Categories" position={position} type="category">
        {categoryList}
      </BaseWidget>
    );
  }
}
