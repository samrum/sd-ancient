import { h, Component } from "preact";

export default class LastUpdate extends Component {
  formatTimestamp(timestamp) {
    if (!timestamp) {
      return "";
    }

    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timeOfDay = "am";
    const monthDisplay = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthDisplay[date.getMonth()];

    if (hours > 12) {
      hours -= 12;
      timeOfDay = "pm";
    }

    if (hours === 0) {
      hours = 12;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${month} ${day}, ${hours}:${minutes} ${timeOfDay} PT`;
  }

  render({ lastUpdate }) {
    const dateMessage = this.formatTimestamp(lastUpdate);

    const hiddenClass = lastUpdate ? "" : "hidden";
    const sectionClass = `update-info ${hiddenClass}`;

    return (
      <section class={sectionClass}>
        <strong>Last Update: </strong>
        {dateMessage}
      </section>
    );
  }
}
