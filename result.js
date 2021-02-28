import React from "react";
//Test for react.js
const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Thank you Play again!
    </button>
  </div>
);

export default Result;
