import { useState } from "react";
import "./App.css";
import { Footer, Repos, SearchFrom, GitHubUser } from "./components";

function App() {
  const [login, setLogin] = useState("");

  const onUsernameChange = (username) => {
    setLogin(username);
  };

  if (!login)
    return (
      <div className="App">
        <SearchFrom onChange={onUsernameChange} />
      </div>
    );

  return (
    <div className="App">
      <GitHubUser login={login} />
      <Repos login={login} />
      <Footer />
    </div>
  );
}

export default App;
