import React, { useState, useEffect, createContext } from "react";
import { Routes, HashRouter as Router, Route } from "react-router-dom";
import "./home.css";
// import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import GamePage from "../OwnGame/GamePage";
import Games from "../Games/Games";
import Intro from "./Intro";
import Todo from "../Todo/Todo"
import Login from "../CustomGame/Login"
// import CustomGame from "../CustomGame/CustomGame";
import MagicRecipe from "../MagicRecipe/MagicRecipe";
import picture from "../../assets/images/Small-Pink.jpg";
import NewGameRoom from "../SocketGame/NewGameRoom";
import BracketGame from "../BracketGame/BracketGame"
import { lazy,Suspense } from "react";
import CreateGame from "../CustomGame/CreateGame"
import { ReactNode } from "react";
import MemoryGame from "../MemoryGame/MemoryGame"
export const ImageContext = createContext("");
export const UserContext = createContext("");
function Home() {

  // const userDetails = React.useContext(UserContext);
  const [page, setPage] = useState<ReactNode>(<Intro />);
  const [userId, setUserId] = useState("");
  const CustomGame = lazy(()=> import("../CustomGame/CustomGame"))
  useEffect(() => {
  setTimeout(() => {
    setPage(<Portfolio text="home" />);
  }, 5000);
},[])
const handleUserId =(val:any)=>{
  setUserId(val);
}
  return (
    <Suspense fallback={<div>Loading</div>}>
       <ImageContext.Provider value={picture}>
       <UserContext.Provider value={userId}>
    <Router>
      <Routes>
        <Route path="/" element={page}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/aboutMe" element={<Portfolio text="aboutMe"/>}></Route>
        <Route
          path="/home"
          element={<Portfolio   text="home" />}
        ></Route>
       
      <Route path="/createGame" element={<CreateGame/>}></Route>
   
      <Route path="/customGame" element={<Login addUserContent={(val:any)=>handleUserId(val)}/>}></Route>
        
        <Route path="/magicRecipe" element={<MagicRecipe />}></Route>
        <Route path="/memoryGame" element={<MemoryGame />}></Route>
        <Route path="/newgame" element={<NewGameRoom prop="Pallavi" />}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/bracketGame" element={<BracketGame/>}></Route>
        <Route path="/test" element={<GamePage gameName="HEllo" gameId="khslh"/>}></Route>
      </Routes>
    </Router>
    </UserContext.Provider>
    </ImageContext.Provider>
    </Suspense>
  );
}

export default Home;