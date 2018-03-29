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
                this.setState({
                    deals: groupedDeals,
                });
            });
    }

    render() {
        return (
            <main>
                <LatestDeals deals={this.state.deals} />
                <LatestDealDetails deals={this.state.deals} />
            </main>
        );
    }
}
