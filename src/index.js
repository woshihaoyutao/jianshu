import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./style.js";
import "./statics/iconfont/iconfont";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
);
