import React, { useState } from "react";
import Fetch from "../../fetch/Fetch";
import { GoLocation, GoCalendar } from "react-icons/go";

import "./styles.css";

const user = {
  avatar_url: "./favicon.ico",
  login: "mikaeileghbal",
  name: "mikaeil eghbal",
  location: "iran",
  join: "november 12, 2022",
};
export default function GitHubUser({ login }) {
  return (
    // <Fetch
    //   uri={`https://api.github.com/users/${login}`}
    //   renderSuccess={UserDetails}
    //   loadingFallback={<Spinner />}
    // />
    <div>{UserDetails({ data: user })}</div>
  );
}

function UserDetails({ data }) {
  return (
    <main className="section main">
      <div className="github_user">
        <div className="profile_avatar">
          <img
            className="profile_image"
            src={data.avatar_url}
            alt={data.login}
          />
        </div>
        {data.name && <h1 className="profile_name ">{data.name}</h1>}
        <h3 className="profile_login space-2">@{data.login}</h3>
        <div className="date_wrapper">
          <span className="info">
            {data.location && (
              <p className="profile_location">
                <GoLocation style={{ margin: "0 0.5rem" }} />
                {data.location}
              </p>
            )}
          </span>
          <span className="info capitalized">
            <GoCalendar style={{ margin: "0 0.5rem" }} />
            Joined {data.join}
          </span>
        </div>
        <div className="profile_brief">
          <div className="card">
            <p className="number">28</p>
            <p className="label space-1">repositories</p>
          </div>
          <div className="card">
            <p className="number">2</p>
            <p className="label space-1">followers</p>
          </div>
          <div className="card">
            <p className="number">3</p>
            <p className="label space-1">following</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Spinner() {
  return (
    <div>
      <i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
    </div>
  );
}
