import React, { useState, createContext, DetailedHTMLProps, InputHTMLAttributes } from "react";
// import "./customgame.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import CreateGame  from "./CreateGame";
import { useNavigate } from "react-router-dom";
const Login = (props:any):any => {
  let navigate = useNavigate();
  console.log("Hello")
  const [userId, setUserId] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let user="";
  let pass="";
  const handleUserName = (e:string):void => {
    setUserName(e)
  };
  const handlePassword = (e:string): any => {
    setPassWord(e)
  };
  const handleSubmit = () => { console.log("Login")
  navigate("/signup");
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify([{ username: username, password: password }]),
    // };
    // fetch("https://apple-tart-39767.herokuapp.com/signup", requestOptions)
    //   .then((res) => res.json())
    //   .then((res1) => {
    //     if (res1.success) {
    //       setLogin(true);
    //       setUserId(res1.userId);
    //       // let gameOptions = {
    //       //   method: "POST",
    //       //   headers: { "Content-Type": "application/json" },
    //       //   body: JSON.stringify([{ userId: userId, gameName: "firstGame" }]),
    //       // };
    //     } else {
    //       setErrorMessage(res1.errorMessage);
    //     }
    //   });
  };
  const handleLogin = () => {
    console.log("Login")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ username: username, password: password }]),
    };

    fetch("https://apple-tart-39767.herokuapp.com/login", requestOptions)
      .then((res) => res.json())
      .then((res1) => {
        if (res1.success) {
          console.log(res1);
          props.addUserContent(res1.userId)
          // setUserId(res1.userId);
          console.log(userId);
          setLogin(true);
          navigate("/profilePage")
        }
      });
  };
  // return login? (
  //   <ProfilePage />
  // ) : (
  return (<div className="loginPage">
      <div className="upmargin">
        <h1 className="headingLogin">Login</h1>
      </div>
      <form>
        <div className="upmargin">
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={(e)=>handleUserName((event.target as HTMLInputElement).value)}
            />
          </label>
        </div>
        <div className="upmargin">
          <label>
            Password:
            <input
              type="password"
              name="password"

               onChange={(e)=>handlePassword((event.target as HTMLInputElement).value)}
            />
          </label>
        </div>
      </form>
      <div className="upmargin">
        <button onClick={() => handleLogin()}>Login</button>
        <button onClick={() => handleSubmit()}>Sign Up</button>
      </div>
      {/* <h1>{errorMessage}</h1> */}
    </div>
  )
}

export default Login;
