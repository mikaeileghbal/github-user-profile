import React, { useEffect } from "react";
import Fetch from "../../fetch/Fetch";
import { GoRepo } from "react-icons/go";
import "./repos.css";
import langColor from "../../utils/langColors";
import Chart from "../chart/Chart";

const repos = [
  {
    id: "top section",
    name: "bottom section",
    size: 1012,
    html_url: "https://github.com/mikaeileghbal/albums",
    language: "JavaScript",
  },
  {
    id: "top section",
    name: "bottom section",
    size: 1012,
    html_url: "https://github.com/mikaeileghbal/albums",
    language: "JavaScript",
  },
  {
    id: "id section",
    name: "name section",
    size: 1012,
    html_url: "https://github.com/mikaeileghbal/albums",
    language: "HTML",
  },
  {
    id: "id section",
    name: "name section",
    size: 1012,
    html_url: "https://github.com/mikaeileghbal/albums",
    language: "CSS",
  },
];

export default function Repos({ login }) {
  console.log(login);
  console.log(`https://api.github.com/users/${login}/repos`);

  return (
    // <Fetch
    //   uri={`https://api.github.com/users/${login}/repos`}
    //   renderSuccess={RepoList}
    //   //loadingFallback={<Spinner />}
    // />
    RepoList({ data: repos })
  );
}

function createLanguagesList(data, container) {
  console.log(data);
  let languages = data.reduce((langs, val) => {
    langs[val.language]
      ? (langs[val.language] = langs[val.language] + 1)
      : (langs[val.language] = 1);
    return langs;
  }, {});

  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", 100);
  canvas.setAttribute("height", 100);
  container.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const langChart = new Chart(ctx, {
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

  return langChart;
}

function RepoList({ data }) {
  useEffect(() => {
    createLanguagesList(data, document.getElementById("chart-langs"));
  }, []);
  //createLanguagesList(data);
  return (
    <section className="repos">
      <div className="repo_container">
        <header>
          <h2 className="header">Top repos</h2>
          <div>
            <span>by</span>
          </div>
        </header>
        <div className="repo-list_container">
          <ul className="repo-list">
            {(!data || data.length === 0) && (
              <li>
                <p className="info">No repositories.</p>
              </li>
            )}
            {data && data.map((repo, i) => <Repo key={i} repo={repo} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Repo({ repo }) {
  return (
    <li>
      <a className="repo" href={repo.html_url}>
        <div className="repo_top">
          <GoRepo
            style={{
              marginRight: "0.6rem",
              fontSize: "1rem",
              color: "rgb(88, 96, 105)",
              verticalAlign: "middle",
            }}
          />
          <h3 style={{ display: "inline", color: "#24292f" }}>{repo.name}</h3>
        </div>
        <div className="repo_bottom">
          <span>
            <div
              className="lang_color"
              style={{ backgroundColor: langColor[repo.language] }}
            ></div>
            {repo.language}
          </span>
          <span>{repo.size} KB</span>
        </div>
      </a>
    </li>
  );
}
