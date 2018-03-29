import { h, Component } from 'preact';
import BaseWidget from './baseWidget';
import GoImage from './../../../images/gobutton.gif';

export default class SearchWidget extends Component {
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
        window.location = `https://slickdeals.net/newsearch.php?src=SearchBarV2&q=${this.state.value}&pp=20&sort=relevance&rating=frontpage&previousdays=-1&forumid%5B%5D=71&forumid%5B%5D=25&forumid%5B%5D=9&forumid%5B%5D=30&forumid%5B%5D=39&forumid%5B%5D=4&forumid%5B%5D=54&forumid%5B%5D=53&forumid%5B%5D=38&forumid%5B%5D=10&forumid%5B%5D=8`;
    }

    render({ position }) {
        return (
            <BaseWidget title="Search" position={position} type="search">
                <input type="radio" checked />&nbsp;&nbsp;News Archive
                <form onSubmit={this.handleSubmit}>
                    <input type="text" class="search-input" value={this.state.value} onChange={this.handleChange} />
                    &nbsp;<button class="link"><img src={GoImage} /></button>
                </form>
            </BaseWidget>
        );
    }
}
