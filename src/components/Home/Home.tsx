import React, { useState, useEffect, createContext } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./home.css";
// import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import GamePage from "../OwnGame/GamePage";
import Games from "../Games/Games";
import Intro from "./Intro";
import Todo from "../Todo/Todo"
// import CustomGame from "../CustomGame/CustomGame";
import MagicRecipe from "../MagicRecipe/MagicRecipe";
import picture from "../../assets/images/Small-Pink.jpg";
import NewGameRoom from "../SocketGame/NewGameRoom";
import BracketGame from "../BracketGame/BracketGame"
import { lazy,Suspense } from "react";
import { ReactNode } from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink,from } from '@apollo/client';
// import {onError} from '@apollo/client/link/error';
// const errorLink = onError(({graphqlErrors, networkError})=>{
//   if(graphqlErrors){
//     graphqlErrors.map((message:string)=>{
//       alert(`GraphQl Error ${message}`)
//     })
//   }
// })
// const link = from({
//   errorLink,
//   new HttpLink({uri:""})
// })
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link
// })
export const ImageContext = createContext("");
function Home() {
  const [currentSrc, updateSrc] = useState({});
  const [page, setPage] = useState<ReactNode>(<Intro />);
  const CustomGame = lazy(()=> import("../CustomGame/CustomGame"))
  // useEffect(() => {
  //   // start loading original image
  //   const imageToLoad = new Image();
  //   imageToLoad.src = picture;
  //   let effectActive = true;
  //   imageToLoad.onload = () => {
  //     // When image is loaded replace the src and set loading to false
  //     if (effectActive) {
  //       updateSrc(picture);
  //     }
  //   };
  //   return () => {
  //     effectActive = false;
  //   };
  // }, []);
  setTimeout(() => {
    setPage(<Portfolio currentSrc={picture} text="home" />);
  }, 5000);
  return (
    <Suspense fallback={<div>Loading</div>}>
       <ImageContext.Provider value={picture}>
    <Router>
      <Routes>
        <Route path="/" element={page}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/aboutMe" element={<Portfolio currentSrc={currentSrc} text="aboutMe"/>}></Route>
        <Route
          path="/home"
          element={<Portfolio currentSrc={currentSrc}  text="home" />}
        ></Route>
      
        <Route path="/customGame" element={<CustomGame />}></Route>
        <Route path="/magicRecipe" element={<MagicRecipe />}></Route>
        <Route path="/newgame" element={<NewGameRoom prop="Pallavi" />}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/bracketGame" element={<BracketGame/>}></Route>
        <Route path="/test" element={<GamePage gameName="HEllo" gameId="khslh"/>}></Route>
      </Routes>
    </Router>
    </ImageContext.Provider>
    </Suspense>
  );
}

export default Home;