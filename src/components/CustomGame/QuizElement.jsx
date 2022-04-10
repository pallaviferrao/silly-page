import React from "react";
const QuizElement = () => {
  return (
    <div>
      <form>
        <div className="upmargin">
          <label>
            Question
            <input type="text" name="question" />
          </label>
        </div>
        <div className="upmargin">
          <label>
            Answer
            <input type="text" name="answer" />
          </label>
        </div>
      </form>
    </div>
  );
};
export default QuizElement;
