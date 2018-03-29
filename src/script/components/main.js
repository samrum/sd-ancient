import { h, Component } from 'preact';
import LatestDeals from './latestDeals';
import LatestDealDetails from './latestDealDetails';
import DealFetcher from './../DealFetcher';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { deals: {} };
    }

    componentDidMount() {
        DealFetcher.getDeals()
            .then((groupedDeals) => {
                let dealCount = 0;

                Object.keys(groupedDeals).forEach((key) => {
                    dealCount += groupedDeals[key].length;
                });

                this.setState({
                    dealCount,
                    deals: groupedDeals,
                });
            });
    }

    render() {
        if (Object.keys(this.state.deals).length > 0) {
            const dealProps = {
                dealCount: this.state.dealCount,
                deals: this.state.deals,
            };

            return (
                <main>
                    <LatestDeals {...dealProps} />
                    <LatestDealDetails {...dealProps} />
                </main>
            );
        }

        return <main><div class="dealLoadingPlaceholder" /></main>;
    }
}
