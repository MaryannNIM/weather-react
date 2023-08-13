import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Maryann Nzekwe and it is open-sourced on{" "}
          <a
            href="https://github.com/MaryannNIM/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://lambent-panda-f92edf.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
