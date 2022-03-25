import React, { useState, useEffect } from "react";
import "./home.css";
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
  const [currentSrc, updateSrc] = useState({});

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = picture;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      updateSrc(picture);
    };
  }, []);
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
          <img src={currentSrc} alt="profile picture"></img>
        </div>
        <div className="circle circle-bg">
          <p className="displayArea">{displayInfo}</p>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
