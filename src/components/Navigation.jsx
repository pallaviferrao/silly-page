import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  let navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/home");
  };
  const handleNavigateGames = () => {
    navigate("/games");
  };
  return (
    <div className="navigation">
      <a onClick={handleNavigateHome}> Home </a>
      <a onClick={handleNavigateGames}> Games </a>
    </div>
  );
};

export default Navigation;
