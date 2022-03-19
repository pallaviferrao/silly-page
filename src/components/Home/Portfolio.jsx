import React, { useState } from "react";
import "./home.css";
import Games from "../Games/Games.jsx";
import { useNavigate } from "react-router-dom";
import picture from "../../assets/images/pallavi.png";
const Portfolio = () => {
  const aboutMe =
    "Hi, I am Pallavi. I am a full stack developer with about 4 years of experience.";
  const skills = (
    <ol>
      <li>Javascript</li>
      <li>React</li>
      <li>Python</li>
    </ol>
  );
  const [displayInfo, setDisplayInfo] = useState(<h1>Software Developer</h1>);
  const handleSkills = () => {
    setDisplayInfo(skills);
  };
  const handleNavigate = () => {
    navigate("/games");
  };

  const handleMe = () => {
    setDisplayInfo(aboutMe);
  };
  let navigate = useNavigate();
  return (
    <div className="yellowbackground">
      <div className="middleArea">
        <div>
          <p className="mainArea">{displayInfo}</p>
        </div>
        <div className="picture">
          <img src={picture}></img>
        </div>
      </div>
      <div className="navigation">
        <div className="skills" onClick={handleSkills}>
          Skills
        </div>
        <div className="gamesButton" onClick={handleNavigate}>
          Games
        </div>
        <div className="aboutMe" onClick={handleMe}>
          About me
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
