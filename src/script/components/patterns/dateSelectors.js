import { h, Component } from 'preact';

export default class DateSelectors extends Component {
    render() {
        const monthOptions = [];
        const dayOptions = [];
        const yearOptions = [];

        for (let i = 1; i <= 12; i += 1) {
            const label = (i < 10) ? `0${i}` : i;

            monthOptions.push(<option>{ label }</option>);
        }

        for (let i = 1; i <= 31; i += 1) {
            dayOptions.push(<option>{ i }</option>);
        }

        const currentYear = new Date().getFullYear();

        for (let i = currentYear; i >= 2000; i -= 1) {
            yearOptions.push(<option>{ i }</option>);
        }

        return (
            <span class="dateSelectors">
                <select>
                    { monthOptions }
                </select>
                <select>
                    { dayOptions }
                </select>
                <select>
                    { yearOptions }
                </select>
            </span>
        );
    }
}
