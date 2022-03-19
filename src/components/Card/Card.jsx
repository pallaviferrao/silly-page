import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div>
      <h1 className="title">{props.title}</h1>
      {/* <div className="image">
        <img src={props.title}></img>
      </div> */}
      <div className="description">{props.description}</div>
      <button className="cardButton" onClick={props.handleClick}>
        {props.buttonTitle}
      </button>
    </div>
  );
};
export default Card;
