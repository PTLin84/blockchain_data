// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import React from "react";
import { useState } from "react";
import { Data } from "./utils/Data";
import "./styles.css";
import PieChart from "./components/PieChart";

Chart.register(CategoryScale);

export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost ",
        data: Data.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <PieChart chartData={chartData} />
      {/* <p>Using Chart.js in React</p> */}
    </div>
  );
}
