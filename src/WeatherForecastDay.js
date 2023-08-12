import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="forecast-icon">
        <WeatherIcon iconCode={props.data.weather[0].icon} size={38} />
      </div>
      <div className="Forecast-temperatures">
        <span className="forecast-temperature-min">{minTemperature()}</span>
        {""}{" "}
        <span className="forecast-temperature-max">{maxTemperature()}</span>
      </div>
    </div>
  );
}
