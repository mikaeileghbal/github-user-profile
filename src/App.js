import { useState } from "react";
import "./App.css";
import Chart from "./components/chart/Chart";
import Repo from "./components/repo/Repo";
import SearchFrom from "./components/search-form/SearchFrom";
import GitHubUser from "./components/user/GitHubUser";

function App() {
  const [login, setLogin] = useState("mikaeileghbal");

  return (
    <div className="App">
      {!login && <SearchFrom />}
      {login && (
        <>
          <GitHubUser login="mikaeileghbal" />
          <Chart />
          <Repo />
        </>
      )}
    </div>
  );
}

export default App;
