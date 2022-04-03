import React, { useEffect, useState } from "react";
import "./customgame.css";
import ProfilePage from "./ProfilePage.jsx";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [login, setLogin] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassWord(e.target.value);
  };
  const handleSubmit = () => {
    let userId = "";
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
          userId = res1.userId;
          gameOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([{ userId: userId, gameName: "firstGame" }]),
          };
        }
      });
  };
  const handleLogin = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ username: username, password: password }]),
    };
    // const gameOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify([
    //     { userId: "JruzLvVLFkWdfPkRQljOKuv2aJg1", gameName: "firstGame" },
    //   ]),
    // };
    // fetch("http://localhost:5000/createGame", gameOptions)
    //   .then((game) => game.json())
    //   .then((game) => console.log(game));
    //}
    fetch("https://apple-tart-39767.herokuapp.com/login", requestOptions)
      .then((res) => res.json())
      .then((res1) => {
        if (res1.success) {
          userId = res1.userId;
          setLogin(true);
        }
      });
  };
  //   useEffect(() => {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ username: { username } }),
  //     };
  //     fetch("http://localhost:4000/", requestOptions).then((res) =>
  //       console.log(res.json())
  //     );
  //     //   .then(
  //     //     (result) => {
  //     //       setIsLoaded(true);
  //     //       setItems(result);
  //     //     },
  //     //     // Note: it's important to handle errors here
  //     //     // instead of a catch() block so that we don't swallow
  //     //     // exceptions from actual bugs in components.
  //     //     (error) => {
  //     //       setIsLoaded(true);
  //     //       setError(error);
  //     //     }
  //     //   );
  //   }, []);
  return login ? (
    <ProfilePage />
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
    </div>
  );
};

export default Login;
