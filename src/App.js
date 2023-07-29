import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Maryann Nzekwe and it is{" "}
          <a
            href="https://github.com/MaryannNIM/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
