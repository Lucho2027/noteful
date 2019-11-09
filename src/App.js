import React, { Component } from "react";
import MainPage from "./MainPage/MainPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage store={this.props.store} />
      </div>
    );
  }
}

export default App;
