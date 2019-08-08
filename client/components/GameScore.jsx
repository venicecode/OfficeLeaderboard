import React from "react";

const GameScore = props => (
  <div>
    <ul>
      <li>{props.userName}</li>
      <li>{props.score}</li>
    </ul>
  </div>
);

export default GameScore;