import React from "react";
import SearchBar from "./SearchBar";
import Result from "./Result";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Result />
        <footer>©Mikołaj Sojka</footer>
      </div>
    );
  }
}

export default App;
