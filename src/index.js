import React from "react";
import ReactDOM from "react-dom";

import Card from "./containers/Card";

const App = () => <Card />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
