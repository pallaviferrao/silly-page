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
  const handleClickMagic = () => {
    navigate("/magicRecipe");
  };
  return (
    <div className="games">
      <div>
        <WhiteCard
          render={() => {
            return (
              <Card
                title="Custom Game"
                description="Create your own game"
                buttonTitle="Login"
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
                title="Magic Recipes"
                description="All about cooking"
                buttonTitle="Play game"
                handleClick={handleClickMagic}
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
                description="Remember places of things"
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
