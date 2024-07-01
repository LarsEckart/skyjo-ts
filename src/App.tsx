import React, {useState} from 'react';

import "./App.css";

function App() {
  const [players, setPlayers] = useState('');
  const startGame = () => {
    console.log("Game started", players);
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
      .then((data) => console.log(data.id));
  };

  return (
    <div className="App">
      <header className="App-header"></header>

      <textarea
        placeholder="Add player names separated by comma"
        value={players}
        onChange={(event) => setPlayers(event.target.value)}
      />
      <button onClick={startGame}>Start game</button>
    </div>
  );
}

export default App;
