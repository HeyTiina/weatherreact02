import React from "react";

function Weather() {
  return (
    <div>
      <div className="Weather">
        <form onSubmit>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-9">
            <h1>Mallorca</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <img
                  alt="Sol"
                  src="https://cdn.search.brave.com/serp/v2/_app/immutable/assets/01d.Dt-p6iSi.svg"
                />
                <span>6ºC</span>
              </li>
              <li>Sunny</li>
              <li>Sunday 10:00</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitaions: 0%</li>
              <li>Humidity: 55%</li>
              <li>Viento: 4.73 Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
