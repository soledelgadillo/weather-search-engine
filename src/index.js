import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SearchBar from "./SearchBar";
import Overview from "./Overview";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="container">
      <SearchBar />
      <Overview />
    </div>
  </StrictMode>,
  rootElement
);
