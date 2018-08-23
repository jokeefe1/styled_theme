import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "./router/Router";

const theme = {
  font: "Calibri",
  color1: "papayawhip",
  color2: "palevioletred"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
