import "./games.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import WhiteCard from "../WhiteCard";
import Card from "../Card/Card";
import image from "../../assets/images/cardimage.jpg";
import Navigation from "../Navigation";

const Games = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/customGame");
  };
  const handleClickMagic = () => {
    navigate("/magicRecipe");
  };
  const handleClickTodo =()=>{
    navigate("/todo")
  }
  const handleMemoryGame =()=>{
    window.open("https://memory-game-pallaviferrao.netlify.app/");
   // navigate("/memoryGame")
  }
  const handlePokemonGame =()=>{
    window.open("https://pokedex-pallaviferrao.netlify.app/");
  }
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
                  title="Memory Game"
                  description="Match Pokemons with their pairs"
                  buttonTitle="Play game"
                  handleClick={handleMemoryGame}
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
                  title="Poke Dex Battle"
                  description="Pokemon Power Battle"
                  buttonTitle="Play game"
                  handleClick={handlePokemonGame}
                ></Card>
              );
            }}
          ></WhiteCard>
        </div>
        {/* <div>
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
                  title="Todo List"
                  description="Remember places of things"
                  buttonTitle="Play game"
                  handleClick={handleClickTodo}
                ></Card>
              );
            }}
          ></WhiteCard>
        </div> */}
      </div>
    </>
  );
};
export default Games;
