import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const GameHome = ({ isAdmin, socketId, socket, roomName }:any) => {
  const [message, setMessage] = useState([]);
  const [quiz, setQuiz] = useState([]);
    const jocket = io("http://localhost:5000");
  // socket.on("hello-message", (message:string) => {
  //   console.log(message);
  //   setMessage(message);
  // });
  jocket.on("room-joineds", (quiz:any) => {
    console.log("Room response")
    console.log(JSON.parse(quiz));
    setQuiz(JSON.parse(quiz));
  });
  socket.on("room-joineds", (message:any) => {
    console.log("Room response")
    console.log(JSON.parse(message));
    setQuiz(JSON.parse(message));
  });
  useEffect(()=>{
    console.log(roomName)
    socket.emit("sendMessage",roomName,socketId)
  },[])
  const getScores = () => {
    console.log("GetScore");
    // socket.emit("get-score", roomName);
    socket.emit("sendMessage",roomName,socketId)
  };

  const getRoomData = () => {
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
