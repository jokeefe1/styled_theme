import React from "react";
import ReactDOM from "react-dom";

import { Router } from "./router/Router";

const App = () => <Router />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);