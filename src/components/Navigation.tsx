import React from "react";
import "./navigation.css";
import resume from "../assets/images/PallaviFerrao_Resume.pdf";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  let navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/home");
  };
  const handleNavigateGames = () => {
    navigate("/games");
  };
  const handleNavigateAboutMe = () => {
    navigate("/aboutMe");
  };
  const handleNavigateResume = () => {
    navigate("/resume");
  };
  return (
    <div className="navigation">
      <a onClick={handleNavigateHome}> Home </a>
      <a onClick={handleNavigateGames}> Projects </a>
      {/* <a onClick={handleNavigateAboutMe}> About Me </a> */}
      <a href="https://www.linkedin.com/in/pallavi-ferrao/" target="_blank">
        Linked In
      </a>
      <a href={resume} target="_blank">
        {" "}
        Resume{" "}
      </a>
    </div>
  );
};

export default Navigation;
