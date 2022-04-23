import React, { useState } from "react";
import { io } from "socket.io-client";
const NewGameRoom = ({ prop }) => {
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const socket = io("http://localhost:5000");
  // socket.on("room-joined", (message) => {
  //   console.log(message);
  //   setMessage(message);
  // });
  const joinRoom = () => {
    fetch("http://localhost:5000/redis");
    // setRoomName(roomName);
    // socket.emit("create-room", roomName);
  };
  return (
    <div>
      <h1>Hello Socket {prop}</h1>
      <div className="upmargin">
        <label>
          Enter Room name
          <input
            type="text"
            name="game name"
            onChange={() => setRoomName(event.target.value)}
          />
        </label>
        {message}
      </div>
      <button onClick={() => joinRoom()}>Join Room</button>
    </div>
  );
};
export default NewGameRoom;
