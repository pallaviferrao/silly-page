import React from "react";
import "../index.css";
const WhiteCard = (props) => {
  return (
    <div className="card">
      <div>{props.render()}</div>
    </div>
  );
};
export default WhiteCard;
