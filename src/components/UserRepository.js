import React from "react";
import Fetch from "./Fetch";
import RepoMenmu from "./RepoMenu";

export default function UserRepository({
  login,
  selectedRepo,
  onSelect = (f) => f,
}) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenmu
          repository={data}
          login={login}
          selectedRepo={selectedRepo}
          onSelect={onSelect}
        />
      )}
    />
  );
}
