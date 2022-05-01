import React, { useState, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./home.css";
// import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import GamePage from "../OwnGame/GamePage.jsx";
import Games from "../Games/Games.jsx";
import Intro from "./Intro";
import CustomGame from "../CustomGame/CustomGame.jsx";
import MagicRecipe from "../MagicRecipe/MagicRecipe.jsx";
import picture from "../../assets/images/pink.jpg";
import NewGameRoom from "../SocketGame/NewGameRoom.jsx";
function Home() {
  const [currentSrc, updateSrc] = useState({});
  const [page, setPage] = useState(<Intro />);
  // let navigate = useNavigate();
  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = picture;
    let effectActive = true;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      if (effectActive) {
        updateSrc(picture);
      }
    };
    return () => {
      effectActive = false;
    };
  }, []);
  setTimeout(() => {
    setPage(<Portfolio currentSrc={currentSrc} />);
    // navigate("/home");
  }, 5000);
  //return page;
  return (
    <Router>
      <Routes>
        <Route path="/" element={page}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route
          path="/home"
          element={<Portfolio currentSrc={currentSrc} />}
        ></Route>
        <Route path="/customGame" element={<CustomGame />}></Route>
        <Route path="/magicRecipe" element={<MagicRecipe />}></Route>
        <Route path="/newgame" element={<NewGameRoom prop="Pallavi" />}></Route>
        <Route path="/test" element={<GamePage />}></Route>
      </Routes>
    </Router>
  );
}

export default Home;
