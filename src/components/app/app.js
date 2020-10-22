import React from "react";
import ChartContainer from "../chart/chart-container";
import Header from "../header/header";

import "./app.scss";
import "../../scss/general.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <ChartContainer />
    </div>
  );
}

export default App;
