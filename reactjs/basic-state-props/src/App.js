import React, { Component } from "react";
import "./App.css";
import User from "./User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Randeep Rana",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    this.setState({ name: data });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <User name={this.state.name} setState={this.handleClick} />
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default App;
