import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Home/Home"
import "./customgame.css";
import GamePage from "../OwnGame/GamePage";
const CreateGame = () => {
  console.log("Create Game PAge")
  const userDetails = React.useContext(UserContext);
  const [gameName, setGameName] = useState("");
  const [gameId, setGameId] = useState("");
  const [gamePage, setGamePage] = useState(false);
  useEffect(() => {
    if (gameId.length > 0) setGamePage(true);
  }, [gameId]);
  const createGame = () => {
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ userId: userDetails, gameName: gameName }]),
    };
    // https://customgame.onrender.com/
    fetch("https://customgame.onrender.com/createGame", gameOptions)
      .then((game) => game.json())
      .then((game) => {
        if (game.success) {
          setGameId(game.gameId);
        }
      });
  };
  return gamePage ? (
    <GamePage gameName={gameName} gameId={gameId} />
  ) : (
    <div className="loginPage">
      <form>
        <div className="upmargin">
          <label>
            Game Name:
            <input
              type="text"
              name="game name"
              onChange={() => setGameName((event.target as HTMLInputElement).value)}
            />
          </label>
        </div>
      </form>
      <div className="upmargin">
        <button onClick={() => createGame()}>Submit</button>
      </div>
    </div>
  );
};
export default CreateGame;
