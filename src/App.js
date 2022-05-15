import { useState } from "react";
import "./App.css";
import SearchFrom from "./components/search-form/SearchFrom";
import GitHubUser from "./components/user/GitHubUser";

function App() {
  const [login, setLogin] = useState("mikaeil");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Profile</h1>
      </header>
      <main className="section main">
        {login && <GitHubUser login="mikaeileghbal" />}
        {!login && <SearchFrom />}
      </main>
    </div>
  );
}

export default App;
