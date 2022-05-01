import React, { useState } from "react";
import "./home.css";
let i = 0;
const Intro = () => {
  const [name, setName] = useState("");
  const myName = "Pallavi Ferrao";

  if (i < myName.length) {
    let nn = name + myName.charAt(i);
    setTimeout(() => {
      i++;
      setName(nn);
    }, 150);
  }
  return <div className="intro"><div className="h1Tag">{name}</div></div>;
};
export default Intro;
