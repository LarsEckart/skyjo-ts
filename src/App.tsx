import React from "react";

import "./App.css";

function App() {
  const startGame = () => {
    console.log("Game started");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(
      "https://play-skyjo-ae5db0018a23.herokuapp.com/api/v1.0/skyjo/games",
      requestOptions,
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <header className="App-header"></header>

      <textarea placeholder="Add player names separated by comma" />
      <button onClick={startGame}>Start game</button>
    </div>
  );
}

export default App;
