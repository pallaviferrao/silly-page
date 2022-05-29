import React,{Suspense} from "react";
import Login from "./Login";
import "./customgame.css";
const CustomGame = (props:any) => {
  return <Login props = {props}/>;
};
export default CustomGame;
