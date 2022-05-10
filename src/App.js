import "./App.css";
import GitHubUser from "./components/GitHubUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Profile</h1>
      </header>
      <main>
        <GitHubUser login="mikaeileghbal" />
      </main>
    </div>
  );
}

export default App;
