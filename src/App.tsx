import React from "react";

import "./App.css";

function App() {
    const startGame = () => {
        console.log("Game started");
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
