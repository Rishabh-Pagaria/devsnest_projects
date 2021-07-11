import React from "react";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <Card h1="Burger" h2="you have consumed 69 cals today" />
      <Card h1="Pizza" h2="you have consumed 180 cals today" />
      <Card h1="Momos" h2="you have consumed 90 cals today" />
      <Card h1="Manchurian" h2="you have consumed 200 cals today" />
      <Card h1="Tacos" h2="you have consumed 10 cals today" />
    </div>
  );
}

export default App;
