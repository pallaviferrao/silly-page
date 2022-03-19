import React, { useState, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./home.css";
import Portfolio from "./Portfolio.jsx";
import Games from "../Games/Games.jsx";
import Intro from "./Intro.jsx";
function Home() {
  const [page, setPage] = useState(<Intro />);
  setTimeout(() => {
    setPage(<Portfolio />);
  }, 5000);
  //return page;
  return (
    <Router>
      <Routes>
        <Route path="/" element={page}></Route>
        <Route path="/games" element={<Games />}></Route>
      </Routes>
    </Router>
  );
}

export default Home;
