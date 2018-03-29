import { h, Component } from 'preact';
import DateSelectors from './patterns/dateSelectors';

export default class LatestDealsFooter extends Component {
    render() {
        return (
            <footer class="latest-deals-footer">
                View Deals From <DateSelectors />
                <div>
                    To <DateSelectors /><button>Go</button>
                </div>
            </footer>
        );
    }
}
