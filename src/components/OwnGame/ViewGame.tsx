import React, { useState, useEffect } from "react";
import GameHome from "../SocketGame/GameHome";
import { UserContext } from "../Home/Home";
import { io } from "socket.io-client";
const socket = io("https://customgame.onrender.com/");

import './create.css'
const ViewGame = () => {
  const userDetails = React.useContext(UserContext);
  const [games, setGames] = useState([]);
  const [roomName,setRoomName] = useState(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5))
  useEffect(() => {
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ userId: userDetails }]),
    };

    // https://apple-tart-39767.herokuapp.com/
    fetch("https://customgame.onrender.com/getGames", gameOptions)
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
  const [gameNames, setGameNames] = useState([]);
  // const [roomName, setRoomName] = useState("Pallu");
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
    fetch("https://customgame.onrender.com/getGame", gameOptions)
      .then((response) => response.json())
      .then((res1) => {
        console.log(res1);
        if (res1.success) {
          let gameNameList = gameNames;
          let a = gameData;
          console.log("Games", res1.games[0]);

          a.push(res1.games[0]);
          gameNameList.push(res1.games[0][1].gameName);
          setGameNames(gameNameList);
          console.log(gameNames)
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
      body: JSON.stringify([{ gameData: gameData,roomName:roomName }]),
    };
    //https://apple-tart-39767.herokuapp.com/createRoom
    fetch("https://customgame.onrender.com/createRoomDb", createOption)
    .then((response) => response.json())
    .then((res1) => {
        console.log(res1)
    });
    // console.log("Sart game", gameData);
    // socket.emit("create-room", roomName);
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
      <div>Login is at ---- https://playcustomgame.netlify.com/ </div>
      <div> Room name- {roomName}</div>
      <div>
        {games.map((element:any) => {
          return (
            <div className="startGameButton">
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
      <div>
      <button className="startGameButton"
        onClick={() => {
          StartGame();
        }}
      >
        Start Game
      </button>
      <div>
        <p>Games Added</p>
        {gameNames.map((name,ind)=>{
          return(<div>{name}</div>)
        })}
        {gameNames}
      </div>
      </div>
    </div>
  );
};
export default ViewGame;
