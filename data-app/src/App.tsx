// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import React from "react";
import { useState } from "react";
import {
  Data_30d,
  Data_6m,
  Data_1y,
  Data_3y,
  Data_5y,
} from "./utils/market-price-data";
import "./styles.css";
import LineChart from "./components/LineChart";
import News from "./components/NewsFetch";
import convertTime from "./utils/DateConversion";

Chart.register(CategoryScale);
Chart.defaults.font.size = 20;
Chart.defaults.font.family = "Helvetica Neue";

interface Data {
  values: Array<{ x: number /* other properties */ }>;
  description: string;
  /* other properties */
}

export default function App() {
  // A helper function for chartData update
  function updateChartData(raw_data: Data) {
    const { values, description } = raw_data;
    return {
      labels: values.map((d) => {
        const { year, month } = convertTime(d.x);
        return month + " " + year;
      }),
      datasets: [
        {
          label: "BTC",
          data: values,
          borderColor: "#f2a900", // Bitcoin orange
          borderWidth: 1.5,
          backgroundColor: "#f2a900",
        },
      ],
      description: description,
    };
  }

  // chartData is defaulted to be 30 days
  const [chartData, setChartData] = useState(updateChartData(Data_30d));

  return (
    <div className="frame">
      <div className="App">
        <LineChart chartData={chartData} />
        <div className="button-container">
          <button
            className="button"
            onClick={() => setChartData(updateChartData(Data_30d))}
          >
            30D
          </button>
          <button
            className="button"
            onClick={() => setChartData(updateChartData(Data_6m))}
          >
            6M
          </button>
          <button
            className="button"
            onClick={() => setChartData(updateChartData(Data_1y))}
          >
            1Y
          </button>
          <button
            className="button"
            onClick={() => setChartData(updateChartData(Data_3y))}
          >
            3Y
          </button>
          <button
            className="button"
            onClick={() => setChartData(updateChartData(Data_5y))}
          >
            5Y
          </button>
        </div>
      </div>
      <div className="news-column-container">
        <p>BTC Latest News</p>
        <News />
      </div>
    </div>
  );
}
