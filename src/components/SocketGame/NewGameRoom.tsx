import React, { useState } from "react";
import { io } from "socket.io-client";
import GameHome from "./GameHome";
const NewGameRoom = ({ prop }:any) => {
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [yourName, setYourName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const socket = io("http://localhost:5000");
  socket.on("room-joined", (message:string) => {
    setMessage(message);
    setStartGame(true);
  });

  // useEffect(()=>{
  //   socket.emit("create-room", roomName);
  // },[roomName])
  const createRoom = () => {
    setIsAdmin(true);
    fetch("http://localhost:5000/createRoom");
    // setRoomName(roomName);
    socket.emit("create-room", roomName);
  };
  const joinRoom = () => {
    let room = "";
    // fetch("http://localhost:5000/joinRoom");
    // setRoomName(roomName);
    socket.emit("join-room", roomName);
  };
  const sendMessage = () => {
    let room = "";
    // setRoomName(roomName);
    socket.emit("sendMessage", roomName);
  };
  return startGame ? (
    <GameHome
      isAdmin={isAdmin}
      socketId={message}
      socket={socket}
      roomName={roomName}
    />
  ) : (
    <div>
      <h1>Hello Socket {prop}</h1>
      <div className="upmargin">
        <label>
          Enter Room name
          <input
            type="text"
            name="game name"
            onChange={() => setRoomName((event.target as HTMLInputElement).value)}
          />
        </label>
        {message}
      </div>
      <div className="upmargin">
        <label>
          Enter your name
          <input
            type="text"
            name="your name"
            onChange={() => setYourName((event.target as HTMLInputElement).value)}
          />
        </label>
      </div>
      <button onClick={() => joinRoom()}>Join Room</button>
      <button onClick={() => createRoom()}>Create Room</button>
      <button onClick={() => sendMessage()}>Send Room Message</button>
    </div>
  );
};
export default NewGameRoom;
