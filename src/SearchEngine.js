import React, { useState } from "react";

function SearchEngine() {
  let [city, setCity] = useState("");
  let [displayedCity, setDisplayedCity] = useState("Paris");
  let [displayedTemperature, setDisplayedTemperature] = useState("24");

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayedCity(city);
    setDisplayedTemperature(40);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <header>
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={updateCity}
            placeholder="Enter a city..."
            required
            class="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </header>
      <main>
        <div class="current-weather">
          <div>
            <h1 class="current-city" id="current-city" onClick={updateCity}>
              {displayedCity}
            </h1>
            <p class="current-details">
              <span id="current-date">*la fecha de hoy*</span>, moderate rain <br />
              Humidity: <strong id="humidity-value">87</strong>%, Wind:{" "}
              <strong id="wind-speed">7.2</strong>km/h
            </p>
          </div>
          <div class="current-temperature">
            <span class="current-temperature-icon">☀️</span>
            <span class="current-temperature-value">
              {displayedTemperature}
            </span>
            <span class="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchEngine;
