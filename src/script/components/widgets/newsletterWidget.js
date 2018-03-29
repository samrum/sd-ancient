import { h, Component } from 'preact';
import BaseWidget from './baseWidget';
import GoImage from './../../../images/gobutton.gif';

export default class NewsletterWidget extends Component {
    constructor() {
        super();

        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const actionSource = encodeURIComponent('samrum');
        window.location = `https://slickdeals.net/forums/register.php?action_source=${actionSource}`;
    }

    render({ position }) {
        const props = {
            position,
            title: 'Newsletter',
            type: 'newsletter',
            twoBorder: true,
        };

        return (
            <BaseWidget {...props}>
                <strong>
                    Never miss a deal again!
                </strong><br /><br />
                Enter your email address below and sign up for our SlickDeals Alert.
                <div class="newsletter-sign-up">
                    <form onSubmit={this.handleSubmit}>
                        <input name="email" value={this.state.value} onChange={this.handleChange} />
                        &nbsp;<button class="link"><img src={GoImage} /></button>
                    </form>
                </div>

                <a href="https://slickdeals.net/deal-alerts/">Click here</a> to find out about our newsletter.
            </BaseWidget>
        );
    }
}
