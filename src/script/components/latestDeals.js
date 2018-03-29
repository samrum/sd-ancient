import { h, Component } from 'preact';
import LinkList from './patterns/linkList';
import LatestDealsSection from './latestDealsSection';
import LatestDealsFooter from './latestDealsFooter';

export default class LatestDeals extends Component {
    render({ deals }) {
        const latestDealsSections = Object.keys(deals).map((key) => {
            const props = {
                header: key,
                deals: deals[key],
            };

            return <LatestDealsSection {...props} />;
        });

        const links = [
            {
                label: 'Last 20',
                url: '.',
            },
            {
                label: 'Last 7 Days',
                url: 'https://slickdeals.net/newsearch.php?src=SearchBarV2&pp=20&sort=relevance&rating=frontpage&previousdays=7&forumid%5B%5D=30&forumid%5B%5D=9&forumid%5B%5D=54&forumid%5B%5D=53&forumid%5B%5D=4&forumid%5B%5D=25',
            },
            {
                label: 'This Month',
                url: 'https://slickdeals.net/newsearch.php?src=SearchBarV2&pp=20&sort=relevance&rating=frontpage&previousdays=30&forumid%5B%5D=all&forumid%5B%5D=30&forumid%5B%5D=9&forumid%5B%5D=54&forumid%5B%5D=4',
            },
        ];

        const filterLinks = LinkList(links, ' | ', 'row');

        return (
            <div class="latest-deals">
                <header class="latest-deals-header">Latest Deals</header>
                <section class="latest-deal-controls">
                    Show deals from:
                    { filterLinks }
                </section>
                { latestDealsSections }
                <LatestDealsFooter />
            </div>
        );
    }
}
