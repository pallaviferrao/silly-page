import React, { useState, useEffect } from "react";
import "./home.css";
import picture from "../../assets/images/Small-Pink.jpg";
import { useNavigate } from "react-router-dom";
import {ImageContext} from "./Home"
import Navigation from "../Navigation";
interface Portfolio {
  text:string;
}
let image;
const Portfolio = ({text }:Portfolio) => {
  console.log("Check")
  const userImage = React.useContext(ImageContext);
  const aboutMe =

    (<div><p>"Hi, I am Pallavi. I am a full stack developer with about 4 years of experience."</p>
    <h3>Email Id: pallaviferrao2004@gmail.com</h3>
    <h3>Number : 7406263791</h3></div>);

  const [displayInfo, setDisplayInfo] = useState(
    text==="home"?<div className="displayArea">
      <h1>Pallavi Ferrao</h1>
      <h2>Software Engineer</h2>
      <h2>pallaviferrao@gmail.com</h2>
    </div>:aboutMe
  );
  return (
    <>
  <div data-test-id="container" className="container">
  <Navigation />

        <div className="row row-overlap centre-horizontal">
          <div className="circle">
            <img src={userImage} alt="profile picture"></img>
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
