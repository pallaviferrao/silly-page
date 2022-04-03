import React, { useContext, useState } from "react";
import { UserContext } from "./Login.jsx";
import "./customgame.css";
const ProfilePage = () => {
  const userDetails = React.useContext(UserContext);
  const [games, setGames] = useState("");
  const [gameName, setGameName] = useState("");
  const viewGame = () => {
    console.log("View Games");
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ userId: userDetails }]),
    };
    fetch("https://apple-tart-39767.herokuapp.com/getGames", gameOptions).then(
      (res) => {
        res.json();
      }
    );
  };
  const createGame = () => {
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ userId: userDetails, gameName: gameName }]),
    };
    fetch("https://apple-tart-39767.herokuapp.com/createGame", gameOptions)
      .then((game) => game.json())
      .then((game) => console.log(game));
  };

  return (
    <div className="loginPage">
      {/* <h1> {userDetails} </h1> */}
      <h1>Hello there</h1>
      <form>
        <label>
          Game Name:
          <input
            type="text"
            name="gamename"
            onChange={() => setGameName(event.target.value)}
          />
        </label>
        <button onClick={() => createGame()}>Create a new Game</button>
      </form>
      <button onClick={() => viewGame()}>View You Games</button>
      <div>{games}</div>
    </div>
  );
};
export default ProfilePage;
