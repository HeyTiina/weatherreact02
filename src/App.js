import React from "react";

import "./App.css";
import "./Weather.css";

import Weather from "./Weather.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <body>
      <div class="weather-app">
        <Weather />
        <Footer />
      </div>
    </body>
  );
}
