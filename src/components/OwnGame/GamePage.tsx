import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        },
      ]),
    };
    fetch("https://apple-tart-39767.herokuapp.com/addGame", gameOptions)
      .then((game) => game.json())
      .then((game) => {
        // if (game.success) {
        //   setGameId(game.gameId);
        // }
      });
  };
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
    <div>
      <div>
        <label>
          How many Questions do want?:
          <input
            type="number"
            name="username"
            onChange={() => handleQuestions(event)}
          />
        </label>
      </div>

      <div>
        {question.map((element, index) => {
          return (
            <div>
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
      <button onClick={() => submitQuiz()}>Submit Quiz</button>
      <button onClick={() => goHome()}>Home</button>
    </div>
  );
};
export default GamePage;
