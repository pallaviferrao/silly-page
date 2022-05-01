import React from "react";
import "../index.css";
const WhiteCard = (props) => {
  return <div className="card">{props.render()}</div>;
};
export default WhiteCard;
