import React, { useState, useEffect } from "react";
import GameHome from "../SocketGame/GameHome";
import { UserContext } from "../Home/Home";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");


const ViewGame = () => {
  const userDetails = React.useContext(UserContext);
  const [games, setGames] = useState([]);
  useEffect(() => {
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ userId: userDetails }]),
    };

    // https://apple-tart-39767.herokuapp.com/
    fetch("http://localhost:5000/getGames", gameOptions)
      .then((response) => response.json())
      .then((res1) => {
        console.log(res1);
        if (res1.success) {
          let arr = res1.games
          setGames(arr);
        }
      });
  },[]);
  const [gameData, setGameData] = useState([]);
  const [roomName, setRoomName] = useState("Pallu");
  const [playRoom, setPlayRoom] = useState(false);
  const [socketId, setSocketId] = useState("");
  socket.on("room-joined", (message:string) => {

    console.log(message)
    setSocketId(message)
    setPlayRoom(true);
  });
  useEffect(() => {
    console.log("GameData");
    console.log(gameData);
  }, [gameData]);
  const AddGame = (id:any) => {
    console.log("View Games");
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ gameId: id }]),
    };
    // https://apple-tart-39767.herokuapp.com/
    fetch("https://apple-tart-39767.herokuapp.com/getGame", gameOptions)
      .then((response) => response.json())
      .then((res1) => {
        console.log(res1);
        if (res1.success) {
          let a = gameData;
          console.log("Games", res1.games[0]);

          a.push(res1.games[0]);
          console.log(a);
          // fetch("http://localhost:5000/createRoom", createOption);
          setGameData(a);
          // setPlayRoom(true);
          console.log("GameData");
        }
      });
  };
  const StartGame = () => {
    const createOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ gameData: gameData }]),
    };
    fetch("http://localhost:5000/createRoom", createOption);
    console.log("Sart game", gameData);
    socket.emit("create-room", roomName);
  };
  return playRoom ? (
      <GameHome
    isAdmin={true}
    socketId={socketId}
    socket={socket}
    roomName={roomName}
  />
  ) : (
    <div className="loginPage">
      {/* <ol>
        {games.map((element) => {
          return <li key={element[0]}>{element[1]}</li>;
        })}
      </ol> */}
      <div>
        {games.map((element:any) => {
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
