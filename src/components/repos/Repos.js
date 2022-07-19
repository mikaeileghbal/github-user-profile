import React, { useEffect } from "react";
import Fetch from "../../fetch/Fetch";
import { GoRepo } from "react-icons/go";
import "./repos.css";
import langColor from "../../utils/langColors";
import { Charts } from "../../components";

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
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={RepoList}
      //loadingFallback={<Spinner />}
    />
    //RepoList({ data: repos })
  );
}

function RepoList({ data }) {
  return (
    <>
      <Charts data={data} />
      <section className="repos">
        <div className="repo_container">
          <header>
            <h2 className="header">Repos</h2>
            <div>
              <span></span>
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
    </>
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
