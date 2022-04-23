import React, { useState } from "react";
import NewGameRoom from "../SocketGame/NewGameRoom.jsx";
const ViewGame = ({ games }) => {
  const [gameData, setGameData] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [playRoom, setPlayRoom] = useState(false);
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
          const createOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          };
          a.push(res1.games[0]);
          fetch("http://localhost:5000/createRoom", createOption);
          setGameData(a);
          setPlayRoom(true);
          console.log("GameData", gameData);
        }
      });
  };
  const StartGame = () => {
    console.log("Sart game", gameData);
  };
  return playRoom ? (
    <NewGameRoom prop={roomName} />
  ) : (
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
