import React from "react";
import Fetch from "../fetch/Fetch";

export default function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
      loadingFallback={<Spinner />}
    />
  );
}

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div>
      <i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
    </div>
  );
}
