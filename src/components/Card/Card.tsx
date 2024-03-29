import React from "react";
import "./card.css";
import picture from "../../assets/images/gameimage.jpeg";
const Card = (props:any):any => {
  return (
    <div className="lolo" onClick={() => props.handleClick()}>
      <div className="cardImage">
        <img src={picture}></img>
      </div>
      <h1 className="title">{props.title}</h1>

      <div className="description">{props.description}</div>
    </div>
  );
};
export default Card;
