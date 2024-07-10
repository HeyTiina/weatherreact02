import React from "react";

import "./App.css";
import "./Weather.css";

import Weather from "./Weather.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <body>
      <div className="App">
        <div className="container">
          <Weather defaultCity="Palma de Mallorca" />
          <Footer />
        </div>
      </div>
    </body>
  );
}
