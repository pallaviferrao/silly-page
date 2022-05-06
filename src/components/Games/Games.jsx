import "./games.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import WhiteCard from "../WhiteCard.jsx";
import Card from "../Card/Card.jsx";
import image from "../../assets/images/cardimage.jpg";
import Navigation from "../Navigation.jsx";

const Games = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/customGame");
  };
  const handleClickMagic = () => {
    navigate("/magicRecipe");
  };
  return (
    <>
      {" "}
      <Navigation />
      <div className="games">
        <div>
          <WhiteCard
            onClick={() => handleClick()}
            render={() => {
              return (
                <Card
                  title="Custom Game"
                  description="Create your own game"
                  // buttonTitle="Login"
                  image={image}
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
    </>
  );
};
export default Games;
