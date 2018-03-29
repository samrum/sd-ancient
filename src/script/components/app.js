import { h, Component } from 'preact';
import LastUpdate from './lastUpdate';
import LeftColumn from './leftColumn';
import Main from './main';
import RightColumn from './rightColumn';
import Footer from './footer';

if (module.hot) {
    require('preact/debug');
}

export default class App extends Component {
    render() {
        return (
            <div>
                <LastUpdate />
                <section class="page-content">
                    <LeftColumn />
                    <Main />
                    <RightColumn />
                </section>
                <Footer />
            </div>
        );
    }
}
