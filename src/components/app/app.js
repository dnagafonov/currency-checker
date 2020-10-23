import React from "react";
import ChartContainer from "../chart/chart-container";
import Header from "../header/header";
import { ToastContainer } from "react-toastify";
import WidgetContainer from "../widget/widget-container";

import "./app.scss";
import "../../scss/general.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Header />
      <ChartContainer />
      <WidgetContainer />
      <ToastContainer limit={3} />
    </div>
  );
}

export default App;
