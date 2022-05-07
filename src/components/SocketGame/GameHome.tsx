import React, { useState } from "react";
import { io } from "socket.io-client";
const GameHome = ({ isAdmin, socketId, socket, roomName }:any) => {
  const [message, setMessage] = useState("");
  //   const socket = io("http://localhost:5000");
  socket.on("hello-message", (message:string) => {
    console.log(message);
    setMessage(message);
  });
  const getScores = () => {
    console.log("GetScore");
    socket.emit("get-score", roomName);
  };
  return (
    <div>
      <div>Welcome {socketId}</div>
      <div>
        {isAdmin && (
          <button
            onClick={() => {
              getScores();
            }}
          >
            Next
          </button>
        )}
      </div>
      <div>{message}</div>
    </div>
  );
};
export default GameHome;
