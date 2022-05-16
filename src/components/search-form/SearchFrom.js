import React from "react";
import "./styles.css";

export default function SearchFrom() {
  return (
    <div className="search-form_container">
      <form>
        <img src="./favicon.ico" alt="github" />
        <label htmlFor="username">find your github profile</label>
        <input type="text" name="username" className="space-2" />
      </form>
    </div>
  );
}
