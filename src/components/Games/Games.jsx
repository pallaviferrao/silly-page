import "./games.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import WhiteCard from "../WhiteCard.jsx";
import Card from "../Card/Card.jsx";

const Games = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/customGame");
  };
  return (
    <div className="games">
      <div>
        <WhiteCard
          render={() => {
            return (
              <Card
                title="Custom Game"
                description="create your own game"
                buttonTitle="create game"
                handleClick={handleClick}
              ></Card>
            );
          }}
        ></WhiteCard>
      </div>
      <div>
        <WhiteCard
          render={() => {
            return (
              <Card
                title="Memory Game"
                description="Rember places of things"
                buttonTitle="Play game"
                handleClick={handleClick}
              ></Card>
            );
          }}
        ></WhiteCard>
      </div>
    </div>
  );
};
export default Games;
