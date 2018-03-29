import { h, Component } from 'preact';

export default class LastUpdate extends Component {
    render() {
        const date = new Date();
        const day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let timeOfDay = 'am';
        const monthDisplay = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const month = monthDisplay[date.getMonth()];

        if (hours > 12) {
            hours -= 12;
            timeOfDay = 'pm';
        }

        if (hours === 0) {
            hours = 12;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        const dateMessage = `${month} ${day}, ${hours}:${minutes} ${timeOfDay}`;

        return (
            <section class="update-info">
                <strong>Last Update: </strong>{ dateMessage } PT
            </section>
        );
    }
}
