import React, { useEffect, useState } from "react";
import "./charts.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { getLanguagesData } from "../../utils/chartData";

Chart.register(...registerables);

export default function Charts({ data }) {
  const [langs, setLangs] = useState(getLanguagesData(data));

  const langsError = !data || !(Object.keys(data).length > 0);
  const starredError = !data || !data.length > 0;
  const starsError = !data || !data.length > 0;

  const chartSize = 300;
  return (
    <section className="section charts">
      <div className="charts_container">
        <div className="chart" id="chart-langs">
          <h2 className="header">top languages</h2>
          {langsError && <p>Nothing to see here!</p>}
          <Doughnut data={langs} />
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
