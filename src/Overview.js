import React from "react";

export default function Overview() {
  return (
    <div className="overview">
      <h1 id="city">London</h1>
      <ul>
        <li>
          Last updated: Friday 11:00 AM <span id="date"></span>
        </li>
        <li id="description">Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Partly Cloudy"
              id="icon"
              className="float-left"
            />
            <div className="float-left">
              <strong id="temperature">18</strong>
              <span className="units">ºC</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">80</span>%
            </li>
            <li>
              Wind: <span id="wind">10</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
