import React, { Component } from "react";
import Counter from "./components/counter";

export default class App extends Component {
  render() {
    return (
      <div className = "App">
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    );
  }
}
