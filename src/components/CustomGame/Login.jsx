import React, { useState, createContext } from "react";
import "./customgame.css";
import ProfilePage from "./ProfilePage.jsx";
export const UserContext = createContext("");
const Login = () => {
  const [userId, setUserId] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassWord(e.target.value);
  };
  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ username: username, password: password }]),
    };
    fetch("https://apple-tart-39767.herokuapp.com/signup", requestOptions)
      .then((res) => res.json())
      .then((res1) => {
        if (res1.success) {
          setLogin(true);
          setUserId(res1.userId);
          gameOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([{ userId: userId, gameName: "firstGame" }]),
          };
        } else {
          setErrorMessage(res1.errorMessage);
        }
      });
  };
  const handleLogin = () => {
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
          setUserId(res1.userId);
          console.log(userId);
          setLogin(true);
        }
      });
  };
  return login ? (
    <UserContext.Provider value={userId}>
      <ProfilePage />
    </UserContext.Provider>
  ) : (
    <div className="loginPage">
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={() => handleUserName(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={() => handlePassword(event)}
          />
        </label>
      </form>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleSubmit()}>SignUp</button>
      <h1>{errorMessage}</h1>
    </div>
  );
};

export default Login;
