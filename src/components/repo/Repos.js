import React from "react";
import Fetch from "../../fetch/Fetch";
import "./styles.css";

const repos = [
  {
    id: "top section",
    name: "bottom section",
  },
  {
    id: "id section",
    name: "name section",
  },
  {
    id: "id section",
    name: "name section",
  },
  {
    id: "id section",
    name: "name section",
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

function RepoList({ data }) {
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
            {data.map((repo, i) => (
              <Repo key={i} repo={repo} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Repo({ repo }) {
  return (
    <li>
      <a className="repo" href="#">
        <div className="repo_top">{repo.id}</div>
        <div>{repo.name}</div>
      </a>
    </li>
  );
}
