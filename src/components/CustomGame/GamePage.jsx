import React, { useState } from "react";

const GamePage = ({ gameName, gameId }) => {
  const [question, setQuestion] = useState([
    [" ", " "],
    [" ", " "],
    [" ", " "],
  ]);
  const AddQuestion = (num, event) => {
    let arr = question;
    console.log(event);
    console.log(num);
    console.log(arr);
    arr[num][0] = event;
    setQuestion(arr);
    console.log(question);
  };
  const AddAnswer = (num, event) => {
    let arr = question;
    arr[num][1] = event;
    setQuestion(arr);
    console.log(question);
  };
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
  return (
    <div className="upmargin">
      <div>
        <label>
          Question 1
          <input
            type="text"
            name="questions1"
            onChange={() => {
              AddQuestion(0, event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Answer 1
          <input
            type="text"
            name="questions2"
            onChange={() => {
              AddAnswer(0, event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Question 2
          <input
            type="text"
            name="questions3"
            onChange={() => {
              AddQuestion(1, event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Answer 2
          <input
            type="text"
            name="questions4"
            onChange={() => {
              AddAnswer(1, event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Question 3
          <input
            type="text"
            name="questions5"
            onChange={() => {
              AddQuestion(2, event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Answer 3
          <input
            type="text"
            name="questions6"
            onChange={() => {
              AddAnswer(2, event.target.value);
            }}
          />
        </label>
      </div>
      <button onClick={() => submitQuiz()}>Submit Quiz</button>
    </div>
  );
};
export default GamePage;
