import React from "react";
//Test for react.js
const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
    <h1>welcome to India</h1>
  </div>
);

export default Result;
