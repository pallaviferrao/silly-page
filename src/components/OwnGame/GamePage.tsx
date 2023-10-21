import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
const GamePage = ({ gameName, gameId }:any) => {
  const [question, setQuestion] = useState([]);
  let navigate = useNavigate();
  const AddQuestion = (num:any, event:any) => {
    let arr = question;
    console.log(event);
    console.log(num);
    console.log(arr);
    arr[num][0] = event;
    setQuestion(arr);
    console.log(question);
  };
  const AddAnswer = (num:any, event:any) => {
    let arr = question;
    arr[num][1] = event;
    setQuestion(arr);
    console.log(question);
  };

  const goHome=()=>{
    navigate("/viewGame");
  }
  useEffect(() => {
    console.log("UpdatedQuestion", question);
  }, [question]);
  const submitQuiz = () => {
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        {
          gameId: gameId,
          gameName: gameName,
          questions: question,
          gameType:'Quiz'
        },
      ]),
    };
    fetch("https://customgame.onrender.com/addGame", gameOptions)
      .then((game) => game.json())
      .then((game) => {
        // if (game.success) {
        //   setGameId(game.gameId);
        // }
        navigate("/viewGame");
      });
  };
  const addVoting = ()=>{
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        {
          gameId: gameId,
          gameName: gameName,
          gameType:'Vote'
        },
      ]),
    };
    //https://apple-tart-39767.herokuapp.com/addGame
    //https://customgame.onrender.com/
    fetch("https://customgame.onrender.com/addGame", gameOptions)
      .then((game) => game.json())
      .then((game) => {
        // if (game.success) {
        //   setGameId(game.gameId);
        // }
        navigate("/viewGame");
      });
  }
  const addPoints = ()=>{
    const gameOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        {
          gameId: gameId,
          gameName: gameName,
          gameType:'Points'
        },
      ]),
    }
      //https://customgame.onrender.com/
      fetch("https://customgame.onrender.com/addGame", gameOptions)
      .then((game) => game.json())
      .then((game) => {
        // if (game.success) {
        //   setGameId(game.gameId);
        // }
        navigate("/viewGame");
      });
  }
  const handleQuestions = (num:any) => {
    const size = num.data;
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push([" ", " "]);
    }
    console.log(size);
    setQuestion(arr);
    console.log(question);
  };
  return (
    <div className="gamepage">
      <div>
        <div>
          <br></br>
          Add a section to vote out people.
        </div>
        <button onClick={addVoting}>Add Voting to your game</button>
      </div>
      <div className="extnalPoints">
        <div>
        <br></br>
          Play an external game and add points
        </div>
        <button onClick={addPoints}>Add Points</button>
      </div>
      <div>
        <label>
        <br></br>
          How many Questions do want?:
          <input
            type="number"
            name="username"
            onChange={() => handleQuestions(event)}
          />
        </label>
      </div>

      <div className="questions">
        {question.map((element, index) => {
          return (
            <div >
              <div>
                <label>
                  Question {index + 1}
                  <input
                    type="text"
                    name="questions5"
                    onChange={() => {
                      AddQuestion(index, (event.target as HTMLInputElement).value);
                    }}
                  />
                </label>
              </div>
              <div>
                <label>
                  Answer {index + 1}
                  <input
                    type="text"
                    name="questions6"
                    onChange={() => {
                      AddAnswer(index, (event.target as HTMLInputElement).value);
                    }}
                  />
                </label>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => submitQuiz()}>Submit Quiz</button>
      </div>
      <br/>
      <div>
        <button onClick={() => goHome()}>Home</button>
      </div>
    </div>
  );
};
export default GamePage;
