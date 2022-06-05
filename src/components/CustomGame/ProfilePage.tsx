import React, { useContext, useEffect, useState } from "react";
import ViewGame from "../OwnGame/ViewGame";
import CreateGame from "./CreateGame";
import { UserContext } from "../Home/Home";
import { useNavigate } from "react-router-dom";
import "./customgame.css";
const ProfilePage = () => {
  let navigate = useNavigate();
  const userDetails = React.useContext(UserContext);
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState("");
  const [viewGames, setViewGames] = useState(false);
  const [comp, setComp] = useState([]);
  const [createGamePage, setCreateGamePage] = useState(false);
  const handleCreatGamePage = () => {
    setCreateGamePage(false);
    navigate("/createGame");
  };
  useEffect(() => {
    console.log(games);
    let res = games.map((element) => {
      return <li key={element[0]}>{element[1]}</li>;
    });
    setComp(res);
  }, [games]);
  const viewGame = () => {
    navigate("/viewGame");
    // console.log("View Games");
    // const gameOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify([{ userId: userDetails }]),
    // };

    // // https://apple-tart-39767.herokuapp.com/
    // fetch("http://localhost:5000/getGames", gameOptions)
    //   .then((response) => response.json())
    //   .then((res1) => {
    //     console.log(res1);
    //     if (res1.success) {
    //       setGames(res1.games);
    //       setViewGames(true);
    //     }
    //   });
  };
  const createGame = () => {
    setCreateGamePage(true);
    navigate("/createGame");
    // const gameOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify([{ userId: userDetails, gameName: gameName }]),
    // };
    // fetch("http://localhost:5000/createGame", gameOptions)
    //   .then((game) => game.json())
    //   .then((game) => {
    //     if (game.success) {
    //       setCreateGamePage(true);
    //     }
    //   });
  };

  // return viewGames ? (
  //   <ViewGame games={games} />):
  // ) : createGamePage ? (
  //   <CreateGame />
  // ) : (
  return  (<div className="loginPage">
      {/* <h1> {userDetails} </h1> */}
      <div className="upmargin">
        <h1>Welcome to your profile</h1>
      </div>
      {/* <form>
        <div className="upmargin">
          <label>
            Game Name:
            <input
              type="text"
              name="game name"
              onChange={() => setGameName(event.target.value)}
            />
          </label>
        </div>
      </form> */}
      <div className="gameLinks">
        <div>
        <a  className="createGame" onClick={() => createGame()}>Create a new Game</a>
        </div>
        <div>
        <a  className="viewGame" onClick={() => viewGame()}>View Your Games</a>
        </div>
      </div>
      {/* <div className="loginPage">
        <ol>{comp}</ol>
      </div> */}
    </div>
  );
};
export default ProfilePage;
