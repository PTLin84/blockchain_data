// src/components/PieChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import convertTime from "../utils/DateConversion";

export default function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          responsive: true,
          elements: {
            point: {
              radius: 2,
            },
          },
          scales: {
            x: {
              ticks: {
                color: "white",
              },
            },
            y: {
              grid: {
                color: "gray",
              },
              ticks: {
                color: "white",
              },
            },
          },
          plugins: {
            legend: {
              position: "right",
              labels: {
                color: "white",
              },
            },
            title: {
              display: true,
              text: chartData.description,
              color: "white",
            },
            tooltip: {
              mode: "index",
              intersect: false,
              callbacks: {
                title: function(tooltipItem) {
                  const { year, month, date } = convertTime(
                    tooltipItem[0].raw.x
                  );

                  return `${year} ${month} ${date}`;
                },
                label: function(tooltipItem) {
                  return `USD ${Math.round(tooltipItem.raw.y)}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
