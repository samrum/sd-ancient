import { h, Component } from 'preact';
import BaseWidget from './baseWidget';
import LinkList from './../patterns/linkList';

export default class AlphabetizedCategoryWidget extends Component {
    render({ position }) {
        const categories = [
            {
                label: '# & A - C',
                url: 'https://slickdeals.net/deal-categories/',
            },
            {
                label: 'D - G',
                url: 'https://slickdeals.net/deal-categories/',
            },
            {
                label: 'H - L',
                url: 'https://slickdeals.net/deal-categories/',
            },
            {
                label: 'M - R',
                url: 'https://slickdeals.net/deal-categories/',
            },
            {
                label: 'S - Z',
                url: 'https://slickdeals.net/deal-categories/',
            },
        ];

        const categoryList = new LinkList(categories, ' ', 'column');

        return (
            <BaseWidget title="Alphabetized" position={position} type="alphabetized-category">
                { categoryList }
            </BaseWidget>
        );
    }
}
