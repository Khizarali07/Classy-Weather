import { Component } from "react";
import Day from "./day";

export default class Weather extends Component {
  componentWillUnmount() {
    console.log("Weather will unmount");
  }

  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              date={date}
              max={max.at(i)}
              min={min.at(i)}
              code={codes.at(i)}
              key={date}
              isToday={i === 0 ? true : false}
            />
          ))}
        </ul>
      </div>
    );
  }
}
