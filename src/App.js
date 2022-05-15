import { useState } from "react";
import "./App.css";
import SearchFrom from "./components/search-form/SearchFrom";
import GitHubUser from "./components/user/GitHubUser";

function App() {
  const [login, setLogin] = useState("mikaeil");

  return (
    <div className="App">
      <main className="section main">
        {login && <GitHubUser login="mikaeileghbal" />}
        {!login && <SearchFrom />}
      </main>
      <section className="section charts">
        <div className="charts_container">
          <div className="chart">
            <h1>top languages</h1>
          </div>
          <div className="chart">
            <h1>most starred</h1>
          </div>
          <div className="chart">
            <h1>stars per language</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
