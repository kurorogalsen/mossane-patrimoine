import React from "react";
import ReactDOM from "react-dom";

import "./styles/starter.css";
import "./styles/layout.css";
import "./styles/mossane.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
