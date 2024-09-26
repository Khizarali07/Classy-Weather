import { Component } from "react";
import getWeatherIcon from "./getWeatherIcon";
import formatDay from "./formatDate";

export default class Day extends Component {
  render() {
    const { date, max, min, code, isToday } = this.props;
    console.log(date);
    const x = formatDay("2024-09-19");
    console.log(x);

    return (
      <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday === true ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}
