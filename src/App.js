import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import SearchBar from "./containers/SearchBar";
import Profile from "./containers/Profile";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="title is-1">Github</h1>
          <SearchBar />
          <Profile />
        </div>
      </div>
    );
  }
}

export default App;
