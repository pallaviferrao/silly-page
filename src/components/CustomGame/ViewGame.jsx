import React, { useState } from "react";
const ViewGame = ({ games }) => {
  const [gameData, setGameData] = useState([]);
  const AddGame = (id) => {
    console.log("View Games");
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ gameId: id }]),
    };

    // https://apple-tart-39767.herokuapp.com/
    fetch("http://localhost:5000/getGame", gameOptions)
      .then((response) => response.json())
      .then((res1) => {
        console.log(res1);
        if (res1.success) {
          let a = gameData;
          console.log("Games", res1.games[0]);
          a.push(res1.games[0]);
          setGameData(a);
          console.log("GameData", gameData);
        }
      });
  };
  const StartGame = () => {
    console.log("Sart game", gameData);
  };
  return (
    <div className="loginPage">
      {/* <ol>
        {games.map((element) => {
          return <li key={element[0]}>{element[1]}</li>;
        })}
      </ol> */}
      <div>
        {games.map((element) => {
          return (
            <div>
              <div>{element[1]}</div>
              <button
                onClick={() => {
                  AddGame(element[0]);
                }}
              >
                Add this game
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          StartGame();
        }}
      >
        Start Game
      </button>
    </div>
  );
};
export default ViewGame;
