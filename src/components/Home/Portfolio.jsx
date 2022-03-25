import React, { useState } from "react";
import "./home.css";
import Games from "../Games/Games.jsx";
import { useNavigate } from "react-router-dom";
import picture from "../../assets/images/pallavi.png";
const Portfolio = () => {
  var myWorker = new Worker("./Worker.js");
  const aboutMe =
    "Hi, I am Pallavi. I am a full stack developer with about 4 years of experience.";
  const skills = (
    <ol>
      <li>Javascript</li>
      <li>React</li>
      <li>Python</li>
    </ol>
  );
  // myWorker.postMessage();
  // useEffect(() => {
  //   myWorker.onmessage = (e) => {
  //     console.log(e);
  //   };
  // }, [myWorker]);
  const [displayInfo, setDisplayInfo] = useState(
    <div className="displayArea">
      <h1>Software Developer</h1>
    </div>
  );
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
    <div className="container">
      <div className="row">
        <div className="navigation">
          <a className="skills" onClick={handleSkills}>
            Skills
          </a>
          <a className="gamesButton" onClick={handleNavigate}>
            Games
          </a>
          <a className="aboutMe" onClick={handleMe}>
            About me
          </a>
        </div>
      </div>
      <div className="row row-overlap centre-horizontal portfolio">
        <div className="circle">
          <img src={picture} alt="profile picture"></img>
        </div>
        <div className="circle circle-bg">
          <p className="displayArea">{displayInfo}</p>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
