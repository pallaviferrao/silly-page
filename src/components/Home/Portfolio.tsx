import React, { useState, useEffect } from "react";
import "./home.css";
import picture from "../../assets/images/Super-Optimized-pink.jpg";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
interface Portfolio {
  currentSrc:any;
  text:string;
}
const Portfolio = ({ currentSrc,text }:Portfolio) => {
  const aboutMe =
    (<div><p>"Hi, I am Pallavi. I am a full stack developer with about 4 years of experience."</p>
    <h3>Email Id: pallaviferrao2004@gmail.com</h3>
    <h3>Number : 7406263791</h3></div>);

  const [displayInfo, setDisplayInfo] = useState(
    text==="home"?<div className="displayArea">
      <h1>Pallavi Ferrao</h1>
      <h2>Software Developer</h2>
      <h2>pallaviferrao2004@gmail.com</h2>
    </div>:aboutMe
  );
  return (
    <>
  <div data-test-id="container" className="container">
  <Navigation />

        <div className="row row-overlap centre-horizontal">
          <div className="circle">
            <img src={currentSrc} alt="profile picture"></img>
          </div>
          <div className="circle circle-round circle-bg">
            <p>{displayInfo}</p>
          </div>
        </div>
        
      </div>
     
    </>
  );
};
export default Portfolio;
