import React from "react";
import "./magic.css";
const MagicRecipe = () => {
  const sendRequest = () => {
    console.log("Sent request");
  };
  return (
    <div className="container">
      Login
      <button onClick={sendRequest}> Submit</button>
    </div>
  );
};
export default MagicRecipe;
