import { h, Component } from "preact";
import CategoryWidget from "./widgets/categoryWidget";
import AlphabetizedCategoryWidget from "./widgets/alphabetizedCategoryWidget";
import SearchWidget from "./widgets/searchWidget";

export default class LeftColumn extends Component {
  render() {
    return (
      <div class="left-column">
        <CategoryWidget />
        <AlphabetizedCategoryWidget />
        <SearchWidget />
      </div>
    );
  }
}
