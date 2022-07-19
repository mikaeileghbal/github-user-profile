import React, { useEffect, useRef, useState } from "react";
import "./charts.css";
import { Bar, PolarArea, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { getLanguagesData } from "../../utils/chartData";

Chart.register(...registerables);

export default function Charts({ data }) {
  const [langs] = useState(getLanguagesData(data));

  const langsError = !data || !data.length > 0;
  const starredError = !data || !data.length > 0;
  const starsError = !data || !data.length > 0;
  const options = {
    plugin: {
      legend: {
        position: "right",
        scales: {
          x: {
            display: false,
          },
          y: {
            display: true,
          },
          tick: {
            display: false,
          },
        },
      },
    },
  };

  return (
    <section className="section charts">
      <div className="charts_container">
        <div className="chart" id="chart-langs">
          <h2 className="header">top languages</h2>
          {langsError && <p>Nothing to see here!</p>}
          {!langsError && <Pie data={langs} options={options} />}
        </div>
        <div className="chart" id="chart-starred">
          <h2 className="header">most starred</h2>
          <p>Demo</p>
          {starredError && <p>Nothing to see here!</p>}
          {!starredError && <Bar data={langs} options={options} />}
        </div>
        <div className="chart" id="chart-stars">
          <h2 className="header">stars per language</h2>
          <p>Demo</p>
          {starsError && <p>Nothing to see here!</p>}
          {!starsError && <PolarArea data={langs} options={options} />}
        </div>
      </div>
    </section>
  );
}
