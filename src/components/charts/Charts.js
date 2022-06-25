import React, { useEffect } from "react";
import "./charts.css";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function createChart(ctx, chartObject) {
  return new Chart(ctx, chartObject);
}

export default function Charts({ data }) {
  const createLangsChart = () => {
    const ctx = document.getElementById("canvas-langs");

    createChart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    createLangsChart();
  }, []);

  const langsError = !data || !data.length > 0;
  const starredError = !data || !data.length > 0;
  const starsError = !data || !data.length > 0;

  const chartSize = 300;
  return (
    <section className="section charts">
      <div className="charts_container">
        <div className="chart" id="chart-langs">
          <h2 className="header">top languages</h2>
          {langsError && <p>Nothing to see here!</p>}
          <canvas
            id="canvas-langs"
            width={chartSize}
            height={chartSize}
          ></canvas>
        </div>
        <div className="chart" id="chart-starred">
          <h2 className="header">most starred</h2>
          {starredError && <p>Nothing to see here!</p>}
          <canvas
            id="canvas-starred"
            width={chartSize}
            height={chartSize}
          ></canvas>
        </div>
        <div className="chart" id="chart-stars">
          <h2 className="header">stars per language</h2>
          {starsError && <p>Nothing to see here!</p>}
          <canvas
            id="canvas-stars"
            width={chartSize}
            height={chartSize}
          ></canvas>
        </div>
      </div>
    </section>
  );
}
