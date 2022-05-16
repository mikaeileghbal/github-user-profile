import React from "react";
import "./styles.css";

export default function Chart() {
  return (
    <section className="section charts">
      <div className="charts_container">
        <div className="chart">
          <h2 className="header">top languages</h2>
        </div>
        <div className="chart">
          <h2 className="header">most starred</h2>
        </div>
        <div className="chart">
          <h2 className="header">stars per language</h2>
        </div>
      </div>
    </section>
  );
}
