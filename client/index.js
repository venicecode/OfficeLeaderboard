import React from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./assets/index.scss";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);
