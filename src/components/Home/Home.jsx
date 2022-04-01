import React, { useState, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./home.css";
import Portfolio from "./Portfolio.jsx";
import Games from "../Games/Games.jsx";
import Intro from "./Intro.jsx";
import CustomGame from "../CustomGame/CustomGame.jsx";
import MagicRecipe from "../MagicRecipe/MagicRecipe.jsx";
import picture from "../../assets/images/pallavi.png";
function Home() {
  const [currentSrc, updateSrc] = useState({});
  const [page, setPage] = useState(<Intro />);
  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = picture;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      updateSrc(picture);
    };
  }, []);
  setTimeout(() => {
    setPage(<Portfolio currentSrc={currentSrc} />);
  }, 5000);
  //return page;
  return (
    <Router>
      <Routes>
        <Route path="/" element={page}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/customGame" element={<CustomGame />}></Route>
        <Route path="/magicRecipe" element={<MagicRecipe />}></Route>
      </Routes>
    </Router>
  );
}

export default Home;
