import { h, Component } from 'preact';
import NewsletterWidget from './widgets/newsletterWidget';
import RecommendWidget from './widgets/recommendWidget';
import HelpUsWidget from './widgets/helpUsWidget';
import FeaturedDealsWidget from './widgets/featuredDealsWidget';

export default class LeftColumn extends Component {
    render() {
        return (
            <div class="right-column">
                <NewsletterWidget position="right" />
                <RecommendWidget position="right" />
                <HelpUsWidget position="right" />
                <FeaturedDealsWidget position="right" />
            </div>
        );
    }
}
