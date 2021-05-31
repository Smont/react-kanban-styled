import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
