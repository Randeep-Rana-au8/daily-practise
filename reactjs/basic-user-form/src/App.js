import React, { Component } from "react";
import User from "./User";

export class App extends Component {
  state = {
    users: [],
  };

  handleClick = async (e) => {
    e.preventDefault();
    console.log(this.state.users);
    await this.setState({
      users: [...this.state.users, { name: e.target.name.value }],
    });
    console.log(this.state.users);
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleClick}>
          <input name="email" type="email" />
          <input name="name" type="text" />
          <button type="submit">Submit</button>
        </form>
        {this.state.users ? <User users={this.state.users} /> : "Loading..."}
      </div>
    );
  }
}

export default App;
