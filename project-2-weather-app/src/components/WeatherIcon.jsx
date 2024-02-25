import React from "react";
import weatherIconCloudDay from "../assets/weather_icon/Cloudy_day.png"

const WeatherIcon = ({
  url = weatherIconCloudDay,
  className,
}) => {
  return (
    <div className={className}>
      <img src={url} alt="weather-icon"/>
    </div>
  );
}

export default WeatherIcon;
