import React from "react";

import "./App.css";

import SearchEngine from "./SearchEngine";
import Footer from "./Footer.js";

export default function App() {
  return (
    <body>
      <div class="weather-app">
        <SearchEngine />
        <Footer />
      </div>
    </body>
  );
}
