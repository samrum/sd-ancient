import { h, Component } from 'preact';
import DealDetails from './dealDetails';

export default class LatestDealDetails extends Component {
    render({ dealCount, deals }) {
        const dealDetailElements = Object.keys(deals).map((key) => {
            return deals[key].map((deal) => {
                const props = {
                    deal,
                    showNext: deal.id < (dealCount - 1),
                    showPrevious: deal.id > 0,
                };

                return <DealDetails {...props} />;
            });
        });

        return (
            <div class="latest-deals-details">
                { dealDetailElements }
            </div>
        );
    }
}
