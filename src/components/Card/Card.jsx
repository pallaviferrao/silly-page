import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div className="lolo" onClick={() => props.handleClick()}>
      <h1 className="title">{props.title}</h1>
      {/* <div className="image">
        <img src={props.title}></img>
      </div> */}
      {/* <img src={props.image} width="10px"></img> */}
      <div className="description">{props.description}</div>
      {/* <button className="cardButton" onClick={props.handleClick}>
        {props.buttonTitle}
      </button> */}
    </div>
  );
};
export default Card;
