import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [players, setPlayers] = useState("");
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
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
      .then((data) => {
        setGameId(data.id);
        console.log(data.id);
      });
  }, []);

  const registerSinglePlayer = async (name: string) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    };
    const registerPlayerUrl =
      "https://play-skyjo-ae5db0018a23.herokuapp.com/api/v1.0/skyjo/games/" +
      gameId +
      "/players";
    fetch(registerPlayerUrl, requestOptions)
      .then((response) => {
        console.log(response);
      });
  }

  const startGame = () => {
    console.log("Game started", players);
    if (gameId) {
      const playerList = players.split(',');
      playerList.forEach((player) => registerSinglePlayer(player));
    }
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
