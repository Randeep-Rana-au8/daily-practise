import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  state = {
    cities: ["Haridwar", "Delhi", "Dehradun", "Mumbai"],
    shoes: [
      { name: "Nike", price: "34" },
      { name: "Puma", price: "32" },
      { name: "lucks", price: "3442" },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Form name="Attainu" city="banglore" />
        <div>
          {this.state.cities.map((city) => (
            <h1>{city}</h1>
          ))}
        </div>
        <div>
          {this.state.shoes.map((item) => (
            <h4>{item.name}</h4>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
