import React, { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import "./styles.css";

export default function SearchFrom({ onChange }) {
  const [username, setUsername] = useState("");

  const onInputChange = (e) => {
    setUsername(e.target.value);
    e.target.value = "";
  };

  const onInputKeyDown = (e) => {
    if (e.code === "Enter") {
      onChange(username);
    }
  };
  return (
    <div className="search-form_container">
      <form>
        <GoMarkGithub style={{ fontSize: "5rem", color: "var(--blue)" }} />
        <label htmlFor="username">find your github profile</label>
        <input
          type="text"
          name="username"
          className="space-2"
          value={username}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
        />
      </form>
    </div>
  );
}
