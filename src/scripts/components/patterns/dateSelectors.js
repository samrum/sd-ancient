import { h, Component } from "preact";

export default class DateSelectors extends Component {
  render({ displayDate }) {
    const monthOptions = [];
    const dayOptions = [];
    const yearOptions = [];
    const date = new Date(displayDate * 1000);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    for (let i = 1; i <= 12; i += 1) {
      const label = i < 10 ? `0${i}` : i;
      const selected = i === month + 1;

      monthOptions.push(<option selected={selected}>{label}</option>);
    }

    for (let i = 1; i <= 31; i += 1) {
      const selected = i === day;

      dayOptions.push(<option selected={selected}>{i}</option>);
    }

    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= 2000; i -= 1) {
      const selected = i === year;

      yearOptions.push(<option selected={selected}>{i}</option>);
    }

    return (
      <span class="dateSelectors">
        <select>{monthOptions}</select>
        <select>{dayOptions}</select>
        <select>{yearOptions}</select>
      </span>
    );
  }
}
