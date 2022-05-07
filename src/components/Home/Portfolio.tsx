import React, { useState, useEffect } from "react";
import "./home.css";
import picture from "../../assets/images/pink.jpg";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation.jsx";
const Portfolio = ({ currentSrc,text }) => {
  const aboutMe =
    (<div><p>"Hi, I am Pallavi. I am a full stack developer with about 4 years of experience."</p>
    <h3>Email Id: pallaviferrao2004@gmail.com</h3>
    <h3>Number : 7406263791</h3></div>);
  // const skills = (
  //   <ol>
  //     <li>Javascript</li>
  //     <li>React</li>
  //     <li>Java</li>
  //     <li>Python</li>
  //   </ol>
  // );

  const [displayInfo, setDisplayInfo] = useState(
    text==="home"?<div className="displayArea">
      <h1>Pallavi Ferrao</h1>
      <h2>Software Developer</h2>
    </div>:aboutMe
  );
  const handleSkills = () => {
    setDisplayInfo(aboutMe);
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
    <div>
   <Navigation />
   </div>
  <div className="container">
     

        <div className="row row-overlap centre-horizontal">
          <div className="circle">
            <img src={picture} alt="profile picture"></img>
          </div>
          <div className="circle circle-round circle-bg">
            <p className="displayArea">{displayInfo}</p>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default Portfolio;
