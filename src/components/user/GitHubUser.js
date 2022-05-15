import React, { useState } from "react";
import Fetch from "../../fetch/Fetch";
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
    <div>
      {console.log(user)}
      {UserDetails({ data: user })}
    </div>
  );
}

function UserDetails({ data }) {
  console.log("called");
  console.log("in function: ", data);
  return (
    <div className="githubUser">
      <img
        className="profile_image"
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }}
      />
      {data.name && <h1 className="profile_name">{data.name}</h1>}
      <h3 className="profile_login">@{data.login}</h3>
      <div className="date_wrapper">
        {data.location && <p className="profile_location">{data.location}</p>}
        <span>Joined </span>
        {data.join}
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
