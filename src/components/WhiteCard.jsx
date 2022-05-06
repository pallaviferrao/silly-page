import React from "react";
import "./whitecard.css";
const WhiteCard = (props) => {
  return <div className="card">{props.render()}</div>;
};
export default WhiteCard;
