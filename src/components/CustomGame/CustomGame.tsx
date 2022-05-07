import React,{Suspense} from "react";
import Login from "./Login";
import "./customgame.css";
const CustomGame = () => {
  return <Suspense fallback={<div>Waiting</div>}><Login /></Suspense>;
};
export default CustomGame;
