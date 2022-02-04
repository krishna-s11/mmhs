import "./App.css";
import LeftPane from "./Components/LeftPane/LeftPane";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <LeftPane />
      <div className="main_container">
        <Nav />
        <Dashboard />
      </div>
      <div className="bottom-theme"></div>
    </div>
  );
}

export default App;
