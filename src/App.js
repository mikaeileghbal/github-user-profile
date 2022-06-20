import { useState } from "react";
import "./App.css";
import Chart from "./components/chart/Chart";
import Footer from "./components/footer/Footer";
import Repos from "./components/repo/Repos";
import SearchFrom from "./components/search-form/SearchFrom";
import GitHubUser from "./components/user/GitHubUser";

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
      <Chart />
      <Repos login={login} />
      <Footer />
    </div>
  );
}

export default App;
