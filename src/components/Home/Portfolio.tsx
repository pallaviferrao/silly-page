import React, { useState, useEffect } from "react";
import "./home.css";
import picture from "../../assets/images/pink.jpg";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation.jsx";
const Portfolio = ({ currentSrc }) => {
  const aboutMe =
    (<p>"Hi, I am Pallavi. I am a full stack developer with about 4 years of experience."</p>);
  const skills = (
    <ol>
      <li>Javascript</li>
      <li>React</li>
      <li>Java</li>
      <li>Python</li>
    </ol>
  );
  const [displayInfo, setDisplayInfo] = useState(
    <div className="displayArea">
      <h1>Pallavi Ferrao</h1>
      <h2>Software Developer</h2>
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
    <>
      {/* <Navigation /> */} <Navigation />
      <div className="container">
        <div className="row row-overlap centre-horizontal portfolio">
          <div className="circle">
            <img src={picture} alt="profile picture"></img>
          </div>
          <div className="circle circle-bg">
            <p className="displayArea">{displayInfo}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
