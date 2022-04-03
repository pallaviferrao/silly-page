import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./Login.jsx";
import "./customgame.css";
const ProfilePage = () => {
  const userDetails = React.useContext(UserContext);
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState("");
  const [comp, setComp] = useState([]);
  useEffect(() => {
    console.log(games);
    let res = games.map((element) => {
      return <li key={element[0]}>{element[1]}</li>;
    });
    setComp(res);
  }, [games]);
  const viewGame = () => {
    console.log("View Games");
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ userId: userDetails }]),
    };
    fetch("https://apple-tart-39767.herokuapp.com/getGames", gameOptions)
      .then((response) => response.json())
      .then((res1) => {
        console.log(res1);
        if (res1.success) {
          setGames(res1.games);
        }
      });
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
      <div className="upmargin">
        <h1>Welcome to the page</h1>
      </div>
      <form>
        <div className="upmargin">
          <label>
            Game Name:
            <input
              type="text"
              name="gamename"
              onChange={() => setGameName(event.target.value)}
            />
          </label>
        </div>
      </form>
      <div className="upmargin">
        <button onClick={() => createGame()}>Create a new Game</button>
        <button onClick={() => viewGame()}>View You Games</button>
      </div>
      <div className="loginPage">
        <ol>{comp}</ol>
      </div>
    </div>
  );
};
export default ProfilePage;
