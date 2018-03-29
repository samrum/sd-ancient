import { h, Component } from 'preact';

export default class LatestDealsSection extends Component {
    render({ deals, header }) {
        const dealRows = deals.map((deal) => {
            const href = `#${deal.id}`;
            return <li><a href={href}>{deal.title}</a></li>;
        });

        return (
            <section class="latest-deals-section">
                <header>{ header }</header>
                <ul>
                    { dealRows }
                </ul>
            </section>
        );
    }
}
